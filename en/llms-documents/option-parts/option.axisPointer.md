# option.axisPointer

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## show
- **Type**: `boolean`
- **Default**: `false`

axisPointer will not be displayed by default. But if [tooltip.trigger](option.tooltip.md#trigger) is set as `'axis'` or [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) is set as `'cross'`, axisPointer will be displayed automatically. Each coordinate system will automatically chose the axes whose will display its axisPointer. [tooltip.axisPointer.axis](option.tooltip.md#axisPointer.axis) can be used to change the choice.

## type
- **Type**: `string`
- **Default**: `'line'`

Indicator type.

Options:

*   `'line'` line indicator.
    
*   `'shadow'` shadow crosshair indicator.
    
*   `'none'` no indicator displayed.

## snap
- **Type**: `boolean`

Whether snap to point automatically. The default value is auto determined.

This feature usually makes sense in value axis and time axis, where tiny points can be seeked automatically.

## z
- **Type**: `number`

z value, which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

## label
- **Type**: `Object`

label of axisPointer

### label.show
- **Type**: `boolean`
- **Default**: `false`

Whether show label. Label will not show by default. But if [tooltip.axisPointer.type](option.tooltip.md#axisPointer.type) is set as `'cross'`, label will be displayed automatically.

### label.precision
- **Type**: `number|string`
- **Default**: `'auto'`

The precision of value in label. It is auto determined by default. You can also set it as `'2'`, which indicates that two decimal fractions are reserved.

### label.formatter
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

### label.margin
- **Type**: `number`
- **Default**: `3`

Distance between label and axis.

### label.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

### label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

### label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

### label.lineHeight
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

### label.width
- **Type**: `number`

Width of text block.

### label.height
- **Type**: `number`

Height of text block.

### label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### label.textBorderType
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

### label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### label.padding
- **Type**: `string|Array`
- **Default**: `[5, 7, 5, 7]`

The spacing around the axisPointer content, specified in pixels (`px`). The default value for each side is `5`. Supports a single value, a 2-value array, or a 4-value array to configure each side.

Examples:

```
// Applies to all four sides
padding: 5
// [vertical, horizontal] -> top/bottom: 5, left/right: 10
padding: [5, 10]
// Clockwise order: [top, right, bottom, left]
padding: [
    5,  // top
    10, // right
    5,  // bottom
    10, // left
]
```

### label.backgroundColor
- **Type**: `string`
- **Default**: `'auto'`

Background color of label, the same as [axis.axisLine.lineStyle.color](option.xAxis.md#axisLine.lineStyle.color) by default.

### label.borderColor
- **Type**: `string`

Border color of label.

### label.borderWidth
- **Type**: `string`
- **Default**: `0`

Border width of label.

### label.shadowBlur
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

### label.shadowColor
- **Type**: `Color`
- **Default**: `#aaa`

Shadow color. Support same format as `color`.

### label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

## lineStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'line'`.

### lineStyle.color
- **Type**: `Color`
- **Default**: `#555`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### lineStyle.width
- **Type**: `number`
- **Default**: `1`

line width.

### lineStyle.type
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

### lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## shadowStyle
- **Type**: `Object`

It is valid when [axisPointer.type](option.tooltip.md#axisPointer.type) is `'shadow'`.

### shadowStyle.color
- **Type**: `Color`
- **Default**: `'rgba(150,150,150,0.3)`

Fill color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### shadowStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### shadowStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### shadowStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### shadowStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### shadowStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## triggerEmphasis
- **Type**: `boolean`
- **Default**: `true`

Since `v5.4.3`

Whether to trigger emphasis of series.

## triggerTooltip
- **Type**: `boolean`
- **Default**: `true`

Whether to trigger tooltip.

## value
- **Type**: `number`

current value. When using [axisPointer.handle](xAxisPointer.handle), `value` can be set to define the initial position of axisPointer.

## status
- **Type**: `boolean`

Current status, can be `'show'` or `'hide'`.

## handle
- **Type**: `Object`

A button used to drag axisPointer. This feature is applicable in touch device. See [example](https://echarts.apache.org/examples/en/editor.html?c=line-tooltip-touch&edit=1&reset=1).

### handle.show
- **Type**: `boolean`
- **Default**: `false`

Set to `true` to use handle.

### handle.icon
- **Type**: `*`

The icon of the handle.

It can be set to an image with `'image://url'` , in which URL is the link to an image, or `dataURI` of an image.

An image URL example:

```
'image://http://example.website/a/b.png'
```

A `dataURI` example:

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

For example:

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

See the [example of using image](https://echarts.apache.org/examples/en/editor.html?c=doc-example/axisPointer-handle-image&edit=1&reset=1)

### handle.size
- **Type**: `number|Array`
- **Default**: `45`

The size of the handle, which can be set as a single value or an array (`[width, height]`).

### handle.margin
- **Type**: `number`
- **Default**: `50`

Distance from handle center to axis.

### handle.color
- **Type**: `string`
- **Default**: `'#333'`

The color of the handle.

### handle.throttle
- **Type**: `number`
- **Default**: `40`

Throttle rate of trigger view update when dragging handle, in ms. Increase the value to improve performance, but decrease the experience.

### handle.shadowBlur
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

### handle.shadowColor
- **Type**: `Color`
- **Default**: `#aaa`

Shadow color. Support same format as `color`.

### handle.shadowOffsetX
- **Type**: `number`
- **Default**: `2`

Offset distance on the horizontal direction of shadow.

### handle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

## link
- **Type**: `Array`

axisPointers can be linked to each other. The term "link" represents that axes are synchronized and move together. Axes are linked according to the value of axisPointer.

See [sampleA](https://echarts.apache.org/examples/en/view.html?c=candlestick-brush&edit=1&reset=1) and [sampleB](https://echarts.apache.org/examples/en/view.html?c=scatter-nutrients-matrix&edit=1&reset=1).

link is an array, where each item represents a "link group". Axes will be linked when they are referred in the same link group. For example:

```
link: [
    {
        // All axes with xAxisIndex 0, 3, 4 and yAxisName 'sameName' will be linked.
        xAxisIndex: [0, 3, 4],
        yAxisName: 'someName'
    },
    {
        // All axes with xAxisId 'aa', 'cc' and all angleAxis will be linked.
        xAxisId: ['aa', 'cc'],
        angleAxis: 'all'
    },
    ...
]
```

As illustrated above, axes can be referred in these approaches in a link group:

```
{
    // 'some' represent the dimension name of a axis, namely, 'x', 'y', 'radius', 'angle', 'single'
    someAxisIndex: [...], // can be an array or a value or 'all'
    someAxisName: [...],  // can be an array or a value or 'all'
    someAxisId: [...],    // can be an array or a value or 'all'
}
```

* * *

* * *

**How to link axes with different [axis.type](option.xAxis.md#type)?**

For example, the type of axisA is 'category', and the type of axisB type is 'time', we can write conversion function (mapper) in link group to convert values from an axis to another axis. For example:

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

Input parameters of mapper:

`{number}` sourceVal

`{Object}` sourceAxisInfo Including {axisDim, axisId, axisName, axisIndex, ...}

`{Object}` targetAxisInfo Including {axisDim, axisId, axisName, axisIndex, ...}

Return of mapper:

`{number}` The result of conversion.

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
    
    Do not triggered by `'mousemove'` and `'click'`
