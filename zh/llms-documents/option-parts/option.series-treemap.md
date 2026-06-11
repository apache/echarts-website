# option.series-treemap

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## name
- **Type**: `string`

系列名称，用于[tooltip](option.tooltip.md)的显示，[legend](option.legend.md) 的图例筛选，在 `setOption` 更新数据和配置项时用于指定对应的系列。

## zlevel
- **Type**: `number`
- **Default**: `0`

所有图形的 zlevel 值。

`zlevel`用于 Canvas 分层，不同`zlevel`值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的`zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。

## z
- **Type**: `number`
- **Default**: `2`

组件的所有图形的`z`值。控制图形的前后顺序。`z`值小的图形会被`z`值大的图形覆盖。

`z`相比`zlevel`优先级更低，而且不会创建新的 Canvas。

## left
- **Type**: `string|number`
- **Default**: `center`

矩形树图系列（treemap series）离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## top
- **Type**: `string|number`
- **Default**: `middle`

矩形树图系列（treemap series）离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

## right
- **Type**: `string|number`
- **Default**: `'auto'`

矩形树图系列（treemap series）离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

默认自适应。

## bottom
- **Type**: `string|number`
- **Default**: `'auto'`

矩形树图系列（treemap series）离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

默认自适应。

## width
- **Type**: `string|number`
- **Default**: `80%`

矩形树图系列（treemap series）的宽度。

`width` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

## height
- **Type**: `string|number`
- **Default**: `80%`

矩形树图系列（treemap series）的高度。

`height` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

## coordinateSystem
- **Type**: `string`
- **Default**: `'none'`

从 `v6.0.0` 开始支持

指定另一个坐标系组件，本 `series-treemap` 布局在那个坐标系中。

可选值：

*   `null`、`undefined` 或者 `'none'`
    
    不布局在任何坐标系中。自己独立完成布局。
    

*   `'calendar'`
    
    布局在一个 [日历坐标系](option.calendar.md) 中。当一个 ECharts 实例中存在多个日历坐标系时，须通过 [calendarIndex](option.series-treemap.md#calendarIndex) 或 [calendarId](option.series-treemap.md#calendarId) 指定所使用的日历坐标系。
    

*   `'matrix'`
    
    布局在一个 [矩阵坐标系](option.matrix.md)中。当一个 ECharts 实例中存在多个矩阵坐标系时，须通过 [matrixIndex](option.series-treemap.md#matrixIndex) 或 [matrixId](option.series-treemap.md#matrixId) 指定所使用的矩阵坐标系。
    

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

也参见 [series-treemap.coordinateSystemUsage](option.series-treemap.md#coordinateSystemUsage)。

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'data'`

从 `v6.0.0` 开始支持

如何在指定的 [坐标系](option.series-treemap.md#coordinateSystem) 上布局本 `series-treemap`。

在大多数情况下，无需显式指定 `coordinateSystemUsage`，除非默认行为不符合预期。

可选值：

*   `'data'`：
    
    此系列的每个数据项（例如，每个 `series.data[i]`）将独立地在指定的坐标系进行布局。 注：当前没有任何“非系列组件”支持 `coordinateSystemUsage: 'data'`。
    
*   `'box'`：**（不适用于 [series-treemap](option.series-treemap.md)）**
    
    此系列或组件作为一个整体，在指定的坐标系中进行布局——即根据坐标系计算整体的包围盒或基础锚点。
    
    *   例如，[grid 组件](option.grid.md) 可以布局在 [matrix 坐标系](option.matrix.md) 或 [calendar 坐标系](option.calendar.md) 中，这时其布局矩形是由 [series-treemap.coords](option.series-treemap.md#coords) 在坐标系中计算出来的。参见示例：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1)。
    *   又如，[饼图系列](option.series-pie.md) 或 [和弦图系列](option.series-chord.md) 可以布局在 [geo 坐标系](option.geo.md) 或 [cartesian2d 坐标系](option.grid.md) 中，这时其中心点是由 [series-pie.coords](option.series-pie.md#coords) 或 [series-pie.center](option.series-pie.md#center) 在坐标系中计算出来的。参见示例：[地理坐标系中的饼图](https://echarts.apache.org/examples/zh/editor.html?c=map-iceland-pie&edit=1&reset=1)。

只有少数系列同时支持 `coordinateSystemUsage: 'data'` 和 `coordinateSystemUsage: 'box'`，如：[series-graph](option.series-graph.md)、[series-map](option.series-map.md)。例如，在 [例子 coordinateSystemUsage: 'data'](https://echarts.apache.org/examples/zh/editor.html?c=matrix-graph&edit=1&reset=1) 中，关系图每个节点分别布局在矩阵坐标系中，而在 [例子 coordinateSystemUsage: 'box'](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1) 中，关系图系列整体被布局在一个单元格中。

大多数系列仅支持 `coordinateSystemUsage: 'data'`，例如：[series-line](option.series-line.md)、[series-bar](option.series-bar.md)、[series-scatter](option.series-scatter.md)。

同时，一些系列仅支持 `coordinateSystemUsage: 'box'`，例如：[series-pie](option.series-pie.md)（示例：[地理坐标系中的饼图](https://echarts.apache.org/examples/zh/editor.html?c=map-iceland-pie&edit=1&reset=1)）、[series-tree](option.series-tree.md)、[series-treemap](option.series-treemap.md)、[series-sankey](option.series-sankey.md)。

另参考：[series-treemap.coordinateSystem](option.series-treemap.md#coordinateSystem)。

## coord
- **Type**: `Array|number|string`

从 `v6.0.0` 开始支持

当 [coordinateSystemUsage](option.series-treemap.md#coordinateSystemUsage) 为 `'box'` 时, `coord` 被输入给坐标系，计算得到布局位置（布局盒或者中心点）。

例子：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1), [矩阵中的关系图](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> 注：当 [coordinateSystemUsage](option.series-treemap.md#coordinateSystemUsage) 为 `'data'` 时，输入给坐标系的是 `series.data[i]` 而非此 `coord`。

`coord` 的具体格式定义，取决于每个坐标系，并且，和 [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel) 的第二个参数相同。

## calendarIndex
- **Type**: `number`
- **Default**: `0`

从 `v6.0.0` 开始支持

布局时所基于的 [日历坐标系](option.calendar.md) 的 index。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。

## calendarId
- **Type**: `number`
- **Default**: `undefined`

从 `v6.0.0` 开始支持

布局时所基于的 [日历坐标系](option.calendar.md) 的 id。当一个 ECharts 实例中存在多个日历坐标系时，用其指定所使用的坐标系。

## matrixIndex
- **Type**: `number`
- **Default**: `0`

从 `v6.0.0` 开始支持

布局时所基于的 [矩阵坐标系](option.matrix.md) 的 index。当一个 ECharts 实例中存在多个矩阵坐标系时，用其指定所使用的坐标系。

## matrixId
- **Type**: `number`
- **Default**: `undefined`

从 `v6.0.0` 开始支持

布局时所基于的 [矩阵坐标系](option.matrix.md) 的 id。当一个 ECharts 实例中存在多个矩阵坐标系时，用其指定所使用的坐标系。

## squareRatio
- **Type**: `number`

期望矩形长宽比率。布局计算时会尽量向这个比率靠近。

默认为黄金比：`0.5 * (1 + Math.sqrt(5))`。

## leafDepth
- **Type**: `number`

设置了 `leafDepth` 后，下钻（`drill down`）功能开启。`drill down` 功能即点击后才展示子层级。

`leafDepth` 表示『展示几层』，层次更深的节点则被隐藏起来。点击则可下钻看到层次更深的节点。

例如，`leafDepth` 设置为 `1`，表示展示一层节点。

默认没有开启 `drill down`（即 `leafDepth` 为 `null` 或 `undefined`）。

**drill down 的例子：**

## drillDownIcon
- **Type**: `string`
- **Default**: `'▶'`

当节点可以下钻时的提示符。只能是字符。

## roam
- **Type**: `boolean|string`
- **Default**: `true`

是否开启使用鼠标或触摸进行漫游（移动和缩放）。可取值有：

*   `false`：关闭。
*   `'scale'` 或 `'zoom'`：只能够缩放。
*   `'move'` 或 `'pan'`：只能够平移。
*   `true`：缩放和平移均可。

## scaleLimit
- **Type**: `Object`

从 `v5.5.1` 开始支持

[缩放](option.series-treemap.md#roam) 的极限控制，通过 `min` 和 `max` 限制最小和最大的缩放值。

值小于 `1` 时表示缩小，大于 `1` 时表示放大。

### scaleLimit.min
- **Type**: `number`

最小的缩放值

### scaleLimit.max
- **Type**: `number`

最大的缩放值

## nodeClick
- **Type**: `boolean|string`
- **Default**: `'zoomToNode'`

点击节点后的行为。可取值为：

*   `false`：节点点击无反应。
*   `'zoomToNode'`：点击节点后缩放到节点。
*   `'link'`：如果节点数据中有 [link](option.series-treemap.md#data.link) 点击节点后会进行超链接跳转。

## zoomToNodeRatio
- **Type**: `number`
- **Default**: `0.32*0.32`

点击某个节点，会自动放大那个节点到合适的比例（节点占可视区域的面积比例），这个配置项就是这个比例。

## visualDimension
- **Type**: `number`
- **Default**: `0`

`treemap` 中支持对数据其他维度进行视觉映射。

首先，treemap的数据格式（参见 [series-treemap.data](option.series-treemap.md#data)）中，每个节点的 `value` 都可以是数组。数组每项是一个『维度』（dimension）。`visualDimension` 指定了额外的『视觉映射』使用的是数组的哪一项。默认为第 `0` 项。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `visualDimension` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

## visualMin
- **Type**: `number`

当前层级的最小 value 值。如果不设置则自动统计。

手动指定 `visualMin`、`visualMax` ，即手动控制了 visual mapping 的值域（当 [colorMappingBy](option.series-treemap.md#levels.colorMappingBy) 为 `'value'` 时有意义）。

## visualMax
- **Type**: `number`

当前层级的最大 value 值。如果不设置则自动统计。

手动指定 `visualMin`、`visualMax` ，即手动控制了 visual mapping 的值域（当 [colorMappingBy](option.series-treemap.md#levels.colorMappingBy) 为 `'value'` 时有意义）。

## colorAlpha
- **Type**: `Array`

本系列默认的颜色透明度选取范围。

数值范围 0 ~ 1

例如, `colorAlpha` 可以是 `[0.3, 1]`.

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorAlpha` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

## colorSaturation
- **Type**: `number`

本系列默认的节点的颜色饱和度 选取范围。

数值范围 0 ~ 1。

例如, `colorSaturation` 可以是 `[0.3, 1]`.

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorSaturation` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

## colorMappingBy
- **Type**: `string`
- **Default**: `'index'`

表示同一层级节点，在颜色列表中（参见 `color` 属性）选择时，按照什么来选择。可选值：

*   `'value'`：

将节点的值（即 [series-treemap.data.value](option.series-treemap.md#data.value)）映射到颜色列表中。

这样得到的颜色，反应了节点值的大小。

可以使用 [visualDimension](option.series-treemap.md#levels.visualDimension) 属性来设置，用 [data](option.series-treemap.md#data) 中哪个纬度的值来映射。

*   `'index'`：

将节点的 `index`（序号）映射到颜色列表中。即同一层级中，第一个节点取颜色列表中第一个颜色，第二个节点取第二个。

这样得到的颜色，便于区分相邻节点。

*   `'id'`：

将节点的 `id`（即 [series-treemap.data.id](option.series-treemap.md#data.id)）映射到颜色列表中。`id` 是用户指定的，这样能够使得，在treemap 通过 setOption 变化数值时，同一 `id` 映射到同一颜色，保持一致性。参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=treemap-obama&edit=1&reset=1)。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorMappingBy` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

## visibleMin
- **Type**: `number`
- **Default**: `10`

如果某个节点的矩形的面积，小于这个数值（单位：px平方），这个节点就不显示。

如果不加这个限制，很小的节点会影响显示效果。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `visibleMin` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

## childrenVisibleMin
- **Type**: `number`

如果某个节点的矩形面积，小于这个数值（单位：px平方），则不显示这个节点的子节点。

这能够在矩形面积不足够大时候，隐藏节点的细节。当用户用鼠标缩放节点时，如果面积大于此阈值，又会显示子节点。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `childrenVisibleMin` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

## label
- **Type**: `Object`

`label` 描述了每个矩形中，文本标签的样式。

> 注：treemap中 `label` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

### label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

### label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

### label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

### label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

### label.textMargin
- **Type**: `number|Array`

从 `v6.0.0` 开始支持

标签周围的间距，用于避免标签重叠。单位为像素（px）。

注意：`textMargin` 是作用在标签的本地包围盒上的，也就是说，如果标签设置了旋转（`rotate`），先在未旋转的标签上应用 `textMargin`，再进行旋转。

> 名字是 `textMargin`，因历史原因 `margin` 已被它用。

示例：

```
// 设置所有方向的间距为 5，等价于 [5, 5, 5, 5]
textMargin: 5
// 设置上下间距为 5，左右间距为 10
textMargin: [5, 10]
// 分别设置四个方向的间距
textMargin: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

### label.minMargin
- **Type**: `number`

从 `v5.0.0` 开始支持

用于控制标签之间的最小距离，当启用 [labelLayout](../option.md#series.labelLayout) 时可能会用到。

`minMargin` 和 `textMargin` 含义相似，但有细微区别。如果不确定，可使用 `textMargin`，因为它基本包含了 `minMargin` 的能力，并且在某些旋转标签的场景下可以提供更紧凑的布局。

> 区别如下：
> 
> *   两个标签之间的最小间隔（如适用）为 `label1.minMargin/2 + label2.minMargin/2`，或 `label1.textMargin[number] + label2.textMargin[number]`。
> *   如果标签设置了 `rotate`：
>     *   `minMargin`：先旋转标签，取四个角的 x/y 的 min/max 得到新的矩形（即扩展后的包围盒），最后在新矩形上应用 `minMargin`。
>     *   `textMargin`：先在标签的包围盒上应用 `textMargin`，再进行旋转。
> *   数据类型：`minMargin` 只能为 `number`，`textMargin` 可以为 `number | number[]`（类似 CSS margin）。

### label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

### label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

### label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

### label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

### label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

### label.lineHeight
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

### label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

### label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

### label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

### label.padding
- **Type**: `number|Array`
- **Default**: `5`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

### label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

### label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

### label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

### label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

### label.width
- **Type**: `number`

文本显示宽度。

### label.height
- **Type**: `number`

文本显示高度。

### label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

### label.textBorderType
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

### label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

### label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

### label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

### label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

### label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

### label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

### label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

##### label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### label.rich.<style_name>.lineHeight
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

##### label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

##### label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

##### label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### label.rich.<style_name>.textBorderType
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

##### label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

### label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

## upperLabel
- **Type**: `Object`

`upperLabel` 用于显示矩形的父节点的标签。当 [upperLabel.show](option.series-treemap.md#upperLabel.show) 为 `true` 的时候，『显示父节点标签』功能开启。

同 [series-treemap.label](option.series-treemap.md#label) 一样，`upperLabel` 可以存在于 [series-treemap](option.series-treemap.md) 的根节点，或者 [series-treemap.level](option.series-treemap.md#level) 中，或者 [series-treemap.data](option.series-treemap.md#data) 的每个数据项中。

[series-treemap.label](option.series-treemap.md#label) 描述的是，当前节点为叶节点时标签的样式；`upperLabel` 描述的是，当前节点为非叶节点（即含有子节点）时标签的样式。（此时标签一般会被显示在节点的最上部）

参见：

> 注：treemap中 `label` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

### upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

### upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

### upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

### upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

### upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

### upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

### upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

### upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

### upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

### upperLabel.lineHeight
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

### upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

### upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

### upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

### upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

### upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

### upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

### upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

### upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

### upperLabel.width
- **Type**: `number`

文本显示宽度。

### upperLabel.height
- **Type**: `number`
- **Default**: `20`

父节点标签区的高度。

### upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

### upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

### upperLabel.textBorderType
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

### upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

### upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

### upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

### upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

### upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

### upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

### upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

##### upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### upperLabel.rich.<style_name>.lineHeight
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

##### upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

##### upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

##### upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### upperLabel.rich.<style_name>.textBorderType
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

##### upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

### upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

## itemStyle
- **Type**: `Object`

> 注：treemap中 `itemStyle` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

### itemStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

矩形圆角。

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

矩形边框线宽。为 0 时无边框。而矩形的内部子矩形（子节点）的间隔距离是由 [gapWidth](option.series-treemap.md#levels.gapWidth) 指定的。

### itemStyle.gapWidth
- **Type**: `number`
- **Default**: `0`

矩形内部子矩形（子节点）的间隔距离。

![](../../documents/asset/img/treemap-border-gap.png)

### itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#fff',`

矩形边框 和 矩形间隔（gap）的颜色。

### itemStyle.borderColorSaturation
- **Type**: `Color`

矩形边框的颜色的饱和度。取值范围是 0 ~ 1 之间的浮点数。

注意：

如果设置此属性，则 `borderColor` 的设置无效，而是：取当前节点计算出的颜色（比如从父节点遗传而来），在此颜色值上设置 `borderColorSaturation` 得到最终颜色。这种方式，能够做出『不同区块有不同色调的矩形间隔线』的效果，能够便于区分层级。

**矩形边框（border）/缝隙（gap）设置如何避免混淆**

如果统一用一种颜色设置矩形的缝隙（gap），那么当不同层级的矩形同时展示时可能会出现混淆。

参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)，注意其中红色的区块中的子矩形其实是更深层级，和其他用白色缝隙区分的矩形不是在一个层级。所以，红色区块中矩形的分割线的颜色，我们在 `borderColorSaturation` 中设置为『加了饱和度变化的红颜色』，以示区别。

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

## emphasis
- **Type**: `Object`

高亮状态配置。

### emphasis.disabled
- **Type**: `boolean`
- **Default**: `false`

从 `v5.3.0` 开始支持

是否关闭高亮状态。

关闭高亮状态可以在鼠标移到图形上，tooltip 触发，或者图例联动的时候不再触发高亮效果。在图形非常多的时候可以关闭以提升交互流畅性。

### emphasis.focus
- **Type**: `string`
- **Default**: `'none'`

从 `v5.0.0` 开始支持

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

*   `'none'` 不淡出其它图形，默认使用该配置。
*   `'self'` 只聚焦（不淡出）当前高亮的数据的图形。

*   `'series'` 聚焦当前高亮的数据所在的系列的所有图形。

*   `'ancestor'` 聚焦所有祖先节点。
*   `'descendant'` 聚焦所有子孙节点。

**示例：**

下面代码配置了柱状图在高亮一个图形的时候，淡出当前直角坐标系所有其它的系列。

```
emphasis: {
    focus: 'series',
    blurScope: 'coordinateSystem'
}
```

### emphasis.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

从 `v5.0.0` 开始支持

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

*   `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
*   `'series'` 淡出范围为系列。
*   `'global'` 淡出范围为全局。

#### emphasis.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### emphasis.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### emphasis.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### emphasis.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### emphasis.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### emphasis.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### emphasis.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### emphasis.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### emphasis.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### emphasis.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### emphasis.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### emphasis.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### emphasis.label.lineHeight
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

#### emphasis.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### emphasis.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### emphasis.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### emphasis.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### emphasis.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### emphasis.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### emphasis.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### emphasis.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### emphasis.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### emphasis.label.width
- **Type**: `number`

文本显示宽度。

#### emphasis.label.height
- **Type**: `number`

文本显示高度。

#### emphasis.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### emphasis.label.textBorderType
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

#### emphasis.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### emphasis.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### emphasis.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### emphasis.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### emphasis.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### emphasis.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### emphasis.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### emphasis.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### emphasis.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### emphasis.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### emphasis.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### emphasis.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### emphasis.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### emphasis.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### emphasis.label.rich.<style_name>.lineHeight
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

###### emphasis.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### emphasis.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### emphasis.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### emphasis.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### emphasis.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### emphasis.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### emphasis.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### emphasis.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### emphasis.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### emphasis.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### emphasis.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### emphasis.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### emphasis.label.rich.<style_name>.textBorderType
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

###### emphasis.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### emphasis.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### emphasis.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### emphasis.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### emphasis.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### emphasis.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### emphasis.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

#### emphasis.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

##### emphasis.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

##### emphasis.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

##### emphasis.labelLine.lineStyle.type
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

##### emphasis.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### emphasis.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### emphasis.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### emphasis.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### emphasis.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### emphasis.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### emphasis.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### emphasis.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### emphasis.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

#### emphasis.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### emphasis.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### emphasis.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### emphasis.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### emphasis.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### emphasis.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### emphasis.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### emphasis.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### emphasis.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### emphasis.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### emphasis.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### emphasis.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### emphasis.upperLabel.lineHeight
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

#### emphasis.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### emphasis.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### emphasis.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### emphasis.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### emphasis.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### emphasis.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### emphasis.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### emphasis.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### emphasis.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### emphasis.upperLabel.width
- **Type**: `number`

文本显示宽度。

#### emphasis.upperLabel.height
- **Type**: `number`

文本显示高度。

#### emphasis.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### emphasis.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### emphasis.upperLabel.textBorderType
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

#### emphasis.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### emphasis.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### emphasis.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### emphasis.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### emphasis.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### emphasis.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### emphasis.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### emphasis.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### emphasis.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### emphasis.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### emphasis.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### emphasis.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### emphasis.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### emphasis.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### emphasis.upperLabel.rich.<style_name>.lineHeight
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

###### emphasis.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### emphasis.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### emphasis.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### emphasis.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### emphasis.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### emphasis.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### emphasis.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### emphasis.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### emphasis.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### emphasis.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### emphasis.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### emphasis.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### emphasis.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### emphasis.upperLabel.rich.<style_name>.textBorderType
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

###### emphasis.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### emphasis.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### emphasis.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### emphasis.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### emphasis.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### emphasis.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### emphasis.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

## blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

淡出状态配置。

#### blur.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### blur.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### blur.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### blur.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### blur.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### blur.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### blur.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### blur.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### blur.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### blur.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### blur.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### blur.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### blur.label.lineHeight
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

#### blur.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### blur.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### blur.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### blur.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### blur.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### blur.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### blur.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### blur.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### blur.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### blur.label.width
- **Type**: `number`

文本显示宽度。

#### blur.label.height
- **Type**: `number`

文本显示高度。

#### blur.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### blur.label.textBorderType
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

#### blur.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### blur.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### blur.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### blur.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### blur.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### blur.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### blur.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### blur.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### blur.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### blur.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### blur.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### blur.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### blur.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### blur.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### blur.label.rich.<style_name>.lineHeight
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

###### blur.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### blur.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### blur.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### blur.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### blur.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### blur.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### blur.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### blur.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### blur.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### blur.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### blur.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### blur.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### blur.label.rich.<style_name>.textBorderType
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

###### blur.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### blur.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### blur.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### blur.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### blur.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### blur.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### blur.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

#### blur.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

##### blur.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

##### blur.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

##### blur.labelLine.lineStyle.type
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

##### blur.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### blur.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### blur.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### blur.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### blur.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### blur.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### blur.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### blur.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### blur.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

#### blur.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### blur.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### blur.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### blur.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### blur.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### blur.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### blur.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### blur.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### blur.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### blur.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### blur.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### blur.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### blur.upperLabel.lineHeight
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

#### blur.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### blur.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### blur.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### blur.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### blur.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### blur.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### blur.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### blur.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### blur.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### blur.upperLabel.width
- **Type**: `number`

文本显示宽度。

#### blur.upperLabel.height
- **Type**: `number`

文本显示高度。

#### blur.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### blur.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### blur.upperLabel.textBorderType
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

#### blur.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### blur.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### blur.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### blur.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### blur.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### blur.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### blur.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### blur.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### blur.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### blur.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### blur.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### blur.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### blur.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### blur.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### blur.upperLabel.rich.<style_name>.lineHeight
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

###### blur.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### blur.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### blur.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### blur.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### blur.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### blur.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### blur.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### blur.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### blur.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### blur.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### blur.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### blur.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### blur.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### blur.upperLabel.rich.<style_name>.textBorderType
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

###### blur.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### blur.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### blur.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### blur.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### blur.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### blur.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### blur.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

## select
- **Type**: `Object`

从 `v5.0.0` 开始支持

选中状态配置。

### select.disabled
- **Type**: `boolean`
- **Default**: `false`

从 `v5.3.0` 开始支持

是否可以被选中。在开启 `selectedMode` 的时候有效，可以用于关闭部分数据。

#### select.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### select.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### select.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### select.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### select.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### select.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### select.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### select.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### select.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### select.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### select.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### select.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### select.label.lineHeight
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

#### select.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### select.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### select.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### select.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### select.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### select.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### select.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### select.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### select.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### select.label.width
- **Type**: `number`

文本显示宽度。

#### select.label.height
- **Type**: `number`

文本显示高度。

#### select.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### select.label.textBorderType
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

#### select.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### select.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### select.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### select.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### select.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### select.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### select.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### select.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### select.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### select.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### select.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### select.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### select.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### select.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### select.label.rich.<style_name>.lineHeight
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

###### select.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### select.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### select.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### select.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### select.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### select.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### select.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### select.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### select.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### select.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### select.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### select.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### select.label.rich.<style_name>.textBorderType
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

###### select.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### select.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### select.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### select.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### select.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### select.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### select.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

#### select.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

##### select.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

##### select.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

##### select.labelLine.lineStyle.type
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

##### select.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### select.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### select.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### select.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### select.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### select.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### select.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### select.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### select.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

#### select.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### select.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### select.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### select.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### select.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### select.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### select.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### select.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### select.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### select.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### select.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### select.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### select.upperLabel.lineHeight
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

#### select.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### select.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### select.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### select.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### select.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### select.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### select.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### select.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### select.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### select.upperLabel.width
- **Type**: `number`

文本显示宽度。

#### select.upperLabel.height
- **Type**: `number`

文本显示高度。

#### select.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### select.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### select.upperLabel.textBorderType
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

#### select.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### select.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### select.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### select.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### select.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### select.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### select.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### select.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### select.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### select.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### select.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### select.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### select.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### select.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### select.upperLabel.rich.<style_name>.lineHeight
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

###### select.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### select.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### select.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### select.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### select.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### select.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### select.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### select.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### select.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### select.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### select.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### select.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### select.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### select.upperLabel.rich.<style_name>.textBorderType
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

###### select.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### select.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### select.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### select.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### select.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### select.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### select.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

## selectedMode
- **Type**: `boolean|string`
- **Default**: `false`

从 `v5.0.0` 开始支持

选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选`'single'`，`'multiple'`，`'series'` 分别表示单选，多选以及选择整个系列。

> 从 v5.3.0 开始支持 `'series'`。

## breadcrumb
- **Type**: `Object`

面包屑，能够显示当前节点的路径。

### breadcrumb.show
- **Type**: `boolean`
- **Default**: `true`

是否显示面包屑。

### breadcrumb.left
- **Type**: `string|number`
- **Default**: `'center'`

面包屑（breadcrumb）离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

### breadcrumb.top
- **Type**: `string|number`
- **Default**: `'bottom'`

面包屑（breadcrumb）离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

### breadcrumb.right
- **Type**: `string|number`
- **Default**: `'auto'`

面包屑（breadcrumb）离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

默认自适应。

### breadcrumb.bottom
- **Type**: `string|number`
- **Default**: `'auto'`

面包屑（breadcrumb）离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

默认自适应。

### breadcrumb.height
- **Type**: `number`
- **Default**: `22`

面包屑的高度。

### breadcrumb.emptyItemWidth
- **Type**: `number`
- **Default**: `25`

当面包屑没有内容时候，设个最小宽度。

### breadcrumb.itemStyle
- **Type**: `Object`

图形样式。

#### breadcrumb.itemStyle.color
- **Type**: `Color`
- **Default**: `rgba(0,0,0,0.7)`

面包屑图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### breadcrumb.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `''`

面包屑图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#### breadcrumb.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

面包屑描边线宽。为 0 时无描边。

#### breadcrumb.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

面包屑描边类型。

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

#### breadcrumb.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### breadcrumb.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### breadcrumb.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### breadcrumb.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### breadcrumb.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### breadcrumb.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### breadcrumb.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### breadcrumb.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### breadcrumb.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### breadcrumb.itemStyle.textStyle.color
- **Type**: `Color`
- **Default**: `#fff`

文字的颜色。

##### breadcrumb.itemStyle.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### breadcrumb.itemStyle.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### breadcrumb.itemStyle.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### breadcrumb.itemStyle.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### breadcrumb.itemStyle.textStyle.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### breadcrumb.itemStyle.textStyle.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### breadcrumb.itemStyle.textStyle.lineHeight
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

##### breadcrumb.itemStyle.textStyle.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

##### breadcrumb.itemStyle.textStyle.borderColor
- **Type**: `Color`

文字块边框颜色。

##### breadcrumb.itemStyle.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### breadcrumb.itemStyle.textStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### breadcrumb.itemStyle.textStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### breadcrumb.itemStyle.textStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### breadcrumb.itemStyle.textStyle.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### breadcrumb.itemStyle.textStyle.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### breadcrumb.itemStyle.textStyle.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### breadcrumb.itemStyle.textStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### breadcrumb.itemStyle.textStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### breadcrumb.itemStyle.textStyle.width
- **Type**: `number`

文本显示宽度。

##### breadcrumb.itemStyle.textStyle.height
- **Type**: `number`

文本显示高度。

##### breadcrumb.itemStyle.textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

##### breadcrumb.itemStyle.textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### breadcrumb.itemStyle.textStyle.textBorderType
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

##### breadcrumb.itemStyle.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### breadcrumb.itemStyle.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### breadcrumb.itemStyle.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### breadcrumb.itemStyle.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### breadcrumb.itemStyle.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### breadcrumb.itemStyle.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### breadcrumb.itemStyle.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### breadcrumb.itemStyle.textStyle.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.lineHeight
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

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textBorderType
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

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### breadcrumb.itemStyle.textStyle.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### breadcrumb.itemStyle.textStyle.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### breadcrumb.emphasis
- **Type**: `Object`

从 `v5.4.0` 开始支持

##### breadcrumb.emphasis.itemStyle.color
- **Type**: `Color`
- **Default**: `rgba(0,0,0,0.9)`

面包屑图形的颜色。从 v5.2.0 开始支持在 `emphasis` 状态中支持设置为 `'inherit'` 取消高亮颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

##### breadcrumb.emphasis.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `''`

面包屑图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

##### breadcrumb.emphasis.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

面包屑描边线宽。为 0 时无描边。

##### breadcrumb.emphasis.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

面包屑描边类型。

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

##### breadcrumb.emphasis.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### breadcrumb.emphasis.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### breadcrumb.emphasis.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### breadcrumb.emphasis.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### breadcrumb.emphasis.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### breadcrumb.emphasis.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### breadcrumb.emphasis.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### breadcrumb.emphasis.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### breadcrumb.emphasis.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

###### breadcrumb.emphasis.itemStyle.textStyle.color
- **Type**: `Color`
- **Default**: `#fff`

文字的颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### breadcrumb.emphasis.itemStyle.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### breadcrumb.emphasis.itemStyle.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### breadcrumb.emphasis.itemStyle.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### breadcrumb.emphasis.itemStyle.textStyle.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### breadcrumb.emphasis.itemStyle.textStyle.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### breadcrumb.emphasis.itemStyle.textStyle.lineHeight
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

###### breadcrumb.emphasis.itemStyle.textStyle.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

###### breadcrumb.emphasis.itemStyle.textStyle.borderColor
- **Type**: `Color`

文字块边框颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### breadcrumb.emphasis.itemStyle.textStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### breadcrumb.emphasis.itemStyle.textStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### breadcrumb.emphasis.itemStyle.textStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### breadcrumb.emphasis.itemStyle.textStyle.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### breadcrumb.emphasis.itemStyle.textStyle.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### breadcrumb.emphasis.itemStyle.textStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.width
- **Type**: `number`

文本显示宽度。

###### breadcrumb.emphasis.itemStyle.textStyle.height
- **Type**: `number`

文本显示高度。

###### breadcrumb.emphasis.itemStyle.textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### breadcrumb.emphasis.itemStyle.textStyle.textBorderType
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

###### breadcrumb.emphasis.itemStyle.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### breadcrumb.emphasis.itemStyle.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### breadcrumb.emphasis.itemStyle.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

###### breadcrumb.emphasis.itemStyle.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

###### breadcrumb.emphasis.itemStyle.textStyle.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.lineHeight
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

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textBorderType
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

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

###### breadcrumb.emphasis.itemStyle.textStyle.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

## levels
- **Type**: `Array`

**多层配置**

treemap 中采用『三级配置』：

```
『每个节点』->『每个层级』->『每个系列』。
```

即我们可以对每个节点进行配置，也可以对树的每个层级进行配置，也可以 series 上设置全局配置。节点上的设置，优先级最高。

最常用的是『每个层级进行配置』，`levels` 配置项就是每个层级的配置。例如：

```
// Notice that in fact the data structure is not "tree", but is "forest".
// 注意，这个数据结构实际不是『树』而是『森林』
data: [
    {
        name: 'nodeA',
        children: [
            {name: 'nodeAA'},
            {name: 'nodeAB'},
        ]
    },
    {
        name: 'nodeB',
        children: [
            {name: 'nodeBA'}
        ]
    }
],
levels: [
    {...}, // 『森林』的顶层配置。即含有 'nodeA', 'nodeB' 的这层。
    {...}, // 下一层配置，即含有 'nodeAA', 'nodeAB', 'nodeBA' 的这层。
    {...}, // 再下一层配置。
    ...
]
```

**视觉映射的规则**

treemap中首要关注的是如何在视觉上较好得区分『不同层级』、『同层级中不同类别』。这需要合理得设置不同层级的『矩形颜色』、『边界粗细』、『边界颜色』甚至『矩形颜色饱和度』等。

参见这个[例子](https://echarts.apache.org/examples/zh/editor.html?c=treemap-disk&edit=1&reset=1)，最顶层级用颜色区分，分成了『红』『绿』『蓝』等大块。每个颜色块中是下一个层级，使用颜色的饱和度来区分（参见 `colorSaturation`）。最外层的矩形边界是『白色』，下层级的矩形边界是当前区块颜色加上饱和度处理（参见 `borderColorSaturation`）。

`treemap` 是通过这样的规则来支持这种配置的：每个层级计算用户配置的 `color`、`colorSaturation`、`borderColor`、`borderColorSaturation`等视觉信息（在levels中配置）。如果子节点没有配置，则继承父的配置，否则使用自己的配置）。

这样，可以做到：父层级配置 `color` 列表，子层级配置 `colorSaturation`。父层级的每个节点会从 `color` 列表中得到一个颜色，子层级的节点会从 `colorSaturation` 中得到一个值，并且继承父节点得到的颜色，合成得到自己的最终颜色。

**维度与『额外的视觉映射』**

例子：每一个 `value` 字段是一个 Array，其中每个项对应一个维度（dimension）。

```
[
    {
        value: [434, 6969, 8382],
        children: [
            {
                value: [1212, 4943, 5453],
                id: 'someid-1',
                name: 'description of this node',
                children: [...]
            },
            {
                value: [4545, 192, 439],
                id: 'someid-2',
                name: 'description of this node',
                children: [...]
            },
            ...
        ]
    },
    {
        value: [23, 59, 12],
        children: [...]
    },
    ...
]
```

treemap 默认把第一个维度（Array 第一项）映射到『面积』上。而如果想表达更多信息，用户可以把其他的某一个维度（[series-treemap.visualDimension](option.series-treemap.md#viusalDimension)），映射到其他的『视觉元素』上，比如颜色明暗等。参见[例子](https://echarts.apache.org/examples/zh/editor.html?c=treemap-obama&edit=1&reset=1)中，legend选择 `Growth`时的状态。

**矩形边框（border）/缝隙（gap）设置如何避免混淆**

如果统一用一种颜色设置矩形的缝隙（gap），那么当不同层级的矩形同时展示时可能会出现混淆。

参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)，注意其中红色的区块中的子矩形其实是更深层级，和其他用白色缝隙区分的矩形不是在一个层级。所以，红色区块中矩形的分割线的颜色，我们在 `borderColorSaturation` 中设置为『加了饱和度变化的红颜色』，以示区别。

**borderWidth, gapWidth, borderColor 的解释**

![](../../documents/asset/img/treemap-border-gap.png)

### levels.visualDimension
- **Type**: `number`
- **Default**: `0`

`treemap` 中支持对数据其他维度进行视觉映射。

首先，treemap的数据格式（参见 [series-treemap.data](option.series-treemap.md#data)）中，每个节点的 `value` 都可以是数组。数组每项是一个『维度』（dimension）。`visualDimension` 指定了额外的『视觉映射』使用的是数组的哪一项。默认为第 `0` 项。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `visualDimension` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.visualMin
- **Type**: `number`

当前层级的最小 value 值。如果不设置则自动统计。

手动指定 `visualMin`、`visualMax` ，即手动控制了 visual mapping 的值域（当 [colorMappingBy](option.series-treemap.md#levels.colorMappingBy) 为 `'value'` 时有意义）。

### levels.visualMax
- **Type**: `number`

当前层级的最大 value 值。如果不设置则自动统计。

手动指定 `visualMin`、`visualMax` ，即手动控制了 visual mapping 的值域（当 [colorMappingBy](option.series-treemap.md#levels.colorMappingBy) 为 `'value'` 时有意义）。

### levels.color
- **Type**: `Array`

表示同一层级的节点的 颜色 选取列表（选择规则见 [colorMappingBy](option.series-treemap.md#colorMappingBy)）。默认为空时，选取系统color列表。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `color` 属性可能在多处地方存在：

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.colorAlpha
- **Type**: `Array`

表示同一层级的节点的颜色透明度选取范围。

数值范围 0 ~ 1

例如, `colorAlpha` 可以是 `[0.3, 1]`.

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorAlpha` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.colorSaturation
- **Type**: `number`

表示同一层级的节点的颜色饱和度 选取范围。

数值范围 0 ~ 1。

例如, `colorSaturation` 可以是 `[0.3, 1]`.

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorSaturation` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.colorMappingBy
- **Type**: `string`
- **Default**: `'index'`

表示同一层级节点，在颜色列表中（参见 `color` 属性）选择时，按照什么来选择。可选值：

*   `'value'`：

将节点的值（即 [series-treemap.data.value](option.series-treemap.md#data.value)）映射到颜色列表中。

这样得到的颜色，反应了节点值的大小。

可以使用 [visualDimension](option.series-treemap.md#levels.visualDimension) 属性来设置，用 [data](option.series-treemap.md#data) 中哪个纬度的值来映射。

*   `'index'`：

将节点的 `index`（序号）映射到颜色列表中。即同一层级中，第一个节点取颜色列表中第一个颜色，第二个节点取第二个。

这样得到的颜色，便于区分相邻节点。

*   `'id'`：

将节点的 `id`（即 [series-treemap.data.id](option.series-treemap.md#data.id)）映射到颜色列表中。`id` 是用户指定的，这样能够使得，在treemap 通过 setOption 变化数值时，同一 `id` 映射到同一颜色，保持一致性。参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=treemap-obama&edit=1&reset=1)。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorMappingBy` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.visibleMin
- **Type**: `number`
- **Default**: `10`

如果某个节点的矩形的面积，小于这个数值（单位：px平方），这个节点就不显示。

如果不加这个限制，很小的节点会影响显示效果。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `visibleMin` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.childrenVisibleMin
- **Type**: `number`

如果某个节点的矩形面积，小于这个数值（单位：px平方），则不显示这个节点的子节点。

这能够在矩形面积不足够大时候，隐藏节点的细节。当用户用鼠标缩放节点时，如果面积大于此阈值，又会显示子节点。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `childrenVisibleMin` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### levels.label
- **Type**: `Object`

`label` 描述了每个矩形中，文本标签的样式。

> 注：treemap中 `label` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

#### levels.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### levels.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### levels.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### levels.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### levels.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### levels.label.textMargin
- **Type**: `number|Array`

从 `v6.0.0` 开始支持

标签周围的间距，用于避免标签重叠。单位为像素（px）。

注意：`textMargin` 是作用在标签的本地包围盒上的，也就是说，如果标签设置了旋转（`rotate`），先在未旋转的标签上应用 `textMargin`，再进行旋转。

> 名字是 `textMargin`，因历史原因 `margin` 已被它用。

示例：

```
// 设置所有方向的间距为 5，等价于 [5, 5, 5, 5]
textMargin: 5
// 设置上下间距为 5，左右间距为 10
textMargin: [5, 10]
// 分别设置四个方向的间距
textMargin: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

#### levels.label.minMargin
- **Type**: `number`

从 `v5.0.0` 开始支持

用于控制标签之间的最小距离，当启用 [labelLayout](../option.md#series.labelLayout) 时可能会用到。

`minMargin` 和 `textMargin` 含义相似，但有细微区别。如果不确定，可使用 `textMargin`，因为它基本包含了 `minMargin` 的能力，并且在某些旋转标签的场景下可以提供更紧凑的布局。

> 区别如下：
> 
> *   两个标签之间的最小间隔（如适用）为 `label1.minMargin/2 + label2.minMargin/2`，或 `label1.textMargin[number] + label2.textMargin[number]`。
> *   如果标签设置了 `rotate`：
>     *   `minMargin`：先旋转标签，取四个角的 x/y 的 min/max 得到新的矩形（即扩展后的包围盒），最后在新矩形上应用 `minMargin`。
>     *   `textMargin`：先在标签的包围盒上应用 `textMargin`，再进行旋转。
> *   数据类型：`minMargin` 只能为 `number`，`textMargin` 可以为 `number | number[]`（类似 CSS margin）。

#### levels.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### levels.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### levels.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### levels.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### levels.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### levels.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### levels.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### levels.label.lineHeight
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

#### levels.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### levels.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### levels.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### levels.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### levels.label.padding
- **Type**: `number|Array`
- **Default**: `5`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### levels.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### levels.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### levels.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### levels.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### levels.label.width
- **Type**: `number`

文本显示宽度。

#### levels.label.height
- **Type**: `number`

文本显示高度。

#### levels.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### levels.label.textBorderType
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

#### levels.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### levels.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### levels.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### levels.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### levels.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### levels.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### levels.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### levels.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.label.rich.<style_name>.lineHeight
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

###### levels.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.label.rich.<style_name>.textBorderType
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

###### levels.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### levels.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### levels.upperLabel
- **Type**: `Object`

`upperLabel` 用于显示矩形的父节点的标签。当 [upperLabel.show](option.series-treemap.md#upperLabel.show) 为 `true` 的时候，『显示父节点标签』功能开启。

同 [series-treemap.label](option.series-treemap.md#label) 一样，`upperLabel` 可以存在于 [series-treemap](option.series-treemap.md) 的根节点，或者 [series-treemap.level](option.series-treemap.md#level) 中，或者 [series-treemap.data](option.series-treemap.md#data) 的每个数据项中。

[series-treemap.label](option.series-treemap.md#label) 描述的是，当前节点为叶节点时标签的样式；`upperLabel` 描述的是，当前节点为非叶节点（即含有子节点）时标签的样式。（此时标签一般会被显示在节点的最上部）

参见：

> 注：treemap中 `label` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

#### levels.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### levels.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### levels.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### levels.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### levels.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### levels.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### levels.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### levels.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### levels.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### levels.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### levels.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### levels.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### levels.upperLabel.lineHeight
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

#### levels.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### levels.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### levels.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### levels.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### levels.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### levels.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### levels.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### levels.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### levels.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### levels.upperLabel.width
- **Type**: `number`

文本显示宽度。

#### levels.upperLabel.height
- **Type**: `number`
- **Default**: `20`

父节点标签区的高度。

#### levels.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### levels.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### levels.upperLabel.textBorderType
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

#### levels.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### levels.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### levels.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### levels.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### levels.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### levels.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### levels.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### levels.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.upperLabel.rich.<style_name>.lineHeight
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

###### levels.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.upperLabel.rich.<style_name>.textBorderType
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

###### levels.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### levels.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### levels.itemStyle
- **Type**: `Object`

> 注：treemap中 `itemStyle` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

#### levels.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

#### levels.itemStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

矩形圆角。

#### levels.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

矩形边框线宽。为 0 时无边框。而矩形的内部子矩形（子节点）的间隔距离是由 [gapWidth](option.series-treemap.md#levels.gapWidth) 指定的。

#### levels.itemStyle.gapWidth
- **Type**: `number`
- **Default**: `0`

矩形内部子矩形（子节点）的间隔距离。

![](../../documents/asset/img/treemap-border-gap.png)

#### levels.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#fff',`

矩形边框 和 矩形间隔（gap）的颜色。

#### levels.itemStyle.borderColorSaturation
- **Type**: `Color`

矩形边框的颜色的饱和度。取值范围是 0 ~ 1 之间的浮点数。

注意：

如果设置此属性，则 `borderColor` 的设置无效，而是：取当前节点计算出的颜色（比如从父节点遗传而来），在此颜色值上设置 `borderColorSaturation` 得到最终颜色。这种方式，能够做出『不同区块有不同色调的矩形间隔线』的效果，能够便于区分层级。

**矩形边框（border）/缝隙（gap）设置如何避免混淆**

如果统一用一种颜色设置矩形的缝隙（gap），那么当不同层级的矩形同时展示时可能会出现混淆。

参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)，注意其中红色的区块中的子矩形其实是更深层级，和其他用白色缝隙区分的矩形不是在一个层级。所以，红色区块中矩形的分割线的颜色，我们在 `borderColorSaturation` 中设置为『加了饱和度变化的红颜色』，以示区别。

#### levels.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### levels.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### levels.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### levels.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### levels.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

#### levels.itemStyle.decal
- **Type**: `Object`

图形的贴花图案，在 [aria.enabled](option.aria.md#enabled) 与 [aria.decal.show](option.aria.md#decal.show) 都是 `true` 的情况下才生效。

如果为 `'none'` 表示不使用贴花图案。

##### levels.itemStyle.decal.symbol
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

##### levels.itemStyle.decal.symbolSize
- **Type**: `number`
- **Default**: `1`

取值范围：`0` 到 `1`，表示占图案区域的百分比。

##### levels.itemStyle.decal.symbolKeepAspect
- **Type**: `boolean`
- **Default**: `true`

是否保持图案的长宽比。

##### levels.itemStyle.decal.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.2)'`

贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。

##### levels.itemStyle.decal.backgroundColor
- **Type**: `string`

贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。

##### levels.itemStyle.decal.dashArrayX
- **Type**: `number|Array`
- **Default**: `5`

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayX` 控制了横向的图案模式。当其值为 `number` 或 `number[]` 类型时，与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

*   如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的图案……
    
*   如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……
    
*   如果是 `(number | number[])[]` 类型，表示每行的图案和空白依次为数组值的循环。如：`[10, [2, 5]]` 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……
    

可以结合以下的例子理解本接口：

##### levels.itemStyle.decal.dashArrayY
- **Type**: `number|Array`
- **Default**: `5`

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayY` 控制了横向的图案模式。与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

*   如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示高度为 5 的图案，然后空 5 像素，再然后显示高度为 5 的图案……
    
*   如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案高 5 像素，然后空 10 像素，然后图案高 2 像素，然后空 6 像素，然后图案高 5 像素……
    

可以结合以下的例子理解本接口：

##### levels.itemStyle.decal.rotation
- **Type**: `number`
- **Default**: `0`

图案的整体旋转角度（弧度制），取值范围从 `-Math.PI` 到 `Math.PI`。

##### levels.itemStyle.decal.maxTileWidth
- **Type**: `number`
- **Default**: `512`

生成的图案在未重复之前的宽度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

##### levels.itemStyle.decal.maxTileHeight
- **Type**: `number`
- **Default**: `512`

生成的图案在未重复之前的高度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。

### levels.emphasis
- **Type**: `Object`

高亮状态配置。

#### levels.emphasis.disabled
- **Type**: `boolean`
- **Default**: `false`

从 `v5.3.0` 开始支持

是否关闭高亮状态。

关闭高亮状态可以在鼠标移到图形上，tooltip 触发，或者图例联动的时候不再触发高亮效果。在图形非常多的时候可以关闭以提升交互流畅性。

##### levels.emphasis.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### levels.emphasis.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### levels.emphasis.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### levels.emphasis.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### levels.emphasis.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### levels.emphasis.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### levels.emphasis.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### levels.emphasis.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### levels.emphasis.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### levels.emphasis.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### levels.emphasis.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### levels.emphasis.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### levels.emphasis.label.lineHeight
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

##### levels.emphasis.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### levels.emphasis.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### levels.emphasis.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.emphasis.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### levels.emphasis.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### levels.emphasis.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### levels.emphasis.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### levels.emphasis.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### levels.emphasis.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### levels.emphasis.label.width
- **Type**: `number`

文本显示宽度。

##### levels.emphasis.label.height
- **Type**: `number`

文本显示高度。

##### levels.emphasis.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### levels.emphasis.label.textBorderType
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

##### levels.emphasis.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.emphasis.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### levels.emphasis.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### levels.emphasis.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### levels.emphasis.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.emphasis.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### levels.emphasis.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### levels.emphasis.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.emphasis.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.emphasis.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.emphasis.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.emphasis.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.emphasis.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.emphasis.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.emphasis.label.rich.<style_name>.lineHeight
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

###### levels.emphasis.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.emphasis.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.emphasis.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.emphasis.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.emphasis.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.emphasis.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.emphasis.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.emphasis.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.emphasis.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.emphasis.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.emphasis.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.emphasis.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.emphasis.label.rich.<style_name>.textBorderType
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

###### levels.emphasis.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.emphasis.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.emphasis.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.emphasis.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.emphasis.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.emphasis.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### levels.emphasis.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

##### levels.emphasis.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

###### levels.emphasis.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

###### levels.emphasis.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

###### levels.emphasis.labelLine.lineStyle.type
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

###### levels.emphasis.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.emphasis.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

###### levels.emphasis.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

###### levels.emphasis.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

###### levels.emphasis.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

###### levels.emphasis.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

###### levels.emphasis.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

###### levels.emphasis.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

###### levels.emphasis.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### levels.emphasis.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### levels.emphasis.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### levels.emphasis.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### levels.emphasis.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### levels.emphasis.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### levels.emphasis.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### levels.emphasis.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### levels.emphasis.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### levels.emphasis.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### levels.emphasis.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### levels.emphasis.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### levels.emphasis.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### levels.emphasis.upperLabel.lineHeight
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

##### levels.emphasis.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### levels.emphasis.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### levels.emphasis.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.emphasis.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### levels.emphasis.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### levels.emphasis.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### levels.emphasis.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### levels.emphasis.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### levels.emphasis.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### levels.emphasis.upperLabel.width
- **Type**: `number`

文本显示宽度。

##### levels.emphasis.upperLabel.height
- **Type**: `number`

文本显示高度。

##### levels.emphasis.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.emphasis.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### levels.emphasis.upperLabel.textBorderType
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

##### levels.emphasis.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.emphasis.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### levels.emphasis.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### levels.emphasis.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### levels.emphasis.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.emphasis.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### levels.emphasis.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### levels.emphasis.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.emphasis.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.emphasis.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.emphasis.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.emphasis.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.emphasis.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.emphasis.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.emphasis.upperLabel.rich.<style_name>.lineHeight
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

###### levels.emphasis.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.emphasis.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.emphasis.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.emphasis.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.emphasis.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.emphasis.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.emphasis.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.emphasis.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.emphasis.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.emphasis.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.emphasis.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.emphasis.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.emphasis.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.emphasis.upperLabel.rich.<style_name>.textBorderType
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

###### levels.emphasis.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.emphasis.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.emphasis.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.emphasis.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.emphasis.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.emphasis.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

##### levels.emphasis.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

### levels.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

淡出状态配置。

##### levels.blur.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### levels.blur.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### levels.blur.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### levels.blur.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### levels.blur.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### levels.blur.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### levels.blur.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### levels.blur.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### levels.blur.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### levels.blur.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### levels.blur.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### levels.blur.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### levels.blur.label.lineHeight
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

##### levels.blur.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### levels.blur.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### levels.blur.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.blur.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### levels.blur.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### levels.blur.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### levels.blur.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### levels.blur.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### levels.blur.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### levels.blur.label.width
- **Type**: `number`

文本显示宽度。

##### levels.blur.label.height
- **Type**: `number`

文本显示高度。

##### levels.blur.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### levels.blur.label.textBorderType
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

##### levels.blur.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.blur.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### levels.blur.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### levels.blur.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### levels.blur.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.blur.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### levels.blur.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### levels.blur.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.blur.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.blur.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.blur.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.blur.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.blur.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.blur.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.blur.label.rich.<style_name>.lineHeight
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

###### levels.blur.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.blur.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.blur.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.blur.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.blur.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.blur.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.blur.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.blur.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.blur.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.blur.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.blur.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.blur.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.blur.label.rich.<style_name>.textBorderType
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

###### levels.blur.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.blur.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.blur.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.blur.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.blur.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.blur.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### levels.blur.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

##### levels.blur.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

###### levels.blur.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

###### levels.blur.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

###### levels.blur.labelLine.lineStyle.type
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

###### levels.blur.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.blur.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

###### levels.blur.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

###### levels.blur.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

###### levels.blur.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

###### levels.blur.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

###### levels.blur.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

###### levels.blur.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

###### levels.blur.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### levels.blur.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### levels.blur.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### levels.blur.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### levels.blur.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### levels.blur.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### levels.blur.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### levels.blur.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### levels.blur.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### levels.blur.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### levels.blur.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### levels.blur.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### levels.blur.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### levels.blur.upperLabel.lineHeight
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

##### levels.blur.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### levels.blur.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### levels.blur.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.blur.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### levels.blur.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### levels.blur.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### levels.blur.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### levels.blur.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### levels.blur.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### levels.blur.upperLabel.width
- **Type**: `number`

文本显示宽度。

##### levels.blur.upperLabel.height
- **Type**: `number`

文本显示高度。

##### levels.blur.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.blur.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### levels.blur.upperLabel.textBorderType
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

##### levels.blur.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.blur.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### levels.blur.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### levels.blur.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### levels.blur.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.blur.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### levels.blur.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### levels.blur.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.blur.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.blur.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.blur.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.blur.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.blur.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.blur.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.blur.upperLabel.rich.<style_name>.lineHeight
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

###### levels.blur.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.blur.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.blur.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.blur.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.blur.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.blur.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.blur.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.blur.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.blur.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.blur.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.blur.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.blur.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.blur.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.blur.upperLabel.rich.<style_name>.textBorderType
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

###### levels.blur.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.blur.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.blur.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.blur.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.blur.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.blur.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

##### levels.blur.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

### levels.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

选中状态配置。

#### levels.select.disabled
- **Type**: `boolean`
- **Default**: `false`

从 `v5.3.0` 开始支持

是否可以被选中。在开启 `selectedMode` 的时候有效，可以用于关闭部分数据。

##### levels.select.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### levels.select.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### levels.select.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### levels.select.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### levels.select.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### levels.select.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### levels.select.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### levels.select.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### levels.select.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### levels.select.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### levels.select.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### levels.select.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### levels.select.label.lineHeight
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

##### levels.select.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### levels.select.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### levels.select.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.select.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### levels.select.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### levels.select.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### levels.select.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### levels.select.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### levels.select.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### levels.select.label.width
- **Type**: `number`

文本显示宽度。

##### levels.select.label.height
- **Type**: `number`

文本显示高度。

##### levels.select.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### levels.select.label.textBorderType
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

##### levels.select.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.select.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### levels.select.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### levels.select.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### levels.select.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.select.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### levels.select.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### levels.select.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.select.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.select.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.select.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.select.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.select.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.select.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.select.label.rich.<style_name>.lineHeight
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

###### levels.select.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.select.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.select.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.select.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.select.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.select.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.select.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.select.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.select.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.select.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.select.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.select.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.select.label.rich.<style_name>.textBorderType
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

###### levels.select.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.select.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.select.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.select.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.select.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.select.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### levels.select.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

##### levels.select.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

###### levels.select.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

###### levels.select.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

###### levels.select.labelLine.lineStyle.type
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

###### levels.select.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.select.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

###### levels.select.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

###### levels.select.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

###### levels.select.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

###### levels.select.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

###### levels.select.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

###### levels.select.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

###### levels.select.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### levels.select.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### levels.select.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### levels.select.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### levels.select.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### levels.select.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### levels.select.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### levels.select.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### levels.select.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### levels.select.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### levels.select.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### levels.select.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### levels.select.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### levels.select.upperLabel.lineHeight
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

##### levels.select.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### levels.select.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### levels.select.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.select.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### levels.select.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### levels.select.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### levels.select.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### levels.select.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### levels.select.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### levels.select.upperLabel.width
- **Type**: `number`

文本显示宽度。

##### levels.select.upperLabel.height
- **Type**: `number`

文本显示高度。

##### levels.select.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### levels.select.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### levels.select.upperLabel.textBorderType
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

##### levels.select.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### levels.select.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### levels.select.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### levels.select.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### levels.select.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.select.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### levels.select.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### levels.select.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### levels.select.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### levels.select.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### levels.select.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### levels.select.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### levels.select.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### levels.select.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### levels.select.upperLabel.rich.<style_name>.lineHeight
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

###### levels.select.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### levels.select.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### levels.select.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.select.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### levels.select.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### levels.select.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### levels.select.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### levels.select.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### levels.select.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### levels.select.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.select.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### levels.select.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### levels.select.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### levels.select.upperLabel.rich.<style_name>.textBorderType
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

###### levels.select.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### levels.select.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### levels.select.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### levels.select.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### levels.select.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### levels.select.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

##### levels.select.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

## data
- **Type**: `Array`

[series-treemap.data](option.series-treemap.md#data) 的数据格式是树状的，例如：

```
[ // 注意，最外层是一个数组，而非从某个根节点开始。
    {
        value: 1212,
        children: [
            {
                value: 2323,    // value字段的值，对应到面积大小。
                                // 也可以是数组，如 [2323, 43, 55]，则数组第一项对应到面积大小。
                                // 数组其他项可以用于额外的视觉映射，详情参见 series-treemap.levels。
                id: 'someid-1', // id 不是必须设置的。
                                // 但是如果想使用 API 来改变某个节点，需要用 id 来定位。
                name: 'description of this node', // 显示在矩形中的描述文字。
                children: [...],
                label: {        // 此节点特殊的 label 定义（如果需要的话）。
                    ...         // label的格式参见 series-treemap.label。
                },
                itemStyle: {    // 此节点特殊的 itemStyle 定义（如果需要的话）。
                    ...         // label的格式参见 series-treemap.itemStyle。
                }
            },
            {
                value: 4545,
                id: 'someid-2',
                name: 'description of this node',
                children: [
                    {
                        value: 5656,
                        id: 'someid-3',
                        name: 'description of this node',
                        children: [...]
                    },
                    ...
                ]
            }
        ]
    },
    {
        value: [23, 59, 12]
        // 如果没有children，可以不写
    },
    ...
]
```

### data.value
- **Type**: `number|Array`

每个树节点的值，对应到面积大小。可以是number，也可以是数组，如 `[2323, 43, 55]`，则数组第一项对应到面积大小。

### data.id
- **Type**: `string`

每个树节点的id。id 不是必须设置的。但是如果想使用 API 来改变某个节点，需要用 id 来定位。

### data.name
- **Type**: `string`

显示在矩形中的描述文字。

### data.visualDimension
- **Type**: `number`
- **Default**: `0`

`treemap` 中支持对数据其他维度进行视觉映射。

首先，treemap的数据格式（参见 [series-treemap.data](option.series-treemap.md#data)）中，每个节点的 `value` 都可以是数组。数组每项是一个『维度』（dimension）。`visualDimension` 指定了额外的『视觉映射』使用的是数组的哪一项。默认为第 `0` 项。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `visualDimension` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.visualMin
- **Type**: `number`

当前层级的最小 value 值。如果不设置则自动统计。

手动指定 `visualMin`、`visualMax` ，即手动控制了 visual mapping 的值域（当 [colorMappingBy](option.series-treemap.md#levels.colorMappingBy) 为 `'value'` 时有意义）。

### data.visualMax
- **Type**: `number`

当前层级的最大 value 值。如果不设置则自动统计。

手动指定 `visualMin`、`visualMax` ，即手动控制了 visual mapping 的值域（当 [colorMappingBy](option.series-treemap.md#levels.colorMappingBy) 为 `'value'` 时有意义）。

### data.color
- **Type**: `Array`

表示同一层级的节点的 颜色 选取列表（选择规则见 [colorMappingBy](option.series-treemap.md#colorMappingBy)）。默认为空时，选取系统color列表。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `color` 属性可能在多处地方存在：

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.colorAlpha
- **Type**: `Array`

表示同一层级的节点的颜色透明度选取范围。

数值范围 0 ~ 1

例如, `colorAlpha` 可以是 `[0.3, 1]`.

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorAlpha` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.colorSaturation
- **Type**: `number`

表示同一层级的节点的颜色饱和度 选取范围。

数值范围 0 ~ 1。

例如, `colorSaturation` 可以是 `[0.3, 1]`.

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorSaturation` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.colorMappingBy
- **Type**: `string`
- **Default**: `'index'`

表示同一层级节点，在颜色列表中（参见 `color` 属性）选择时，按照什么来选择。可选值：

*   `'value'`：

将节点的值（即 [series-treemap.data.value](option.series-treemap.md#data.value)）映射到颜色列表中。

这样得到的颜色，反应了节点值的大小。

可以使用 [visualDimension](option.series-treemap.md#levels.visualDimension) 属性来设置，用 [data](option.series-treemap.md#data) 中哪个纬度的值来映射。

*   `'index'`：

将节点的 `index`（序号）映射到颜色列表中。即同一层级中，第一个节点取颜色列表中第一个颜色，第二个节点取第二个。

这样得到的颜色，便于区分相邻节点。

*   `'id'`：

将节点的 `id`（即 [series-treemap.data.id](option.series-treemap.md#data.id)）映射到颜色列表中。`id` 是用户指定的，这样能够使得，在treemap 通过 setOption 变化数值时，同一 `id` 映射到同一颜色，保持一致性。参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=treemap-obama&edit=1&reset=1)。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `colorMappingBy` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.visibleMin
- **Type**: `number`
- **Default**: `10`

如果某个节点的矩形的面积，小于这个数值（单位：px平方），这个节点就不显示。

如果不加这个限制，很小的节点会影响显示效果。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `visibleMin` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.childrenVisibleMin
- **Type**: `number`

如果某个节点的矩形面积，小于这个数值（单位：px平方），则不显示这个节点的子节点。

这能够在矩形面积不足够大时候，隐藏节点的细节。当用户用鼠标缩放节点时，如果面积大于此阈值，又会显示子节点。

关于视觉设置，详见 [series-treemap.levels](option.series-treemap.md#levels)。

> 注：treemap中 `childrenVisibleMin` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

### data.label
- **Type**: `Object`

`label` 描述了每个矩形中，文本标签的样式。

> 注：treemap中 `label` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

#### data.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### data.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### data.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### data.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### data.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### data.label.textMargin
- **Type**: `number|Array`

从 `v6.0.0` 开始支持

标签周围的间距，用于避免标签重叠。单位为像素（px）。

注意：`textMargin` 是作用在标签的本地包围盒上的，也就是说，如果标签设置了旋转（`rotate`），先在未旋转的标签上应用 `textMargin`，再进行旋转。

> 名字是 `textMargin`，因历史原因 `margin` 已被它用。

示例：

```
// 设置所有方向的间距为 5，等价于 [5, 5, 5, 5]
textMargin: 5
// 设置上下间距为 5，左右间距为 10
textMargin: [5, 10]
// 分别设置四个方向的间距
textMargin: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

#### data.label.minMargin
- **Type**: `number`

从 `v5.0.0` 开始支持

用于控制标签之间的最小距离，当启用 [labelLayout](../option.md#series.labelLayout) 时可能会用到。

`minMargin` 和 `textMargin` 含义相似，但有细微区别。如果不确定，可使用 `textMargin`，因为它基本包含了 `minMargin` 的能力，并且在某些旋转标签的场景下可以提供更紧凑的布局。

> 区别如下：
> 
> *   两个标签之间的最小间隔（如适用）为 `label1.minMargin/2 + label2.minMargin/2`，或 `label1.textMargin[number] + label2.textMargin[number]`。
> *   如果标签设置了 `rotate`：
>     *   `minMargin`：先旋转标签，取四个角的 x/y 的 min/max 得到新的矩形（即扩展后的包围盒），最后在新矩形上应用 `minMargin`。
>     *   `textMargin`：先在标签的包围盒上应用 `textMargin`，再进行旋转。
> *   数据类型：`minMargin` 只能为 `number`，`textMargin` 可以为 `number | number[]`（类似 CSS margin）。

#### data.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### data.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### data.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### data.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### data.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### data.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### data.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### data.label.lineHeight
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

#### data.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### data.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### data.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### data.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### data.label.padding
- **Type**: `number|Array`
- **Default**: `5`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### data.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### data.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### data.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### data.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### data.label.width
- **Type**: `number`

文本显示宽度。

#### data.label.height
- **Type**: `number`

文本显示高度。

#### data.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### data.label.textBorderType
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

#### data.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### data.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### data.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### data.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### data.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### data.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### data.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### data.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.label.rich.<style_name>.lineHeight
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

###### data.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.label.rich.<style_name>.textBorderType
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

###### data.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### data.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### data.upperLabel
- **Type**: `Object`

`upperLabel` 用于显示矩形的父节点的标签。当 [upperLabel.show](option.series-treemap.md#upperLabel.show) 为 `true` 的时候，『显示父节点标签』功能开启。

同 [series-treemap.label](option.series-treemap.md#label) 一样，`upperLabel` 可以存在于 [series-treemap](option.series-treemap.md) 的根节点，或者 [series-treemap.level](option.series-treemap.md#level) 中，或者 [series-treemap.data](option.series-treemap.md#data) 的每个数据项中。

[series-treemap.label](option.series-treemap.md#label) 描述的是，当前节点为叶节点时标签的样式；`upperLabel` 描述的是，当前节点为非叶节点（即含有子节点）时标签的样式。（此时标签一般会被显示在节点的最上部）

参见：

> 注：treemap中 `label` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

#### data.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### data.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### data.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### data.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### data.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### data.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

#### data.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### data.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### data.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### data.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### data.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### data.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### data.upperLabel.lineHeight
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

#### data.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### data.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

#### data.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### data.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### data.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### data.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### data.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### data.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### data.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### data.upperLabel.width
- **Type**: `number`

文本显示宽度。

#### data.upperLabel.height
- **Type**: `number`
- **Default**: `20`

父节点标签区的高度。

#### data.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### data.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### data.upperLabel.textBorderType
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

#### data.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### data.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### data.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### data.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### data.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### data.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### data.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### data.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.upperLabel.rich.<style_name>.lineHeight
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

###### data.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.upperLabel.rich.<style_name>.textBorderType
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

###### data.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### data.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

### data.itemStyle
- **Type**: `Object`

> 注：treemap中 `itemStyle` 属性可能在多处地方存在：

> *   于 [sereis-treemap](option.series-treemap.md) 根下，表示本系列全局的统一设置。

> *   于 [series-treemap.levels](option.series-treemap.md#levels) 的每个数组元素中，表示树每个层级的统一设置。
> *   于 [series-treemap.data](option.series-treemap.md#data) 的每个节点中，表示每个节点的特定设置。

#### data.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

#### data.itemStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

矩形圆角。

#### data.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

矩形边框线宽。为 0 时无边框。而矩形的内部子矩形（子节点）的间隔距离是由 [gapWidth](option.series-treemap.md#levels.gapWidth) 指定的。

#### data.itemStyle.gapWidth
- **Type**: `number`
- **Default**: `0`

矩形内部子矩形（子节点）的间隔距离。

![](../../documents/asset/img/treemap-border-gap.png)

#### data.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#fff',`

矩形边框 和 矩形间隔（gap）的颜色。

#### data.itemStyle.borderColorSaturation
- **Type**: `Color`

矩形边框的颜色的饱和度。取值范围是 0 ~ 1 之间的浮点数。

注意：

如果设置此属性，则 `borderColor` 的设置无效，而是：取当前节点计算出的颜色（比如从父节点遗传而来），在此颜色值上设置 `borderColorSaturation` 得到最终颜色。这种方式，能够做出『不同区块有不同色调的矩形间隔线』的效果，能够便于区分层级。

**矩形边框（border）/缝隙（gap）设置如何避免混淆**

如果统一用一种颜色设置矩形的缝隙（gap），那么当不同层级的矩形同时展示时可能会出现混淆。

参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/treemap-borderColor&edit=1&reset=1)，注意其中红色的区块中的子矩形其实是更深层级，和其他用白色缝隙区分的矩形不是在一个层级。所以，红色区块中矩形的分割线的颜色，我们在 `borderColorSaturation` 中设置为『加了饱和度变化的红颜色』，以示区别。

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

### data.emphasis
- **Type**: `Object`

高亮状态配置。

#### data.emphasis.disabled
- **Type**: `boolean`
- **Default**: `false`

从 `v5.3.0` 开始支持

是否关闭高亮状态。

关闭高亮状态可以在鼠标移到图形上，tooltip 触发，或者图例联动的时候不再触发高亮效果。在图形非常多的时候可以关闭以提升交互流畅性。

##### data.emphasis.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### data.emphasis.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### data.emphasis.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### data.emphasis.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### data.emphasis.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### data.emphasis.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### data.emphasis.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.emphasis.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.emphasis.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.emphasis.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### data.emphasis.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### data.emphasis.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### data.emphasis.label.lineHeight
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

##### data.emphasis.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### data.emphasis.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### data.emphasis.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.emphasis.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### data.emphasis.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### data.emphasis.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### data.emphasis.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### data.emphasis.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### data.emphasis.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### data.emphasis.label.width
- **Type**: `number`

文本显示宽度。

##### data.emphasis.label.height
- **Type**: `number`

文本显示高度。

##### data.emphasis.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.emphasis.label.textBorderType
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

##### data.emphasis.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.emphasis.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.emphasis.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.emphasis.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.emphasis.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.emphasis.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.emphasis.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### data.emphasis.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.emphasis.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.emphasis.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.emphasis.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.emphasis.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.emphasis.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.emphasis.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.emphasis.label.rich.<style_name>.lineHeight
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

###### data.emphasis.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.emphasis.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.emphasis.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.emphasis.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.emphasis.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.emphasis.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.emphasis.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.emphasis.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.emphasis.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.emphasis.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.emphasis.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.emphasis.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.emphasis.label.rich.<style_name>.textBorderType
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

###### data.emphasis.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.emphasis.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.emphasis.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.emphasis.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.emphasis.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.emphasis.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### data.emphasis.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

##### data.emphasis.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

###### data.emphasis.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

###### data.emphasis.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

###### data.emphasis.labelLine.lineStyle.type
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

###### data.emphasis.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.emphasis.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

###### data.emphasis.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

###### data.emphasis.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

###### data.emphasis.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

###### data.emphasis.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

###### data.emphasis.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

###### data.emphasis.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

###### data.emphasis.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### data.emphasis.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### data.emphasis.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### data.emphasis.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### data.emphasis.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### data.emphasis.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### data.emphasis.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### data.emphasis.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.emphasis.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.emphasis.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.emphasis.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### data.emphasis.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### data.emphasis.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### data.emphasis.upperLabel.lineHeight
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

##### data.emphasis.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### data.emphasis.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### data.emphasis.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.emphasis.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### data.emphasis.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### data.emphasis.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### data.emphasis.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### data.emphasis.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### data.emphasis.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### data.emphasis.upperLabel.width
- **Type**: `number`

文本显示宽度。

##### data.emphasis.upperLabel.height
- **Type**: `number`

文本显示高度。

##### data.emphasis.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.emphasis.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.emphasis.upperLabel.textBorderType
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

##### data.emphasis.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.emphasis.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.emphasis.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.emphasis.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.emphasis.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.emphasis.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.emphasis.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### data.emphasis.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.emphasis.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.emphasis.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.emphasis.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.emphasis.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.emphasis.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.emphasis.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.emphasis.upperLabel.rich.<style_name>.lineHeight
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

###### data.emphasis.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.emphasis.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.emphasis.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.emphasis.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.emphasis.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.emphasis.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.emphasis.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.emphasis.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.emphasis.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.emphasis.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.emphasis.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.emphasis.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.emphasis.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.emphasis.upperLabel.rich.<style_name>.textBorderType
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

###### data.emphasis.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.emphasis.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.emphasis.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.emphasis.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.emphasis.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.emphasis.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

##### data.emphasis.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

### data.blur
- **Type**: `Object`

从 `v5.0.0` 开始支持

淡出状态配置。

##### data.blur.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### data.blur.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### data.blur.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### data.blur.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### data.blur.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### data.blur.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### data.blur.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.blur.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.blur.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.blur.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### data.blur.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### data.blur.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### data.blur.label.lineHeight
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

##### data.blur.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### data.blur.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### data.blur.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.blur.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### data.blur.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### data.blur.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### data.blur.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### data.blur.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### data.blur.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### data.blur.label.width
- **Type**: `number`

文本显示宽度。

##### data.blur.label.height
- **Type**: `number`

文本显示高度。

##### data.blur.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.blur.label.textBorderType
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

##### data.blur.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.blur.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.blur.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.blur.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.blur.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.blur.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.blur.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### data.blur.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.blur.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.blur.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.blur.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.blur.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.blur.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.blur.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.blur.label.rich.<style_name>.lineHeight
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

###### data.blur.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.blur.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.blur.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.blur.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.blur.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.blur.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.blur.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.blur.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.blur.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.blur.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.blur.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.blur.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.blur.label.rich.<style_name>.textBorderType
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

###### data.blur.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.blur.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.blur.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.blur.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.blur.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.blur.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### data.blur.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

##### data.blur.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

###### data.blur.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

###### data.blur.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

###### data.blur.labelLine.lineStyle.type
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

###### data.blur.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.blur.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

###### data.blur.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

###### data.blur.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

###### data.blur.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

###### data.blur.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

###### data.blur.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

###### data.blur.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

###### data.blur.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### data.blur.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### data.blur.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### data.blur.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### data.blur.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### data.blur.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### data.blur.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### data.blur.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.blur.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.blur.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.blur.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### data.blur.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### data.blur.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### data.blur.upperLabel.lineHeight
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

##### data.blur.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### data.blur.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### data.blur.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.blur.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### data.blur.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### data.blur.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### data.blur.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### data.blur.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### data.blur.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### data.blur.upperLabel.width
- **Type**: `number`

文本显示宽度。

##### data.blur.upperLabel.height
- **Type**: `number`

文本显示高度。

##### data.blur.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.blur.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.blur.upperLabel.textBorderType
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

##### data.blur.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.blur.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.blur.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.blur.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.blur.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.blur.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.blur.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### data.blur.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.blur.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.blur.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.blur.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.blur.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.blur.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.blur.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.blur.upperLabel.rich.<style_name>.lineHeight
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

###### data.blur.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.blur.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.blur.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.blur.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.blur.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.blur.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.blur.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.blur.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.blur.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.blur.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.blur.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.blur.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.blur.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.blur.upperLabel.rich.<style_name>.textBorderType
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

###### data.blur.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.blur.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.blur.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.blur.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.blur.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.blur.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

##### data.blur.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

### data.select
- **Type**: `Object`

从 `v5.0.0` 开始支持

选中状态配置。

#### data.select.disabled
- **Type**: `boolean`
- **Default**: `false`

从 `v5.3.0` 开始支持

是否可以被选中。在开启 `selectedMode` 的时候有效，可以用于关闭部分数据。

##### data.select.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### data.select.label.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### data.select.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### data.select.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### data.select.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### data.select.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### data.select.label.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.select.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.select.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.select.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### data.select.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### data.select.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### data.select.label.lineHeight
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

##### data.select.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### data.select.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### data.select.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.select.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### data.select.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### data.select.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### data.select.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### data.select.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### data.select.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### data.select.label.width
- **Type**: `number`

文本显示宽度。

##### data.select.label.height
- **Type**: `number`

文本显示高度。

##### data.select.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.select.label.textBorderType
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

##### data.select.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.select.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.select.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.select.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.select.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.select.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.select.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### data.select.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.select.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.select.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.select.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.select.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.select.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.select.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.select.label.rich.<style_name>.lineHeight
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

###### data.select.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.select.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.select.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.select.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.select.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.select.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.select.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.select.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.select.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.select.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.select.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.select.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.select.label.rich.<style_name>.textBorderType
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

###### data.select.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.select.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.select.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.select.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.select.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.select.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

#### data.select.labelLine
- **Type**: `Object`

从 `v5.0.0` 开始支持

标签的视觉引导线配置。

##### data.select.labelLine.show
- **Type**: `boolean`

是否显示视觉引导线。

###### data.select.labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

###### data.select.labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线宽。

###### data.select.labelLine.lineStyle.type
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

###### data.select.labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.select.labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

###### data.select.labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

###### data.select.labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

###### data.select.labelLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

###### data.select.labelLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

###### data.select.labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

###### data.select.labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

###### data.select.labelLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

##### data.select.upperLabel.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

##### data.select.upperLabel.position
- **Type**: `string|Array`
- **Default**: `'inside'`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

##### data.select.upperLabel.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

##### data.select.upperLabel.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

##### data.select.upperLabel.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

##### data.select.upperLabel.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

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
    // 当前节点的祖先节点（包括自身）
    treeAncestors: Array
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

##### data.select.upperLabel.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.upperLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.select.upperLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.select.upperLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### data.select.upperLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### data.select.upperLabel.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

##### data.select.upperLabel.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

##### data.select.upperLabel.lineHeight
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

##### data.select.upperLabel.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.upperLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.upperLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### data.select.upperLabel.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

##### data.select.upperLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.select.upperLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### data.select.upperLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### data.select.upperLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### data.select.upperLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### data.select.upperLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### data.select.upperLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### data.select.upperLabel.width
- **Type**: `number`

文本显示宽度。

##### data.select.upperLabel.height
- **Type**: `number`

文本显示高度。

##### data.select.upperLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

##### data.select.upperLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### data.select.upperLabel.textBorderType
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

##### data.select.upperLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### data.select.upperLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### data.select.upperLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### data.select.upperLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### data.select.upperLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.select.upperLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### data.select.upperLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### data.select.upperLabel.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### data.select.upperLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.upperLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### data.select.upperLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### data.select.upperLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### data.select.upperLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### data.select.upperLabel.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### data.select.upperLabel.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### data.select.upperLabel.rich.<style_name>.lineHeight
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

###### data.select.upperLabel.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.upperLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.upperLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### data.select.upperLabel.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

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

###### data.select.upperLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.select.upperLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### data.select.upperLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### data.select.upperLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### data.select.upperLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### data.select.upperLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### data.select.upperLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### data.select.upperLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.select.upperLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### data.select.upperLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### data.select.upperLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### data.select.upperLabel.rich.<style_name>.textBorderType
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

###### data.select.upperLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### data.select.upperLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### data.select.upperLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### data.select.upperLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### data.select.upperLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### data.select.upperLabel.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

##### data.select.itemStyle.color
- **Type**: `Color`

矩形的颜色。默认从全局调色盘 [option.color](../option.md#color) 获取颜色。

### data.link
- **Type**: `string`

点击此节点可跳转的超链接。须 [series-treemap.nodeClick](option.series-treemap.md#nodeClick) 值为 `'link'` 时才生效。

参见 [series-treemap.data.target](option.series-treemap.md#data.target)。

\[警告\]: 此 URL 字符串直接被使用，并未在内部做其他净化处理（sanitization） 如果他们来自于“不受信任”的来源，必须考虑 **安全风险**。文档 [“安全指南”](https://echarts.apache.org/handbook/zh/best-practices/security) 给出了安全使用建议。

### data.target
- **Type**: `string`
- **Default**: `'blank'`

意义同 `html` `<a>` 标签中的 `target`，参见 [series-treemap.data.link](option.series-treemap.md#data.link)。可选值为：`'blank'` 或 `'self'`。

### data.children
- **Type**: `Array`

子节点，递归定义，格式同 [series-treemap.data](option.series-treemap.md#data)。

### data.tooltip
- **Type**: `Object`

本系列每个数据项中特定的 tooltip 设定。

#### data.tooltip.show
- **Type**: `boolean`
- **Default**: `true`

是否显示提示框。

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

从 `v5.5.0` 开始支持`dataIndex` 参数。但是其值当 `dataZoom` 存在时不合理，因为所取的值是数据被 `dataZoom` 过滤后的 index。

从 `v6.1.0` 开始支持`dataIndex` 参数修正 `dataZoom` 过滤前的 index

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

提示框浮层的内边距（内容周围的留白区域），单位为像素 (`px`)。每个方向的默认值为 `5`。支持传入单个数值、双值数组或四值数组来灵活配置。

使用示例：

```
// 同时应用于上下左右四个方向
padding: 5
// [上下, 左右] -> 上下内边距为 5，左右内边距为 10
padding: [5, 10]
// 顺时针方向：[上, 右, 下, 左]
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

### data.cursor
- **Type**: `string`
- **Default**: `pointer`

从 `v5.6.0` 开始支持

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。

## silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和用户交互（鼠标和触摸事件）。

*   `true`: 图形不响应用户交互。这导致：
    *   用户交互功能被禁止，例如 `tooltip`、鼠标悬浮时的状态变化（`emphasis`），鼠标悬浮时的联动等。
    *   对外的鼠标和触摸事件不再发送给开发者注册的监听器（`chart.on('xxx', listener)`）。
*   `false`:
    *   用户交互功能不被此配置项禁止，但是是否可交互仍取决于其他相关配置项的设置。
    *   对外的鼠标和触摸事件不被此配置项禁止，但是是否发送仍取决于其他配置项，一般是 `triggerEvent`（如果支持此配置项的话）。

## animationDuration
- **Type**: `number|Function`
- **Default**: `1500`

初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：

```
animationDuration: function (idx) {
    // 越往后的数据时长越大
    return idx * 100;
}
```

## animationEasing
- **Type**: `string`
- **Default**: `quinticInOut`

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

## tooltip
- **Type**: `Object`

本系列特定的 tooltip 设定。

### tooltip.show
- **Type**: `boolean`
- **Default**: `true`

是否显示提示框。

### tooltip.trigger
- **Type**: `string|boolean`
- **Default**: `'item'`

覆盖本系列的提示框触发类型。

可选值：

*   `'item'`
*   `'axis'`
*   `'none'` 或 `false`：不触发本系列提示框。

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

从 `v5.5.0` 开始支持`dataIndex` 参数。但是其值当 `dataZoom` 存在时不合理，因为所取的值是数据被 `dataZoom` 过滤后的 index。

从 `v6.1.0` 开始支持`dataIndex` 参数修正 `dataZoom` 过滤前的 index

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

提示框浮层的内边距（内容周围的留白区域），单位为像素 (`px`)。每个方向的默认值为 `5`。支持传入单个数值、双值数组或四值数组来灵活配置。

使用示例：

```
// 同时应用于上下左右四个方向
padding: 5
// [上下, 左右] -> 上下内边距为 5，左右内边距为 10
padding: [5, 10]
// 顺时针方向：[上, 右, 下, 左]
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

## cursor
- **Type**: `string`
- **Default**: `pointer`

从 `v5.6.0` 开始支持

鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 `cursor`。
