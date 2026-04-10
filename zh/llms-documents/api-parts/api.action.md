# api.action

## highlight
- **Type**: `Action`

高亮指定的数据图形。

```
// 如果要高亮系列：
dispatchAction({
    type: 'highlight',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number | number[],
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string | string[],
});

// 如果要高亮 geo 组件（从 `v5.1.0` 开始支持）：
dispatchAction({
    type: 'highlight',

    // 用 index 或 id 或 name 来指定 geo 组件。
    // 可以用数组指定多个 geo 组件。
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // geo 组件中 region 名称。
    // 可以是一个数组指定多个名称。
    name?: string | string[],
});
```

## downplay
- **Type**: `Action`

取消高亮指定的数据图形。

```
// 如果要取消高亮系列：
dispatchAction({
    type: 'downplay',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number | number[],
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string | string[],
})

// 如果要取消高亮 geo 组件（从 `v5.1.0` 开始支持）：
dispatchAction({
    type: 'downplay',

    // 用 index 或 id 或 name 来指定 geo 组件。
    // 可以用数组指定多个 geo 组件。
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // geo 组件中 region 名称。
    // 可以是一个数组指定多个名称。
    name?: string | string[],
});
```

## select
- **Type**: `Action`

选中指定的数据。选中数据会使用 [select](../option-parts/option.series-bar.md#select) 配置的样式。

```
dispatchAction({
    type: 'select',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number | number[],
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string | string[],
})
```

## unselect
- **Type**: `Action`

取消选中指定的数据。

```
dispatchAction({
    type: 'unselect',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number | number[],
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string | string[],
})
```

## toggleSelect
- **Type**: `Action`

切换选中状态

```
dispatchAction({
    type: 'toggleSelect',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number | number[],
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string | string[],
})
```

### axis.expandAxisBreak
- **Type**: `*`

从 `v6.0.0` 开始支持

展开一个或多个已存在的 axis break 项。不能用于创建新的 axis break 。

不能用于创建新的 axis break 。

```
dispatchAction({
    type: 'expandAxisBreak',

    // 坐标轴可以用 index、id 或 name 来检索到。
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
        // 使用 start/end 来定位要更改的 break 项。
        // 更多信息参见文档：https://echarts.apache.org/zh/option.html#xAxis.breaks.start
        start: string | number | Date,
        end: string | number | Date,
    }
})
```

继而事件 [axisbreakchanged](api.events.md#axisbreakchanged) 会被派发。

也参见 [axis break isExpanded](../option-parts/option.xAxis.md#breaks.isExpanded)。

### axis.collapseAxisBreak
- **Type**: `*`

从 `v6.0.0` 开始支持

折叠一个或多个已存在的 axis break 项。不能用于创建新的 axis break 。

不能用于创建新的 axis break 。

```
dispatchAction({
    type: 'collapseAxisBreak',

    // 坐标轴可以用 index、id 或 name 来检索到。
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
        // 使用 start/end 来定位要更改的 break 项。
        // 更多信息参见文档：https://echarts.apache.org/zh/option.html#xAxis.breaks.start
        start: string | number | Date,
        end: string | number | Date,
    }
})
```

继而事件 [axisbreakchanged](api.events.md#axisbreakchanged) 会被派发。

也参见 [axis break isExpanded](../option-parts/option.xAxis.md#breaks.isExpanded)。

### axis.toggleAxisBreak
- **Type**: `*`

从 `v6.0.0` 开始支持

切换（展开/折叠）一个或多个已存在的 axis break 项。不能用于创建新的 axis break 。

不能用于创建新的 axis break 。

```
dispatchAction({
    type: 'toggleAxisBreak',

    // 坐标轴可以用 index、id 或 name 来检索到。
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
        // 使用 start/end 来定位要更改的 break 项。
        // 更多信息参见文档：https://echarts.apache.org/zh/option.html#xAxis.breaks.start
        start: string | number | Date,
        end: string | number | Date,
    }
})
```

继而事件 [axisbreakchanged](api.events.md#axisbreakchanged) 会被派发。

也参见 [axis break isExpanded](../option-parts/option.xAxis.md#breaks.isExpanded)。

## legend
- **Type**: `*`

[图例组件](../option-parts/option.legend.md)相关的行为，必须引入[图例组件](../option-parts/option.legend.md)后才能使用。

### legend.legendSelect
- **Type**: `Action`

选中图例。

```
dispatchAction({
    type: 'legendSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendselected](api.events.md#legendselected)

### legend.legendUnSelect
- **Type**: `Action`

取消选中图例。

```
dispatchAction({
    type: 'legendUnSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendunselected](api.events.md#legendunselected)

### legend.legendToggleSelect
- **Type**: `Action`

切换图例的选中状态。

```
dispatchAction({
    type: 'legendToggleSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendselectchanged](api.events.md#legendselectchanged)

### legend.legendAllSelect
- **Type**: `Action`

将图例全选。

```
dispatchAction({
    type: 'legendAllSelect',

    // 下列参数自 v5.6.0 起开始支持
    // 图例组件ID
    legendId?: string | string[],
    // 图例组件索引
    legendIndex?: number | number[]
})
```

**EVENT:** [legendselectall](api.events.md#legendselectall)

### legend.legendInverseSelect
- **Type**: `Action`

将图例反选。

```
dispatchAction({
    type: 'legendInverseSelect',

    // 下列参数自 v5.6.0 起开始支持
    // 图例组件ID
    legendId?: string | string[],
    // 图例组件索引
    legendIndex?: number | number[]
})
```

**EVENT:** [legendinverseselect](api.events.md#legendinverseselect)

### legend.legendScroll
- **Type**: `Action`

控制图例的滚动。当 [legend.type](../option-parts/option.legend.md#type) 为 `'scroll'` 时有效。

```
dispatchAction({
    type: 'legendScroll',
    // 要滚动到的目标图例项索引
    scrollDataIndex: number,

    // 图例组件ID
    legendId?: string | string[],
    // 图例组件索引
    legendIndex?: number | number[]
})
```

**EVENT:** [legendscroll](api.events.md#legendscroll)

## tooltip
- **Type**: `*`

[提示框组件](../option-parts/option.tooltip.md)相关的行为，必须引入[提示框组件](../option-parts/option.tooltip.md)后才能使用。

### tooltip.showTip
- **Type**: `Action`

显示提示框。

有下面几种使用方式。

1 指定在相对容器的位置处显示提示框，如果指定的位置无法显示则无效。

```
dispatchAction({
    type: 'showTip',
    // 屏幕上的 x 坐标
    x: number,
    // 屏幕上的 y 坐标
    y: number,
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: number[] | string | Function,
})
```

2 指定系列中的数据图形，根据 tooltip 的配置项显示提示框。

```
dispatchAction({
    type: 'showTip',
    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
    seriesIndex?: number,
    // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number,
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string,,
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: number[] | string | Function,
})
```

3 指定 geo 组件中的 region 名，根据 tooltip 的配置项显示提示框。

从 `v5.1.0` 开始支持

```
dispatchAction({
    type: 'showTip',
    // 用 index 或 id 或 name 来指定 geo 组件。
    // 可以用数组指定多个 geo 组件。
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],
    // geo 组件中 region 名称。
    name?: string,
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: number[] | string | Function,
})
```

参数`position`同[tooltip.position](../option-parts/option.tooltip.md#position)相同。

### tooltip.hideTip
- **Type**: `Action`

隐藏提示框。

```
dispatchAction({
    type: 'hideTip'
})
```

## dataZoom
- **Type**: `*`

[数据区域缩放组件](../option.md#dataZoom)相关的行为，必须引入[数据区域缩放组件](../option.md#dataZoom)后才能使用。

### dataZoom.dataZoom
- **Type**: `Action`

数据区域缩放。

```
dispatchAction({
    type: 'dataZoom',
    // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
    dataZoomIndex: number,
    // 开始位置的百分比，0 - 100
    start: number,
    // 结束位置的百分比，0 - 100
    end: number,
    // 开始位置的数值
    startValue: number,
    // 结束位置的数值
    endValue: number
})
```

**EVENT:** [datazoom](api.events.md#datazoom)

### dataZoom.takeGlobalCursor
- **Type**: `Action`

启动或关闭 `toolbox` 中 `dataZoom` 的刷选状态。

```
myChart.dispatchAction({
    type: 'takeGlobalCursor',
    key: 'dataZoomSelect',
    // 启动或关闭
    dataZoomSelectActive: true
});
```

## visualMap
- **Type**: `*`

[视觉映射组件](../option.md#visualMap)相关的行为，必须引入[视觉映射组件](../option.md#visualMap)后才能使用。

### visualMap.selectDataRange
- **Type**: `Action`

选取映射的数值范围。

```
dispatchAction({
    type: 'selectDataRange',
    // 可选，visualMap 组件的 index，多个 visualMap 组件时有用，默认为 0
    visualMapIndex: number,
    // 连续型 visualMap 和 离散型 visualMap 不一样
    // 连续型的是一个表示数值范围的数组。
    // 离散型的是一个对象，键值是类目或者分段的索引。值是 `true`, `false`
    selected: Object|Array
})
```

å **示例：**

```
myChart.dispatchAction({
    type: 'selectDataRange',
    // 选取 20 到 40 的值范围
    selected: [20, 40],
    // 取消选中第二段
    selected: { 1: false },
    // 取消选中类目 `优`
    selected: { '优': false }
});

```

**EVENT:** [datarangeselected](api.events.md#datarangeselected)

## timeline
- **Type**: `*`

[时间轴组件](../option-parts/option.timeline.md)相关的行为，必须引入[时间轴组件](../option-parts/option.timeline.md)后才能使用。

### timeline.timelineChange
- **Type**: `Action`

设置当前的时间点。

```
dispatchAction({
    type: 'timelineChange',
    // 时间点的 index
    currentIndex: number
})
```

**EVENT:** [timelinechanged](api.events.md#timelinechanged)

### timeline.timelinePlayChange
- **Type**: `Action`

切换时间轴的播放状态。

```
dispatchAction({
    type: 'timelinePlayChange',
    // 播放状态，true 为自动播放
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](api.events.md#timelineplaychanged)

## toolbox
- **Type**: `*`

[工具栏组件](../option-parts/option.toolbox.md)相关的行为，必须引入[工具栏组件](../option-parts/option.toolbox.md)后才能使用。

### toolbox.restore
- **Type**: `Action`

重置 option。

```
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](api.events.md#restore)

## geo
- **Type**: `*`

[地图组件](../option-parts/option.geo.md)相关的行为，必须引入[地图组件](../option-parts/option.geo.md)后才能使用。

### geo.geoSelect
- **Type**: `Action`

选中指定的地图区域。

```
dispatchAction({
    type: 'geoSelect',

    // 用 index 或 id 或 name 来指定 geo 组件。
    // 可以用数组指定多个 geo 组件。
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // geo 组件中 region 名称。
    name?: string,

})
```

**EVENT:** [geoselected](api.events.md#geoselected)

### geo.geoUnSelect
- **Type**: `Action`

取消选中指定的地图区域。

```
dispatchAction({
    type: 'geoUnSelect',

    // 用 index 或 id 或 name 来指定 geo 组件。
    // 可以用数组指定多个 geo 组件。
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // geo 组件中 region 名称。
    name?: string,

})
```

**EVENT:** [geounselected](api.events.md#geounselected)

### geo.geoToggleSelect
- **Type**: `Action`

切换指定的地图区域选中状态。

```
dispatchAction({
    type: 'geoToggleSelect',

    // 用 index 或 id 或 name 来指定 geo 组件。
    // 可以用数组指定多个 geo 组件。
    geoIndex?: number | number[],
    geoId?: string | string[],
    geoName?: string | string[],

    // geo 组件中 region 名称。
    name?: string,

})
```

**EVENT:** [geoselectchanged](api.events.md#geoselectchanged)

## brush
- **Type**: `*`

[区域选择](../option-parts/option.brush.md)相关的行为。

### brush.brush
- **Type**: `*`

“刷选”动作进行中时，会触发此 action。 此 action 能设置或删除 chart 中的选框，例如：

```
myChart.dispatchAction({
    type: 'brush',
    areas: [ // areas 表示选框的集合，可以指定多个选框。
             // 如果 areas 为空，则删除所有选框。
             // 注意这并非增量接口而是全量接口，所以应包括所有的选框。
        { // 选框一：

            // 指定此选框是“坐标系选框”，属于 index 为 0 的 geo 坐标系。
            // 也可以通过 xAxisIndex 或 yAxisIndex 来指定此选框属于直角坐标系。
            // 如果没有指定，则此选框属于“全局选框”。不属于任何坐标系。
            // 属于『坐标系选框』，可以随坐标系一起缩放平移。属于全局的选框不行。
            geoIndex: 0,
            // xAxisIndex: 0,
            // yAxisIndex: 0,

            // 指定选框的类型。可以为 'polygon', 'rect', 'lineX', 'lineY'
            brushType: 'polygon',

            // 如果是“全局选框”，则使用 range 来描述选框的范围（里面是像素坐标）。
            range: [
                ...
            ],
            // 如果是“坐标系选框”，则使用 coordRange 来指定选框的范围（里面是坐标系坐标）。
            coordRange: [
                // 这个例子中，因为指定了 geoIndex，所以 coordRange 里单位是经纬度。
                [119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]
            ]
        },
        ... // 选框二、三、四、...
    ]
});
```

其中，`areas` 中的 `range` 和 `coordRange` 的格式，根据 brushType 不同而不同：

*   brushType 为 'rect' `range` 和 `coordRange` 的格式为：`[[minX, maxX], [minY, maxY]]`
*   brushType 为 'lineX' 或 'lineY' `range` 和 `coordRange` 的格式为：\[min, maxX\]
*   brushType 为 'polygon' `range` 和 `coordRange` 的格式为：\[\[point1X, point1X\], \[point2X, point2X\], ...\]

`range` 和 `coordRange` 的区别是：

*   当此选框为『全局选框』时，使用 `range`。
*   当此选框为『坐标系选框』时（即指定了 `geoIndex` 或 `xAxisIndex` 或 `yAxisIndex` 时），使用 `coordRange`。
*   `range` 的单位为 _像素_，`coordRange` 的单位为 _坐标系单位_，比如 geo 中，`coordRange` 单位为经纬度，直角坐标系中，coordRange 单位为对应轴的数据的单位。

### brush.brushEnd
- **Type**: `*`

从 `v4.5.0` 开始支持

“刷选” 动作完毕时，会自动触发此 action。 其参数和 [brush action](api.action.md#brush.brush) 完全相同。

### brush.takeGlobalCursor
- **Type**: `*`

刷选模式的开关。使用此 action 可将当前鼠标变为可刷选状态。 事实上，点击 [toolbox](../option-parts/option.toolbox.md#feature.brush) 中的 brush 按钮时，就是通过这个 action，将当前普通鼠标变为刷选器的。例如：

此 action 对应的事件为 [globalCursorTaken](api.events.md#globalCursorTaken)。

```
api.dispatchAction({
    type: 'takeGlobalCursor',
    // 如果想变为“可刷选状态”，必须设置。不设置则会关闭“可刷选状态”。
    key: 'brush',
    brushOption: {
        // 参见 brush 组件的 brushType。如果设置为 false 则关闭“可刷选状态”。
        brushType: string,
        // 参见 brush 组件的 brushMode。如果不设置，则取 brush 组件的 brushMode 设置。
        brushMode: string
    }
});
```

## treemap
- **Type**: `*`

[矩形树图](../option-parts/option.series-treemap.md)相关的行为。

### treemap.treemapZoomToNode
- **Type**: `Action`

缩放到指定节点。

```
dispatchAction({
    type: 'treemapZoomToNode',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 目标节点 id 或 name （如果节点指定了 id，则不能使用 name）
    targetNodeId: string
})
```

### treemap.treemapRootToNode
- **Type**: `Action`

缩放并进入到指定节点。

```
dispatchAction({
    type: 'treemapRootToNode',

    // 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],

    // 目标节点 id 或 name （如果节点指定了 id，则不能使用 name）
    targetNodeId: string
})
```
