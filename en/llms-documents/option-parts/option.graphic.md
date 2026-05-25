# option.graphic

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## elements
- **Type**: `Array`

A list of all graphic elements.

Note, the standard configuration of graphic component is:

```
{
    graphic: {
        elements: [
            {type: 'rect', ...}, {type: 'circle', ...}, ...
        ]
    }
}
```

But we always use short patterns for convenience:

```
{
    graphic: { // Declare only one graphic element.
        type: 'rect',
        ...
    }
}
```

Or:

```
{
    graphic: [ // Declare multiple graphic elements.
        {type: 'rect', ...}, {type: 'circle', ...}, ...
    ]
}
```

## elements-group
- **Type**: `Object`

`group` is the only type that can contain children, so that a group of elements can be positioned and transformed together.

### elements-group.type
- **Type**: `string`
- **Default**: `group`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-group.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-group.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-group.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-group.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-group.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-group.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-group.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-group.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-group.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-group.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-group.shape), ['`style'`](option.graphic.md#elements-group.style), [`'extra'`](option.graphic.md#elements-group.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-group.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-group.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-group.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-group.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-group.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-group.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-group.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-group.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-group.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-group.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-group.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-group.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-group.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-group.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-group.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-group.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-group.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-group.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-group.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-group.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-group.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-group.left) and [right](option.graphic.md#elements-group.right) can work.

If [left](option.graphic.md#elements-group.left) or [right](option.graphic.md#elements-group.right) is specified, positioning attributes in [shape](option.graphic.md#elements-group.shape) (like `x`, `cx`) will not work.

### elements-group.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-group.left) and [right](option.graphic.md#elements-group.right) can work.

If [left](option.graphic.md#elements-group.left) or [right](option.graphic.md#elements-group.right) is specified, positioning attributes in [shape](option.graphic.md#elements-group.shape) (like `x`, `cx`) will not work.

### elements-group.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-group.top) and [bottom](option.graphic.md#elements-group.bottom) can work.

If [top](option.graphic.md#elements-group.top) or [bottom](option.graphic.md#elements-group.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-group.shape) (like `y`, `cy`) will not work.

### elements-group.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-group.top) and [bottom](option.graphic.md#elements-group.bottom) can work.

If [top](option.graphic.md#elements-group.top) or [bottom](option.graphic.md#elements-group.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-group.shape) (like `y`, `cy`) will not work.

### elements-group.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-group.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-group.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-group.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-group.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-group.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-group.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-group.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-group.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-group.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-group.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-group.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-group.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-group.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-group.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-group.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-group.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-group.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-group.width
- **Type**: `number`
- **Default**: `0`

Specify width of this `group`.

This width is only used for the positioning of its children.

When width is `0`, children can also be positioned according to its parent using `left: 'center'`.

### elements-group.height
- **Type**: `number`
- **Default**: `0`

Specify height of this `group`.

This height is only used for the positioning of its children.

When height is `0`, children can also be positioned according to its parent using `top: 'middle'`.

### elements-group.diffChildrenByName
- **Type**: `boolean`
- **Default**: `false`

In [custom series](option.series-custom.md), when `diffChildrenByName` is set as `true`, for each [group](option.graphic.md#elements-group) returned from [renderItem](option.series-custom.md#renderItem), "diff" will be performed to its [children](option.graphic.md#elements-group.children) according to the [name](option.graphic.md#elements-polygon.name) attribute of each graphic elements. Here "diff" means that map the coming graphic elements to the existing graphic elements when repainting according to `name`, which enables the transition animation if data is modified.

But notice that the operation is performance consuming, do not use it for large data amount.

### elements-group.children
- **Type**: `Array`

A list of children, each item is a declaration of an element.

### elements-image.type
- **Type**: `string`
- **Default**: `image`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-image.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-image.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-image.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-image.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-image.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-image.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-image.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-image.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-image.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-image.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-image.shape), ['`style'`](option.graphic.md#elements-image.style), [`'extra'`](option.graphic.md#elements-image.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-image.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-image.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-image.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-image.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-image.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-image.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-image.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-image.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-image.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-image.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-image.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-image.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-image.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-image.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-image.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-image.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-image.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-image.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-image.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-image.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-image.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-image.left) and [right](option.graphic.md#elements-image.right) can work.

If [left](option.graphic.md#elements-image.left) or [right](option.graphic.md#elements-image.right) is specified, positioning attributes in [shape](option.graphic.md#elements-image.shape) (like `x`, `cx`) will not work.

### elements-image.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-image.left) and [right](option.graphic.md#elements-image.right) can work.

If [left](option.graphic.md#elements-image.left) or [right](option.graphic.md#elements-image.right) is specified, positioning attributes in [shape](option.graphic.md#elements-image.shape) (like `x`, `cx`) will not work.

### elements-image.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-image.top) and [bottom](option.graphic.md#elements-image.bottom) can work.

If [top](option.graphic.md#elements-image.top) or [bottom](option.graphic.md#elements-image.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-image.shape) (like `y`, `cy`) will not work.

### elements-image.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-image.top) and [bottom](option.graphic.md#elements-image.bottom) can work.

If [top](option.graphic.md#elements-image.top) or [bottom](option.graphic.md#elements-image.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-image.shape) (like `y`, `cy`) will not work.

### elements-image.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-image.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-image.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-image.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-image.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-image.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-image.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-image.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-image.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-image.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-image.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-image.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-image.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-image.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-image.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-image.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-image.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-image.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-image.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-image.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-image.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-image.style.image
- **Type**: `string`

Specify content of the image, can be a URL, or [dataURI](https://tools.ietf.org/html/rfc2397).

#### elements-image.style.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

#### elements-image.style.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

#### elements-image.style.width
- **Type**: `number`
- **Default**: `0`

The width of the shape of the element.

#### elements-image.style.height
- **Type**: `number`
- **Default**: `0`

The height of the shape of the element.

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-image.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-image.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-image.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-image.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-image.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-image.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-image.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-image.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-image.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-image.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-image.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-image.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-image.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-image.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-image.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-image.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-text
- **Type**: `Object`

Text block.

### elements-text.type
- **Type**: `string`
- **Default**: `text`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-text.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-text.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-text.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-text.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-text.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-text.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-text.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-text.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-text.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-text.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-text.shape), ['`style'`](option.graphic.md#elements-text.style), [`'extra'`](option.graphic.md#elements-text.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-text.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-text.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-text.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-text.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-text.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-text.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-text.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-text.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-text.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-text.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-text.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-text.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-text.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-text.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-text.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-text.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-text.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-text.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-text.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-text.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-text.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-text.left) and [right](option.graphic.md#elements-text.right) can work.

If [left](option.graphic.md#elements-text.left) or [right](option.graphic.md#elements-text.right) is specified, positioning attributes in [shape](option.graphic.md#elements-text.shape) (like `x`, `cx`) will not work.

### elements-text.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-text.left) and [right](option.graphic.md#elements-text.right) can work.

If [left](option.graphic.md#elements-text.left) or [right](option.graphic.md#elements-text.right) is specified, positioning attributes in [shape](option.graphic.md#elements-text.shape) (like `x`, `cx`) will not work.

### elements-text.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-text.top) and [bottom](option.graphic.md#elements-text.bottom) can work.

If [top](option.graphic.md#elements-text.top) or [bottom](option.graphic.md#elements-text.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-text.shape) (like `y`, `cy`) will not work.

### elements-text.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-text.top) and [bottom](option.graphic.md#elements-text.bottom) can work.

If [top](option.graphic.md#elements-text.top) or [bottom](option.graphic.md#elements-text.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-text.shape) (like `y`, `cy`) will not work.

### elements-text.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-text.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-text.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-text.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-text.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-text.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-text.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-text.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-text.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-text.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-text.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-text.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-text.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-text.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-text.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-text.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-text.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-text.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-text.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-text.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-text.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-text.style.text
- **Type**: `string`
- **Default**: `''`

Text content. `\n` can be used as a line break.

#### elements-text.style.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

#### elements-text.style.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

#### elements-text.style.font
- **Type**: `string`

Font size, font type, font weight, font color, follow the form of [css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font).

For example:

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

Text horizontal alignment. Optional values: `'left'`, `'center'`, `'right'`.

`'left'` means the left side of the text block is specified by the [style.x](option.graphic.md#elements-text.style.x), while `'right'` means the right side of the text block is specified by [style.y](option.graphic.md#elements-text.style.y).

#### elements-text.style.width
- **Type**: `number`

Text block width. Used for [overflow](option.graphic.md#elements-text.style.overflow) calculation.

#### elements-text.style.overflow
- **Type**: `string`

When the text content exceeds the [width](option.graphic.md#elements-text.style.width), the text display strategy is: `'break'`, `'breakAll'`, `'truncate'`, `'none'`.

*   `'break'` is to try to ensure that the complete word is not truncated (similar to `CSS` `word-break: break-word;`)
*   `'breakAll'`: can break at any character
*   `'truncate'`: truncate the text to display '...'，you can use [ellipsis](option.graphic.md#elements-text.style.ellipsis) to customize the display of the ellipsis
*   `'none'`: no line break

#### elements-text.style.ellipsis
- **Type**: `string`

When [overflow](option.graphic.md#elements-text.style.overflow) is set to `'truncate'`, the default is `...`.

#### elements-text.style.textVerticalAlign
- **Type**: `string`

Text vertical alignment. Optional values: `'top'`, `'middle'`, `'bottom'`.

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-text.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-text.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-text.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-text.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-text.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-text.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-text.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-text.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-text.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-text.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-text.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-text.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-text.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-text.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-text.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-text.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-rect
- **Type**: `Object`

Rectangle element.

### elements-rect.type
- **Type**: `string`
- **Default**: `rect`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-rect.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-rect.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-rect.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-rect.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-rect.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-rect.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-rect.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-rect.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-rect.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-rect.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-rect.shape), ['`style'`](option.graphic.md#elements-rect.style), [`'extra'`](option.graphic.md#elements-rect.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-rect.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-rect.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-rect.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-rect.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-rect.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-rect.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-rect.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-rect.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-rect.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-rect.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-rect.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-rect.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-rect.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-rect.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-rect.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-rect.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-rect.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-rect.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-rect.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-rect.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-rect.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-rect.left) and [right](option.graphic.md#elements-rect.right) can work.

If [left](option.graphic.md#elements-rect.left) or [right](option.graphic.md#elements-rect.right) is specified, positioning attributes in [shape](option.graphic.md#elements-rect.shape) (like `x`, `cx`) will not work.

### elements-rect.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-rect.left) and [right](option.graphic.md#elements-rect.right) can work.

If [left](option.graphic.md#elements-rect.left) or [right](option.graphic.md#elements-rect.right) is specified, positioning attributes in [shape](option.graphic.md#elements-rect.shape) (like `x`, `cx`) will not work.

### elements-rect.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-rect.top) and [bottom](option.graphic.md#elements-rect.bottom) can work.

If [top](option.graphic.md#elements-rect.top) or [bottom](option.graphic.md#elements-rect.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-rect.shape) (like `y`, `cy`) will not work.

### elements-rect.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-rect.top) and [bottom](option.graphic.md#elements-rect.bottom) can work.

If [top](option.graphic.md#elements-rect.top) or [bottom](option.graphic.md#elements-rect.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-rect.shape) (like `y`, `cy`) will not work.

### elements-rect.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-rect.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-rect.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-rect.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-rect.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-rect.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-rect.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-rect.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-rect.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-rect.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-rect.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-rect.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-rect.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-rect.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-rect.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-rect.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-rect.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-rect.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-rect.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-rect.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-rect.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-rect.shape.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

#### elements-rect.shape.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

#### elements-rect.shape.width
- **Type**: `number`
- **Default**: `0`

The width of the shape of the element.

#### elements-rect.shape.height
- **Type**: `number`
- **Default**: `0`

The height of the shape of the element.

#### elements-rect.shape.r
- **Type**: `Array`

Specify border radius of the rectangular here. Generally, `r` should be `[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]`, where each item is a number.

Abbreviation is enabled, for example:

*   `r`: `1` means `[1, 1, 1, 1]`
*   `r`: `[1]` means `[1, 1, 1, 1]`
*   `r`: `[1, 2]` means `[1, 2, 1, 2]`
*   `r`: `[1, 2, 3]` means `[1, 2, 3, 2]`

#### elements-rect.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-rect.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-rect.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-rect.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-rect.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-rect.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-rect.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-rect.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-rect.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-rect.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-rect.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-rect.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-rect.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-rect.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-rect.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-rect.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-rect.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-rect.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-circle
- **Type**: `Object`

Circle element.

### elements-circle.type
- **Type**: `string`
- **Default**: `circle`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-circle.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-circle.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-circle.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-circle.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-circle.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-circle.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-circle.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-circle.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-circle.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-circle.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-circle.shape), ['`style'`](option.graphic.md#elements-circle.style), [`'extra'`](option.graphic.md#elements-circle.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-circle.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-circle.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-circle.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-circle.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-circle.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-circle.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-circle.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-circle.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-circle.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-circle.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-circle.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-circle.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-circle.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-circle.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-circle.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-circle.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-circle.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-circle.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-circle.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-circle.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-circle.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-circle.left) and [right](option.graphic.md#elements-circle.right) can work.

If [left](option.graphic.md#elements-circle.left) or [right](option.graphic.md#elements-circle.right) is specified, positioning attributes in [shape](option.graphic.md#elements-circle.shape) (like `x`, `cx`) will not work.

### elements-circle.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-circle.left) and [right](option.graphic.md#elements-circle.right) can work.

If [left](option.graphic.md#elements-circle.left) or [right](option.graphic.md#elements-circle.right) is specified, positioning attributes in [shape](option.graphic.md#elements-circle.shape) (like `x`, `cx`) will not work.

### elements-circle.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-circle.top) and [bottom](option.graphic.md#elements-circle.bottom) can work.

If [top](option.graphic.md#elements-circle.top) or [bottom](option.graphic.md#elements-circle.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-circle.shape) (like `y`, `cy`) will not work.

### elements-circle.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-circle.top) and [bottom](option.graphic.md#elements-circle.bottom) can work.

If [top](option.graphic.md#elements-circle.top) or [bottom](option.graphic.md#elements-circle.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-circle.shape) (like `y`, `cy`) will not work.

### elements-circle.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-circle.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-circle.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-circle.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-circle.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-circle.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-circle.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-circle.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-circle.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-circle.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-circle.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-circle.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-circle.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-circle.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-circle.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-circle.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-circle.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-circle.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-circle.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-circle.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-circle.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-circle.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

#### elements-circle.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

#### elements-circle.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

#### elements-circle.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-circle.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-circle.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-circle.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-circle.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-circle.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-circle.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-circle.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-circle.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-circle.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-circle.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-circle.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-circle.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-circle.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-circle.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-circle.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-circle.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-circle.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-ring
- **Type**: `Object`

Ring element.

### elements-ring.type
- **Type**: `string`
- **Default**: `ring`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-ring.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-ring.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-ring.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-ring.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-ring.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-ring.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-ring.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-ring.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-ring.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-ring.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-ring.shape), ['`style'`](option.graphic.md#elements-ring.style), [`'extra'`](option.graphic.md#elements-ring.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-ring.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-ring.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-ring.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-ring.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-ring.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-ring.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-ring.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-ring.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-ring.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-ring.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-ring.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-ring.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-ring.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-ring.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-ring.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-ring.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-ring.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-ring.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-ring.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-ring.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-ring.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-ring.left) and [right](option.graphic.md#elements-ring.right) can work.

If [left](option.graphic.md#elements-ring.left) or [right](option.graphic.md#elements-ring.right) is specified, positioning attributes in [shape](option.graphic.md#elements-ring.shape) (like `x`, `cx`) will not work.

### elements-ring.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-ring.left) and [right](option.graphic.md#elements-ring.right) can work.

If [left](option.graphic.md#elements-ring.left) or [right](option.graphic.md#elements-ring.right) is specified, positioning attributes in [shape](option.graphic.md#elements-ring.shape) (like `x`, `cx`) will not work.

### elements-ring.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-ring.top) and [bottom](option.graphic.md#elements-ring.bottom) can work.

If [top](option.graphic.md#elements-ring.top) or [bottom](option.graphic.md#elements-ring.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-ring.shape) (like `y`, `cy`) will not work.

### elements-ring.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-ring.top) and [bottom](option.graphic.md#elements-ring.bottom) can work.

If [top](option.graphic.md#elements-ring.top) or [bottom](option.graphic.md#elements-ring.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-ring.shape) (like `y`, `cy`) will not work.

### elements-ring.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-ring.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-ring.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-ring.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-ring.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-ring.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-ring.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-ring.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-ring.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-ring.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-ring.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-ring.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-ring.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-ring.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-ring.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-ring.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-ring.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-ring.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-ring.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-ring.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-ring.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-ring.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

#### elements-ring.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

#### elements-ring.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

#### elements-ring.shape.r0
- **Type**: `number`
- **Default**: `0`

Inside radius.

#### elements-ring.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-ring.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-ring.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-ring.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-ring.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-ring.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-ring.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-ring.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-ring.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-ring.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-ring.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-ring.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-ring.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-ring.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-ring.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-ring.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-ring.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-ring.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-sector
- **Type**: `Object`

Sector element.

### elements-sector.type
- **Type**: `string`
- **Default**: `sector`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-sector.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-sector.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-sector.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-sector.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-sector.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-sector.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-sector.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-sector.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-sector.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-sector.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-sector.shape), ['`style'`](option.graphic.md#elements-sector.style), [`'extra'`](option.graphic.md#elements-sector.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-sector.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-sector.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-sector.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-sector.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-sector.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-sector.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-sector.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-sector.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-sector.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-sector.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-sector.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-sector.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-sector.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-sector.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-sector.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-sector.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-sector.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-sector.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-sector.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-sector.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-sector.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-sector.left) and [right](option.graphic.md#elements-sector.right) can work.

If [left](option.graphic.md#elements-sector.left) or [right](option.graphic.md#elements-sector.right) is specified, positioning attributes in [shape](option.graphic.md#elements-sector.shape) (like `x`, `cx`) will not work.

### elements-sector.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-sector.left) and [right](option.graphic.md#elements-sector.right) can work.

If [left](option.graphic.md#elements-sector.left) or [right](option.graphic.md#elements-sector.right) is specified, positioning attributes in [shape](option.graphic.md#elements-sector.shape) (like `x`, `cx`) will not work.

### elements-sector.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-sector.top) and [bottom](option.graphic.md#elements-sector.bottom) can work.

If [top](option.graphic.md#elements-sector.top) or [bottom](option.graphic.md#elements-sector.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-sector.shape) (like `y`, `cy`) will not work.

### elements-sector.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-sector.top) and [bottom](option.graphic.md#elements-sector.bottom) can work.

If [top](option.graphic.md#elements-sector.top) or [bottom](option.graphic.md#elements-sector.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-sector.shape) (like `y`, `cy`) will not work.

### elements-sector.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-sector.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-sector.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-sector.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-sector.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-sector.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-sector.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-sector.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-sector.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-sector.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-sector.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-sector.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-sector.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-sector.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-sector.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-sector.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-sector.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-sector.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-sector.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-sector.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-sector.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-sector.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

#### elements-sector.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

#### elements-sector.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

#### elements-sector.shape.r0
- **Type**: `number`
- **Default**: `0`

Inside radius.

#### elements-sector.shape.cornerRadius
- **Type**: `number|Array`

Since `v5.3.0`

The corner radius of the sector.

*   `cornerRadius: 10`: Indicates that both the inner and outer corner radii are 10px.
*   `cornerRadius: [10, 20]`: When applied to a ring chart, the inner corner radius is 10px and the outer corner radius is 20px.
*   `cornerRadius: [5, 10, 15, 20]`: Indicates that the inner corner radii are 5px and 10px, and the outer corner radii are 15px and 20px.

#### elements-sector.shape.startAngle
- **Type**: `number`
- **Default**: `0`

start angle, in radian.

#### elements-sector.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

end angle, in radian.

#### elements-sector.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

Whether draw clockwise.

#### elements-sector.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-sector.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-sector.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-sector.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-sector.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-sector.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-sector.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-sector.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-sector.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-sector.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-sector.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-sector.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-sector.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-sector.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-sector.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-sector.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-sector.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-sector.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-arc
- **Type**: `Object`

Arc element.

### elements-arc.type
- **Type**: `string`
- **Default**: `arc`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-arc.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-arc.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-arc.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-arc.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-arc.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-arc.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-arc.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-arc.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-arc.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-arc.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-arc.shape), ['`style'`](option.graphic.md#elements-arc.style), [`'extra'`](option.graphic.md#elements-arc.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-arc.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-arc.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-arc.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-arc.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-arc.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-arc.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-arc.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-arc.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-arc.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-arc.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-arc.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-arc.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-arc.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-arc.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-arc.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-arc.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-arc.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-arc.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-arc.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-arc.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-arc.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-arc.left) and [right](option.graphic.md#elements-arc.right) can work.

If [left](option.graphic.md#elements-arc.left) or [right](option.graphic.md#elements-arc.right) is specified, positioning attributes in [shape](option.graphic.md#elements-arc.shape) (like `x`, `cx`) will not work.

### elements-arc.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-arc.left) and [right](option.graphic.md#elements-arc.right) can work.

If [left](option.graphic.md#elements-arc.left) or [right](option.graphic.md#elements-arc.right) is specified, positioning attributes in [shape](option.graphic.md#elements-arc.shape) (like `x`, `cx`) will not work.

### elements-arc.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-arc.top) and [bottom](option.graphic.md#elements-arc.bottom) can work.

If [top](option.graphic.md#elements-arc.top) or [bottom](option.graphic.md#elements-arc.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-arc.shape) (like `y`, `cy`) will not work.

### elements-arc.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-arc.top) and [bottom](option.graphic.md#elements-arc.bottom) can work.

If [top](option.graphic.md#elements-arc.top) or [bottom](option.graphic.md#elements-arc.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-arc.shape) (like `y`, `cy`) will not work.

### elements-arc.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-arc.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-arc.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-arc.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-arc.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-arc.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-arc.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-arc.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-arc.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-arc.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-arc.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-arc.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-arc.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-arc.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-arc.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-arc.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-arc.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-arc.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-arc.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-arc.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-arc.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-arc.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

#### elements-arc.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

#### elements-arc.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

#### elements-arc.shape.r0
- **Type**: `number`
- **Default**: `0`

Inside radius.

#### elements-arc.shape.startAngle
- **Type**: `number`
- **Default**: `0`

start angle, in radian.

#### elements-arc.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

end angle, in radian.

#### elements-arc.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

Whether draw clockwise.

#### elements-arc.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-arc.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-arc.style.fill
- **Type**: `string`

Color filled in this element.

#### elements-arc.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

Color of stroke.

#### elements-arc.style.lineWidth
- **Type**: `number`
- **Default**: `1`

Width of stroke.

#### elements-arc.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-arc.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-arc.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-arc.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-arc.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-arc.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-arc.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-arc.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-arc.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-arc.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-arc.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-arc.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-arc.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-polygon
- **Type**: `Object`

Polygon element.

### elements-polygon.type
- **Type**: `string`
- **Default**: `polygon`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-polygon.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-polygon.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-polygon.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-polygon.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-polygon.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-polygon.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-polygon.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-polygon.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-polygon.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-polygon.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-polygon.shape), ['`style'`](option.graphic.md#elements-polygon.style), [`'extra'`](option.graphic.md#elements-polygon.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-polygon.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-polygon.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-polygon.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-polygon.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polygon.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polygon.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-polygon.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-polygon.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polygon.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polygon.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-polygon.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-polygon.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polygon.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polygon.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-polygon.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-polygon.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polygon.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polygon.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-polygon.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-polygon.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-polygon.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-polygon.left) and [right](option.graphic.md#elements-polygon.right) can work.

If [left](option.graphic.md#elements-polygon.left) or [right](option.graphic.md#elements-polygon.right) is specified, positioning attributes in [shape](option.graphic.md#elements-polygon.shape) (like `x`, `cx`) will not work.

### elements-polygon.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-polygon.left) and [right](option.graphic.md#elements-polygon.right) can work.

If [left](option.graphic.md#elements-polygon.left) or [right](option.graphic.md#elements-polygon.right) is specified, positioning attributes in [shape](option.graphic.md#elements-polygon.shape) (like `x`, `cx`) will not work.

### elements-polygon.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-polygon.top) and [bottom](option.graphic.md#elements-polygon.bottom) can work.

If [top](option.graphic.md#elements-polygon.top) or [bottom](option.graphic.md#elements-polygon.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-polygon.shape) (like `y`, `cy`) will not work.

### elements-polygon.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-polygon.top) and [bottom](option.graphic.md#elements-polygon.bottom) can work.

If [top](option.graphic.md#elements-polygon.top) or [bottom](option.graphic.md#elements-polygon.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-polygon.shape) (like `y`, `cy`) will not work.

### elements-polygon.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-polygon.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-polygon.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-polygon.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-polygon.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-polygon.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-polygon.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-polygon.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-polygon.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-polygon.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-polygon.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-polygon.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-polygon.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-polygon.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-polygon.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-polygon.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-polygon.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-polygon.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-polygon.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-polygon.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-polygon.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-polygon.shape.points
- **Type**: `Array`

A list of points, which defines the shape, like `[[22, 44], [44, 55], [11, 44], ...]`.

#### elements-polygon.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

Whether smooth the line.

*   If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of `[0, 1]`.
*   If the value is `'spline'`, Catmull-Rom spline interpolation is used.

#### elements-polygon.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

Whether prevent the smooth process cause the line out of the bounding box.

Only works when `smooth` is `number` (bezier smooth).

#### elements-polygon.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-polygon.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-polygon.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-polygon.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-polygon.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-polygon.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-polygon.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-polygon.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-polygon.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-polygon.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-polygon.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-polygon.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-polygon.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-polygon.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-polygon.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-polygon.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-polygon.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-polygon.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-polyline
- **Type**: `Object`

Polyline element.

### elements-polyline.type
- **Type**: `string`
- **Default**: `polyline`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-polyline.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-polyline.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-polyline.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-polyline.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-polyline.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-polyline.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-polyline.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-polyline.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-polyline.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-polyline.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-polyline.shape), ['`style'`](option.graphic.md#elements-polyline.style), [`'extra'`](option.graphic.md#elements-polyline.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-polyline.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-polyline.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-polyline.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-polyline.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polyline.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polyline.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-polyline.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-polyline.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polyline.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polyline.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-polyline.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-polyline.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polyline.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polyline.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-polyline.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-polyline.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-polyline.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-polyline.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-polyline.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-polyline.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-polyline.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-polyline.left) and [right](option.graphic.md#elements-polyline.right) can work.

If [left](option.graphic.md#elements-polyline.left) or [right](option.graphic.md#elements-polyline.right) is specified, positioning attributes in [shape](option.graphic.md#elements-polyline.shape) (like `x`, `cx`) will not work.

### elements-polyline.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-polyline.left) and [right](option.graphic.md#elements-polyline.right) can work.

If [left](option.graphic.md#elements-polyline.left) or [right](option.graphic.md#elements-polyline.right) is specified, positioning attributes in [shape](option.graphic.md#elements-polyline.shape) (like `x`, `cx`) will not work.

### elements-polyline.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-polyline.top) and [bottom](option.graphic.md#elements-polyline.bottom) can work.

If [top](option.graphic.md#elements-polyline.top) or [bottom](option.graphic.md#elements-polyline.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-polyline.shape) (like `y`, `cy`) will not work.

### elements-polyline.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-polyline.top) and [bottom](option.graphic.md#elements-polyline.bottom) can work.

If [top](option.graphic.md#elements-polyline.top) or [bottom](option.graphic.md#elements-polyline.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-polyline.shape) (like `y`, `cy`) will not work.

### elements-polyline.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-polyline.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-polyline.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-polyline.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-polyline.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-polyline.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-polyline.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-polyline.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-polyline.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-polyline.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-polyline.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-polyline.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-polyline.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-polyline.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-polyline.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-polyline.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-polyline.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-polyline.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-polyline.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-polyline.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-polyline.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-polyline.shape.points
- **Type**: `Array`

A list of points, which defines the shape, like `[[22, 44], [44, 55], [11, 44], ...]`.

#### elements-polyline.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

Whether smooth the line.

*   If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of `[0, 1]`.
*   If the value is `'spline'`, Catmull-Rom spline interpolation is used.

#### elements-polyline.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

Whether prevent the smooth process cause the line out of the bounding box.

Only works when `smooth` is `number` (bezier smooth).

#### elements-polyline.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-polyline.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-polyline.style.fill
- **Type**: `string`

Color filled in this element.

#### elements-polyline.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

Color of stroke.

#### elements-polyline.style.lineWidth
- **Type**: `number`
- **Default**: `5`

Width of stroke.

#### elements-polyline.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-polyline.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-polyline.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-polyline.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-polyline.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-polyline.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-polyline.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-polyline.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-polyline.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-polyline.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-polyline.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-polyline.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-polyline.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-line
- **Type**: `Object`

Line element.

### elements-line.type
- **Type**: `string`
- **Default**: `line`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-line.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-line.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-line.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-line.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-line.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-line.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-line.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-line.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-line.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-line.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-line.shape), ['`style'`](option.graphic.md#elements-line.style), [`'extra'`](option.graphic.md#elements-line.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-line.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-line.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-line.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-line.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-line.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-line.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-line.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-line.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-line.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-line.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-line.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-line.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-line.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-line.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-line.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-line.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-line.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-line.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-line.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-line.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-line.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-line.left) and [right](option.graphic.md#elements-line.right) can work.

If [left](option.graphic.md#elements-line.left) or [right](option.graphic.md#elements-line.right) is specified, positioning attributes in [shape](option.graphic.md#elements-line.shape) (like `x`, `cx`) will not work.

### elements-line.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-line.left) and [right](option.graphic.md#elements-line.right) can work.

If [left](option.graphic.md#elements-line.left) or [right](option.graphic.md#elements-line.right) is specified, positioning attributes in [shape](option.graphic.md#elements-line.shape) (like `x`, `cx`) will not work.

### elements-line.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-line.top) and [bottom](option.graphic.md#elements-line.bottom) can work.

If [top](option.graphic.md#elements-line.top) or [bottom](option.graphic.md#elements-line.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-line.shape) (like `y`, `cy`) will not work.

### elements-line.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-line.top) and [bottom](option.graphic.md#elements-line.bottom) can work.

If [top](option.graphic.md#elements-line.top) or [bottom](option.graphic.md#elements-line.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-line.shape) (like `y`, `cy`) will not work.

### elements-line.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-line.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-line.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-line.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-line.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-line.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-line.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-line.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-line.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-line.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-line.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-line.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-line.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-line.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-line.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-line.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-line.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-line.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-line.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-line.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-line.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-line.shape.x1
- **Type**: `number`
- **Default**: `0`

x value of the start point.

#### elements-line.shape.y1
- **Type**: `number`
- **Default**: `0`

y value of the start point.

#### elements-line.shape.x2
- **Type**: `number`
- **Default**: `0`

x value of the end point.

#### elements-line.shape.y2
- **Type**: `number`
- **Default**: `0`

y value of the end point.

#### elements-line.shape.percent
- **Type**: `number`
- **Default**: `1`

Specify the percentage of drawing, useful in animation.

Value range: \[0, 1\].

#### elements-line.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-line.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-line.style.fill
- **Type**: `string`

Color filled in this element.

#### elements-line.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

Color of stroke.

#### elements-line.style.lineWidth
- **Type**: `number`
- **Default**: `5`

Width of stroke.

#### elements-line.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-line.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-line.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-line.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-line.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-line.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-line.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-line.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-line.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-line.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-line.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-line.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-line.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-bezierCurve
- **Type**: `Object`

Quadratic bezier curve or cubic bezier curve.

### elements-bezierCurve.type
- **Type**: `string`
- **Default**: `bezierCurve`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-bezierCurve.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-bezierCurve.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-bezierCurve.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-bezierCurve.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-bezierCurve.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-bezierCurve.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-bezierCurve.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-bezierCurve.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-bezierCurve.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-bezierCurve.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-bezierCurve.shape), ['`style'`](option.graphic.md#elements-bezierCurve.style), [`'extra'`](option.graphic.md#elements-bezierCurve.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-bezierCurve.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-bezierCurve.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-bezierCurve.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-bezierCurve.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-bezierCurve.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-bezierCurve.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-bezierCurve.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-bezierCurve.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-bezierCurve.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-bezierCurve.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-bezierCurve.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-bezierCurve.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-bezierCurve.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-bezierCurve.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-bezierCurve.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-bezierCurve.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-bezierCurve.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-bezierCurve.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-bezierCurve.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-bezierCurve.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-bezierCurve.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-bezierCurve.left) and [right](option.graphic.md#elements-bezierCurve.right) can work.

If [left](option.graphic.md#elements-bezierCurve.left) or [right](option.graphic.md#elements-bezierCurve.right) is specified, positioning attributes in [shape](option.graphic.md#elements-bezierCurve.shape) (like `x`, `cx`) will not work.

### elements-bezierCurve.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-bezierCurve.left) and [right](option.graphic.md#elements-bezierCurve.right) can work.

If [left](option.graphic.md#elements-bezierCurve.left) or [right](option.graphic.md#elements-bezierCurve.right) is specified, positioning attributes in [shape](option.graphic.md#elements-bezierCurve.shape) (like `x`, `cx`) will not work.

### elements-bezierCurve.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-bezierCurve.top) and [bottom](option.graphic.md#elements-bezierCurve.bottom) can work.

If [top](option.graphic.md#elements-bezierCurve.top) or [bottom](option.graphic.md#elements-bezierCurve.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-bezierCurve.shape) (like `y`, `cy`) will not work.

### elements-bezierCurve.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-bezierCurve.top) and [bottom](option.graphic.md#elements-bezierCurve.bottom) can work.

If [top](option.graphic.md#elements-bezierCurve.top) or [bottom](option.graphic.md#elements-bezierCurve.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-bezierCurve.shape) (like `y`, `cy`) will not work.

### elements-bezierCurve.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-bezierCurve.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-bezierCurve.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-bezierCurve.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-bezierCurve.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-bezierCurve.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-bezierCurve.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-bezierCurve.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-bezierCurve.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-bezierCurve.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-bezierCurve.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-bezierCurve.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-bezierCurve.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-bezierCurve.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-bezierCurve.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-bezierCurve.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-bezierCurve.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-bezierCurve.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-bezierCurve.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-bezierCurve.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-bezierCurve.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-bezierCurve.shape.x1
- **Type**: `number`
- **Default**: `0`

x value of the start point.

#### elements-bezierCurve.shape.y1
- **Type**: `number`
- **Default**: `0`

y value of the start point.

#### elements-bezierCurve.shape.x2
- **Type**: `number`
- **Default**: `0`

x value of the end point.

#### elements-bezierCurve.shape.y2
- **Type**: `number`
- **Default**: `0`

y value of the end point.

#### elements-bezierCurve.shape.cpx1
- **Type**: `number`
- **Default**: `0`

x of control point.

#### elements-bezierCurve.shape.cpy1
- **Type**: `number`
- **Default**: `0`

y of control point.

#### elements-bezierCurve.shape.cpx2
- **Type**: `number`

x of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

#### elements-bezierCurve.shape.cpy2
- **Type**: `number`

y of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

#### elements-bezierCurve.shape.percent
- **Type**: `number`
- **Default**: `1`

Specify the percentage of drawing, useful in animation.

Value range: \[0, 1\].

#### elements-bezierCurve.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-bezierCurve.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-bezierCurve.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-bezierCurve.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-bezierCurve.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-bezierCurve.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-bezierCurve.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-bezierCurve.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-bezierCurve.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-bezierCurve.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-bezierCurve.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-bezierCurve.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-bezierCurve.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-bezierCurve.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-bezierCurve.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-bezierCurve.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-bezierCurve.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-bezierCurve.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

## elements-compoundPath
- **Type**: `Object`

Since `v6.0.0`

The union of multiple elements.

### elements-compoundPath.type
- **Type**: `string`
- **Default**: `compoundPath`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.graphic.md#elements-image), [text](option.graphic.md#elements-text), [circle](option.graphic.md#elements-circle), [sector](option.graphic.md#elements-sector), [ring](option.graphic.md#elements-ring), [polygon](option.graphic.md#elements-polygon), [polyline](option.graphic.md#elements-polyline), [rect](option.graphic.md#elements-rect), [line](option.graphic.md#elements-line), [bezierCurve](option.graphic.md#elements-bezierCurve), [arc](option.graphic.md#elements-arc), [compoundPath](option.graphic.md#elements-compoundPath), [group](option.graphic.md#elements-group),

### elements-compoundPath.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

### elements-compoundPath.$action
- **Type**: `string`
- **Default**: `'merge'`

Specify the operation should be performed to the element when calling `setOption`. Default value is 'merge', other values can be 'replace' or 'remove'.

Optional values:

*   `'merge'`: merge the given option to existing element (if any), otherwise create a new element.
*   `'replace'`: create a new element according to the given option and replace the existing element (if any).
*   `'remove'`: delete the existing element (if any).

### elements-compoundPath.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

### elements-compoundPath.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

### elements-compoundPath.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

### elements-compoundPath.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

### elements-compoundPath.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

### elements-compoundPath.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

### elements-compoundPath.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

### elements-compoundPath.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.graphic.md#elements-compoundPath.shape), ['`style'`](option.graphic.md#elements-compoundPath.style), [`'extra'`](option.graphic.md#elements-compoundPath.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

### elements-compoundPath.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

### elements-compoundPath.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

### elements-compoundPath.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

#### elements-compoundPath.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-compoundPath.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-compoundPath.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-compoundPath.updateAnimation
- **Type**: `Object`

Configurations of update animation.

#### elements-compoundPath.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-compoundPath.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-compoundPath.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-compoundPath.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

#### elements-compoundPath.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-compoundPath.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-compoundPath.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

### elements-compoundPath.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

#### elements-compoundPath.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

#### elements-compoundPath.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

#### elements-compoundPath.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### elements-compoundPath.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

#### elements-compoundPath.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

### elements-compoundPath.left
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-compoundPath.left) and [right](option.graphic.md#elements-compoundPath.right) can work.

If [left](option.graphic.md#elements-compoundPath.left) or [right](option.graphic.md#elements-compoundPath.right) is specified, positioning attributes in [shape](option.graphic.md#elements-compoundPath.shape) (like `x`, `cx`) will not work.

### elements-compoundPath.right
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the height of its parent.
*   `'center'`: means position the element in the middle of according to its parent.

Only one between [left](option.graphic.md#elements-compoundPath.left) and [right](option.graphic.md#elements-compoundPath.right) can work.

If [left](option.graphic.md#elements-compoundPath.left) or [right](option.graphic.md#elements-compoundPath.right) is specified, positioning attributes in [shape](option.graphic.md#elements-compoundPath.shape) (like `x`, `cx`) will not work.

### elements-compoundPath.top
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-compoundPath.top) and [bottom](option.graphic.md#elements-compoundPath.bottom) can work.

If [top](option.graphic.md#elements-compoundPath.top) or [bottom](option.graphic.md#elements-compoundPath.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-compoundPath.shape) (like `y`, `cy`) will not work.

### elements-compoundPath.bottom
- **Type**: `number|string`
- **Default**: `undefined`

Specify how to be positioned in its parent.

When the element is at the top level, the parent is the container of the chart instance. Otherwise, the parent is a `group` element.

Optional values:

*   Pixel value: For example, can be a number `30`, means `30px`.
*   Percent value: For example, can be a string `'33%'`, means the final result should be calculated by this value and the width of its parent.
*   `'middle'`: means position the element in the middle of according to its parent.

Only one between [top](option.graphic.md#elements-compoundPath.top) and [bottom](option.graphic.md#elements-compoundPath.bottom) can work.

If [top](option.graphic.md#elements-compoundPath.top) or [bottom](option.graphic.md#elements-compoundPath.bottom) is specified, positioning attributes in [shape](option.graphic.md#elements-compoundPath.shape) (like `y`, `cy`) will not work.

### elements-compoundPath.bounding
- **Type**: `string`
- **Default**: `'all'`

Used to specify whether the entire transformed element (containing children if is group) is confined in its container.

See sample:

Optional values:

*   `'all'`: (default) Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.
    
*   `'raw'`: Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.

### elements-compoundPath.z
- **Type**: `number`
- **Default**: `0`

z value of the elements, determine the overlap order.

### elements-compoundPath.zlevel
- **Type**: `number`
- **Default**: `0`

Determine which canvas layer this element should be in.

Notice: Multiple canvas layer may affect performance.

### elements-compoundPath.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

### elements-compoundPath.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

### elements-compoundPath.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

### elements-compoundPath.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

### elements-compoundPath.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.graphic.md#elements-text).

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

Rotation of `textContent`. In radian.

#### elements-compoundPath.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

#### elements-compoundPath.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

#### elements-compoundPath.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

#### elements-compoundPath.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

#### elements-compoundPath.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

#### elements-compoundPath.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

#### elements-compoundPath.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

#### elements-compoundPath.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

#### elements-compoundPath.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

### elements-compoundPath.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

### elements-compoundPath.cursor
- **Type**: `string`
- **Default**: `pointer`

The mouse style when mouse hovers over an element, the same as `cursor` property in `CSS`.

### elements-compoundPath.draggable
- **Type**: `boolean|string`
- **Default**: `false`

Whether the element is draggable.

You may set it to be `true/false` to enable/disable dragging, or set it to be `'horizontal'/'vertical'` to make the element only horizontally/vertically draggable.

### elements-compoundPath.progressive
- **Type**: `boolean`
- **Default**: `false`

Whether use progressive render to improve performance. Usually used when number of element is too large.

#### elements-compoundPath.shape.paths
- **Type**: `Array`

Array of elements, each of which can be a path/rect/circle/...

#### elements-compoundPath.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

### elements-compoundPath.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](tutorial.html#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

#### elements-compoundPath.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

#### elements-compoundPath.style.stroke
- **Type**: `string`

Color of stroke.

#### elements-compoundPath.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

#### elements-compoundPath.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

#### elements-compoundPath.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

#### elements-compoundPath.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

#### elements-compoundPath.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

#### elements-compoundPath.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

#### elements-compoundPath.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

#### elements-compoundPath.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

#### elements-compoundPath.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

#### elements-compoundPath.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

#### elements-compoundPath.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

#### elements-compoundPath.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

### elements-compoundPath.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

### elements-compoundPath.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`
