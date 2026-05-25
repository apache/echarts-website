# option.dataZoom-slider

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## show
- **Type**: `boolean`
- **Default**: `true`

Whether to show the component. If is set to be `false`, it will not show, but its data filtering function still works.

## backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(47,69,84,0)'`

The background color of the component.

## dataBackground
- **Type**: `Object`

The style of data shadow.

### dataBackground.lineStyle
- **Type**: `Object`

Line style of data shadow

#### dataBackground.lineStyle.color
- **Type**: `Color`
- **Default**: `#d2dbee`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### dataBackground.lineStyle.width
- **Type**: `number`
- **Default**: `0.5`

line width.

#### dataBackground.lineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

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

#### dataBackground.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### dataBackground.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### dataBackground.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### dataBackground.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### dataBackground.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### dataBackground.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### dataBackground.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### dataBackground.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### dataBackground.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### dataBackground.areaStyle
- **Type**: `Object`

Area style of data shadow

#### dataBackground.areaStyle.color
- **Type**: `Color`
- **Default**: `#d2dbee`

Fill color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### dataBackground.areaStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### dataBackground.areaStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### dataBackground.areaStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### dataBackground.areaStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### dataBackground.areaStyle.opacity
- **Type**: `number`
- **Default**: `0.2`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## selectedDataBackground
- **Type**: `Object`

Since `v5.0.0`

Styles of selected data shadow.

### selectedDataBackground.lineStyle
- **Type**: `Object`

Line style of selected data shadow.

#### selectedDataBackground.lineStyle.color
- **Type**: `Color`
- **Default**: `#8fb0f7`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### selectedDataBackground.lineStyle.width
- **Type**: `number`
- **Default**: `0.5`

line width.

#### selectedDataBackground.lineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

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

#### selectedDataBackground.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### selectedDataBackground.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### selectedDataBackground.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### selectedDataBackground.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### selectedDataBackground.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### selectedDataBackground.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### selectedDataBackground.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### selectedDataBackground.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### selectedDataBackground.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### selectedDataBackground.areaStyle
- **Type**: `Object`

Area style of selected data shadow.

#### selectedDataBackground.areaStyle.color
- **Type**: `Color`
- **Default**: `#8fb0f7`

Fill color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### selectedDataBackground.areaStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### selectedDataBackground.areaStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### selectedDataBackground.areaStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### selectedDataBackground.areaStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### selectedDataBackground.areaStyle.opacity
- **Type**: `number`
- **Default**: `0.2`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## fillerColor
- **Type**: `Color`
- **Default**: `'rgba(47,69,84,0.25)'`

The color to fill selected area.

## borderColor
- **Type**: `Color`
- **Default**: `'#d2dbee'`

The color of border.

## borderRadius
- **Type**: `number|Array`
- **Default**: `3`

The radius of rounded corner. Its unit is px. And it supports use array to respectively specify the 4 corner radiuses.

For example:

```
borderRadius: 5, // consistently set the size of 4 rounded corners
borderRadius: [5, 5, 0, 0] // (clockwise upper left, upper right, bottom right and bottom left)
```

## handleIcon
- **Type**: `string`

Icon shape of handle, which supports path string. Its default value is:

```
'M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z'
```

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

## handleSize
- **Type**: `number|string`
- **Default**: `'100%'`

The size of control handle. It can be in pixels, or in percentage relative to the width of dataZoom component. By default, it's the same as the width of dataZoom component.

## handleStyle
- **Type**: `Object`

Style of handle. Please refer to [area-simple example](https://echarts.apache.org/examples/en/editor.html?c=area-simple).

### handleStyle.color
- **Type**: `Color`
- **Default**: `#fff`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### handleStyle.borderColor
- **Type**: `Color`
- **Default**: `#ACB8D1`

border color, whose format is similar to that of `color`.

### handleStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

### handleStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### handleStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### handleStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### handleStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### handleStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### handleStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### handleStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### handleStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### handleStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### handleStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## handleLabel
- **Type**: `Object`

Since `v5.6.0`

Style settings for the text near the handle.

### handleLabel.show
- **Type**: `boolean`
- **Default**: `false`

Since `v5.6.0`

Whether to show the label.

## moveHandleIcon
- **Type**: `string`

Since `v5.0.0`

Icon of move handle.

```
'M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z'
```

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

## moveHandleSize
- **Type**: `number`
- **Default**: `7`

Since `v5.0.0`

Size of move handle.

## moveHandleStyle
- **Type**: `Object`

Since `v5.0.0`

Style of move handle.

### moveHandleStyle.color
- **Type**: `Color`
- **Default**: `#D2DBEE`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### moveHandleStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

### moveHandleStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

### moveHandleStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### moveHandleStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### moveHandleStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### moveHandleStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### moveHandleStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### moveHandleStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### moveHandleStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### moveHandleStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### moveHandleStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### moveHandleStyle.opacity
- **Type**: `number`
- **Default**: `0.7`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## labelPrecision
- **Type**: `number|string`
- **Default**: `'auto'`

Precision of label if in number form. By default, it is decided based on the number of data.

## labelFormatter
- **Type**: `string|Function`

The formatter tool for the label.

*   It is a template if in `string`. For instance, `aaaa{value}bbbb`, where `{value}` will be replaced by the value of actual data value.
    
*   It is a callback function if in `Function`. For example:
    

```
/**
 * @param {*} value If axis.type is 'category', `value` is the index of axis.data.
 *                  else `value` is current value.
 * @param {strign} valueStr Inner formatted string.
 * @return {string} Returns the label formatted.
 */
labelFormatter: function (value, valueStr) {
    return 'aaa' + value + 'bbb';
}
```

## showDetail
- **Type**: `boolean`
- **Default**: `true`

Whether to show detail, that is, show the detailed data information when dragging.

## showDataShadow
- **Type**: `string`
- **Default**: `'auto'`

Whether to show data shadow in `dataZoom-silder` component, to indicate the data tendency in brief.

## realtime
- **Type**: `boolean`
- **Default**: `true`

Whether to update view while dragging. If it is set as `false`, the view will be updated only at the end of dragging.

### textStyle.color
- **Type**: `Color`
- **Default**: `#333`

dataZoom text color.

### textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

dataZoom font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

dataZoom font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

dataZoom font family.

Can also be 'serif' , 'monospace', ...

### textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

dataZoom font size.

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

## xAxisIndex
- **Type**: `number|Array`

Specify which [xAxis](option.xAxis.md) is/are controlled by the `dataZoom-slider` when [catesian coordinate system](option.grid.md) is used.

By default the first `xAxis` that parallel to `dataZoom` are controlled when [dataZoom-slider.orient](option.dataZoom-slider.md#orient) is set as `'horizontal'`. But it is recommended to specify it explicitly but not use default value.

If it is set as a single `number`, one axis is controlled, while if it is set as an `Array` , multiple axes are controlled.

For example:

```
option: {
    xAxis: [
        {...}, // The first xAxis
        {...}, // The second xAxis
        {...}, // The third xAxis
        {...}  // The fourth xAxis
    ],
    dataZoom: [
        { // The first dataZoom component
            xAxisIndex: [0, 2] // Indicates that this dataZoom component
                                     // controls the first and the third xAxis
        },
        { // The second dataZoom component
            xAxisIndex: 3      // indicates that this dataZoom component
                                     // controls the fourth xAxis
        }
    ]
}
```

## yAxisIndex
- **Type**: `number|Array`

Specify which [yAxis](option.yAxis.md) is/are controlled by the `dataZoom-slider` when [catesian coordinate system](option.grid.md) is used.

By default the first `yAxis` that parallel to `dataZoom` are controlled when [dataZoom-slider.orient](option.dataZoom-slider.md#orient) is set as `'vertical'`. But it is recommended to specify it explicitly but not use default value.

If it is set as a single `number`, one axis is controlled, while if it is set as an `Array` , multiple axes are controlled.

For example:

```
option: {
    yAxis: [
        {...}, // The first yAxis
        {...}, // The second yAxis
        {...}, // The third yAxis
        {...}  // The fourth yAxis
    ],
    dataZoom: [
        { // The first dataZoom component
            yAxisIndex: [0, 2] // Indicates that this dataZoom component
                                     // controls the first and the third yAxis
        },
        { // The second dataZoom component
            yAxisIndex: 3      // indicates that this dataZoom component
                                     // controls the fourth yAxis
        }
    ]
}
```

## radiusAxisIndex
- **Type**: `number|Array`

Specify which [radiusAxis](option.radiusAxis.md) is/are controlled by the `dataZoom-slider` when [polar coordinate system](option.polar.md) is used.

If it is set as a single `number`, one axis is controlled, while if it is set as an `Array` , multiple axes are controlled.

For example:

```
option: {
    radiusAxis: [
        {...}, // The first radiusAxis
        {...}, // The second radiusAxis
        {...}, // The third radiusAxis
        {...}  // The fourth radiusAxis
    ],
    dataZoom: [
        { // The first dataZoom component
            radiusAxisIndex: [0, 2] // Indicates that this dataZoom component
                                     // controls the first and the third radiusAxis
        },
        { // The second dataZoom component
            radiusAxisIndex: 3      // indicates that this dataZoom component
                                     // controls the fourth radiusAxis
        }
    ]
}
```

## angleAxisIndex
- **Type**: `number|Array`

Specify which [angleAxis](option.angleAxis.md) is/are controlled by the `dataZoom-slider` when [polar coordinate system](option.polar.md) is used.

If it is set as a single `number`, one axis is controlled, while if it is set as an `Array` , multiple axes are controlled.

For example:

```
option: {
    angleAxis: [
        {...}, // The first angleAxis
        {...}, // The second angleAxis
        {...}, // The third angleAxis
        {...}  // The fourth angleAxis
    ],
    dataZoom: [
        { // The first dataZoom component
            angleAxisIndex: [0, 2] // Indicates that this dataZoom component
                                     // controls the first and the third angleAxis
        },
        { // The second dataZoom component
            angleAxisIndex: 3      // indicates that this dataZoom component
                                     // controls the fourth angleAxis
        }
    ]
}
```

## filterMode
- **Type**: `string`
- **Default**: `'filter'`

Generally `dataZoom` component zoom or roam coordinate system through data filtering and set the windows of axes internally.

Its behaviours vary according to filtering mode settings ([dataZoom.filterMode](../option.md#dataZoom.filterMode)).

Possible values:

*   'filter': data that outside the window will be **filtered out**, which may lead to some changes of windows of other axes. For each data item, it will be filtered out if one of the relevant dimensions is out of the window.
    
*   'weakFilter': data that outside the window will be **filtered out**, which may lead to some changes of windows of other axes. For each data item, it will be filtered out only if all of the relevant dimensions are out of the same side of the window.
    
*   'empty': data that outside the window will be **set to NaN**, which will not lead to changes of windows of other axes.
    
*   'none': Do not filter data.
    

How to set `filterMode` is up to users, depending on the requirements and scenarios. Expirically:

*   If only `xAxis` or only `yAxis` is controlled by `dataZoom`, `filterMode: 'filter'` is typically used, which enable the other axis auto adapte its window to the extent of the filtered data.
    
*   If both `xAxis` and `yAxis` are operated by `dataZoom`:
    
    *   If `xAxis` and `yAxis` should not effect mutually (e.g. a scatter chart with both axes on the type of `'value'`), they should be set to be `filterMode: 'empty'`.
        
    *   If `xAxis` is the main axis and `yAxis` is the auxiliary axis (or vise versa) (e.g., in a bar chart, when dragging `dataZoomX` to change the window of xAxis, we need the yAxis to adapt to the clipped data, but when dragging `dataZoomY` to change the window of yAxis, we need the xAxis not to be changed), in this case, `xAxis` should be set to be `filterMode: 'filter'`, while `yAxis` should be set to be `filterMode: 'empty'`.
        

It can be demonstrated by the sample:

```
option = {
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    xAxis: {type: 'value'},
    yAxis: {type: 'value'},
    series{
        type: 'bar',
        data: [
            // The first column corresponds to xAxis,
            // and the second column corresponds to yAxis.
            [12, 24, 36],
            [90, 80, 70],
            [3, 9, 27],
            [1, 11, 111]
        ]
    }
}
```

In the sample above, `dataZoomX` is set as `filterMode: 'filter'`. When use drags `dataZoomX` (do not touch `dataZoomY`) and the valueWindow of `xAxis` is changed to `[2, 50]` consequently, `dataZoomX` travel the first column of series.data and filter items that out of the window. The series.data turns out to be:

```
[
    [12, 24, 36],
    // [90, 80, 70] This item is filtered out, as 90 is out of the window.
    [3, 9, 27]
    // [1, 11, 111] This item is filtered out, as 1 is out of the window.
]
```

Before filtering, the second column, which corresponds to yAxis, has values `24`, `80`, `9`, `11`. After filtering, only `24` and `9` are left. Then the extent of `yAxis` is adjusted to adapt the two values (if `yAxis.min` and `yAxis.max` are not set).

So `filterMode: 'filter'` can be used to enable the other axis to auto adapt the filtered data.

Then let's review the sample from the beginning, `dataZoomY` is set as `filterMode: 'empty'`. So if user drags `dataZoomY` (do not touch `dataZoomX`) and its window is changed to `[10, 60]` consequently, `dataZoomY` travels the second column of series.data and set NaN to all of the values that outside the window (NaN cause the graphical elements, i.e., bar elements, do not show, but still hold the place). The series.data turns out to be:

```
[
    [12, 24, 36],
    [90, NaN, 70], // Set to NaN
    [3, NaN, 27],  // Set to NaN
    [1, 11, 111]
]
```

In this case, the first column (i.e., `12`, `90`, `3`, `1`, which corresponds to `xAxis`), will not be changed at all. So dragging `yAxis` will not change extent of `xAxis`, which is good for requirements like outlier filtering.

See this example:

## start
- **Type**: `number`
- **Default**: `0`

The start percentage of the window out of the data extent, in the range of 0 ~ 100.

[dataZoom-slider.start](option.dataZoom-slider.md#start) and [dataZoom-slider.end](option.dataZoom-slider.md#end) define the window of the data in **percent** form.

More info about the relationship between `dataZoom-slider.start` and axis extent can be checked in [dataZoom-slider.rangeMode](option.dataZoom-slider.md#rangeMode).

## end
- **Type**: `number`
- **Default**: `100`

The end percentage of the window out of the data extent, in the range of 0 ~ 100.

[dataZoom-slider.start](option.dataZoom-slider.md#start) and [dataZoom-slider.end](option.dataZoom-slider.md#end) define the window of the data in **percent** form.

More info about the relationship between `dataZoom-slider.end` and axis extent can be checked in [dataZoom-slider.rangeMode](option.dataZoom-slider.md#rangeMode).

## startValue
- **Type**: `number|string|Date`

The start absolute value of the window, not works when [dataZoom-slider.start](option.dataZoom-slider.md#start) is set.

[dataZoom-slider.startValue](option.dataZoom-slider.md#startValue) and [dataZoom-slider.endValue](option.dataZoom-slider.md#endValue) define the window of the data window in **absolute value** form.

Notice, if an axis is set to be `category`, `startValue` could be set as `index` of the array of `axis.data` or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.

More info about the relationship between `dataZoom-slider.startValue` and axis extent can be checked in [dataZoom-slider.rangeMode](option.dataZoom-slider.md#rangeMode).

## endValue
- **Type**: `number|string|Date`

The end absolute value of the window, doesn't work when [dataZoom-slider.end](option.dataZoom-slider.md#end) is set.

[dataZoom-slider.startValue](option.dataZoom-slider.md#startValue) and [dataZoom-slider.endValue](option.dataZoom-slider.md#endValue) define the window of the data window in **absolute value** form.

Notice, if an axis is set to be `category`, `startValue` could be set as `index` of the array of `axis.data` or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.

More info about the relationship between `dataZoom-slider.endValue` and axis extent can be checked in [dataZoom-slider.rangeMode](option.dataZoom-slider.md#rangeMode).

## minSpan
- **Type**: `number`

Used to restrict minimal window size, in percent, which value is in the range of \[0, 100\].

If [dataZoom-slider.minValueSpan](option.dataZoom-slider.md#minValueSpan) is set, `minSpan` does not work any more.

## maxSpan
- **Type**: `number`

Used to restrict maximal window size, in percent, which value is in the range of \[0, 100\].

If [dataZoom-slider.maxValueSpan](option.dataZoom-slider.md#maxValueSpan) is set, `maxSpan` does not work any more.

## minValueSpan
- **Type**: `number|string|Date`

Used to restrict minimal window size.

For example: In time axis it can be set as `3600 * 24 * 1000 * 5` to represent "5 day". In category axis it can be set as `5` to represent 5 categories.

## maxValueSpan
- **Type**: `number|string|Date`

Used to restrict maximal window size.

For example: In time axis it can be set as `3600 * 24 * 1000 * 5` to represent "5 day". In category axis it can be set as `5` to represent 5 categories.

## orient
- **Type**: `string`

Specify whether the layout of `dataZoom` component is horizontal or vertical. What's more, it indicates whether the horizontal axis or vertical axis is controlled by default in catesian coordinate system.

Valid values:

*   `'horizontal'`: horizontal.
    
*   `'vertical'`: vertical.

## zoomLock
- **Type**: `boolean`
- **Default**: `false`

Specify whether to lock the size of window (selected area).

When set as `true`, the size of window is locked, that is, only the translation (by mouse drag or touch drag) is available but zoom is not.

## throttle
- **Type**: `number`
- **Default**: `100`

Specify the frame rate of views refreshing, with unit millisecond (ms).

If [animation](../option.md#animation) set as `true` and [animationDurationUpdate](../option.md#animationDurationUpdate) set as bigger than `0`, you can keep `throttle` as the default value `100` (or set it as a value bigger than `0`), otherwise it might be not smooth when dragging.

If [animation](../option.md#animation) set as `false` or [animationDurationUpdate](../option.md#animationDurationUpdate) set as `0`, and data size is not very large, and it seems to be not smooth when dragging, you can set `throttle` as `0` to improve that.

## rangeMode
- **Type**: `Array`

The format is `[rangeModeForStart, rangeModeForEnd]`.

For example `rangeMode: ['value', 'percent']` means that use absolute value in `start` and percent value in `end`.

Optional value for each item: `'value'`, `'percent'`.

*   `'value'` mode: the axis extent will always only be determined by `dataZoom.startValue` and `dataZoom.endValue`, despite how data like and how `axis.min` and `axis.max` are.
*   `'percent'` mode: `100` represents 100% of the `[dMin, dMax]`, where `dMin` is `axis.min` if `axis.min` specified, otherwise `data.extent[0]`, and `dMax` is `axis.max` if `axis.max` specified, otherwise `data.extent[1]`. Axis extent will only be determined by the result of the percent of `[dMin, dMax]`.

`rangeMode` are auto determined by whether `option.start`/`option.end` are specified (represents `'percent'` mode) or `option.startValue`/`option.endValue` specified (represents `'value'` mode). And when user behavior trigger the changing of the view, the `rangeMode` would be modified automatically. For example, if triggered by `toolbox.dataZoom`, it will be modefied to `'value'`, and if triggered by `dataZoom-inside` or `dataZoom-slider`, it will be modified to `'percent'`.

If we specify `rangeMode` manually in `option`, it only works when both `start` and `startValue` specified or both `end` and `endValue` specified. So usually we do not need to specify `dataZoom.rangeMode` manually.

Take a scenario as an example. When we are using dynamic data (update data periodically via `setOption`), if in `'value`' mode, the window will be kept in a fixed value range despite how data are appended, while if in `'percent'` mode, whe window range will be changed alone with the appended data (suppose `axis.min` and `axis.max` are not specified).

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
- **Default**: `'auto'`

Distance between dataZoom-slider component and the left side of the container.

`left` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

## top
- **Type**: `string|number`
- **Default**: `'auto'`

Distance between dataZoom-slider component and the top side of the container.

`top` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

## right
- **Type**: `string|number`
- **Default**: `'auto'`

Distance between dataZoom-slider component and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

Adaptive by default.

## bottom
- **Type**: `string|number`
- **Default**: `'auto'`

Distance between dataZoom-slider component and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

Adaptive by default.

## coordinateSystem
- **Type**: `string`
- **Default**: `'none'`

Since `v6.0.0`

Specifies another coordinate system component on which this `dataZoom-slider` is laid out.

Options:

*   `null`/`undefined`/`'none'`
    
    Not laid out in any coordinate system; instead, laid out independently.
    

*   `'calendar'`
    
    Lay out based on a [calendar coordinate system](option.calendar.md). When multiple calendar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [calendarIndex](option.dataZoom-slider.md#calendarIndex) or [calendarId](option.dataZoom-slider.md#calendarId).
    

*   `'matrix'`
    
    Lay out based on a [matrix coordinate system](option.matrix.md). When multiple matrix coordinate systems exist within an ECharts instance, the corresponding system should be specified using [matrixIndex](option.dataZoom-slider.md#matrixIndex) or [matrixId](option.dataZoom-slider.md#matrixId).
    

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

See also [dataZoom-slider.coordinateSystemUsage](option.dataZoom-slider.md#coordinateSystemUsage).

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'box'`

Since `v6.0.0`

Specify how to lay out this `dataZoom-slider` based on the specified [coordinateSystem](option.dataZoom-slider.md#coordinateSystem).

In most cases, there is no need to specify `coordinateSystemUsage`, unless the default behavior is unexpected.

Options:

*   `'data'`: **(Not applicable in [dataZoom-slider](option.dataZoom-slider.md))**
    
    Each data item of a series (e.g., each `series.data[i]`) is laid out separately based on the specified coordinate system. Currently no non-series component supports `coordinateSystemUsage: 'data'`.
    
*   `'box'`:
    
    The entire series or component is laid out as a whole based on the specified coordinate system - that is, the overall bounding rect or basic anchor point is calculated relative to the system.
    
    *   For example, a [grid component](option.grid.md) can be laid out in a [matrix coordinate system](option.matrix.md) or a [calendar coordinate system](option.calendar.md), where its layout rectangle is calculated by the specified [dataZoom-slider.coords](option.dataZoom-slider.md#coords) in that system. See example [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1).
    *   For example, a [pie series](option.series-pie.md) or a [chord series](option.series-chord.md) can be laid out in a [geo coordinate system](option.geo.md) or a [cartesian2d coordinate system](option.grid.md), where the center is calculated by the specified [series-pie.coords](option.series-pie.md#coords) or [series-pie.center](option.series-pie.md#center) in that system. See example [pie in geo](https://echarts.apache.org/examples/en/editor.html?c=map-iceland-pie&edit=1&reset=1).

See also [dataZoom-slider.coordinateSystem](option.dataZoom-slider.md#coordinateSystem).

## coord
- **Type**: `Array|number|string`

Since `v6.0.0`

When [coordinateSystemUsage](option.dataZoom-slider.md#coordinateSystemUsage) is `'box'`, `coord` is used as the input to the coordinate system and calculate the layout rectangle or anchor point.

Examples: [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1), [grpah in matrix](https://echarts.apache.org/examples/en/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> Note: when [coordinateSystemUsage](option.dataZoom-slider.md#coordinateSystemUsage) is `'data'`, the input of coordinate system is `series.data[i]` rather than this `coord`.

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

## width
- **Type**: `string|number`

Width of dataZoom-slider component. Default to 30 when vertical, adaptive when horizontal.

Has higher priority than `left` and `right`.

## height
- **Type**: `string|number`

Height of dataZoom-slider component. Default to 30 when horizontal, adaptive when vertical.

Has higher priority than `top` and `bottom`.

## brushSelect
- **Type**: `boolean`
- **Default**: `true`

Since `v5.0.0`

Whether to enable brush to select.

## brushStyle
- **Type**: `Object`

Since `v5.0.0`

Style of brushing area.

### brushStyle.color
- **Type**: `Color`
- **Default**: `rgba(135,175,274,0.15)`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### brushStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

### brushStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

### brushStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### brushStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### brushStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### brushStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### brushStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### brushStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### brushStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### brushStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### brushStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### brushStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## emphasis
- **Type**: `Object`

Since `v5.0.0`

Style when highlighted.

#### emphasis.handleStyle.color
- **Type**: `Color`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### emphasis.handleStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

#### emphasis.handleStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

#### emphasis.handleStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### emphasis.handleStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### emphasis.handleStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### emphasis.handleStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### emphasis.handleStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### emphasis.handleStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### emphasis.handleStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### emphasis.handleStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### emphasis.handleStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### emphasis.handleStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### emphasis.handleLabel
- **Type**: `Object`

Since `v5.6.0`

Style settings for the text near the handle.

#### emphasis.handleLabel.show
- **Type**: `boolean`
- **Default**: `false`

Since `v5.6.0`

Whether to show the label.

#### emphasis.moveHandleStyle.color
- **Type**: `Color`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### emphasis.moveHandleStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

#### emphasis.moveHandleStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

#### emphasis.moveHandleStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### emphasis.moveHandleStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### emphasis.moveHandleStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### emphasis.moveHandleStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### emphasis.moveHandleStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### emphasis.moveHandleStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### emphasis.moveHandleStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### emphasis.moveHandleStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### emphasis.moveHandleStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### emphasis.moveHandleStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.
