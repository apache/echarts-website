# option.parallel

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

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
- **Default**: `80`

undefined组件离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## top
- **Type**: `string|number`
- **Default**: `60`

undefined组件离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

## right
- **Type**: `string|number`
- **Default**: `80`

undefined组件离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

## bottom
- **Type**: `string|number`
- **Default**: `60`

undefined组件离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

## width
- **Type**: `string|number`
- **Default**: `'auto'`

平行坐标系（parallel）组件的宽度。默认自适应。

`width` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

## height
- **Type**: `string|number`
- **Default**: `'auto'`

平行坐标系（parallel）组件的高度。默认自适应。

`height` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

## coordinateSystem
- **Type**: `string`
- **Default**: `'none'`

从 `v6.0.0` 开始支持

指定另一个坐标系组件，本 `parallel` 布局在那个坐标系中。

可选值：

*   `null`、`undefined` 或者 `'none'`
    
    不布局在任何坐标系中。自己独立完成布局。
    

*   `'calendar'`
    
    布局在一个 [日历坐标系](option.calendar.md) 中。当一个 ECharts 实例中存在多个日历坐标系时，须通过 [calendarIndex](option.parallel.md#calendarIndex) 或 [calendarId](option.parallel.md#calendarId) 指定所使用的日历坐标系。
    

*   `'matrix'`
    
    布局在一个 [矩阵坐标系](option.matrix.md)中。当一个 ECharts 实例中存在多个矩阵坐标系时，须通过 [matrixIndex](option.parallel.md#matrixIndex) 或 [matrixId](option.parallel.md#matrixId) 指定所使用的矩阵坐标系。
    

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

也参见 [parallel.coordinateSystemUsage](option.parallel.md#coordinateSystemUsage)。

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'box'`

从 `v6.0.0` 开始支持

如何在指定的 [坐标系](option.parallel.md#coordinateSystem) 上布局本 `parallel`。

在大多数情况下，无需显式指定 `coordinateSystemUsage`，除非默认行为不符合预期。

可选值：

*   `'data'`：**（不适用于 [parallel](option.parallel.md)）**
    
    此系列的每个数据项（例如，每个 `series.data[i]`）将独立地在指定的坐标系进行布局。 注：当前没有任何“非系列组件”支持 `coordinateSystemUsage: 'data'`。
    
*   `'box'`：
    
    此系列或组件作为一个整体，在指定的坐标系中进行布局——即根据坐标系计算整体的包围盒或基础锚点。
    
    *   例如，[grid 组件](option.grid.md) 可以布局在 [matrix 坐标系](option.matrix.md) 或 [calendar 坐标系](option.calendar.md) 中，这时其布局矩形是由 [parallel.coords](option.parallel.md#coords) 在坐标系中计算出来的。参见示例：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1)。
    *   又如，[饼图系列](option.series-pie.md) 或 [和弦图系列](option.series-chord.md) 可以布局在 [geo 坐标系](option.geo.md) 或 [cartesian2d 坐标系](option.grid.md) 中，这时其中心点是由 [series-pie.coords](option.series-pie.md#coords) 或 [series-pie.center](option.series-pie.md#center) 在坐标系中计算出来的。参见示例：[地理坐标系中的饼图](https://echarts.apache.org/examples/zh/editor.html?c=map-iceland-pie&edit=1&reset=1)。

另参考：[parallel.coordinateSystem](option.parallel.md#coordinateSystem)。

## coord
- **Type**: `Array|number|string`

从 `v6.0.0` 开始支持

当 [coordinateSystemUsage](option.parallel.md#coordinateSystemUsage) 为 `'box'` 时, `coord` 被输入给坐标系，计算得到布局位置（布局盒或者中心点）。

例子：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1), [矩阵中的关系图](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> 注：当 [coordinateSystemUsage](option.parallel.md#coordinateSystemUsage) 为 `'data'` 时，输入给坐标系的是 `series.data[i]` 而非此 `coord`。

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

## layout
- **Type**: `string`
- **Default**: `'horizontal'`

布局方式，可选值为：

*   `'horizontal'`：水平排布各个坐标轴。
    
*   `'vertical'`：竖直排布各个坐标轴。

## axisExpandable
- **Type**: `boolean`
- **Default**: `false`

维度比较多时，比如有 50+ 的维度，那么就会有 50+ 个轴。那么可能会页面显示不下。

可以通过 [parallel.axisExpandable](option.parallel.md#axisExpandable) 来改善显示效果。

是否允许点击展开折叠 axis。

## axisExpandCenter
- **Type**: `number`

初始时，以哪个轴为中心展开，这里给出轴的 index。没有默认值，需要手动指定。

参见 [parallel.axisExpandable](option.parallel.md#axisExpandable)

## axisExpandCount
- **Type**: `number`
- **Default**: `0`

初始时，有多少个轴会处于展开状态。建议根据你的维度个数而手动指定。

参见 [parallel.axisExpandCenter](option.parallel.md#axisExpandCenter) 参见 [parallel.axisExpandable](option.parallel.md#axisExpandable)

## axisExpandWidth
- **Type**: `number`
- **Default**: `50`

在展开状态，轴的间距是多少，单位为像素。

参见 [parallel.axisExpandable](option.parallel.md#axisExpandable)

## axisExpandTriggerOn
- **Type**: `string`
- **Default**: `'click'`

可取值：

*   `'click'`：鼠标点击的时候 expand。
*   `'mousemove'`：鼠标悬浮的时候 expand。

## parallelAxisDefault
- **Type**: `Object`

配置多个 [parallelAxis](option.parallelAxis.md) 时，有些值一样的属性，如果书写多遍则比较繁琐，那么可以放置在 [parallel.parallelAxisDefault](option.parallel.md#parallelAxisDefault) 里。在坐标轴初始化前，[parallel.parallelAxisDefault](option.parallel.md#parallelAxisDefault) 里的配置项，会分别融合进 [parallelAxis](option.parallelAxis.md)，形成最终的坐标轴的配置。

[参见示例](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/parallel-all&edit=1&reset=1)

### parallelAxisDefault.type
- **Type**: `string`
- **Default**: `value`

坐标轴类型。

可选：

*   `'value'` 数值轴，适用于连续数据。
    
*   `'category'` 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 [series.data](../option.md#series.data) 或 [dataset.source](option.dataset.md#source) 中取，或者可通过 [parallelAxis.data](option.parallelAxis.md#data) 设置类目数据。
    
*   `'time'` 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
    
*   `'log'` 对数轴。适用于对数数据。对数轴下的堆积柱状图或堆积折线图可能带来很大的视觉误差，并且在一定情况下可能存在非预期效果，应避免使用。

### parallelAxisDefault.name
- **Type**: `string`

坐标轴名称。

### parallelAxisDefault.nameLocation
- **Type**: `string`
- **Default**: `'end'`

坐标轴名称显示位置。

**可选：**

*   `'start'`
*   `'middle'` 或者 `'center'`
*   `'end'`

### parallelAxisDefault.nameTextStyle
- **Type**: `Object`

坐标轴名称的文字样式。

#### parallelAxisDefault.nameTextStyle.color
- **Type**: `Color`

坐标轴名称的颜色，默认取 [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color)。

#### parallelAxisDefault.nameTextStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

坐标轴名称文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### parallelAxisDefault.nameTextStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

坐标轴名称文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### parallelAxisDefault.nameTextStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

坐标轴名称文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### parallelAxisDefault.nameTextStyle.fontSize
- **Type**: `number`
- **Default**: `12`

坐标轴名称文字的字体大小。

#### parallelAxisDefault.nameTextStyle.align
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

#### parallelAxisDefault.nameTextStyle.verticalAlign
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

#### parallelAxisDefault.nameTextStyle.lineHeight
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

#### parallelAxisDefault.nameTextStyle.backgroundColor
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

#### parallelAxisDefault.nameTextStyle.borderColor
- **Type**: `Color`

文字块边框颜色。

#### parallelAxisDefault.nameTextStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### parallelAxisDefault.nameTextStyle.borderType
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

#### parallelAxisDefault.nameTextStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### parallelAxisDefault.nameTextStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### parallelAxisDefault.nameTextStyle.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### parallelAxisDefault.nameTextStyle.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### parallelAxisDefault.nameTextStyle.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### parallelAxisDefault.nameTextStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### parallelAxisDefault.nameTextStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### parallelAxisDefault.nameTextStyle.width
- **Type**: `number`

文本显示宽度。

#### parallelAxisDefault.nameTextStyle.height
- **Type**: `number`

文本显示高度。

#### parallelAxisDefault.nameTextStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

#### parallelAxisDefault.nameTextStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### parallelAxisDefault.nameTextStyle.textBorderType
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

#### parallelAxisDefault.nameTextStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### parallelAxisDefault.nameTextStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### parallelAxisDefault.nameTextStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### parallelAxisDefault.nameTextStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### parallelAxisDefault.nameTextStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### parallelAxisDefault.nameTextStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### parallelAxisDefault.nameTextStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### parallelAxisDefault.nameTextStyle.rich
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

详情参见教程：[富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.align
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

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.verticalAlign
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

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.lineHeight
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

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.backgroundColor
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

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.borderType
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

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderType
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

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### parallelAxisDefault.nameTextStyle.richInheritPlainLabel
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

### parallelAxisDefault.nameGap
- **Type**: `number`
- **Default**: `15`

坐标轴名称与轴线之间的距离。

### parallelAxisDefault.nameRotate
- **Type**: `number`

坐标轴名字旋转，角度值。

### parallelAxisDefault.nameTruncate
- **Type**: `Object`

坐标轴名字的截断。

#### parallelAxisDefault.nameTruncate.maxWidth
- **Type**: `number`

截断文本的最大长度，超过此长度会被截断。

#### parallelAxisDefault.nameTruncate.ellipsis
- **Type**: `string`
- **Default**: `'...'`

截断后文字末尾显示的内容。

### parallelAxisDefault.inverse
- **Type**: `boolean`
- **Default**: `false`

是否是反向坐标轴。

### parallelAxisDefault.boundaryGap
- **Type**: `boolean|Array`

坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。

类目轴中 `boundaryGap` 可以配置为 `true` 和 `false`。默认为 `true`，这时候[刻度](option.parallelAxis.md#axisTick)只是作为分隔线，标签和数据点都会在两个[刻度](option.parallelAxis.md#axisTick)之间的带(band)中间。

非类目轴，包括时间，数值，对数轴，`boundaryGap`是一个两个值的数组，分别表示数据最小值和最大值的延伸范围，可以直接设置数值或者相对的百分比，在设置 [min](option.parallelAxis.md#min) 和 [max](option.parallelAxis.md#max) 后无效。 **示例：**

```
boundaryGap: ['20%', '20%']
```

### parallelAxisDefault.min
- **Type**: `number|string|Function`

坐标轴刻度最小值。

可以设置成特殊值 `'dataMin'`，此时取数据在该轴上的最小值作为最小刻度。

不设置时会自动计算最小值保证坐标轴刻度的均匀分布。

*   如果 [axis.type](../option.md#.type) 是 `'value'` 或 `'log'`，则使用 `number` 类型的值。
    
*   如果 [axis.type](../option.md#.type) 是 `'category'`，值可以是：
    
    *   原始字符串，例如 `'categoryA'`、`'categoryB'`。
    *   序号。例如，如果类目轴定义为 `data: ['categoryA', 'categoryB', 'categoryC']`，则序号 `2` 表示 `'categoryC'`（从 `0` 开始计数）。此外，也可以设置为负数，例如 `-3`。
*   如果 [axis.type](../option.md#.type) 是 `'time'`，值可以是：
    
    *   `string` 类型，表示任意能被 [方法 `parseDate` (`echarts/src/util/number.ts`)](https://github.com/apache/echarts/blob/master/src/util/number.ts) 解析的时间格式，例如 `'2024-04-09 13:00:00'`。
    *   `number` 类型，表示时间戳，例如 `1712667600000`。
    *   `Date` 类型的时间对象，例如 `new Date('2024-04-09T13:00:00Z')`。

当设置成 `function` 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值。如：

```
min: function (value) {
    return value.min - 20;
}
```

其中 `value` 是一个包含 `min` 和 `max` 的对象，分别表示数据的最大最小值，这个函数可返回坐标轴的最小值，也可返回 `null`/`undefined` 来表示“自动计算最小值”（返回 `null`/`undefined` 从 `v4.8.0` 开始支持）。

### parallelAxisDefault.max
- **Type**: `number|string|Function`

坐标轴刻度最大值。

可以设置成特殊值 `'dataMax'`，此时取数据在该轴上的最大值作为最大刻度。

不设置时会自动计算最大值保证坐标轴刻度的均匀分布。

*   如果 [axis.type](../option.md#.type) 是 `'value'` 或 `'log'`，则使用 `number` 类型的值。
    
*   如果 [axis.type](../option.md#.type) 是 `'category'`，值可以是：
    
    *   原始字符串，例如 `'categoryA'`、`'categoryB'`。
    *   序号。例如，如果类目轴定义为 `data: ['categoryA', 'categoryB', 'categoryC']`，则序号 `2` 表示 `'categoryC'`（从 `0` 开始计数）。此外，也可以设置为负数，例如 `-3`。
*   如果 [axis.type](../option.md#.type) 是 `'time'`，值可以是：
    
    *   `string` 类型，表示任意能被 [方法 `parseDate` (`echarts/src/util/number.ts`)](https://github.com/apache/echarts/blob/master/src/util/number.ts) 解析的时间格式，例如 `'2024-04-09 13:00:00'`。
    *   `number` 类型，表示时间戳，例如 `1712667600000`。
    *   `Date` 类型的时间对象，例如 `new Date('2024-04-09T13:00:00Z')`。

当设置成 `function` 形式时，可以根据计算得出的数据最大最小值设定坐标轴的最小值。如：

```
max: function (value) {
    return value.max - 20;
}
```

其中 `value` 是一个包含 `min` 和 `max` 的对象，分别表示数据的最大最小值，这个函数可返回坐标轴的最大值，也可返回 `null`/`undefined` 来表示“自动计算最大值”（返回 `null`/`undefined` 从 `v4.8.0` 开始支持）。

### parallelAxisDefault.scale
- **Type**: `boolean`
- **Default**: `false`

只在数值轴中（[type](option.parallelAxis.md#type): 'value'）有效。

是否是脱离 0 值比例。设置成 `true` 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。

在设置 [min](option.parallelAxis.md#min) 和 [max](option.parallelAxis.md#max) 之后该配置项无效。

### parallelAxisDefault.splitNumber
- **Type**: `number`
- **Default**: `5`

坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。

在类目轴中无效。

### parallelAxisDefault.minInterval
- **Type**: `number`
- **Default**: `0`

自动计算的坐标轴最小间隔大小。

例如可以设置成`1`保证坐标轴分割刻度显示成整数。

```
{
    minInterval: 1
}
```

只在数值轴或时间轴中（[type](option.parallelAxis.md#type): 'value' 或 'time'）有效。

### parallelAxisDefault.maxInterval
- **Type**: `number`

自动计算的坐标轴最大间隔大小。

例如，在时间轴（（[type](option.parallelAxis.md#type): 'time'））可以设置成 `3600 * 24 * 1000` 保证坐标轴分割刻度最大为一天。

```
{
    maxInterval: 3600 * 24 * 1000
}
```

只在数值轴或时间轴中（[type](option.parallelAxis.md#type): 'value' 或 'time'）有效。

### parallelAxisDefault.interval
- **Type**: `number`

强制设置坐标轴分割间隔。

因为 [splitNumber](option.parallelAxis.md#splitNumber) 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 [min](option.parallelAxis.md#min)、[max](option.parallelAxis.md#max) 强制设定刻度划分，一般不建议使用。

无法在类目轴中使用。在时间轴（[type](option.parallelAxis.md#type): 'time'）中需要传时间戳，在对数轴（[type](option.parallelAxis.md#type): 'log'）中需要传指数值。

### parallelAxisDefault.logBase
- **Type**: `number`
- **Default**: `10`

对数轴的底数，只在对数轴中（[type](option.parallelAxis.md#type): 'log'）有效。

### parallelAxisDefault.startValue
- **Type**: `number`

从 `v5.5.1` 开始支持

用于指定轴的起始值。

### parallelAxisDefault.silent
- **Type**: `boolean`
- **Default**: `false`

坐标轴是否是静态无法交互。

### parallelAxisDefault.triggerEvent
- **Type**: `boolean`
- **Default**: `false`

坐标轴的标签是否响应和触发鼠标事件，默认不响应。

事件参数如下：

```
{
    // 组件类型，xAxis, yAxis, radiusAxis, angleAxis
    // 对应组件类型都会有一个属性表示组件的 index，例如 xAxis 就是 xAxisIndex
    componentType: string,
    // 未格式化过的刻度值, 点击刻度标签有效
    value: '',
    // 坐标轴名称, 点击坐标轴名称有效
    name: ''
}
```

### parallelAxisDefault.axisLine
- **Type**: `Object`

坐标轴轴线相关设置。

#### parallelAxisDefault.axisLine.show
- **Type**: `boolean`
- **Default**: `true`

是否显示坐标轴轴线。

#### parallelAxisDefault.axisLine.symbol
- **Type**: `string|Array`
- **Default**: `'none'`

轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，即 `'none'`。两端都显示箭头可以设置为 `'arrow'`，只在末端显示箭头可以设置为 `['none', 'arrow']`。

#### parallelAxisDefault.axisLine.symbolSize
- **Type**: `Array`
- **Default**: `[10, 15]`

轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向）。

#### parallelAxisDefault.axisLine.symbolOffset
- **Type**: `Array|number`
- **Default**: `[0, 0]`

轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移。

##### parallelAxisDefault.axisLine.lineStyle.color
- **Type**: `Color`
- **Default**: `'#333'`

坐标轴线线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

##### parallelAxisDefault.axisLine.lineStyle.width
- **Type**: `number`
- **Default**: `1`

坐标轴线线宽。

##### parallelAxisDefault.axisLine.lineStyle.type
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

##### parallelAxisDefault.axisLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### parallelAxisDefault.axisLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### parallelAxisDefault.axisLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### parallelAxisDefault.axisLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### parallelAxisDefault.axisLine.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### parallelAxisDefault.axisLine.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### parallelAxisDefault.axisLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### parallelAxisDefault.axisLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### parallelAxisDefault.axisLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### parallelAxisDefault.axisTick
- **Type**: `Object`

坐标轴刻度相关设置。

#### parallelAxisDefault.axisTick.show
- **Type**: `boolean`
- **Default**: `true`

是否显示坐标轴刻度。

#### parallelAxisDefault.axisTick.alignWithLabel
- **Type**: `boolean`
- **Default**: `false`

类目轴中在 `boundaryGap` 为 `true` 的时候有效，可以保证刻度线和标签对齐。如下图：

![](../../documents/asset/img/axis-align-with-label.png)

#### parallelAxisDefault.axisTick.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴刻度的显示间隔，在类目轴中有效。默认同 [axisLabel.interval](option.parallelAxis.md#axisLabel.interval) 一样。

默认会采用标签不重叠的策略间隔显示标签。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示隔两个标签显示一个标签，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

#### parallelAxisDefault.axisTick.inside
- **Type**: `boolean`
- **Default**: `false`

坐标轴刻度是否朝内，默认朝外。

#### parallelAxisDefault.axisTick.length
- **Type**: `number`
- **Default**: `5`

坐标轴刻度的长度。

#### parallelAxisDefault.axisTick.lineStyle
- **Type**: `Object`

刻度线的样式设置。

##### parallelAxisDefault.axisTick.lineStyle.color
- **Type**: `Color`

刻度线的颜色，默认取 [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color)。

##### parallelAxisDefault.axisTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

坐标轴刻度线宽。

##### parallelAxisDefault.axisTick.lineStyle.type
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

##### parallelAxisDefault.axisTick.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### parallelAxisDefault.axisTick.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### parallelAxisDefault.axisTick.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### parallelAxisDefault.axisTick.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### parallelAxisDefault.axisTick.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### parallelAxisDefault.axisTick.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### parallelAxisDefault.axisTick.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### parallelAxisDefault.axisTick.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### parallelAxisDefault.axisTick.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

#### parallelAxisDefault.axisTick.customValues
- **Type**: `Array`

从 `v5.5.1` 开始支持

自定义要显示的坐标轴刻度位置。例如：

```
axisTick: {
    alignWithLabel: true,
    customValues: [0, 0.5, 1, 1.5, 2, 8, 9]
}
```

![](../../documents/asset/img/axis-tick-label-custom-values.png)

### parallelAxisDefault.minorTick
- **Type**: `Object`

从 `v4.6.0` 开始支持

坐标轴次刻度线相关设置。

注意：次刻度线无法在类目轴（[type](option.parallelAxis.md#type): `'category'`）中使用。

示例：

1) 函数绘图中使用次刻度线

2) 在对数轴中使用次刻度线

#### parallelAxisDefault.minorTick.show
- **Type**: `boolean`
- **Default**: `false`

是否显示次刻度线。

#### parallelAxisDefault.minorTick.splitNumber
- **Type**: `number`
- **Default**: `5`

次刻度线分割数，默认会分割成 5 段

#### parallelAxisDefault.minorTick.length
- **Type**: `number`
- **Default**: `3`

次刻度线的长度。

##### parallelAxisDefault.minorTick.lineStyle.color
- **Type**: `Color`

刻度线的颜色，默认取 [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color)。

##### parallelAxisDefault.minorTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

次刻度线线宽。

##### parallelAxisDefault.minorTick.lineStyle.type
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

##### parallelAxisDefault.minorTick.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### parallelAxisDefault.minorTick.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

##### parallelAxisDefault.minorTick.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

##### parallelAxisDefault.minorTick.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

##### parallelAxisDefault.minorTick.lineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### parallelAxisDefault.minorTick.lineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

##### parallelAxisDefault.minorTick.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

##### parallelAxisDefault.minorTick.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

##### parallelAxisDefault.minorTick.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### parallelAxisDefault.axisLabel
- **Type**: `Object`

坐标轴刻度标签的相关设置。

#### parallelAxisDefault.axisLabel.show
- **Type**: `boolean`
- **Default**: `true`

是否显示刻度标签。

#### parallelAxisDefault.axisLabel.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴刻度标签的显示间隔，在类目轴中有效。

默认会采用标签不重叠的策略间隔显示标签。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示隔两个标签显示一个标签，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

#### parallelAxisDefault.axisLabel.inside
- **Type**: `boolean`
- **Default**: `false`

刻度标签是否朝内，默认朝外。

#### parallelAxisDefault.axisLabel.rotate
- **Type**: `number`
- **Default**: `0`

刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。

旋转的角度从 -90 度到 90 度。

#### parallelAxisDefault.axisLabel.margin
- **Type**: `number`
- **Default**: `8`

刻度标签与轴线之间的距离。

#### parallelAxisDefault.axisLabel.formatter
- **Type**: `string|Function`

刻度标签的内容格式器，支持字符串模板和回调函数两种形式。

示例:

```
// 使用字符串模板，模板变量为刻度默认标签 {value}
formatter: '{value} kg'
// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
formatter: function (value, index, extra?) {
    return value + 'kg';
}
```

* * *

  

**如果使用了 [axis break](parallelAxis.breaks)**

break 信息可以在参数 `extra` 里被获取：

```
type AxisLabelFormatterExtraBreakPart = {
    // 如果这个 label 是 break 的 start 或者 end
    break?: {
        type: 'start' | 'end';
        // 这是解析过的 `start`/`end` 值，必然为 number，且进行过排序和重叠
        // 去除，所以不一定和原先输入的 `start`/`end` 的类型和值相同。
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

注意：使用前需要判空。

* * *

  

**对于时间轴（[`parallelAxis.type: 'time'`](option.parallelAxis.md#type)）**

`formatter` 的字符串模板支持多种形式：

*   **字符串模板**：简单快速实现常用日期时间模板，`string` 类型
*   **回调函数**：自定义 formatter，可以用来实现复杂高级的格式，`Function` 类型
*   **分级模板**：为不同时间粒度的标签使用不同的 formatter，`object` 类型

下面我们分别介绍这三种形式。

**字符串模板**

使用字符串模板是一种方便实现常用日期时间格式化方式的形式。如果字符串模板可以实现你的效果，那我们优先推荐使用此方式；如果无法实现，再考虑其他两种更复杂的方式。支持的模板如下：

| 分类 | 模板 | 取值（英文） | 取值（中文） |
| --- | --- | --- | --- |
| Year | {yyyy} | e.g., 2020, 2021, ... | 例：2020, 2021, ... |
|  | {yy} | 00-99 | 00-99 |
| Quarter | {Q} | 1, 2, 3, 4 | 1, 2, 3, 4 |
| Month | {MMMM} | e.g., January, February, ... | 一月、二月、…… |
|  | {MMM} | e.g., Jan, Feb, ... | 1月、2月、…… |
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

> 其他语言请参考相应[语言包](https://github.com/apache/echarts/tree/master/src/i18n)中的定义，语言包可以通过 [echarts.registerLocale](../api-parts/api.echarts.md#registerLocale) 注册。

示例:

```
formatter: '{yyyy}-{MM}-{dd}' // 得到的 label 形如：'2020-12-02'
formatter: '{d}日' // 得到的 label 形如：'2日'
```

**回调函数**

回调函数可以根据刻度值返回不同的格式，如果有复杂的时间格式化需求，也可以引用第三方的日期时间相关的库（如 [Moment.js](https://momentjs.com/)、[date-fns](https://date-fns.org/) 等），返回显示的文本。

示例：

```
// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
formatter: function (value, index) {
    // 格式化成月/日，只在第一个刻度显示年份
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (index === 0) {
        texts.unshift(date.getFullYear());
    }
    return texts.join('/');
}

// 另外，`echarts.time.format` 也可以被使用：
formatter: function (value, index) {
    // 时间模版的规则如上描述。
    const timeStrLocal = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}');
    // 第三个参数表示，基于 UTC 解析时间。
    const timeStrUTC = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}', true);
    // 注意：如果使用 UTC，https://echarts.apache.org/zh/option.html#useUTC 也要设置为 `true`，保持一致。
    return timeStrLocal;
}
```

**分级模板**

有时候，我们希望对不同的时间粒度采用不同的格式化策略。例如，在季度图表中，我们可能希望对每个月的第一天显示月份，而其他日期显示日期。我们可以使用以下方式实现该效果：

示例：

```
formatter: {
    month: '{MMMM}', // 一月、二月、……
    day: '{d}日' // 1日、2日、……
}
```

支持的分级以及各自默认的取值为：

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

以 `day` 为例，当一个刻度点的值的小时、分钟、秒、毫秒都为 `0` 时，将采用 `day` 的分级值作为模板。`none` 表示当其他规则都不适用时采用的模板，也就是带有毫秒值的刻度点的模板。

**富文本**

以上这三种形式的 formatter 都支持富文本，所以可以做成一些复杂的效果。

示例：

```
xAxis: {
    type: 'time',
    axisLabel: {
        formatter: {
            // 一年的第一个月显示年度信息和月份信息
            year: '{yearStyle|{yyyy}}\n{monthStyle|{MMM}}',
            month: '{monthStyle|{MMM}}'
        },
        rich: {
            yearStyle: {
                // 让年度信息更醒目
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

使用回调函数形式实现上面例子同样的效果：

示例：

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
            // 判断一个刻度值知否为一年的开始
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

#### parallelAxisDefault.axisLabel.showMinLabel
- **Type**: `boolean`

是否显示最小 tick 的 label。可取值 `true`, `false`, `null`。默认自动判定（即如果标签重叠，不会显示最小 tick 的 label）。

#### parallelAxisDefault.axisLabel.showMaxLabel
- **Type**: `boolean`

是否显示最大 tick 的 label。可取值 `true`, `false`, `null`。默认自动判定（即如果标签重叠，不会显示最大 tick 的 label）。

#### parallelAxisDefault.axisLabel.hideOverlap
- **Type**: `boolean`

从 `v5.2.0` 开始支持

是否隐藏重叠的标签。

#### parallelAxisDefault.axisLabel.customValues
- **Type**: `Array`

从 `v5.5.1` 开始支持

自定义要显示的标签位置。例如：

```
axisLabel: {
    customValues: [0, 4, 7, 8, 9]
}
```

![](../../documents/asset/img/axis-tick-label-custom-values.png)

#### parallelAxisDefault.axisLabel.color
- **Type**: `Color|Function`

刻度标签文字的颜色，默认取 [axisLine.lineStyle.color](option.parallelAxis.md#axisLine.lineStyle.color)。支持回调函数，格式如下

```
(val: string) => Color
```

参数是标签的文本，返回颜色值，如下示例：

```
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```

#### parallelAxisDefault.axisLabel.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### parallelAxisDefault.axisLabel.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### parallelAxisDefault.axisLabel.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### parallelAxisDefault.axisLabel.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### parallelAxisDefault.axisLabel.align
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

#### parallelAxisDefault.axisLabel.verticalAlign
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

#### parallelAxisDefault.axisLabel.lineHeight
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

#### parallelAxisDefault.axisLabel.backgroundColor
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

#### parallelAxisDefault.axisLabel.borderColor
- **Type**: `Color`

文字块边框颜色。

#### parallelAxisDefault.axisLabel.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### parallelAxisDefault.axisLabel.borderType
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

#### parallelAxisDefault.axisLabel.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### parallelAxisDefault.axisLabel.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### parallelAxisDefault.axisLabel.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### parallelAxisDefault.axisLabel.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### parallelAxisDefault.axisLabel.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### parallelAxisDefault.axisLabel.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### parallelAxisDefault.axisLabel.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### parallelAxisDefault.axisLabel.width
- **Type**: `number`

文本显示宽度。

#### parallelAxisDefault.axisLabel.height
- **Type**: `number`

文本显示高度。

#### parallelAxisDefault.axisLabel.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

#### parallelAxisDefault.axisLabel.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### parallelAxisDefault.axisLabel.textBorderType
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

#### parallelAxisDefault.axisLabel.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### parallelAxisDefault.axisLabel.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### parallelAxisDefault.axisLabel.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### parallelAxisDefault.axisLabel.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### parallelAxisDefault.axisLabel.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### parallelAxisDefault.axisLabel.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### parallelAxisDefault.axisLabel.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### parallelAxisDefault.axisLabel.rich
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

详情参见教程：[富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### parallelAxisDefault.axisLabel.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

###### parallelAxisDefault.axisLabel.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### parallelAxisDefault.axisLabel.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### parallelAxisDefault.axisLabel.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### parallelAxisDefault.axisLabel.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### parallelAxisDefault.axisLabel.rich.<style_name>.align
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

###### parallelAxisDefault.axisLabel.rich.<style_name>.verticalAlign
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

###### parallelAxisDefault.axisLabel.rich.<style_name>.lineHeight
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

###### parallelAxisDefault.axisLabel.rich.<style_name>.backgroundColor
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

###### parallelAxisDefault.axisLabel.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

###### parallelAxisDefault.axisLabel.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### parallelAxisDefault.axisLabel.rich.<style_name>.borderType
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

###### parallelAxisDefault.axisLabel.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### parallelAxisDefault.axisLabel.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### parallelAxisDefault.axisLabel.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### parallelAxisDefault.axisLabel.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### parallelAxisDefault.axisLabel.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### parallelAxisDefault.axisLabel.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### parallelAxisDefault.axisLabel.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### parallelAxisDefault.axisLabel.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### parallelAxisDefault.axisLabel.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textBorderType
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

###### parallelAxisDefault.axisLabel.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### parallelAxisDefault.axisLabel.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### parallelAxisDefault.axisLabel.richInheritPlainLabel
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

### parallelAxisDefault.data
- **Type**: `Array`

类目数据，在类目轴（[type](option.parallelAxis.md#type): `'category'`）中有效。

如果没有设置 [type](option.parallelAxis.md#type)，但是设置了 `axis.data`，则认为 `type` 是 `'category'`。

如果设置了 [type](option.parallelAxis.md#type) 是 `'category'`，但没有设置 `axis.data`，则 `axis.data` 的内容会自动从 [series.data](../option.md#series.data) 中获取，这会比较方便。不过注意，`axis.data` 指明的是 `'category'` 轴的取值范围。如果不指定而是从 [series.data](../option.md#series.data) 中获取，那么只能获取到 [series.data](../option.md#series.data) 中出现的值。比如说，假如 [series.data](../option.md#series.data) 为空时，就什么也获取不到。

示例：

```
// 所有类目名称列表
data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
// 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
data: [{
    value: '周一',
    // 突出周一
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, '周二', '周三', '周四', '周五', '周六', '周日']
```

#### parallelAxisDefault.data.value
- **Type**: `string`

单个类目名称。

#### parallelAxisDefault.data.textStyle
- **Type**: `Object`

类目标签的文字样式。

##### parallelAxisDefault.data.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

##### parallelAxisDefault.data.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### parallelAxisDefault.data.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### parallelAxisDefault.data.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### parallelAxisDefault.data.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

##### parallelAxisDefault.data.textStyle.align
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

##### parallelAxisDefault.data.textStyle.verticalAlign
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

##### parallelAxisDefault.data.textStyle.lineHeight
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

##### parallelAxisDefault.data.textStyle.backgroundColor
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

##### parallelAxisDefault.data.textStyle.borderColor
- **Type**: `Color`

文字块边框颜色。

##### parallelAxisDefault.data.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

##### parallelAxisDefault.data.textStyle.borderType
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

##### parallelAxisDefault.data.textStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### parallelAxisDefault.data.textStyle.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

##### parallelAxisDefault.data.textStyle.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

##### parallelAxisDefault.data.textStyle.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

##### parallelAxisDefault.data.textStyle.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

##### parallelAxisDefault.data.textStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

##### parallelAxisDefault.data.textStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

##### parallelAxisDefault.data.textStyle.width
- **Type**: `number`

文本显示宽度。

##### parallelAxisDefault.data.textStyle.height
- **Type**: `number`

文本显示高度。

##### parallelAxisDefault.data.textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

##### parallelAxisDefault.data.textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### parallelAxisDefault.data.textStyle.textBorderType
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

##### parallelAxisDefault.data.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### parallelAxisDefault.data.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### parallelAxisDefault.data.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### parallelAxisDefault.data.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### parallelAxisDefault.data.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### parallelAxisDefault.data.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### parallelAxisDefault.data.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

##### parallelAxisDefault.data.textStyle.rich
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

详情参见教程：[富文本标签](../tutorial.md#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### parallelAxisDefault.data.textStyle.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### parallelAxisDefault.data.textStyle.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### parallelAxisDefault.data.textStyle.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### parallelAxisDefault.data.textStyle.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.align
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

###### parallelAxisDefault.data.textStyle.rich.<style_name>.verticalAlign
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

###### parallelAxisDefault.data.textStyle.rich.<style_name>.lineHeight
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

###### parallelAxisDefault.data.textStyle.rich.<style_name>.backgroundColor
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

###### parallelAxisDefault.data.textStyle.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.borderType
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

###### parallelAxisDefault.data.textStyle.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderType
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

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### parallelAxisDefault.data.textStyle.richInheritPlainLabel
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

### parallelAxisDefault.tooltip
- **Type**: `Object`

从 `v5.6.0` 开始支持

坐标轴 tooltip 设置，注意需设置 [triggerEvent](option.parallelAxis.md#triggerEvent) 为 `true` 并启用全局 [option.tooltip](option.tooltip.md) 组件。

#### parallelAxisDefault.tooltip.show
- **Type**: `boolean`
- **Default**: `false`

是否显示提示框组件，默认不启用。

#### parallelAxisDefault.tooltip.position
- **Type**: `string|Array|Function`

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

#### parallelAxisDefault.tooltip.formatter
- **Type**: `string|Function`

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

#### parallelAxisDefault.tooltip.backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

提示框浮层的背景颜色。

#### parallelAxisDefault.tooltip.borderColor
- **Type**: `Color`
- **Default**: `'#333'`

提示框浮层的边框颜色。

#### parallelAxisDefault.tooltip.borderWidth
- **Type**: `number`
- **Default**: `0`

提示框浮层的边框宽。

#### parallelAxisDefault.tooltip.padding
- **Type**: `number`
- **Default**: `5`

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

#### parallelAxisDefault.tooltip.textStyle
- **Type**: `Object`

提示框浮层的文本样式。

##### parallelAxisDefault.tooltip.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

##### parallelAxisDefault.tooltip.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### parallelAxisDefault.tooltip.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### parallelAxisDefault.tooltip.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

##### parallelAxisDefault.tooltip.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

文字的字体大小。

##### parallelAxisDefault.tooltip.textStyle.lineHeight
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

##### parallelAxisDefault.tooltip.textStyle.width
- **Type**: `number`

文本显示宽度。

##### parallelAxisDefault.tooltip.textStyle.height
- **Type**: `number`

文本显示高度。

##### parallelAxisDefault.tooltip.textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

##### parallelAxisDefault.tooltip.textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

##### parallelAxisDefault.tooltip.textStyle.textBorderType
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

##### parallelAxisDefault.tooltip.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

##### parallelAxisDefault.tooltip.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

##### parallelAxisDefault.tooltip.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

##### parallelAxisDefault.tooltip.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

##### parallelAxisDefault.tooltip.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

##### parallelAxisDefault.tooltip.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

##### parallelAxisDefault.tooltip.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### parallelAxisDefault.tooltip.extraCssText
- **Type**: `string`

额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[警告\]: tooltip 是用 HTML 实现的（除非 [tooltip.renderMode](option.tooltip.md#renderMode) 设为 `richText`）。允许用此方式定制 toolbox 外壳的 CSS text。 如果此 CSS text 来自于“不受信任”的来源，必须考虑 **安全风险**。文档 [“安全指南”](https://echarts.apache.org/handbook/zh/best-practices/security) 给出了安全使用建议。

### parallelAxisDefault.animation
- **Type**: `boolean`
- **Default**: `true`

是否开启动画。

### parallelAxisDefault.animationThreshold
- **Type**: `number`
- **Default**: `2000`

是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。

### parallelAxisDefault.animationDuration
- **Type**: `number|Function`
- **Default**: `1000`

初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：

```
animationDuration: function (idx) {
    // 越往后的数据时长越大
    return idx * 100;
}
```

### parallelAxisDefault.animationEasing
- **Type**: `string`
- **Default**: `'cubicOut'`

初始动画的缓动效果。不同的缓动效果可以参考 [缓动示例](https://echarts.apache.org/examples/zh/editor.html?c=line-easing)。

### parallelAxisDefault.animationDelay
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

### parallelAxisDefault.animationDurationUpdate
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

### parallelAxisDefault.animationEasingUpdate
- **Type**: `string`
- **Default**: `'cubicInOut'`

数据更新动画的缓动效果。

### parallelAxisDefault.animationDelayUpdate
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
