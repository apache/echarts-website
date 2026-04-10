# option.series-custom

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## name
- **Type**: `string`

系列名称，用于[tooltip](option.tooltip.md)的显示，[legend](option.legend.md) 的图例筛选，在 `setOption` 更新数据和配置项时用于指定对应的系列。

## colorBy
- **Type**: `string`
- **Default**: `'series'`

从 `v5.2.0` 开始支持

从调色盘 [option.color](../option.md#color) 中取色的策略，可取值为：

*   `'series'`：按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；
*   `'data'`：按照数据项分配调色盘中的颜色，每个数据项都使用不同的颜色。

## legendHoverLink
- **Type**: `boolean`
- **Default**: `true`

是否启用[图例](option.legend.md) hover 时的联动高亮。

## coordinateSystem
- **Type**: `string`
- **Default**: `'cartesian2d'`

指定另一个坐标系组件，本 `series-custom` 布局在那个坐标系中。

可选值：

*   `null`、`undefined` 或者 `'none'`
    
    不布局在任何坐标系中。自己独立完成布局。
    

*   `'cartesian2d'`
    
    布局在一个二维 [直角坐标系（也称笛卡尔坐标系）](option.grid.md) 中。当一个 ECharts 实例中存在多个 x 坐标轴（`xAxis`）时或者多个 y 坐标轴（`yAxis`）时，须通过 [xAxisIndex](option.series-custom.md#xAxisIndex) 和 [yAxisIndex](option.series-custom.md#yAxisIndex) 或者 [xAxisId](option.series-custom.md#xAxisId) 和 [yAxisId](option.series-custom.md#yAxisId) 指定所使用的坐标轴。
    
    注：一些常用的系列，例如 [折线图（series-line）](option.series-line.md), [柱状图（series-bar）](option.series-bar.md) 等，不能直接布局于 [矩阵坐标系（matrix）](option.matrix.md) 或者 [日历坐标系（calendar）](option.calendar.md) 中，但是他们能布局在 [直角坐标系（grid）](option.grid.md) 中，然后这个 [直角坐标系（grid）](option.grid.md) 可以布局在 [矩阵坐标系（matrix）](option.matrix.md) 或 [日历坐标系（calendar）](option.calendar.md) 中。
    

*   `'polar'`
    
    布局在一个 [极坐标系](option.polar.md) 中。当一个 ECharts 实例中存在多个极坐标系时，须通过 [polarIndex](option.series-custom.md#polarIndex) 或 [polarId](option.series-custom.md#polarId) 指定所使用的极坐标系。
    

*   `'geo'`
    
    布局在一个 [地理坐标系](option.geo.md) 中。当一个 ECharts 实例中存在多个地理坐标系时，须通过 [geoIndex](option.series-custom.md#geoIndex) 或 [geoId](option.series-custom.md#geoId) 指定所使用的地理坐标系。
    

*   `'singleAxis'`
    
    布局在一个 [单轴坐标系](option.singleAxis.md) 中。当一个 ECharts 实例中存在多个单轴坐标系时，须通过 [singleAxisIndex](option.series-custom.md#singleAxisIndex) 或 [singleAxisId](option.series-custom.md#singleAxisId) 指定所使用的单轴标系。
    

*   `'calendar'`
    
    布局在一个 [日历坐标系](option.calendar.md) 中。当一个 ECharts 实例中存在多个日历坐标系时，须通过 [calendarIndex](option.series-custom.md#calendarIndex) 或 [calendarId](option.series-custom.md#calendarId) 指定所使用的日历坐标系。
    

*   `'matrix'`
    
    布局在一个 [矩阵坐标系](option.matrix.md)中。当一个 ECharts 实例中存在多个矩阵坐标系时，须通过 [matrixIndex](option.series-custom.md#matrixIndex) 或 [matrixId](option.series-custom.md#matrixId) 指定所使用的矩阵坐标系。
    

**下表总结了“某系列或组件是否支持布局在某坐标系上”：**

最左列列出了要布局的系列和组件（坐标系本身也是组件），最上行列出了所基于的坐标系。

|  | no coord sys | [grid](option.grid.md) (cartesian2d) | [polar](option.polar.md) | [geo](option.geo.md) | [singleAxis](option.singleAxis.md) | [radar](option.radar.md) | [parallel](option.parallel.md) | [calendar](option.calendar.md) | [matrix](option.matrix.md) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [grid](option.grid.md) (cartesian2d) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [polar](option.polar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [geo](option.geo.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [singleAxis](option.singleAxis.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [calendar](option.calendar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [matrix](option.matrix.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-line](option.series-line.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) |
| [series-bar](option.series-bar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) |
| [series-pie](option.series-pie.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-scatter](option.series-scatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-effectScatter](option.series-effectScatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-radar](option.series-radar.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (✅ 如果通过 [radar](option.radar.md) 坐标系) | ❌ (✅ 如果通过 [radar](option.radar.md) 坐标系) |
| [series-tree](option.series-tree.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-treemap](option.series-treemap.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sunburst](option.series-sunburst.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-boxplot](option.series-boxplot.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) |
| [series-candlestick](option.series-candlestick.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) |
| [series-heatmap](option.series-heatmap.md) | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-map](option.series-map.md) | ✅ (create a geo coord sys exclusively) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-parallel](option.series-parallel.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ (✅ 如果通过 [parallel](option.parallel.md) 坐标系) | ❌ (✅ 如果通过 [parallel](option.parallel.md) 坐标系) |
| [series-lines](option.series-lines.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [geo](option.geo.md)) | ❌ (✅ 如果通过其他坐标系，如 [geo](option.geo.md)) |
| [series-graph](option.series-graph.md) | ✅ (create a "view" coord sys exclusively) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sankey](option.series-sankey.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-funnel](option.series-funnel.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-gauge](option.series-gauge.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-pictorialBar](option.series-pictorialBar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) | ❌ (✅ 如果通过其他坐标系，如 [grid](option.grid.md)) |
| [series-themeRiver](option.series-themeRiver.md) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ (✅ 如果通过其他坐标系，如 [singleAxis](option.singleAxis.md)) | ❌ (✅ 如果通过其他坐标系，如 [singleAxis](option.singleAxis.md)) |
| [series-chord](option.series-chord.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [title](option.title.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [legend](option.legend.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [dataZoom](../option.md#dataZoom) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [visualMap](../option.md#visualMap) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [toolbox](option.toolbox.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [timeline](option.timeline.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [thumbnail](option.thumbnail.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

也参见 [series-custom.coordinateSystemUsage](option.series-custom.md#coordinateSystemUsage)。

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'data'`

从 `v6.0.0` 开始支持

如何在指定的 [坐标系](option.series-custom.md#coordinateSystem) 上布局本 `series-custom`。

在大多数情况下，无需显式指定 `coordinateSystemUsage`，除非默认行为不符合预期。

可选值：

*   `'data'`：
    
    此系列的每个数据项（例如，每个 `series.data[i]`）将独立地在指定的坐标系进行布局。 注：当前没有任何“非系列组件”支持 `coordinateSystemUsage: 'data'`。
    
*   `'box'`：**（不适用于 [series-custom](option.series-custom.md)）**
    
    此系列或组件作为一个整体，在指定的坐标系中进行布局——即根据坐标系计算整体的包围盒或基础锚点。
    
    *   例如，[grid 组件](option.grid.md) 可以布局在 [matrix 坐标系](option.matrix.md) 或 [calendar 坐标系](option.calendar.md) 中，这时其布局矩形是由 [series-custom.coords](option.series-custom.md#coords) 在坐标系中计算出来的。参见示例：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1)。
    *   又如，[饼图系列](option.series-pie.md) 或 [和弦图系列](option.series-chord.md) 可以布局在 [geo 坐标系](option.geo.md) 或 [cartesian2d 坐标系](option.grid.md) 中，这时其中心点是由 [series-pie.coords](option.series-pie.md#coords) 或 [series-pie.center](option.series-pie.md#center) 在坐标系中计算出来的。参见示例：[地理坐标系中的饼图](https://echarts.apache.org/examples/zh/editor.html?c=map-iceland-pie&edit=1&reset=1)。

只有少数系列同时支持 `coordinateSystemUsage: 'data'` 和 `coordinateSystemUsage: 'box'`，如：[series-graph](option.series-graph.md)、[series-map](option.series-map.md)。例如，在 [例子 coordinateSystemUsage: 'data'](https://echarts.apache.org/examples/zh/editor.html?c=matrix-graph&edit=1&reset=1) 中，关系图每个节点分别布局在矩阵坐标系中，而在 [例子 coordinateSystemUsage: 'box'](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1) 中，关系图系列整体被布局在一个单元格中。

大多数系列仅支持 `coordinateSystemUsage: 'data'`，例如：[series-line](option.series-line.md)、[series-bar](option.series-bar.md)、[series-scatter](option.series-scatter.md)。

同时，一些系列仅支持 `coordinateSystemUsage: 'box'`，例如：[series-pie](option.series-pie.md)（示例：[地理坐标系中的饼图](https://echarts.apache.org/examples/zh/editor.html?c=map-iceland-pie&edit=1&reset=1)）、[series-tree](option.series-tree.md)、[series-treemap](option.series-treemap.md)、[series-sankey](option.series-sankey.md)。

另参考：[series-custom.coordinateSystem](option.series-custom.md#coordinateSystem)。

## coord
- **Type**: `Array|number|string`

从 `v6.0.0` 开始支持

当 [coordinateSystemUsage](option.series-custom.md#coordinateSystemUsage) 为 `'box'` 时, `coord` 被输入给坐标系，计算得到布局位置（布局盒或者中心点）。

例子：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1), [矩阵中的关系图](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> 注：当 [coordinateSystemUsage](option.series-custom.md#coordinateSystemUsage) 为 `'data'` 时，输入给坐标系的是 `series.data[i]` 而非此 `coord`。

`coord` 的具体格式定义，取决于每个坐标系，并且，和 [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel) 的第二个参数相同。

## xAxisIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [x 轴](option.xAxis.md) 的 index。当一个 ECharts 实例中存在多个 x 轴时，用其指定所使用的 x 轴。

## xAxisId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [x 轴](option.xAxis.md) 的 id。当一个 ECharts 实例中存在多个 x 轴时，用其指定所使用的 x 轴。

## yAxisIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [y 轴](option.yAxis.md) 的 index。当一个 ECharts 实例中存在多个 y轴时，用其指定所使用的 y 轴。

## yAxisId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [y 轴](option.yAxis.md) 的 id。当一个 ECharts 实例中存在多个 y轴时，用其指定所使用的 x 轴。

## polarIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [极坐标系](option.polar.md) 的 index。当一个 ECharts 实例中存在多个极坐标系时，用其指定所使用的坐标系。

## polarId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [极坐标系](option.polar.md) 的 id。当一个 ECharts 实例中存在多个极坐标系时，用其指定所使用的坐标系。

## singleAxisIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [单轴标系](option.singleAxis.md) 的 index。当一个 ECharts 实例中存在多个单轴坐标系时，用其指定所使用的坐标系。

## singleAxisId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [单轴标系](option.singleAxis.md) 的 id。当一个 ECharts 实例中存在多个单轴坐标系时，用其指定所使用的坐标系。

## geoIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [地理坐标系](option.geo.md) 的 index。当一个 ECharts 实例中存在多个地理坐标系时，用其指定所使用的坐标系。

**参见示例**: [geo-choropleth-scatter](https://echarts.apache.org/examples/zh/editor.html?c=geo-choropleth-scatter&reset=1&edit=1)

## geoId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [地理坐标系](option.geo.md) 的 id。当一个 ECharts 实例中存在多个地理坐标系时，用其指定所使用的坐标系。

**参见示例**: [geo-choropleth-scatter](https://echarts.apache.org/examples/zh/editor.html?c=geo-choropleth-scatter&reset=1&edit=1)

## calendarIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [日历坐标系](option.calendar.md) 的 index。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。

## calendarId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [日历坐标系](option.calendar.md) 的 id。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。

## matrixIndex
- **Type**: `number`
- **Default**: `0`

布局时所基于的 [矩阵坐标系](option.matrix.md) 的 index。当一个 ECharts 实例中存在多个矩阵坐标系时，用其指定所使用的坐标系。

## matrixId
- **Type**: `number`
- **Default**: `undefined`

布局时所基于的 [矩阵坐标系](option.matrix.md) 的 id。当一个 ECharts 实例中存在多个矩阵坐标系时，用其指定所使用的坐标系。

## renderItem
- **Type**: `Function|string`

custom 系列需要开发者以 `Function` 形式提供图形渲染的逻辑或者以 `string` 形式使用预先注册的图形渲染逻辑（从 `v6.0.0` 开始支持，详见 [echarts.registerCustomSeries](../api-parts/api.echarts.md#registerCustomSeries)）。这个渲染逻辑一般命名为 [renderItem](option.series-custom.md#renderItem)。例如：

```
var option = {
    ...,
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            var categoryIndex = api.value(0);
            var start = api.coord([api.value(1), categoryIndex]);
            var end = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;

            var rectShape = echarts.graphic.clipRectByRect({
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height
            }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            return rectShape && {
                type: 'rect',
                shape: rectShape,
                style: api.style()
            };
        },
        data: data
    }]
}
```

对于 `data` 中的每个数据项（为方便描述，这里称为 `dataItem`)，会调用此 [renderItem](option.series-custom.md#renderItem) 函数。

[renderItem](option.series-custom.md#renderItem) 函数提供了两个参数：

*   [params](option.series-custom.md#renderItem.arguments.params)：包含了当前数据信息和坐标系的信息。
*   [api](option.series-custom.md#renderItem.arguments.api)：是一些开发者可调用的方法集合。

[renderItem](option.series-custom.md#renderItem) 函数须返回根据此 `dataItem` 绘制出的图形元素的定义信息，参见 [renderItem.return](option.series-custom.md#renderItem.return)。

一般来说，[renderItem](option.series-custom.md#renderItem) 函数的主要逻辑，是将 `dataItem` 里的值映射到坐标系上的图形元素。这一般需要用到 [renderItem.arguments.api](option.series-custom.md#renderItem.arguments.api) 中的两个函数：

*   [api.value(...)](option.series-custom.md#renderItem.arguments.api.value)，意思是取出 `dataItem` 中的数值。例如 `api.value(0)` 表示取出当前 `dataItem` 中第一个维度的数值。
*   [api.coord(...)](option.series-custom.md#renderItem.arguments.api.coord)，意思是进行坐标转换计算。例如 `var point = api.coord([api.value(0), api.value(1)])` 表示 `dataItem` 中的数值转换成坐标系上的点。

有时候还需要用到 [api.size(...)](option.series-custom.md#renderItem.arguments.api.size) 函数，表示得到坐标系上一段数值范围对应的长度。

返回值中样式的设置可以使用 [api.style(...)](option.series-custom.md#renderItem.arguments.api.style) 函数，他能得到 [series.itemStyle](option.series-custom.md#itemStyle) 中定义的样式信息，以及视觉映射的样式信息。也可以用这种方式覆盖这些样式信息：`api.style({fill: 'green', stroke: 'yellow'})`。

### renderItem.arguments
- **Type**: `*`

renderItem 函数的参数。

#### renderItem.arguments.params
- **Type**: `Object`

renderItem 函数的第一个参数，含有：

```
{
    context: // {Object} 一个可供开发者暂存东西的对象。生命周期只为：当前次的渲染。
    seriesId: // {string} 本系列 id。
    seriesName: // {string} 本系列 name。
    seriesIndex: // {number} 本系列 index。
    dataIndex: // {number} 数据项的 index。
    dataIndexInside: // {number} 数据项在当前坐标系中可见的数据的 index（即 dataZoom 当前窗口中的数据的 index）。
    dataInsideLength: // {number} 当前坐标系中可见的数据长度（即 dataZoom 当前窗口中的数据数量）。
    actionType: // {string} 触发此次重绘的 action 的 type。
    coordSys: // 不同的坐标系中，coordSys 里的信息不一样，含有如下这些可能：
    coordSys: {
        type: 'cartesian2d',
        x: // {number} grid rect 的 x
        y: // {number} grid rect 的 y
        width: // {number} grid rect 的 width
        height: // {number} grid rect 的 height
    },
    coordSys: {
        type: 'calendar',
        x: // {number} calendar 组件 rect 的 x
        y: // {number} calendar 组件 rect 的 y
        width: // {number} calendar 组件 rect 的 width
        height: // {number} calendar 组件 rect 的 height
        cellWidth: // {number} calendar cellWidth
        cellHeight: // {number} calendar cellHeight
        rangeInfo: {
            start: // calendar 日期开端
            end: // calendar 日期结尾
            weeks: // calendar 周数
            dayCount: // calendar 日数
        }
    },
    coordSys: {
        type: 'matrix',
        x: // {number} matrix 组件 rect 的 x
        y: // {number} matrix 组件 rect 的 y
        width: // {number} matrix 组件 rect 的 width
        height: // {number} matrix 组件 rect 的 height
    },
    coordSys: {
        type: 'geo',
        x: // {number} geo rect 的 x
        y: // {number} geo rect 的 y
        width: // {number} geo rect 的 width
        height: // {number} geo rect 的 height
        zoom: // {number} 缩放的比率。如果没有缩放，则值为 1。例如 0.5 表示缩小了一半。
    },
    coordSys: {
        type: 'polar',
        cx: // {number} polar 的中心坐标
        cy: // {number} polar 的中心坐标
        r: // {number} polar 的外半径
        r0: // {number} polar 的内半径
    },
    coordSys: {
        type: 'singleAxis',
        x: // {number} singleAxis rect 的 x
        y: // {number} singleAxis rect 的 y
        width: // {number} singleAxis rect 的 width
        height: // {number} singleAxis rect 的 height
    }
}
```

其中，关于 `dataIndex` 和 `dataIndexInside` 的区别：

*   `dataIndex` 指的 `dataItem` 在原始数据中的 index。
*   `dataIndexInside` 指的是 `dataItem` 在当前数据窗口（参见 [dataZoom](../option.md#dataZoom)）中的 index。

[renderItem.arguments.api](option.series-custom.md#renderItem.arguments.api) 中使用的参数都是 `dataIndexInside` 而非 `dataIndex`，因为从 `dataIndex` 转换成 `dataIndexInside` 需要时间开销。

#### renderItem.arguments.api
- **Type**: `Object`

renderItem 函数的第二个参数。

##### renderItem.arguments.api.value
- **Type**: `Function`

得到给定维度的数据值。

```
@param {number} dimension 指定的维度（维度从 0 开始计数）。
@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。
@return {number} 给定维度上的值。
```

##### renderItem.arguments.api.coord
- **Type**: `Function`

将数据值转换成坐标系的坐标。

其行为、输入参数和返回值和 [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel) 相同（只是去除它的第一个参数 `finder`）。

##### renderItem.arguments.api.layout
- **Type**: `Function`

从 `v6.0.0` 开始支持

将数据值转换成坐标系上的布局信息。

其行为、输入参数和返回值和 [chart.convertToLayout](../api-parts/api.echartsInstance.md#convertToLayout) 相同（只是去除它的第一个参数 `finder`）。

##### renderItem.arguments.api.size
- **Type**: `Function`

给定数据范围，映射到坐标系上后的长度。

例如，cartesian2d中，`api.size([2, 4])` 返回 `[12.4, 55]`，表示 x 轴数据范围为 2 映射得到长度是 `12.4`，y 轴数据范围为 4 时应设得到长度为 `55`。

在一些坐标系中，如极坐标系（polar）或者有 log 数轴的坐标系，不同点的长度是不同的，所以需要第二个参数，指定获取长度的点。

```
@param {Array.<number>} dataSize 数据范围。
@param {Array.<number>} dataItem 获取长度的点。
@return {Array.<number>} 画布上的长度
```

##### renderItem.arguments.api.style
- **Type**: `Function`

能得到 [series.itemStyle](option.series-custom.md#itemStyle) 中定义的样式信息和视觉映射得到的样式信息，可直接用于绘制图元。也可以用这种方式覆盖这些样式信息：`api.style({fill: 'green', stroke: 'yellow'})`。

```
@param {Object} [extra] 额外指定的样式信息。
@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。
@return {Object} 直接用于绘制图元的样式信息。
```

##### renderItem.arguments.api.styleEmphasis
- **Type**: `Function`

能得到 [series.itemStyle.emphasis](option.series-custom.md#itemStyle.emphasis) 中定义的样式信息和视觉映射的样式信息，可直接用于绘制图元。也可以用这种方式覆盖这些样式信息：`api.style({fill: 'green', stroke: 'yellow'})`。

```
@param {Object} [extra] 额外指定的样式信息。
@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。
@return {Object} 直接用于绘制图元的样式信息。
```

##### renderItem.arguments.api.visual
- **Type**: `Function`

得到视觉映射的样式信息。比较少被使用。

```
@param {string} visualType 'color', 'symbol', 'symbolSize', ...
@param {number} [dataIndexInside] 一般不用传，默认就是当前数据项的 dataIndexInside。
@return {string|number} 视觉映射的样式值。
```

##### renderItem.arguments.api.barLayout
- **Type**: `Function`

当需要采用 barLayout 的时候，比如向柱状图上附加些东西，可以用这个方法得到 layout 信息。 参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-bar-trend)。

```
@param {Object} opt
@param {number} opt.count 每个簇有多少个 bar。
@param {number|string} [opt.barWidth] bar 宽度。
        可以是绝对值例如 `40` 或者百分数例如 `'60%'`。
        百分数基于自动计算出的每一类目的宽度。
@param {number|string} [opt.barMaxWidth] bar 最大宽度。
        可以是绝对值例如 `40` 或者百分数例如 `'60%'`。
        百分数基于自动计算出的每一类目的宽度。
        比 `opt.barWidth` 优先级高。
@param {number|string} [opt.barMinWidth] bar 最小宽度。
        可以是绝对值例如 `40` 或者百分数例如 `'60%'`。
        百分数基于自动计算出的每一类目的宽度。
        比 `opt.barWidth` 优先级高。
@param {number} [opt.barGap] 每个簇的 bar 之间的宽度。
@param {number} [opt.barCategoryGap] 不同簇间的宽度。
@return {Array.<Object>} [{
        width: number bar 的宽度。
        offset: number bar 的偏移量，以bar最左为基准。
        offsetCenter: number bar 的偏移量，以bar中心为基准。
    }, ...]
```

##### renderItem.arguments.api.currentSeriesIndices
- **Type**: `Function`

得到系列的 当前index。注意这个 index 不同于系列定义时的 index。这个 index 是当 legend 组件进行了系列筛选后，剩余的系列排列后的 index。

```
@return {number}
```

##### renderItem.arguments.api.font
- **Type**: `Function`

得到可以直接进行样式设置的文字信息字符串。

```
@param {Object} opt
@param {string} [opt.fontStyle]
@param {number} [opt.fontWeight]
@param {number} [opt.fontSize]
@param {string} [opt.fontFamily]
@return {string} font 字符串。
```

##### renderItem.arguments.api.getWidth
- **Type**: `Function`

```
@return {number} echarts 容器的宽度。
```

##### renderItem.arguments.api.getHeight
- **Type**: `Function`

```
@return {number} echarts 容器的高度。
```

##### renderItem.arguments.api.getZr
- **Type**: `Function`

```
@return {module:zrender} zrender 实例。
```

##### renderItem.arguments.api.getDevicePixelRatio
- **Type**: `Function`

```
@return {number} 得到当前 devicePixelRatio。
```

### renderItem.return
- **Type**: `Object`

图形元素。每个图形元素是一个 object。详细信息参见：[graphic](option.graphic.md#elements)。（width\\height\\top\\bottom 不支持）

如果什么都不渲染，可以不返回任何东西。

例如：

```
// 单独一个矩形
{
    type: 'rect',
    shape: {
        x: x, y: y, width: width, height: height
    },
    style: api.style()
}
```

```
// 一组图形元素
{
    type: 'group',
    // 如果 diffChildrenByName 设为 true，则会使用 child.name 进行 diff，
    // 从而能有更好的过度动画，但是降低性能。缺省为 false。
    // diffChildrenByName: true,
    children: [{
        type: 'circle',
        shape: {
            cx: cx, cy: cy, r: r
        },
        style: api.style()
    }, {
        type: 'line',
        shape: {
            x1: x1, y1: y1, x2: x2, y2: y2
        },
        style: api.style()
    }]
}
```

### renderItem.return_group
- **Type**: `Object`

group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。

注意，如果其任意子节点是 `null`，这表示该子节点不再存在。所以，如果再次调用 `setOption` 时，一个子节点被设为 `null`，这意味着它之前对应序号的元素会被删除。如果希望一个子节点保持不变，应在新的配置项中使用 `{}` 表示。并且，仅当 group 的子节点在之前的 `setOption` 中存在时，才可以使用 `null/undefined/{}` 作为子节点。

#### renderItem.return_group.type
- **Type**: `string`
- **Default**: `group`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_group.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_group.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_group.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_group.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_group.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_group.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_group.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_group.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_group.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_group.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_group.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_group.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_group.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_group.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_group.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_group.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_group.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_group.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_group.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_group.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_group.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_group.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_group.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_group.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_group.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_group.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_group.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_group.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_group.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_group.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_group.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_group.diffChildrenByName)。

#### renderItem.return_group.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_group.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_group.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_group.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_group.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_group.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_group.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_group.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_group.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_group.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_group.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_group.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_group.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_group.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_group.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_group.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_group.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_group.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_group.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_group.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

#### renderItem.return_group.width
- **Type**: `number`
- **Default**: `0`

用于描述此 `group` 的宽。

这个宽只用于给子节点定位。

即便当宽度为零的时候，子节点也可以使用 `left: 'center'` 相对于父节点水平居中。

#### renderItem.return_group.height
- **Type**: `number`
- **Default**: `0`

用于描述此 `group` 的高。

这个高只用于给子节点定位。

即便当高度为零的时候，子节点也可以使用 `top: 'middle'` 相对于父节点垂直居中。

#### renderItem.return_group.diffChildrenByName
- **Type**: `boolean`
- **Default**: `false`

在 [自定义系列](option.series-custom.md) 中，当 `diffChildrenByName: true` 时，对于 [renderItem](option.series-custom.md#renderItem) 返回值中的每一个 [group](option.series-custom.md#renderItem.return_group)，会根据其 [children](option.series-custom.md#renderItem.return_group.children) 中每个图形元素的 [name](option.series-custom.md#renderItem.return_polygon.name) 属性进行 "diff"。在这里，"diff" 的意思是，重绘的时候，在已存在的图形元素和新的图形元素之间建立对应关系（依据 `name` 是否相同），从如果数据有更新，能够形成的过渡动画。

但是注意，这会有性能开销。如果数据量较大，不要开启这个功能。

#### renderItem.return_group.children
- **Type**: `Array`

子节点列表，其中项都是一个图形元素定义。

### renderItem.return_path
- **Type**: `Object`

可使用 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) 做路径。 可以用来画图标，或者其他各种图形，因为可以很便捷得缩放以适应给定尺寸。

参见例子： [icons](https://echarts.apache.org/examples/zh/editor.html?c=custom-calendar-icon) 和 [shapes](https://echarts.apache.org/examples/zh/editor.html?c=custom-gantt-flight)。

关于制定尺寸、拉伸还是平铺，参见 [layout](option.series-custom.md#renderItem.return_path.shape.layout)。

#### renderItem.return_path.type
- **Type**: `string`
- **Default**: `path`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_path.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_path.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_path.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_path.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_path.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_path.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_path.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_path.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_path.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_path.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_path.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_path.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_path.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_path.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_path.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_path.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_path.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_path.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_path.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_path.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_path.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_path.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_path.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_path.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_path.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_path.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_path.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_path.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_path.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_path.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_path.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_path.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_path.diffChildrenByName)。

#### renderItem.return_path.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_path.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_path.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_path.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_path.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_path.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_path.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_path.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_path.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_path.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_path.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_path.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_path.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_path.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_path.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_path.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_path.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_path.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_path.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_path.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_path.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_path.shape.pathData
- **Type**: `string`

即 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。

例如：`'M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z'`。

如果指定了 [width](option.series-custom.md#renderItem.return_path.shape.width)、[height](option.series-custom.md#renderItem.return_path.shape.height)、[x](option.series-custom.md#renderItem.return_path.shape.x)、[y](option.series-custom.md#renderItem.return_path.shape.y)，则会根据他们定义的矩形，缩放 PathData。如果没有指定这些，就不会缩放。

可使用 [layout](option.series-custom.md#renderItem.return_path.shape.layout) 指定缩放策略。

参见例子： [icons](https://echarts.apache.org/examples/zh/editor.html?c=custom-calendar-icon) 和 [shapes](https://echarts.apache.org/examples/zh/editor.html?c=custom-gantt-flight)。

##### renderItem.return_path.shape.d
- **Type**: `string`

同 [pathData](option.series-custom.md#renderItem.return_path.shape.pathData)，别名。

##### renderItem.return_path.shape.layout
- **Type**: `string`
- **Default**: `'center'`

如果指定了 [width](option.series-custom.md#renderItem.return_path.shape.width)、[height](option.series-custom.md#renderItem.return_path.shape.height)、[x](option.series-custom.md#renderItem.return_path.shape.x)、[y](option.series-custom.md#renderItem.return_path.shape.y)，则会根据他们定义的矩形，缩放 PathData。

`layout` 用于指定缩放策略。

可选值：

*   `'center'`：保持原来的 PathData 的长宽比，居于矩形中，尽可能撑大但不会超出矩形。
*   `'cover'`：PathData 拉伸为矩形的长宽比，完全填满矩形，不会超出矩形。

##### renderItem.return_path.shape.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_path.shape.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_path.shape.width
- **Type**: `number`
- **Default**: `0`

图形元素的宽度。

##### renderItem.return_path.shape.height
- **Type**: `number`
- **Default**: `0`

图形元素的高度。

##### renderItem.return_path.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_path.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_path.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_path.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_path.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_path.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_path.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_path.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_path.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_path.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_path.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_path.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_path.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_path.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_path.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_path.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_path.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_path.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_path.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_path.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_path.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_path.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_path.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_path.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_path.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_image.type
- **Type**: `string`
- **Default**: `image`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_image.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_image.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_image.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_image.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_image.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_image.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_image.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_image.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_image.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_image.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_image.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_image.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_image.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_image.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_image.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_image.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_image.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_image.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_image.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_image.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_image.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_image.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_image.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_image.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_image.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_image.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_image.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_image.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_image.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_image.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_image.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_image.diffChildrenByName)。

#### renderItem.return_image.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_image.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_image.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_image.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_image.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_image.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_image.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_image.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_image.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_image.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_image.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_image.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_image.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_image.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_image.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_image.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_image.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_image.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_image.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_image.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_image.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_image.style.image
- **Type**: `string`

图片的内容，可以是图片的 URL，也可以是 [dataURI](https://tools.ietf.org/html/rfc2397).

##### renderItem.return_image.style.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_image.style.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_image.style.width
- **Type**: `number`
- **Default**: `0`

图形元素的宽度。

##### renderItem.return_image.style.height
- **Type**: `number`
- **Default**: `0`

图形元素的高度。

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_image.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_image.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_image.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_image.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_image.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_image.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_image.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_image.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_image.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_image.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_image.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_image.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_image.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_image.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_image.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_image.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_image.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_image.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_image.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_image.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_image.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_image.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_image.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_text
- **Type**: `Object`

文本块。

#### renderItem.return_text.type
- **Type**: `string`
- **Default**: `text`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_text.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_text.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_text.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_text.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_text.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_text.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_text.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_text.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_text.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_text.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_text.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_text.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_text.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_text.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_text.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_text.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_text.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_text.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_text.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_text.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_text.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_text.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_text.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_text.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_text.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_text.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_text.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_text.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_text.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_text.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_text.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_text.diffChildrenByName)。

#### renderItem.return_text.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_text.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_text.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_text.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_text.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_text.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_text.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_text.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_text.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_text.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_text.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_text.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_text.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_text.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_text.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_text.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_text.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_text.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_text.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_text.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_text.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_text.style.text
- **Type**: `string`
- **Default**: `''`

文本块文字。可以使用 `\n` 来换行。

##### renderItem.return_text.style.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_text.style.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_text.style.font
- **Type**: `string`

字体大小、字体类型、粗细、字体样式。格式参见 [css font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font)。

例如：

```
// size | family
font: '2em "STHeiti", sans-serif'

// style | weight | size | family
font: 'italic bolder 16px cursive'

// weight | size | family
font: 'bolder 2em "Microsoft YaHei", sans-serif'
```

##### renderItem.return_text.style.textAlign
- **Type**: `string`
- **Default**: `'left'`

水平对齐方式，取值：`'left'`, `'center'`, `'right'`。

如果为 `'left'`，表示文本最左端在 `x` 值上。如果为 `'right'`，表示文本最右端在 `x` 值上。

##### renderItem.return_text.style.width
- **Type**: `number`

文本限制宽度，用于提供 [overflow](option.series-custom.md#renderItem.return_text.style.overflow) 的参考。

##### renderItem.return_text.style.overflow
- **Type**: `string`

当文本内容超出 [width](option.series-custom.md#renderItem.return_text.style.width) 时的文本显示策略，取值：`'break'`, `'breakAll'`, `'truncate'`, `'none'`。

*   `'break'`: 尽可能保证完整的单词不被截断(类似 `CSS` 中的 `word-break: break-word;`)
*   `'breakAll'`: 可在任意字符间断行
*   `'truncate'`: 截断文本屏显示 '...'，可以使用 [ellipsis](option.series-custom.md#renderItem.return_text.style.ellipsis) 来自定义省略号的显示
*   `'none'`: 不换行

##### renderItem.return_text.style.ellipsis
- **Type**: `string`

当 [overflow](option.series-custom.md#renderItem.return_text.style.overflow) 设置为 `'truncate'` 时生效，默认为 `...`。

##### renderItem.return_text.style.textVerticalAlign
- **Type**: `string`

垂直对齐方式，取值：`'top'`, `'middle'`, `'bottom'`。

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_text.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_text.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_text.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_text.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_text.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_text.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_text.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_text.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_text.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_text.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_text.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_text.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_text.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_text.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_text.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_text.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_text.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_text.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_text.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_text.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_text.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_text.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_text.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_rect
- **Type**: `Object`

矩形。

#### renderItem.return_rect.type
- **Type**: `string`
- **Default**: `rect`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_rect.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_rect.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_rect.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_rect.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_rect.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_rect.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_rect.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_rect.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_rect.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_rect.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_rect.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_rect.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_rect.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_rect.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_rect.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_rect.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_rect.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_rect.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_rect.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_rect.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_rect.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_rect.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_rect.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_rect.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_rect.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_rect.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_rect.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_rect.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_rect.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_rect.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_rect.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_rect.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_rect.diffChildrenByName)。

#### renderItem.return_rect.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_rect.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_rect.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_rect.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_rect.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_rect.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_rect.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_rect.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_rect.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_rect.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_rect.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_rect.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_rect.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_rect.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_rect.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_rect.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_rect.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_rect.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_rect.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_rect.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_rect.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_rect.shape.x
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_rect.shape.y
- **Type**: `number`
- **Default**: `0`

图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_rect.shape.width
- **Type**: `number`
- **Default**: `0`

图形元素的宽度。

##### renderItem.return_rect.shape.height
- **Type**: `number`
- **Default**: `0`

图形元素的高度。

##### renderItem.return_rect.shape.r
- **Type**: `Array`

可以用于设置圆角矩形。`r: [r1, r2, r3, r4]`， 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4。

可以缩写，例如：

*   `r` 缩写为 `1` 相当于 `[1, 1, 1, 1]`
*   `r` 缩写为 `[1]` 相当于 `[1, 1, 1, 1]`
*   `r` 缩写为 `[1, 2]` 相当于 `[1, 2, 1, 2]`
*   `r` 缩写为 `[1, 2, 3]1 相当于`\[1, 2, 3, 2\]\`

##### renderItem.return_rect.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_rect.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_rect.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_rect.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_rect.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_rect.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_rect.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_rect.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_rect.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_rect.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_rect.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_rect.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_rect.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_rect.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_rect.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_rect.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_rect.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_rect.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_rect.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_rect.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_rect.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_rect.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_rect.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_rect.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_rect.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_circle
- **Type**: `Object`

圆。

#### renderItem.return_circle.type
- **Type**: `string`
- **Default**: `circle`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_circle.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_circle.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_circle.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_circle.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_circle.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_circle.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_circle.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_circle.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_circle.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_circle.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_circle.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_circle.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_circle.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_circle.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_circle.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_circle.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_circle.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_circle.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_circle.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_circle.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_circle.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_circle.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_circle.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_circle.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_circle.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_circle.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_circle.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_circle.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_circle.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_circle.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_circle.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_circle.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_circle.diffChildrenByName)。

#### renderItem.return_circle.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_circle.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_circle.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_circle.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_circle.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_circle.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_circle.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_circle.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_circle.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_circle.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_circle.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_circle.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_circle.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_circle.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_circle.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_circle.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_circle.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_circle.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_circle.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_circle.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_circle.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_circle.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_circle.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_circle.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

##### renderItem.return_circle.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_circle.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_circle.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_circle.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_circle.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_circle.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_circle.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_circle.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_circle.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_circle.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_circle.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_circle.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_circle.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_circle.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_circle.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_circle.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_circle.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_circle.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_circle.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_circle.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_circle.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_circle.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_circle.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_circle.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_circle.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_ring
- **Type**: `Object`

圆环。

#### renderItem.return_ring.type
- **Type**: `string`
- **Default**: `ring`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_ring.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_ring.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_ring.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_ring.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_ring.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_ring.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_ring.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_ring.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_ring.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_ring.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_ring.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_ring.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_ring.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_ring.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_ring.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_ring.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_ring.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_ring.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_ring.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_ring.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_ring.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_ring.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_ring.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_ring.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_ring.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_ring.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_ring.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_ring.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_ring.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_ring.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_ring.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_ring.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_ring.diffChildrenByName)。

#### renderItem.return_ring.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_ring.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_ring.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_ring.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_ring.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_ring.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_ring.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_ring.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_ring.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_ring.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_ring.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_ring.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_ring.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_ring.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_ring.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_ring.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_ring.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_ring.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_ring.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_ring.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_ring.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_ring.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_ring.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_ring.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

##### renderItem.return_ring.shape.r0
- **Type**: `number`
- **Default**: `0`

内半径。

##### renderItem.return_ring.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_ring.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_ring.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_ring.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_ring.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_ring.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_ring.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_ring.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_ring.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_ring.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_ring.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_ring.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_ring.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_ring.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_ring.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_ring.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_ring.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_ring.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_ring.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_ring.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_ring.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_ring.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_ring.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_ring.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_ring.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_sector
- **Type**: `Object`

扇形。

#### renderItem.return_sector.type
- **Type**: `string`
- **Default**: `sector`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_sector.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_sector.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_sector.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_sector.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_sector.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_sector.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_sector.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_sector.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_sector.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_sector.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_sector.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_sector.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_sector.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_sector.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_sector.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_sector.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_sector.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_sector.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_sector.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_sector.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_sector.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_sector.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_sector.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_sector.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_sector.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_sector.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_sector.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_sector.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_sector.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_sector.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_sector.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_sector.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_sector.diffChildrenByName)。

#### renderItem.return_sector.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_sector.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_sector.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_sector.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_sector.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_sector.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_sector.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_sector.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_sector.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_sector.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_sector.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_sector.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_sector.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_sector.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_sector.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_sector.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_sector.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_sector.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_sector.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_sector.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_sector.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_sector.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_sector.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_sector.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

##### renderItem.return_sector.shape.r0
- **Type**: `number`
- **Default**: `0`

内半径。

##### renderItem.return_sector.shape.cornerRadius
- **Type**: `number|Array`

从 `v5.3.0` 开始支持

扇形的圆角。

*   `cornerRadius: 10`：表示内圆角半径和外圆角半径都是 `10px`。
*   `cornerRadius: [10, 20]`：表示为环形图时，内圆角半径是 `10px`、外圆角半径是 `20px`。
*   `cornerRadius: [5, 10, 15, 20]`：表示内圆角半径分别为 `5px` 和 `10px`，外圆角半径分别为 `15px` 和 `20px`。

##### renderItem.return_sector.shape.startAngle
- **Type**: `number`
- **Default**: `0`

开始弧度。

##### renderItem.return_sector.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

结束弧度。

##### renderItem.return_sector.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

是否顺时针。

##### renderItem.return_sector.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_sector.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_sector.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_sector.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_sector.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_sector.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_sector.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_sector.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_sector.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_sector.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_sector.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_sector.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_sector.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_sector.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_sector.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_sector.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_sector.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_sector.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_sector.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_sector.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_sector.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_sector.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_sector.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_sector.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_sector.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_arc
- **Type**: `Object`

圆弧。

#### renderItem.return_arc.type
- **Type**: `string`
- **Default**: `arc`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_arc.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_arc.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_arc.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_arc.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_arc.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_arc.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_arc.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_arc.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_arc.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_arc.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_arc.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_arc.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_arc.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_arc.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_arc.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_arc.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_arc.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_arc.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_arc.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_arc.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_arc.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_arc.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_arc.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_arc.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_arc.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_arc.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_arc.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_arc.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_arc.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_arc.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_arc.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_arc.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_arc.diffChildrenByName)。

#### renderItem.return_arc.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_arc.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_arc.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_arc.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_arc.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_arc.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_arc.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_arc.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_arc.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_arc.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_arc.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_arc.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_arc.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_arc.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_arc.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_arc.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_arc.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_arc.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_arc.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_arc.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_arc.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_arc.shape.cx
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。

##### renderItem.return_arc.shape.cy
- **Type**: `number`
- **Default**: `0`

图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。

##### renderItem.return_arc.shape.r
- **Type**: `number`
- **Default**: `0`

外半径。

##### renderItem.return_arc.shape.r0
- **Type**: `number`
- **Default**: `0`

内半径。

##### renderItem.return_arc.shape.startAngle
- **Type**: `number`
- **Default**: `0`

开始弧度。

##### renderItem.return_arc.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

结束弧度。

##### renderItem.return_arc.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

是否顺时针。

##### renderItem.return_arc.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_arc.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_arc.style.fill
- **Type**: `string`

填充色。

##### renderItem.return_arc.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

线条颜色。

##### renderItem.return_arc.style.lineWidth
- **Type**: `number`
- **Default**: `1`

线条宽度。

##### renderItem.return_arc.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_arc.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_arc.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_arc.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_arc.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_arc.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_arc.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_arc.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_arc.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_arc.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_arc.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_arc.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_arc.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_arc.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_arc.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_arc.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_arc.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_arc.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_arc.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_arc.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_polygon
- **Type**: `Object`

多边形。

#### renderItem.return_polygon.type
- **Type**: `string`
- **Default**: `polygon`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_polygon.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_polygon.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_polygon.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_polygon.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_polygon.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_polygon.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_polygon.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_polygon.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_polygon.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_polygon.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_polygon.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_polygon.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_polygon.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polygon.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polygon.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_polygon.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_polygon.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polygon.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polygon.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_polygon.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_polygon.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polygon.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polygon.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_polygon.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_polygon.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polygon.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polygon.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_polygon.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_polygon.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_polygon.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_polygon.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_polygon.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_polygon.diffChildrenByName)。

#### renderItem.return_polygon.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_polygon.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_polygon.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_polygon.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_polygon.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_polygon.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_polygon.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_polygon.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_polygon.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_polygon.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_polygon.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_polygon.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_polygon.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_polygon.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_polygon.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_polygon.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_polygon.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_polygon.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_polygon.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_polygon.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_polygon.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_polygon.shape.points
- **Type**: `Array`

点列表，用于定义形状，如 `[[22, 44], [44, 55], [11, 44], ...]`

##### renderItem.return_polygon.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

是否平滑曲线。

*   如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 `[0, 1]`。
*   如果为 `'spline'`：表示 Catmull-Rom spline 差值平滑。

##### renderItem.return_polygon.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

是否将平滑曲线约束在包围盒中。`smooth` 为 `number`（bezier）时生效。

##### renderItem.return_polygon.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_polygon.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_polygon.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_polygon.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_polygon.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_polygon.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_polygon.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_polygon.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_polygon.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_polygon.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_polygon.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_polygon.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_polygon.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_polygon.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_polygon.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_polygon.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_polygon.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_polygon.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_polygon.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_polygon.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_polygon.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_polygon.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_polygon.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_polygon.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_polygon.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_polyline
- **Type**: `Object`

折线。

#### renderItem.return_polyline.type
- **Type**: `string`
- **Default**: `polyline`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_polyline.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_polyline.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_polyline.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_polyline.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_polyline.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_polyline.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_polyline.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_polyline.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_polyline.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_polyline.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_polyline.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_polyline.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_polyline.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polyline.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polyline.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_polyline.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_polyline.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polyline.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polyline.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_polyline.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_polyline.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polyline.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polyline.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_polyline.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_polyline.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_polyline.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_polyline.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_polyline.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_polyline.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_polyline.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_polyline.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_polyline.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_polyline.diffChildrenByName)。

#### renderItem.return_polyline.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_polyline.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_polyline.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_polyline.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_polyline.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_polyline.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_polyline.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_polyline.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_polyline.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_polyline.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_polyline.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_polyline.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_polyline.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_polyline.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_polyline.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_polyline.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_polyline.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_polyline.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_polyline.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_polyline.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_polyline.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_polyline.shape.points
- **Type**: `Array`

点列表，用于定义形状，如 `[[22, 44], [44, 55], [11, 44], ...]`

##### renderItem.return_polyline.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

是否平滑曲线。

*   如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 `[0, 1]`。
*   如果为 `'spline'`：表示 Catmull-Rom spline 差值平滑。

##### renderItem.return_polyline.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

是否将平滑曲线约束在包围盒中。`smooth` 为 `number`（bezier）时生效。

##### renderItem.return_polyline.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_polyline.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_polyline.style.fill
- **Type**: `string`

填充色。

##### renderItem.return_polyline.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

线条颜色。

##### renderItem.return_polyline.style.lineWidth
- **Type**: `number`
- **Default**: `5`

线条宽度。

##### renderItem.return_polyline.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_polyline.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_polyline.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_polyline.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_polyline.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_polyline.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_polyline.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_polyline.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_polyline.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_polyline.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_polyline.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_polyline.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_polyline.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_polyline.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_polyline.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_polyline.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_polyline.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_polyline.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_polyline.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_polyline.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_line
- **Type**: `Object`

直线。

#### renderItem.return_line.type
- **Type**: `string`
- **Default**: `line`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_line.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_line.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_line.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_line.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_line.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_line.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_line.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_line.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_line.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_line.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_line.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_line.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_line.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_line.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_line.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_line.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_line.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_line.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_line.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_line.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_line.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_line.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_line.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_line.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_line.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_line.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_line.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_line.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_line.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_line.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_line.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_line.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_line.diffChildrenByName)。

#### renderItem.return_line.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_line.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_line.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_line.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_line.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_line.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_line.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_line.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_line.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_line.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_line.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_line.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_line.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_line.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_line.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_line.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_line.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_line.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_line.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_line.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_line.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_line.shape.x1
- **Type**: `number`
- **Default**: `0`

开始点的 x 值。

##### renderItem.return_line.shape.y1
- **Type**: `number`
- **Default**: `0`

开始点的 y 值。

##### renderItem.return_line.shape.x2
- **Type**: `number`
- **Default**: `0`

结束点的 x 值。

##### renderItem.return_line.shape.y2
- **Type**: `number`
- **Default**: `0`

结束点的 y 值。

##### renderItem.return_line.shape.percent
- **Type**: `number`
- **Default**: `1`

线画到百分之多少就不画了。值的范围：\[0, 1\]。

##### renderItem.return_line.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_line.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_line.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_line.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_line.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_line.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_line.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_line.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_line.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_line.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_line.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_line.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_line.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_line.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_line.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_line.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_line.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_line.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_line.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_line.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_line.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_line.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_line.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_line.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_line.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_compoundPath
- **Type**: `Object`

从 `v6.0.0` 开始支持

多个图形元素并集组成的复合元素。

#### renderItem.return_compoundPath.type
- **Type**: `string`
- **Default**: `compoundPath`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_compoundPath.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_compoundPath.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_compoundPath.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_compoundPath.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_compoundPath.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_compoundPath.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_compoundPath.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_compoundPath.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_compoundPath.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_compoundPath.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_compoundPath.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_compoundPath.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_compoundPath.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_compoundPath.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_compoundPath.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_compoundPath.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_compoundPath.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_compoundPath.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_compoundPath.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_compoundPath.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_compoundPath.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_compoundPath.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_compoundPath.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_compoundPath.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_compoundPath.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_compoundPath.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_compoundPath.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_compoundPath.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_compoundPath.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_compoundPath.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_compoundPath.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_compoundPath.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_compoundPath.diffChildrenByName)。

#### renderItem.return_compoundPath.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_compoundPath.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_compoundPath.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_compoundPath.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_compoundPath.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_compoundPath.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_compoundPath.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_compoundPath.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_compoundPath.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_compoundPath.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_compoundPath.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_compoundPath.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_compoundPath.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_compoundPath.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_compoundPath.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_compoundPath.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_compoundPath.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_compoundPath.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_compoundPath.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_compoundPath.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_compoundPath.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_compoundPath.shape.paths
- **Type**: `Array`

图形元素的数组，元素可以是 path/rect/circle/……

##### renderItem.return_compoundPath.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_compoundPath.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_compoundPath.style.fill
- **Type**: `string`

填充色。

##### renderItem.return_compoundPath.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

线条颜色。

##### renderItem.return_compoundPath.style.lineWidth
- **Type**: `number`
- **Default**: `5`

线条宽度。

##### renderItem.return_compoundPath.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_compoundPath.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_compoundPath.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_compoundPath.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_compoundPath.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_compoundPath.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_compoundPath.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_compoundPath.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_compoundPath.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_compoundPath.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_compoundPath.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_compoundPath.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_compoundPath.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_compoundPath.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_compoundPath.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_compoundPath.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_compoundPath.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_compoundPath.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_compoundPath.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_compoundPath.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

### renderItem.return_bezierCurve
- **Type**: `Object`

二次或三次贝塞尔曲线。

#### renderItem.return_bezierCurve.type
- **Type**: `string`
- **Default**: `bezierCurve`

用 setOption 首次设定图形元素时必须指定。 可取值：

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_bezierCurve.id
- **Type**: `string`
- **Default**: `undefined`

id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。

#### renderItem.return_bezierCurve.x
- **Type**: `number`
- **Default**: `0`

元素的 x 像素位置。

#### renderItem.return_bezierCurve.y
- **Type**: `number`
- **Default**: `0`

元素的 y 像素位置。

#### renderItem.return_bezierCurve.rotation
- **Type**: `number`
- **Default**: `0`

元素的旋转

#### renderItem.return_bezierCurve.scaleX
- **Type**: `number`
- **Default**: `1`

元素在 x 方向上的缩放。

#### renderItem.return_bezierCurve.scaleY
- **Type**: `number`
- **Default**: `1`

元素在 y 方向上的缩放。

#### renderItem.return_bezierCurve.originX
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 x 像素位置。

#### renderItem.return_bezierCurve.originY
- **Type**: `number`
- **Default**: `0`

元素旋转和缩放原点的 y 像素位置。

#### renderItem.return_bezierCurve.transition
- **Type**: `string|Array`

可以通过`'all'`指定所有属性都开启过渡动画，也可以指定单个或一组属性。

Transform 相关的属性：`'x'`、 `'y'`、`'scaleX'`、`'scaleY'`、`'rotation'`、`'originX'`、`'originY'`。例如：

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

还可以是这三个属性 `'shape'`、`'style'`、`'extra'`。表示这三个属性中所有的子属性都开启过渡动画。例如：

```
{
    type: 'rect',
    shape: { // ... },
    // 表示 shape 中所有属性都开启过渡动画。
    transition: 'shape',
}
```

在自定义系列中，当 transition 没有指定时，`'x'` 和 `'y'` 会默认开启过渡动画。如果想禁用这种默认，可设定为空数组：`transition: []`

`transition` 效果参考 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1)。

#### renderItem.return_bezierCurve.enterFrom
- **Type**: `Object`

配置图形的入场属性用于入场动画。例如：

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // 淡入
        style: { opacity: 0 },
        // 从左飞入
        x: 0
    }
}
```

#### renderItem.return_bezierCurve.leaveTo
- **Type**: `Object`

配置图形的退场属性用于退场动画。例如：

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // 淡出
        style: { opacity: 0 },
        // 向右飞出
        x: 200
    }
}
```

#### renderItem.return_bezierCurve.enterAnimation
- **Type**: `Object`

入场动画配置。

##### renderItem.return_bezierCurve.enterAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_bezierCurve.enterAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_bezierCurve.enterAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_bezierCurve.updateAnimation
- **Type**: `Object`

更新属性的动画配置。

##### renderItem.return_bezierCurve.updateAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_bezierCurve.updateAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_bezierCurve.updateAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_bezierCurve.leaveAnimation
- **Type**: `Object`

退场动画配置。

##### renderItem.return_bezierCurve.leaveAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_bezierCurve.leaveAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_bezierCurve.leaveAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

#### renderItem.return_bezierCurve.keyframeAnimation
- **Type**: `Object|Array`

关键帧动画配置。支持配置为数组同时使用多个关键帧动画。

示例：

```
keyframeAnimation: [{
    // 呼吸效果的缩放动画
    duration: 1000,
    loop: true,
    keyframes: [{
        percent: 0.5,
        easing: 'sinusoidalInOut',
        scaleX: 0.1,
        scaleY: 0.1
    }, {
        percent: 1,
        easing: 'sinusoidalInOut',
        scaleX: 1,
        scaleY: 1
    }]
}, {
    // 平移动画
    duration: 2000,
    loop: true,
    keyframes: [{
        percent: 0,
        x: 10
    }, {
        percent: 1,
        x: 100
    }]
}]

```

假如一个属性同时被应用了关键帧动画和过渡动画，过渡动画会被忽略。

##### renderItem.return_bezierCurve.keyframeAnimation.duration
- **Type**: `number`

动画时长，单位 ms

##### renderItem.return_bezierCurve.keyframeAnimation.easing
- **Type**: `string`

动画缓动。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

##### renderItem.return_bezierCurve.keyframeAnimation.delay
- **Type**: `number`

动画延迟时长，单位 ms

##### renderItem.return_bezierCurve.keyframeAnimation.loop
- **Type**: `boolean`

是否循环播放动画。

##### renderItem.return_bezierCurve.keyframeAnimation.keyframes
- **Type**: `Array`

动画的关键帧。数组中每一项为一个关键帧，格式如下：

```
interface Keyframe {
    // 关键帧位置。0 为第一帧，1 为最后一帧
    // 关键帧时间为 percent * duration + delay
    percent: number
    // 上一个关键帧到这个关键帧运行时的缓动函数。可选
    easing?: number

    // 其它属性为图形在这个关键帧的属性，例如 x, y, style, shape 等
}
```

#### renderItem.return_bezierCurve.morph
- **Type**: `boolean`

是否开启形变动画。

开启 [universalTransition](option.series-custom.md#universalTransition) 后如果前后两次更新图形类型不一样，比如从`rect`变为了`circle`，会通过形变动画过渡。如果想要关闭可以设置该属性为`false`。

#### renderItem.return_bezierCurve.z2
- **Type**: `number`
- **Default**: `undefined`

用于决定图形元素的覆盖关系。

#### renderItem.return_bezierCurve.name
- **Type**: `string`
- **Default**: `undefined`

参见 [diffChildrenByName](option.series-custom.md#renderItem.return_bezierCurve.diffChildrenByName)。

#### renderItem.return_bezierCurve.info
- **Type**: `*`

用户定义的任意数据，可以在 event listener 中访问，如：

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_bezierCurve.silent
- **Type**: `boolean`
- **Default**: `false`

是否不响应鼠标以及触摸事件。

#### renderItem.return_bezierCurve.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

是否不响应 tooltip。

从 `v6.0.0` 开始支持

#### renderItem.return_bezierCurve.invisible
- **Type**: `boolean`
- **Default**: `false`

节点是否不可见。

#### renderItem.return_bezierCurve.ignore
- **Type**: `boolean`
- **Default**: `false`

节点是否完全被忽略（既不渲染，也不响应事件）。

#### renderItem.return_bezierCurve.textContent
- **Type**: `Object`

这是一个文本定义，附着在一个节点上，会依据 `textConfig` 配置，相对于节点布局。

里面的属性同于 [text](../option-parts/option.series-custom.md#renderItem.return_text)。

##### renderItem.return_bezierCurve.textConfig.position
- **Default**: `'inside'`

Position of `textContent`.

*   'left'
*   'right'
*   'top'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideTopRight'
*   'insideBottomLeft'
*   'insideBottomRight'
*   or like `[12, 33]`
*   or like `['50%', '50%']`

##### renderItem.return_bezierCurve.textConfig.rotation
- **Type**: `number`

`textContent` 的旋转弧度。

##### renderItem.return_bezierCurve.textConfig.layoutRect
- **Type**: `Object`

`textContent` 根据此矩形来布局位置。 默认是节点的包围盒。

```
{
    x: number
    y: number
    width: number
    height: number
}
```

##### renderItem.return_bezierCurve.textConfig.offset
- **Type**: `Array`

`textContent` 的偏移。

`offset` 和 `position` 的区别是，`offset` 是旋转（rotation）后计算。

##### renderItem.return_bezierCurve.textConfig.origin
- **Type**: `*`

`origin` 相对于节点的包围盒。 可以是百分数。 如果指定为 `'center'`，则定位在包围盒中心。

只有当 `position` and `rotation` 都设置时，生效。

*   如 `[12, 33]`
*   或如 `['50%', '50%']`
*   'center'

##### renderItem.return_bezierCurve.textConfig.distance
- **Type**: `number`
- **Default**: `5`

距离 `layoutRect` 的距离。

##### renderItem.return_bezierCurve.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

如果 `true` 的话，会采用节点的 transform。

##### renderItem.return_bezierCurve.textConfig.insideFill
- **Type**: `string`

`insideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" 在绝大多数场景下，"auto-calculated-fill" 是白色。

##### renderItem.return_bezierCurve.textConfig.insideStroke
- **Type**: `string`

`insideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 `"inside"`，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会和节点的 `fill` 相同，如果 `fill` 没有的话则为 `null`。

##### renderItem.return_bezierCurve.textConfig.outsideFill
- **Type**: `string`

`outsideFill` 可以是一个颜色字符串，或者空着。

如果 `textContent` 是 "inside"，它的 `fill` 会按这个优先级来选取： `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_bezierCurve.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` 可以是一个颜色字符串，或者空着。

如果 `textContent` 不是 "inside"，它的 `stroke` 会按这个优先级来选取： `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

"auto-calculated-stroke" 的规则是：

*   如果
    *   (A) `fill` 在 style 中被指定（无论是在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   或者 (B) 需要画文字的背景（无论是定义在 `textContent.style` 还是 `textContent.style.rich` 里）
    *   "auto-calculated-stroke" 都会为 `null`。
*   否则
    *   "auto-calculated-stroke" 会为一个近似于白色的颜色，来区别于背景。

##### renderItem.return_bezierCurve.textConfig.inside
- **Type**: `boolean`

如果确定文本是在节点中的话，则此可设置为 `true`，避免 echarts 额外猜测。

#### renderItem.return_bezierCurve.during
- **Type**: `Function`

在动画的每一帧里，用户可以使用 `during` 回调来设定节点的各种属性。

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // 设置 transform 属性值。
    // transform 属性参见 `TransformProp`。
    setTransform(key: TransformProp, val: unknown): void;
    // 获得当前动画帧的 transform 属性值。
    getTransform(key: TransformProp): unknown;
    // 设置 shape 属性值。
    // shape 属性形如：`{ type: 'rect', shape: { xxxProp: xxxValue } }`。
    setShape(key: string, val: unknown): void;
    // 获得当前动画帧的 shape 属性值。
    getShape(key: string): unknown;
    // 设置 style 属性值。
    // style 属性形如：`{ type: 'rect', style: { xxxProp: xxxValue } }`。
    setStyle(key: string, val: unknown): void;
    // 获得当前动画帧的 style 属性值。
    getStyle(key: string): unknown;
    // 设置 extra 属性值。
    // extra 属性形如：`{ type: 'rect', extra: { xxxProp: xxxValue } }`。
    setExtra(key: string, val: unknown): void;
    // 获得当前动画帧的 extra 属性值。
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

在绝大多数场景下，用户不需要这个 `during` 回调。因为，假如属性被设定到 [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition) 中后，echarts 会自动对它进行插值，并且基于这些插值形成动画。但是，如果这些插值形成的动画不满足用户需求，那么用户可以使用 `during` 回调来定制他们。

例如，如果用户使用 [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) 画图形，图形的形状会由 [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points) 来定义，形如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

如果用户指定了 [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) 如：

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...],
    },
    transition: 'shape'
    // ...
}
```

尽管这些 `points` 会被 echarts 自动插值，但是这样形成的动画里，这些点会直线走向目标位置。假如用户需求是，这些点要按照某种特定的路径（如弧线、螺旋）来移动，则这就不满足了。所以在这种情况下，可以使用 `during` 回调如下：

```
{
    type: 'polygon',
    shape: {
        points: calculatePoints(initialDegree),
        transition: 'points'
    },
    extra: {
        degree: nextDegree
    },
    // 让 echarts 对 `extra.degree` 进行插值，然后基于
    // `extra.degree` 来计算动画中每一帧时的 polygon 形状。
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

也参见这个 [例子](https://echarts.apache.org/examples/zh/editor.html?c=custom-spiral-race&edit=1&reset=1)。

#### renderItem.return_bezierCurve.extra
- **Type**: `Object`

用户可以在 `extra` 字段中定义自己的属性。`extra` 的往往会结合 [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) 一起使用。

##### renderItem.return_bezierCurve.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `extra` 下的属性。

例如：

```
{
    type: 'rect',
    extra: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `extra` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    extra: { ... },
    // `extra` 下所有属性开启过渡动画。
    transition: 'extra',
}
```

##### renderItem.return_bezierCurve.shape.x1
- **Type**: `number`
- **Default**: `0`

开始点的 x 值。

##### renderItem.return_bezierCurve.shape.y1
- **Type**: `number`
- **Default**: `0`

开始点的 y 值。

##### renderItem.return_bezierCurve.shape.x2
- **Type**: `number`
- **Default**: `0`

结束点的 x 值。

##### renderItem.return_bezierCurve.shape.y2
- **Type**: `number`
- **Default**: `0`

结束点的 y 值。

##### renderItem.return_bezierCurve.shape.cpx1
- **Type**: `number`
- **Default**: `0`

控制点 x 值。

##### renderItem.return_bezierCurve.shape.cpy1
- **Type**: `number`
- **Default**: `0`

控制点 y 值。

##### renderItem.return_bezierCurve.shape.cpx2
- **Type**: `number`

第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线。

##### renderItem.return_bezierCurve.shape.cpy2
- **Type**: `number`

第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。

##### renderItem.return_bezierCurve.shape.percent
- **Type**: `number`
- **Default**: `1`

画到百分之多少就不画了。值的范围：\[0, 1\]。

##### renderItem.return_bezierCurve.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `shape` 下的属性。

例如：

```
{
    type: 'rect',
    shape: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `shape` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    shape: { ... },
    // `shape` 下所有属性开启过渡动画。
    transition: 'shape',
}
```

#### renderItem.return_bezierCurve.style
- **Type**: `Object`

注：关于图形元素中更多的样式设置（例如 [富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)），参见 [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable) 中的 style 相关属性。

注意，这里图形元素的样式属性名称直接源于 zrender，和 `echarts label`、`echarts itemStyle` 等处同样含义的样式属性名称或有不同。例如，有如下对应：

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_bezierCurve.style.fill
- **Type**: `string`
- **Default**: `'#000'`

填充色。

##### renderItem.return_bezierCurve.style.stroke
- **Type**: `string`

线条颜色。

##### renderItem.return_bezierCurve.style.lineWidth
- **Type**: `number`
- **Default**: `0`

线条宽度。

##### renderItem.return_bezierCurve.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线条样式。可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` 或 `number` 数组。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

##### renderItem.return_bezierCurve.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

用于设置虚线的偏移量。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### renderItem.return_bezierCurve.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

用于指定线段末端的绘制方式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### renderItem.return_bezierCurve.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

设置线条转折点的样式。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### renderItem.return_bezierCurve.style.miterLimit
- **Type**: `number`
- **Default**: `10`

设置斜接面限制比例的属性。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### renderItem.return_bezierCurve.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

阴影宽度。

##### renderItem.return_bezierCurve.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

阴影 X 方向偏移。

##### renderItem.return_bezierCurve.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

阴影 Y 方向偏移。

##### renderItem.return_bezierCurve.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

阴影颜色。

##### renderItem.return_bezierCurve.style.opacity
- **Type**: `number`
- **Default**: `1`

不透明度。

##### renderItem.return_bezierCurve.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

可以是一个属性名，或者一组属性名。 被指定的属性，在其指发生变化时，会开启过渡动画。 只可以指定本 `style` 下的属性。

例如：

```
{
    type: 'rect',
    style: {
        // ...
        // 这两个属性会开启过渡动画。
        transition: ['mmm', 'ppp']
    }
}
```

我们这样可以指定 `style` 下所有属性开启过渡动画：

```
{
    type: 'rect',
    style: { ... },
    // `style` 下所有属性开启过渡动画。
    transition: 'style',
}
```

#### renderItem.return_bezierCurve.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。
*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

#### renderItem.return_bezierCurve.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### renderItem.return_bezierCurve.emphasisDisabled
- **Type**: `boolean`

是否关闭高亮状态。

#### renderItem.return_bezierCurve.emphasis
- **Type**: `Object`

图形元素的高亮状态

##### renderItem.return_bezierCurve.emphasis.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_bezierCurve.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的淡出状态，配置`focus`时有效。

##### renderItem.return_bezierCurve.blur.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

#### renderItem.return_bezierCurve.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

图形元素的选中状态，配置自定义系列的 [selectedMode](option.series-custom.md#selectedMode) 时有效。

##### renderItem.return_bezierCurve.select.style
- **Type**: `Object`

结构同 [style](option.series-custom.md#renderItem.return_polygon.style)。

## itemStyle
- **Type**: `Object`

图形样式。

### itemStyle.color
- **Type**: `Color`
- **Default**: `自适应`

图形的颜色。 默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

### itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

描边线宽。为 0 时无描边。

### itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

### itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

### itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

### itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

### itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

### itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

### itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### itemStyle.decal
- **Type**: `Object`

图形的贴花图案，在 [aria.enabled](option.aria.md#enabled) 与 [aria.decal.show](option.aria.md#decal.show) 都是 `true` 的情况下才生效。

如果为 `'none'` 表示不使用贴花图案。

#### itemStyle.decal.symbol
- **Type**: `string|Array`
- **Default**: `'rect'`

贴花的图案，如果是 `string[]` 表示循环使用数组中的图案。

ECharts 提供的标记类型包括

`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

可以通过 `'image://url'` 设置为图片，其中 URL 为图片的链接，或者 `dataURI`。

URL 为图片链接例如：

```
'image://http://example.website/a/b.png'
```

URL 为 `dataURI` 例如：

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

可以通过 `'path://'` 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。可以从 Adobe Illustrator 等工具编辑导出。

例如：

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

#### itemStyle.decal.symbolSize
- **Type**: `number`
- **Default**: `1`

取值范围：`0` 到 `1`，表示占图案区域的百分比。

#### itemStyle.decal.symbolKeepAspect
- **Type**: `boolean`
- **Default**: `true`

是否保持图案的长宽比。

#### itemStyle.decal.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.2)'`

贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。

#### itemStyle.decal.backgroundColor
- **Type**: `string`

贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。

#### itemStyle.decal.dashArrayX
- **Type**: `number|Array`
- **Default**: `5`

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayX` 控制了横向的图案模式。当其值为 `number` 或 `number[]` 类型时，与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

*   如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的图案……
    
*   如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……
    
*   如果是 `(number | number[])[]` 类型，表示每行的图案和空白依次为数组值的循环。如：`[10, [2, 5]]` 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……
    

可以结合以下的例子理解本接口：

#### itemStyle.decal.dashArrayY
- **Type**: `number|Array`
- **Default**: `5`

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayY` 控制了横向的图案模式。与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

*   如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示高度为 5 的图案，然后空 5 像素，再然后显示高度为 5 的图案……
    
*   如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案高 5 像素，然后空 10 像素，然后图案高 2 像素，然后空 6 像素，然后图案高 5 像素……
    

可以结合以下的例子理解本接口：

#### itemStyle.decal.rotation
- **Type**: `number`
- **Default**: `0`

图案的整体旋转角度（弧度制），取值范围从 `-Math.PI` 到 `Math.PI`。

#### itemStyle.decal.maxTileWidth
- **Type**: `number`
- **Default**: `512`

生成的图案在未重复之前的宽度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

#### itemStyle.decal.maxTileHeight
- **Type**: `number`
- **Default**: `512`

生成的图案在未重复之前的高度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

## labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

### labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

### labelLine.showAbove
- **Type**: `boolean`

从 `v5.0.0` 开始支持

是否显示在图形上方。

### labelLine.length2
- **Type**: `number`

视觉引导项第二段的长度。

### labelLine.smooth
- **Type**: `boolean|number`
- **Default**: `false`

是否平滑视觉引导线，默认不平滑，可以设置成 `true` 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度。

### labelLine.minTurnAngle
- **Type**: `number`

从 `v5.0.0` 开始支持

通过调整第二段线的长度，限制引导线两端之间最小的夹角，以防止过小的夹角导致显示不美观。

可以设置为 0 - 180 度。

#### labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

#### labelLine.lineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线的类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `dashOffset` 可实现更灵活的虚线效果。

例如：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

## labelLayout
- **Type**: `Object|Function`

从 `v5.0.0` 开始支持

标签的统一布局配置。

该配置项是在每个系列默认的标签布局基础上，统一调整标签的`(x, y)`位置，标签对齐等属性以实现想要的标签布局效果。

该配置项也可以是一个有如下参数的回调函数

```
// 标签对应数据的 dataIndex
dataIndex: number
// 标签对应的数据类型，只在关系图中会有 node 和 edge 数据类型的区分
dataType?: string
// 标签对应的系列的 index
seriesIndex: number
// 标签显示的文本
text: string
// 默认的标签的包围盒，由系列默认的标签布局决定
labelRect: {x: number, y: number, width: number, height: number}
// 默认的标签水平对齐
align: 'left' | 'center' | 'right'
// 默认的标签垂直对齐
verticalAlign: 'top' | 'middle' | 'bottom'
// 标签所对应的数据图形的包围盒，可用于定位标签位置
rect: {x: number, y: number, width: number, height: number}
// 默认引导线的位置，目前只有饼图(pie)和漏斗图(funnel)有默认标签位置
// 如果没有该值则为 null
labelLinePoints?: number[][]
```

**示例：**

将标签显示在图形右侧 10px 的位置，并且垂直居中：

```
labelLayout(params) {
    return {
        x: params.rect.x + 10,
        y: params.rect.y + params.rect.height / 2,
        verticalAlign: 'middle',
        align: 'left'
    }
}
```

根据图形的包围盒尺寸决定文本尺寸

```

labelLayout(params) {
    return {
        fontSize: Math.max(params.rect.width / 10, 5)
    };
}
```

### labelLayout.hideOverlap
- **Type**: `boolean`

是否隐藏重叠的标签。

下面示例演示了在关系图中开启该配置后，在缩放时可以实现自动的标签隐藏。

### labelLayout.moveOverlap
- **Type**: `string`

在标签重叠的时候是否挪动标签位置以防止重叠。

目前支持配置为：

*   `'shiftX'` 水平方向依次位移，在水平方向对齐时使用
*   `'shiftY'` 垂直方向依次位移，在垂直方向对齐时使用

下面是标签右对齐并配置垂直方向依次位移以防止重叠的示例。

### labelLayout.x
- **Type**: `number|string`

标签的 x 位置。支持绝对的像素值或者`'20%'`这样的相对值。

### labelLayout.y
- **Type**: `number|string`

标签的 y 位置。支持绝对的像素值或者`'20%'`这样的相对值。

### labelLayout.dx
- **Type**: `number`

标签在 x 方向上的像素偏移。可以和`x`一起使用。

### labelLayout.dy
- **Type**: `number`

标签在 y 方向上的像素偏移。可以和`y`一起使用

### labelLayout.rotate
- **Type**: `number`

标签旋转角度。

### labelLayout.width
- **Type**: `number`

标签显示的宽度。可以配合`overflow`使用控制标签显示在固定宽度内

### labelLayout.height
- **Type**: `number`

标签显示的高度。

### labelLayout.align
- **Type**: `string`

标签水平对齐方式。可以设置`'left'`, `'center'`, `'right'`。

### labelLayout.verticalAlign
- **Type**: `string`

标签垂直对齐方式。可以设置`'top'`, `'middle'`, `'bottom'`。

### labelLayout.fontSize
- **Type**: `number`

The text size of the label.

### labelLayout.draggable
- **Type**: `boolean`

标签是否可以允许用户通过拖拽二次调整位置。

### labelLayout.labelLinePoints
- **Type**: `Array`

标签引导线三个点的位置。格式为：

```
[[x, y], [x, y], [x, y]]
```

在饼图中常用来微调已经计算好的引导线，其它情况一般不建议设置。

## selectedMode
- **Type**: `boolean|string`
- **Default**: `false`

从 `v5.0.0` 开始支持

选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选`'single'`，`'multiple'`，`'series'` 分别表示单选，多选以及选择整个系列。

> 从 v5.3.0 开始支持 `'series'`。

## dimensions
- **Type**: `Array`

使用 dimensions 定义 `series.data` 或者 `dataset.source` 的每个维度的信息。

注意：如果使用了 [dataset](option.dataset.md)，那么可以在 [dataset.dimensions](option.dataset.md#dimensions) 中定义 dimension ，或者在 [dataset.source](option.dataset.md#source) 的第一行/列中给出 dimension 名称。于是就不用在这里指定 dimension。但如果在这里指定了 `dimensions`，那么优先使用这里的。

例如：

```
option = {
    dataset: {
        source: [
            // 有了上面 dimensions 定义后，下面这五个维度的名称分别为：
            // 'date', 'open', 'close', 'highest', 'lowest'
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        // 定义了每个维度的名称。这个名称会被显示到默认的 tooltip 中。
        dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    }
}
```

```
series: {
    type: 'xxx',
    dimensions: [
        null,                // 如果此维度不想给出定义，则使用 null 即可
        {type: 'ordinal'},   // 只定义此维度的类型。
                             // 'ordinal' 表示离散型，一般文本使用这种类型。
                             // 如果类型没有被定义，会自动猜测类型。
        {name: 'good', type: 'number'},
        'bad'                // 等同于 {name: 'bad'}
    ]
}
```

`dimensions` 数组中的每一项可以是：

*   `string`，如 `'someName'`，等同于 `{name: 'someName'}`
*   `Object`，属性可以有：
    *   name: `string`。
    *   type: `string`，支持
        *   `number`，默认，表示普通数据。
        *   `ordinal`，对于类目、文本这些 string 类型的数据，如果需要能在数轴上使用，须是 'ordinal' 类型。ECharts 默认会自动判断这个类型。但是自动判断也是不可能很完备的，所以使用者也可以手动强制指定。
        *   `float`，即 [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)。
        *   `int`，即 [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)。
        *   `time`，表示时间类型。设置成 'time' 则能支持自动解析数据成时间戳（timestamp），比如该维度的数据是 '2017-05-10'，会自动被解析。时间类型的支持参见 [data](../option.md#series.data)。
    *   displayName: 一般用于 tooltip 中维度名的展示。`string` 如果没有指定，默认使用 name 来展示。

值得一提的是，当定义了 `dimensions` 后，默认 `tooltip` 中对个维度的显示，会变为『竖排』，从而方便显示每个维度的名称。如果没有定义 `dimensions`，则默认 `tooltip` 会横排显示，且只显示数值没有维度名称可显示。

## encode
- **Type**: `Object`

可以定义 `data` 的哪个维度被编码成什么。比如：

```
option = {
    dataset: {
        source: [
            // 每一列称为一个『维度』。
            // 这里分别是维度 0、1、2、3、4。
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        encode: {
            x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。
            y: 2,              // 表示维度 2 映射到 y 轴。
            tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。
        }
    }
}
```

当使用 [dimensions](../option.md#series.dimensions) 给维度定义名称后，`encode` 中可直接引用名称，例如：

```
series: {
    type: 'xxx',
    dimensions: ['date', 'open', 'close', 'highest', 'lowest'],
    encode: {
        x: 'date',
        y: ['open', 'close', 'highest', 'lowest']
    }
}
```

`encode` 声明的基本结构如下，其中冒号左边是坐标系、标签等特定名称，如 `'x'`, `'y'`, `'tooltip'` 等，冒号右边是数据中的维度名（string 格式）或者维度的序号（number 格式，从 0 开始计数），可以指定一个或多个维度（使用数组）。通常情况下，下面各种信息不需要所有的都写，按需写即可。

下面是 encode 支持的属性：

```
// 在任何坐标系和系列中，都支持：
encode: {
    // 使用 “名为 product 的维度” 和 “名为 score 的维度” 的值在 tooltip 中显示
    tooltip: ['product', 'score']
    // 使用第一个维度和第三个维度的维度名连起来作为系列名。（有时候名字比较长，这可以避免在 series.name 重复输入这些名字）
    seriesName: [1, 3],
    // 表示使用第二个维度中的值作为 id。这在使用 setOption 动态更新数据时有用处，可以使新老数据用 id 对应起来，从而能够产生合适的数据更新动画。
    itemId: 2,
    // 指定数据项的名称使用第三个维度在饼图等图表中有用，可以使这个名字显示在图例（legend）中。
    itemName: 3,
    // 指定数据项的组 ID (groupId)。当全局过渡动画功能开启时，setOption 前后拥有相同 groupId 的数据项会进行动画过渡。
    itemGroupId: 4,
    // 指定数据项对应的子数据组 ID (childGroupId)，用于实现多层下钻和聚合。详见 childGroupId。
    // 从 v5.5.0 开始支持
    itemChildGroupId: 5
}

// 直角坐标系（grid/cartesian）特有的属性：
encode: {
    // 把 “维度1”、“维度5”、“名为 score 的维度” 映射到 X 轴：
    x: [1, 5, 'score'],
    // 把“维度0”映射到 Y 轴。
    y: 0
}

// 单轴（singleAxis）特有的属性：
encode: {
    single: 3
}

// 极坐标系（polar）特有的属性：
encode: {
    radius: 3,
    angle: 2
}

// 地理坐标系（geo）特有的属性：
encode: {
    lng: 3,
    lat: 2
}

// 对于一些没有坐标系的图表，例如饼图、漏斗图等，可以是：
encode: {
    value: 3
}
```

这是个更丰富的 `encode` 的[示例](https://echarts.apache.org/examples/zh/view.html?c=dataset-encode1&edit=1&reset=1)：

特殊地，在 [自定义系列（custom series）](option.series-custom.md) 中，`encode` 中轴可以不指定或设置为 `null/undefined`，从而使系列免于受这个轴控制，也就是说，轴的范围（extent）不会受此系列数值的影响，轴被 [dataZoom](../option.md#dataZoom) 控制时也不会过滤掉这个系列：

```
var option = {
    xAxis: {},
    yAxis: {},
    dataZoom: [{
        xAxisIndex: 0
    }, {
        yAxisIndex: 0
    }],
    series: {
        type: 'custom',
        renderItem: function (params, api) {
            return {
                type: 'circle',
                shape: {
                    cx: 100, // x 位置永远为 100
                    cy: api.coord([0, api.value(0)])[1],
                    r: 30
                },
                style: {
                    fill: 'blue'
                }
            };
        },
        encode: {
            // 这样这个系列就不会被 x 轴以及 x
            // 轴上的 dataZoom 控制了。
            x: -1,
            y: 1
        },
        data: [ ... ]
    }
};
```

## seriesLayoutBy
- **Type**: `string`
- **Default**: `'column'`

当使用 [dataset](option.dataset.md) 时，`seriesLayoutBy` 指定了 `dataset` 中用行还是列对应到系列上，也就是说，系列“排布”到 `dataset` 的行还是列上。可取值：

*   'column'：默认，`dataset` 的列对应于系列，从而 `dataset` 中每一列是一个维度（dimension）。
*   'row'：`dataset` 的行对应于系列，从而 `dataset` 中每一行是一个维度（dimension）。

参见这个 [示例](https://echarts.apache.org/examples/zh/editor.html?c=dataset-series-layout-by&theme=lite)

## datasetIndex
- **Type**: `number`
- **Default**: `0`

如果 [series.data](../option.md#series.data) 没有指定，并且 [dataset](option.dataset.md) 存在，那么就会使用 [dataset](option.dataset.md)。`datasetIndex` 指定本系列使用哪个 [dataset](option.dataset.md)。

## dataGroupId
- **Type**: `string`

该系列所有数据项的组 ID，优先级低于`groupId`。详见`series.data.groupId`。

## data
- **Type**: `Array`

系列中的数据内容数组。数组项通常为具体的数据项。

注意，如果系列没有指定 `data`，并且 option 有 [dataset](option.dataset.md)，那么默认使用第一个 [dataset](option.dataset.md)。如果指定了 `data`，则不会再使用 [dataset](option.dataset.md)。

可以使用 `series.datasetIndex` 指定其他的 [dataset](option.dataset.md)。

通常来说，数据用一个二维数组表示。如下，每一列被称为一个『维度』。

```
series: [{
    data: [
        // 维度X   维度Y   其他维度 ...
        [  3.4,    4.5,   15,   43],
        [  4.2,    2.3,   20,   91],
        [  10.8,   9.5,   30,   18],
        [  7.2,    8.8,   18,   57]
    ]
}]
```

*   在 [直角坐标系 (grid)](option.grid.md) 中『维度X』和『维度Y』会默认对应于 [xAxis](option.xAxis.md) 和 [yAxis](option.yAxis.md)。
*   在 [极坐标系 (polar)](option.polar.md) 中『维度X』和『维度Y』会默认对应于 [radiusAxis](option.radiusAxis.md) 和 [angleAxis](option.angleAxis.md)。
*   后面的其他维度是可选的，可以在别处被使用，例如：
    *   在 [visualMap](../option.md#visualMap) 中可以将一个或多个维度映射到颜色，大小等多个图形属性上。
    *   在 [series.symbolSize](../option.md#series.symbolSize) 中可以使用回调函数，基于某个维度得到 symbolSize 值。
    *   使用 [tooltip.formatter](option.tooltip.md#formatter) 或 [series.label.formatter](../option.md#series.label.formatter) 可以把其他维度的值展示出来。

特别地，当只有一个轴为类目轴（axis.type 为 `'category'`）的时候，数据可以简化用一个一维数组表示。例如：

```
xAxis: {
    data: ['a', 'b', 'm', 'n']
},
series: [{
    // 与 xAxis.data 一一对应。
    data: [23,  44,  55,  19]
    // 它其实是下面这种形式的简化：
    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]
}]
```

**『值』与 [轴类型](option.xAxis.md#type) 的关系：**

*   当某维度对应于数值轴（axis.type 为 `'value'` 或者 `'log'`）的时候：
    
    其值可以为 `number`（例如 `12`）。（也可以兼容 `string` 形式的 number，例如 `'12'`）
    
*   当某维度对应于类目轴（axis.type 为 `'category'`）的时候：
    
    其值须为类目的『序数』（从 `0` 开始）或者类目的『字符串值』。例如：
    
    ```
      xAxis: {
          type: 'category',
          data: ['星期一', '星期二', '星期三', '星期四']
      },
      yAxis: {
          type: 'category',
          data: ['a', 'b', 'm', 'n', 'p', 'q']
      },
      series: [{
          data: [
              // xAxis    yAxis
              [  0,        0,    2  ], // 意思是此点位于 xAxis: '星期一', yAxis: 'a'。
              [  '星期四',  2,    1  ], // 意思是此点位于 xAxis: '星期四', yAxis: 'm'。
              [  2,       'p',   2  ], // 意思是此点位于 xAxis: '星期三', yAxis: 'p'。
              [  3,        3,    5  ]
          ]
      }]
    ```
    
    双类目轴的示例可以参考 [Github Punchcard](https://echarts.apache.org/examples/zh/editor.html?c=scatter-punchCard) 示例。
    
*   当某维度对应于时间轴（type 为 `'time'`）的时候，值可以为：
    
    *   一个时间戳，如 `1484141700832`，表示 UTC 时间。
    *   或者字符串形式的时间描述：
        *   [ISO 8601](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) 的子集，只包含这些形式（这几种格式，除非指明时区，否则均表示本地时间，与 [moment](https://momentjs.com/) 一致）：
            *   部分年月日时间: `'2012-03'`, `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
            *   使用 `'T'` 或空格分割: `'2012-03-01T12:22:33.123'`, `'2012-03-01 12:22:33.123'`.
            *   时区设定: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`, `'2012-03-01T12:22:33-05:00'`.
        *   其他的时间字符串，包括（均表示本地时间）: `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`, `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`
    *   或者用户自行初始化的 Date 实例：
        *   注意，用户自行初始化 Date 实例的时候，[浏览器的行为有差异，不同字符串的表示也不同](https://dygraphs.com/date-formats.html)。
        *   例如：在 chrome 中，`new Date('2012-01-01')` 表示 UTC 时间的 2012 年 1 月 1 日，而 `new Date('2012-1-1')` 和 `new Date('2012/01/01')` 表示本地时间的 2012 年 1 月 1 日。在 safari 中，不支持 `new Date('2012-1-1')` 这种表示方法。
        *   所以，使用 `new Date(dataString)` 时，可使用第三方库解析（如 [moment](https://momentjs.com/)），或者使用 `echarts.time.parse`，或者参见 [这里](https://dygraphs.com/date-formats.html)。

**当需要对个别数据进行个性化定义时：**

数组项可用对象，其中的 `value` 像表示具体的数值，如：

```
[
    12,
    34,
    {
        value : 56,
        //自定义标签样式，仅对该数据项有效
        label: {},
        //自定义特殊 itemStyle，仅对该数据项有效
        itemStyle:{}
    },
    10
]
// 或
[
    [12, 33],
    [34, 313],
    {
        value: [56, 44],
        label: {},
        itemStyle:{}
    },
    [10, 33]
]
```

**空值：**

当某数据不存在时（ps：_不存在_不代表值为 0），可以用 `'-'` 或者 `null` 或者 `undefined` 或者 `NaN` 表示。

例如，无数据在折线图中可表现为该点是断开的，在其它图中可表示为图形不存在。

### data.name
- **Type**: `string`

数据项名称。

### data.value
- **Type**: `number`

单个数据项的数值。

### data.groupId
- **Type**: `string`

该数据项的组 ID。当全局过渡动画功能开启时，`setOption` 前后拥有相同组 ID 的数据项会进行动画过渡。

若没有指定`groupId` ，会尝试用`series.dataGroupId`作为该数据项的组 ID；若`series.dataGroupId`也没有指定，则会使用数据项的 ID 作为组 ID。

如果你使用了[dataset](option.dataset.md)组件来表达数据，推荐使用`encode.itemGroupId`来指定哪个维度被编码为组 ID。

### data.childGroupId
- **Type**: `string`

从 `v5.5.0` 开始支持

该数据项对应的子数据组 ID，用于实现多层下钻和聚合。

通过`groupId`已经可以达到数据下钻和聚合的效果，但只支持一层的下钻和聚合。为了实现多层下钻和聚合，我们又引入了`childGroupId`。

引入`childGroupId`后，不同`option`的数据项之间就能形成逻辑上的父子关系，例如：

```
data: [                        data: [                        data: [
  {                              {                              {
    name: 'Animals',               name: 'Dogs',                  name: 'Corgi',
    value: 3,                      value: 3,                      value: 5,
    groupId: 'things',             groupId: 'animals',            groupId: 'dogs'
    childGroupId: 'animals'        childGroupId: 'dogs'         },
  },                             },                             {
  {                              {                                name: 'Bulldog',
    name: 'Fruits',                name: 'Cats',                  value: 6,
    value: 3,                      value: 4,                      groupId: 'dogs'
    groupId: 'things',             groupId: 'animals',          },
    childGroupId: 'fruits'         childGroupId: 'cats',        {
  },                             },                               name: 'Shiba Inu',
  {                              {                                value: 7,
    name: 'Cars',                  name: 'Birds',                 groupId: 'dogs'
    value: 2,                      value: 3,                    }
    groupId: 'things',             groupId: 'animals',        ]
    childGroupId: 'cars'           childGroupId: 'birds'
  }                              }
]                              ]
```

上面 3 组 data 分别来自 3 个 option ，通过`groupId`和`childGroupId`，它们之间存在了“父-子-孙”的关系。在`setOption`时，Apache ECharts 会尝试寻找前后`option`数据项间的父子关系，若存在父子关系，则会对相关数据项进行下钻或聚合动画的过渡。

没有对应子数据组的数据项不需要指定`childGroupId`。

如果你使用了[dataset](option.dataset.md)组件来表达数据，推荐使用`encode.itemChildGroupId`来指定哪个维度被编码为子数据组 ID。

#### data.itemStyle.color
- **Type**: `Color`
- **Default**: `自适应`

图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### data.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#### data.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

描边线宽。为 0 时无描边。

#### data.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### data.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### data.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### data.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### data.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### data.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### data.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### data.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### data.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### data.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

#### data.itemStyle.decal
- **Type**: `Object`

图形的贴花图案，在 [aria.enabled](option.aria.md#enabled) 与 [aria.decal.show](option.aria.md#decal.show) 都是 `true` 的情况下才生效。

如果为 `'none'` 表示不使用贴花图案。

##### data.itemStyle.decal.symbol
- **Type**: `string|Array`
- **Default**: `'rect'`

贴花的图案，如果是 `string[]` 表示循环使用数组中的图案。

ECharts 提供的标记类型包括

`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

可以通过 `'image://url'` 设置为图片，其中 URL 为图片的链接，或者 `dataURI`。

URL 为图片链接例如：

```
'image://http://example.website/a/b.png'
```

URL 为 `dataURI` 例如：

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

可以通过 `'path://'` 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。可以从 Adobe Illustrator 等工具编辑导出。

例如：

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

##### data.itemStyle.decal.symbolSize
- **Type**: `number`
- **Default**: `1`

取值范围：`0` 到 `1`，表示占图案区域的百分比。

##### data.itemStyle.decal.symbolKeepAspect
- **Type**: `boolean`
- **Default**: `true`

是否保持图案的长宽比。

##### data.itemStyle.decal.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.2)'`

贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。

##### data.itemStyle.decal.backgroundColor
- **Type**: `string`

贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。

##### data.itemStyle.decal.dashArrayX
- **Type**: `number|Array`
- **Default**: `5`

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayX` 控制了横向的图案模式。当其值为 `number` 或 `number[]` 类型时，与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

*   如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的图案……
    
*   如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……
    
*   如果是 `(number | number[])[]` 类型，表示每行的图案和空白依次为数组值的循环。如：`[10, [2, 5]]` 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……
    

可以结合以下的例子理解本接口：

##### data.itemStyle.decal.dashArrayY
- **Type**: `number|Array`
- **Default**: `5`

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayY` 控制了横向的图案模式。与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

*   如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示高度为 5 的图案，然后空 5 像素，再然后显示高度为 5 的图案……
    
*   如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案高 5 像素，然后空 10 像素，然后图案高 2 像素，然后空 6 像素，然后图案高 5 像素……
    

可以结合以下的例子理解本接口：

##### data.itemStyle.decal.rotation
- **Type**: `number`
- **Default**: `0`

图案的整体旋转角度（弧度制），取值范围从 `-Math.PI` 到 `Math.PI`。

##### data.itemStyle.decal.maxTileWidth
- **Type**: `number`
- **Default**: `512`

生成的图案在未重复之前的宽度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

##### data.itemStyle.decal.maxTileHeight
- **Type**: `number`
- **Default**: `512`

生成的图案在未重复之前的高度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

##### data.emphasis.itemStyle.color
- **Type**: `Color`
- **Default**: `自适应`

图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

##### data.emphasis.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

##### data.emphasis.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

描边线宽。为 0 时无描边。

##### data.emphasis.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

##### data.emphasis.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.emphasis.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### data.emphasis.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### data.emphasis.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### data.emphasis.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### data.emphasis.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### data.emphasis.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### data.emphasis.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### data.emphasis.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### data.tooltip
- **Type**: `Object`

本系列每个数据项中特定的 tooltip 设定。

#### data.tooltip.position
- **Type**: `string|Array|Function`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。

可选：

*   `Array`
    
    通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。
    
    示例:
    
    ```
      // 绝对位置，相对于容器左侧 10px, 上侧 10 px
      position: [10, 10]
      // 相对位置，放置在容器正中间
      position: ['50%', '50%']
    ```
    
*   `Function`
    
    回调函数，格式如下：
    
    ```
      (point: Array, params: Object|Array.<Object>, dom: HTMLDomElement, rect: Object, size: Object) => Array
    ```
    
    **参数：**  
    point: 鼠标位置，如 \[20, 40\]。  
    params: 同 formatter 的参数相同。  
    dom: tooltip 的 dom 对象。  
    rect: 只有鼠标在图形上时有效，是一个用`x`, `y`, `width`, `height`四个属性表达的图形包围盒。  
    size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：`{contentSize: [width, height], viewSize: [width, height]}`。  
    
    **返回值：**  
    可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相 百分比。  
    也可以是一个对象，如：`{left: 10, top: 30}`，或者 `{right: '20%', bottom: 40}`。  
    
    如下示例：
    
    ```
      position: function (point, params, dom, rect, size) {
          // 固定在顶部
          return [point[0], '10%'];
      }
    ```
    
    或者：
    
    ```
      position: function (pos, params, dom, rect, size) {
          // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
          var obj = {top: 60};
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
      }
    ```
    

*   `'inside'`
    
    鼠标所在图形的内部中心位置，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'top'`
    
    鼠标所在图形上侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'left'`
    
    鼠标所在图形左侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'right'`
    
    鼠标所在图形右侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'bottom'`
    
    鼠标所在图形底侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。

#### data.tooltip.formatter
- **Type**: `string|Function`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层内容格式器，支持字符串模板和回调函数两种形式。

**1\. 字符串模板**

模板变量有 `{a}`, `{b}`，`{c}`，`{d}`，`{e}`，分别表示系列名，数据名，数据值等。 在 [trigger](option.tooltip.md#trigger) 为 `'axis'` 的时候，会有多个系列的数据，此时可以通过 `{a0}`, `{a1}`, `{a2}` 这种后面加索引的方式表示系列的索引。 不同图表类型下的 `{a}`，`{b}`，`{c}`，`{d}` 含义不一样。 其中变量`{a}`, `{b}`, `{c}`, `{d}`在不同图表类型下代表数据含义为：

*   折线（区域）图、柱状（条形）图、K线图 : `{a}`（系列名称），`{b}`（类目值），`{c}`（数值）, `{d}`（无）
    
*   散点图（气泡）图 : `{a}`（系列名称），`{b}`（数据名称），`{c}`（数值数组）, `{d}`（无）
    
*   地图 : `{a}`（系列名称），`{b}`（区域名称），`{c}`（合并数值）, `{d}`（无）
    
*   饼图、仪表盘、漏斗图: `{a}`（系列名称），`{b}`（数据项名称），`{c}`（数值）, `{d}`（百分比）
    

更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。

**示例：**

```
formatter: '{b0}: {c0}<br />{b1}: {c1}'
```

**2\. 回调函数**

回调函数格式：

```
(params: Object|Array, ticket: string, callback: (ticket: string, html: string | HTMLElement | HTMLElement[])) => string | HTMLElement | HTMLElement[]
```

支持返回 HTML 字符串或者创建的 DOM 实例。

\[警告\]: tooltip 是用 HTML 实现的（除非 [tooltip.renderMode](option.tooltip.md#renderMode) 设为 `richText`）。允许用此方式定制 HTML。传入 HTML 前须要对其内容进行正确转义。 使用时必须考虑 **安全风险**。文档 [“安全指南”](https://echarts.apache.org/handbook/zh/best-practices/security) 给出了安全使用建议。

组装 HTML 字符串时，**必须进行 HTML 转义（HTML-escaping）**。例如：

```
{
    tooltip: {
        formatter: params => {
            const { name, value } = params;
            // 必须进行 HTML 转义。
            // 否则，如果 name 或 value 中含有功能性字符，如 '<' '>' 等，
            // 则可能渲染不正确。
            // 同时，如果 name 或 value 的值来自于“非受信任”的来源，则可能被注入恶意代码；
            // 如果未被转义，则会被运行。
            return echarts.format.encodeHTML(name)
                + '<b>' + echarts.format.encodeHTML(value) + '</b>';
            // 注：`echarts.format.encodeHTML` 是个工具函数，把特殊字符
            //  （'&'、'<'、'>'、'"'、"'"）转换成他们对应的 HTML entities.
            //  这只是个例子，任何 HTML 转义工具函数都可使用。
        }
    }
}
```

第一个参数 `params` 是 formatter 需要的数据集。格式如下：

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string,
    // 饼图/漏斗图的百分比
    percent: number,
    // 旭日图中当前节点的祖先节点（包括自身）
    treePathInfo: Array,
    // 树图/矩形树图中当前节点的祖先节点（包括自身）
    treeAncestors: Array,
    // 坐标轴标签文本是否溢出隐藏，可以使用此函数判断是否需要弹出提示框
    isTruncated: Function,
    // 当前坐标轴标签刻度索引
    tickIndex: number
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

在 [trigger](option.tooltip.md#trigger) 为 `'axis'` 的时候，或者 tooltip 被 [axisPointer](option.xAxis.md#axisPointer) 触发的时候，`params` 是多个系列的数据数组。其中每项内容格式同上，并且，

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

第二个参数 `ticket` 是异步回调标识，配合第三个参数 `callback` 使用。 第三个参数 `callback` 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 `ticket` 和 `html` 更新提示框浮层内容。

示例：

```
formatter: function (params, ticket, callback) {
    $.get('detail?name=' + params.name, function (content) {
        callback(ticket, toHTML(content));
    });
    return 'Loading';
}
```

#### data.tooltip.valueFormatter
- **Type**: `string`

从 `v5.3.0` 开始支持

tooltip 中数值显示部分的格式化回调函数。

回调函数格式：

```
(value: number | string, dataIndex: number) => string
```

`dataIndex` 参数 从 `v5.3.0` 开始支持

示例：

```
// 添加 $ 前缀
valueFormatter: (value) => '$' + value.toFixed(2)
```

> **\[注\]:** 不同于 [tooltip.formater](option.tooltip.md#formatter)，本方式不支持返回原始 HTML。返回内容渲染前会被自动按需转义。

#### data.tooltip.backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的背景颜色。

#### data.tooltip.borderColor
- **Type**: `Color`
- **Default**: `'#333'`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的边框颜色。

#### data.tooltip.borderWidth
- **Type**: `number`
- **Default**: `0`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的边框宽。

#### data.tooltip.padding
- **Type**: `number`
- **Default**: `5`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。

使用示例：

```
// 设置内边距为 5
padding: 5
// 设置上下的内边距为 5，左右的内边距为 10
padding: [5, 10]
// 分别设置四个方向的内边距
padding: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

#### data.tooltip.textStyle
- **Type**: `Object`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的文本样式。

##### data.tooltip.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

##### data.tooltip.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.tooltip.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.tooltip.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.tooltip.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

文字的字体大小。

##### data.tooltip.textStyle.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

##### data.tooltip.textStyle.width
- **Type**: `number`

文本显示宽度。

##### data.tooltip.textStyle.height
- **Type**: `number`

文本显示高度。

##### data.tooltip.textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

##### data.tooltip.textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.tooltip.textStyle.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

##### data.tooltip.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.tooltip.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.tooltip.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.tooltip.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.tooltip.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.tooltip.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.tooltip.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### data.tooltip.extraCssText
- **Type**: `string`

> **注意：**`series.data.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[警告\]: tooltip 是用 HTML 实现的（除非 [tooltip.renderMode](option.tooltip.md#renderMode) 设为 `richText`）。允许用此方式定制 toolbox 外壳的 CSS text。 如果此 CSS text 来自于“不受信任”的来源，必须考虑 **安全风险**。文档 [“安全指南”](https://echarts.apache.org/handbook/zh/best-practices/security) 给出了安全使用建议。

## clip
- **Type**: `boolean`
- **Default**: `false`

从 `v4.4.0` 开始支持

是否裁剪超出坐标系部分的图形，具体裁剪效果根据系列决定：

*   散点图/带有涟漪特效动画的散点（气泡）图：忽略中心点超出坐标系的图形，但是不裁剪单个图形
*   柱状图：裁掉完全超出的柱子，但是不会裁剪只超出部分的柱子
*   折线图：裁掉所有超出坐标系的折线部分，拐点图形的逻辑按照散点图处理
*   路径图：裁掉所有超出坐标系的部分
*   K 线图：忽略整体都超出坐标系的图形，但是不裁剪单个图形
*   象形柱图：裁掉所有超出坐标系的部分（从 v5.5.0 开始支持）
*   自定义系列：裁掉所有超出坐标系的部分

除了象形柱图和自定义系列，其它系列的默认值都为 true，及开启裁剪，如果你觉得不想要裁剪的话，可以设置成 false 关闭。

## zlevel
- **Type**: `number`
- **Default**: `0`

自定义图所有图形的 zlevel 值。

`zlevel`用于 Canvas 分层，不同`zlevel`值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的`zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。

## z
- **Type**: `number`
- **Default**: `2`

自定义图组件的所有图形的`z`值。控制图形的前后顺序。`z`值小的图形会被`z`值大的图形覆盖。

`z`相比`zlevel`优先级更低，而且不会创建新的 Canvas。

## silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

## animation
- **Type**: `boolean`
- **Default**: `true`

是否开启动画。

## animationThreshold
- **Type**: `number`
- **Default**: `2000`

是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。

## animationDuration
- **Type**: `number|Function`
- **Default**: `1000`

初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：

```
animationDuration: function (idx) {
    // 越往后的数据时长越大
    return idx * 100;
}
```

## animationEasing
- **Type**: `string`
- **Default**: `'cubicOut'`

初始动画的缓动效果。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

## animationDelay
- **Type**: `number|Function`
- **Default**: `0`

初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。

如下示例：

```
animationDelay: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
}
```

也可以看[该示例](https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay)

## animationDurationUpdate
- **Type**: `number|Function`
- **Default**: `300`

数据更新动画的时长。

支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：

```
animationDurationUpdate: function (idx) {
    // 越往后的数据时长越大
    return idx * 100;
}
```

## animationEasingUpdate
- **Type**: `string`
- **Default**: `'cubicInOut'`

数据更新动画的缓动效果。

## animationDelayUpdate
- **Type**: `number|Function`
- **Default**: `0`

数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

如下示例：

```
animationDelayUpdate: function (idx) {
    // 越往后的数据延迟越大
    return idx * 100;
}
```

也可以看[该示例](https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay)

## universalTransition
- **Type**: `Object`

从 `v5.2.0` 开始支持

全局过渡动画相关的配置。

全局过渡动画（Universal Transition）提供了任意系列之间进行变形动画的功能。开启该功能后，每次`setOption`，相同`id`的系列之间会自动关联进行动画的过渡，更细粒度的关联配置见`universalTransition.seriesKey`配置。

通过配置数据项的`groupId`和`childGroupId`，还可以实现诸如下钻，聚合等一对多或者多对一的动画。

可以直接在系列中配置 `universalTransition: true` 开启该功能。也可以提供一个对象进行更多属性的配置。

### universalTransition.enabled
- **Type**: `boolean`
- **Default**: `false`

是否开启全局过渡动画。

### universalTransition.seriesKey
- **Type**: `string|Array`

`seriesKey`决定了如何关联需要动画的系列，未配置时会默认取系列的`id`。

通常该配置为一个字符串，配置为相同`seriesKey`的系列之间会进行动画的过渡。也可以像下面配置为一个数组：

```
seriesKey: ['male', 'female']
```

配置为数组意味着在动画的时候所有数组项指定的系列会合并为当前系列。比如该配置是指`id`或者`seriesKey`为`'male'`和`'female'`的系列会合并成当前系列。

### universalTransition.divideShape
- **Type**: `string`

`divideShape`决定在一对多或者多对一的动画中，当前系列的图形如何分裂成多个图形。目前支持

*   `'split'` 通过一定的算法将分割图形成为多个。
*   `'clone'` 从当前图形克隆得到多个。

为了较好的效果，不同的系列会默认有不同的配置，比如散点图这种图形比较小且复杂的默认采用了`'clone'`，而柱状图这种更加规则的则默认是`'split'`。你可以根据你自己的场景需求设置为需要的分裂策略。

### universalTransition.delay
- **Type**: `Function`

```
(index: number, count: number) => number
```

配置一对多或者多对一的动画中每个图形的动画延时，设置不同的动画延时可以给动画带来一定的趣味性。比如下面代码每个图形通过一个随机的延时造成一种错落的效果：

```
delay: function (index, count) {
    return Math.random() * 1000;
}
```

## tooltip
- **Type**: `Object`

本系列特定的 tooltip 设定。

### tooltip.position
- **Type**: `string|Array|Function`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。

可选：

*   `Array`
    
    通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。
    
    示例:
    
    ```
      // 绝对位置，相对于容器左侧 10px, 上侧 10 px
      position: [10, 10]
      // 相对位置，放置在容器正中间
      position: ['50%', '50%']
    ```
    
*   `Function`
    
    回调函数，格式如下：
    
    ```
      (point: Array, params: Object|Array.<Object>, dom: HTMLDomElement, rect: Object, size: Object) => Array
    ```
    
    **参数：**  
    point: 鼠标位置，如 \[20, 40\]。  
    params: 同 formatter 的参数相同。  
    dom: tooltip 的 dom 对象。  
    rect: 只有鼠标在图形上时有效，是一个用`x`, `y`, `width`, `height`四个属性表达的图形包围盒。  
    size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：`{contentSize: [width, height], viewSize: [width, height]}`。  
    
    **返回值：**  
    可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相 百分比。  
    也可以是一个对象，如：`{left: 10, top: 30}`，或者 `{right: '20%', bottom: 40}`。  
    
    如下示例：
    
    ```
      position: function (point, params, dom, rect, size) {
          // 固定在顶部
          return [point[0], '10%'];
      }
    ```
    
    或者：
    
    ```
      position: function (pos, params, dom, rect, size) {
          // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
          var obj = {top: 60};
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
          return obj;
      }
    ```
    

*   `'inside'`
    
    鼠标所在图形的内部中心位置，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'top'`
    
    鼠标所在图形上侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'left'`
    
    鼠标所在图形左侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'right'`
    
    鼠标所在图形右侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。
    
*   `'bottom'`
    
    鼠标所在图形底侧，只在 [trigger](option.tooltip.md#trigger) 为`'item'`的时候有效。

### tooltip.formatter
- **Type**: `string|Function`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层内容格式器，支持字符串模板和回调函数两种形式。

**1\. 字符串模板**

模板变量有 `{a}`, `{b}`，`{c}`，`{d}`，`{e}`，分别表示系列名，数据名，数据值等。 在 [trigger](option.tooltip.md#trigger) 为 `'axis'` 的时候，会有多个系列的数据，此时可以通过 `{a0}`, `{a1}`, `{a2}` 这种后面加索引的方式表示系列的索引。 不同图表类型下的 `{a}`，`{b}`，`{c}`，`{d}` 含义不一样。 其中变量`{a}`, `{b}`, `{c}`, `{d}`在不同图表类型下代表数据含义为：

*   折线（区域）图、柱状（条形）图、K线图 : `{a}`（系列名称），`{b}`（类目值），`{c}`（数值）, `{d}`（无）
    
*   散点图（气泡）图 : `{a}`（系列名称），`{b}`（数据名称），`{c}`（数值数组）, `{d}`（无）
    
*   地图 : `{a}`（系列名称），`{b}`（区域名称），`{c}`（合并数值）, `{d}`（无）
    
*   饼图、仪表盘、漏斗图: `{a}`（系列名称），`{b}`（数据项名称），`{c}`（数值）, `{d}`（百分比）
    

更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。

**示例：**

```
formatter: '{b0}: {c0}<br />{b1}: {c1}'
```

**2\. 回调函数**

回调函数格式：

```
(params: Object|Array, ticket: string, callback: (ticket: string, html: string | HTMLElement | HTMLElement[])) => string | HTMLElement | HTMLElement[]
```

支持返回 HTML 字符串或者创建的 DOM 实例。

\[警告\]: tooltip 是用 HTML 实现的（除非 [tooltip.renderMode](option.tooltip.md#renderMode) 设为 `richText`）。允许用此方式定制 HTML。传入 HTML 前须要对其内容进行正确转义。 使用时必须考虑 **安全风险**。文档 [“安全指南”](https://echarts.apache.org/handbook/zh/best-practices/security) 给出了安全使用建议。

组装 HTML 字符串时，**必须进行 HTML 转义（HTML-escaping）**。例如：

```
{
    tooltip: {
        formatter: params => {
            const { name, value } = params;
            // 必须进行 HTML 转义。
            // 否则，如果 name 或 value 中含有功能性字符，如 '<' '>' 等，
            // 则可能渲染不正确。
            // 同时，如果 name 或 value 的值来自于“非受信任”的来源，则可能被注入恶意代码；
            // 如果未被转义，则会被运行。
            return echarts.format.encodeHTML(name)
                + '<b>' + echarts.format.encodeHTML(value) + '</b>';
            // 注：`echarts.format.encodeHTML` 是个工具函数，把特殊字符
            //  （'&'、'<'、'>'、'"'、"'"）转换成他们对应的 HTML entities.
            //  这只是个例子，任何 HTML 转义工具函数都可使用。
        }
    }
}
```

第一个参数 `params` 是 formatter 需要的数据集。格式如下：

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string,
    // 饼图/漏斗图的百分比
    percent: number,
    // 旭日图中当前节点的祖先节点（包括自身）
    treePathInfo: Array,
    // 树图/矩形树图中当前节点的祖先节点（包括自身）
    treeAncestors: Array,
    // 坐标轴标签文本是否溢出隐藏，可以使用此函数判断是否需要弹出提示框
    isTruncated: Function,
    // 当前坐标轴标签刻度索引
    tickIndex: number
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

在 [trigger](option.tooltip.md#trigger) 为 `'axis'` 的时候，或者 tooltip 被 [axisPointer](option.xAxis.md#axisPointer) 触发的时候，`params` 是多个系列的数据数组。其中每项内容格式同上，并且，

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

第二个参数 `ticket` 是异步回调标识，配合第三个参数 `callback` 使用。 第三个参数 `callback` 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 `ticket` 和 `html` 更新提示框浮层内容。

示例：

```
formatter: function (params, ticket, callback) {
    $.get('detail?name=' + params.name, function (content) {
        callback(ticket, toHTML(content));
    });
    return 'Loading';
}
```

### tooltip.valueFormatter
- **Type**: `string`

从 `v5.3.0` 开始支持

tooltip 中数值显示部分的格式化回调函数。

回调函数格式：

```
(value: number | string, dataIndex: number) => string
```

`dataIndex` 参数 从 `v5.3.0` 开始支持

示例：

```
// 添加 $ 前缀
valueFormatter: (value) => '$' + value.toFixed(2)
```

> **\[注\]:** 不同于 [tooltip.formater](option.tooltip.md#formatter)，本方式不支持返回原始 HTML。返回内容渲染前会被自动按需转义。

### tooltip.backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的背景颜色。

### tooltip.borderColor
- **Type**: `Color`
- **Default**: `'#333'`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的边框颜色。

### tooltip.borderWidth
- **Type**: `number`
- **Default**: `0`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的边框宽。

### tooltip.padding
- **Type**: `number`
- **Default**: `5`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。

使用示例：

```
// 设置内边距为 5
padding: 5
// 设置上下的内边距为 5，左右的内边距为 10
padding: [5, 10]
// 分别设置四个方向的内边距
padding: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

### tooltip.textStyle
- **Type**: `Object`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

提示框浮层的文本样式。

#### tooltip.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

#### tooltip.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### tooltip.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### tooltip.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### tooltip.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

文字的字体大小。

#### tooltip.textStyle.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

#### tooltip.textStyle.width
- **Type**: `number`

文本显示宽度。

#### tooltip.textStyle.height
- **Type**: `number`

文本显示高度。

#### tooltip.textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

#### tooltip.textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### tooltip.textStyle.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

#### tooltip.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### tooltip.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### tooltip.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### tooltip.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### tooltip.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### tooltip.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### tooltip.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

### tooltip.extraCssText
- **Type**: `string`

> **注意：**`series.tooltip` 仅在 [tooltip.trigger](option.tooltip.md#trigger) 为 `'item'` 时有效。  

额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[警告\]: tooltip 是用 HTML 实现的（除非 [tooltip.renderMode](option.tooltip.md#renderMode) 设为 `richText`）。允许用此方式定制 toolbox 外壳的 CSS text。 如果此 CSS text 来自于“不受信任”的来源，必须考虑 **安全风险**。文档 [“安全指南”](https://echarts.apache.org/handbook/zh/best-practices/security) 给出了安全使用建议。
