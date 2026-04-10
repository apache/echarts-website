# option.parallelAxis

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## dim
- **Type**: `number`

Dimension index of coordinate axis.

For example, [series-parallel.data](option.series-parallel.md#data) is the following data:

```
[
    [1,  55,  9,   56,  0.46,  18,  6,  'good'],
    [2,  25,  11,  21,  0.65,  34,  9,  'excellent'],
    [3,  56,  7,   63,  0.3,   14,  5,  'good'],
    [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
    { // Data item can also be an Object, so that perticular settings of its line can be set here.
        value: [5,  42,  24,  44,  0.76,  40,  16, 'excellent']
        lineStyle: {...},
    }
    ...
]
```

In data above, each row is a "data item", and each column represents a "dimension". For example, the meanings of columns above are: "data", "AQI", "PM2.5", "PM10", "carbon monoxide level", "nitrogen dioxide level", and "sulfur dioxide level".

`dim` defines which dimension (which _row_) of data would map to this axis.

Started from `0`. For example, if the `dim` of coordinate axis is `1`, it indicates that the second row of data would map to this axis.

## parallelIndex
- **Type**: `number`
- **Default**: `0`

It is used to define which _coordinate_ the _axis_ should map to.

For example:

```
myChart.setOption({
    parallel: [
        {...},                      // the first parallel coordinate
        {...}                       // the second parallel coordinate
    ],
    parallelAxis: [
        {parallelIndex: 1, ...},    // the first coordinate axis, mapping to the second parallel coordinate
        {parallelIndex: 0, ...},    //  the second coordinate axis, mapping to the first parallel coordinate
        {parallelIndex: 1, ...},    //  the third coordinate axis, mapping to the second parallel coordinate
        {parallelIndex: 0, ...}     //  the fourth coordinate axis, mapping to the first parallel coordinate
    ],
    ...
});
```

If there is only one parallel coordinate, you don't have to configure it, whose default value is `0`.

## realtime
- **Type**: `boolean`
- **Default**: `true`

Whether to refresh view when brush-selecting axis. If is set to be `false`, view is updated after brush-selecting action ends.

When data amount is large, it is suggested to set to be `false` to avoid efficiency problems.

## areaSelectStyle
- **Type**: `Object`

Area selecting is available on axes. Here is some configurations.

### areaSelectStyle.width
- **Type**: `number`
- **Default**: `20`

Width of selecting box.

### areaSelectStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

Border width of the select box.

### areaSelectStyle.borderColor
- **Type**: `Color`
- **Default**: `'rgba(160,197,232)'`

Border color of the select box.

### areaSelectStyle.color
- **Type**: `Color`
- **Default**: `'rgba(160,197,232)'`

Border fill color of the select box.

### areaSelectStyle.opacity
- **Type**: `number`
- **Default**: `0.3`

Opacity of the select box.

## type
- **Type**: `string`
- **Default**: `value`

Type of axis.

Option:

*   `'value'` Numerical axis, suitable for continuous data.
    
*   `'category'` Category axis, suitable for discrete category data. Category data can be auto retrieved from [series.data](../option.md#series.data) or [dataset.source](option.dataset.md#source), or can be specified via [parallelAxis.data](option.parallelAxis.md#data).
    
*   `'time'` Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.
    
*   `'log'` Log axis, suitable for log data. Stacked bar or line series with `type: 'log'` axes may lead to significant visual errors and may have unintended effects in certain circumstances. Their use should be avoided.

## name
- **Type**: `string`

Name of axis.

## nameLocation
- **Type**: `string`
- **Default**: `'end'`

Location of axis name.

**Options:**

*   `'start'`
*   `'middle'` or `'center'`
*   `'end'`

## nameTextStyle
- **Type**: `Object`

Text style of axis name.

### nameTextStyle.color
- **Type**: `Color`

Color of axis name uses [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color) by default.

### nameTextStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

axis name font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### nameTextStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

axis name font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### nameTextStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

axis name font family.

Can also be 'serif' , 'monospace', ...

### nameTextStyle.fontSize
- **Type**: `number`
- **Default**: `12`

axis name font size.

### nameTextStyle.align
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

### nameTextStyle.verticalAlign
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

### nameTextStyle.lineHeight
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

### nameTextStyle.backgroundColor
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

### nameTextStyle.borderColor
- **Type**: `Color`

Border color of the text fragment.

### nameTextStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

### nameTextStyle.borderType
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

### nameTextStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### nameTextStyle.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

### nameTextStyle.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

### nameTextStyle.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

### nameTextStyle.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

### nameTextStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

### nameTextStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

### nameTextStyle.width
- **Type**: `number`

Width of text block.

### nameTextStyle.height
- **Type**: `number`

Height of text block.

### nameTextStyle.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### nameTextStyle.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### nameTextStyle.textBorderType
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

### nameTextStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### nameTextStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### nameTextStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### nameTextStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### nameTextStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### nameTextStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### nameTextStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### nameTextStyle.rich
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

##### nameTextStyle.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### nameTextStyle.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### nameTextStyle.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### nameTextStyle.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### nameTextStyle.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

##### nameTextStyle.rich.<style_name>.align
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

##### nameTextStyle.rich.<style_name>.verticalAlign
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

##### nameTextStyle.rich.<style_name>.lineHeight
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

##### nameTextStyle.rich.<style_name>.backgroundColor
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

##### nameTextStyle.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

##### nameTextStyle.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

##### nameTextStyle.rich.<style_name>.borderType
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

##### nameTextStyle.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### nameTextStyle.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

##### nameTextStyle.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

##### nameTextStyle.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

##### nameTextStyle.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

##### nameTextStyle.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

##### nameTextStyle.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

##### nameTextStyle.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

##### nameTextStyle.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

##### nameTextStyle.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### nameTextStyle.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### nameTextStyle.rich.<style_name>.textBorderType
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

##### nameTextStyle.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### nameTextStyle.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### nameTextStyle.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### nameTextStyle.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### nameTextStyle.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### nameTextStyle.richInheritPlainLabel
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

## nameGap
- **Type**: `number`
- **Default**: `15`

Gap between axis name and axis line.

## nameRotate
- **Type**: `number`

Rotation of axis name.

## nameTruncate
- **Type**: `Object`

Truncation of the axis name.

### nameTruncate.maxWidth
- **Type**: `number`

The maximum length for the truncated text. Any text exceeding this length will be truncated.

### nameTruncate.ellipsis
- **Type**: `string`
- **Default**: `'...'`

The content displayed at the end of the text after truncation.

## inverse
- **Type**: `boolean`
- **Default**: `false`

Set this to `true` to invert the axis. This is a new option available from Echarts 3 and newer.

## boundaryGap
- **Type**: `boolean|Array`

The boundary gap on both sides of a coordinate axis. The setting and behavior of category axes and non-category axes are different.

The `boundaryGap` of category axis can be set to either `true` or `false`. Default value is set to be `true`, in which case [axisTick](option.parallelAxis.md#axisTick) is served only as a separation line, and labels and data appear only in the center part of two [axis ticks](option.parallelAxis.md#axisTick), which is called _band_.

For non-category axis, including time, numerical value, and log axes, `boundaryGap` is an array of two values, representing the spanning range between minimum and maximum value. The value can be set in numeric value or relative percentage, which becomes invalid after setting [min](option.parallelAxis.md#min) and [max](option.parallelAxis.md#max). **Example:**

```
boundaryGap: ['20%', '20%']
```

## min
- **Type**: `number|string|Function`

The minimum value of axis.

It can be set to a special value `'dataMin'` so that the minimum value on this axis is set to be the minimum label.

It will be automatically computed to make sure axis tick is equally distributed when not set.

In category axis, it can also be set as the ordinal number. For example, if a catergory axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as negative number, like `-3`.

If `min` is specified as a function, it should return a min value, like:

```
min: function (value) {
    return value.min - 20;
}
```

`value` is an object, containing the `min` value and `max` value of the data. This function should return the min value of axis, or return `null`/`undefined` to make echarts use the auto calculated min value (`null`/`undefined` return is only supported since `v4.8.0`).

## max
- **Type**: `number|string|Function`

The maximum value of axis.

It can be set to a special value `'dataMax'` so that the maximum value on this axis is set to be the maximum label.

It will be automatically computed to make sure axis tick is equally distributed when not set.

In category axis, it can also be set as the ordinal number. For example, if a catergory axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as negative number, like `-3`.

If `max` is specified as a function, it should return a max value, like:

```
max: function (value) {
    return value.max - 20;
}
```

`value` is an object, containing the `min` value and `max` value of the data. This function should return the max value of axis, or return `null`/`undefined` to make echarts use the auto calculated max value (`null`/`undefined` return is only supported since `v4.8.0`).

## scale
- **Type**: `boolean`
- **Default**: `false`

It is available only in numerical axis, i.e., [type](option.parallelAxis.md#type): 'value'.

It specifies whether not to contain zero position of axis compulsively. When it is set to be `true`, the axis may not contain zero position, which is useful in the scatter chart for both value axes.

This configuration item is unavailable when the [min](option.parallelAxis.md#min) and [max](option.parallelAxis.md#max) are set.

## splitNumber
- **Type**: `number`
- **Default**: `5`

Number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.

This is unavailable for category axis.

## minInterval
- **Type**: `number`
- **Default**: `0`

Minimum gap between split lines.

For example, it can be set to be `1` to make sure axis label is show as integer.

```
{
    minInterval: 1
}
```

It is available only for axis of [type](option.parallelAxis.md#type) 'value' or 'time'.

## maxInterval
- **Type**: `number`

Maximum gap between split lines.

For example, in time axis ([type](option.parallelAxis.md#type) is 'time'), it can be set to be `3600 * 24 * 1000` to make sure that the gap between axis labels is less than or equal to one day.

```
{
    maxInterval: 3600 * 1000 * 24
}
```

It is available only for axis of [type](option.parallelAxis.md#type) 'value' or 'time'.

## interval
- **Type**: `number`

Compulsively set segmentation interval for axis.

As [splitNumber](option.parallelAxis.md#splitNumber) is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with [min](option.parallelAxis.md#min) and [max](option.parallelAxis.md#max) to compulsively set tickings. But in most cases, we do not suggest using this, our automatic calculation is enough for most situations.

This is unavailable for 'category' and 'time' axes. Logged value should be passed for [type](option.parallelAxis.md#type): 'log' axis.

## logBase
- **Type**: `number`
- **Default**: `10`

Base of logarithm, which is valid only for numeric axes with [type](option.parallelAxis.md#type): 'log'.

## startValue
- **Type**: `number`

Since `v5.5.1`

To specify the start value of the axis.

## silent
- **Type**: `boolean`
- **Default**: `false`

Set this to `true`, to prevent interaction with the axis.

## triggerEvent
- **Type**: `boolean`
- **Default**: `false`

Set this to `true` to enable triggering events.

Parameters of the event include:

```
{
    // Component type: xAxis, yAxis, radiusAxis, angleAxis
    // Each of which has an attribute for index, e.g., xAxisIndex for xAxis
    componentType: string,
    // Value on axis before being formatted.
    // Click on value label to trigger event.
    value: '',
    // Name of axis.
    // Click on label name to trigger event.
    name: ''
}
```

## axisLine
- **Type**: `Object`

Settings related to axis line.

### axisLine.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to prevent the axis line from showing.

### axisLine.symbol
- **Type**: `string|Array`
- **Default**: `'none'`

Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It's set to be `'none'` by default, meaning no arrow for either end. If it is set to be `'arrow'`, there shall be two arrows. If there should only one arrow at the end, it should set to be `['none', 'arrow']`.

### axisLine.symbolSize
- **Type**: `Array`
- **Default**: `[10, 15]`

Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.

### axisLine.symbolOffset
- **Type**: `Array|number`
- **Default**: `[0, 0]`

Arrow offset of axis. If is array, the first number is the offset of the arrow at the beginning, and the second number is the offset of the arrow at the end. If is number, it means the arrows have the same offset.

#### axisLine.lineStyle.color
- **Type**: `Color`
- **Default**: `'#333'`

line styleLine color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### axisLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

line style line width.

#### axisLine.lineStyle.type
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

#### axisLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### axisLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### axisLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### axisLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### axisLine.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### axisLine.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### axisLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### axisLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### axisLine.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## axisTick
- **Type**: `Object`

Settings related to axis tick.

### axisTick.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to prevent the axis tick from showing.

### axisTick.alignWithLabel
- **Type**: `boolean`
- **Default**: `false`

Align axis tick with label, which is available only when `boundaryGap` is set to be `true` in category axis. See the following picture:

![](../../documents/asset/img/axis-align-with-label.png)

### axisTick.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

Interval of axisTick, which is available in category axis. is set to be the same as [axisLabel.interval](option.parallelAxis.md#axisLabel.interval) by default.

It uses a strategy that labels do not overlap by default.

You may set it to be 0 to display all labels compulsively.

If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.

On the other hand, you can control by callback function, whose format is shown below:

```
(index:number, value: string) => boolean
```

The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.

### axisTick.inside
- **Type**: `boolean`
- **Default**: `false`

Set this to `true` so the axis labels face the `inside` direction.

### axisTick.length
- **Type**: `number`
- **Default**: `5`

The length of the axis tick.

### axisTick.lineStyle
- **Type**: `Object`

Line style of axis ticks.

#### axisTick.lineStyle.color
- **Type**: `Color`

Color of axis label is set to be [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color) by default.

#### axisTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

axisTick line width.

#### axisTick.lineStyle.type
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

#### axisTick.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### axisTick.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### axisTick.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### axisTick.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### axisTick.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### axisTick.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### axisTick.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### axisTick.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### axisTick.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### axisTick.customValues
- **Type**: `Array`

Since `v5.5.1`

To customize tick positions. For example,

```
axisTick: {
    alignWithLabel: true,
    customValues: [0, 0.5, 1, 1.5, 2, 8, 9]
}
```

![](../../documents/asset/img/axis-tick-label-custom-values.png)

## minorTick
- **Type**: `Object`

Since `v4.6.0`

Settings related minor ticks.

Note: `minorTick` is not available in the `category` type axis.

Examples:

1) Using minor ticks in function plotting.

2) Using minor ticks in log axis.

### minorTick.show
- **Type**: `boolean`
- **Default**: `false`

If show minor ticks.

### minorTick.splitNumber
- **Type**: `number`
- **Default**: `5`

Number of interval splited by minor ticks.

### minorTick.length
- **Type**: `number`
- **Default**: `3`

Length of minor ticks lines。

#### minorTick.lineStyle.color
- **Type**: `Color`

Style configuration of minor ticks lines [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color)。

#### minorTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

minorTick line width.

#### minorTick.lineStyle.type
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

#### minorTick.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### minorTick.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### minorTick.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### minorTick.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### minorTick.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### minorTick.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### minorTick.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### minorTick.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### minorTick.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## axisLabel
- **Type**: `Object`

Settings related to axis label.

### axisLabel.show
- **Type**: `boolean`
- **Default**: `true`

Set this to `false` to prevent the axis label from appearing.

### axisLabel.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

Interval of Axis label, which is available in category axis.

It uses a strategy that labels do not overlap by default.

You may set it to be 0 to display all labels compulsively.

If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.

On the other hand, you can control by callback function, whose format is shown below:

```
(index:number, value: string) => boolean
```

The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.

### axisLabel.inside
- **Type**: `boolean`
- **Default**: `false`

Set this to `true` so the axis labels face the `inside` direction.

### axisLabel.rotate
- **Type**: `number`
- **Default**: `0`

Rotation degree of axis label, which is especially useful when there is no enough space for category axis.

Rotation degree is from -90 to 90.

### axisLabel.margin
- **Type**: `number`
- **Default**: `8`

The margin between the axis label and the axis line.

### axisLabel.formatter
- **Type**: `string|Function`

Formatter of axis label, which supports string template and callback function.

Example:

```
// Use string template; template variable is the default label of axis {value}
formatter: '{value} kg'
// Use callback.
formatter: function (value, index, extra?) {
    return value + 'kg';
}
```

* * *

  

**When [axis break](parallelAxis.breaks) is used**

The break info can be obtained from the `extra` param:

```
type AxisLabelFormatterExtraBreakPart = {
    // If this label is a axis break start or end.
    break?: {
        type: 'start' | 'end';
        // The parsed `start`/`end`, always be numbers, and has been
        // sorted and intersection removed, therefore, they may not
        // equal to the original input of `start`/`end`.
        start: number;
        end: number;
    }
}
formatter = function (value, index, extra: AxisLabelFormatterExtraBreakPart) {
    if (extra && extra.break) {
        console.log(extra.break);
    }
    return value + 'kg';
}
```

Notice: null checking must be performed.

* * *

  

**For a time axis ([`parallelAxis.type: 'time'`](option.parallelAxis.md#type))**

`formatter` supports the following forms:

*   **String Templates**: an easy and fast way to make frequently used date/time template, formed in `string`
*   **Callback Functions**: customized formatter to make complex format, formed in `Function`
*   **Cascading Templates**: to adopt different formatters for different time granularity, formed in `object`

Next, we are going to introduce these three forms one by one.

**String Templates**

Using string templates is an easy way to format date/time with frequently used formats. If it can be used to make what you want, you are advised to do so. If not, you could then consider the others. Supported formats are:

| Group | Template | Value (EN) | Value (ZH) |
| --- | --- | --- | --- |
| Year | {yyyy} | e.g. 2020, 2021, ... | 例：2020, 2021, ... |
|  | {yy} | 00-99 | 00-99 |
| Quarter | {Q} | 1, 2, 3, 4 | 1, 2, 3, 4 |
| Month | {MMMM} | e.g. January, February, ... | 一月、二月、…… |
|  | {MMM} | e.g. Jan, Feb, ... | 1月、2月、…… |
|  | {MM} | 01-12 | 01-12 |
|  | {M} | 1-12 | 1-12 |
| Day of Month | {dd} | 01-31 | 01-31 |
|  | {d} | 1-31 | 1-31 |
| Day of Week | {eeee} | Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday | 星期日、星期一、星期二、星期三、星期四、星期五、星期六 |
|  | {ee} | Sun, Mon, Tues, Wed, Thu, Fri, Sat | 日、一、二、三、四、五、六 |
|  | {e} | 1-54 | 1-54 |
| Hour | {HH} | 00-23 | 00-23 |
|  | {H} | 0-23 | 0-23 |
|  | {hh} | 01-12 | 01-12 |
|  | {h} | 1-12 | 1-12 |
| Minute | {mm} | 00-59 | 00-59 |
|  | {m} | 0-59 | 0-59 |
| Second | {ss} | 00-59 | 00-59 |
|  | {s} | 0-59 | 0-59 |
| Millisecond | {SSS} | 000-999 | 000-999 |
|  | {S} | 0-999 | 0-999 |
| Meridian | {A} | AM, PM (Since `v5.5.1`, i18n will be finished in the next version) | 上午、下午 (`v5.5.1` 仅支持英文，将在下个版本支持中文及其他语言) |
|  | {a} | am, pm | 上午、下午 |

> Templates of other languages can be found in [the language package](https://github.com/apache/echarts/tree/master/src/i18n). Please refer to [echarts.registerLocale](../api-parts/api.echarts.md#registerLocale) to register a language.

Example:

```
formatter: '{yyyy}-{MM}-{dd}' // gets labels like '2020-12-02'
formatter: 'Day {d}' // gets labels like 'Day 2'
```

**Callback Functions**

Callback functions can be used to get different formats for different axis tick values. Sometimes, if you have complex date/time formatting requirement, third-party libraries like [Moment.js](https://momentjs.com/) or [date-fns](https://date-fns.org/) can be used to return formatted labels.

Example:

```
// Use callback function; function parameters are axis index
formatter: function (value, index) {
    // Formatted to be month/day; display year only in the first label
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (index === 0) {
        texts.unshift(date.getFullYear());
    }
    return texts.join('/');
}

// Moreover, `echarts.time.format` can be used:
formatter: function (value, index) {
    // Follow the template rules above.
    const timeStrLocal = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}');
    // The third param `true` indicates that format time based on UTC.
    const timeStrUTC = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}', true);
    // Notice, if using UTC, https://echarts.apache.org/en/option.html#useUTC need to be also set as `true`
    // for consistency.
    return timeStrLocal;
}
```

**Cascading Templates**

Sometimes, we wish to use different formats for different time granularity. For example, in a quarter-year chart, we may wish to see the month name with the first date of the month, while see the date name with others. This can be made with:

Example:

```
formatter: {
    month: '{MMMM}', // Jan, Feb, ...
    day: '{d}' // 1, 2, ...
}
```

Supported levels and their default formatters are:

```
{
    year: '{yyyy}',
    month: '{MMM}',
    day: '{d}',
    hour: '{HH}:{mm}',
    minute: '{HH}:{mm}',
    second: '{HH}:{mm}:{ss}',
    millisecond: '{hh}:{mm}:{ss} {SSS}',
    none: '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}'
}
```

Let's take `day` for example. When a tick value is `0` for its hour, minute, second, and millisecond, `day` level will be used to make formatter. `none` is used when no other level fulfills, which is for tick values with millisecond values other than `0`.

**Rich Text**

The above three forms all support rich text, so it can be used to make some complex effects.

Example:

```
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: {
            // Display year and month information on the first data of a year
            year: '{yearStyle|{yyyy}}\n{monthStyle|{MMM}}',
            month: '{monthStyle|{MMM}}'
        },
        rich: {
            yearStyle: {
                // Make yearly text more standing out
                color: '#000',
                fontWeight: 'bold'
            },
            monthStyle: {
                color: '#999'
            }
        }
    }
},
```

The above example can also be made with a callback function:

Example:

```
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: function (value) {
            const date = new Date(value);
            const yearStart = new Date(value);
            yearStart.setMonth(0);
            yearStart.setDate(1);
            yearStart.setHours(0);
            yearStart.setMinutes(0);
            yearStart.setSeconds(0);
            yearStart.setMilliseconds(0);
            // Whether a tick value is the start of a year
            if (date.getTime() === yearStart.getTime()) {
                return '{year|' + date.getFullYear() + '}\n'
                    + '{month|' + (date.getMonth() + 1) + '月}';
            }
            else {
                return '{month|' + (date.getMonth() + 1) + '月}'
            }
        },
        rich: {
            year: {
                color: '#000',
                fontWeight: 'bold'
            },
            month: {
                color: '#999'
            }
        }
    }
},
```

### axisLabel.showMinLabel
- **Type**: `boolean`

Whether to show the label of the min tick. Optional values: `true`, `false`, `null`. It is auto determined by default, that is, if labels are overlapped, the label of the min tick will not be displayed.

### axisLabel.showMaxLabel
- **Type**: `boolean`

Whether to show the label of the max tick. Optional values: `true`, `false`, `null`. It is auto determined by default, that is, if labels are overlapped, the label of the max tick will not be displayed.

### axisLabel.hideOverlap
- **Type**: `boolean`

Since `v5.2.0`

Whether to hide overlapped labels.

### axisLabel.customValues
- **Type**: `Array`

Since `v5.5.1`

To customize label positions. For example,

```
axisLabel: {
    customValues: [0, 4, 7, 8, 9]
}
```

![](../../documents/asset/img/axis-tick-label-custom-values.png)

### axisLabel.color
- **Type**: `Color|Function`

Color of axis label is set to be [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color) by default. Callback function is supported, in the following format:

```
(val: string) => Color
```

Parameter is the text of label, and return value is the color. See the following example:

```
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```

### axisLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### axisLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### axisLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

### axisLabel.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

### axisLabel.align
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

### axisLabel.verticalAlign
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

### axisLabel.lineHeight
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

### axisLabel.backgroundColor
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

### axisLabel.borderColor
- **Type**: `Color`

Border color of the text fragment.

### axisLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

### axisLabel.borderType
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

### axisLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### axisLabel.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

### axisLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

### axisLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

### axisLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

### axisLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

### axisLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

### axisLabel.width
- **Type**: `number`

Width of text block.

### axisLabel.height
- **Type**: `number`

Height of text block.

### axisLabel.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### axisLabel.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### axisLabel.textBorderType
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

### axisLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### axisLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### axisLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### axisLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### axisLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### axisLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### axisLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

### axisLabel.rich
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

##### axisLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### axisLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### axisLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### axisLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### axisLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

##### axisLabel.rich.<style_name>.align
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

##### axisLabel.rich.<style_name>.verticalAlign
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

##### axisLabel.rich.<style_name>.lineHeight
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

##### axisLabel.rich.<style_name>.backgroundColor
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

##### axisLabel.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

##### axisLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

##### axisLabel.rich.<style_name>.borderType
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

##### axisLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### axisLabel.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

##### axisLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

##### axisLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

##### axisLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

##### axisLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

##### axisLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

##### axisLabel.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

##### axisLabel.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

##### axisLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### axisLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### axisLabel.rich.<style_name>.textBorderType
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

##### axisLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### axisLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### axisLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### axisLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### axisLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### axisLabel.richInheritPlainLabel
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

## data
- **Type**: `Array`

Category data, available in [type](option.parallelAxis.md#type): 'category' axis.

If [type](option.parallelAxis.md#type) is not specified, but `axis.data` is specified, the [type](option.parallelAxis.md#type) is auto set as `'category'`.

If [type](option.parallelAxis.md#type) is specified as `'category'`, but `axis.data` is not specified, `axis.data` will be auto collected from [series.data](../option.md#series.data). It brings convenience, but we should notice that `axis.data` provides then value range of the `'category'` axis. If it is auto collected from [series.data](../option.md#series.data), Only the values appearing in [series.data](../option.md#series.data) can be collected. For example, if [series.data](../option.md#series.data) is empty, nothing will be collected.

Example:

```
// Name list of all categories
data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// Each item could also be a specific configuration item.
// In this case, `value` is used as the category name.
data: [{
    value: 'Monday',
    // Highlight Monday
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

### data.value
- **Type**: `string`

Name of a category.

### data.textStyle
- **Type**: `Object`

Text style of the category.

#### data.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

#### data.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### data.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### data.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### data.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

#### data.textStyle.align
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

#### data.textStyle.verticalAlign
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

#### data.textStyle.lineHeight
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

#### data.textStyle.backgroundColor
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

#### data.textStyle.borderColor
- **Type**: `Color`

Border color of the text fragment.

#### data.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

#### data.textStyle.borderType
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

#### data.textStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### data.textStyle.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

#### data.textStyle.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#### data.textStyle.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

#### data.textStyle.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

#### data.textStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

#### data.textStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

#### data.textStyle.width
- **Type**: `number`

Width of text block.

#### data.textStyle.height
- **Type**: `number`

Height of text block.

#### data.textStyle.textBorderColor
- **Type**: `Color`

Stroke color of the text.

#### data.textStyle.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### data.textStyle.textBorderType
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

#### data.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### data.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### data.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### data.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### data.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### data.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### data.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### data.textStyle.rich
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

###### data.textStyle.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

###### data.textStyle.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.textStyle.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.textStyle.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

###### data.textStyle.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

###### data.textStyle.rich.<style_name>.align
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

###### data.textStyle.rich.<style_name>.verticalAlign
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

###### data.textStyle.rich.<style_name>.lineHeight
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

###### data.textStyle.rich.<style_name>.backgroundColor
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

###### data.textStyle.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

###### data.textStyle.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

###### data.textStyle.rich.<style_name>.borderType
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

###### data.textStyle.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### data.textStyle.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

###### data.textStyle.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

###### data.textStyle.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

###### data.textStyle.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

###### data.textStyle.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

###### data.textStyle.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

###### data.textStyle.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

###### data.textStyle.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

###### data.textStyle.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

###### data.textStyle.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

###### data.textStyle.rich.<style_name>.textBorderType
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

###### data.textStyle.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### data.textStyle.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

###### data.textStyle.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

###### data.textStyle.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

###### data.textStyle.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### data.textStyle.richInheritPlainLabel
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

## tooltip
- **Type**: `Object`

Since `v5.6.0`

The tooltip configuration for parallelAxis, must set [triggerEvent](option.parallelAxis.md#triggerEvent) as `true` and enable global [option.tooltip](option.tooltip.md) component.

### tooltip.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show the tooltip. Defaults to `false`.

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

## animation
- **Type**: `boolean`
- **Default**: `true`

Whether to enable animation.

## animationThreshold
- **Type**: `number`
- **Default**: `2000`

Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.

## animationDuration
- **Type**: `number|Function`
- **Default**: `1000`

Duration of the first animation, which supports callback function for different data to have different animation effect:

```
animationDuration: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

## animationEasing
- **Type**: `string`
- **Default**: `'cubicOut'`

Easing method used for the first animation. Varied easing effects can be found at [easing effect example](https://echarts.apache.org/examples/en/editor.html?c=line-easing).

## animationDelay
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

## animationDurationUpdate
- **Type**: `number|Function`
- **Default**: `300`

Time for animation to complete, which supports callback function for different data to have different animation effect:

```
animationDurationUpdate: function (idx) {
    // delay for later data is larger
    return idx * 100;
}
```

## animationEasingUpdate
- **Type**: `string`
- **Default**: `'cubicOut'`

Easing method used for animation.

## animationDelayUpdate
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
