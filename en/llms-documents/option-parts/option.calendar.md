# option.calendar

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

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
- **Default**: `80`

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
- **Default**: `'auto'`

Distance between undefined component and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

Adaptive by default.

## bottom
- **Type**: `string|number`
- **Default**: `'auto'`

Distance between undefined component and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

Adaptive by default.

## width
- **Type**: `number|string`
- **Default**: `auto`

The height of calendar coordinates.

Note: `cellSize` is 20 by default. If `width` is set, `cellSize[0]` will be forced to `auto`;

## height
- **Type**: `number|string`
- **Default**: `auto`

The height of calendar coordinates.

Note: `cellSize` is 20 by default. If `height` is set, `cellSize[1]` will be forced to `auto`;

## range
- **Type**: `number|string|Array`

Required, range of Calendar coordinates, support multiple formats.

Examples:

```

// one year
range: 2017

// one month
range: '2017-02'

//  a range
range: ['2017-01-02', '2017-02-23']

// note: they will be identified as ['2017-01-01', '2017-02-01']
range: ['2017-01', '2017-02']

```

## cellSize
- **Type**: `number|Array`
- **Default**: `20`

The size of each rect of calendar coordinates, can be set to a single value or array, the first element is width and the second element is height.

Support setting self-adaptation: `auto`, the default width and height to be 20.

Examples:

```

// Set the width and height to be 20
cellSize: 20

// Set the width to be 20, and height to be 40
cellSize: [20, 40]

// Set width and height to be self-adaptation
cellSize: [40]

// Set the width and height to be 20
cellSize: 'auto'

// Set the width to be self-adaptation, and height to be 40
cellSize: ['auto', 40]

```

## orient
- **Type**: `string`
- **Default**: `'horizontal'`

The layout orientation of calendar.

Options:

*   'horizontal'
*   'vertical'

## splitLine
- **Type**: `Object`

Calendar coordinates splitLine style.

### splitLine.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to prevent the splitLine from showing

#### splitLine.lineStyle.color
- **Type**: `Color`
- **Default**: `#000`

splitLineLine color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### splitLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

splitLine line width.

#### splitLine.lineStyle.type
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

#### splitLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### splitLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### splitLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### splitLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### splitLine.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### splitLine.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### splitLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### splitLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### splitLine.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

Examples:

```
calendar: [{
    splitLine: {
        show: true,
        lineStyle: {
            color: '#000',
            width: 1,
            type: 'solid'
        }
    }
}]
```

## itemStyle
- **Type**: `Object`

Every rect style in calendar coordinates.

### itemStyle.color
- **Type**: `Color`
- **Default**: `#fff`

calendar color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

calendar border color, whose format is similar to that of `color`.

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

calendar border width. No border when it is set to be 0.

calendar border width. No border when it is set to be 0.

### itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

calendar border type.

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

### itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

Examples:

```
calendar: [{
    itemStyle: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#ccc'
    }
}]
```

## dayLabel
- **Type**: `Object`

Day style in calendar coordinates.

### dayLabel.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to prevent dayLabel from showing.

### dayLabel.firstDay
- **Type**: `number`
- **Default**: `0`

A week from the beginning of the week, the default starting on Sunday.

Examples:

```

calendar: [{
    dayLabel: {
        firstDay: 1 // start on Monday
    }
}]

```

### dayLabel.margin
- **Type**: `number`
- **Default**: `0`

The margin between the day label and the axis line.

### dayLabel.position
- **Type**: `string`
- **Default**: `'start'`

Position of week, at the beginning or end of the range.

Options:

*   'start'
*   'end'

### dayLabel.nameMap
- **Type**: `string|Array`

Week text content, defaults to 'en'. Since `v5.2.2`, it defaults to the specified `locale` name when [initializing charts](../api-parts/api.echarts.md#init). If not specified, it defaults to the auto-detected locale by the browser language.

It supports Chinese(`cn`), English(`en`), and customized array. Since `v5.2.2`, it also supports any built-in(`EN`/`ZH`) or other registered locale names (case-sensitive).

The index `0` always means `Sunday`.

Examples:

```

// Before v5.2.2

// shortcut to English  ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
nameMap: 'en',
// shortcut to Chinese ['日', '一', '二', '三', '四', '五', '六']
nameMap: 'cn',

// Since v5.2.2

// shortcut to English  ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
nameMap: 'EN',
// shortcut to Chinese ['日', '一', '二', '三', '四', '五', '六']
nameMap: 'ZH',

// Customized: mixed in English and Chinese or not displayed
nameMap: ['S', '一', 'T', '三', '', '五', 'S'],

calendar: [{
    dayLabel: {
        // nameMap: 'en' // Before v5.2.2
        nameMap: 'EN'    // Since v5.2.2
    }
}]
```

### dayLabel.color
- **Type**: `Color`
- **Default**: `#000`

text color.

### dayLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### dayLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### dayLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

### dayLabel.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

### dayLabel.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

### dayLabel.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

### dayLabel.lineHeight
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

### dayLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

### dayLabel.borderColor
- **Type**: `Color`

Border color of the text fragment.

### dayLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

### dayLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

### dayLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### dayLabel.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

### dayLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

### dayLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

### dayLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

### dayLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

### dayLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

### dayLabel.width
- **Type**: `number`

Width of text block.

### dayLabel.height
- **Type**: `number`

Height of text block.

### dayLabel.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### dayLabel.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### dayLabel.textBorderType
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

### dayLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### dayLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### dayLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### dayLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### dayLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### dayLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### dayLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### dayLabel.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

##### dayLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### dayLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### dayLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### dayLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### dayLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

##### dayLabel.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

##### dayLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

##### dayLabel.rich.<style_name>.lineHeight
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

##### dayLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

##### dayLabel.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

##### dayLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

##### dayLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

##### dayLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### dayLabel.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

##### dayLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

##### dayLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

##### dayLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

##### dayLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

##### dayLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

##### dayLabel.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

##### dayLabel.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

##### dayLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### dayLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### dayLabel.rich.<style_name>.textBorderType
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

##### dayLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### dayLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### dayLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### dayLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### dayLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### dayLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### dayLabel.silent
- **Type**: `boolean`
- **Default**: `false`

Since `v5.6.0`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

## monthLabel
- **Type**: `Object`

Month label in calendar coordinates.

### monthLabel.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to prevent monthLabel from showing.

### monthLabel.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

### monthLabel.margin
- **Type**: `number`
- **Default**: `5`

The margin between the month label and the axis line.

### monthLabel.position
- **Type**: `string`
- **Default**: `'start'`

Position of week, at the beginning or end of the range.

Options:

*   'start'
*   'end'

### monthLabel.nameMap
- **Type**: `string|Array`

Month text content, defaults to 'en'. Since `v5.2.2`, it defaults to the specified `locale` name when [initializing charts](../api-parts/api.echarts.md#init). If not specified, it defaults to the auto-detected locale by the browser language.

It supports Chinese(`cn`), English(`en`), and customized array. Since `v5.2.2`, it also supports any built-in(`EN`/`ZH`) or other registered locale names (case-sensitive).

The index `0` always means `Jan`.

Examples:

```

// Before v5.2.2

// Shortcut to English
// ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
nameMap: 'en',
// Shortcut to Chinese
// ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
nameMap: 'cn',

// Since v5.2.2

// Shortcut to English
// ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
nameMap: 'EN',
// Shortcut to Chinese
// ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
nameMap: 'ZH',

// Customized settings: mixed in English, Chinese, Russian or not displayed
nameMap: [
    '一月', 'Feb', '三月',
    '四月', 'May', '六月',
    'Июль', '八月', '',
    '十月', 'Nov', '十二月'
],

calendar: [{
    monthLabel: {
        // nameMap: 'en' // Before v5.2.2
        nameMap: 'EN'    // Since v5.2.2
    }
}]
```

### monthLabel.formatter
- **Type**: `string|Function`

Formatter of month text label, which supports string template and callback function.

Examples:

```
// Use string template; eg: 2017-02
/*
    template variables:
    {nameMap} default nameMap eg：'Feb'
    {yyyy}   four-digit years eg: 2017
    {yy}   two-digit years eg: 17
    {MM}   two-digit month eg: 02
    {M}   single-digit month eg: 2
*/
formatter: '{yyyy}-{MM}'

// Use callback function;
/*
    function parameters:
    param.nameMap default nameMap eg：'Feb'
    param.yyyy   four-digit years eg: 2017
    param.yy   two-digit years eg: 17
    param.MM   two-digit month eg: 02
    param.M   single-digit eg: 2
*/
formatter: function (param) {
    // ...
    return param.MM;
}
```

### monthLabel.color
- **Type**: `Color`
- **Default**: `#000`

text color.

### monthLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### monthLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### monthLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

### monthLabel.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

### monthLabel.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

### monthLabel.lineHeight
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

### monthLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

### monthLabel.borderColor
- **Type**: `Color`

Border color of the text fragment.

### monthLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

### monthLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

### monthLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### monthLabel.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

### monthLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

### monthLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

### monthLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

### monthLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

### monthLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

### monthLabel.width
- **Type**: `number`

Width of text block.

### monthLabel.height
- **Type**: `number`

Height of text block.

### monthLabel.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### monthLabel.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### monthLabel.textBorderType
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

### monthLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### monthLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### monthLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### monthLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### monthLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### monthLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### monthLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### monthLabel.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

##### monthLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### monthLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### monthLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### monthLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### monthLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

##### monthLabel.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

##### monthLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

##### monthLabel.rich.<style_name>.lineHeight
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

##### monthLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

##### monthLabel.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

##### monthLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

##### monthLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

##### monthLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### monthLabel.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

##### monthLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

##### monthLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

##### monthLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

##### monthLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

##### monthLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

##### monthLabel.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

##### monthLabel.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

##### monthLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### monthLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### monthLabel.rich.<style_name>.textBorderType
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

##### monthLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### monthLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### monthLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### monthLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### monthLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### monthLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### monthLabel.silent
- **Type**: `boolean`
- **Default**: `false`

Since `v5.6.0`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

## yearLabel
- **Type**: `Object`

Year label in calendar coordinates.

### yearLabel.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to stop yearLabel from showing

### yearLabel.margin
- **Type**: `number`
- **Default**: `30`

The margin between the month label and the axis line.

### yearLabel.position
- **Type**: `string`

Position of year.

Default: when orient is set as `horizontal`, position is `left` when orient is set as `vertical`, position is `top`

Options:

*   'top'
*   'bottom'
*   'left'
*   'right'

### yearLabel.formatter
- **Type**: `string|Function`

Formatter of year text label, which supports string template and callback function.

By default, the current range of the year, if the interval across the year, showing the first year and the last year

Examples:

```
// Use string template; eg: ['2017-10-11', '2018-01-21']
/*
    template variables:
    {nameMap} default nameMap eg：'2017-2018'
    {start}   start year eg: 2017
    {end}   end year eg: 2018
*/

formatter: '{start}-{end}'

// Use callback function;
/*
    function parameters:
    param.nameMap default nameMap eg：'2017-2018'
    param.start   start year eg: 2017
    param.end   end year eg: 2018
*/
formatter: function (param) {
    // ...
    return param.end;
}
```

### yearLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

### yearLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### yearLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### yearLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

### yearLabel.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

### yearLabel.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

### yearLabel.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

### yearLabel.lineHeight
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

### yearLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

### yearLabel.borderColor
- **Type**: `Color`

Border color of the text fragment.

### yearLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

### yearLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

### yearLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### yearLabel.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

### yearLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

### yearLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

### yearLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

### yearLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

### yearLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

### yearLabel.width
- **Type**: `number`

Width of text block.

### yearLabel.height
- **Type**: `number`

Height of text block.

### yearLabel.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### yearLabel.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### yearLabel.textBorderType
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

### yearLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### yearLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### yearLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### yearLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### yearLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### yearLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### yearLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### yearLabel.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

##### yearLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### yearLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### yearLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### yearLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### yearLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

##### yearLabel.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

##### yearLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

##### yearLabel.rich.<style_name>.lineHeight
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

##### yearLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

##### yearLabel.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

##### yearLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

##### yearLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

##### yearLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### yearLabel.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

##### yearLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

##### yearLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

##### yearLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

##### yearLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

##### yearLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

##### yearLabel.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

##### yearLabel.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

##### yearLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### yearLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### yearLabel.rich.<style_name>.textBorderType
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

##### yearLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### yearLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### yearLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### yearLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### yearLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### yearLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### yearLabel.silent
- **Type**: `boolean`
- **Default**: `false`

Since `v5.6.0`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

## silent
- **Type**: `boolean`
- **Default**: `false`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.
