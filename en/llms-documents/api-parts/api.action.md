# api.action

## highlight
- **Type**: `Action`

Highlights specified data graphics.

```
// If highlight series:
dispatchAction({
    type: 'highlight',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // data index; could assign by name attribute when not defined
    dataIndex?: number | number[],
    // optional; data name; ignored when dataIndex is defined
    name?: string | string[],
});

// If highlight geo component (since v5.1.0):
dispatchAction({
    type: 'highlight',

    // Find geo by index or id or name.
    // Can be an array to find multiple components.
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // region in geo component.
    // Can be an array to specify multiple names.
    name?: string | string[],
});
```

## downplay
- **Type**: `Action`

Downplay specified data graphics.

```
// If downplay series:
dispatchAction({
    type: 'downplay',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // data index; could assign by name attribute when not defined
    dataIndex?: number | number[],
    // optional; data name; ignored when dataIndex is defined
    name?: string | string[],
});

// If downplay geo component (since v5.1.0):
dispatchAction({
    type: 'downplay',

    // Find geo by index or id or name.
    // Can be an array to find multiple components.
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // region in geo component.
    // Can be an array to specify multiple names.
    name?: string | string[],
});
```

## select
- **Type**: `Action`

Select specified data. Selected data will apply the style of [select](../option-parts/option.series-bar.md#select).

```
dispatchAction({
    type: 'select',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // data index; could assign by name attribute when not defined
    dataIndex?: number | number[],
    // optional; data name; ignored when dataIndex is defined
    name?: string | string[],
})
```

## unselect
- **Type**: `Action`

Unselect specified data.

```
dispatchAction({
    type: 'unselect',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // data index; could assign by name attribute when not defined
    dataIndex?: number | number[],
    // optional; data name; ignored when dataIndex is defined
    name?: string | string[],
})
```

## toggleSelect
- **Type**: `Action`

Toggle selected status of specified data.

```
dispatchAction({
    type: 'toggleSelect',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // data index; could assign by name attribute when not defined
    dataIndex?: number | number[],
    // optional; data name; ignored when dataIndex is defined
    name?: string | string[],
})
```

### axis.expandAxisBreak
- **Type**: `*`

Since `v6.0.0`

Expand one or multiple existing axis break items.

Can not be used to create a new axis break.

```
dispatchAction({
    type: 'expandAxisBreak',

    // The target axis components can be queried by either index, id, or name.
    xAxisIndex?: 'all' | number;
    xAxisId?: string | number;
    xAxisName?: string;
    yAxisIndex?: 'all' | number;
    yAxisId?: string | number;
    yAxisName?: string;
    singleAxisIndex?: 'all' | number;
    singleAxisId?: string | number;
    singleAxisName?: number;

    breaks: {
        // Use the start/end to identify the target break items.
        // See more details in doc: https://echarts.apache.org/en/option.html#xAxis.breaks.start
        start: string | number | Date,
        end: string | number | Date,
    }
})
```

Then event [axisbreakchanged](api.events.md#axisbreakchanged) is triggered.

See also [axis break isExpanded](../option-parts/option.xAxis.md#breaks.isExpanded).

### axis.collapseAxisBreak
- **Type**: `*`

Since `v6.0.0`

Collapse one or multiple existing axis break items.

Can not be used to create a new axis break.

```
dispatchAction({
    type: 'collapseAxisBreak',

    // The target axis components can be queried by either index, id, or name.
    xAxisIndex?: 'all' | number;
    xAxisId?: string | number;
    xAxisName?: string;
    yAxisIndex?: 'all' | number;
    yAxisId?: string | number;
    yAxisName?: string;
    singleAxisIndex?: 'all' | number;
    singleAxisId?: string | number;
    singleAxisName?: number;

    breaks: {
        // Use the start/end to identify the target break items.
        // See more details in doc: https://echarts.apache.org/en/option.html#xAxis.breaks.start
        start: string | number | Date,
        end: string | number | Date,
    }
})
```

Then event [axisbreakchanged](api.events.md#axisbreakchanged) is triggered.

See also [axis break isExpanded](../option-parts/option.xAxis.md#breaks.isExpanded).

### axis.toggleAxisBreak
- **Type**: `*`

Since `v6.0.0`

Toggle (expand/collapse) one or multiple existing axis break items.

Can not be used to create a new axis break.

```
dispatchAction({
    type: 'toggleAxisBreak',

    // The target axis components can be queried by either index, id, or name.
    xAxisIndex?: 'all' | number;
    xAxisId?: string | number;
    xAxisName?: string;
    yAxisIndex?: 'all' | number;
    yAxisId?: string | number;
    yAxisName?: string;
    singleAxisIndex?: 'all' | number;
    singleAxisId?: string | number;
    singleAxisName?: number;

    breaks: {
        // Use the start/end to identify the target break items.
        // See more details in doc: https://echarts.apache.org/en/option.html#xAxis.breaks.start
        start: string | number | Date,
        end: string | number | Date,
    }
})
```

Then event [axisbreakchanged](api.events.md#axisbreakchanged) is triggered.

See also [axis break isExpanded](../option-parts/option.xAxis.md#breaks.isExpanded).

## legend
- **Type**: `*`

Actions related to [legend component](../option-parts/option.legend.md), [legend component](../option-parts/option.legend.md) should be imported before use.

### legend.legendSelect
- **Type**: `Action`

Selects legend.

```
dispatchAction({
    type: 'legendSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendselected](api.events.md#legendselected)

### legend.legendUnSelect
- **Type**: `Action`

Unselects the legend.

```
dispatchAction({
    type: 'legendUnSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendunselected](api.events.md#legendunselected)

### legend.legendToggleSelect
- **Type**: `Action`

Toggles legend selecting state.

```
dispatchAction({
    type: 'legendToggleSelect',
    // legend name
    name: string
})
```

**EVENT:** [legendselectchanged](api.events.md#legendselectchanged)

### legend.legendAllSelect
- **Type**: `Action`

Selects all legends.

```
dispatchAction({
    type: 'legendAllSelect',

    // The following parameters are supported since v5.6.0
    // the id of target legend component
    legendId?: string | string[],
    // the index of target legend component
    legendIndex?: number | number[]
})
```

**EVENT:** [legendselectall](api.events.md#legendselectall)

### legend.legendInverseSelect
- **Type**: `Action`

Inverses all legends.

```
dispatchAction({
    type: 'legendInverseSelect',

    // The following parameters are supported since v5.6.0
    // the id of target legend component
    legendId?: string | string[],
    // the index of target legend component
    legendIndex?: number | number[]
})
```

**EVENT:** [legendinverseselect](api.events.md#legendinverseselect)

### legend.legendScroll
- **Type**: `Action`

Control the scrolling of legend. It works when [legend.type](../option-parts/option.legend.md#type) is `'scroll'`.

```
dispatchAction({
    type: 'legendScroll',
    // the index of the legend item to scroll to
    scrollDataIndex: number,

    // the id of target legend component
    legendId?: string | string[],
    // the index of target legend component
    legendIndex?: number | number[]
})
```

**EVENT:** [legendscroll](api.events.md#legendscroll)

## tooltip
- **Type**: `*`

Actions related to [tooltip component](../option-parts/option.tooltip.md), [tooltip component](../option-parts/option.tooltip.md) should be imported before use.

### tooltip.showTip
- **Type**: `Action`

Shows tooltip.

There are several usages as followed.

1 Display tooltip at certain position relative to container. If it cannot be displayed at the specified location, then it is invalid.

```
dispatchAction({
    type: 'showTip',
    // x coordinate on screen
    x: number,
    // y coordinate on screen
    y: number,
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: number[] | string | Function,
})
```

2 Specify graphic element in series, and display tooltip according to the tooltip configuration.

```
dispatchAction({
    type: 'showTip',
    // index of series, which is optional when trigger of tooltip is axis
    seriesIndex?: number,
    // data index; could assign by name attribute when not defined
    dataIndex?: number,
    // optional; data name; ignored when dataIndex is defined
    name?: string,,
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: number[] | string | Function,
})
```

3 Specify graphic element in geo component, and display tooltip according to the tooltip configuration.

Since `v5.1.0`

```
dispatchAction({
    type: 'showTip',
    // Find geo by index or id or name.
    // Can be an array to find multiple components.
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],
    // region name in geo component.
    name?: string,
    // Position of tooltip. Only works in this action.
    // Use tooltip.position in option by default.
    position: number[] | string | Function
})
```

Parameter `position` is the same as [tooltip.position](../option-parts/option.tooltip.md#position).

### tooltip.hideTip
- **Type**: `Action`

Hides tooltip.

```
dispatchAction({
    type: 'hideTip'
})
```

## dataZoom
- **Type**: `*`

Actions related to [data region zoom component](../option.md#dataZoom), [data region zoom component](../option.md#dataZoom) should be imported before use.

### dataZoom.dataZoom
- **Type**: `Action`

Zoom data region.

```
dispatchAction({
    type: 'dataZoom',
    // optional; index of dataZoom component; useful for are multiple dataZoom components; 0 by default
    dataZoomIndex: number,
    // percentage of starting position; 0 - 100
    start: number,
    // percentage of ending position; 0 - 100
    end: number,
    // data value at starting location
    startValue: number,
    // data value at ending location
    endValue: number
})
```

**EVENT:** [datazoom](api.events.md#datazoom)

### dataZoom.takeGlobalCursor
- **Type**: `Action`

Activate or inactivate `dataZoom` button in `toolbox`.

```
myChart.dispatchAction({
    type: 'takeGlobalCursor',
    key: 'dataZoomSelect',
    // Activate or inactivate.
    dataZoomSelectActive: true
});
```

## visualMap
- **Type**: `*`

Actions related to [visual mapping component](../option.md#visualMap), [visual mapping component](../option.md#visualMap) should be imported before use.

### visualMap.selectDataRange
- **Type**: `Action`

Selects data range of visual mapping.

```
dispatchAction({
    type: 'selectDataRange',
    // optional; index of visualMap component; useful for are multiple visualMap components; 0 by default
    visualMapIndex: number,
    // continuous visualMap is different from discrete one
    // continuous visualMap is an array representing range of data values.
    // discrete visualMap is an object, whose key is category or piece index; value is `true` or `false`
    selected: Object|Array
})
```

? **For example:**

```
myChart.dispatchAction({
    type: 'selectDataRange',
    // select a value range between 20 and 40
    selected: [20, 40],
    // cancel selecting the second range
    selected: { 1: false },
    // cancel selecting `excellent` category
    selected: { 'excellent': false }
});

```

**EVENT:** [datarangeselected](api.events.md#datarangeselected)

## timeline
- **Type**: `*`

Actions related to [timeline component](../option-parts/option.timeline.md), [timeline component](../option-parts/option.timeline.md) should be imported before use.

### timeline.timelineChange
- **Type**: `Action`

Sets the current time point.

```
dispatchAction({
    type: 'timelineChange',
    // index of time point
    currentIndex: number
})
```

**EVENT:** [timelinechanged](api.events.md#timelinechanged)

### timeline.timelinePlayChange
- **Type**: `Action`

Toggles playing status of timeline.

```
dispatchAction({
    type: 'timelinePlayChange',
    // laying status; true for auto-play
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](api.events.md#timelineplaychanged)

## toolbox
- **Type**: `*`

Actions related to [toolbox component](../option-parts/option.toolbox.md), [toolbox component](../option-parts/option.toolbox.md) should be imported before use.

### toolbox.restore
- **Type**: `Action`

Resets option.

```
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](api.events.md#restore)

## geo
- **Type**: `*`

Actions related to [geo](../option-parts/option.geo.md) component, [geo](../option-parts/option.geo.md) should be imported before use.

### geo.geoSelect
- **Type**: `Action`

Selects the specified geo region.

```
dispatchAction({
    type: 'geoSelect',

    // Find geo by index or id or name.
    // Can be an array to find multiple components.
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // region name in geo component.
    name?: string,

})
```

**EVENT:** [geoselected](api.events.md#geoselected)

### geo.geoUnSelect
- **Type**: `Action`

Cancels selecting specified geo region.

```
dispatchAction({
    type: 'geoUnSelect',

    // Find geo by index or id or name.
    // Can be an array to find multiple components.
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // region name in geo component.
    name?: string,

})
```

**EVENT:** [geounselected](api.events.md#geounselected)

### geo.geoToggleSelect
- **Type**: `Action`

Toggles selecting status of specified geo region.

```
dispatchAction({
    type: 'geoToggleSelect',

    // Find geo by index or id or name.
    // Can be an array to find multiple components.
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // region name in geo component.
    name?: string,

})
```

**EVENT:** [geoselectchanged](api.events.md#geoselectchanged)

## brush
- **Type**: `*`

[brush](../option-parts/option.brush.md) related actions.

### brush.brush
- **Type**: `*`

This action is dispatched when the "brush" behavior is performing. It sets select-boxes (areas) in this chart. For example:

```
myChart.dispatchAction({
    type: 'brush',
    areas: [ // "areas" means select-boxes. Multi-boxes can be specified.
             // If "areas" is empty, all of the select-boxes will be deleted.
        { // The first area.

            // Indicate that this area is a "coordinate system area", belonging
            // to a geo coordinate system with getIndex: 0.
            // We can also use xAxisIndex or yAxisIndex to indicate that
            // this area belongs to a catesian coordinate system.
            // If no coordinate system is specified, this area is a
            // "global area", which does not belong to any coordinate system.
            // If an area belongs to a coordinate system, this area moves
            // and scales alone with the coordinate system.
            geoIndex: 0,
            // xAxisIndex: 0,
            // yAxisIndex: 0,

            // Optional: 'polygon', 'rect', 'lineX', 'lineY'
            brushType: 'polygon',

            // Only for "global area", define the area with the pixel coordinates.
            range: [
                ...
            ],

            // Only for "coordinate system area", define the area with the
            // coordinates.
            coordRange: [
                // In this case, the area is in a geo coordinate system, so
                // this is [longitude, latitude].
                [119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]
            ]
        },
        ... // Other areas.
    ]
});
```

The content of `range` and `coordRange` can be:

*   If `brushType` is 'rect': `range` and `coordRange` is: `[[minX, maxX], [minY, maxY]]`
*   If `brushType` is 'lineX' or 'lineY': `range` and `coordRange` is: \[min, maxX\]
*   If `brushType` is 'polygon': `range` and `coordRange` is: \[\[point1X, point1X\], \[point2X, point2X\], ...\]

The difference between `range` and `coordRange` is:

*   If the area is "global area", we should use `range`.
*   If the area is "coordinate system area" (i.e., `geoIndex` or `xAxisIndex` or `yAxisIndex` is specified), we should use `coordRange`.
*   The unit of `range` is "pixel", while the unit of `coordRange` should be the save as the unit of the coordinate system. For example, in geo coordinate system, `coordRange` should be \[`longitude`, `latitude`\], and in cartesian, it should be \[`axis A value`, `axis B value`, `axis C value`, ...\].

### brush.brushEnd
- **Type**: `*`

Since `v4.5.0`

This action is dispatched when the "brush" behavior finished. The parameters are the same as [action brush](api.action.md#brush.brush).

### brush.takeGlobalCursor
- **Type**: `*`

The switch of the brush. This action can make the mouse enabled/disabled to brush. In fact, the brush buttons in [toolbox](../option-parts/option.toolbox.md#feature.brush) just use this action.

This event corresponding to this action is [globalCursorTaken](api.events.md#globalCursorTaken).

```
api.dispatchAction({
    type: 'takeGlobalCursor',
    // If intending to enable brush, must set. Otherwise, the mouse will be disabled to brush.
    key: 'brush',
    brushOption: {
        // See more info in the `brushType` of "brush component".
        // If set as `false`, the mouse is disabled to brush.
        brushType: string,
        // See more info in the `brushModel` of "brush component".
        // IF not set, use the `brushMode` of brush component.
        brushMode: string
    }
});
```

## treemap
- **Type**: `*`

Actions related to [treemap series](../option-parts/option.series-treemap.md).

### treemap.treemapZoomToNode
- **Type**: `Action`

Zoom to the target node.

```
dispatchAction({
    type: 'treemapZoomToNode',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // target node id or name (`name` is invalid if the target node has `id`)
    targetNodeId: string
})
```

### treemap.treemapRootToNode
- **Type**: `Action`

Zoom to and enter the target node.

```
dispatchAction({
    type: 'treemapRootToNode',

    // Find  by index or id or name.
    // Can be an array to find multiple components.
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // target node `id` or `name` (`name` is invalid if the target node has `id`)
    targetNodeId: string
})
```
