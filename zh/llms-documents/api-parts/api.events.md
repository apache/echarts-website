# api.events

## 鼠标事件
- **Type**: `*`

鼠标事件的事件参数是事件对象的数据的各个属性，对于图表的点击事件，基本参数如下，其它图表诸如饼图可能会有部分附加参数。例如饼图会有`percent`属性表示百分比，具体见各个图表类型的 label formatter 回调函数的 `params`。

```
{
    // 当前点击的图形元素所属的组件名称，
    // 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
    componentType: string,
    // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
    seriesType: string,
    // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
    seriesIndex: number,
    // 系列名称。当 componentType 为 'series' 时有意义。
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
    // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
    // 其他大部分图表中只有一种 data，dataType 无意义。
    dataType: string,
    // 传入的数据值
    value: number|Array,
    // 数据图形的颜色。当 componentType 为 'series' 时有意义。
    color: string,
    // 用户自定义的数据。只在 graphic component 和自定义系列（custom series）
    // 中生效，如果节点定义上设置了如：{type: 'circle', info: {some: 123}}。
    info: *
}
```

鼠标事件包括 `'click'`、`'dblclick'`、`'mousedown'`、`'mousemove'`、`'mouseup'`、`'mouseover'`、`'mouseout'`、`'globalout'`、`'contextmenu'`。

参见 [ECharts 中的事件和行为](https://echarts.apache.org/handbook/zh/concepts/event)

## highlight
- **Type**: `Event`

**ACTION:** [highlight](api.action.md#highlight)

高亮事件。

## downplay
- **Type**: `Event`

**ACTION:** [downplay](api.action.md#downplay)

取消高亮事件。

## selectchanged
- **Type**: `Event`

**ACTION:** [toggleSelect](api.action.md#toggleSelect), [select](api.action.md#select), [unselect](api.action.md#unselect)

在数据选中状态发生变化时触发的事件

```
{
    type: 'selectchanged',
    fromAction: 'select' | 'toggleSelect' | 'unselect',
    // 按系列分组的选中项列表
    selected: ({
        dataIndex: number[], seriesIndex: number
    })[]
}
```

## legendselectchanged
- **Type**: `Event`

**ACTION:** [legendToggleSelect](api.action.md#legend.legendToggleSelect) 切换图例选中状态后的事件。

**注：**图例组件用户切换图例开关会触发该事件。

```
{
    type: 'legendselectchanged',
    // 切换的图例名称
    name: string
    // 所有图例的选中状态表
    selected: {
        [name: string]: boolean
    }
}
```

## legendselected
- **Type**: `Event`

**ACTION:** [legendSelect](api.action.md#legend.legendSelect) 图例选中后的事件。

```
{
    type: 'legendselected',
    // 选中的图例名称
    name: string
    // 所有图例的选中状态表
    selected: {
        [name: string]: boolean
    }
}
```

**注：** ECharts 2.x 中用户开关图例对应的事件从 `legendselected` 改为 [legendselectchanged](api.events.md#legendselectchanged)。

## legendunselected
- **Type**: `Event`

**ACTION:** [legendUnSelect](api.action.md#legend.legendUnSelect) 图例取消选中后的事件。

```
{
    type: 'legendunselected',
    // 取消选中的图例名称
    name: string
    // 所有图例的选中状态表。
    selected: {
        [name: string]: boolean
    }
}
```

## legendselectall
- **Type**: `Event`

**ACTION:** [legendAllSelect](api.action.md#legend.legendAllSelect) 图例全选后的事件。

```
{
    type: 'legendselectall',
    // 所有图例的选中状态表。
    selected: {
        [name: string]: boolean
    }
}
```

## legendinverseselect
- **Type**: `Event`

**ACTION:** [legendInverseSelect](api.action.md#legend.legendInverseSelect) 图例反选后的事件。

```
{
    type: 'legendinverseselect',
    // 所有图例的选中状态表。
    selected: {
        [name: string]: boolean
    }
}
```

## legendscroll
- **Type**: `Event`

**ACTION:** [legendscroll](api.action.md#legend.legendScroll) 图例滚动事件。

```
{
    type: 'legendscroll',
    scrollDataIndex: number
    legendId: string
}
```

## axisbreakchanged
- **Type**: `Event`

从 `v6.0.0` 开始支持

**ACTION:** [expandAxisBreak](api.action.md#axis.expandAxisBreak), [collapseAxisBreak](api.action.md#axis.collapseAxisBreak) and [toggleAxisBreak](api.action.md#axis.toggleAxisBreak) 会派发本事件。

```
{
    type: 'axisbreakchanged';
    // 触发本事件的 action 的 type 。
    fromAction: 'expandAxisBreak' | 'collapseAxisBreak' | 'toggleAxisBreak';
    // 触发本事件的 action 的 payload 。
    fromActionPayload: Payload;
    // 本 breaks 数组里只包含 action 里指定的 break 项，
    // 而非 axis 里存在的所有 break 项。
    breaks: {
        // start/end 也被用于本 break 项的唯一标识。
        start: number;
        end: number;

        // 本 break item 所在的 axis 的 index。
        xAxisIndex?: number;
        yAxisIndex?: number;
        singleAxisIndex?: number;

        // 更新后的状态。
        isExpanded: boolean;
        old: {
            // 更新前的状态。
            isExpanded: boolean;
        };
    }[]
}
```

**注意：**使用 [chart.setOption](api.echartsInstance.md#setOption) 更新 axis breaks 时，不会触发本事件。只有 action 会触发本事件。

## datazoom
- **Type**: `Event`

**ACTION:** [dataZoom](api.action.md#dataZoom.dataZoom)

数据区域缩放后的事件。

```
{
    type: 'datazoom',
    // 缩放的开始位置的百分比，0 - 100
    start: number
    // 缩放的结束位置的百分比，0 - 100
    end: number
    // 缩放的开始位置的数值，只有在工具栏的缩放行为的事件中存在。
    startValue?: number
    // 缩放的结束位置的数值，只有在工具栏的缩放行为的事件中存在。
    endValue?: number
}
```

## datarangeselected
- **Type**: `Event`

**ACTION:** [selectDataRange](api.action.md#dataRange.selectDataRange) 视觉映射组件中，`range` 值改变后触发的事件。

```
{
    type: 'datarangeselected',
    // 连续型 visualMap 和 离散型 visualMap 不一样
    // 连续型的是一个表示数值范围的数组。
    // 离散型的是一个对象，键值是类目或者分段的索引。值是`true`或`false`
    selected: Object|Array
}
```

## graphroam
- **Type**: `Event`

关系图 [series-graph](../option-parts/option.series-graph.md) 的缩放和平移漫游事件。

```
{
    type: 'graphroam',
    seriesId: string,
    zoom: number, // 单次缩放倍数
    originX: number,
    originY: number
}
```

## georoam
- **Type**: `Event`

地理坐标系 [geo](../option-parts/option.geo.md) 的缩放和平移漫游事件。

```
{
    type: 'georoam',
    componentType: 'geo' | 'series',
    seriesId: string,
    zoom: number, // 单次缩放倍数
    totalZoom: number, // 累计缩放倍数 (从 v5.5.1 版本提供该参数)
    originX: number,
    originY: number
}
```

## treeroam
- **Type**: `Event`

树图 [series-tree](../option-parts/option.series-tree.md) 的缩放和平移漫游事件。

`treeroam` 事件包括两种，其中一种是平移，事件参数为：

```
{
    type: 'treeroam',
    seriesId: string,
    dx: number,
    dy: number
}
```

另一种是缩放，参数为：

```
{
    type: 'treeroam',
    seriesId: string,
    zoom: number, // 单次缩放倍数
    originX: number,
    originY: number
}
```

## timelinechanged
- **Type**: `Event`

**ACTION:** [timelineChange](api.action.md#timeline.timelineChange) 时间轴中的时间点改变后的事件。

```
{
    type: 'timelinechanged',
    // 时间点的 index
    currentIndex: number
}
```

## timelineplaychanged
- **Type**: `Event`

**ACTION:** [timelinePlayChange](api.action.md#timeline.timelinePlayChange) 时间轴中播放状态的切换事件。

```
{
    type: 'timelineplaychanged',
    // 播放状态，true 为自动播放
    playState: boolean
}
```

## restore
- **Type**: `Event`

**ACTION:** [restore](api.action.md#toolbox.restore) 重置 option 事件。

```
{
    type: 'restore'
}
```

## dataviewchanged
- **Type**: `Event`

[工具栏中数据视图](../option-parts/option.toolbox.md#feature.dataView)的修改事件。

```
{
    type: 'dataviewchanged'
}
```

## magictypechanged
- **Type**: `Event`

[工具栏中动态类型切换](../option-parts/option.toolbox.md#feature.magicType)的切换事件。

```
{
    type: 'magictypechanged',
    // 点击切换的当前类型，同 echarts 2.x 中的 type 属性
    currentType: string
}
```

## geoselectchanged
- **Type**: `Event`

**ACTION:** [geoToggleSelect](api.action.md#geo.geoToggleSelect)

[geo](../option-parts/option.geo.md) 中地图区域切换选中状态的事件。

用户点击选中会触发该事件。

```
{
    type: 'geoselectchanged',
    // 系列 ID，可以在 option 中传入
    seriesId: string,
    // 数据名称
    name: name,
    // 每个 geo 组件的选中信息列表。
    // allSelected 从 `v5.1.0` 开始支持
    allSelected: ({
        geoIndex: number
        // 每个 geo 组件上选中的名称列表。
        name: string[]
    })[],
    // 不推荐使用此属性。
    // 所有数据的选中状态表。
    // 不同 geo 组件的状态会被合并在一起。
    selected: {
        [name: string]: boolean
    }
}
```

## geoselected
- **Type**: `Event`

**ACTION:** [geoSelect](api.action.md#geo.geoSelect)

[geo](../option.md#{componentTypeFull}) 中地图区域选中后的事件。

使用`dispatchAction`可触发此事件，用户点击不会触发此事件（用户点击事件请使用 [geoselectchanged](api.events.md#geoselectchanged)）。

```
{
    type: 'geoselected',
    // 系列 ID，可以在 option 中传入
    seriesId: string
    // 数据名称
    name: name,
    // 所有数据的选中状态表。
    selected: {
        [name: string]: boolean
    }
}
```

## geounselected
- **Type**: `Event`

**ACTION:** [geoUnSelect](api.action.md#geo.geoUnSelect)

[geo](../option-parts/option.geo.md) 中地图区域取消选中后的事件。

使用`dispatchAction`可触发此事件，用户点击不会触发此事件（用户点击事件请使用 [geoselectchanged](api.events.md#geoselectchanged)）。

```
{
    type: 'geounselected',
    // 系列 ID，可以在 option 中传入
    seriesId: string
    // 数据名称
    name: name,
    // 所有数据的选中状态表。
    selected: {
        [name: string]: boolean
    }
}
```

## axisareaselected
- **Type**: `Event`

[平行坐标轴 (Parallel)](../option-parts/option.parallelAxis.md)范围选取事件。

当进行坐标轴范围选取时，可以用如下方式获取当前高亮的线所对应的 data indices （即 `series` 的 `data` 中的序号列表）。

```
chart.on('axisareaselected', function () {
    var series0 = chart.getModel().getSeries()[0];
    var series1 = chart.getModel().getSeries()[1];
    var indices0 = series0.getRawIndicesByActiveState('active');
    var indices1 = series1.getRawIndicesByActiveState('active');
    console.log(indices0, indices1);
});
```

## brush
- **Type**: `Event`

“选框正在添加”事件。即发出 [brush action](api.action.md#brush.brush) 得到的事件。

## brushEnd
- **Type**: `Event`

从 `v4.5.0` 开始支持

“选框添加完毕”事件。即发出 [brushEnd action](api.action.md#brush.brushEnd) 得到的事件。

## brushselected
- **Type**: `Event`

对外通知当前选中了什么。

参见 [区域选择](../option-parts/option.brush.md)。

这个事件，在 `setOption` 时不会发出，在其他的 dispatchAction 时，或者用户在界面中创建、删除、修改选框时会发出。

事件参数内容为：

```
{
    type: 'brushselected',
    batch: [
        {
            // brush 组件的 id，大多数情况只使用一个 brush 组件，所以不必理会。
            brushId: string,
            // brush 组件的 index。
            brushIndex: number,
            // brush 组件的 name。
            brushName: string,

            // 各个选框
            areas: [
                { // 第一个选框
                    // 则此处使用 range 或者 coordRange 记录了选框当前的形状。
                    // 其值参见 brush action 中 range/coordRange 的解释。

                    // 如果此选框是“全局选框”（即并不属于哪个坐标系），则使用 range 单位是像素。
                    range: Array.<number>,

                    // 如果此选框是“坐标系选框”，则使用 coordRange 和 coordRanges，单位为坐标系单位。
                    coordRange: Array.<number>,
                    // 其中，如果选框属于直角坐标系（grid）的某个轴（例如指定了 xAxisIndex: 0），
                    // 且此轴对应于多个 cartesian（例如，对应两个 yAxis），那么这里 coordRanges
                    // 是每个 cartesian 中的选框的范围值。而 coordRange 是 coordRanges[0]。
                    coordRanges: Array.<Array.<number>>,
                },
                ...
            ],

            // 每个系列被选中的项。
            // 注意，如果某个系列不支持 brush，但是还是会在这里出现对应的项。
            // 也就是说，selected 可以使用 seriesIndex 来直接找到对应的项。
            selected: [
                { // series 0 被选中的项
                    seriesIndex: number,
                    dataIndex: [ 3, 6, 12, 23 ] // 用这些 dataIndex，可以去原始数据中找到真正的值。
                },
                { // series 1 被选中的项
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

事件使用方式例如：

```
var dataBySeries = [
    [ 12, 23, 54, 6 ], // series 0 的数据
    [ 34, 34433, 2223, 21122, 1232, 34 ] // series 1 的数据
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

    var sum = 0; // 统计选中项的数据值的和

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        // 对于每个 series：
        var dataIndices = brushComponent.selected[sIdx].dataIndex;

        for (var i = 0; i < dataIndices.length; i++) {
            var dataIndex = dataIndices[i];
            sum += dataBySeries[sIdx][dataIndex];
        }
    }
    console.log(sum); // 用某种方式输出统计值。
});
```

如果想**避免此事件频繁触发**，可以使用 [brush.throttleType](../option-parts/option.brush.md#throttleType)。

## globalcursortaken
- **Type**: `Event`

参见 [takeGlobalCursor](api.action.md#brush.takeGlobalCursor)。

## rendered
- **Type**: `Event`

渲染结束事件。注意 `rendered` 事件并不代表渲染动画（参见 [animation](../option.md#animation) 相关配置）或者渐进渲染（参见 [progressive](../option-parts/option.series-scatter.md#progressive) 相关配置）停止，只代表本帧的渲染结束。

例如：

```
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('rendered', function () {
    snapshotImage.src = chart.getDataURL();
});
```

## finished
- **Type**: `Event`

渲染完成事件。当渲染动画（参见 [animation](../option.md#animation) 相关配置）或者渐进渲染（参见 [progressive](../option-parts/option.series-scatter.md#progressive) 相关配置）停止时触发。

```
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('finished', function () {
    snapshotImage.src = chart.getDataURL();
});
```

注意：建议在调用 `setOption` 前注册相关事件，否则在动画被禁用时，注册的事件回调可能因时序问题而不被执行。

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
