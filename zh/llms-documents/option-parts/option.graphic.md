# option.graphic

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## elements
- **Type**: `Array`

里面是所有图形元素的集合。

注意：graphic 的标准写法是：

```
{
    graphic: {
        elements: [
            {type: 'rect', ...}, {type: 'circle', ...}, ...
        ]
    }
}
```

但是我们常常可以用简写：

```
{
    graphic: {
        type: 'rect',
        ...
    }
}
```

或者：

```
{
    graphic: [
        {type: 'rect', ...}, {type: 'circle', ...}, ...
    ]
}
```

## elements-group
- **Type**: `Object`

group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。

### elements-group.type
- **Type**: `string`
- **Default**: `group`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-group.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-group.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-group.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-group.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-group.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-group.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-group.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-group.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-group.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-group.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-group.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-group.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-group.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-group.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-group.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-group.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-group.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-group.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-group.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-group.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-group.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-group.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-group.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-group.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-group.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-group.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-group.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-group.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-group.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-group.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-group.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-group.left) 和 [right](option.graphic.md#elements-group.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-group.left) 或 [right](option.graphic.md#elements-group.right)，则 [shape](option.graphic.md#elements-group.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-group.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-group.left) 和 [right](option.graphic.md#elements-group.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-group.left) 或 [right](option.graphic.md#elements-group.right)，则 [shape](option.graphic.md#elements-group.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-group.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-group.top) 和 [bottom](option.graphic.md#elements-group.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-group.top) 或 [bottom](option.graphic.md#elements-group.bottom)，则 [shape](option.graphic.md#elements-group.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-group.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-group.top) 和 [bottom](option.graphic.md#elements-group.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-group.top) 或 [bottom](option.graphic.md#elements-group.bottom)，则 [shape](option.graphic.md#elements-group.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-group.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-group.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-group.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-group.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-group.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-group.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-group.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-group.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-group.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-group.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-group.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-group.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-group.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-group.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-group.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-group.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-group.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-group.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-group.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-group.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-group.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-group.width
- **Type**: `number`
- **Default**: `0`

用于描述此 `group` 的宽。

这个宽只用于给子节点定位。

即便当宽度为零的时候，子节点也可以使用 `left: 'center'` 相对于父节点水平居中。

### elements-group.height
- **Type**: `number`
- **Default**: `0`

用于描述此 `group` 的高。

这个高只用于给子节点定位。

即便当高度为零的时候，子节点也可以使用 `top: 'middle'` 相对于父节点垂直居中。

### elements-group.diffChildrenByName
- **Type**: `boolean`
- **Default**: `false`

在 [自定义系列](option.series-custom.md) 中，当 `diffChildrenByName: true` 时，对于 [renderItem](option.series-custom.md#renderItem) 返回值中的每一个 [group](option.graphic.md#elements-group)，会根据其 [children](option.graphic.md#elements-group.children) 中每个图形元素的 [name](option.graphic.md#elements-polygon.name) 属性进行 "diff"。在这里，"diff" 的意思是，重绘的时候，在已存在的图形元素和新的图形元素之间建立对应关系（依据 `name` 是否相同），从如果数据有更新，能够形成的过渡动画。

但是注意，这会有性能开销。如果数据量较大，不要开启这个功能。

### elements-group.children
- **Type**: `Array`

子节点列表，其中项都是一个图形元素定义。

### elements-image.type
- **Type**: `string`
- **Default**: `image`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-image.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-image.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-image.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-image.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-image.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-image.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-image.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-image.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-image.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-image.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-image.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-image.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-image.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-image.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-image.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-image.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-image.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-image.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-image.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-image.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-image.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-image.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-image.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-image.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-image.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-image.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-image.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-image.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-image.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-image.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-image.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-image.left) 和 [right](option.graphic.md#elements-image.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-image.left) 或 [right](option.graphic.md#elements-image.right)，则 [shape](option.graphic.md#elements-image.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-image.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-image.left) 和 [right](option.graphic.md#elements-image.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-image.left) 或 [right](option.graphic.md#elements-image.right)，则 [shape](option.graphic.md#elements-image.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-image.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-image.top) 和 [bottom](option.graphic.md#elements-image.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-image.top) 或 [bottom](option.graphic.md#elements-image.bottom)，则 [shape](option.graphic.md#elements-image.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-image.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-image.top) 和 [bottom](option.graphic.md#elements-image.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-image.top) 或 [bottom](option.graphic.md#elements-image.bottom)，则 [shape](option.graphic.md#elements-image.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-image.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-image.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-image.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-image.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-image.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-image.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-image.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-image.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-image.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-image.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-image.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-image.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-image.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-image.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-image.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-image.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-image.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-image.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-image.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-image.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-image.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-image.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-image.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-image.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-image.style.image
- **Type**: `string`

图片的内容，可以是图片的 URL，也可以是 [dataURI](https://tools.ietf.org/html/rfc2397).

#### elements-image.style.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-image.style.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-image.style.width
- **Type**: `number`
- **Default**: `0`

图形元素的宽度。

#### elements-image.style.height
- **Type**: `number`
- **Default**: `0`

图形元素的高度。

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-image.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-image.style.stroke
- **Type**: `string`

线条颜色。

#### elements-image.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-image.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-image.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-image.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-image.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-image.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-image.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-image.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-image.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-image.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-image.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-image.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-image.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-image.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-text
- **Type**: `Object`

文本块。

### elements-text.type
- **Type**: `string`
- **Default**: `text`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-text.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-text.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-text.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-text.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-text.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-text.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-text.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-text.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-text.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-text.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-text.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-text.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-text.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-text.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-text.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-text.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-text.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-text.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-text.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-text.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-text.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-text.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-text.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-text.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-text.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-text.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-text.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-text.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-text.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-text.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-text.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-text.left) 和 [right](option.graphic.md#elements-text.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-text.left) 或 [right](option.graphic.md#elements-text.right)，则 [shape](option.graphic.md#elements-text.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-text.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-text.left) 和 [right](option.graphic.md#elements-text.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-text.left) 或 [right](option.graphic.md#elements-text.right)，则 [shape](option.graphic.md#elements-text.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-text.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-text.top) 和 [bottom](option.graphic.md#elements-text.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-text.top) 或 [bottom](option.graphic.md#elements-text.bottom)，则 [shape](option.graphic.md#elements-text.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-text.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-text.top) 和 [bottom](option.graphic.md#elements-text.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-text.top) 或 [bottom](option.graphic.md#elements-text.bottom)，则 [shape](option.graphic.md#elements-text.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-text.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-text.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-text.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-text.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-text.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-text.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-text.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-text.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-text.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-text.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-text.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-text.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-text.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-text.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-text.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-text.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-text.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-text.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-text.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-text.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-text.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-text.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-text.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-text.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-text.style.text
- **Type**: `string`
- **Default**: `''`

文本块文字。可以使用 `\n` 来换行。

#### elements-text.style.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-text.style.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-text.style.font
- **Type**: `string`

字体大小、字体类型、粗细、字体样式。格式参见 [css font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)。

例如：

```
// size | family
font: '2em "STHeiti", sans-serif'

// style | weight | size | family
font: 'italic bolder 16px cursive'

// weight | size | family
font: 'bolder 2em "Microsoft YaHei", sans-serif'
```

#### elements-text.style.textAlign
- **Type**: `string`
- **Default**: `'left'`

水平对齐方式，取值：`'left'`, `'center'`, `'right'`。

如果为 `'left'`，表示文本最左端在 `x` 值上。如果为 `'right'`，表示文本最右端在 `x` 值上。

#### elements-text.style.width
- **Type**: `number`

文本限制宽度，用于提供 [overflow](option.graphic.md#elements-text.style.overflow) 的参考。

#### elements-text.style.overflow
- **Type**: `string`

当文本内容超出 [width](option.graphic.md#elements-text.style.width) 时的文本显示策略，取值：`'break'`, `'breakAll'`, `'truncate'`, `'none'`。

*   `'break'`: 尽可能保证完整的单词不被截断(类似 `CSS` 中的 `word-break: break-word;`)
*   `'breakAll'`: 可在任意字符间断行
*   `'truncate'`: 截断文本屏显示 '...'，可以使用 [ellipsis](option.graphic.md#elements-text.style.ellipsis) 来自定义省略号的显示
*   `'none'`: 不换行

#### elements-text.style.ellipsis
- **Type**: `string`

当 [overflow](option.graphic.md#elements-text.style.overflow) 设置为 `'truncate'` 时生效，默认为 `...`。

#### elements-text.style.textVerticalAlign
- **Type**: `string`

垂直对齐方式，取值：`'top'`, `'middle'`, `'bottom'`。

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-text.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-text.style.stroke
- **Type**: `string`

线条颜色。

#### elements-text.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-text.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-text.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-text.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-text.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-text.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-text.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-text.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-text.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-text.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-text.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-text.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-text.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-text.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-rect
- **Type**: `Object`

矩形。

### elements-rect.type
- **Type**: `string`
- **Default**: `rect`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-rect.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-rect.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-rect.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-rect.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-rect.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-rect.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-rect.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-rect.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-rect.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-rect.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-rect.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-rect.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-rect.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-rect.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-rect.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-rect.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-rect.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-rect.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-rect.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-rect.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-rect.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-rect.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-rect.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-rect.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-rect.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-rect.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-rect.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-rect.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-rect.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-rect.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-rect.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-rect.left) 和 [right](option.graphic.md#elements-rect.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-rect.left) 或 [right](option.graphic.md#elements-rect.right)，则 [shape](option.graphic.md#elements-rect.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-rect.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-rect.left) 和 [right](option.graphic.md#elements-rect.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-rect.left) 或 [right](option.graphic.md#elements-rect.right)，则 [shape](option.graphic.md#elements-rect.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-rect.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-rect.top) 和 [bottom](option.graphic.md#elements-rect.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-rect.top) 或 [bottom](option.graphic.md#elements-rect.bottom)，则 [shape](option.graphic.md#elements-rect.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-rect.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-rect.top) 和 [bottom](option.graphic.md#elements-rect.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-rect.top) 或 [bottom](option.graphic.md#elements-rect.bottom)，则 [shape](option.graphic.md#elements-rect.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-rect.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-rect.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-rect.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-rect.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-rect.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-rect.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-rect.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-rect.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-rect.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-rect.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-rect.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-rect.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-rect.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-rect.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-rect.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-rect.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-rect.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-rect.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-rect.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-rect.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-rect.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-rect.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-rect.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-rect.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-rect.shape.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-rect.shape.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-rect.shape.width
- **Type**: `number`
- **Default**: `0`

图形元素的宽度。

#### elements-rect.shape.height
- **Type**: `number`
- **Default**: `0`

图形元素的高度。

#### elements-rect.shape.r
- **Type**: `Array`

可以用于设置圆角矩形。`r: [r1, r2, r3, r4]`， 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4。

可以缩写，例如：

*   `r` 缩写为 `1` 相当于 `[1, 1, 1, 1]`
*   `r` 缩写为 `[1]` 相当于 `[1, 1, 1, 1]`
*   `r` 缩写为 `[1, 2]` 相当于 `[1, 2, 1, 2]`
*   `r` 缩写为 `[1, 2, 3]1 相当于`\[1, 2, 3, 2\]\`

#### elements-rect.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-rect.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-rect.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-rect.style.stroke
- **Type**: `string`

线条颜色。

#### elements-rect.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-rect.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-rect.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-rect.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-rect.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-rect.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-rect.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-rect.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-rect.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-rect.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-rect.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-rect.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-rect.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-rect.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-circle
- **Type**: `Object`

圆。

### elements-circle.type
- **Type**: `string`
- **Default**: `circle`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-circle.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-circle.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-circle.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-circle.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-circle.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-circle.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-circle.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-circle.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-circle.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-circle.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-circle.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-circle.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-circle.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-circle.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-circle.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-circle.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-circle.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-circle.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-circle.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-circle.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-circle.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-circle.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-circle.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-circle.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-circle.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-circle.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-circle.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-circle.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-circle.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-circle.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-circle.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-circle.left) 和 [right](option.graphic.md#elements-circle.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-circle.left) 或 [right](option.graphic.md#elements-circle.right)，则 [shape](option.graphic.md#elements-circle.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-circle.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-circle.left) 和 [right](option.graphic.md#elements-circle.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-circle.left) 或 [right](option.graphic.md#elements-circle.right)，则 [shape](option.graphic.md#elements-circle.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-circle.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-circle.top) 和 [bottom](option.graphic.md#elements-circle.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-circle.top) 或 [bottom](option.graphic.md#elements-circle.bottom)，则 [shape](option.graphic.md#elements-circle.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-circle.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-circle.top) 和 [bottom](option.graphic.md#elements-circle.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-circle.top) 或 [bottom](option.graphic.md#elements-circle.bottom)，则 [shape](option.graphic.md#elements-circle.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-circle.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-circle.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-circle.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-circle.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-circle.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-circle.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-circle.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-circle.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-circle.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-circle.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-circle.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-circle.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-circle.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-circle.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-circle.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-circle.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-circle.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-circle.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-circle.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-circle.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-circle.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-circle.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-circle.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-circle.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-circle.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-circle.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-circle.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

#### elements-circle.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-circle.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-circle.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-circle.style.stroke
- **Type**: `string`

线条颜色。

#### elements-circle.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-circle.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-circle.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-circle.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-circle.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-circle.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-circle.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-circle.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-circle.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-circle.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-circle.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-circle.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-circle.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-circle.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-ring
- **Type**: `Object`

圆环。

### elements-ring.type
- **Type**: `string`
- **Default**: `ring`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-ring.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-ring.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-ring.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-ring.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-ring.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-ring.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-ring.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-ring.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-ring.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-ring.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-ring.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-ring.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-ring.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-ring.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-ring.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-ring.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-ring.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-ring.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-ring.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-ring.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-ring.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-ring.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-ring.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-ring.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-ring.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-ring.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-ring.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-ring.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-ring.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-ring.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-ring.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-ring.left) 和 [right](option.graphic.md#elements-ring.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-ring.left) 或 [right](option.graphic.md#elements-ring.right)，则 [shape](option.graphic.md#elements-ring.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-ring.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-ring.left) 和 [right](option.graphic.md#elements-ring.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-ring.left) 或 [right](option.graphic.md#elements-ring.right)，则 [shape](option.graphic.md#elements-ring.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-ring.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-ring.top) 和 [bottom](option.graphic.md#elements-ring.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-ring.top) 或 [bottom](option.graphic.md#elements-ring.bottom)，则 [shape](option.graphic.md#elements-ring.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-ring.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-ring.top) 和 [bottom](option.graphic.md#elements-ring.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-ring.top) 或 [bottom](option.graphic.md#elements-ring.bottom)，则 [shape](option.graphic.md#elements-ring.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-ring.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-ring.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-ring.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-ring.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-ring.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-ring.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-ring.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-ring.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-ring.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-ring.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-ring.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-ring.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-ring.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-ring.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-ring.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-ring.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-ring.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-ring.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-ring.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-ring.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-ring.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-ring.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-ring.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-ring.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-ring.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-ring.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-ring.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

#### elements-ring.shape.r0
- **Type**: `number`
- **Default**: `0`

内半径。

#### elements-ring.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-ring.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-ring.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-ring.style.stroke
- **Type**: `string`

线条颜色。

#### elements-ring.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-ring.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-ring.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-ring.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-ring.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-ring.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-ring.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-ring.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-ring.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-ring.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-ring.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-ring.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-ring.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-ring.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-sector
- **Type**: `Object`

扇形。

### elements-sector.type
- **Type**: `string`
- **Default**: `sector`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-sector.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-sector.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-sector.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-sector.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-sector.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-sector.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-sector.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-sector.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-sector.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-sector.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-sector.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-sector.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-sector.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-sector.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-sector.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-sector.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-sector.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-sector.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-sector.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-sector.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-sector.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-sector.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-sector.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-sector.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-sector.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-sector.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-sector.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-sector.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-sector.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-sector.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-sector.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-sector.left) 和 [right](option.graphic.md#elements-sector.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-sector.left) 或 [right](option.graphic.md#elements-sector.right)，则 [shape](option.graphic.md#elements-sector.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-sector.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-sector.left) 和 [right](option.graphic.md#elements-sector.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-sector.left) 或 [right](option.graphic.md#elements-sector.right)，则 [shape](option.graphic.md#elements-sector.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-sector.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-sector.top) 和 [bottom](option.graphic.md#elements-sector.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-sector.top) 或 [bottom](option.graphic.md#elements-sector.bottom)，则 [shape](option.graphic.md#elements-sector.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-sector.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-sector.top) 和 [bottom](option.graphic.md#elements-sector.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-sector.top) 或 [bottom](option.graphic.md#elements-sector.bottom)，则 [shape](option.graphic.md#elements-sector.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-sector.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-sector.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-sector.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-sector.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-sector.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-sector.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-sector.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-sector.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-sector.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-sector.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-sector.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-sector.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-sector.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-sector.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-sector.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-sector.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-sector.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-sector.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-sector.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-sector.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-sector.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-sector.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-sector.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-sector.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-sector.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-sector.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-sector.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

#### elements-sector.shape.r0
- **Type**: `number`
- **Default**: `0`

内半径。

#### elements-sector.shape.cornerRadius
- **Type**: `number|Array`

从 `v5.3.0` 开始支持

扇形的圆角。

*   `cornerRadius: 10`：表示内圆角半径和外圆角半径都是 `10px`。
*   `cornerRadius: [10, 20]`：表示为环形图时，内圆角半径是 `10px`、外圆角半径是 `20px`。
*   `cornerRadius: [5, 10, 15, 20]`：表示内圆角半径分别为 `5px` 和 `10px`，外圆角半径分别为 `15px` 和 `20px`。

#### elements-sector.shape.startAngle
- **Type**: `number`
- **Default**: `0`

开始弧度。

#### elements-sector.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

结束弧度。

#### elements-sector.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

是否顺时针。

#### elements-sector.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-sector.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-sector.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-sector.style.stroke
- **Type**: `string`

线条颜色。

#### elements-sector.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-sector.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-sector.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-sector.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-sector.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-sector.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-sector.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-sector.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-sector.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-sector.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-sector.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-sector.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-sector.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-sector.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-arc
- **Type**: `Object`

圆弧。

### elements-arc.type
- **Type**: `string`
- **Default**: `arc`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-arc.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-arc.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-arc.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-arc.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-arc.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-arc.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-arc.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-arc.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-arc.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-arc.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-arc.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-arc.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-arc.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-arc.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-arc.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-arc.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-arc.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-arc.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-arc.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-arc.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-arc.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-arc.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-arc.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-arc.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-arc.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-arc.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-arc.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-arc.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-arc.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-arc.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-arc.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-arc.left) 和 [right](option.graphic.md#elements-arc.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-arc.left) 或 [right](option.graphic.md#elements-arc.right)，则 [shape](option.graphic.md#elements-arc.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-arc.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-arc.left) 和 [right](option.graphic.md#elements-arc.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-arc.left) 或 [right](option.graphic.md#elements-arc.right)，则 [shape](option.graphic.md#elements-arc.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-arc.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-arc.top) 和 [bottom](option.graphic.md#elements-arc.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-arc.top) 或 [bottom](option.graphic.md#elements-arc.bottom)，则 [shape](option.graphic.md#elements-arc.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-arc.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-arc.top) 和 [bottom](option.graphic.md#elements-arc.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-arc.top) 或 [bottom](option.graphic.md#elements-arc.bottom)，则 [shape](option.graphic.md#elements-arc.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-arc.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-arc.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-arc.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-arc.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-arc.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-arc.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-arc.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-arc.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-arc.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-arc.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-arc.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-arc.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-arc.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-arc.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-arc.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-arc.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-arc.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-arc.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-arc.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-arc.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-arc.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-arc.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-arc.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-arc.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-arc.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

#### elements-arc.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

#### elements-arc.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

#### elements-arc.shape.r0
- **Type**: `number`
- **Default**: `0`

内半径。

#### elements-arc.shape.startAngle
- **Type**: `number`
- **Default**: `0`

开始弧度。

#### elements-arc.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

结束弧度。

#### elements-arc.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

是否顺时针。

#### elements-arc.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-arc.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-arc.style.fill
- **Type**: `string`

填充色。

#### elements-arc.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

线条颜色。

#### elements-arc.style.lineWidth
- **Type**: `number`
- **Default**: `1`

线条宽度。

#### elements-arc.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-arc.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-arc.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-arc.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-arc.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-arc.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-arc.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-arc.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-arc.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-arc.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-arc.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-arc.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-arc.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-polygon
- **Type**: `Object`

多边形。

### elements-polygon.type
- **Type**: `string`
- **Default**: `polygon`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-polygon.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-polygon.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-polygon.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-polygon.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-polygon.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-polygon.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-polygon.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-polygon.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-polygon.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-polygon.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-polygon.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-polygon.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-polygon.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-polygon.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polygon.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polygon.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-polygon.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-polygon.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polygon.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polygon.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-polygon.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-polygon.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polygon.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polygon.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-polygon.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-polygon.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polygon.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polygon.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-polygon.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-polygon.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-polygon.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-polygon.left) 和 [right](option.graphic.md#elements-polygon.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-polygon.left) 或 [right](option.graphic.md#elements-polygon.right)，则 [shape](option.graphic.md#elements-polygon.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-polygon.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-polygon.left) 和 [right](option.graphic.md#elements-polygon.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-polygon.left) 或 [right](option.graphic.md#elements-polygon.right)，则 [shape](option.graphic.md#elements-polygon.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-polygon.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-polygon.top) 和 [bottom](option.graphic.md#elements-polygon.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-polygon.top) 或 [bottom](option.graphic.md#elements-polygon.bottom)，则 [shape](option.graphic.md#elements-polygon.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-polygon.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-polygon.top) 和 [bottom](option.graphic.md#elements-polygon.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-polygon.top) 或 [bottom](option.graphic.md#elements-polygon.bottom)，则 [shape](option.graphic.md#elements-polygon.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-polygon.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-polygon.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-polygon.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-polygon.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-polygon.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-polygon.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-polygon.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-polygon.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-polygon.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-polygon.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-polygon.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-polygon.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-polygon.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-polygon.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-polygon.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-polygon.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-polygon.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-polygon.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-polygon.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-polygon.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-polygon.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-polygon.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-polygon.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-polygon.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-polygon.shape.points
- **Type**: `Array`

点列表，用于定义形状，如 `[[22, 44], [44, 55], [11, 44], ...]`

#### elements-polygon.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

是否平滑曲线。

*   如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 `[0, 1]`。
*   如果为 `'spline'`：表示 Catmull-Rom spline 差值平滑。

#### elements-polygon.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

是否将平滑曲线约束在包围盒中。`smooth` 为 `number`（bezier）时生效。

#### elements-polygon.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-polygon.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-polygon.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-polygon.style.stroke
- **Type**: `string`

线条颜色。

#### elements-polygon.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-polygon.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-polygon.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-polygon.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-polygon.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-polygon.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-polygon.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-polygon.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-polygon.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-polygon.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-polygon.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-polygon.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-polygon.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-polygon.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-polyline
- **Type**: `Object`

折线。

### elements-polyline.type
- **Type**: `string`
- **Default**: `polyline`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-polyline.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-polyline.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-polyline.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-polyline.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-polyline.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-polyline.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-polyline.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-polyline.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-polyline.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-polyline.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-polyline.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-polyline.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-polyline.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-polyline.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polyline.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polyline.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-polyline.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-polyline.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polyline.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polyline.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-polyline.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-polyline.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polyline.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polyline.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-polyline.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-polyline.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-polyline.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-polyline.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-polyline.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-polyline.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-polyline.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-polyline.left) 和 [right](option.graphic.md#elements-polyline.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-polyline.left) 或 [right](option.graphic.md#elements-polyline.right)，则 [shape](option.graphic.md#elements-polyline.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-polyline.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-polyline.left) 和 [right](option.graphic.md#elements-polyline.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-polyline.left) 或 [right](option.graphic.md#elements-polyline.right)，则 [shape](option.graphic.md#elements-polyline.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-polyline.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-polyline.top) 和 [bottom](option.graphic.md#elements-polyline.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-polyline.top) 或 [bottom](option.graphic.md#elements-polyline.bottom)，则 [shape](option.graphic.md#elements-polyline.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-polyline.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-polyline.top) 和 [bottom](option.graphic.md#elements-polyline.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-polyline.top) 或 [bottom](option.graphic.md#elements-polyline.bottom)，则 [shape](option.graphic.md#elements-polyline.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-polyline.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-polyline.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-polyline.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-polyline.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-polyline.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-polyline.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-polyline.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-polyline.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-polyline.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-polyline.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-polyline.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-polyline.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-polyline.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-polyline.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-polyline.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-polyline.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-polyline.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-polyline.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-polyline.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-polyline.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-polyline.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-polyline.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-polyline.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-polyline.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-polyline.shape.points
- **Type**: `Array`

点列表，用于定义形状，如 `[[22, 44], [44, 55], [11, 44], ...]`

#### elements-polyline.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

是否平滑曲线。

*   如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 `[0, 1]`。
*   如果为 `'spline'`：表示 Catmull-Rom spline 差值平滑。

#### elements-polyline.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

是否将平滑曲线约束在包围盒中。`smooth` 为 `number`（bezier）时生效。

#### elements-polyline.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-polyline.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-polyline.style.fill
- **Type**: `string`

填充色。

#### elements-polyline.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

线条颜色。

#### elements-polyline.style.lineWidth
- **Type**: `number`
- **Default**: `5`

线条宽度。

#### elements-polyline.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-polyline.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-polyline.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-polyline.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-polyline.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-polyline.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-polyline.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-polyline.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-polyline.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-polyline.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-polyline.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-polyline.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-polyline.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-line
- **Type**: `Object`

直线。

### elements-line.type
- **Type**: `string`
- **Default**: `line`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-line.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-line.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-line.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-line.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-line.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-line.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-line.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-line.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-line.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-line.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-line.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-line.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-line.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-line.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-line.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-line.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-line.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-line.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-line.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-line.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-line.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-line.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-line.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-line.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-line.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-line.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-line.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-line.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-line.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-line.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-line.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-line.left) 和 [right](option.graphic.md#elements-line.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-line.left) 或 [right](option.graphic.md#elements-line.right)，则 [shape](option.graphic.md#elements-line.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-line.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-line.left) 和 [right](option.graphic.md#elements-line.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-line.left) 或 [right](option.graphic.md#elements-line.right)，则 [shape](option.graphic.md#elements-line.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-line.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-line.top) 和 [bottom](option.graphic.md#elements-line.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-line.top) 或 [bottom](option.graphic.md#elements-line.bottom)，则 [shape](option.graphic.md#elements-line.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-line.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-line.top) 和 [bottom](option.graphic.md#elements-line.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-line.top) 或 [bottom](option.graphic.md#elements-line.bottom)，则 [shape](option.graphic.md#elements-line.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-line.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-line.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-line.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-line.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-line.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-line.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-line.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-line.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-line.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-line.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-line.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-line.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-line.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-line.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-line.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-line.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-line.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-line.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-line.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-line.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-line.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-line.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-line.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-line.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-line.shape.x1
- **Type**: `number`
- **Default**: `0`

开始点的 x 值。

#### elements-line.shape.y1
- **Type**: `number`
- **Default**: `0`

开始点的 y 值。

#### elements-line.shape.x2
- **Type**: `number`
- **Default**: `0`

结束点的 x 值。

#### elements-line.shape.y2
- **Type**: `number`
- **Default**: `0`

结束点的 y 值。

#### elements-line.shape.percent
- **Type**: `number`
- **Default**: `1`

线画到百分之多少就不画了。值的范围：\[0, 1\]。

#### elements-line.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-line.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-line.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-line.style.stroke
- **Type**: `string`

线条颜色。

#### elements-line.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-line.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-line.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-line.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-line.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-line.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-line.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-line.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-line.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-line.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-line.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-line.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-line.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-line.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-compoundPath
- **Type**: `Object`

从 `v6.0.0` 开始支持

多个图形元素并集组成的复合元素。

### elements-compoundPath.type
- **Type**: `string`
- **Default**: `compoundPath`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-compoundPath.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-compoundPath.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-compoundPath.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-compoundPath.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-compoundPath.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-compoundPath.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-compoundPath.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-compoundPath.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-compoundPath.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-compoundPath.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-compoundPath.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-compoundPath.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-compoundPath.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-compoundPath.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-compoundPath.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-compoundPath.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-compoundPath.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-compoundPath.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-compoundPath.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-compoundPath.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-compoundPath.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-compoundPath.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-compoundPath.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-compoundPath.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-compoundPath.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-compoundPath.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-compoundPath.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-compoundPath.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-compoundPath.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-compoundPath.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-compoundPath.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-compoundPath.left) 和 [right](option.graphic.md#elements-compoundPath.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-compoundPath.left) 或 [right](option.graphic.md#elements-compoundPath.right)，则 [shape](option.graphic.md#elements-compoundPath.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-compoundPath.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-compoundPath.left) 和 [right](option.graphic.md#elements-compoundPath.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-compoundPath.left) 或 [right](option.graphic.md#elements-compoundPath.right)，则 [shape](option.graphic.md#elements-compoundPath.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-compoundPath.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-compoundPath.top) 和 [bottom](option.graphic.md#elements-compoundPath.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-compoundPath.top) 或 [bottom](option.graphic.md#elements-compoundPath.bottom)，则 [shape](option.graphic.md#elements-compoundPath.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-compoundPath.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-compoundPath.top) 和 [bottom](option.graphic.md#elements-compoundPath.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-compoundPath.top) 或 [bottom](option.graphic.md#elements-compoundPath.bottom)，则 [shape](option.graphic.md#elements-compoundPath.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-compoundPath.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-compoundPath.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-compoundPath.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-compoundPath.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-compoundPath.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-compoundPath.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-compoundPath.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-compoundPath.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-compoundPath.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-compoundPath.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-compoundPath.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-compoundPath.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-compoundPath.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-compoundPath.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-compoundPath.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-compoundPath.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-compoundPath.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-compoundPath.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-compoundPath.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-compoundPath.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-compoundPath.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-compoundPath.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-compoundPath.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-compoundPath.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-compoundPath.shape.paths
- **Type**: `Array`

图形元素的数组，元素可以是 path/rect/circle/……

#### elements-compoundPath.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-compoundPath.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-compoundPath.style.fill
- **Type**: `string`

填充色。

#### elements-compoundPath.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

线条颜色。

#### elements-compoundPath.style.lineWidth
- **Type**: `number`
- **Default**: `5`

线条宽度。

#### elements-compoundPath.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-compoundPath.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-compoundPath.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-compoundPath.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-compoundPath.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-compoundPath.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-compoundPath.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-compoundPath.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-compoundPath.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-compoundPath.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-compoundPath.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-compoundPath.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-compoundPath.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

## elements-bezierCurve
- **Type**: `Object`

二次或三次贝塞尔曲线。

### elements-bezierCurve.type
- **Type**: `string`
- **Default**: `bezierCurve`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [group](option.graphic.md#elements-group),

### elements-bezierCurve.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

### elements-bezierCurve.$action
- **Type**: `string`
- **Default**: `'merge'`

setOption 时指定本次对该图形元素的操作行为。

可取值：

*   `'merge'`：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。
*   `'replace'`：如果已有元素，删除之，新建元素替代之。
*   `'remove'`：删除元素。

### elements-bezierCurve.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

### elements-bezierCurve.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

### elements-bezierCurve.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

### elements-bezierCurve.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

### elements-bezierCurve.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

### elements-bezierCurve.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

### elements-bezierCurve.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

### elements-bezierCurve.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

### elements-bezierCurve.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

### elements-bezierCurve.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

### elements-bezierCurve.enterAnimation
- **Type**: `Object`

入场动画配置。

#### elements-bezierCurve.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-bezierCurve.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-bezierCurve.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-bezierCurve.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

#### elements-bezierCurve.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-bezierCurve.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-bezierCurve.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-bezierCurve.leaveAnimation
- **Type**: `Object`

退场动画配置。

#### elements-bezierCurve.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-bezierCurve.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-bezierCurve.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

### elements-bezierCurve.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

#### elements-bezierCurve.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

#### elements-bezierCurve.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

#### elements-bezierCurve.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### elements-bezierCurve.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

#### elements-bezierCurve.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

### elements-bezierCurve.left
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-bezierCurve.left) 和 [right](option.graphic.md#elements-bezierCurve.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-bezierCurve.left) 或 [right](option.graphic.md#elements-bezierCurve.right)，则 [shape](option.graphic.md#elements-bezierCurve.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-bezierCurve.right
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的高和此百分比计算出最终值。
*   `'center'`：表示自动居中。

[left](option.graphic.md#elements-bezierCurve.left) 和 [right](option.graphic.md#elements-bezierCurve.right) 只有一个可以生效。

如果指定 [left](option.graphic.md#elements-bezierCurve.left) 或 [right](option.graphic.md#elements-bezierCurve.right)，则 [shape](option.graphic.md#elements-bezierCurve.shape) 里的 `x`、`cx` 等定位属性不再生效。

### elements-bezierCurve.top
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-bezierCurve.top) 和 [bottom](option.graphic.md#elements-bezierCurve.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-bezierCurve.top) 或 [bottom](option.graphic.md#elements-bezierCurve.bottom)，则 [shape](option.graphic.md#elements-bezierCurve.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-bezierCurve.bottom
- **Type**: `number|string`
- **Default**: `undefined`

描述怎么根据父元素进行定位。

『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 `group` 的子元素，父元素就是 `group` 元素。

值的类型可以是：

*   `number`：表示像素值。
*   百分比值：如 '33%'，用父元素的宽和此百分比计算出最终值。
*   `'middle'`：表示自动居中。

[top](option.graphic.md#elements-bezierCurve.top) 和 [bottom](option.graphic.md#elements-bezierCurve.bottom) 只有一个可以生效。

如果指定 [top](option.graphic.md#elements-bezierCurve.top) 或 [bottom](option.graphic.md#elements-bezierCurve.bottom)，则 [shape](option.graphic.md#elements-bezierCurve.shape) 里的 `y`、`cy` 等定位属性不再生效。

### elements-bezierCurve.bounding
- **Type**: `string`
- **Default**: `'all'`

决定此图形元素在定位时，对自身的包围盒计算方式。

参见例子：

可取值：

*   `'all'`：（默认） 表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。 这种方式易于使整体都限制在父元素范围中。
    
*   `'raw'`： 表示仅仅用自身（不包括子节点）的没经过 transform 的包围盒进行定位。 这种方式易于内容超出父元素范围的定位方式。

### elements-bezierCurve.z
- **Type**: `number`
- **Default**: `0`

z 方向的高度，决定层叠关系。

### elements-bezierCurve.zlevel
- **Type**: `number`
- **Default**: `0`

决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。

### elements-bezierCurve.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-bezierCurve.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

### elements-bezierCurve.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

### elements-bezierCurve.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

### elements-bezierCurve.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.graphic.md#elements-text)。

#### elements-bezierCurve.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

#### elements-bezierCurve.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

#### elements-bezierCurve.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

#### elements-bezierCurve.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

#### elements-bezierCurve.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

#### elements-bezierCurve.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

#### elements-bezierCurve.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

#### elements-bezierCurve.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

#### elements-bezierCurve.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

#### elements-bezierCurve.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-bezierCurve.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

#### elements-bezierCurve.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

### elements-bezierCurve.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

### elements-bezierCurve.cursor
- **Type**: `string`
- **Default**: `'pointer'`

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

### elements-bezierCurve.draggable
- **Type**: `boolean|string`
- **Default**: `false`

图形元素是否可以被拖拽。

设置为 `true/false` 以启用/禁用拖拽，也可以设置为 `'horizontal'/'vertical'` 限制只允许水平或垂直方向拖拽。

### elements-bezierCurve.progressive
- **Type**: `boolean`
- **Default**: `false`

是否渐进式渲染。当图形元素过多时才使用。

#### elements-bezierCurve.shape.x1
- **Type**: `number`
- **Default**: `0`

开始点的 x 值。

#### elements-bezierCurve.shape.y1
- **Type**: `number`
- **Default**: `0`

开始点的 y 值。

#### elements-bezierCurve.shape.x2
- **Type**: `number`
- **Default**: `0`

结束点的 x 值。

#### elements-bezierCurve.shape.y2
- **Type**: `number`
- **Default**: `0`

结束点的 y 值。

#### elements-bezierCurve.shape.cpx1
- **Type**: `number`
- **Default**: `0`

控制点 x 值。

#### elements-bezierCurve.shape.cpy1
- **Type**: `number`
- **Default**: `0`

控制点 y 值。

#### elements-bezierCurve.shape.cpx2
- **Type**: `number`

第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线。

#### elements-bezierCurve.shape.cpy2
- **Type**: `number`

第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。

#### elements-bezierCurve.shape.percent
- **Type**: `number`
- **Default**: `1`

画到百分之多少就不画了。值的范围：\[0, 1\]。

#### elements-bezierCurve.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

### elements-bezierCurve.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-bezierCurve.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

#### elements-bezierCurve.style.stroke
- **Type**: `string`

线条颜色。

#### elements-bezierCurve.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

#### elements-bezierCurve.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

#### elements-bezierCurve.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### elements-bezierCurve.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### elements-bezierCurve.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### elements-bezierCurve.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### elements-bezierCurve.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

#### elements-bezierCurve.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

#### elements-bezierCurve.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

#### elements-bezierCurve.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

#### elements-bezierCurve.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

#### elements-bezierCurve.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

### elements-bezierCurve.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

### elements-bezierCurve.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。
