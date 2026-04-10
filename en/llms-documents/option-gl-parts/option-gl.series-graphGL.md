# option-gl.series-graphGL

## name
- **Type**: `string`

Series name used for displaying in [tooltip](https://echarts.apache.org/zh/option.html#tooltip) and filtering with [legend](https://echarts.apache.org/zh/option.html#legend), or updating data and configuration with `setOption`.

## layout
- **Type**: `string`
- **Default**: `'forceAtlas2'`

The continuous graph layout algorithm supports the [forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) algorithm layout using gephi.

## forceAtlas2
- **Type**: `Object`

[forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) a continuous graph layout algorithm.

The algorithm has efficient layout efficiency and stable layout results for large-scale network data.

Support for configuring GPU or CPU layout via [forceAtlas2.GPU](option-gl.series-graphGL.md#forceAtlas2.GPU).

The advantage of the CPU is that it is compatible, and the GPU implementation has dozens or even hundreds of performance advantages in high-end graphics cards.

Below is a performance comparison of the iteration of a layout of a 2w node (nearly 5w edges) on a GTX1070 and an i7 4GHz computer.

![](../../documents/asset/gl/img/gpu-layout-perf.png)

### forceAtlas2.GPU
- **Type**: `boolean`
- **Default**: `true`

Whether to enable GPU layout.

### forceAtlas2.steps
- **Type**: `number`
- **Default**: `1`

The number of iterations of an update. Because the force-guided algorithm usually draws the results of each iteration, but because the drawing time tends to be greater than the layout time, the layout efficiency will be reduced. At this time, we can set a larger `steps` parameter to ensure the layout and Draw time equalization and speed up the layout.

### forceAtlas2.stopThreshold
- **Type**: `number`
- **Default**: `1`

Stops the threshold of the layout and stops the layout when the global velocity factor of the layout is less than this threshold. Set to 0 to never stop.

### forceAtlas2.barnesHutOptimize
- **Type**: `boolean`

Whether to enable \[Barnes Hut\] ([https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut\_simulation](https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation)) optimization, valid when [forceAtlas2.GPU](option-gl.series-graphGL.md#forceAtlas2.GPU) is false.

The default is on when the number of nodes > 1000.

### forceAtlas2.repulsionByDegree
- **Type**: `number`
- **Default**: `true`

Whether to calculate the repulsion factor of the node according to the degree of nodes, it is recommended to turn it on.

### forceAtlas2.linLogMode
- **Type**: `boolean`
- **Default**: `false`

Whether it is the `lin-log` mode. The `lin-log` mode makes the nodes of the cluster more compact.

### forceAtlas2.gravity
- **Type**: `number`
- **Default**: `1`

The gravity that the node is subjected to. This force will make the nodes close to the center.

### forceAtlas2.gravityCenter
- **Type**: `Array`

The position of the gravity center. By default, is the middle point of the initial position.

### forceAtlas2.scaling
- **Type**: `number`

The scaling factor of the layout. The larger the value, the greater the repulsive force between the nodes.

### forceAtlas2.edgeWeightInfluence
- **Type**: `number`
- **Default**: `1`

The influence factor of the edge weight. The larger the value, the greater the effect of edge weight on gravity.

Note: This factor is exponential, so it is invalid when the edge weights are `0` and `1`.

### forceAtlas2.edgeWeight
- **Type**: `Array|number`
- **Default**: `[1, 4]`

The weight distribution of the edges. Mapped from [links.value](option-gl.series-graphGL.md#links.value).

Support is set to a single number, which is the uniform weight value.

### forceAtlas2.nodeWeight
- **Type**: `Array|number`
- **Default**: `[1, 4]`

The weight distribution of the nodes. Mapped from [nodes.value](option-gl.series-graphGL.md#nodes.value).

Support is set to a single number, which is the uniform weight value.

### forceAtlas2.preventOverlap
- **Type**: `boolean`
- **Default**: `false`

Whether to prevent the nodes from overlapping.

## symbol
- **Type**: `string`
- **Default**: `'circle'`

The shape of the scatter. The default is a circle.

Icon types provided by ECharts includes `'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

## symbolSize
- **Type**: `number|Array|Function`
- **Default**: `5`

symbol size. It can be set to single numbers like `10`, or use an array to represent width and height. For example, `[20, 10]` means symbol width is `20`, and height is`10`.

If size of symbols needs to be different, you can set with callback function in the following format:

```
(value: Array|number, params: Object) => number|Array
```

The first parameter `value` is the value in [data](../option-gl.md#series-.data), and the second parameter `params` is the rest parameters of data item.

## itemStyle
- **Type**: `Object`

The style settings for the node.

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
- **Default**: `1`

The opacity of the graphic.

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Sets the width of the border.

### itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

Sets the color of the border.

## lineStyle
- **Type**: `Object`

The style setting of the relationship line.

### lineStyle.color
- **Type**: `string`
- **Default**: `#aaa`

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
- **Default**: `1`

The width of the line.

## data
- **Type**: `Array`

The data set of the node.

The data format is the same as [graph.data](https://echarts.apache.org/en/option.html#series-graph.data)

### data.name
- **Type**: `string`

The name of the data item.

### data.value
- **Type**: `number|Array`

Data item value.

### data.itemStyle
- **Type**: `Object`

The style of a single node.

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
- **Default**: `1`

The opacity of the graphic.

#### data.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

Sets the width of the border.

#### data.itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

Sets the color of the border.

## nodes
- **Type**: `Array`

Same as [graphGL.data](option-gl.series-graphGL.md#data).

## links
- **Type**: `Array`

Relational data between nodes. The data format is the same as [graph.links](https://echarts.apache.org/en/option.html#series-graph.links)

### links.source
- **Type**: `string`

A string of source node names for edges also supports the use of numbers to represent the index of the source node.

### links.target
- **Type**: `string`

A string of the target node name for the edge, which also supports the use of numbers to represent the index of the source node.

### links.value
- **Type**: `number`

The value of the edge.

### links.lineStyle
- **Type**: `Object`

The style of a single edge.

#### links.lineStyle.color
- **Type**: `string`
- **Default**: `#aaa`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### links.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### links.lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

## edges
- **Type**: `Array`

Same as [graphGL.links](option-gl.series-graphGL.md#links)

## zlevel
- **Type**: `number`
- **Default**: `10`

The layer in which the component is located.

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

**Note:** The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same `zlevel` cannot be used for both WebGL and Canvas drawing at the same time.
