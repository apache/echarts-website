# option.series-custom

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## name
- **Type**: `string`

Series name used for displaying in [tooltip](option.tooltip.md) and filtering with [legend](option.legend.md), or updating data and configuration with `setOption`.

## colorBy
- **Type**: `string`
- **Default**: `'series'`

Since `v5.2.0`

The policy to take color from [option.color](../option.md#color). Valid values:

*   `'series'`: assigns the colors in the palette by series, so that all data in the same series are in the same color;
*   `'data'`: assigns colors in the palette according to data items, with each data item using a different color.

## legendHoverLink
- **Type**: `boolean`
- **Default**: `true`

Whether to enable highlighting chart when [legend](option.legend.md) is being hovered.

## coordinateSystem
- **Type**: `string`
- **Default**: `'cartesian2d'`

Specifies another coordinate system component on which this `series-custom` is laid out.

Options:

*   `null`/`undefined`/`'none'`
    
    Not laid out in any coordinate system; instead, laid out independently.
    

*   `'cartesian2d'`
    
    Lay out based on a two-dimensional [rectangular coordinate system (also known as Cartesian coordinate system)](option.grid.md). When multiple `xAxis` or multiple `yAxis` exist within an ECharts instance, the corresponding axes should be specified using [xAxisIndex](option.series-custom.md#xAxisIndex) and [yAxisIndex](option.series-custom.md#yAxisIndex) or [xAxisId](option.series-custom.md#xAxisId) and [yAxisId](option.series-custom.md#yAxisId).
    
    Note: some commonly used series, such as [series-line](option.series-line.md), [series-bar](option.series-bar.md), etc., can not be laid out directly based on [matrix coordinate system](option.matrix.md) or [calendar coordinate system](option.calendar.md), but they can be laid out on a [grid(Cartesian)](option.grid.md), and that [grid](option.grid.md) can be laid out on a [matrix](option.matrix.md) or [calendar](option.calendar.md).
    

*   `'polar'`
    
    Lay out based on a [polar coordinate system](option.polar.md). When multiple polar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [polarIndex](option.series-custom.md#polarIndex) or [polarId](option.series-custom.md#polarId).
    

*   `'geo'`
    
    Lay out based on a [geographic coordinate system](option.geo.md). When multiple geographic coordinate systems exist within an ECharts instance, the corresponding system should be specified using [geoIndex](option.series-custom.md#geoIndex) or [geoId](option.series-custom.md#geoId).
    

*   `'singleAxis'`
    
    Lay out based on a [singleAxis coordinate system](option.singleAxis.md). When multiple singleAxis coordinate systems exist within an ECharts instance, the corresponding system should be specified using [singleAxisIndex](option.series-custom.md#polarIndex) or [singleAxisId](option.series-custom.md#polarId).
    

*   `'calendar'`
    
    Lay out based on a [calendar coordinate system](option.calendar.md). When multiple calendar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [calendarIndex](option.series-custom.md#calendarIndex) or [calendarId](option.series-custom.md#calendarId).
    

*   `'matrix'`
    
    Lay out based on a [matrix coordinate system](option.matrix.md). When multiple matrix coordinate systems exist within an ECharts instance, the corresponding system should be specified using [matrixIndex](option.series-custom.md#matrixIndex) or [matrixId](option.series-custom.md#matrixId).
    

**Support for series and component layout on coordinate systems:**

The leftmost column lists the series and components that will be laid out (coordinate systems themselves are also components), and the topmost row lists the coordinate systems that can be laid out on.

|  | no coord sys | [grid](option.grid.md) (cartesian2d) | [polar](option.polar.md) | [geo](option.geo.md) | [singleAxis](option.singleAxis.md) | [radar](option.radar.md) | [parallel](option.parallel.md) | [calendar](option.calendar.md) | [matrix](option.matrix.md) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [grid](option.grid.md) (cartesian2d) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [polar](option.polar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [geo](option.geo.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [singleAxis](option.singleAxis.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [calendar](option.calendar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [matrix](option.matrix.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [series-line](option.series-line.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-bar](option.series-bar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-pie](option.series-pie.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-scatter](option.series-scatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-effectScatter](option.series-effectScatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-radar](option.series-radar.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (✅ if via [radar](option.radar.md) coord sys) | ❌ (✅ if via [radar](option.radar.md) coord sys) |
| [series-tree](option.series-tree.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-treemap](option.series-treemap.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sunburst](option.series-sunburst.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-boxplot](option.series-boxplot.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-candlestick](option.series-candlestick.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-heatmap](option.series-heatmap.md) | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-map](option.series-map.md) | ✅ (create a geo coord sys exclusively) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-parallel](option.series-parallel.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ (✅ if via [parallel](option.parallel.md) coord sys) | ❌ (✅ if via [parallel](option.parallel.md) coord sys) |
| [series-lines](option.series-lines.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [geo](option.geo.md)) | ❌ (✅ if via another coord sys like [geo](option.geo.md)) |
| [series-graph](option.series-graph.md) | ✅ (create a "view" coord sys exclusively) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sankey](option.series-sankey.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-funnel](option.series-funnel.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-gauge](option.series-gauge.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-pictorialBar](option.series-pictorialBar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-themeRiver](option.series-themeRiver.md) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [singleAxis](option.singleAxis.md)) | ❌ (✅ if via another coord sys like [singleAxis](option.singleAxis.md)) |
| [series-chord](option.series-chord.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [title](option.title.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [legend](option.legend.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [dataZoom](../option.md#dataZoom) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [visualMap](../option.md#visualMap) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [toolbox](option.toolbox.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [timeline](option.timeline.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [thumbnail](option.thumbnail.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

See also [series-custom.coordinateSystemUsage](option.series-custom.md#coordinateSystemUsage).

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'data'`

Since `v6.0.0`

Specify how to lay out this `series-custom` based on the specified [coordinateSystem](option.series-custom.md#coordinateSystem).

In most cases, there is no need to specify `coordinateSystemUsage`, unless the default behavior is unexpected.

Options:

*   `'data'`:
    
    Each data item of a series (e.g., each `series.data[i]`) is laid out separately based on the specified coordinate system. Currently no non-series component supports `coordinateSystemUsage: 'data'`.
    
*   `'box'`: **(Not applicable in [series-custom](option.series-custom.md))**
    
    The entire series or component is laid out as a whole based on the specified coordinate system - that is, the overall bounding rect or basic anchor point is calculated relative to the system.
    
    *   For example, a [grid component](option.grid.md) can be laid out in a [matrix coordinate system](option.matrix.md) or a [calendar coordinate system](option.calendar.md), where its layout rectangle is calculated by the specified [series-custom.coords](option.series-custom.md#coords) in that system. See example [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1).
    *   For example, a [pie series](option.series-pie.md) or a [chord series](option.series-chord.md) can be laid out in a [geo coordinate system](option.geo.md) or a [cartesian2d coordinate system](option.grid.md), where the center is calculated by the specified [series-pie.coords](option.series-pie.md#coords) or [series-pie.center](option.series-pie.md#center) in that system. See example [pie in geo](https://echarts.apache.org/examples/en/editor.html?c=map-iceland-pie&edit=1&reset=1).

Only a few series support both `coordinateSystemUsage: 'data'` and `coordinateSystemUsage: 'box'`, such as [series-graph](option.series-graph.md), [series-map](option.series-map.md). For examle, in [this example (coordinateSystemUsage: 'data')](https://echarts.apache.org/examples/en/editor.html?c=matrix-graph&edit=1&reset=1), each node of a graph series is laid out on a matrix coordinate system, while in [this example (coordinateSystemUsage: 'box')](https://echarts.apache.org/examples/en/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1), the entire graph series is laid out within a matrix cell.

Most series only support `coordinateSystemUsage: 'data'` - such as [series-line](option.series-line.md), [series-bar](option.series-bar.md), [series-scatter](option.series-scatter.md), etc. Meanwhile, some series only support `coordinateSystemUsage: 'box'` - such as [series-pie](option.series-pie.md) ([example: pie in geo](https://echarts.apache.org/examples/en/editor.html?c=map-iceland-pie&edit=1&reset=1)), [series-tree](option.series-pie.md), [series-treemap](option.series-treemap.md), [series-sankey](option.series-sankey.md), etc.

See also [series-custom.coordinateSystem](option.series-custom.md#coordinateSystem).

## coord
- **Type**: `Array|number|string`

Since `v6.0.0`

When [coordinateSystemUsage](option.series-custom.md#coordinateSystemUsage) is `'box'`, `coord` is used as the input to the coordinate system and calculate the layout rectangle or anchor point.

Examples: [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1), [grpah in matrix](https://echarts.apache.org/examples/en/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> Note: when [coordinateSystemUsage](option.series-custom.md#coordinateSystemUsage) is `'data'`, the input of coordinate system is `series.data[i]` rather than this `coord`.

The format this `coord` is defined by each coordinate system, and it's the same as the second parameter of [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel).

## xAxisIndex
- **Type**: `number`
- **Default**: `0`

The index of the [xAxis](option.xAxis.md) to base on. When mutiple `xAxis` components exist within an ECharts instance, use this to specify the corresponding `xAxis`.

## xAxisId
- **Type**: `number`
- **Default**: `undefined`

The id of the [xAxis](option.xAxis.md) to base on. When mutiple `xAxis` components exist within an ECharts instance, use this to specify the corresponding `xAxis`.

## yAxisIndex
- **Type**: `number`
- **Default**: `0`

The index of the [yAxis](option.yAxis.md) to base on. When mutiple `yAxis` components exist within an ECharts instance, use this to specify the corresponding `yAxis`.

## yAxisId
- **Type**: `number`
- **Default**: `undefined`

The index of the [yAxis](option.yAxis.md) to base on. When mutiple `yAxis` components exist within an ECharts instance, use this to specify the corresponding `yAxis`.

## polarIndex
- **Type**: `number`
- **Default**: `0`

The index of the [polar coordinate system](option.polar.md) to base on. When mutiple `polar` exist within an ECharts instance, use this to specify the corresponding `polar`.

## polarId
- **Type**: `number`
- **Default**: `undefined`

The id of the [polar coordinate system](option.polar.md) to base on. When mutiple `polar` exist within an ECharts instance, use this to specify the corresponding `polar`.

## singleAxisIndex
- **Type**: `number`
- **Default**: `0`

The index of the [singleAxis coordinate system](option.singleAxis.md) to base on. When mutiple `singleAxis` exist within an ECharts instance, use this to specify the corresponding `singleAxis`.

## singleAxisId
- **Type**: `number`
- **Default**: `undefined`

The id of the [singleAxis coordinate system](option.singleAxis.md) to base on. When mutiple `singleAxis` exist within an ECharts instance, use this to specify the corresponding `singleAxis`.

## geoIndex
- **Type**: `number`
- **Default**: `0`

The index of the [geographic coordinate system](option.geo.md) to base on. When mutiple `geographic` exist within an ECharts instance, use this to specify the corresponding `geographic`.

**See example**: [geo-choropleth-scatter](https://echarts.apache.org/examples/en/editor.html?c=geo-choropleth-scatter&reset=1&edit=1)

## geoId
- **Type**: `number`
- **Default**: `undefined`

The id of the [geographic coordinate system](option.geo.md) to base on. When mutiple `geographic` exist within an ECharts instance, use this to specify the corresponding `geographic`.

**See example**: [geo-choropleth-scatter](https://echarts.apache.org/examples/en/editor.html?c=geo-choropleth-scatter&reset=1&edit=1)

## calendarIndex
- **Type**: `number`
- **Default**: `0`

The index of the [calendar coordinate system](option.calendar.md) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## calendarId
- **Type**: `number`
- **Default**: `undefined`

The id of the [calendar coordinate system](option.calendar.md) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## matrixIndex
- **Type**: `number`
- **Default**: `0`

The index of the [matrix coordinate system](option.matrix.md) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.

## matrixId
- **Type**: `number`
- **Default**: `undefined`

The id of the [matrix coordinate system](option.matrix.md) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.

## renderItem
- **Type**: `Function|string`

`custom series` requires developers to write a rendering logic by themselves in the form of `Function`, or use a registered rendering logic in the form of `string` (since `v6.0.0`; See [echarts.registerCustomSeries](../api-parts/api.echarts.md#registerCustomSeries) for more information). This render logic is called [renderItem](option.series-custom.md#renderItem).

For example:

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

[renderItem](option.series-custom.md#renderItem) will be called on each data item.

[renderItem](option.series-custom.md#renderItem) provides two parameters:

*   [params](option.series-custom.md#renderItem.arguments.params): provides info about the current series and data and coordinate system.
*   [api](option.series-custom.md#renderItem.arguments.api): includes some methods.

[renderItem](option.series-custom.md#renderItem) method should returns graphic elements definitions.See [renderItem.return](option.series-custom.md#renderItem.return).

Generally, the main process of [renderItem](option.series-custom.md#renderItem) is that retrieve value from data and convert them to graphic elements on the current coordinate system. Two methods in [renderItem.arguments.api](option.series-custom.md#renderItem.arguments.api) are always used in this procedure:

*   [api.value(...)](option.series-custom.md#renderItem.arguments.api.value) is used to retrieve value from data. For example, `api.value(0)` retrieve the value of the first dimension in the current data item.
*   [api.coord(...)](option.series-custom.md#renderItem.arguments.api.coord) is used to convert data to coordinate. For example, `var point = api.coord([api.value(0), api.value(1)])` converet the data to the point on the current coordinate system.

Sometimes [api.size(...)](option.series-custom.md#renderItem.arguments.api.size) method is needed, which calculates the size on the coordinate system by a given data range.

Moreover, [api.style(...)](option.series-custom.md#renderItem.arguments.api.style) method can be used to set style. It provides not only the style settings specified in [series.itemStyle](option.series-custom.md#itemStyle), but also the result of visual mapping. This method can also be called like `api.style({fill: 'green', stroke: 'yellow'})` to override those style settings.

### renderItem.arguments
- **Type**: `*`

Parameters of `renderItem`.

#### renderItem.arguments.params
- **Type**: `Object`

The first parameter of `renderItem`, including:

```
{
    context: // {string} An object that developers can store something temporarily here. Life cycle: current round of rendering.
    seriesId: // {string} The id of this series.
    seriesName: // {string} The name of this series.
    seriesIndex: // {number} The index of this series.
    dataIndex: // {number} The index of this data item.
    dataIndexInside: // {number} The index of this data item in the current data window (see dataZoom).
    dataInsideLength: // {number} The count of data in the current data window (see dataZoom).
    actionType: // {string} The type of action that trigger this render.
    coordSys: // coordSys is variable by different types of coordinate systems:
    coordSys: {
        type: 'cartesian2d',
        x: // {number} x of grid rect
        y: // {number} y of grid rect
        width: // {number} width of grid rect
        height: // {number} height of grid rect
    },
    coordSys: {
        type: 'calendar',
        x: // {number} x of the calendar component rect
        y: // {number} y of the calendar component rect
        width: // {number} width of the calendar component rect
        height: // {number} height of the calendar component rect
        cellWidth: // {number} calendar cellWidth
        cellHeight: // {number} calendar cellHeight
        rangeInfo: {
            start: // date start of calendar.
            end: // date end of calendar.
            weeks: // number of weeks in calendar.
            dayCount: // day count in calendar.
        }
    },
    coordSys: {
        type: 'matrix',
        x: // {number} x of the matrix component rect
        y: // {number} y of the matrix component rect
        width: // {number} width of the matrix component rect
        height: // {number} height of the matrix component rect
    },
    coordSys: {
        type: 'geo',
        x: // {number} x of geo rect
        y: // {number} y of geo rect
        width: // {number} width of geo rect
        height: // {number} height of geo rect
        zoom: // {number} zoom ratio, 1 if no zoom, 0.5 means shrink to 50%.
    },
    coordSys: {
        type: 'polar',
        cx: // {number} x of polar center.
        cy: // {number} y of polar center.
        r: // {number} outer radius of polar.
        r0: // {number} inner radius of polar.
    },
    coordSys: {
        type: 'singleAxis',
        x: // {number} x of singleAxis rect
        y: // {number} y of singleAxis rect
        width: // {number} width of singleAxis rect
        height: // {number} height of singleAxis rect
    }
}
```

Difference between `dataIndex` and `dataIndexInside`:

*   `dataIndex` is the index of a `dataItem` in the original data.
*   `dataIndexInside` is the index of a `dataItem` in the current data window (see [dataZoom](../option.md#dataZoom).

[renderItem.arguments.api](option.series-custom.md#renderItem.arguments.api) uses `dataIndexInside` as the input parameter but not `dataIndex`, because conversion from `dataIndex` to `dataIndexInside` is time-consuming.

#### renderItem.arguments.api
- **Type**: `Object`

The second parameter of `renderItem`.

##### renderItem.arguments.api.value
- **Type**: `Function`

Get value on the given dimension.

```
@param {number} dimension The given dimension. (index from 0).
@param {number} [dataIndexInside] In most cases it is not necessary.
@return {number} The value.
```

##### renderItem.arguments.api.coord
- **Type**: `Function`

Convert data to coordinate.

The behavior, parameters and returns are the same as [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel) (only exclude its first parameter `finder`).

##### renderItem.arguments.api.layout
- **Type**: `Function`

Since `v6.0.0`

Convert data to the corresponding layout info based on the current coordinate system.

The behavior, parameters and returns are the same as [chart.convertToLayout](../api-parts/api.echartsInstance.md#convertToLayout) (only exclude its first parameter `finder`).

See [matrix api.layout example](https://echarts.apache.org/examples/en/editor.html?c=matrix-mini-bar-data-collection).

##### renderItem.arguments.api.size
- **Type**: `Function`

Get the size by the given data range.

For example, in `cartesian2d`, suppose calling `api.size([2, 4])` returns `[12.4, 55]`. It represents that on x axis, data range `2` corresponds to size `12.4`, and on y axis data range `4` corresponds to size `55`.

In some coordinate systems (for example, polar) or when log axis is used, the size is different in different point. So the second parameter is necessary to calculate size on the given point.

```
@param {Array.<number>} dataSize Data range.
@param {Array.<number>} dataItem The point where the size will be calculated.
@return {Array.<number>} The size.
```

##### renderItem.arguments.api.style
- **Type**: `Function`

The method obtains style info defined in [series.itemStyle](option.series-custom.md#itemStyle), and visual info obtained by visual mapping, and return them. Those returned info can be assigned to `style` attribute of graphic element definition directly. Developers can also override style info by calling this method like this: `api.style({fill: 'green', stroke: 'yellow'})`.

```
@param {Object} [extra] Extra style info.
@param {number} [dataIndexInside] In most cases, this parameter is not necessary.
@return {Object} Style info, which can be assigned to `style` attribute of graphic element definition directly.
```

##### renderItem.arguments.api.styleEmphasis
- **Type**: `Function`

The method obtains style info defined in [series.itemStyle.emphasis](option.series-custom.md#itemStyle.emphasis), and visual info obtained by visual mapping, and return them. Those returned info can be assigned to `style` attribute of graphic element definition directly. Developers can also override style info by calling this method like this: `api.style({fill: 'green', stroke: 'yellow'})`.

```
@param {Object} [extra] Extra style info.
@param {number} [dataIndexInside] In most cases, this parameter is not necessary.
@return {Object} Style info, which can be assigned to `style` attribute of graphic element definition directly.
```

##### renderItem.arguments.api.visual
- **Type**: `Function`

Get the visual info. It is rarely be used.

```
@param {string} visualType 'color', 'symbol', 'symbolSize', ...
@param {number} [dataIndexInside] In most cases, this parameter is not necessary.
@return {string|number} The value of visual.
```

##### renderItem.arguments.api.barLayout
- **Type**: `Function`

When `barLayout` is needed, (for example, when attaching some extra graphic elements to bar chart), this method can be used to obtain bar layout info.

See a [sample](https://echarts.apache.org/examples/en/editor.html?c=custom-bar-trend).

```
@param {Object} opt
@param {number} opt.count How many bars in each group.
@param {number|string} [opt.barWidth] Width of a bar.
        Can be an absolute value like `40` or a percent value like `'60%'`.
        The percent is based on the calculated category width.
@param {number|string} [opt.barMaxWidth] Max width of a bar.
        Can be an absolute value like `40` or a percent value like `'60%'`.
        The percent is based on the calculated category width.
        Has higher priority than `opt.barWidth`.
@param {number|string} [opt.barMinWidth] Min width of a bar.
        Can be an absolute value like `40` or a percent value like `'60%'`.
        The percent is based on the calculated category width.
        Has higher priority than `opt.barWidth`.
@param {number} [opt.barGap] Gap of bars in a group.
@param {number} [opt.barCategoryGap] Gap of groups.
@return {Array.<Object>} [{
        width: {number} Width of a bar.
        offset: {number} Offset of a bar, based on the left most edge.
        offsetCenter: {number} bar Offset of a bar, based on the center of the bar.
    }, ...]
```

##### renderItem.arguments.api.currentSeriesIndices
- **Type**: `Function`

Obtain the current series index. Notice that the `currentSeriesIndex` is different from `seriesIndex` when legend is used to filter some series.

```
@return {number}
```

##### renderItem.arguments.api.font
- **Type**: `Function`

Obtain font string, which can be used on style setting directly.

```
@param {Object} opt
@param {string} [opt.fontStyle]
@param {number} [opt.fontWeight]
@param {number} [opt.fontSize]
@param {string} [opt.fontFamily]
@return {string} font string.
```

##### renderItem.arguments.api.getWidth
- **Type**: `Function`

```
@return {number} Width of echarts container.
```

##### renderItem.arguments.api.getHeight
- **Type**: `Function`

```
@return {number} Height of echarts container.
```

##### renderItem.arguments.api.getZr
- **Type**: `Function`

```
@return {module:zrender} zrender instance.
```

##### renderItem.arguments.api.getDevicePixelRatio
- **Type**: `Function`

```
@return {number} The current devicePixelRatio.
```

### renderItem.return
- **Type**: `Object`

`renderItem` should returns graphic element definitions. Each graphic element is an object. See [graphic](option.graphic.md#elements) for detailed info. (But width\\height\\top\\bottom is not supported here)

If nothing should be rendered in this data item, just returns nothing.

For example:

```
// Returns a rectangular.
{
    type: 'rect',
    shape: {
        x: x, y: y, width: width, height: height
    },
    style: api.style()
}
```

```
// Returns a group of elements.
{
    type: 'group',
    // If diffChildrenByName is set as `true`, `child.name` will be used
    // to diff children, which improves animation transition but degrade
    // performance. The default value is `false`.
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

`group` is the only type that can contain children, so that a group of elements can be positioned and transformed together.

Note that if any of its child is `null`, it means the child no longer exists. So if a group contains an element that is set to be `null/undefined` in a future `setOption` call, it should remove the previous element at the same index. If a child should not change, it should be `{}` in the new option. And a group can only contain children as `null/undefined/{}` if they exist in the previous `setOption`.

#### renderItem.return_group.type
- **Type**: `string`
- **Default**: `group`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_group.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_group.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_group.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_group.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_group.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_group.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_group.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_group.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_group.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_group.shape), ['`style'`](option.series-custom.md#renderItem.return_group.style), [`'extra'`](option.series-custom.md#renderItem.return_group.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_group.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_group.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_group.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_group.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_group.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_group.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_group.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_group.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_group.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_group.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_group.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_group.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_group.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_group.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_group.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_group.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_group.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_group.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_group.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_group.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_group.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_group.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_group.diffChildrenByName).

#### renderItem.return_group.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_group.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_group.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_group.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_group.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_group.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_group.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_group.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_group.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_group.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_group.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_group.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_group.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_group.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_group.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_group.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_group.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

#### renderItem.return_group.width
- **Type**: `number`
- **Default**: `0`

Specify width of this `group`.

This width is only used for the positioning of its children.

When width is `0`, children can also be positioned according to its parent using `left: 'center'`.

#### renderItem.return_group.height
- **Type**: `number`
- **Default**: `0`

Specify height of this `group`.

This height is only used for the positioning of its children.

When height is `0`, children can also be positioned according to its parent using `top: 'middle'`.

#### renderItem.return_group.diffChildrenByName
- **Type**: `boolean`
- **Default**: `false`

In [custom series](option.series-custom.md), when `diffChildrenByName` is set as `true`, for each [group](option.series-custom.md#renderItem.return_group) returned from [renderItem](option.series-custom.md#renderItem), "diff" will be performed to its [children](option.series-custom.md#renderItem.return_group.children) according to the [name](option.series-custom.md#renderItem.return_polygon.name) attribute of each graphic elements. Here "diff" means that map the coming graphic elements to the existing graphic elements when repainting according to `name`, which enables the transition animation if data is modified.

But notice that the operation is performance consuming, do not use it for large data amount.

#### renderItem.return_group.children
- **Type**: `Array`

A list of children, each item is a declaration of an element.

### renderItem.return_path
- **Type**: `Object`

Use [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) to describe a path. Can be used to draw icons or any other shapes fitting the specified size by auto transforming.

See examples: [icons](https://echarts.apache.org/examples/en/editor.html?c=custom-calendar-icon) and [shapes](https://echarts.apache.org/examples/en/editor.html?c=custom-gantt-flight).

About width/height, cover/contain, see [layout](option.series-custom.md#renderItem.return_path.shape.layout).

#### renderItem.return_path.type
- **Type**: `string`
- **Default**: `path`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_path.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_path.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_path.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_path.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_path.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_path.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_path.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_path.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_path.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_path.shape), ['`style'`](option.series-custom.md#renderItem.return_path.style), [`'extra'`](option.series-custom.md#renderItem.return_path.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_path.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_path.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_path.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_path.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_path.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_path.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_path.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_path.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_path.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_path.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_path.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_path.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_path.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_path.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_path.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_path.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_path.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_path.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_path.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_path.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_path.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_path.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_path.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_path.diffChildrenByName).

#### renderItem.return_path.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_path.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_path.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_path.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_path.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_path.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_path.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_path.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_path.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_path.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_path.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_path.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_path.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_path.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_path.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_path.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_path.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_path.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_path.shape.pathData
- **Type**: `string`

[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData).

For example, `'M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z'`.

If [width](option.series-custom.md#renderItem.return_path.shape.width), [height](option.series-custom.md#renderItem.return_path.shape.height), [x](option.series-custom.md#renderItem.return_path.shape.x) and [y](option.series-custom.md#renderItem.return_path.shape.y) specified, `pathData` will be transformed to fit the defined rect. If they are not specified, do not do that.

[layout](option.series-custom.md#renderItem.return_path.shape.layout) can be used to specify the transform strategy.

See examples: [icons](https://echarts.apache.org/examples/en/editor.html?c=custom-calendar-icon) and [shapes](https://echarts.apache.org/examples/en/editor.html?c=custom-gantt-flight).

##### renderItem.return_path.shape.d
- **Type**: `string`

Alias of [pathData](option.series-custom.md#renderItem.return_path.shape.pathData).

##### renderItem.return_path.shape.layout
- **Type**: `string`
- **Default**: `'center'`

If [width](option.series-custom.md#renderItem.return_path.shape.width), [height](option.series-custom.md#renderItem.return_path.shape.height), [x](option.series-custom.md#renderItem.return_path.shape.x) and [y](option.series-custom.md#renderItem.return_path.shape.y) specified, `pathData` will be transformed to fit the defined rect.

`layout` can be used to specify the transform strategy.

Optional value:

*   `'center'`: Keep aspect ratio, put the path in the center of the rect, expand as far as possible but never overflow.
*   `'cover'`: Transform the path according to the aspect ratio of the rect, fill the rect and do not overflow.

##### renderItem.return_path.shape.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_path.shape.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_path.shape.width
- **Type**: `number`
- **Default**: `0`

The width of the shape of the element.

##### renderItem.return_path.shape.height
- **Type**: `number`
- **Default**: `0`

The height of the shape of the element.

##### renderItem.return_path.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_path.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_path.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_path.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_path.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_path.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_path.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_path.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_path.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_path.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_path.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_path.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_path.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_path.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_path.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_path.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_path.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_path.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_path.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_path.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_path.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_path.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_path.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_path.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_path.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_image.type
- **Type**: `string`
- **Default**: `image`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_image.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_image.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_image.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_image.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_image.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_image.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_image.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_image.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_image.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_image.shape), ['`style'`](option.series-custom.md#renderItem.return_image.style), [`'extra'`](option.series-custom.md#renderItem.return_image.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_image.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_image.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_image.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_image.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_image.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_image.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_image.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_image.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_image.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_image.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_image.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_image.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_image.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_image.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_image.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_image.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_image.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_image.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_image.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_image.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_image.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_image.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_image.diffChildrenByName).

#### renderItem.return_image.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_image.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_image.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_image.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_image.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_image.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_image.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_image.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_image.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_image.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_image.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_image.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_image.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_image.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_image.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_image.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_image.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_image.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_image.style.image
- **Type**: `string`

Specify content of the image, can be a URL, or [dataURI](https://tools.ietf.org/html/rfc2397).

##### renderItem.return_image.style.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_image.style.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_image.style.width
- **Type**: `number`
- **Default**: `0`

The width of the shape of the element.

##### renderItem.return_image.style.height
- **Type**: `number`
- **Default**: `0`

The height of the shape of the element.

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_image.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_image.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_image.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_image.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_image.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_image.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_image.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_image.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_image.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_image.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_image.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_image.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_image.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_image.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_image.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_image.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_image.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_image.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_image.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_image.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_image.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_image.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_image.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_text
- **Type**: `Object`

Text block.

#### renderItem.return_text.type
- **Type**: `string`
- **Default**: `text`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_text.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_text.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_text.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_text.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_text.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_text.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_text.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_text.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_text.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_text.shape), ['`style'`](option.series-custom.md#renderItem.return_text.style), [`'extra'`](option.series-custom.md#renderItem.return_text.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_text.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_text.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_text.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_text.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_text.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_text.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_text.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_text.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_text.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_text.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_text.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_text.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_text.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_text.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_text.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_text.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_text.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_text.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_text.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_text.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_text.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_text.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_text.diffChildrenByName).

#### renderItem.return_text.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_text.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_text.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_text.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_text.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_text.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_text.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_text.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_text.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_text.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_text.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_text.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_text.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_text.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_text.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_text.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_text.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_text.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_text.style.text
- **Type**: `string`
- **Default**: `''`

Text content. `\n` can be used as a line break.

##### renderItem.return_text.style.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_text.style.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_text.style.font
- **Type**: `string`

Font size, font type, font weight, font color, follow the form of [css font](https://developer.mozilla.org/en-US/docs/Web/CSS/font).

For example:

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

Text horizontal alignment. Optional values: `'left'`, `'center'`, `'right'`.

`'left'` means the left side of the text block is specified by the [style.x](option.series-custom.md#renderItem.return_text.style.x), while `'right'` means the right side of the text block is specified by [style.y](option.series-custom.md#renderItem.return_text.style.y).

##### renderItem.return_text.style.width
- **Type**: `number`

Text block width. Used for [overflow](option.series-custom.md#renderItem.return_text.style.overflow) calculation.

##### renderItem.return_text.style.overflow
- **Type**: `string`

When the text content exceeds the [width](option.series-custom.md#renderItem.return_text.style.width), the text display strategy is: `'break'`, `'breakAll'`, `'truncate'`, `'none'`.

*   `'break'` is to try to ensure that the complete word is not truncated (similar to `CSS` `word-break: break-word;`)
*   `'breakAll'`: can break at any character
*   `'truncate'`: truncate the text to display '...'，you can use [ellipsis](option.series-custom.md#renderItem.return_text.style.ellipsis) to customize the display of the ellipsis
*   `'none'`: no line break

##### renderItem.return_text.style.ellipsis
- **Type**: `string`

When [overflow](option.series-custom.md#renderItem.return_text.style.overflow) is set to `'truncate'`, the default is `...`.

##### renderItem.return_text.style.textVerticalAlign
- **Type**: `string`

Text vertical alignment. Optional values: `'top'`, `'middle'`, `'bottom'`.

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_text.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_text.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_text.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_text.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_text.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_text.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_text.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_text.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_text.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_text.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_text.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_text.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_text.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_text.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_text.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_text.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_text.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_text.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_text.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_text.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_text.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_text.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_text.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_rect
- **Type**: `Object`

Rectangle element.

#### renderItem.return_rect.type
- **Type**: `string`
- **Default**: `rect`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_rect.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_rect.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_rect.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_rect.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_rect.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_rect.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_rect.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_rect.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_rect.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_rect.shape), ['`style'`](option.series-custom.md#renderItem.return_rect.style), [`'extra'`](option.series-custom.md#renderItem.return_rect.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_rect.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_rect.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_rect.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_rect.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_rect.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_rect.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_rect.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_rect.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_rect.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_rect.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_rect.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_rect.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_rect.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_rect.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_rect.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_rect.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_rect.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_rect.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_rect.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_rect.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_rect.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_rect.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_rect.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_rect.diffChildrenByName).

#### renderItem.return_rect.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_rect.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_rect.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_rect.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_rect.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_rect.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_rect.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_rect.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_rect.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_rect.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_rect.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_rect.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_rect.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_rect.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_rect.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_rect.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_rect.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_rect.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_rect.shape.x
- **Type**: `number`
- **Default**: `0`

The x value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_rect.shape.y
- **Type**: `number`
- **Default**: `0`

The y value of the left-top corner of the element in the coordinate system of its parent.

##### renderItem.return_rect.shape.width
- **Type**: `number`
- **Default**: `0`

The width of the shape of the element.

##### renderItem.return_rect.shape.height
- **Type**: `number`
- **Default**: `0`

The height of the shape of the element.

##### renderItem.return_rect.shape.r
- **Type**: `Array`

Specify border radius of the rectangular here. Generally, `r` should be `[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]`, where each item is a number.

Abbreviation is enabled, for example:

*   `r`: `1` means `[1, 1, 1, 1]`
*   `r`: `[1]` means `[1, 1, 1, 1]`
*   `r`: `[1, 2]` means `[1, 2, 1, 2]`
*   `r`: `[1, 2, 3]` means `[1, 2, 3, 2]`

##### renderItem.return_rect.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_rect.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_rect.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_rect.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_rect.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_rect.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_rect.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_rect.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_rect.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_rect.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_rect.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_rect.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_rect.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_rect.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_rect.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_rect.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_rect.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_rect.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_rect.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_rect.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_rect.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_rect.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_rect.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_rect.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_rect.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_circle
- **Type**: `Object`

Circle element.

#### renderItem.return_circle.type
- **Type**: `string`
- **Default**: `circle`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_circle.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_circle.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_circle.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_circle.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_circle.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_circle.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_circle.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_circle.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_circle.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_circle.shape), ['`style'`](option.series-custom.md#renderItem.return_circle.style), [`'extra'`](option.series-custom.md#renderItem.return_circle.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_circle.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_circle.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_circle.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_circle.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_circle.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_circle.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_circle.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_circle.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_circle.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_circle.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_circle.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_circle.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_circle.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_circle.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_circle.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_circle.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_circle.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_circle.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_circle.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_circle.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_circle.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_circle.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_circle.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_circle.diffChildrenByName).

#### renderItem.return_circle.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_circle.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_circle.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_circle.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_circle.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_circle.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_circle.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_circle.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_circle.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_circle.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_circle.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_circle.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_circle.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_circle.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_circle.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_circle.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_circle.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_circle.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_circle.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

##### renderItem.return_circle.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

##### renderItem.return_circle.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

##### renderItem.return_circle.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_circle.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_circle.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_circle.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_circle.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_circle.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_circle.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_circle.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_circle.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_circle.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_circle.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_circle.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_circle.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_circle.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_circle.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_circle.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_circle.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_circle.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_circle.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_circle.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_circle.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_circle.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_circle.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_circle.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_circle.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_ring
- **Type**: `Object`

Ring element.

#### renderItem.return_ring.type
- **Type**: `string`
- **Default**: `ring`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_ring.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_ring.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_ring.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_ring.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_ring.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_ring.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_ring.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_ring.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_ring.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_ring.shape), ['`style'`](option.series-custom.md#renderItem.return_ring.style), [`'extra'`](option.series-custom.md#renderItem.return_ring.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_ring.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_ring.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_ring.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_ring.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_ring.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_ring.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_ring.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_ring.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_ring.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_ring.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_ring.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_ring.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_ring.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_ring.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_ring.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_ring.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_ring.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_ring.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_ring.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_ring.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_ring.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_ring.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_ring.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_ring.diffChildrenByName).

#### renderItem.return_ring.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_ring.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_ring.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_ring.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_ring.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_ring.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_ring.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_ring.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_ring.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_ring.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_ring.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_ring.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_ring.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_ring.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_ring.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_ring.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_ring.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_ring.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_ring.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

##### renderItem.return_ring.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

##### renderItem.return_ring.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

##### renderItem.return_ring.shape.r0
- **Type**: `number`
- **Default**: `0`

Inside radius.

##### renderItem.return_ring.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_ring.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_ring.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_ring.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_ring.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_ring.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_ring.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_ring.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_ring.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_ring.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_ring.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_ring.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_ring.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_ring.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_ring.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_ring.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_ring.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_ring.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_ring.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_ring.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_ring.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_ring.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_ring.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_ring.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_ring.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_sector
- **Type**: `Object`

Sector element.

#### renderItem.return_sector.type
- **Type**: `string`
- **Default**: `sector`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_sector.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_sector.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_sector.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_sector.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_sector.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_sector.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_sector.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_sector.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_sector.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_sector.shape), ['`style'`](option.series-custom.md#renderItem.return_sector.style), [`'extra'`](option.series-custom.md#renderItem.return_sector.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_sector.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_sector.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_sector.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_sector.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_sector.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_sector.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_sector.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_sector.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_sector.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_sector.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_sector.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_sector.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_sector.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_sector.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_sector.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_sector.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_sector.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_sector.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_sector.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_sector.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_sector.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_sector.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_sector.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_sector.diffChildrenByName).

#### renderItem.return_sector.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_sector.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_sector.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_sector.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_sector.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_sector.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_sector.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_sector.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_sector.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_sector.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_sector.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_sector.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_sector.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_sector.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_sector.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_sector.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_sector.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_sector.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_sector.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

##### renderItem.return_sector.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

##### renderItem.return_sector.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

##### renderItem.return_sector.shape.r0
- **Type**: `number`
- **Default**: `0`

Inside radius.

##### renderItem.return_sector.shape.cornerRadius
- **Type**: `number|Array`

Since `v5.3.0`

The corner radius of the sector.

*   `cornerRadius: 10`: Indicates that both the inner and outer corner radii are 10px.
*   `cornerRadius: [10, 20]`: When applied to a ring chart, the inner corner radius is 10px and the outer corner radius is 20px.
*   `cornerRadius: [5, 10, 15, 20]`: Indicates that the inner corner radii are 5px and 10px, and the outer corner radii are 15px and 20px.

##### renderItem.return_sector.shape.startAngle
- **Type**: `number`
- **Default**: `0`

start angle, in radian.

##### renderItem.return_sector.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

end angle, in radian.

##### renderItem.return_sector.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

Whether draw clockwise.

##### renderItem.return_sector.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_sector.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_sector.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_sector.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_sector.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_sector.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_sector.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_sector.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_sector.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_sector.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_sector.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_sector.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_sector.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_sector.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_sector.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_sector.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_sector.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_sector.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_sector.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_sector.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_sector.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_sector.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_sector.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_sector.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_sector.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_arc
- **Type**: `Object`

Arc element.

#### renderItem.return_arc.type
- **Type**: `string`
- **Default**: `arc`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_arc.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_arc.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_arc.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_arc.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_arc.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_arc.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_arc.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_arc.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_arc.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_arc.shape), ['`style'`](option.series-custom.md#renderItem.return_arc.style), [`'extra'`](option.series-custom.md#renderItem.return_arc.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_arc.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_arc.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_arc.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_arc.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_arc.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_arc.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_arc.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_arc.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_arc.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_arc.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_arc.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_arc.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_arc.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_arc.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_arc.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_arc.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_arc.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_arc.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_arc.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_arc.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_arc.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_arc.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_arc.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_arc.diffChildrenByName).

#### renderItem.return_arc.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_arc.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_arc.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_arc.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_arc.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_arc.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_arc.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_arc.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_arc.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_arc.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_arc.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_arc.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_arc.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_arc.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_arc.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_arc.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_arc.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_arc.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_arc.shape.cx
- **Type**: `number`
- **Default**: `0`

The x value of the center of the element in the coordinate system of its parent.

##### renderItem.return_arc.shape.cy
- **Type**: `number`
- **Default**: `0`

The y value of the center of the element in the coordinate system of its parent.

##### renderItem.return_arc.shape.r
- **Type**: `number`
- **Default**: `0`

Outside radius.

##### renderItem.return_arc.shape.r0
- **Type**: `number`
- **Default**: `0`

Inside radius.

##### renderItem.return_arc.shape.startAngle
- **Type**: `number`
- **Default**: `0`

start angle, in radian.

##### renderItem.return_arc.shape.endAngle
- **Type**: `number`
- **Default**: `Math.PI * 2`

end angle, in radian.

##### renderItem.return_arc.shape.clockwise
- **Type**: `boolean`
- **Default**: `true`

Whether draw clockwise.

##### renderItem.return_arc.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_arc.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_arc.style.fill
- **Type**: `string`

Color filled in this element.

##### renderItem.return_arc.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

Color of stroke.

##### renderItem.return_arc.style.lineWidth
- **Type**: `number`
- **Default**: `1`

Width of stroke.

##### renderItem.return_arc.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_arc.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_arc.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_arc.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_arc.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_arc.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_arc.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_arc.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_arc.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_arc.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_arc.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_arc.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_arc.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_arc.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_arc.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_arc.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_arc.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_arc.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_arc.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_arc.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_polygon
- **Type**: `Object`

Polygon element.

#### renderItem.return_polygon.type
- **Type**: `string`
- **Default**: `polygon`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_polygon.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_polygon.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_polygon.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_polygon.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_polygon.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_polygon.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_polygon.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_polygon.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_polygon.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_polygon.shape), ['`style'`](option.series-custom.md#renderItem.return_polygon.style), [`'extra'`](option.series-custom.md#renderItem.return_polygon.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_polygon.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_polygon.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_polygon.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_polygon.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polygon.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polygon.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_polygon.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_polygon.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polygon.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polygon.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_polygon.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_polygon.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polygon.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polygon.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_polygon.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_polygon.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polygon.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polygon.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_polygon.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_polygon.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_polygon.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_polygon.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_polygon.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_polygon.diffChildrenByName).

#### renderItem.return_polygon.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_polygon.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_polygon.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_polygon.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_polygon.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_polygon.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_polygon.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_polygon.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_polygon.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_polygon.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_polygon.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_polygon.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_polygon.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_polygon.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_polygon.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_polygon.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_polygon.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_polygon.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_polygon.shape.points
- **Type**: `Array`

A list of points, which defines the shape, like `[[22, 44], [44, 55], [11, 44], ...]`.

##### renderItem.return_polygon.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

Whether smooth the line.

*   If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of `[0, 1]`.
*   If the value is `'spline'`, Catmull-Rom spline interpolation is used.

##### renderItem.return_polygon.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

Whether prevent the smooth process cause the line out of the bounding box.

Only works when `smooth` is `number` (bezier smooth).

##### renderItem.return_polygon.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_polygon.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_polygon.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_polygon.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_polygon.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_polygon.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_polygon.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_polygon.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_polygon.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_polygon.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_polygon.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_polygon.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_polygon.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_polygon.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_polygon.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_polygon.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_polygon.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_polygon.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_polygon.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_polygon.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_polygon.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_polygon.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_polygon.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_polygon.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_polygon.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_polyline
- **Type**: `Object`

Polyline element.

#### renderItem.return_polyline.type
- **Type**: `string`
- **Default**: `polyline`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_polyline.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_polyline.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_polyline.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_polyline.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_polyline.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_polyline.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_polyline.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_polyline.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_polyline.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_polyline.shape), ['`style'`](option.series-custom.md#renderItem.return_polyline.style), [`'extra'`](option.series-custom.md#renderItem.return_polyline.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_polyline.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_polyline.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_polyline.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_polyline.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polyline.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polyline.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_polyline.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_polyline.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polyline.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polyline.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_polyline.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_polyline.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polyline.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polyline.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_polyline.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_polyline.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_polyline.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_polyline.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_polyline.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_polyline.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_polyline.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_polyline.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_polyline.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_polyline.diffChildrenByName).

#### renderItem.return_polyline.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_polyline.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_polyline.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_polyline.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_polyline.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_polyline.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_polyline.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_polyline.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_polyline.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_polyline.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_polyline.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_polyline.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_polyline.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_polyline.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_polyline.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_polyline.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_polyline.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_polyline.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_polyline.shape.points
- **Type**: `Array`

A list of points, which defines the shape, like `[[22, 44], [44, 55], [11, 44], ...]`.

##### renderItem.return_polyline.shape.smooth
- **Type**: `number|string`
- **Default**: `undefined`

Whether smooth the line.

*   If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of `[0, 1]`.
*   If the value is `'spline'`, Catmull-Rom spline interpolation is used.

##### renderItem.return_polyline.shape.smoothConstraint
- **Type**: `boolean`
- **Default**: `false`

Whether prevent the smooth process cause the line out of the bounding box.

Only works when `smooth` is `number` (bezier smooth).

##### renderItem.return_polyline.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_polyline.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_polyline.style.fill
- **Type**: `string`

Color filled in this element.

##### renderItem.return_polyline.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

Color of stroke.

##### renderItem.return_polyline.style.lineWidth
- **Type**: `number`
- **Default**: `5`

Width of stroke.

##### renderItem.return_polyline.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_polyline.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_polyline.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_polyline.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_polyline.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_polyline.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_polyline.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_polyline.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_polyline.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_polyline.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_polyline.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_polyline.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_polyline.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_polyline.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_polyline.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_polyline.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_polyline.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_polyline.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_polyline.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_polyline.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_line
- **Type**: `Object`

Line element.

#### renderItem.return_line.type
- **Type**: `string`
- **Default**: `line`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_line.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_line.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_line.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_line.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_line.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_line.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_line.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_line.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_line.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_line.shape), ['`style'`](option.series-custom.md#renderItem.return_line.style), [`'extra'`](option.series-custom.md#renderItem.return_line.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_line.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_line.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_line.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_line.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_line.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_line.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_line.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_line.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_line.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_line.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_line.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_line.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_line.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_line.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_line.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_line.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_line.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_line.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_line.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_line.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_line.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_line.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_line.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_line.diffChildrenByName).

#### renderItem.return_line.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_line.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_line.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_line.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_line.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_line.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_line.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_line.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_line.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_line.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_line.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_line.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_line.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_line.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_line.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_line.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_line.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_line.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_line.shape.x1
- **Type**: `number`
- **Default**: `0`

x value of the start point.

##### renderItem.return_line.shape.y1
- **Type**: `number`
- **Default**: `0`

y value of the start point.

##### renderItem.return_line.shape.x2
- **Type**: `number`
- **Default**: `0`

x value of the end point.

##### renderItem.return_line.shape.y2
- **Type**: `number`
- **Default**: `0`

y value of the end point.

##### renderItem.return_line.shape.percent
- **Type**: `number`
- **Default**: `1`

Specify the percentage of drawing, useful in animation.

Value range: \[0, 1\].

##### renderItem.return_line.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_line.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_line.style.fill
- **Type**: `string`

Color filled in this element.

##### renderItem.return_line.style.stroke
- **Type**: `string`
- **Default**: `"#000"`

Color of stroke.

##### renderItem.return_line.style.lineWidth
- **Type**: `number`
- **Default**: `5`

Width of stroke.

##### renderItem.return_line.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_line.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_line.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_line.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_line.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_line.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_line.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_line.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_line.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_line.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_line.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_line.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_line.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_line.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_line.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_line.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_line.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_line.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_line.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_line.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_bezierCurve
- **Type**: `Object`

Quadratic bezier curve or cubic bezier curve.

#### renderItem.return_bezierCurve.type
- **Type**: `string`
- **Default**: `bezierCurve`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_bezierCurve.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_bezierCurve.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_bezierCurve.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_bezierCurve.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_bezierCurve.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_bezierCurve.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_bezierCurve.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_bezierCurve.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_bezierCurve.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_bezierCurve.shape), ['`style'`](option.series-custom.md#renderItem.return_bezierCurve.style), [`'extra'`](option.series-custom.md#renderItem.return_bezierCurve.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_bezierCurve.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_bezierCurve.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_bezierCurve.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_bezierCurve.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_bezierCurve.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_bezierCurve.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_bezierCurve.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_bezierCurve.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_bezierCurve.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_bezierCurve.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_bezierCurve.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_bezierCurve.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_bezierCurve.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_bezierCurve.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_bezierCurve.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_bezierCurve.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_bezierCurve.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_bezierCurve.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_bezierCurve.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_bezierCurve.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_bezierCurve.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_bezierCurve.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_bezierCurve.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_bezierCurve.diffChildrenByName).

#### renderItem.return_bezierCurve.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_bezierCurve.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_bezierCurve.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_bezierCurve.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_bezierCurve.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_bezierCurve.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_bezierCurve.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_bezierCurve.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_bezierCurve.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_bezierCurve.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_bezierCurve.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_bezierCurve.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_bezierCurve.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_bezierCurve.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_bezierCurve.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_bezierCurve.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_bezierCurve.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_bezierCurve.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_bezierCurve.shape.x1
- **Type**: `number`
- **Default**: `0`

x value of the start point.

##### renderItem.return_bezierCurve.shape.y1
- **Type**: `number`
- **Default**: `0`

y value of the start point.

##### renderItem.return_bezierCurve.shape.x2
- **Type**: `number`
- **Default**: `0`

x value of the end point.

##### renderItem.return_bezierCurve.shape.y2
- **Type**: `number`
- **Default**: `0`

y value of the end point.

##### renderItem.return_bezierCurve.shape.cpx1
- **Type**: `number`
- **Default**: `0`

x of control point.

##### renderItem.return_bezierCurve.shape.cpy1
- **Type**: `number`
- **Default**: `0`

y of control point.

##### renderItem.return_bezierCurve.shape.cpx2
- **Type**: `number`

x of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

##### renderItem.return_bezierCurve.shape.cpy2
- **Type**: `number`

y of the second control point. If specified, cubic bezier is used.

If both `cpx2` and `cpy2` are not set, quatratic bezier is used.

##### renderItem.return_bezierCurve.shape.percent
- **Type**: `number`
- **Default**: `1`

Specify the percentage of drawing, useful in animation.

Value range: \[0, 1\].

##### renderItem.return_bezierCurve.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_bezierCurve.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_bezierCurve.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_bezierCurve.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_bezierCurve.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_bezierCurve.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_bezierCurve.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_bezierCurve.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_bezierCurve.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_bezierCurve.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_bezierCurve.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_bezierCurve.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_bezierCurve.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_bezierCurve.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_bezierCurve.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_bezierCurve.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_bezierCurve.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_bezierCurve.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_bezierCurve.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_bezierCurve.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_bezierCurve.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_bezierCurve.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_bezierCurve.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_bezierCurve.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_bezierCurve.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

### renderItem.return_compoundPath
- **Type**: `Object`

Since `v6.0.0`

The union of multiple elements.

#### renderItem.return_compoundPath.type
- **Type**: `string`
- **Default**: `compoundPath`

Must be specified when define a graphic element at the first time.

Optional values:

[image](option.series-custom.md#renderItem.return_image), [text](option.series-custom.md#renderItem.return_text), [circle](option.series-custom.md#renderItem.return_circle), [sector](option.series-custom.md#renderItem.return_sector), [ring](option.series-custom.md#renderItem.return_ring), [polygon](option.series-custom.md#renderItem.return_polygon), [polyline](option.series-custom.md#renderItem.return_polyline), [rect](option.series-custom.md#renderItem.return_rect), [line](option.series-custom.md#renderItem.return_line), [bezierCurve](option.series-custom.md#renderItem.return_bezierCurve), [arc](option.series-custom.md#renderItem.return_arc), [compoundPath](option.series-custom.md#renderItem.return_compoundPath), [group](option.series-custom.md#renderItem.return_group),

#### renderItem.return_compoundPath.id
- **Type**: `string`
- **Default**: `undefined`

id is used to specifying element when willing to update it. id can be ignored if you do not need it.

#### renderItem.return_compoundPath.x
- **Type**: `number`
- **Default**: `0`

x position of element. In pixels.

#### renderItem.return_compoundPath.y
- **Type**: `number`
- **Default**: `0`

y position of element. In pixels.

#### renderItem.return_compoundPath.rotation
- **Type**: `number`
- **Default**: `0`

Degree value of rotation.

#### renderItem.return_compoundPath.scaleX
- **Type**: `number`
- **Default**: `1`

Scale on x.

#### renderItem.return_compoundPath.scaleY
- **Type**: `number`
- **Default**: `1`

Scale on y.

#### renderItem.return_compoundPath.originX
- **Type**: `number`
- **Default**: `0`

x value of element scale and rotation origin. In pixels

#### renderItem.return_compoundPath.originY
- **Type**: `number`
- **Default**: `0`

y value of element scale and rotation origin. In pixels.

#### renderItem.return_compoundPath.transition
- **Type**: `string|Array`
- **Default**: `['x', 'y']`

You can specify that all properties have transition animations turned on with \`'all'', or you can specify a single property or an array of properties.

The properties can be:

Transform related properties:`'x'`, `'y'`, `'scaleX'`, `'scaleY'`, `'rotation'`, `'originX'`, `'originY'`. For example:

```
{
    type: 'rect',
    x: 100,
    y: 200,
    transition: ['x', 'y']
}
```

Shortcut to transition all of the properties in [`'shape'`](option.series-custom.md#renderItem.return_compoundPath.shape), ['`style'`](option.series-custom.md#renderItem.return_compoundPath.style), [`'extra'`](option.series-custom.md#renderItem.return_compoundPath.extra). For example:

```
{
    type: 'rect',
    shape: { // ... },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
}
```

In the custom series. `'x'` and `'y'` are transitioned by default. If you want to disable the default transition, just set it as: `transition: []`.

See this [example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/custom-transition-simple&edit=1&reset=1) please.

#### renderItem.return_compoundPath.enterFrom
- **Type**: `Object`

Initial properties for enter animation.

Example:

```
{
    type: 'circle',
    x: 100,
    enterFrom: {
        // Fade in
        style: { opacity: 0 },
        // Slide in from left
        x: 0
    }
}
```

#### renderItem.return_compoundPath.leaveTo
- **Type**: `Object`

End properties for leave animation.

Example:

```
{
    type: 'circle',
    x: 100,
    leaveTo: {
        // Fade out
        style: { opacity: 0 },
        // Slide out to right
        x: 200
    }
}
```

#### renderItem.return_compoundPath.enterAnimation
- **Type**: `Object`

Configurations of enter animation.

##### renderItem.return_compoundPath.enterAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_compoundPath.enterAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_compoundPath.enterAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_compoundPath.updateAnimation
- **Type**: `Object`

Configurations of update animation.

##### renderItem.return_compoundPath.updateAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_compoundPath.updateAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_compoundPath.updateAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_compoundPath.leaveAnimation
- **Type**: `Object`

Configurations of leave animation.

##### renderItem.return_compoundPath.leaveAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_compoundPath.leaveAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_compoundPath.leaveAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

#### renderItem.return_compoundPath.keyframeAnimation
- **Type**: `Object|Array`

Configurations of keyframe based animation. Support for configuring an array to use multiple keyframe animations at the same time.

Example:

```
keyframeAnimation: [{
    // Using scale for breath animation.
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
    // Translate animation.
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

If both keyframe animation and transition animation are applied to a property, the transition animation is ignored.

##### renderItem.return_compoundPath.keyframeAnimation.duration
- **Type**: `number`

Duration of animation, unit: ms

##### renderItem.return_compoundPath.keyframeAnimation.easing
- **Type**: `string`

Easing effect. Refer to the following for different effects: [examples](https://echarts.apache.org/examples/en/editor.html?c=line-easing)

##### renderItem.return_compoundPath.keyframeAnimation.delay
- **Type**: `number`

Delay of animation, unit: ms

##### renderItem.return_compoundPath.keyframeAnimation.loop
- **Type**: `boolean`

If loop the keyframe animation.

##### renderItem.return_compoundPath.keyframeAnimation.keyframes
- **Type**: `Array`

The keyframes of the animation. Each item in the array is a keyframe in the following format.

```
interface Keyframe {
    // Keyframe position. 0 is the first frame, 1 is the last frame
    // The time of keyframe is percent * duration + delay
    percent: number
    // Easing function from the last keyframe to this keyframe. Optional
    easing?: number

    // Other properties are for configuring the state of target at this keyframe, such as x, y, style, shape, etc.
}
```

#### renderItem.return_compoundPath.morph
- **Type**: `boolean`
- **Default**: `false`

Whether to enable morphing animation.

If you enabled [universalTransition](option.series-custom.md#universalTransition) and then the update has different types of shape, for example from `rect` to `circle`, it will apply the morph animation. Set this property to `false` to turn it off.

#### renderItem.return_compoundPath.z2
- **Type**: `number`
- **Default**: `undefined`

Define the overlap relationship between graphic elements.

#### renderItem.return_compoundPath.name
- **Type**: `string`
- **Default**: `undefined`

See [diffChildrenByName](option.series-custom.md#renderItem.return_compoundPath.diffChildrenByName).

#### renderItem.return_compoundPath.info
- **Type**: `*`

User defined data, can be visited in event listeners.

```
chart.on('click', function (params) {
    console.log(params.info);
});
```

#### renderItem.return_compoundPath.silent
- **Type**: `boolean`
- **Default**: `false`

Whether response to mouse events / touch events.

#### renderItem.return_compoundPath.tooltipDisabled
- **Type**: `boolean`
- **Default**: `false`

Whether disable triggering tooltip.

Since `v6.0.0`

#### renderItem.return_compoundPath.invisible
- **Type**: `boolean`
- **Default**: `false`

Whether the element is invisible.

#### renderItem.return_compoundPath.ignore
- **Type**: `boolean`
- **Default**: `false`

Whether the element is totally ignored (neither render nor listen events).

#### renderItem.return_compoundPath.textContent
- **Type**: `Object`

Text block attached to an element and layout based on the element by `textConfig`.

The props the the same as [text](../option-parts/option.series-custom.md#renderItem.return_text).

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

Rotation of `textContent`. In radian.

##### renderItem.return_compoundPath.textConfig.layoutRect
- **Type**: `Object`

Rect that `textContent` will be positioned. Default to be the bounding box of host element.

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

Offset of the `textContent`.

The difference of `offset` and `position` is that `offset` will be applied in the rotation.

##### renderItem.return_compoundPath.textConfig.origin
- **Type**: `*`

`origin` is relative to the bounding box of the host element. Can be percent value. Relative to the bounding box. If `'center'` specified, it will be center of the bounding box.

Only available when position and rotation are both set.

*   like `[12, 33]`
*   or like `['50%', '50%']`
*   'center'

##### renderItem.return_compoundPath.textConfig.distance
- **Type**: `number`
- **Default**: `5`

Distance to the `layoutRect`。

##### renderItem.return_compoundPath.textConfig.local
- **Type**: `boolean`
- **Default**: `false`

If `true`, it will apply host's transform.

##### renderItem.return_compoundPath.textConfig.insideFill
- **Type**: `string`

`insideFill` is a color string or left empty.

If a `textContent` is `"inside"`, its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.insideFill` > "auto-calculated-fill" In most cases, "auto-calculated-fill" is white.

##### renderItem.return_compoundPath.textConfig.insideStroke
- **Type**: `string`

`insideStroke` is a color string or left empty.

If a `textContent` is `"inside"`, its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.insideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be the same as `fill` of this element if possible, or null.

##### renderItem.return_compoundPath.textConfig.outsideFill
- **Type**: `string`

`outsideFill` is a color string or left empty.

If a `textContent` is "inside", its final `fill` will be picked by this priority: `textContent.style.fill` > `textConfig.outsideFill` > #000

##### renderItem.return_compoundPath.textConfig.outsideStroke
- **Type**: `string`

`outsideStroke` is a color string or left empty.

If a `textContent` is not "inside", its final `stroke` will be picked by this priority: `textContent.style.stroke` > `textConfig.outsideStroke` > "auto-calculated-stroke"

The rule of getting "auto-calculated-stroke":

*   If
    *   (A) the `fill` is specified in style (either in `textContent.style` or `textContent.style.rich`)
    *   or (B) needed to draw text background (either defined in `textContent.style` or `textContent.style.rich`)
    *   "auto-calculated-stroke" will be null.
*   Otherwise
    *   "auto-calculated-stroke" will be a near white color to distinguish "front end" label with messy background (like other text label, line or other graphic).

##### renderItem.return_compoundPath.textConfig.inside
- **Type**: `boolean`

Tell echarts that I can make sure this text is inside or not.

#### renderItem.return_compoundPath.during
- **Type**: `Function`

`during` callback enable users to set props to an element in each animation frame.

```
(duringAPI: CustomDuringAPI) => void

interface CustomDuringAPI {
    // Set transform prop value.
    // Transform prop see `TransformProp`.
    setTransform(key: TransformProp, val: unknown): void;
    // Get transform prop value of the current animation frame.
    getTransform(key: TransformProp): unknown;
    // Set shape prop value.
    // Shape prop is like `{ type: 'rect', shape: { xxxProp: xxxValue } }`.
    setShape(key: string, val: unknown): void;
    // Get shape prop value of the current animation frame.
    getShape(key: string): unknown;
    // Set style prop value.
    // Style prop is like `{ type: 'rect', style: { xxxProp: xxxValue } }`.
    setStyle(key: string, val: unknown): void;
    // Get style prop value of the current animation frame.
    getStyle(key: string): unknown;
    // Set extra prop value.
    // Extra prop is like `{ type: 'rect', extra: { xxxProp: xxxValue } }`.
    setExtra(key: string, val: unknown): void;
    // Get extra prop value of the current animation frame.
    getExtra(key: string): unknown;
}

type TransformProp =
    'x' | 'y' | 'scaleX' | 'scaleY' | 'originX' | 'originY' | 'rotation';
```

In most cases users do not need this `during` callback. For example, if some props are specified in [transition](../option-parts/option.series-custom.md#renderItem.return_rect.transition), echarts will make interpolation for these props internally and therefore have animation based on these props automatically. But if this kind of internal interpolation does not match the user requirements of animation, users can use this `during` callback to customize them.

For example, if users are using [polygon](../option-parts/option.series-custom.md#renderItem.return_polygon) shape. The shape is described by [shape.points](../option-parts/option.series-custom.md#renderItem.return_polygon.shape.points), which is an points array like:

```
{
    type: 'polygon',
    shape: {
        points: [[12, 33], [15, 36], [19, 39], ...]
    },
    // ...
}
```

If users specify them into [transition](../option-parts/option.series-custom.md#renderItem.return_polygon.transition) like:

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

Although the points will be interpolated, the consequent animation will be like that each point runs straight to the target position, which might do not match the user requirement if some kind of track like spiral is actually needed. In this case, users can use the `during` callback like that:

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
    // Make echarts interpolate `extra.degree` internally, based on which
    // we calculate the `points` in each animation frame.
    transition: 'extra',
    during: function (duringAPI) {
        var currentDegree = duringAPI.getExtra('degree');
        duringAPI.setShape(calculatePoints(currentDegree));
    }
    // ...
}
```

See this example [example](https://echarts.apache.org/examples/en/editor.html?c=custom-spiral-race&edit=1&reset=1).

#### renderItem.return_compoundPath.extra
- **Type**: `Object`

Users can define their own props in this `extra` field. See [during](../option-parts/option.series-custom.md#renderItem.return_rect.during) for the major usage of `extra`.

##### renderItem.return_compoundPath.extra.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `extra`.

For example:

```
{
    type: 'rect',
    extra: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    extra: {
        ...
    },
    // Indicate that all props in `extra` will
    // have transition animation.
    transition: 'extra',
};
```

##### renderItem.return_compoundPath.shape.paths
- **Type**: `Array`

Array of elements, each of which can be a path/rect/circle/...

##### renderItem.return_compoundPath.shape.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `shape`.

For example:

```
{
    type: 'rect',
    shape: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    shape: {
        ...
    },
    // Indicate that all props in `shape` will
    // have transition animation.
    transition: 'shape',
};
```

#### renderItem.return_compoundPath.style
- **Type**: `Object`

More attributes in `style` (for example, [rich text](../tutorial.md#Rich%20Text)), see the `style` related attributes in [zrender/graphic/Displayable](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable).

Notice, the attribute names of the `style` of graphic elements is derived from `zrender`, which may be different from the attribute names in `echarts label`, `echarts itemStyle`, etc., although they have the same meaning. For example:

*   [itemStyle.color](option.series-scatter.md#itemStyle.color) => `style.fill`
*   [itemStyle.borderColor](option.series-scatter.md#itemStyle.borderColor) => `style.stroke`
*   [label.color](option.series-scatter.md#label.color) => `style.textFill`
*   [label.textBorderColor](option.series-scatter.md#label.textBorderColor) => `style.textStroke`
*   ...

##### renderItem.return_compoundPath.style.fill
- **Type**: `string`
- **Default**: `'#000'`

Color filled in this element.

##### renderItem.return_compoundPath.style.stroke
- **Type**: `string`

Color of stroke.

##### renderItem.return_compoundPath.style.lineWidth
- **Type**: `number`
- **Default**: `0`

Width of stroke.

##### renderItem.return_compoundPath.style.lineDash
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Sets the line dash pattern used when stroking lines. Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`
*   `number` / `number` array. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash) for more information.

##### renderItem.return_compoundPath.style.lineDashOffset
- **Type**: `number`
- **Default**: `0`

Sets the line dash offset used when stroking lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more information.

##### renderItem.return_compoundPath.style.lineCap
- **Type**: `string`
- **Default**: `'butt'`

Line cap style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more information.

##### renderItem.return_compoundPath.style.lineJoin
- **Type**: `string`
- **Default**: `'miter'`

Line join style. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more information.

##### renderItem.return_compoundPath.style.miterLimit
- **Type**: `number`
- **Default**: `10`

Sets the miter limit ratio. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more information.

##### renderItem.return_compoundPath.style.shadowBlur
- **Type**: `number`
- **Default**: `undefined`

Width of shadow.

##### renderItem.return_compoundPath.style.shadowOffsetX
- **Type**: `number`
- **Default**: `undefined`

X offset of shadow.

##### renderItem.return_compoundPath.style.shadowOffsetY
- **Type**: `number`
- **Default**: `undefined`

Y offset of shadow.

##### renderItem.return_compoundPath.style.shadowColor
- **Type**: `number`
- **Default**: `undefined`

Color of shadow.

##### renderItem.return_compoundPath.style.opacity
- **Type**: `number`
- **Default**: `1`

Opacity of this element.

##### renderItem.return_compoundPath.style.transition
- **Type**: `string|Array`
- **Default**: `undefined`

Can be a single property name or an array of property names. Enable transition animation when the specified properties changed. Can only specify properties that are under this `style`.

For example:

```
{
    type: 'rect',
    style: {
        ...
        // This two props will perform transition animation.
        transition: ['mmm', 'ppp']
    }
}
```

We can also specify all of the properties like this:

```
{
    type: 'rect',
    style: {
        ...
    },
    // Indicate that all props in `style` will
    // have transition animation.
    transition: 'style',
};
```

#### renderItem.return_compoundPath.focus
- **Type**: `string`
- **Default**: `'none'`

Since `v5.0.0`

When it's highlighted, whether to fade out of other data to focus the highlighted. The following configurations are supported:

*   `'none'` Do not fade out other data, it's by default.
*   `'self'` Only focus (not fade out) the element of the currently highlighted data.
*   `'series'` Focus on all elements of the series which the currently highlighted data belongs to.

#### renderItem.return_compoundPath.blurScope
- **Type**: `string`
- **Default**: `'coordinateSystem'`

Since `v5.0.0`

The range of fade out when `focus` is enabled. Support the following configurations

*   `'coordinateSystem'`
*   `'series'`
*   `'global'`

#### renderItem.return_compoundPath.emphasisDisabled
- **Type**: `boolean`

Whether to disable the emphasis state.

#### renderItem.return_compoundPath.emphasis
- **Type**: `Object`

Emphasis state of the element.

##### renderItem.return_compoundPath.emphasis.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_compoundPath.blur
- **Type**: `Object`

Since `v5.0.0`

Blur state, available when `focus` is set.

##### renderItem.return_compoundPath.blur.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

#### renderItem.return_compoundPath.select
- **Type**: `Object`

Since `v5.0.0`

Select state, available when [selectedMode](option.series-custom.md#selectedMode) is set.

##### renderItem.return_compoundPath.select.style
- **Type**: `Object`

Same to [style](option.series-custom.md#renderItem.return_polygon.style).

## itemStyle
- **Type**: `Object`

Graphic style of , `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.

### itemStyle.color
- **Type**: `Color`

color. Color is taken from [option.color Palette](../option.md#color) by default.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

### itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

### itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

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

### itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### itemStyle.decal
- **Type**: `Object`

The style of the decal pattern. It works only if [aria.enabled](option.aria.md#enabled) and [aria.decal.show](option.aria.md#decal.show) are both set to be `true`.

If it is set to be `'none'`, no decal will be used.

#### itemStyle.decal.symbol
- **Type**: `string|Array`
- **Default**: `'rect'`

The symbol type of the decal. If it is in the type of `string[]`, it means the symbols are used one by one.

Icon types provided by ECharts includes

`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

It can be set to an image with `'image://url'` , in which URL is the link to an image, or `dataURI` of an image.

An image URL example:

```
'image://http://example.website/a/b.png'
```

A `dataURI` example:

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

For example:

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

#### itemStyle.decal.symbolSize
- **Type**: `number`
- **Default**: `1`

Range of values: `0` to `1`, representing the size of symbol relative to decal.

#### itemStyle.decal.symbolKeepAspect
- **Type**: `boolean`
- **Default**: `true`

Whether or not to keep the aspect ratio of the pattern.

#### itemStyle.decal.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.2)'`

For the color of the decal pattern, it is recommended to use a translucent color, which can be superimposed on the color of the series itself.

#### itemStyle.decal.backgroundColor
- **Type**: `string`

The background color of the decal will be over the color of the series itself, under the decal pattern.

#### itemStyle.decal.dashArrayX
- **Type**: `number|Array`
- **Default**: `5`

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayX` controls the horizontal pattern pattern. When its value is of type `number` or `number[]`, it is similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

*   If it is of type `number`, it means that the pattern and the blank space are of this value respectively. For example, `5` means the pattern with width 5 is displayed first, then 5 pixels empty, then the pattern with width 5 is displayed...
    
*   In the case of `number[]` type, it means that the pattern and empty space are loops of an array of values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels wide, then 10 pixels empty, then the pattern is 2 pixels wide, then 6 pixels empty, then the pattern is 5 pixels wide...
    
*   If of type `(number | number[])[]`, it means that each row is a loop with an array of values for the pattern and blank space. For example: `[10, [2, 5]]` means that the first line will be 10 pixels by 10 pixels and empty space, the second line will be 2 pixels by 2 pixels and empty space, and the third line will be 10 pixels by 10 pixels and empty space...
    

This interface can be better understood with the following examples.

#### itemStyle.decal.dashArrayY
- **Type**: `number|Array`
- **Default**: `5`

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayY` controls the horizontal pattern pattern. Similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

*   If it is a `number` type, it means the pattern and the blank are each of this value. For example, `5` means that the pattern with a height of 5 is displayed first, then 5 pixels empty, then the pattern with a height of 5 is displayed...
    
*   In the case of `number[]` type, it means that the pattern and empty space are loops of sequential array values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels high, then 10 pixels empty, then the pattern is 2 pixels high, then 6 pixels empty, then the pattern is 5 pixels high...
    

This interface can be better understood with the following examples.

#### itemStyle.decal.rotation
- **Type**: `number`
- **Default**: `0`

The overall rotation angle (in radians) of the pattern, in the range from \`-Math.

#### itemStyle.decal.maxTileWidth
- **Type**: `number`
- **Default**: `512`

The upper limit of the width of the generated pattern before it is duplicated. Usually this value is not necessary, but you can try to increase it if you notice discontinuous seams in the pattern when it repeats.

#### itemStyle.decal.maxTileHeight
- **Type**: `number`
- **Default**: `512`

The upper limit of the height of the generated pattern before it repeats. This value is usually not necessary to set, but you can try to increase it if you find that the pattern has discontinuous seams when it is repeated.

## labelLine
- **Type**: `Object`

Since `v5.0.0`

Configuration of label guide line.

### labelLine.show
- **Type**: `boolean`

Whether to show the label guide line.

### labelLine.showAbove
- **Type**: `boolean`

Since `v5.0.0`

Whether to show the label guide line above the corresponding element.

### labelLine.length2
- **Type**: `number`

The length of the second segment of guide line.

### labelLine.smooth
- **Type**: `boolean|number`
- **Default**: `false`

Whether to smooth the guide line. It defaults to be `false` and can be set as `true` or the values from 0 to 1 which indicating the smoothness.

### labelLine.minTurnAngle
- **Type**: `number`

Since `v5.0.0`

Minimum turn angle between two segments of guide line to prevent unaesthetic display when angle is too small.

Can be 0 - 180 degree.

#### labelLine.lineStyle.color
- **Type**: `Color`
- **Default**: `"#000"`

Line color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### labelLine.lineStyle.width
- **Type**: `number`
- **Default**: `0`

line width.

#### labelLine.lineStyle.type
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

#### labelLine.lineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### labelLine.lineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### labelLine.lineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### labelLine.lineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### labelLine.lineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### labelLine.lineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### labelLine.lineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### labelLine.lineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### labelLine.lineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## labelLayout
- **Type**: `Object|Function`

Since `v5.0.0`

Unified layout configuration of labels.

It provide a chance to adjust the labels' `(x, y)` position, alignment based on the original layout each series provides.

This option can be a callback with following parameters.

```
// corresponding index of data
dataIndex: number
// corresponding type of data. Only available in graph, in which it can be 'node' or 'edge'
dataType?: string
// corresponding index of series
seriesIndex: number
// Displayed text of label.
text: string
// Bounding rectangle of label.
labelRect: {x: number, y: number, width: number, height: number}
// Horizontal alignment of label.
align: 'left' | 'center' | 'right'
// Vertical alignment of label.
verticalAlign: 'top' | 'middle' | 'bottom'
// Bounding rectangle of the element corresponding to.
rect: {x: number, y: number, width: number, height: number}
// Default points array of labelLine. Currently only provided in pie and funnel series.
// It's null in other series.
labelLinePoints?: number[][]
```

**Example:**

Align the labels on the right. Left 10px margin to the edge.

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

Set the text size based on the size of element bounding rectangle.

```

labelLayout(params) {
    return {
        fontSize: Math.max(params.rect.width / 10, 5)
    };
}
```

### labelLayout.hideOverlap
- **Type**: `boolean`

If hide the overlapped labels.

The following example shows how to hide the overlapped labels in graph automatically when zooming.

### labelLayout.moveOverlap
- **Type**: `string`

If move the overlapped labels to avoid overlapping.

Currently supported configurations:

*   `'shiftX'` Place the labels on horizontal direction sequencely, used when aligned horizontally.
*   `'shiftY'` Place the labels on vertical direction sequencely, used when aligned vertically.

The following example shows how to use `moverOverlap: 'shiftY'` to place the labels aligned vertically.

### labelLayout.x
- **Type**: `number|string`

The x position of the label. Support absolute pixel values ​​or relative values ​​such as `'20%'`.

### labelLayout.y
- **Type**: `number|string`

The y position of the label. Support absolute pixel values ​​or relative values ​​such as `'20%'`.

### labelLayout.dx
- **Type**: `number`

The pixel offset of the label in the x direction. Can be used with `x`.

### labelLayout.dy
- **Type**: `number`

The pixel offset of the label in the y direction. Can be used with `y`

### labelLayout.rotate
- **Type**: `number`

Label rotation angle.

### labelLayout.width
- **Type**: `number`

The width of displayed label. It can be used with `overflow` to constraint the label in a fixed width.

### labelLayout.height
- **Type**: `number`

The height of displayed label.

### labelLayout.align
- **Type**: `string`

The horizontal alignment of the label. Can be `'left'`, `'center'`, `'right'`.

### labelLayout.verticalAlign
- **Type**: `string`

The vertical alignment of the label. Can be `'top'`, `'middle'`, `'bottom'`.

### labelLayout.fontSize
- **Type**: `number`

The text size of the label.

### labelLayout.draggable
- **Type**: `boolean`

Whether to allow the user to adjust the position by dragging.

### labelLayout.labelLinePoints
- **Type**: `Array`

The array of the three points of the label guide line. The format is:

```
[[x, y], [x, y], [x, y]]
```

It is often used in pie charts to fine-tune the guide line that has been calculated. Usually not recommended to set it in other situations.

## selectedMode
- **Type**: `boolean|string`
- **Default**: `false`

Since `v5.0.0`

Selected mode. It is disabled by default, and you may set it to be `true` to enable it.

Besides, it can be set to `'single'`, `'multiple'` or `'series'`, for single selection, multiple selections and whole series selection.

> `'series'` is supported since v5.3.0

## dimensions
- **Type**: `Array`

`dimensions` can be used to define dimension info for `series.data` or `dataset.source`.

Notice: if [dataset](option.dataset.md) is used, we can definite dimensions in [dataset.dimensions](option.dataset.md#dimensions), or provide dimension names in the first column/row of [dataset.source](option.dataset.md#source), and not need to specify `dimensions` here. But if `dimensions` is specified here, it will be used despite the dimension definitions in dataset.

For example:

```
option = {
    dataset: {
        source: [
            // 'date', 'open', 'close', 'highest', 'lowest'
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        // Specify name for each dimensions, which will be displayed in tooltip.
        dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    }
}
```

```
series: {
    type: 'xxx',
    dimensions: [
        null,                // If you do not intent to defined this dimension, use null is fine.
        {type: 'ordinal'},   // Specify type of this dimension.
                             // 'ordinal' is always used in string.
                             // If type is not specified, echarts will guess type by data.
        {name: 'good', type: 'number'},
        'bad'                // Equals to {name: 'bad'}.
    ]
}
```

Each data item of `dimensions` can be:

*   `string`, for example, `'someName'`, which equals to `{name: 'someName'}`.
*   `Object`, where the attributes can be:
    *   name: `string`.
    *   type: `string`, supports:
        *   `number`
        *   `float`, that is, [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)
        *   `int`, that is, [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
        *   `ordinal`, discrete value, which represents string generally.
        *   `time`, time value, see [data](../option.md#series.data) to check the format of time value.
    *   displayName: `string`, generally used in tooltip for dimension display. If not specified, use `name` by default.

When `dimensions` is specified, the default `tooltip` will be displayed vertically, which is better to show dimension names. Otherwise, `tooltip` will displayed only value horizontally.

## encode
- **Type**: `Object`

Define what is encoded to for each dimension of `data`. For example:

```
option = {
    dataset: {
        source: [
            // Each column is called a dimension.
            // There are five dimensions: 0, 1, 2, 3, 4.
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        encode: {
            x: [3, 1, 5],      // Dimension 3, 1, 5 is mapped to x axis.
            y: 2,              // Dimension 2 is mapped to y axis.
            tooltip: [3, 2, 4] // Dimension 3, 2, 4 will be displayed in tooltip.
        }
    }
}
```

When [dimensions](../option.md#series.dimensions) is used to defined name for a certain dimension, `encode` can refer the name directly. For example:

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

The basic structure of [encode](../option.md#series.encode) is illustrated as follows, where the left part of colon is the name of axis like `'x'`, `'y'`, `'radius'`, `'angle'` or some special reserved names like "tooltip", "itemName" etc., and the right part of the colon is the dimension names or dimension indices (based on 0). One or more dimensions can be specified. Usually not all of mappings need to be specified, only specify needed ones.

The properties available in `encode` listed as follows:

```
// In any of the series and coordinate systems,
// these properties are available:
encode: {
    // Display dimension "product" and "score" in the tooltip.
    tooltip: ['product', 'score']
    // Set the series name as the concat of the names of dimensions[1] and dimensions[3].
    // (sometimes the dimension names are too long to type in series.name manually).
    seriesName: [1, 3],
    // Using dimensions[2] as the id of each data item. This is useful when dynamically
    // update data by `chart.setOption()`, where the new and old data item can be
    // corresponded by id, by which the appropriate animation can be performed when updating.
    itemId: 2,
    // Using dimensions[3] as the name of each data item. This is useful in charts like
    // 'pie', 'funnel', where data item name can be displayed in legend.
    itemName: 3,
    // Using dimensions[4] as the group ID for each data item. With universalTransition enabled,
    // the data items from the old option and those from the new one, if sharing a same group ID,
    // will then be matched and applied to a proper animation after `setOption` is called.
    itemGroupId: 4,
    // Using dimension[5] as the child group ID for each data item. This option is introduced to
    // make multiple levels drilldown and aggregation animation come true. See childGroupId for more.
    // Since v5.5.0
    itemChildGroupId: 5
}

// These properties only work in cartesian(grid) coordinate system:
encode: {
    // Map dimensions[1], dimensions[5] and dimension "score" to the X axis.
    x: [1, 5, 'score'],
    // Map dimensions[0] to the Y axis.
    y: 0
}

// These properties only work in polar coordinate system:
encode: {
    radius: 3,
    angle: 2,
    ...
}

// These properties only work in geo coordinate system:
encode: {
    lng: 3,
    lat: 2
}

// For some type of series that are not in any coordinate system,
// like 'pie', 'funnel' etc.:
encode: {
    value: 3
}
```

This is an [example](https://echarts.apache.org/examples/en/view.html?c=dataset-encode1&edit=1&reset=1) for `encode`.

Specially, in \[custom series(~series-custom), some property in `encode`, corresponding to axis, can be set as null to make the series not controlled by the axis, that is, the series data will not be count in the extent of the axis, and the [dataZoom](../option.md#dataZoom) on the axis will not filter the series.

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
                    cx: 100, // x position is always 100
                    cy: api.coord([0, api.value(0)])[1],
                    r: 30
                },
                style: {
                    fill: 'blue'
                }
            };
        },
        encode: {
            // Then the series will not be controlled
            // by x axis and corresponding dataZoom.
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

When [dataset](option.dataset.md) is used, `seriesLayoutBy` specifies whether the column or the row of `dataset` is mapped to the series, namely, the series is "layout" on columns or rows. Optional values:

*   'column': by default, the columns of `dataset` are mapped the series. In this case, each column represents a dimension.
*   'row'：the rows of `dataset` are mapped to the series. In this case, each row represents a dimension.

Check this [example](https://echarts.apache.org/examples/en/editor.html?c=dataset-series-layout-by).

## datasetIndex
- **Type**: `number`
- **Default**: `0`

If [series.data](../option.md#series.data) is not specified, and [dataset](option.dataset.md) exists, the series will use `dataset`. `datasetIndex` specifies which dataset will be used.

## dataGroupId
- **Type**: `string`

A group ID assigned to all data items in the series.

This option has a lower priority than `groupId`, which means when `groupId` is specified for a certain data item the `dataGroupId` will be simply ignored for that data item. For more information, please see `series.data.groupId`.

## data
- **Type**: `Array`

Data array of series, which can be in the following forms:

Notice, if no `data` specified in series, and there is [dataset](option.dataset.md) in option, series will use the first [dataset](option.dataset.md) as its datasource. If `data` has been specified, [dataset](option.dataset.md) will not used.

`series.datasetIndex` can be used to specify other [dataset](option.dataset.md).

Basically, data is represented by a two-dimension array, like the example below, where each column is named as a "dimension".

```
series: [{
    data: [
        // dimX   dimY   other dimensions ...
        [  3.4,    4.5,   15,   43],
        [  4.2,    2.3,   20,   91],
        [  10.8,   9.5,   30,   18],
        [  7.2,    8.8,   18,   57]
    ]
}]
```

*   In [cartesian (grid)](option.grid.md), "dimX" and "dimY" correspond to [xAxis](option.xAxis.md) and [yAxis](option.yAxis.md) respectively.
*   In [polar](option.polar.md) "dimX" and "dimY" correspond to [radiusAxis](option.radiusAxis.md) and [angleAxis](option.angleAxis.md) respectively.
*   Other dimensions are optional, which can be used in other places. For example:
    *   [visualMap](../option.md#visualMap) can map one or more dimensions to visual (color, symbol size ...).
    *   [series.symbolSize](../option.md#series.symbolSize) can be set as a callback function, where symbol size can be calculated by values of a certain dimension.
    *   Values in other dimensions can be shown by [tooltip.formatter](option.tooltip.md#formatter) or [series.label.formatter](../option.md#series.label.formatter).

Especially, when there is one and only one category axis (axis.type is `'category'`), data can be simply be represented by a one-dimension array, like:

```
xAxis: {
    data: ['a', 'b', 'm', 'n']
},
series: [{
    // Each item corresponds to each item in xAxis.data.
    data: [23,  44,  55,  19]
    // In fact, it is the simplification of the format below:
    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]
}]
```

  
**Relationship between "value" and [axis.type](option.xAxis.md#type)**

*   When a dimension corresponds to a value axis (axis.type is `'value'` or `'log'`):
    
    The value can be a `number` (like `12`) (can also be a number in a `string` format, like `'12'`).
    
*   When a dimension corresponds to a category axis (axis.type is `'category'`):
    
    The value should be the ordinal of the axis.data (based on `0`), the string value of the axis.data. For example:
    
    ```
      xAxis: {
          type: 'category',
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
      },
      yAxis: {
          type: 'category',
          data: ['a', 'b', 'm', 'n', 'p', 'q']
      },
      series: [{
          data: [
              // xAxis      yAxis
              [  0,           0,    2  ], // This point is located at xAxis: 'Monday', yAxis: 'a'.
              [  'Thursday',  2,    1  ], // This point is located at xAxis: 'Thursday', yAxis: 'm'.
              [  2,          'p',   2  ], // This point is located at xAxis: 'Wednesday', yAxis: 'p'.
              [  3,           3,    5  ]
          ]
      }]
    ```
    
    There is an example of double category axes: [Github Punchcard](https://echarts.apache.org/examples/en/editor.html?c=scatter-punchCard).
    
*   When a dimension corresponds to a time axis (type is `'time'`), the value can be:
    
    *   a timestamp, like `1484141700832`, which represents a UTC time.
    *   a date string, in one of the formats below:
        *   a subset of [ISO 8601](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15), only including (all of these are treated as local time unless timezone is specified, which is consistent with [moment](https://momentjs.com/)):
            *   only part of year/month/date/time are specified: `'2012-03'`, `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
            *   separated by `"T"` or a space: `'2012-03-01T12:22:33.123'`, `'2012-03-01 12:22:33.123'`.
            *   timezone specified: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`, `'2012-03-01T12:22:33-05:00'`.
        *   other date string format (all of these are treated as local time): `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`, `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`.
    *   a JavaScript Date instance created by user:
        *   Caution, when using a data string to create a Date instance, [browser differences and inconsistencies](https://dygraphs.com/date-formats.html) should be considered.
        *   For example: In chrome, `new Date('2012-01-01')` is treated as a Jan 1st 2012 in UTC, while `new Date('2012-1-1')` and `new Date('2012/01/01')` are treated as Jan 1st 2012 in local timezone. In safari `new Date('2012-1-1')` is not supported.
        *   So if you intent to perform `new Date(dateString)`, it is strongly recommended to use a time parse library (e.g., [moment](https://momentjs.com/)), or use `echarts.time.parse`, or check [this](https://dygraphs.com/date-formats.html).

  
**Customize a data item:**

When needing to customize a data item, it can be set as an object, where property `value` represent real value. For example:

```
[
    12,
    24,
    {
        value: [24, 32],
        // label style, only works in this data item.
        label: {},
        // item style, only works in this data item.
        itemStyle:{}
    },
    33
]
// Or
[
    [12, 332],
    [24, 32],
    {
        value: [24, 32],
        // label style, only works in this data item.
        label: {},
        // item style, only works in this data item.
        itemStyle:{}
    },
    [33, 31]
]
```

  
**Empty value:**

`'-'` or `null` or `undefined` or `NaN` can be used to describe that a data item does not exist (ps：_not exist_ does not means its value is `0`).

For example, line chart can break when encounter an empty value, and scatter chart do not display graphic elements for empty values.

### data.name
- **Type**: `string`

Name of data item.

### data.value
- **Type**: `number`

Value of data item.

### data.groupId
- **Type**: `string`

The group ID of a data item. When `universalTransition` is enabled, the data items from the old option and those from the new one, if sharing a same group ID, will then be matched and applied to a proper animation after `setOption` is called.

If a data item is not specified with a `groupId`, Apache ECharts will try to use `series.dataGroupId` as the group ID for the data item. If `series.dataGroupId` is not specified either, Apache ECharts will fall back to using the data item's ID as its group ID.

If you are using the [dataset](option.dataset.md) component to represent data, you are recommended to use `encode.itemGroupId` to specify the dimension that is to be encoded as the group ID.

### data.childGroupId
- **Type**: `string`

Since `v5.5.0`

The group ID of the child data of a data item. This option is introduced to make multiple levels drilldown and aggregation animation possilbe.

Before `childGroupId` is introduced, developers actually can use `groupId` to make drilldown and aggregation animation already, but with the limit on the times that a continious drilldown or aggregation can happen, which is only one time.

`childGroupId`, together with `groupId`, help to form "parent-child" relationships between data items of different options, such as:

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

The 3 groups of data above come from 3 options, and by specifying `groupId` and `childGroupId` for the data items a relationship of "parent-child-grandChild" is formed in the 3 options. In this way, after `setOption` is called, Apache ECharts will try to find the "parent-child" or "child-parent" relationship of the old option and the new one. If the relationship exists, the matching data items will be applied to a drilldown animation or an aggregation one.

If a data item has no child data then there is no need to specify a `childGroupId` at all.

If you are using the [dataset](option.dataset.md) component to represent data, you are recommended to use `encode.itemChildGroupId` to specify the dimension that is to be encoded as the child group ID.

#### data.itemStyle.color
- **Type**: `Color`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### data.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

#### data.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

#### data.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

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

#### data.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### data.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### data.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### data.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### data.itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### data.itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### data.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### data.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### data.itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

#### data.itemStyle.decal
- **Type**: `Object`

The style of the decal pattern. It works only if [aria.enabled](option.aria.md#enabled) and [aria.decal.show](option.aria.md#decal.show) are both set to be `true`.

If it is set to be `'none'`, no decal will be used.

##### data.itemStyle.decal.symbol
- **Type**: `string|Array`
- **Default**: `'rect'`

The symbol type of the decal. If it is in the type of `string[]`, it means the symbols are used one by one.

Icon types provided by ECharts includes

`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

It can be set to an image with `'image://url'` , in which URL is the link to an image, or `dataURI` of an image.

An image URL example:

```
'image://http://example.website/a/b.png'
```

A `dataURI` example:

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

For example:

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

##### data.itemStyle.decal.symbolSize
- **Type**: `number`
- **Default**: `1`

Range of values: `0` to `1`, representing the size of symbol relative to decal.

##### data.itemStyle.decal.symbolKeepAspect
- **Type**: `boolean`
- **Default**: `true`

Whether or not to keep the aspect ratio of the pattern.

##### data.itemStyle.decal.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.2)'`

For the color of the decal pattern, it is recommended to use a translucent color, which can be superimposed on the color of the series itself.

##### data.itemStyle.decal.backgroundColor
- **Type**: `string`

The background color of the decal will be over the color of the series itself, under the decal pattern.

##### data.itemStyle.decal.dashArrayX
- **Type**: `number|Array`
- **Default**: `5`

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayX` controls the horizontal pattern pattern. When its value is of type `number` or `number[]`, it is similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

*   If it is of type `number`, it means that the pattern and the blank space are of this value respectively. For example, `5` means the pattern with width 5 is displayed first, then 5 pixels empty, then the pattern with width 5 is displayed...
    
*   In the case of `number[]` type, it means that the pattern and empty space are loops of an array of values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels wide, then 10 pixels empty, then the pattern is 2 pixels wide, then 6 pixels empty, then the pattern is 5 pixels wide...
    
*   If of type `(number | number[])[]`, it means that each row is a loop with an array of values for the pattern and blank space. For example: `[10, [2, 5]]` means that the first line will be 10 pixels by 10 pixels and empty space, the second line will be 2 pixels by 2 pixels and empty space, and the third line will be 10 pixels by 10 pixels and empty space...
    

This interface can be better understood with the following examples.

##### data.itemStyle.decal.dashArrayY
- **Type**: `number|Array`
- **Default**: `5`

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayY` controls the horizontal pattern pattern. Similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

*   If it is a `number` type, it means the pattern and the blank are each of this value. For example, `5` means that the pattern with a height of 5 is displayed first, then 5 pixels empty, then the pattern with a height of 5 is displayed...
    
*   In the case of `number[]` type, it means that the pattern and empty space are loops of sequential array values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels high, then 10 pixels empty, then the pattern is 2 pixels high, then 6 pixels empty, then the pattern is 5 pixels high...
    

This interface can be better understood with the following examples.

##### data.itemStyle.decal.rotation
- **Type**: `number`
- **Default**: `0`

The overall rotation angle (in radians) of the pattern, in the range from \`-Math.

##### data.itemStyle.decal.maxTileWidth
- **Type**: `number`
- **Default**: `512`

The upper limit of the width of the generated pattern before it is duplicated. Usually this value is not necessary, but you can try to increase it if you notice discontinuous seams in the pattern when it repeats.

##### data.itemStyle.decal.maxTileHeight
- **Type**: `number`
- **Default**: `512`

The upper limit of the height of the generated pattern before it repeats. This value is usually not necessary to set, but you can try to increase it if you find that the pattern has discontinuous seams when it is repeated.

##### data.emphasis.itemStyle.color
- **Type**: `Color`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

##### data.emphasis.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#000'`

border color, whose format is similar to that of `color`.

##### data.emphasis.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

##### data.emphasis.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

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

##### data.emphasis.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### data.emphasis.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

##### data.emphasis.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

##### data.emphasis.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

##### data.emphasis.itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

##### data.emphasis.itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

##### data.emphasis.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

##### data.emphasis.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

##### data.emphasis.itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### data.tooltip
- **Type**: `Object`

tooltip settings in this series data.

#### data.tooltip.position
- **Type**: `string|Array`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

#### data.tooltip.formatter
- **Type**: `string|Function`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

#### data.tooltip.valueFormatter
- **Type**: `string`

Since `v5.3.0`

Callback function for formatting the value section in tooltip.

Interface:

```
(value: number | string, dataIndex: number) => string
```

`dataIndex` is provided since `v5.5.0`

Example:

```
// Add $ prefix
valueFormatter: (value) => '$' + value.toFixed(2)
```

> **\[NOTE\]:** Different from [tooltip.formater](option.tooltip.md#formatter), raw HTML is NOT accepted in this approach -- the returned content will be escaped internally before rendering.

#### data.tooltip.backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The background color of tooltip's floating layer.

#### data.tooltip.borderColor
- **Type**: `Color`
- **Default**: `'#333'`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The border color of tooltip's floating layer.

#### data.tooltip.borderWidth
- **Type**: `number`
- **Default**: `0`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The border width of tooltip's floating layer.

#### data.tooltip.padding
- **Type**: `number`
- **Default**: `5`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

#### data.tooltip.textStyle
- **Type**: `Object`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The text style of tooltip's floating layer.

##### data.tooltip.textStyle.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

##### data.tooltip.textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

##### data.tooltip.textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

##### data.tooltip.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

##### data.tooltip.textStyle.fontSize
- **Type**: `number`
- **Default**: `14`

font size.

##### data.tooltip.textStyle.lineHeight
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

##### data.tooltip.textStyle.width
- **Type**: `number`

Width of text block.

##### data.tooltip.textStyle.height
- **Type**: `number`

Height of text block.

##### data.tooltip.textStyle.textBorderColor
- **Type**: `Color`

Stroke color of the text.

##### data.tooltip.textStyle.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

##### data.tooltip.textStyle.textBorderType
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

##### data.tooltip.textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

##### data.tooltip.textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

##### data.tooltip.textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

##### data.tooltip.textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

##### data.tooltip.textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

##### data.tooltip.textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

##### data.tooltip.textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### data.tooltip.extraCssText
- **Type**: `string`

> **Notice：**series.data.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

Extra CSS style for floating layer. The following is an example for adding shadow.

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[WARNING\]: `tooltip` is implemented in HTML (unless [tooltip.renderMode](option.tooltip.md#renderMode) is set as `richText`), allowing users to customize the CSS text of the box in this way. **Security risks** must be considered if the CSS text comes from untrusted sources. See document ["Security Guidelines"](https://echarts.apache.org/handbook/en/best-practices/security) for recommendations on safe usage.

## clip
- **Type**: `boolean`
- **Default**: `false`

Since `v4.4.0`

If clip the overflow on the coordinate system. Clip results varies between series:

*   Scatter/EffectScatter：Ignore the symbols exceeds the coordinate system. Not clip the elements.
*   Bar：Clip all the overflowed. With bar width kept.
*   Line：Clip the overflowed line.
*   Lines: Clip all the overflowed.
*   Candlestick: Ignore the elements exceeds the coordinate system.
*   PictorialBar: Clip all the overflowed. (Supported since v5.5.0)
*   Custom: Clip all the olverflowed.

All these series have default value `true` except pictorialBar and custom series. Set it to `false` if you don't want to clip.

## zlevel
- **Type**: `number`
- **Default**: `0`

`zlevel` value of all graphical elements in custom series.

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

## z
- **Type**: `number`
- **Default**: `2`

`z` value of all graphical elements in custom series, which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

`z` has a lower priority to `zlevel`, and will not create new Canvas.

## silent
- **Type**: `boolean`
- **Default**: `false`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

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

## universalTransition
- **Type**: `Object`

Since `v5.2.0`

Configuration related to universal transition animation.

Universal Transition provides the ability to morph between any series. With this feature enabled, each time `setOption`, transitions between series with the same `id` will be automatically associated with each other.

One-to-many or many-to-one animations such as drill-down, aggregation, etc. can also be achieved by specifying data items' `groupId` and `childGroupId`.

This can be enabled directly by configuring `universalTransition: true` in the series. It is also possible to provide an object for more detailed configuration.

### universalTransition.enabled
- **Type**: `boolean`
- **Default**: `false`

Whether to enable the universal transition animation.

### universalTransition.seriesKey
- **Type**: `string|Array`

The `seriesKey` determines how the series to be animated is associated, it defaults to the `id` of the series when not configured.

Usually this is configured as a string, and transitions between series with the same `seriesKey` will be applied. It can also be configured as an array like the following.

```
seriesKey: ['male', 'female']
```

Configuring to an array means that all series specified by the array item will be merged into the current series when animating. For example, this configuration means that series with `id` or `seriesKey` of `'male'` and `'female'` will be merged into the current series.

### universalTransition.divideShape
- **Type**: `string`

`divideShape` determines how the elements in the current series will split into multiple elements in a one-to-many or many-to-one animation. Currently supports

*   `'split'` Split the shape into multiple shapes.
*   `'clone'` Get multiple clones from the current element.

For better results, different series will have different configurations by default, for example, [scatter](option.series-scatter.md) with smaller and more complex element uses `'clone'` by default, while more regular ones like bar charts default to `'split'`. You can set this to the desired splitting strategy according to the needs of your own scenario.

### universalTransition.delay
- **Type**: `Function`

```
(index: number, count: number) => number
```

Configure the animation delay for each shape in a one-to-many or many-to-one animation. Setting different animation delays can bring a more instereting animation. For example, the following code creates a staggered effect with a random delay for each shape.

```
delay: function (index, count) {
    return Math.random() * 1000;
}
```

## tooltip
- **Type**: `Object`

tooltip settings in this series.

### tooltip.position
- **Type**: `string|Array`

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

### tooltip.valueFormatter
- **Type**: `string`

Since `v5.3.0`

Callback function for formatting the value section in tooltip.

Interface:

```
(value: number | string, dataIndex: number) => string
```

`dataIndex` is provided since `v5.5.0`

Example:

```
// Add $ prefix
valueFormatter: (value) => '$' + value.toFixed(2)
```

> **\[NOTE\]:** Different from [tooltip.formater](option.tooltip.md#formatter), raw HTML is NOT accepted in this approach -- the returned content will be escaped internally before rendering.

### tooltip.backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(50,50,50,0.7)'`

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The background color of tooltip's floating layer.

### tooltip.borderColor
- **Type**: `Color`
- **Default**: `'#333'`

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The border color of tooltip's floating layer.

### tooltip.borderWidth
- **Type**: `number`
- **Default**: `0`

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

The border width of tooltip's floating layer.

### tooltip.padding
- **Type**: `number`
- **Default**: `5`

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

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

> **Notice：**series.tooltip only works when [tooltip.trigger](option.tooltip.md#trigger) is `'item'`.  

Extra CSS style for floating layer. The following is an example for adding shadow.

```
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

\[WARNING\]: `tooltip` is implemented in HTML (unless [tooltip.renderMode](option.tooltip.md#renderMode) is set as `richText`), allowing users to customize the CSS text of the box in this way. **Security risks** must be considered if the CSS text comes from untrusted sources. See document ["Security Guidelines"](https://echarts.apache.org/handbook/en/best-practices/security) for recommendations on safe usage.
