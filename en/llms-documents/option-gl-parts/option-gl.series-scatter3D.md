# option-gl.series-scatter3D

## name
- **Type**: `string`

Series name used for displaying in [tooltip](https://echarts.apache.org/zh/option.html#tooltip) and filtering with [legend](https://echarts.apache.org/zh/option.html#legend), or updating data and configuration with `setOption`.

## coordinateSystem
- **Type**: `string`

The coordinate used in the series, whose options are:

*   `'cartesian3D'`
    
    Use a 3D rectangular coordinate (also known as Cartesian coordinate), with [xAxisIndex](../option-gl.md#series-.xAxisIndex) and [yAxisIndex](../option-gl.md#series-.yAxisIndex) to assign the corresponding axis component.
    

*   `'geo3D'` Use 3D geographic coordinate, with [geoIndex](../option-gl.md#series-.geoIndex) to assign the corresponding 3D geographic coordinate components.

*   `'globe'`
    
    Use 3D globe coordinate, with [globeIndex](../option-gl.md#series-.globeIndex) to assign the corresponding 3D globe coordinate components.

## grid3DIndex
- **Type**: `number`
- **Default**: `0`

Use the index of the [grid3D](option-gl.grid3D.md) component. The first [grid3D](option-gl.grid3D.md) component is used by default.

## geo3DIndex
- **Type**: `number`
- **Default**: `0`

The index of the [geo3D](option-gl.geo3D.md) component used by the axis.The first [grid3D](option-gl.grid3D.md) component is used by default.

## globeIndex
- **Type**: `number`
- **Default**: `0`

The index of the [globe](option-gl.globe.md) component used by the axis.The first [globe](option-gl.globe.md) component is used by default.

## symbol
- **Type**: `string`
- **Default**: `'circle'`

The shape of the scatter. The default is a circle.

Icon types provided by ECharts includes `'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

## symbolSize
- **Type**: `number|Array|Function`
- **Default**: `10`

symbol size. It can be set to single numbers like `10`, or use an array to represent width and height. For example, `[20, 10]` means symbol width is `20`, and height is`10`.

If size of symbols needs to be different, you can set with callback function in the following format:

```
(value: Array|number, params: Object) => number|Array
```

The first parameter `value` is the value in [data](../option-gl.md#series-.data), and the second parameter `params` is the rest parameters of data item.

## itemStyle
- **Type**: `Object`

Sets the style of scatter such as colors, strokes, etc.

### itemStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the graphic.

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

### itemStyle.opacity
- **Type**: `number`
- **Default**: `0.8`

The opacity of the graphic.

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Sets the width of the border.

### itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

Sets the color of the border.

## label
- **Type**: `Object`

Sets the style of label.

### label.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show the label.

### label.distance
- **Type**: `number`
- **Default**: `5`

Distance to the host graphic element.

The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.

### label.position
- **Type**: `string`
- **Default**: `right`

The location of the label.

**Optional:**

*   'top'
*   'left'
*   'right'
*   'bottom'

### label.formatter
- **Type**: `Function|string`

The formatter of the label content, which supports the string template and the callback function. In either form, `\n` is supported to represent a new line.

**String template:**

The model variation includes:

*   `{a}`: series name.
*   `{b}`: the name of a data item.
*   `{c}`: the value of a data item.

**Example:**

```
formatter: '{b}: {c}'
```

**Callback function:** Callback function is in form of:

```
(params: Object|Array) => string
```

The `params` is the single data set needed by formatter, which is formed as:

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

}
```

Note: the usage of encode and dimensionNames can be:

If data is:

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

We can get values that corresponding to y axis by:

```
params.value[params.encode.y[0]]
```

If data is:

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

We can get values that corresponding to y axis by:

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

### label.textStyle
- **Type**: `Object`

The font style of the label.

#### label.textStyle.color
- **Type**: `string`
- **Default**: `#000`

The Color of the text.

#### label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

The border width of the text.

#### label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

#### label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

#### label.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

The font size of the text.

#### label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## emphasis
- **Type**: `Object`

Graphics and labels are highlighted.

#### emphasis.itemStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the graphic.

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### emphasis.itemStyle.opacity
- **Type**: `number`
- **Default**: `0.8`

The opacity of the graphic.

#### emphasis.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Sets the width of the border.

#### emphasis.itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

Sets the color of the border.

#### emphasis.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show the label.

#### emphasis.label.distance
- **Type**: `number`
- **Default**: `5`

Distance to the host graphic element.

The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.

#### emphasis.label.position
- **Type**: `string`
- **Default**: `right`

The location of the label.

**Optional:**

*   'top'
*   'left'
*   'right'
*   'bottom'

#### emphasis.label.formatter
- **Type**: `Function|string`

The formatter of the label content, which supports the string template and the callback function. In either form, `\n` is supported to represent a new line.

**String template:**

The model variation includes:

*   `{a}`: series name.
*   `{b}`: the name of a data item.
*   `{c}`: the value of a data item.

**Example:**

```
formatter: '{b}: {c}'
```

**Callback function:** Callback function is in form of:

```
(params: Object|Array) => string
```

The `params` is the single data set needed by formatter, which is formed as:

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

}
```

Note: the usage of encode and dimensionNames can be:

If data is:

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

We can get values that corresponding to y axis by:

```
params.value[params.encode.y[0]]
```

If data is:

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

We can get values that corresponding to y axis by:

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### emphasis.label.textStyle
- **Type**: `Object`

The font style of the label.

##### emphasis.label.textStyle.color
- **Type**: `string`
- **Default**: `#000`

The Color of the text.

##### emphasis.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

The border width of the text.

##### emphasis.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

##### emphasis.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

##### emphasis.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

The font size of the text.

##### emphasis.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## data
- **Type**: `Array`

The data array of scatter3D. Each item in the array is a piece of data. Usually, this data stores each attribute/dimension of the data in an array. As Follows:

```
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

For each item in the array：

1.  In [grid3D](option-gl.grid3D.md) ,the first three values of each item are`x`, `y`, `z`.
2.  In [geo3D](option-gl.geo3D.md) and [globe](globe) ,the first two values of each item are longitude `lng`, latitude `lat`,

In addition to the default values for the coordinates, each item can be added with any number of values to [visualMap](../option-gl.md#visualMap) the component for any other graphical property, such as color, etc.

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

## blendMode
- **Type**: `string`
- **Default**: `'source-over'`

Sets the type of compositing operation to apply when drawing a new shape.

Currently supporting `'source-over'`, `'lighter'`. The default is `'source-over'` mode is blended by alpha. The `'lighter'` is overlap mode. In this mode, the area where the number of graphics is concentrated can be highlighted by the overlap.

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
