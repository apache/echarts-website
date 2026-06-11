# option.axisPointer

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## show
- **Type**: `boolean`
- **Default**: `false`

默认不显示。但是如果 [tooltip.trigger](option.tooltip.md#trigger) 设置为 `'axis'` 或者 [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) 设置为 `'cross'`，则自动显示 axisPointer。坐标系会自动选择显示显示哪个轴的 axisPointer，也可以使用 [tooltip.axisPointer.axis](option.tooltip.md#axisPointer.axis) 改变这种选择。

## type
- **Type**: `string`
- **Default**: `'line'`

指示器类型。

可选

*   `'line'` 直线指示器
    
*   `'shadow'` 阴影指示器
    
*   `'none'` 无指示器

## snap
- **Type**: `boolean`

坐标轴指示器是否自动吸附到点上。默认自动判断。

这个功能在数值轴和时间轴上比较有意义，可以自动寻找细小的数值点。

## z
- **Type**: `number`

坐标轴指示器的 z 值。控制图形的前后顺序。`z`值小的图形会被`z`值大的图形覆盖。

## label
- **Type**: `Object`

坐标轴指示器的文本标签。

### label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示文本标签。如果 [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) 设置为 `'cross'` 则默认显示标签，否则默认不显示。

### label.precision
- **Type**: `number|string`
- **Default**: `'auto'`

文本标签中数值的小数点精度。默认根据当前轴的值自动判断。也可以指定如 `2` 表示保留两位小数。

### label.formatter
- **Type**: `string|Function`

文本标签文字的格式化器。

如果为 `string`，可以是例如：`formatter: 'some text {value} some text`，其中 `{value}` 会被自动替换为轴的值。

如果为 `function`，可以是例如：

**参数：**

`{Object}` params: 含有：

`{Object}` params.value: 轴当前值，如果 axis.type 为 'category' 时，其值为 axis.data 里的数值。如果 axis.type 为 `'time'`，其值为时间戳。

`{Array.<Object>}` params.seriesData: 一个数组，是当前 axisPointer 最近的点的信息，每项内容为

`{string}` params.axisDimension: 轴的维度名，例如直角坐标系中是 `'x'`、`'y'`，极坐标系中是 `'radius'`、`'angle'`。

`{number}` params.axisIndex: 轴的 index，`0`、`1`、`2`、...

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

```
dataset: {
    source: [
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
}
```

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

```
dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
}
```

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

每项内容还包括轴的信息：

```
{
    axisDim: 'x', // 'x', 'y', 'angle', 'radius', 'single'
    axisId: 'xxx',
    axisName: 'xxx',
    axisIndex: 3,
    axisValue: 121, // 当前 axisPointer 对应的 value。
    axisValueLabel: '文本'
}
```

**返回值：**

显示的 string。

例如：

```
formatter: function (params) {
    // 假设此轴的 type 为 'time'。
    return 'some text' + echarts.format.formatTime(params.value);
}
```

### label.margin
- **Type**: `number`
- **Default**: `3`

label 距离轴的距离。

### label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

### label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

### label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

### label.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

### label.width
- **Type**: `number`

文本显示宽度。

### label.height
- **Type**: `number`

文本显示高度。

### label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

### label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

### label.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

### label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

### label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

### label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

### label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

### label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

### label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

### label.padding
- **Type**: `string|Array`
- **Default**: `[5, 7, 5, 7]`

axisPointer的内边距（内容周围的留白区域），单位为像素 (`px`)。每个方向的默认值为 `5`。支持传入单个数值、双值数组或四值数组来灵活配置。

使用示例：

```
// 同时应用于上下左右四个方向
padding: 5
// [上下, 左右] -> 上下内边距为 5，左右内边距为 10
padding: [5, 10]
// 顺时针方向：[上, 右, 下, 左]
padding: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

### label.backgroundColor
- **Type**: `string`
- **Default**: `'auto'`

文本标签的背景颜色，默认是和 [axis.axisLine.lineStyle.color](option.xAxis.md#axisLine.lineStyle.color) 相同。

### label.borderColor
- **Type**: `string`

文本标签的边框颜色。

### label.borderWidth
- **Type**: `string`
- **Default**: `0`

文本标签的边框宽度。

### label.shadowBlur
- **Type**: `number`
- **Default**: `3`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### label.shadowColor
- **Type**: `Color`
- **Default**: `#aaa`

阴影颜色。支持的格式同`color`。

### label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

### label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

## lineStyle
- **Type**: `Object`

[axisPointer.type](option.tooltip.md#axisPointer.type) 为 `'line'` 时有效。

### lineStyle.color
- **Type**: `Color`
- **Default**: `#555`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

### lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

### lineStyle.type
- **Type**: `string|number|Array`
- **Default**: `solid`

线的类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `dashOffset` 可实现更灵活的虚线效果。

例如：

```
{

type: [5, 10],

dashOffset: 5
}
```

### lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

### lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

### lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

### lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

### lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

### lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

### lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

## shadowStyle
- **Type**: `Object`

[axisPointer.type](option.tooltip.md#axisPointer.type) 为 `'shadow'` 时有效。

### shadowStyle.color
- **Type**: `Color`
- **Default**: `'rgba(150,150,150,0.3)`

填充的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

### shadowStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### shadowStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

### shadowStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

### shadowStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

### shadowStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

## triggerEmphasis
- **Type**: `boolean`
- **Default**: `true`

从 `v5.4.3` 开始支持

是否触发系列强调功能。

## triggerTooltip
- **Type**: `boolean`
- **Default**: `true`

是否触发 tooltip。如果不想触发 tooltip 可以关掉。

## value
- **Type**: `number`

当前的 value。在使用 [axisPointer.handle](xAxisPointer.handle) 时，可以设置此值进行初始值设定，从而决定 axisPointer 的初始位置。

## status
- **Type**: `boolean`

当前的状态，可取值为 `'show'` 和 `'hide'`。

## handle
- **Type**: `Object`

拖拽手柄，适用于触屏的环境。参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=line-tooltip-touch&edit=1&reset=1)。

### handle.show
- **Type**: `boolean`
- **Default**: `false`

当 show 设为 `true` 时开启，这时显示手柄，并且 axisPointer 会一直显示。

### handle.icon
- **Type**: `*`

手柄的图标。

可以通过 `'image://url'` 设置为图片，其中 URL 为图片的链接，或者 `dataURI`。

URL 为图片链接例如：

```
'image://http://example.website/a/b.png'
```

URL 为 `dataURI` 例如：

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

可以通过 `'path://'` 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。可以从 Adobe Illustrator 等工具编辑导出。

例如：

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

参见 [使用图片的例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/axisPointer-handle-image&edit=1&reset=1)

### handle.size
- **Type**: `number|Array`
- **Default**: `45`

手柄的尺寸，可以设置单值，如 `45`，也可以设置为数组：`[width, height]`。

### handle.margin
- **Type**: `number`
- **Default**: `50`

手柄与轴的距离。注意，这是手柄中心点和轴的距离。

### handle.color
- **Type**: `string`
- **Default**: `'#333'`

手柄颜色。

### handle.throttle
- **Type**: `number`
- **Default**: `40`

手柄拖拽时触发视图更新周期，单位毫秒，调大这个数值可以改善性能，但是降低体验。

### handle.shadowBlur
- **Type**: `number`
- **Default**: `3`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### handle.shadowColor
- **Type**: `Color`
- **Default**: `#aaa`

阴影颜色。支持的格式同`color`。

### handle.shadowOffsetX
- **Type**: `number`
- **Default**: `2`

阴影水平方向上的偏移距离。

### handle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

## link
- **Type**: `Array`

不同轴的 axisPointer 可以进行联动，在这里设置。联动表示轴能同步一起活动。轴依据他们的 axisPointer 当前对应的值来联动。

联动的效果可以看这两个例子：[例子A](https://echarts.apache.org/examples/zh/view.html?c=candlestick-brush&edit=1&reset=1)，[例子B](https://echarts.apache.org/examples/zh/view.html?c=scatter-nutrients-matrix&edit=1&reset=1)。

link 是一个数组，其中每一项表示一个 link group，一个 group 中的坐标轴互相联动。例如：

```
link: [
    {
        // 表示所有 xAxisIndex 为 0、3、4 和 yAxisName 为 'someName' 的坐标轴联动。
        xAxisIndex: [0, 3, 4],
        yAxisName: 'someName'
    },
    {
        // 表示左右 xAxisId 为 'aa'、'cc' 以及所有的 angleAxis 联动。
        xAxisId: ['aa', 'cc'],
        angleAxis: 'all'
    },
    ...
]
```

如上所示，每个 link group 中可以用这些方式引用坐标轴：

```
{
    // 以下的 'some' 均表示轴的维度，也就是表示 'x', 'y', 'radius', 'angle', 'single'
    someAxisIndex: [...], // 可以是一个数组或单值或 'all'
    someAxisName: [...],  // 可以是一个数组或单值或 'all'
    someAxisId: [...],    // 可以是一个数组或单值或 'all'
}
```

* * *

**如何联动不同类型（[axis.type](option.xAxis.md#type)）的轴？**

如果 axis 的类型不同，比如 axisA type 为 'category'，axisB type 为 'time'，可以在每个 link group 中写转换函数（mapper）来进行值的转换，例如：

```
link: [{
    xAxisIndex: [0, 1],
    yAxisName: ['yy'],
    mapper: function (sourceVal, sourceAxisInfo, targetAxisInfo) {
        if (sourceAxisInfo.axisName === 'yy') {
            // from timestamp to '2012-02-05'
            return echarts.time.format('yyyy-MM-dd', sourceVal);
        }
        else if (targetAxisInfo.axisName === 'yy') {
            // from '2012-02-05' to date
            return echarts.time.parse(dates[sourceVal]);
        }
        else {
            return sourceVal;
        }
    }
}]
```

mapper 的输入参数：

`{number}` sourceVal

`{Object}` sourceAxisInfo 里面包含 {axisDim, axisId, axisName, axisIndex} 等信息

`{Object}` targetAxisInfo 里面包含 {axisDim, axisId, axisName, axisIndex} 等信息

mapper 的返回值：

`{number}` 转换结果

## triggerOn
- **Type**: `string`
- **Default**: `'mousemove|click'`

提示框触发的条件，可选：

*   `'mousemove'`
    
    鼠标移动时触发。
    
*   `'click'`
    
    鼠标点击时触发。
    
*   `'none'`
    
    不在 `'mousemove'` 或 `'click'` 时触发。
