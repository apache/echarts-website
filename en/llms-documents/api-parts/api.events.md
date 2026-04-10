# api.events

## Mouse events
- **Type**: `*`

Event parameters of mouse events are attributes of event object. The following shows basic parameters for chart click events. Other charts, like pie charts, may have additional parameters like `percent`. Please refer to callback `params` of each chart's label formatter.

```
{
    // type of the component to which the clicked glyph belongs
    // i.e., 'series', 'markLine', 'markPoint', 'timeLine'
    componentType: string,
    // series type (make sense when componentType is 'series')
    // i.e., 'line', 'bar', 'pie'
    seriesType: string,
    // series index in incoming option.series (make sense when componentType is 'series')
    seriesIndex: number,
    // series name (make sense when componentType is 'series')
    seriesName: string,
    // data name, category name
    name: string,
    // data index in incoming data array
    dataIndex: number,
    // incoming rwa data item
    data: Object,
    // Some series, such as sankey or graph, maintains more than
    // one types of data (nodeData and edgeData), which can be
    // distinguished from each other by dataType with its value
    // 'node' and 'edge'.
    // On the other hand, most series has only one type of data,
    // where dataType is not needed.
    dataType: string,
    // incoming data value
    value: number|Array,
    // color of component (make sense when componentType is 'series')
    color: string,
    // User info (only available in graphic component
    // and custom series, if element option has info
    // property, e.g., {type: 'circle', info: {some: 123}})
    info: *
}
```

Mouse events contain `'click'`, `'dblclick'`, `'mousedown'`, `'mousemove'`, `'mouseup'`, `'mouseover'`, `'mouseout'`, `'globalout'`, `'contextmenu'`.

See [Events and actions in ECharts](../tutorial.md#Events%20and%20actions%20in%20ECharts%0D)

## highlight
- **Type**: `Event`

**ACTION:** [highlight](api.action.md#highlight)

Event of data highlight.

## downplay
- **Type**: `Event`

**ACTION:** [downplay](api.action.md#downplay)

Event of data downplay.

## selectchanged
- **Type**: `Event`

**ACTION:** [toggleSelect](api.action.md#toggleSelect), [select](api.action.md#select), [unselect](api.action.md#unselect)

Event emitted when data selection is changed.

```
{
    type: 'selectchanged',
    fromAction: 'select' | 'toggleSelect' | 'unselect',
    // Grouped by series.
    selected: ({
        dataIndex: number[], seriesIndex: number
    })[]
}
```

## legendselectchanged
- **Type**: `Event`

**ACTION:** [legendToggleSelect](api.action.md#legend.legendToggleSelect) Event emitted after legend selecting state changes.

**Attention:** This event will be emitted when users toggle legend button in legend component.

```
{
    type: 'legendselectchanged',
    // change legend name
    name: string
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

## legendselected
- **Type**: `Event`

**ACTION:** [legendSelect](api.action.md#legend.legendSelect) Event emitted after legend is selected.

```
{
    type: 'legendselected',
    // name of selected legend
    name: string
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

**Attention:** In ECharts 2.x, event related to user switching lengend is now changed from `legendselected` to [legendselectchanged](api.events.md#legendselectchanged).

## legendunselected
- **Type**: `Event`

**ACTION:** [legendUnSelect](api.action.md#legend.legendUnSelect) Event emitted after unselecting legend.

```
{
    type: 'legendunselected',
    // name of unselected legend
    name: string
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

## legendselectall
- **Type**: `Event`

**ACTION:** [legendAllSelect](api.action.md#legend.legendAllSelect) Event emitted after all legends are selected.

```
{
    type: 'legendselectall',
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

## legendinverseselect
- **Type**: `Event`

**ACTION:** [legendInverseSelect](api.action.md#legend.legendInverseSelect) Event emitted after inversing all legends.

```
{
    type: 'legendinverseselect',
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

## legendscroll
- **Type**: `Event`

**ACTION:** [legendscroll](api.action.md#legend.legendScroll) Event when trigger legend scroll.

```
{
    type: 'legendscroll',
    scrollDataIndex: number
    legendId: string
}
```

## axisbreakchanged
- **Type**: `Event`

Since `v6.0.0`

**ACTION:** [expandAxisBreak](api.action.md#axis.expandAxisBreak), [collapseAxisBreak](api.action.md#axis.collapseAxisBreak) and [toggleAxisBreak](api.action.md#axis.toggleAxisBreak) will trigger this event.

```
{
    type: 'axisbreakchanged';
    // The type of the action that triggered this event.
    fromAction: 'expandAxisBreak' | 'collapseAxisBreak' | 'toggleAxisBreak';
    // The original input action payload.
    fromActionPayload: Payload;
    // This breaks array only includes only break items that is specified
    // in the action, rather than all break items existing in axes.
    breaks: {
        // start/end is also the unique identifier of this break item.
        start: number;
        end: number;

        // The index of the axis this break item belongs to.
        xAxisIndex?: number;
        yAxisIndex?: number;
        singleAxisIndex?: number;

        // The state after updating.
        isExpanded: boolean;
        old: {
            // The previous state.
            isExpanded: boolean;
        };
    }[]
}
```

**Notice:**When using [chart.setOption](api.echartsInstance.md#setOption) to update axis breaks, this event is not triggered. Only actions trigger this event.

## datazoom
- **Type**: `Event`

**ACTION:** [dataZoom](api.action.md#dataZoom.dataZoom)

Event emitted after zooming data area.

```
{
    type: 'datazoom',
    // percentage of zoom start position, 0 - 100
    start: number
    // percentage of zoom finish position, 0 - 100
    end: number
    // data value of zoom start position; only exists in zoom event of triggered by toolbar
    startValue?: number
    // data value of zoom finish position; only exists in zoom event of triggered by toolbar
    endValue?: number
}
```

## datarangeselected
- **Type**: `Event`

**ACTION:** [selectDataRange](api.action.md#dataRange.selectDataRange) Event emitted after range is changed in visualMap.

```
{
    type: 'datarangeselected',
    // continuous visualMap is different from discrete one
    // continuous visualMap is an array representing range of data values.
    // discrete visualMap is an object, whose key is category or piece index; value is `true` or `false`
    selected: Object|Array
}
```

## graphroam
- **Type**: `Event`

Event emitted after [series-graph](../option-parts/option.series-graph.md) is roamed.

```
{
    type: 'graphroam',
    seriesId: string,
    zoom: number, // zoom ratio of roaming once
    originX: number,
    originY: number
}
```

## georoam
- **Type**: `Event`

Event emitted after [geo](../option-parts/option.geo.md) is roamed.

```
{
    type: 'georoam',
    componentType: 'geo' | 'series',
    seriesId: string,
    zoom: number, // zoom ratio of roaming once
    totalZoom: number, // accumulated zoom ratio (since v5.5.1)
    originX: number,
    originY: number
}
```

## treeroam
- **Type**: `Event`

Event emitted after [series-tree](../option-parts/option.series-tree.md) is roamed.

`treeroam` events include two types. One is triggered by panning and the parameters are:

```
{
    type: 'treeroam',
    seriesId: string,
    dx: number,
    dy: number
}
```

The other type is triggered by zooming and the parameters are:

```
{
    type: 'treeroam',
    seriesId: string,
    zoom: number, // zoom ratio of roaming once
    originX: number,
    originY: number
}
```

## timelinechanged
- **Type**: `Event`

**ACTION:** [timelineChange](api.action.md#timeline.timelineChange) Event emitted after time point in timeline is changed.

```
{
    type: 'timelinechanged',
    // index of time point
    currentIndex: number
}
```

## timelineplaychanged
- **Type**: `Event`

**ACTION:** [timelinePlayChange](api.action.md#timeline.timelinePlayChange) Switching event of play state in timeline.

```
{
    type: 'timelineplaychanged',
    // play state, true for auto play
    playState: boolean
}
```

## restore
- **Type**: `Event`

**ACTION:** [restore](api.action.md#toolbox.restore) Resets option event.

```
{
    type: 'restore'
}
```

## dataviewchanged
- **Type**: `Event`

Changing event of [data view tool in toolbox](../option-parts/option.toolbox.md#feature.dataView).

```
{
    type: 'dataviewchanged'
}
```

## magictypechanged
- **Type**: `Event`

Switching event of [magic type tool in toolbox](../option-parts/option.toolbox.md#feature.magicType).

```
{
    type: 'magictypechanged',
    // click to change current type; same as type attribute in echarts 2.x
    currentType: string
}
```

## geoselectchanged
- **Type**: `Event`

**ACTION:** [geoToggleSelect](api.action.md#geo.geoToggleSelect)

Event emitted after selecting state changes.

It will be triggered when user clicks to select.

```
{
    type: 'geoselectchanged',
    // series ID, can be passed in option
    seriesId: string
    // data name
    name: name,
    // list for each geo component.
    // allSelected is supported since v5.1.0
    allSelected: ({
        geoIndex: number
        // selected names of each geo component.
        name: string[]
    })[],
    // (deprecated).
    // all selected data.
    // status of different geo components will be merged.
    selected: {
        [name: string]: boolean
    }
}
```

**Attention:** This event is the same as event `geoSelected` in ECharts 2.

## geoselected
- **Type**: `Event`

**ACTION:** [geoSelect](api.action.md#geo.geoSelect)

Event after selecting.

Use `dispatchAction` can trigger this event, but user clicking this event won't trigger this (User clicking event please use [geoselectchanged](api.events.md#geoselectchanged)).

```
{
    type: 'geoselected',
    // series ID, can incoming in option
    seriesId: string
    // data name
    name: name,
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

**Attention:** Event triggered by user switching legend in ECharts 2.x is changed from `geoselected` to [geoselectchanged](api.events.md#geoselectchanged).

## geounselected
- **Type**: `Event`

**ACTION:** [geoUnSelect](api.action.md#geo.geoUnSelect)

cancels selected event.

Use `dispatchAction` will trigger this event, but user clicking won't trigger it. (For user clicking event, please refer to [geoselectchanged](api.events.md#geoselectchanged)).

```
{
    type: 'geounselected',
    // series ID, can incoming in option
    seriesId: string
    // data name
    name: name,
    // table of all legend selecting states
    selected: {
        [name: string]: boolean
    }
}
```

## axisareaselected
- **Type**: `Event`

Selecting event of range of [parallel axis](../option-parts/option.parallelAxis.md).

When selecting axis range, the following method can be used to get data indices of currently highlighted lines, which is the list of indices in `data` of `series`.

```
chart.on('axisareaselected', function () {
    var series1 = chart.getModel().getSeries()[0];
    var series2 = chart.getModel().getSeries()[0];
    var indices1 = series1.getRawIndicesByActiveState('active');
    var indices2 = series2.getRawIndicesByActiveState('active');
    console.log(indices1);
    console.log(indices2);
});
```

## brush
- **Type**: `Event`

Event triggered after action [brush](api.action.md#brush.brush) dispatched.

## brushEnd
- **Type**: `Event`

Since `v4.5.0`

Event triggered after action [brushEnd](api.action.md#brush.brushEnd) dispatched.

## brushselected
- **Type**: `Event`

Notice what are selected.

See [brush component](../option-parts/option.brush.md).

This event will be triggered when `dispatchAction` called, or use do brush behavior. But this event will not be triggered in `setOption`.

Properties in this event.

```
{
    type: 'brushselected',
    batch: [
        {
            // Id of the brush component. In most case, only one brush component is used, so do not care about this property.
            brushId: string,
            // Index of the brush component.
            brushIndex: number,
            // Name of the brush component.
            brushName: string,

            // The brush areas (that is, select-boxes)
            areas: [
                { // The first area.
                    // `range`/`coordRange` is used to record the current
                    // range of the area, see the definitions in "brush
                    // action".

                    // If this area is "glboal arae" (that is, it does not
                    // belong to any coordinate system), use `range`, where
                    // the values are pixel.
                    range: Array.<number>,

                    // If the area is "coordinate system area', use `coordRange`,
                    // where the values are coordinates.
                    coordRange: Array.<number>,
                    // Specially, if the area belongs to an axis of a "grid" (e.g., set
                    // `xAxisIndex: 0`), and the axis belongs to more than one cartesian
                    // e.g., the `xAxis` corresponds to two `yAxis`), `coordRanges` is
                    // used to record the coordinates of this area in each cartesian,
                    // and `coordRange` is `coordRanges[0]`.
                    coordRanges: Array.<Array.<number>>,
                },
                ...
            ],

            // The selected items in each series.
            // Notice, if a series do not support `brush`, its cooresponding item still appear in this array. Namely, the index this array is the same as `seriesIndex`.
            selected: [
                { // The selected items in series 0.
                    seriesIndex: number,
                    // dataIndex can be used to find value in original data.
                    dataIndex: [ 3, 6, 12, 23 ]
                },
                { // The selected items in series 0.
                    seriesIndex: number,
                    dataIndex: []
                },
                ...
            ]
        },
        ...
    ]
}
```

Usage example of this event:

```
var dataBySeries = [
    [ 12, 23, 54, 6 ], // Data of series 0.
    [ 34, 34433, 2223, 21122, 1232, 34 ] // Data of series 1.
];

chart.setOption({
    ...,
    brush: {
        ...
    },
    series: [
        { // series 0
            data: dataBySeries[0]
        },
        { // series 1
            data: dataBySeries[1]
        }
    ]
});

chart.on('brushSelected', function (params) {
    var brushComponent = params.batch[0];

    var sum = 0; // The sum of all selected values.

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var dataIndices = brushComponent.selected[sIdx].dataIndex;

        for (var i = 0; i < dataIndices.length; i++) {
            var dataIndex = dataIndices[i];
            sum += dataBySeries[sIdx][dataIndex];
        }
    }
    console.log(sum);
});
```

**Tip:** [brush.throttleType](../option-parts/option.brush.md#throttleType) can be used to avoid triggering this event too frequently.

## globalcursortaken
- **Type**: `Event`

See [takeGlobalCursor](api.action.md#brush.takeGlobalCursor).

## rendered
- **Type**: `Event`

Trigger when a frame rendered. Notice that the `rendered` event does not indicate that the animation finished (see [animation](../option.md#animation) and relevant options) or progressive rendering finished (see [progressive](../option-parts/option.series-scatter.md#progressive) and relevant options).

For example:

```
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('rendered', function () {
    snapshotImage.src = chart.getDataURL();
});
```

## finished
- **Type**: `Event`

Triggered when render finished, that is, when animation finished (see [animation](../option.md#animation) and relevant options) and progressive rendering finished (see [progressive](../option-parts/option.series-scatter.md#progressive) and relevant options).

```
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('finished', function () {
    snapshotImage.src = chart.getDataURL();
});
```

Note that it's recommended to register the callbacks for such an event before `setOption` in case the callbacks may not be called as expected due to the timing issue when the animation is disabled.

```
var option = {
    // ...
    animation: false
    // ...
};
chart.on('finished', function () {
    // ...
});
chart.setOption(option);
```
