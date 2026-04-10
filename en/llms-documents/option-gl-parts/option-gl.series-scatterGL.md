# option-gl.series-scatterGL

## name
- **Type**: `string`

Series name used for displaying in [tooltip](https://echarts.apache.org/zh/option.html#tooltip) and filtering with [legend](https://echarts.apache.org/zh/option.html#legend), or updating data and configuration with `setOption`.

## coordinateSystem
- **Type**: `string`
- **Default**: `'cartesian2d'`

The coordinate system used.

Same as [scatter.coordinateSystem](https://echarts.apache.org/en/option.html#series-scatter.coordinateSystem)

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

Sets the style of scatter

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

## data
- **Type**: `Array`

The data array of scatter.

The data format is the same as [scatter.data](https://echarts.apache.org/en/option.html#series-scatter.data)

### data.name
- **Type**: `string`

The name of the data item.

### data.value
- **Type**: `number|Array`

Data item value

### data.itemStyle
- **Type**: `Object`

The style of a single data graphic.

#### data.itemStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the graphic.

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### data.itemStyle.opacity
- **Type**: `number`
- **Default**: `0.8`

The opacity of the graphic.

#### data.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Sets the width of the border.

#### data.itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

Sets the color of the border.

## blendMode
- **Type**: `string`
- **Default**: `'source-over'`

Sets the type of compositing operation to apply when drawing a new shape.

Currently supporting `'source-over'`, `'lighter'`. The default is `'source-over'` mode is blended by alpha. The `'lighter'` is overlap mode. In this mode, the area where the number of graphics is concentrated can be highlighted by the overlap.

## zlevel
- **Type**: `number`
- **Default**: `10`

The layer in which the component is located.

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

**Note:** The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same `zlevel` cannot be used for both WebGL and Canvas drawing at the same time.

## progressiveThreshold
- **Type**: `number`
- **Default**: `100000`

Enable progressive rendering thresholds, progressive rendering can be loading the screen without blocking.

## progressive
- **Type**: `number`
- **Default**: `100000`

Progressively render the amount of data per render.
