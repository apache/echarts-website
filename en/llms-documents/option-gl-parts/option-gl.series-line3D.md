# option-gl.series-line3D

## name
- **Type**: `string`

Series name used for displaying in [tooltip](https://echarts.apache.org/zh/option.html#tooltip) and filtering with [legend](https://echarts.apache.org/zh/option.html#legend), or updating data and configuration with `setOption`.

## coordinateSystem
- **Type**: `string`
- **Default**: `cartesian3D`

The coordinate used in the series, whose options are:

*   `'cartesian3D'`
    
    Use a 3D rectangular coordinate (also known as Cartesian coordinate), with [xAxisIndex](../option-gl.md#series-.xAxisIndex) and [yAxisIndex](../option-gl.md#series-.yAxisIndex) to assign the corresponding axis component.

## grid3DIndex
- **Type**: `number`
- **Default**: `0`

Use the index of the [grid3D](option-gl.grid3D.md) component. The first [grid3D](option-gl.grid3D.md) component is used by default.

## lineStyle
- **Type**: `Object`

The style of the lines.

### lineStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

### lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

### lineStyle.width
- **Type**: `number`
- **Default**: `2`

The width of the line.

#### lineStyle.lineStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### lineStyle.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### lineStyle.lineStyle.width
- **Type**: `number`
- **Default**: `2`

The width of the line.

## data
- **Type**: `Array`

A data array. Each item of the array is a piece of data. Usually this data is an array to store each attribute/dimension of the data. For example below:

```
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

The first three values of each item in the array are `x`, `y`, `z`. In addition to these three values, you can add other values to the [visualMap](../option-gl.md#visualMap) component to map to other graphical properties such as colors.

More likely, we need to assign name to each data item, in which case each item should be an object:

```
[{
    // name of date item
    name: 'data1',
    // value of date item is 8
    value: [12, 14, 10]
}, {
    name: 'data2',
    value: 20
}]
```

Each data item can be further customized:

```
[{
    name: 'data1',
    value: [12, 14, 10]
}, {
    // name of data item
    name: 'data2',
    value : [34, 50, 15],
    // user-defined special itemStyle that only useful for this data item
    itemStyle:{}
}]
```

### data.name
- **Type**: `string`

The name of data item.

### data.value
- **Type**: `Array`

Data value.

### data.itemStyle
- **Type**: `Object`

The style setting of a single data item.

#### data.itemStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### data.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### data.itemStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

## zlevel
- **Type**: `number`
- **Default**: `-10`

The layer in which the component is located.

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

**Note:** The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same `zlevel` cannot be used for both WebGL and Canvas drawing at the same time.

## silent
- **Type**: `boolean`
- **Default**: `false`

Whether the graph doesn\`t respond and triggers a mouse event. The default is false, which is to respond to and trigger mouse events.

## animation
- **Type**: `boolean`
- **Default**: `true`

Whether to enable animation.

## animationDurationUpdate
- **Type**: `number`
- **Default**: `500`

The duration time for update the transition animation.

## animationEasingUpdate
- **Type**: `string`
- **Default**: `cubicOut`

The easing effect for update transition animation.
