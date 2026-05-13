# option.tooltip

## show
- **Type**: `boolean`
- **Default**: `true`

Whether to show the tooltip component.

including tooltip floating layer and [axisPointer](option.tooltip.md#axisPointer).

## trigger
- **Type**: `string`
- **Default**: `'item'`

Type of triggering.

Options:

*   `'item'`
    
    Triggered by data item, which is mainly used for charts that don't have a category axis like scatter charts or pie charts.
    
*   `'axis'`
    
    Triggered by axes, which is mainly used for charts that have category axes, like bar charts or line charts.
    
    ECharts 2.x only supports axis trigger for category axis. In ECharts 3, it is supported for all types of axes in [grid](option.grid.md) or [polar](option.polar.md). Also, you may assign axis with [axisPointer.axis](option.tooltip.md#axisPointer.axis).
    
*   `'none'`
    
    Trigger nothing.

## axisPointer
- **Type**: `Object`

Configuration item for axisPointer.

`tooltip.axisPointer` is like syntactic sugar of axisPointer settings on axes (for example, [xAxis.axisPointer](option.xAxis.md#axisPointer) or [angleAxis.axisPointer](option.angleAxis.md#axisPointer)). More detailed features can be configured on `someAxis.axisPointer`. But in common cases, using `tooltip.axisPointer` is more convenient.

> **Notice:** configurations of `tooltip.axisPointer` has lower priority than that of `someAxis.axisPointer`.

* * *

`axisPointer` is a tool for displaying reference line and axis value under mouse pointer.

For example:

In the demo above, [axisPointer.link](option.axisPointer.md#link) is used to link axisPointer from different coordinate systems.

`axisPointer` can also be used on touch device, where user can drag the button to move the reference line and label.

In the cases that more than one axis exist, axisPointer helps to look inside the data.

* * *

> **Notice:** Generally, axisPointers is configured in each axes who need them (for example [xAxis.axisPointer](option.xAxis.md#axisPointer)), or configured in `tooltip` (for example [tooltip.axisPointer](option.tooltip.md#axisPointer)).

> But these configurations can only be configured in global axisPointer: [axisPointer.triggerOn](option.axisPointer.md#triggerOn), [axisPointer.link](option.axisPointer.md#link).

* * *

* * *

**How to display axisPointer:**

In [cartesian (grid)](option.grid.md) and [polar\](~polar) and (single axis](../option.md#single), each axis has its own axisPointer.

Those axisPointer will not be displayed by default, utill configured as follows:

*   Set `someAxis.axisPointer.show` (like [xAxis.axisPointer.show](option.xAxis.md#axisPointer.show)) as `true`. Then axisPointer of this axis will be displayed.
    
*   Set [tooltip.trigger](option.tooltip.md#trigger) as `'axis'`, or set [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) as `'cross'`. Then coordinate system will automatically chose the axes who will display their axisPointers. ([tooltip.axisPointer.axis](option.tooltip.md#axisPointer.axis) can be used to change the choice.) Notice, `axis.axisPointer` will override `tooltip.axisPointer` settings.
    

* * *

**How to display the label of axisPointer:**

The label of axisPointer will not be displayed by default(namely, only reference line will be displayed by default), utill configured as follows:

*   Set `someAxis.axisPointer.label.show` (for example [xAxis.axisPointer.label.show](option.xAxis.md#axisPointer.show)) as `true`. Then the label of the axisPointer will be displayed.
    
*   Set [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) as `'cross'`. Then the label of the crossed axisPointers will be displayed.
    

* * *

**How to configure axisPointer on touch device:**

Set `someAxis.axisPointer.handle.show` (for example [xAxis.axisPointer.handle.show](option.xAxis.md#axisPointer.handle.show) as `true`. Then the button for dragging will be displayed. (This feature is not supported on polar).

**Notice:** If tooltip does not work well in this case, try to set[tooltip.triggerOn](option.tooltip.md#triggerOn) as `'none'` (for the effect: show tooltip when finger holding on the button, and hide tooltip after finger left the button), or set [tooltip.alwaysShowContent](option.tooltip.md#alwaysShowContent) as `true` (then tooltip will always be displayed).

See the [example](https://echarts.apache.org/examples/en/editor.html?c=line-tooltip-touch&edit=1&reset=1).

* * *

**Snap to point**

In value axis and time axis, if [snap](option.xAxis.md#axisPointer.snap) is set as true, axisPointer will snap to point automatically.

* * *

### axisPointer.type
- **Type**: `string`
- **Default**: `'line'`

Indicator type.

Options:

*   `'line'` line indicator.
    
*   `'shadow'` shadow crosshair indicator.
    
*   `'none'` no indicator displayed.
    
*   `'cross'` crosshair indicator, which is actually the shortcut of enable two axisPointers of two orthometric axes.

### axisPointer.axis
- **Type**: `string`
- **Default**: `'auto'`

The coordinate axis, which could be `'x'`, `'y'`, `'radius'`, or `'angle'`. By default, each coordinate system will automatically chose the axes whose will display its axisPointer (category axis or time axis is used by default).

### axisPointer.snap
- **Type**: `boolean`

Whether snap to point automatically. The default value is auto determined.

This feature usually makes sense in value axis and time axis, where tiny points can be seeked automatically.

### axisPointer.z
- **Type**: `number`

z value, which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

### axisPointer.label
- **Type**: `Object`

label of axisPointer

#### axisPointer.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether show label. Label will not show by default. But if [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) is set as `'cross'`, label will be displayed automatically.

#### axisPointer.label.precision
- **Type**: `number|string`
- **Default**: `'auto'`

The precision of value in label. It is auto determined by default. You can also set it as `'2'`, which indicates that two decimal fractions are reserved.

#### axisPointer.label.formatter
- **Type**: `string|Function`

The formatter of label.

If set as `string`, for example it can be: `formatter: 'some text {value} some text`, where `{value}` will be replaced by axis value automatically.

If set as `function`:

**Parameters:**

`{Object}` params: Including fields as follows:

`{Object}` params.value: current value of this axis. If `axis.type` is `'category'`, it is one of the value in `axis.data`. If `axis.type` is `'time'`, it is a timestamp.

`{Array.<Object>}` params.seriesData: An array, containing info of nearest points. Each item is:

`{string}` params.axisDimension: The dimension name of the axis. For example, in catesian it will be `'x'`, `'y'`, and in polar it will be `'radius'`, `'angle'`.

`{number}` params.axisIndex: The index of the axis, for example, `0`,`1`, `2`, ...

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

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

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

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

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

Each item also includes axis information:

```
{
    axisDim: 'x', // 'x', 'y', 'angle', 'radius', 'single'
    axisId: 'xxx',
    axisName: 'xxx',
    axisIndex: 3,
    axisValue: 121, // The current value of axisPointer
    axisValueLabel: 'text of value'
}
```

**Return:**

The string to be displayed.

For example:

```
formatter: function (params) {
    // If axis.type is 'time'
    return 'some text' + echarts.format.formatTime(params.value);
}
```

#### axisPointer.label.margin
- **Type**: `number`
- **Default**: `3`

Distance between label and axis.

#### axisPointer.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

#### axisPointer.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### axisPointer.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### axisPointer.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### axisPointer.label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

#### axisPointer.label.lineHeight
- **Type**: `number`

Line height of the text fragment.

If `lineHeight` is not set in `rich`, `lineHeight` in parent level will be used. For example:

```
{
    lineHeight: 56,
    rich: {
        a: {
            // `lineHeight` is not set, then it will be 56
        }
    }
}
```

#### axisPointer.label.width
- **Type**: `number`

Width of text block.

#### axisPointer.label.height
- **Type**: `number`

Height of text block.

#### axisPointer.label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

#### axisPointer.label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### axisPointer.label.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Stroke line type of the text.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `textBorderDashOffset` , we can make the line style more flexible.

For example：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

#### axisPointer.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### axisPointer.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### axisPointer.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### axisPointer.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### axisPointer.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### axisPointer.label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### axisPointer.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### axisPointer.label.padding
- **Type**: `string|Array`
- **Default**: `[5, 7, 5, 7]`

axisPointer space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.

Examples:

```
// Set padding to be 5
padding: 5
// Set the top and bottom paddings to be 5, and left and right paddings to be 10
padding: [5, 10]
// Set each of the four paddings separately
padding: [
    5,  // up
    10, // right
    5,  // down
    10, // left
]
```

#### axisPointer.label.backgroundColor
- **Type**: `string`
- **Default**: `'auto'`

Background color of label, the same as [axis.axisLine.lineStyle.color](option.xAxis.md#axisLine.lineStyle.color) by default.

#### axisPointer.label.borderColor
- **Type**: `string`

Border color of label.

#### axisPointer.label.borderWidth
- **Type**: `string`
- **Default**: `0`

Border width of label.

#### axisPointer.label.shadowBlur
- **Type**: `number`
- **Default**: `3`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### axisPointer.label.shadowColor
- **Type**: `Color`
- **Default**: `#aaa`

Shadow color. Support same format as `color`.

#### axisPointer.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### axisPointer.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### axisPointer.lineStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'line'`.

#### axisPointer.lineStyle.color
- **Type**: `Color`
- **Default**: `#555`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### axisPointer.lineStyle.width
- **Type**: `number`
- **Default**: `1`

line width.

#### axisPointer.lineStyle.type
- **Type**: `string|number|Array`
- **Default**: `solid`

line type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `dashOffset` , we can make the line style more flexible.

For example：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### axisPointer.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### axisPointer.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### axisPointer.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### axisPointer.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### axisPointer.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### axisPointer.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### axisPointer.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### axisPointer.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### axisPointer.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### axisPointer.shadowStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'shadow'`.

#### axisPointer.shadowStyle.color
- **Type**: `Color`
- **Default**: `'rgba(150,150,150,0.3)`

Fill color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### axisPointer.shadowStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### axisPointer.shadowStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### axisPointer.shadowStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### axisPointer.shadowStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### axisPointer.shadowStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### axisPointer.crossStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'cross'`.

#### axisPointer.crossStyle.color
- **Type**: `Color`
- **Default**: `#555`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### axisPointer.crossStyle.width
- **Type**: `number`
- **Default**: `1`

line width.

#### axisPointer.crossStyle.type
- **Type**: `string|number|Array`
- **Default**: `dashed`

line type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `dashOffset` , we can make the line style more flexible.

For example：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### axisPointer.crossStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### axisPointer.crossStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### axisPointer.crossStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### axisPointer.crossStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### axisPointer.crossStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### axisPointer.crossStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### axisPointer.crossStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### axisPointer.crossStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### axisPointer.crossStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### axisPointer.animation
- **Type**: `boolean`
- **Default**: `true`

Whether to enable animation.

### axisPointer.animationThreshold
- **Type**: `number`
- **Default**: `2000`

Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.

### axisPointer.animationDuration
- **Type**: `number|Function`
- **Default**: `1000`

Duration of the first animation, which supports callback function for different data to have different animation effect:

```
animationDuration: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

### axisPointer.animationEasing
- **Type**: `string`
- **Default**: `'cubicOut'`

Easing method used for the first animation. Varied easing effects can be found at [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing).

### axisPointer.animationDelay
- **Type**: `number|Function`
- **Default**: `0`

Delay before updating the first animation, which supports callback function for different data to have different animation effect.

For example:

```
animationDelay: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay) for more information.

### axisPointer.animationDurationUpdate
- **Type**: `number|Function`
- **Default**: `200`

Time for animation to complete, which supports callback function for different data to have different animation effect:

```
animationDurationUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

### axisPointer.animationEasingUpdate
- **Type**: `string`
- **Default**: `exponentialOut`

Easing method used for animation.

### axisPointer.animationDelayUpdate
- **Type**: `number|Function`
- **Default**: `0`

Delay before updating animation, which supports callback function for different data to have different animation effects.

For example:

```
animationDelayUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

See [this example](https://echarts.apache.org/examples/en/editor.html?c=bar-animation-delay) for more information.

## showContent
- **Type**: `boolean`
- **Default**: `true`

Whether to show the tooltip floating layer, whose default value is true. It should be configurated to be `false`, if you only need tooltip to trigger the event or show the axisPointer without content.

## alwaysShowContent
- **Type**: `boolean`
- **Default**: `false`

Whether to show tooltip content all the time. By default, it will be hidden [after some time](option.tooltip.md#hideDelay). It can be set to be `true` to preserve displaying.

This attribute is newly added to ECharts 3.0.

## triggerOn
- **Type**: `string`
- **Default**: `'mousemove|click'`

Conditions to trigger tooltip. Options:

*   `'mousemove'`
    
    Trigger when mouse moves.
    
*   `'click'`
    
    Trigger when mouse clicks.
    
*   `'mousemove|click'`
    
    Trigger when mouse clicks and moves.
    
*   `'none'`
    
    Do not triggered by `'mousemove'` and `'click'`. Tooltip can be triggered and hidden manually by calling [action.tooltip.showTip](../api-parts/api.action.md#tooltip.showTip) and [action.tooltip.hideTip](../api-parts/api.action.md#tooltip.hideTip). It can also be triggered by [axisPointer.handle](option.xAxis.md#axisPointer.handle) in this case.
    

This attribute is new to ECharts 3.0.

## showDelay
- **Type**: `number`
- **Default**: `0`

Delay time for showing tooltip, in ms. No delay by default, and it is not recommended to set. Only valid when [triggerOn](option.tooltip.md#triggerOn) is set to be `'mousemove'`.

## hideDelay
- **Type**: `number`
- **Default**: `100`

Delay time for hiding tooltip, in ms. It will be invalid when [alwaysShowContent](option.tooltip.md#alwaysShowContent) is `true`.

## enterable
- **Type**: `boolean`
- **Default**: `false`

Whether the mouse can enter the tooltip floating layer. Defaults to `false`. Set to `true` to support interactions with links, buttons and other elements inside the tooltip.

## renderMode
- **Type**: `string`
- **Default**: `'html'`

Render mode for tooltip. By default, it is set to be `'html'` so that extra DOM element is used for tooltip. It can also set to be `'richText'` so that the tooltip will be rendered inside Canvas. This is very useful for environments that don't have DOM, such as Wechat applications.

## confine
- **Type**: `boolean`
- **Default**: `false`

Whether confine tooltip content in the view rect of chart instance.

Useful when tooltip is cut because of `'overflow: hidden'` set on outer dom of chart instance, or because of narrow screen on mobile.

## appendToBody
- **Type**: `boolean`
- **Default**: `false`

Since `v4.7.0`

(DEPRECATED since `v5.5.0`, use [appendTo](option.tooltip.md#appendTo) instead.)

Whether to append the tooltip DOM element as a child of the `<body>` of the HTML page, when using [renderMode](option.tooltip.md#renderMode) `'html'`.

The default value is `false`, which means that the tooltip DOM element will be one of a descendant of its echarts DOM container. But that means that the tooltip might be cut when overflow the container if some of the ancestors DOM element of the echarts container are styled with `overflow: hidden`. This case could also be resolved by setting [tooltip.confine](option.tooltip.md#confine), but it might not suitable for all scenarios.

Here we provide `appendToBody: true` to auto append the tooltip element to `<body>`, which is a common way to resolve this kind of issue. But `true` is not set as a default value because to void to bring break change for some cases where tooltip is deeply customized and to void some unexpected bad cases.

Note that it also works when CSS transform used.

## appendTo
- **Type**: `string|HTMLElement|Function`

Since `v5.5.0`

Which DOM element to append the tooltip to. Only available when using [renderMode](option.tooltip.md#renderMode) `'html'`.

The default value is `null`, which means that the tooltip's DOM node will be added as a descendant node of the chart’s DOM container. However, this approach can cause the tooltip to be truncated if it extends beyond the container, due to ancestors of the chart's DOM container having overflow: hidden set. This issue can be partially addressed using tooltip.confine, but it may not cover all scenarios.

For such scenarios, `appendTo` can be specified. When it is a function, the interface is in the form of

```
(chartContainer: HTMLElement) => HTMLElement | undefined | null
```

which means it returns the node that the tooltip's DOM node should be added to. Returning `undefined` or `null` indicates that the default logic described above should be used. Returning an HTMLElement means that it should be added under that node.

Note that it also works when CSS transform used.

## className
- **Type**: `string`

Since `v5.0.0`

Specify the classes for the tooltip root DOM. (Only works in [`html`](option.tooltip.md#renderMode) render mode).

Example:

```
className: 'echarts-tooltip echarts-tooltip-dark'
```

## transitionDuration
- **Type**: `number`
- **Default**: `0.4`

The transition duration of tooltip's animation, in seconds. When it is set to be 0, it would move closely with the mouse.

## displayTransition
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether to enable the display transition.

By default, the tooltip uses the opacity fading to make itself invisible rather than setting the DOM element's `display` property to `'none'`. This might cause the scrollbar to be always visible when the tooltip content size is large, even if the tooltip is already invisible. In this scenario, or if you just want no fading, you can set this option to `false` to disable the display transition.

## position
- **Type**: `string|Array`

The position of the tooltip's floating layer, which would follow the position of mouse by default.

Options:

*   `Array`
    
    Display the position of tooltip's floating layer through array, which supports absolute position and relative percentage.
    
    Example:
    
    ```
      // absolute position, which is 10px to the left side and 10px to the top side of the container
      position: [10, 10]
      // relative position, in the exact center of the container
      position: ['50%', '50%']
    ```
    
*   `Function`
    
    Callback function in the following form:
    
    ```
      (point: Array, params: Object|Array.<Object>, dom: HTMLDomElement, rect: Object, size: Object) => Array
    ```
    
    **Parameters:**  
    point: Mouse position.  
    param: The same as formatter.  
    dom: The DOM object of tooltip.  
    rect: It is valid only when mouse is on graphic elements, which stands for a bounding box with `x`, `y`, `width`, and `height`.  
    size: The size of dom echarts container. For example: `{contentSize: [width, height], viewSize: [width, height]}`.  
    
    **Return:**  
    Return value is an array standing for tooltip position, which can be absolute pixels, or relative percentage.  
    Or can be an object, like `{left: 10, top: 30}`, or `{right: '20%', bottom: 40}`.  
    
    For example:
    
    ```
      position: function (point, params, dom, rect, size) {
          // fixed at top
          return [point[0], '10%'];
      }
    ```
    
    Or:
    
    ```
      position: function (pos, params, dom, rect, size) {
          // tooltip will be fixed on the right if mouse hovering on the left,
          // and on the left if hovering on the right.
          var obj = {top: 60};
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
      }
    ```
    
*   `'inside'`
    
    Center position of the graphic element where the mouse is in, which is only valid when [trigger](option.tooltip.md#trigger) is `'item'`.
    
*   `'top'`
    
    Top position of the graphic element where the mouse is in, which is only valid when [trigger](option.tooltip.md#trigger) is `'item'`.
    
*   `'left'`
    
    Left position of the graphic element where the mouse is in, which is only valid when [trigger](option.tooltip.md#trigger) is `'item'`.
    
*   `'right'`
    
    Right position of the graphic element where the mouse is in, which is only valid when [trigger](option.tooltip.md#trigger) is `'item'`.
    
*   `'bottom'`
    
    Bottom position of the graphic element where the mouse is in, which is only valid when [trigger](option.tooltip.md#trigger) is `'item'`.

## formatter
- **Type**: `string|Function`

The content formatter of tooltip's floating layer which supports string template and callback function.

**1\. String template**

The template variables are `{a}`, `{b}`, `{c}`, `{d}` and `{e}`, which stands for series name, data name and data value and ect. When [trigger](option.tooltip.md#trigger) is set to be `'axis'`, there may be data from multiple series. In this time, series index can be referred as `{a0}`, `{a1}`, or `{a2}`.

`{a}`, `{b}`, `{c}`, `{d}` have different meanings for different series types:

*   Line (area) charts, bar (column) charts, K charts: `{a}` for series name, `{b}` for category name, `{c}` for data value, `{d}` for none;
    
*   Scatter (bubble) charts: `{a}` for series name, `{b}` for data name, `{c}` for data value, `{d}` for none;
    
*   Map: `{a}` for series name, `{b}` for area name, `{c}` for merging data, `{d}` for none;
    
*   Pie charts, gauge charts, funnel charts: `{a}` for series name, `{b}` for data item name, `{c}` for data value, `{d}` for percentage.
    

**Example:**

```
formatter: '{b0}: {c0}<br />{b1}: {c1}'
```

**2\. Callback function**

The format of callback function:

```
(params: Object|Array, ticket: string, callback: (ticket: string, html: string | HTMLElement | HTMLElement[])) => string | HTMLElement | HTMLElement[]
```

\[WARNING\]: `tooltip` is implemented in HTML (unless [tooltip.renderMode](option.tooltip.md#renderMode) is set as `richText`), allowing users to customize the HTML in this way. The content in the HTML must be properly escaped before being passed in. **Security risks** must be considered when using it. See document ["Security Guidelines"](https://echarts.apache.org/handbook/en/best-practices/security) for recommendations on safe usage.

**HTML-escaping must be enforced** before passing the HTML to ECharts. For example,

```
{
    tooltip: {
        formatter: params => {
            const { name, value } = params;
            // HTML-escaping must be performed.
            // Otherwise, the rendering may be incorrect if `name` or
            // `value` contain special charactors like '<', '>', etc.
            // Additionally, unescaped strings may introduces XSS risks
            // if `name` or `value` come from untrusted sources, where
            // malicious code may be injected into that strings.
            return echarts.format.encodeHTML(name)
                + '<b>' + echarts.format.encodeHTML(value) + '</b>';
            // NOTE: `echarts.format.encodeHTML` is an utility that converts special
            //  characters ('&', '<', '>', '"', "'") to their corresponding HTML entities.
            //  This is just an example -- any HTML-escaping utility can be used.
        }
    }
}
```

The first parameter `params` is the data that the formatter needs. Its format is shown as follows:

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string,
    // The percentage of current data item in the pie/funnel series
    percent: number,
    // The ancestors of current node in the sunburst series (including self)
    treePathInfo: Array,
    // The ancestors of current node in the tree/treemap series (including self)
    treeAncestors: Array,
    // A function that returns a boolean value to flag if the axis label is truncated
    isTruncated: Function,
    // Current index of the axis label tick
    tickIndex: number
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

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

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

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

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

When [trigger](option.tooltip.md#trigger) is `'axis'`, or when tooltip is triggered by [axisPointer](option.xAxis.md#axisPointer), `params` is the data array of multiple series. The content of each item of the array is the same as above. Besides,

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

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

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

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

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

**Note:** Using array to present all the parameters in ECharts 2.x is not supported anymore.

The second parameter `ticket` is the asynchronous callback flag which should be used along with the third parameter `callback` when it is used.

The third parameter `callback` is asynchronous callback. When the content of tooltip is acquired asynchronously, `ticket` and `htm` as introduced above can be used to update tooltip with callback.

Example:

```
formatter: function (params, ticket, callback) {
    $.get('detail?name=' + params.name, function (content) {
        callback(ticket, toHTML(content));
    });
    return 'Loading';
}
```

## valueFormatter
- **Type**: `string`

Since `v5.3.0`

Callback function for formatting the value section in tooltip.

Interface:

```
(value: number | string, dataIndex: number) => string
```

`dataIndex` is provided since `v5.5.0`

Example:

```
// Add $ prefix
valueFormatter: (value) => '$' + value.toFixed(2)
```

> **\[NOTE\]:** Different from [tooltip.formater](option.tooltip.md#formatter), raw HTML is NOT accepted in this approach -- the returned content will be escaped internally before rendering.

## backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

The background color of tooltip's floating layer.

## borderColor
- **Type**: `Color`
- **Default**: `'#333'`

The border color of tooltip's floating layer.

## borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of tooltip's floating layer.

## padding
- **Type**: `number`
- **Default**: `5`

The floating layer of tooltip space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.

Examples:

```
// Set padding to be 5
padding: 5
// Set the top and bottom paddings to be 5, and left and right paddings to be 10
padding: [5, 10]
// Set each of the four paddings separately
padding: [
    5,  // up
    10, // right
    5,  // down
    10, // left
]
```

## textStyle
- **Type**: `Object`

The text style of tooltip's floating layer.

### textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

### textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

### textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

font size.

### textStyle.lineHeight
- **Type**: `number`

Line height of the text fragment.

If `lineHeight` is not set in `rich`, `lineHeight` in parent level will be used. For example:

```
{
    lineHeight: 56,
    rich: {
        a: {
            // `lineHeight` is not set, then it will be 56
        }
    }
}
```

### textStyle.width
- **Type**: `number`

Width of text block.

### textStyle.height
- **Type**: `number`

Height of text block.

### textStyle.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### textStyle.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### textStyle.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Stroke line type of the text.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `textBorderDashOffset` , we can make the line style more flexible.

For example：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

### textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

## extraCssText
- **Type**: `string`

Extra CSS style for floating layer. The following is an example for adding shadow.

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[WARNING\]: `tooltip` is implemented in HTML (unless [tooltip.renderMode](option.tooltip.md#renderMode) is set as `richText`), allowing users to customize the CSS text of the box in this way. **Security risks** must be considered if the CSS text comes from untrusted sources. See document ["Security Guidelines"](https://echarts.apache.org/handbook/en/best-practices/security) for recommendations on safe usage.

## order
- **Type**: `string`
- **Default**: `'seriesAsc'`

Since `v5.0.0`

Tooltip order for multiple series. Defaults is `'seriesAsc'`.

Conditions to order tooltip. Options:

*   `'seriesAsc'`
    
    Base on series declaration, ascending order tooltip.
    
*   `'seriesDesc'`
    
    Base on series declaration, descending order tooltip.
    
*   `'valueAsc'`
    
    Base on value, ascending order tooltip, only for numeric value.
    
*   `'valueDesc'`
    
    Base on value, descending order tooltip, only for numeric value.
