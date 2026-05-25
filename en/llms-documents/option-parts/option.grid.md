# option.grid

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## show
- **Type**: `boolean`
- **Default**: `false`

Whether to show the grid in rectangular coordinate.

## zlevel
- **Type**: `number`
- **Default**: `0`

`zlevel` value of all graphical elements in .

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

## z
- **Type**: `number`
- **Default**: `2`

`z` value of all graphical elements in , which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

`z` has a lower priority to `zlevel`, and will not create new Canvas.

## left
- **Type**: `string|number`
- **Default**: `'10%'`

Distance between undefined component and the left side of the container.

`left` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

## top
- **Type**: `string|number`
- **Default**: `60`

Distance between undefined component and the top side of the container.

`top` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

## right
- **Type**: `string|number`
- **Default**: `'10%'`

Distance between undefined component and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

## bottom
- **Type**: `string|number`
- **Default**: `60`

Distance between undefined component and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

## width
- **Type**: `string|number`
- **Default**: `'auto'`

Width of grid component. Adaptive by default.

`width` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

## height
- **Type**: `string|number`
- **Default**: `'auto'`

Height of grid component. Adaptive by default.

`height` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

## containLabel
- **Type**: `boolean`
- **Default**: `false`

Deprecated since `v6.0.0`. See [grid.outerBoundsMode](option.grid.md#outerBoundsMode).

Whether the grid region contains [axis tick label](option.yAxis.md#axisLabel).

*   When containLabel is `false`:
    *   `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` decide the location and size of the rectangle that is made of by xAxis and yAxis.
    *   Setting to `false` will help when multiple grids need to be aligned at their axes.
*   When containLabel is `true`:
    *   `grid.left` `grid.right` `grid.top` `grid.bottom` `grid.width` `grid.height` decide the location and size of the rectangle that contains the axes, and the labels of the axes.
    *   Setting to `true` will help when the length of axis labels is dynamic and is hard to approximate. This will avoid labels from overflowing the container or overlapping other components.

## outerBoundsMode
- **Type**: `string`
- **Default**: `'auto'`

Since `v6.0.0`

The "outer bounds" is a constraint rectangle used to prevent axis labels and axis names from overflowing. `outerBoundsMode` defines the strategy for determining the "outer bounds".

In most cases, we do not need to specify [grid.outerBoundsMode](option.grid.md#outerBoundsMode), [grid.outerBounds](option.grid.md#outerBounds), [grid.outerBoundsContain](option.grid.md#outerBoundsContain) and [grid.containLabel](option.grid.md#containLabel), as the default settings can prevent axis labels and axis names from overflowing the canvas.

The grid component (Cartesian) layout strategy:

*   First, lay out axis lines based on the rect defined by [grid.left](option.grid.md#left)/[right](option.grid.md#right)/[top](option.grid.md#top)/[bottom](option.grid.md#bottom)/[width](option.grid.md#width)/[height](option.grid.md#height). This can meet the requirement of aligning axis lines across multiple grids.
*   Then, if axis labels and/or axis names overflow the "outer bounds", shrink the rectangle to prevent that overflow. [grid.outerBoundsContain](option.grid.md#outerBoundsContain) determines whether axis label and axis name is confined by the "outer bounds".

Options of `outerBoundsMode`:

*   `'auto'`/`null`/`undefined` (default):
    *   Behave the same as `outerBoundsMode: 'same'` when `grid.containLabel: true`.
    *   Otherwise, the "outer bounds" is determined by [grid.outerBounds](option.grid.md#outerBounds) if specified.
    *   Otherwise, automatically determine the "outer bounds" - typically defaulting to the current canvas, or a assigned layout rectangle if this `grid` is laid out in another coordinate system (see [grid.coordinateSystem](option.grid.md#coordinateSystem)).
*   `'none'`: Force the "outer bounds" to be infinity (i.e., no constraint), regardless of the specified [grid.outerBounds](option.grid.md#outerBounds).
*   `'same'`: Force the "outer bounds" to be the same as the layout rectangle defined by [grid.left](option.grid.md#left)/[right](option.grid.md#right)/[top](option.grid.md#top)/[bottom](option.grid.md#bottom)/[width](option.grid.md#width)/[height](option.grid.md#height), regardless of the specified [grid.outerBounds](option.grid.md#outerBounds).

> The "outer bounds" encompasses the functionality of [grid.containLabel](option.grid.md#containLabel); therefore, [grid.containLabel](option.grid.md#containLabel) is deprecated. `grid.containLabel: true` is equivalent to `grid: {outerBoundsMode: 'same', outerBoundsContain: 'axisLabel'}`. The effect might be slightly different, but usually indiscernible. You can use the code below to enforce the previous effect, though it's unnecessary in most cases.
> 
> ```
> import {use} from 'echarts/core';
> import {LegacyGridContainLabel} from 'echarts/features';
> use([LegacyGridContainLabel]);
> ```

**Demo**: [outerBounds example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/grid-outerBounds&edit=1&reset=1).

## outerBounds
- **Type**: `Object`

Since `v6.0.0`

See details in [grid.outerBoundsMode](option.grid.md#outerBoundsMode).

See also [outerBounds example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/grid-outerBounds&edit=1&reset=1).

### outerBounds.left
- **Type**: `string|number`
- **Default**: `0`

Since `v6.0.0`

Distance between `outerBounds` and the left side of the container.

`left` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

### outerBounds.top
- **Type**: `string|number`
- **Default**: `0`

Since `v6.0.0`

Distance between `outerBounds` and the top side of the container.

`top` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

### outerBounds.right
- **Type**: `string|number`
- **Default**: `0`

Since `v6.0.0`

Distance between `outerBounds` and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

Adaptive by default.

### outerBounds.bottom
- **Type**: `string|number`
- **Default**: `0`

Since `v6.0.0`

Distance between `outerBounds` and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

Adaptive by default.

### outerBounds.width
- **Type**: `string|number`
- **Default**: `'auto'`

Since `v6.0.0`

Width of `outerBounds`. Adaptive by default.

`width` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

### outerBounds.height
- **Type**: `string|number`
- **Default**: `'auto'`

Since `v6.0.0`

Height of `outerBounds`. Adaptive by default.

`height` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

## outerBoundsContain
- **Type**: `boolean`
- **Default**: `'auto'`

Since `v6.0.0`

Options:

*   `'auto'`/`null`/`undefined` (default):
    *   Behave the same as `outerBoundsContain: 'axisLabel'` if `containLabel: true`.
    *   Otherwise, behave the same as `outerBoundsContain: 'all'`.
*   `'all'`: The "outer bounds" constrain the grid (Cartesian) rectangle (determined by the x-axis and y-axis lines) and axis labels and axis names.
*   `'axisLabel'`: The "outer bounds" constrain the grid (Cartesian) rectangle (determined by the x-axis and y-axis lines) and axis labels, but exclude axis names.

For more details, see [grid.outerBoundsMode](option.grid.md#outerBoundsMode).

See also [outerBounds example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/grid-outerBounds&edit=1&reset=1).

## backgroundColor
- **Type**: `Color`
- **Default**: `'transparent'`

Background color of grid, which is transparent by default.

> Color can be represented in RGB, for example `'rgb(128, 128, 128)'`. RGBA can be used when you need alpha channel, for example `'rgba(128, 128, 128, 0.5)'`. You may also use hexadecimal format, for example `'#ccc'`.

**Attention**: Works only if `show: true` is set.

## borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

Border color of grid. Support the same color format as backgroundColor.

**Attention**: Works only if `show: true` is set.

## borderWidth
- **Type**: `number`
- **Default**: `1`

Border width of grid.

**Attention**: Works only if `show: true` is set.

## shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

**Attention**: This property works only if `show: true` is configured and `backgroundColor` is defined other than `transparent`.

## shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

**Attention**: This property works only if `show: true` configured.

## shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

**Attention**: This property works only if `show: true` configured.

## shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

**Attention**: This property works only if `show: true` configured.

## tooltip
- **Type**: `Object`

tooltip settings in the coordinate system component.

**General Introduction:**

tooltip can be configured on different places:

*   Configured on global: [tooltip](option.tooltip.md)
    
*   Configured in a coordinate system: [grid.tooltip](option.grid.md#tooltip), [polar.tooltip](option.polar.md#tooltip), [single.tooltip](../option.md#single.tooltip)
    
*   Configured in a series: [series.tooltip](../option.md#series.tooltip)
    
*   Configured in each item of `series.data`: [series.data.tooltip](../option.md#series.data.tooltip)

### tooltip.show
- **Type**: `boolean`
- **Default**: `true`

Whether to show the tooltip component.

including tooltip floating layer and [axisPointer](option.tooltip.md#axisPointer).

### tooltip.trigger
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

### tooltip.axisPointer
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

#### tooltip.axisPointer.type
- **Type**: `string`
- **Default**: `'line'`

Indicator type.

Options:

*   `'line'` line indicator.
    
*   `'shadow'` shadow crosshair indicator.
    
*   `'none'` no indicator displayed.
    
*   `'cross'` crosshair indicator, which is actually the shortcut of enable two axisPointers of two orthometric axes.

#### tooltip.axisPointer.axis
- **Type**: `string`
- **Default**: `'auto'`

The coordinate axis, which could be `'x'`, `'y'`, `'radius'`, or `'angle'`. By default, each coordinate system will automatically chose the axes whose will display its axisPointer (category axis or time axis is used by default).

#### tooltip.axisPointer.snap
- **Type**: `boolean`

Whether snap to point automatically. The default value is auto determined.

This feature usually makes sense in value axis and time axis, where tiny points can be seeked automatically.

#### tooltip.axisPointer.z
- **Type**: `number`

z value, which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

#### tooltip.axisPointer.label
- **Type**: `Object`

label of axisPointer

##### tooltip.axisPointer.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether show label. Label will not show by default. But if [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) is set as `'cross'`, label will be displayed automatically.

##### tooltip.axisPointer.label.precision
- **Type**: `number|string`
- **Default**: `'auto'`

The precision of value in label. It is auto determined by default. You can also set it as `'2'`, which indicates that two decimal fractions are reserved.

##### tooltip.axisPointer.label.formatter
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

##### tooltip.axisPointer.label.margin
- **Type**: `number`
- **Default**: `3`

Distance between label and axis.

##### tooltip.axisPointer.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### tooltip.axisPointer.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### tooltip.axisPointer.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### tooltip.axisPointer.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### tooltip.axisPointer.label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

##### tooltip.axisPointer.label.lineHeight
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

##### tooltip.axisPointer.label.width
- **Type**: `number`

Width of text block.

##### tooltip.axisPointer.label.height
- **Type**: `number`

Height of text block.

##### tooltip.axisPointer.label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### tooltip.axisPointer.label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### tooltip.axisPointer.label.textBorderType
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

##### tooltip.axisPointer.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### tooltip.axisPointer.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### tooltip.axisPointer.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### tooltip.axisPointer.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### tooltip.axisPointer.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

##### tooltip.axisPointer.label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

##### tooltip.axisPointer.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

##### tooltip.axisPointer.label.padding
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

##### tooltip.axisPointer.label.backgroundColor
- **Type**: `string`
- **Default**: `'auto'`

Background color of label, the same as [axis.axisLine.lineStyle.color](option.xAxis.md#axisLine.lineStyle.color) by default.

##### tooltip.axisPointer.label.borderColor
- **Type**: `string`

Border color of label.

##### tooltip.axisPointer.label.borderWidth
- **Type**: `string`
- **Default**: `0`

Border width of label.

##### tooltip.axisPointer.label.shadowBlur
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

##### tooltip.axisPointer.label.shadowColor
- **Type**: `Color`
- **Default**: `#aaa`

Shadow color. Support same format as `color`.

##### tooltip.axisPointer.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

##### tooltip.axisPointer.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### tooltip.axisPointer.lineStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'line'`.

##### tooltip.axisPointer.lineStyle.color
- **Type**: `Color`
- **Default**: `#555`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

##### tooltip.axisPointer.lineStyle.width
- **Type**: `number`
- **Default**: `1`

line width.

##### tooltip.axisPointer.lineStyle.type
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

##### tooltip.axisPointer.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### tooltip.axisPointer.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

##### tooltip.axisPointer.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

##### tooltip.axisPointer.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

##### tooltip.axisPointer.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### tooltip.axisPointer.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

##### tooltip.axisPointer.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

##### tooltip.axisPointer.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

##### tooltip.axisPointer.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

#### tooltip.axisPointer.shadowStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'shadow'`.

##### tooltip.axisPointer.shadowStyle.color
- **Type**: `Color`
- **Default**: `'rgba(150,150,150,0.3)`

Fill color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

##### tooltip.axisPointer.shadowStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### tooltip.axisPointer.shadowStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

##### tooltip.axisPointer.shadowStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

##### tooltip.axisPointer.shadowStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

##### tooltip.axisPointer.shadowStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

#### tooltip.axisPointer.crossStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'cross'`.

##### tooltip.axisPointer.crossStyle.color
- **Type**: `Color`
- **Default**: `#555`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

##### tooltip.axisPointer.crossStyle.width
- **Type**: `number`
- **Default**: `1`

line width.

##### tooltip.axisPointer.crossStyle.type
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

##### tooltip.axisPointer.crossStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### tooltip.axisPointer.crossStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

##### tooltip.axisPointer.crossStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

##### tooltip.axisPointer.crossStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

##### tooltip.axisPointer.crossStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### tooltip.axisPointer.crossStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

##### tooltip.axisPointer.crossStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

##### tooltip.axisPointer.crossStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

##### tooltip.axisPointer.crossStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

#### tooltip.axisPointer.animation
- **Type**: `boolean`
- **Default**: `true`

Whether to enable animation.

#### tooltip.axisPointer.animationThreshold
- **Type**: `number`
- **Default**: `2000`

Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.

#### tooltip.axisPointer.animationDuration
- **Type**: `number|Function`
- **Default**: `1000`

Duration of the first animation, which supports callback function for different data to have different animation effect:

```
animationDuration: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

#### tooltip.axisPointer.animationEasing
- **Type**: `string`
- **Default**: `'cubicOut'`

Easing method used for the first animation. Varied easing effects can be found at [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing).

#### tooltip.axisPointer.animationDelay
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

#### tooltip.axisPointer.animationDurationUpdate
- **Type**: `number|Function`
- **Default**: `200`

Time for animation to complete, which supports callback function for different data to have different animation effect:

```
animationDurationUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

#### tooltip.axisPointer.animationEasingUpdate
- **Type**: `string`
- **Default**: `exponentialOut`

Easing method used for animation.

#### tooltip.axisPointer.animationDelayUpdate
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

### tooltip.position
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

### tooltip.formatter
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

### tooltip.valueFormatter
- **Type**: `string`

Since `v5.3.0`

Callback function for formatting the value section in tooltip.

Interface:

```
(value: number | string, dataIndex: number) => string
```

Since `v5.5.0` `dataIndex` is provided; but not reasonable when `dataZoom` exists, since it is the index after dataZoom filtering.

Since `v6.1.0` `dataIndex` is corrected to the index before `dataZoom` filtering.

Example:

```
// Add $ prefix
valueFormatter: (value) => '$' + value.toFixed(2)
```

> **\[NOTE\]:** Different from [tooltip.formater](option.tooltip.md#formatter), raw HTML is NOT accepted in this approach -- the returned content will be escaped internally before rendering.

### tooltip.backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

The background color of tooltip's floating layer.

### tooltip.borderColor
- **Type**: `Color`
- **Default**: `'#333'`

The border color of tooltip's floating layer.

### tooltip.borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of tooltip's floating layer.

### tooltip.padding
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

### tooltip.textStyle
- **Type**: `Object`

The text style of tooltip's floating layer.

#### tooltip.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

#### tooltip.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### tooltip.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### tooltip.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### tooltip.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

font size.

#### tooltip.textStyle.lineHeight
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

#### tooltip.textStyle.width
- **Type**: `number`

Width of text block.

#### tooltip.textStyle.height
- **Type**: `number`

Height of text block.

#### tooltip.textStyle.textBorderColor
- **Type**: `Color`

Stroke color of the text.

#### tooltip.textStyle.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### tooltip.textStyle.textBorderType
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

#### tooltip.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### tooltip.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### tooltip.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### tooltip.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### tooltip.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### tooltip.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### tooltip.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### tooltip.extraCssText
- **Type**: `string`

Extra CSS style for floating layer. The following is an example for adding shadow.

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[WARNING\]: `tooltip` is implemented in HTML (unless [tooltip.renderMode](option.tooltip.md#renderMode) is set as `richText`), allowing users to customize the CSS text of the box in this way. **Security risks** must be considered if the CSS text comes from untrusted sources. See document ["Security Guidelines"](https://echarts.apache.org/handbook/en/best-practices/security) for recommendations on safe usage.

## coordinateSystem
- **Type**: `string`
- **Default**: `'none'`

Since `v6.0.0`

Specifies another coordinate system component on which this `grid` is laid out.

Options:

*   `null`/`undefined`/`'none'`
    
    Not laid out in any coordinate system; instead, laid out independently.
    

*   `'calendar'`
    
    Lay out based on a [calendar coordinate system](option.calendar.md). When multiple calendar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [calendarIndex](option.grid.md#calendarIndex) or [calendarId](option.grid.md#calendarId).
    

*   `'matrix'`
    
    Lay out based on a [matrix coordinate system](option.matrix.md). When multiple matrix coordinate systems exist within an ECharts instance, the corresponding system should be specified using [matrixIndex](option.grid.md#matrixIndex) or [matrixId](option.grid.md#matrixId).
    
    See example [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1).
    

**Support for series and component layout on coordinate systems:**

The leftmost column lists the series and components that will be laid out (coordinate systems themselves are also components), and the topmost row lists the coordinate systems that can be laid out on.

|  | no coord sys | [grid](option.grid.md) (cartesian2d) | [polar](option.polar.md) | [geo](option.geo.md) | [singleAxis](option.singleAxis.md) | [radar](option.radar.md) | [parallel](option.parallel.md) | [calendar](option.calendar.md) | [matrix](option.matrix.md) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [grid](option.grid.md) (cartesian2d) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [polar](option.polar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [geo](option.geo.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [singleAxis](option.singleAxis.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [calendar](option.calendar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [matrix](option.matrix.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [series-line](option.series-line.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-bar](option.series-bar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-pie](option.series-pie.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-scatter](option.series-scatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-effectScatter](option.series-effectScatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-radar](option.series-radar.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (✅ if via [radar](option.radar.md) coord sys) | ❌ (✅ if via [radar](option.radar.md) coord sys) |
| [series-tree](option.series-tree.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-treemap](option.series-treemap.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sunburst](option.series-sunburst.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-boxplot](option.series-boxplot.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-candlestick](option.series-candlestick.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-heatmap](option.series-heatmap.md) | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-map](option.series-map.md) | ✅ (create a geo coord sys exclusively) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-parallel](option.series-parallel.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ (✅ if via [parallel](option.parallel.md) coord sys) | ❌ (✅ if via [parallel](option.parallel.md) coord sys) |
| [series-lines](option.series-lines.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [geo](option.geo.md)) | ❌ (✅ if via another coord sys like [geo](option.geo.md)) |
| [series-graph](option.series-graph.md) | ✅ (create a "view" coord sys exclusively) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sankey](option.series-sankey.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-funnel](option.series-funnel.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-gauge](option.series-gauge.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-pictorialBar](option.series-pictorialBar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-themeRiver](option.series-themeRiver.md) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [singleAxis](option.singleAxis.md)) | ❌ (✅ if via another coord sys like [singleAxis](option.singleAxis.md)) |
| [series-chord](option.series-chord.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [title](option.title.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [legend](option.legend.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [dataZoom](../option.md#dataZoom) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [visualMap](../option.md#visualMap) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [toolbox](option.toolbox.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [timeline](option.timeline.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [thumbnail](option.thumbnail.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

See also [grid.coordinateSystemUsage](option.grid.md#coordinateSystemUsage).

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'box'`

Since `v6.0.0`

Specify how to lay out this `grid` based on the specified [coordinateSystem](option.grid.md#coordinateSystem).

In most cases, there is no need to specify `coordinateSystemUsage`, unless the default behavior is unexpected.

Options:

*   `'data'`: **(Not applicable in [grid](option.grid.md))**
    
    Each data item of a series (e.g., each `series.data[i]`) is laid out separately based on the specified coordinate system. Currently no non-series component supports `coordinateSystemUsage: 'data'`.
    
*   `'box'`:
    
    The entire series or component is laid out as a whole based on the specified coordinate system - that is, the overall bounding rect or basic anchor point is calculated relative to the system.
    
    *   For example, a [grid component](option.grid.md) can be laid out in a [matrix coordinate system](option.matrix.md) or a [calendar coordinate system](option.calendar.md), where its layout rectangle is calculated by the specified [grid.coords](option.grid.md#coords) in that system. See example [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1).
    *   For example, a [pie series](option.series-pie.md) or a [chord series](option.series-chord.md) can be laid out in a [geo coordinate system](option.geo.md) or a [cartesian2d coordinate system](option.grid.md), where the center is calculated by the specified [series-pie.coords](option.series-pie.md#coords) or [series-pie.center](option.series-pie.md#center) in that system. See example [pie in geo](https://echarts.apache.org/examples/en/editor.html?c=map-iceland-pie&edit=1&reset=1).

See also [grid.coordinateSystem](option.grid.md#coordinateSystem).

## coord
- **Type**: `Array|number|string`

Since `v6.0.0`

When [coordinateSystemUsage](option.grid.md#coordinateSystemUsage) is `'box'`, `coord` is used as the input to the coordinate system and calculate the layout rectangle or anchor point.

Examples: [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1), [grpah in matrix](https://echarts.apache.org/examples/en/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> Note: when [coordinateSystemUsage](option.grid.md#coordinateSystemUsage) is `'data'`, the input of coordinate system is `series.data[i]` rather than this `coord`.

The format this `coord` is defined by each coordinate system, and it's the same as the second parameter of [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel).

## calendarIndex
- **Type**: `number`
- **Default**: `0`

Since `v6.0.0`

The index of the [calendar coordinate system](option.calendar.md) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## calendarId
- **Type**: `number`
- **Default**: `undefined`

Since `v6.0.0`

The id of the [calendar coordinate system](option.calendar.md) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## matrixIndex
- **Type**: `number`
- **Default**: `0`

Since `v6.0.0`

The index of the [matrix coordinate system](option.matrix.md) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.

## matrixId
- **Type**: `number`
- **Default**: `undefined`

Since `v6.0.0`

The id of the [matrix coordinate system](option.matrix.md) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.
