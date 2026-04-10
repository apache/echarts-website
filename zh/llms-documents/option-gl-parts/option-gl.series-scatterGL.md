# option-gl.series-scatterGL

## name
- **Type**: `string`

系列名称，用于 [tooltip](https://echarts.apache.org/zh/option.html#tooltip) 的显示，[legend](https://echarts.apache.org/zh/option.html#legend) 的图例筛选，在 `setOption` 更新数据和配置项时用于指定对应的系列。

## coordinateSystem
- **Type**: `string`
- **Default**: `'cartesian2d'`

使用的坐标系。

同 [scatter.coordinateSystem](https://echarts.apache.org/zh/option.html#series-scatter.coordinateSystem)

## symbol
- **Type**: `string`
- **Default**: `'circle'`

散点的形状。默认为圆形。

ECharts 提供的标记类型包括 `'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

可以通过 `'path://'` 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适（如果是 `symbol` 的话就是 `symbolSize`）的大小。路径的格式参见 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。可以从 Adobe Illustrator 等工具编辑导出。

## symbolSize
- **Type**: `number|Array|Function`
- **Default**: `10`

标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示宽和高，例如 `[20, 10]` 表示标记宽为`20`，高为`10`。

如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：

```
(value: Array|number, params: Object) => number|Array
```

其中第一个参数 `value` 为 [data](../option-gl.md#series-.data) 中的数据值。第二个参数`params` 是其它的数据项参数。

## itemStyle
- **Type**: `Object`

散点图的样式设置。

### itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

### itemStyle.opacity
- **Type**: `number`
- **Default**: `0.8`

图形的不透明度。

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

图形描边宽度。

### itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

图形描边颜色。

## data
- **Type**: `Array`

散点图的数据集。

数据格式同 [scatter.data](https://echarts.apache.org/zh/option.html#series-scatter.data)

### data.name
- **Type**: `string`

数据项名称。

### data.value
- **Type**: `number|Array`

数据项值

### data.itemStyle
- **Type**: `Object`

单个数据图形的样式。

#### data.itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### data.itemStyle.opacity
- **Type**: `number`
- **Default**: `0.8`

图形的不透明度。

#### data.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

图形描边宽度。

#### data.itemStyle.borderColor
- **Type**: `string`
- **Default**: `'#fff'`

图形描边颜色。

## blendMode
- **Type**: `string`
- **Default**: `'source-over'`

混合模式，目前支持`'source-over'`，`'lighter'`，默认使用的`'source-over'`是通过 alpha 混合，而`'lighter'`是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果。

## zlevel
- **Type**: `number`
- **Default**: `10`

组件所在的层。

`zlevel`用于 Canvas 分层，不同`zlevel`值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的`zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。

**注:** echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 `zlevel` 不能同时用于 WebGL 和 Canvas 的绘制。

## progressiveThreshold
- **Type**: `number`
- **Default**: `100000`

启用渐进渲染的阈值，渐进渲染可以让你在加载画面的过程中不会有阻塞。

## progressive
- **Type**: `number`
- **Default**: `100000`

渐进渲染每次渲染的数据量。
