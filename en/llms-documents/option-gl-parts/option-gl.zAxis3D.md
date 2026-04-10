# option-gl.zAxis3D

## show
- **Type**: `boolean`

Whether to display the z-axis.

## name
- **Type**: `string`
- **Default**: `'Z'`

The name of the axis.

## grid3DIndex
- **Type**: `number`
- **Default**: `0`

The index of the [grid3D](option-gl.grid3D.md) component used by the axis. The default is to use the first [grid3D](option-gl.grid3D.md) component.

## nameTextStyle
- **Type**: `Object`

Text style of axis name.

### nameTextStyle.color
- **Type**: `Color`

Color of axis name uses [axisLine.lineStyle.color](option-gl.zAxis3D.md#axisLine.lineStyle.color) by default.

### nameTextStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of the text.

### nameTextStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

### nameTextStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

### nameTextStyle.fontSize
- **Type**: `number`
- **Default**: `16`

The font size of the text.

### nameTextStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## nameGap
- **Type**: `number`
- **Default**: `20`

The gap between the axis name and axis line. Note the distance is in 3D space, not the screen pixel value.

## type
- **Type**: `string`
- **Default**: `value`

The type of the axis.

Optional:

*   `'value'` The value axis. Suitable for continuous data.
    
*   `'category'` The category axis. Suitable for the discrete category data. For this type, the category data must be set through [data](option-gl.zAxis3D.md#data).
    
*   `'time'` The timeline. Suitable for the continuous timing data. The time axis has a time format compared to the value axis, and the scale calculation is also different. For example, the scale of the month, week, day, and hour ranges can be determined according to the range of the span.
    
*   `'log'` Logarithmic axis. Suitable for the logarithmic data.

## min
- **Type**: `number|string`

The minimum value of axis.

It can be set to a special value `'dataMin'` so that the minimum value on this axis is set to be the minimum label.

It will be automatically computed to make sure the axis tick is equally distributed when not set.

In the category axis, it can also be set as the ordinal number. For example, if a category axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as a negative number, like `-3`.

## max
- **Type**: `number|string`

The maximum value of the axis.

It can be set to a special value `'dataMax'` so that the maximum value on this axis is set to be the maximum label.

It will be automatically computed to make sure the axis tick is equally distributed when not set.

In the category axis, it can also be set as the ordinal number. For example, if a category axis has `data: ['categoryA', 'categoryB', 'categoryC']`, and the ordinal `2` represents `'categoryC'`. Moreover, it can be set as a negative number, like `-3`.

## scale
- **Type**: `boolean`
- **Default**: `false`

It is available only in numerical axis, i.e., [type](option-gl.zAxis3D.md#type): 'value'.

It specifies whether not to contain zero position of axis compulsively. When it is set to be `true`, the axis may not contain zero position, which is useful in the scatter chart for both value axes.

This configuration item is unavailable when the [min](option-gl.zAxis3D.md#min) and [max](option-gl.zAxis3D.md#max) are set.

## splitNumber
- **Type**: `number`
- **Default**: `5`

The number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.

This is unavailable for the category axis.

## minInterval
- **Type**: `number`
- **Default**: `0`

Minimum gap between split lines.

For example, it can be set to be `1` to make sure the axis label is shown as an integer.

```
{
    minInterval: 1
}
```

It is available only for axis of [type](option-gl.zAxis3D.md#type) 'value' or 'time'.

## interval
- **Type**: `number`

Compulsively set segmentation interval for axis.

As [splitNumber](option-gl.zAxis3D.md#splitNumber) is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with [min](option-gl.zAxis3D.md#min) and [max](option-gl.zAxis3D.md#max) to compulsively set tickings. But in most cases, we do not suggest using this, out automatic calculation is enough for most situations.

This is unavailable for 'category' and 'time' axes. Logged value should be passed for [type](option-gl.zAxis3D.md#type): 'log' axis.

## logBase
- **Type**: `number`
- **Default**: `10`

Base of logarithm, which is valid only for numeric axes with [type](option-gl.zAxis3D.md#type): 'log'.

## data
- **Type**: `Array`

Category data, available in [type](option-gl.zAxis3D.md#type): 'category' axis.

If [type](option-gl.zAxis3D.md#type) is specified as `'category'`, but `axis.data` is not specified, `axis.data` will be auto collected from [series.data](../option-gl.md#series.data). It brings convenience, but we should notice that `axis.data` provides then value range of the `'category'` axis. If it is auto collected from [series.data](../option-gl.md#series.data), Only the values appearing in [series.data](../option-gl.md#series.data) can be collected. For example, if [series.data](../option-gl.md#series.data) is empty, nothing will be collected.

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
- **Type**: `string`
- **Default**: `"#fff"`

The Color of the text.

#### data.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of the text.

#### data.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

#### data.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

#### data.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

The font size of the text.

#### data.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

The display interval of

## axisLine
- **Type**: `Object`

Settings related to axis line.

### axisLine.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis line from showing.

### axisLine.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis.

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

#### axisLine.lineStyle.color
- **Type**: `string`
- **Default**: `'#333'`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### axisLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### axisLine.lineStyle.width
- **Type**: `number`
- **Default**: `2`

The width of the line.

## axisLabel
- **Type**: `Object`

Settings related to axis label.

### axisLabel.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis label from appearing.

### axisLabel.margin
- **Type**: `number`
- **Default**: `8`

The margin between the axis label and the axis line.

**Note：** This distance is three-dimensional space, not screen space.

### axisLabel.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis.

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

#### axisLabel.textStyle.color
- **Type**: `Color|Function`

Color of axis label is set to be [axisLine.lineStyle.color](../option-gl.md#.axisLine.lineStyle.color) by default. Callback function is supported, in the following format:

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

#### axisLabel.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of the text.

#### axisLabel.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

#### axisLabel.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

#### axisLabel.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

The font size of the text.

#### axisLabel.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## axisTick
- **Type**: `Object`

Settings related to axis tick.

### axisTick.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis tick from showing.

### axisTick.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis. Defaults to the same as [axisLabel.interval](../option-gl.md#.axisLabel.interval).

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

### axisTick.length
- **Type**: `number`
- **Default**: `5`

The length of the axis tick.

#### axisTick.lineStyle.color
- **Type**: `Color`

Color of axis label is set to be [axisLine.lineStyle.color](../option-gl.md#.axisLine.lineStyle.color) by default.

#### axisTick.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### axisTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

## splitLine
- **Type**: `Object`

Settings related to axis line.

### splitLine.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis line from showing.

### splitLine.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis.

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

#### splitLine.lineStyle.color
- **Type**: `string`
- **Default**: `'#333'`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### splitLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### splitLine.lineStyle.width
- **Type**: `number`
- **Default**: `2`

The width of the line.

## splitArea
- **Type**: `Object`

Split area of axis in [grid](../option-gl.md#grid) area.

### splitArea.show
- **Type**: `boolean`
- **Default**: `false`

Set this to be `true` to show the splitArea.

### splitArea.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

Axis splitArea is valid in the category axis. Defaults to the same as [axisLabel.interval](../option-gl.md#.axisLabel.interval).

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

### splitArea.areaStyle
- **Type**: `Object`

Split area style.

#### splitArea.areaStyle.color
- **Type**: `Array`
- **Default**: `['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']`

Color of the split area. The split area color could also be set in color array, which the split lines would take as their colors in turns. Dark and light colors in turns are used by default.

## axisPointer
- **Type**: `Object`

Configurations for axis pointer.

### axisPointer.show
- **Type**: `boolean`
- **Default**: `true`

Whether to display the axisPointer. Set this to be `true` to show the splitArea.

#### axisPointer.lineStyle.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.8)'`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### axisPointer.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### axisPointer.lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

### axisPointer.label
- **Type**: `Object`

The label of axisPointer.

#### axisPointer.label.show
- **Type**: `boolean`
- **Default**: `true`

Whether to display the label of axisPointer. Value axes are displayed by default, while category axes are not.

#### axisPointer.label.formatter
- **Type**: `Function`

The formatter of the label. . The first parameter to the function is the value of the current axis. The second parameter to the function is an array of values for all axes.

```
(value: number, valueAll: Array) => string
```

#### axisPointer.label.margin
- **Type**: `number`

Distance between label and axis. Like the scale label, this distance is a 3D space rather than a screen pixel.

##### axisPointer.label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

The Color of the text.

##### axisPointer.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of the text.

##### axisPointer.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

##### axisPointer.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

##### axisPointer.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `16`

The font size of the text.

##### axisPointer.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...
