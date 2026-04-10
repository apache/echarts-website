# option.dataZoom-inside

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## disabled
- **Type**: `boolean`
- **Default**: `false`

是否停止组件的功能。

## xAxisIndex
- **Type**: `number|Array`

设置 `dataZoom-inside` 组件控制的 `x轴`（即[xAxis](option.xAxis.md)，是直角坐标系中的概念，参见 [grid](option.grid.md)）。

不指定时，当 [dataZoom-inside.orient](option.dataZoom-inside.md#orient) 为 `'horizontal'`时，默认控制和 dataZoom 平行的第一个 `xAxis`。但是不建议使用默认值，建议显式指定。

如果是 `number` 表示控制一个轴，如果是 `Array` 表示控制多个轴。

例如有如下 ECharts option：

```
option: {
    xAxis: [
        {...}, // 第一个 xAxis
        {...}, // 第二个 xAxis
        {...}, // 第三个 xAxis
        {...}  // 第四个 xAxis
    ],
    dataZoom: [
        { // 第一个 dataZoom 组件
            xAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 xAxis
        },
        { // 第二个 dataZoom 组件
            xAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 xAxis
        }
    ]
}
```

## yAxisIndex
- **Type**: `number|Array`

设置 `dataZoom-inside` 组件控制的 `y轴`（即[yAxis](option.yAxis.md)，是直角坐标系中的概念，参见 [grid](option.grid.md)）。

不指定时，当 [dataZoom-inside.orient](option.dataZoom-inside.md#orient) 为 `'vertical'`时，默认控制和 dataZoom 平行的第一个 `yAxis`。但是不建议使用默认值，建议显式指定。

如果是 `number` 表示控制一个轴，如果是 `Array` 表示控制多个轴。

例如有如下 ECharts option：

```
option: {
    yAxis: [
        {...}, // 第一个 yAxis
        {...}, // 第二个 yAxis
        {...}, // 第三个 yAxis
        {...}  // 第四个 yAxis
    ],
    dataZoom: [
        { // 第一个 dataZoom 组件
            yAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 yAxis
        },
        { // 第二个 dataZoom 组件
            yAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 yAxis
        }
    ]
}
```

## radiusAxisIndex
- **Type**: `number|Array`

设置 `dataZoom-inside` 组件控制的 `radius 轴`（即[radiusAxis](option.radiusAxis.md)，是直角坐标系中的概念，参见 [polar](option.polar.md)）。

如果是 `number` 表示控制一个轴，如果是 `Array` 表示控制多个轴。

例如有如下 ECharts option：

```
option: {
    radiusAxis: [
        {...}, // 第一个 radiusAxis
        {...}, // 第二个 radiusAxis
        {...}, // 第三个 radiusAxis
        {...}  // 第四个 radiusAxis
    ],
    dataZoom: [
        { // 第一个 dataZoom 组件
            radiusAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 radiusAxis
        },
        { // 第二个 dataZoom 组件
            radiusAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 radiusAxis
        }
    ]
}
```

## angleAxisIndex
- **Type**: `number|Array`

设置 `dataZoom-inside` 组件控制的 `angle 轴`（即[angleAxis](option.angleAxis.md)，是直角坐标系中的概念，参见 [polar](option.polar.md)）。

如果是 `number` 表示控制一个轴，如果是 `Array` 表示控制多个轴。

例如有如下 ECharts option：

```
option: {
    angleAxis: [
        {...}, // 第一个 angleAxis
        {...}, // 第二个 angleAxis
        {...}, // 第三个 angleAxis
        {...}  // 第四个 angleAxis
    ],
    dataZoom: [
        { // 第一个 dataZoom 组件
            angleAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 angleAxis
        },
        { // 第二个 dataZoom 组件
            angleAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 angleAxis
        }
    ]
}
```

## filterMode
- **Type**: `string`
- **Default**: `'filter'`

`dataZoom` 的运行原理是通过 `数据过滤` 以及在内部设置轴的显示窗口来达到 `数据窗口缩放` 的效果。

数据过滤模式（[dataZoom.filterMode](../option.md#dataZoom.filterMode)）的设置不同，效果也不同。

可选值为：

*   'filter'：当前数据窗口外的数据，被 **过滤掉**。即 **会** 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。
    
*   'weakFilter'：当前数据窗口外的数据，被 **过滤掉**。即 **会** 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。
    
*   'empty'：当前数据窗口外的数据，被 **设置为空**。即 **不会** 影响其他轴的数据范围。
    
*   'none': 不过滤数据，只改变数轴范围。
    

如何设置，由用户根据场景和需求自己决定。经验来说：

*   当『只有 X 轴 或 只有 Y 轴受 `dataZoom` 组件控制』时，常使用 `filterMode: 'filter'`，这样能使另一个轴自适应过滤后的数值范围。
    
*   当『X 轴 Y 轴分别受 `dataZoom` 组件控制』时：
    
    *   如果 X 轴和 Y 轴是『同等地位的、不应互相影响的』，比如在『双数值轴散点图』中，那么两个轴可都设为 `filterMode: 'empty'`。
        
    *   如果 X 轴为主，Y 轴为辅，比如在『柱状图』中，需要『拖动 `dataZoomX` 改变 X 轴过滤柱子时，Y 轴的范围也自适应剩余柱子的高度』，『拖动 `dataZoomY` 改变 Y 轴过滤柱子时，X 轴范围不受影响』，那么就 X轴设为 `filterMode: 'filter'`，Y 轴设为 `filterMode: 'empty'`，即主轴 `'filter'`，辅轴 `'empty'`。
        

下面是个具体例子：

```
option = {
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    xAxis: {type: 'value'},
    yAxis: {type: 'value'},
    series{
        type: 'bar',
        data: [
            // 第一列对应 X 轴，第二列对应 Y 轴。
            [12, 24, 36],
            [90, 80, 70],
            [3, 9, 27],
            [1, 11, 111]
        ]
    }
}
```

上例中，`dataZoomX` 的 `filterMode` 设置为 `'filter'`。于是，假设当用户拖拽 `dataZoomX`（不去动 `dataZoomY`）导致其 valueWindow 变为 `[2, 50]` 时，`dataZoomX` 对 series.data 的第一列进行遍历，窗口外的整项去掉，最终得到的 series.data 为：

```
[
    // 第一列对应 X 轴，第二列对应 Y 轴。
    [12, 24, 36],
    // [90, 80, 70] 整项被过滤掉，因为 90 在 dataWindow 之外。
    [3, 9, 27]
    // [1, 11, 111] 整项被过滤掉，因为 1 在 dataWindow 之外。
]
```

过滤前，series.data 中对应 Y 轴的值有 `24`、`80`、`9`、`11`，过滤后，只剩下 `24` 和 `9`，那么 Y 轴的显示范围就会自动改变以适应剩下的这两个值的显示（如果 Y 轴没有被设置 `min`、`max` 固定其显示范围的话）。

所以，`filterMode: 'filter'` 的效果是：过滤数据后使另外的轴也能自动适应当前数据的范围。

再从头来，上例中 `dataZoomY` 的 `filterMode` 设置为 `'empty'`。于是，假设当用户拖拽 `dataZoomY`（不去动 `dataZoomX`）导致其 dataWindow 变为 `[10, 60]` 时，`dataZoomY` 对 series.data 的第二列进行遍历，窗口外的值被设置为 empty （即替换为 NaN，这样设置为空的项，其所对应柱形，在 X 轴还有占位，只是不显示出来）。最终得到的 series.data 为：

```
[
    // 第一列对应 X 轴，第二列对应 Y 轴。
    [12, 24, 36],
    [90, NaN, 70], // 设置为 empty (NaN)
    [3, NaN, 27],  // 设置为 empty (NaN)
    [1, 11, 111]
]
```

这时，series.data 中对应于 X 轴的值仍然全部保留不受影响，为 `12`、`90`、`3`、`1`。那么用户对 `dataZoomY` 的拖拽操作不会影响到 X 轴的范围。这样的效果，对于离群点（outlier）过滤功能，比较清晰。

如下面的例子：

## start
- **Type**: `number`
- **Default**: `0`

数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。

[dataZoom-inside.start](option.dataZoom-inside.md#start) 和 [dataZoom-inside.end](option.dataZoom-inside.md#end) 共同用 **百分比** 的形式定义了数据窗口范围。

关于坐标轴范围（axis extent）和 `dataZoom-inside.start` 的关系的更多信息，请参见：[dataZoom-inside.rangeMode](option.dataZoom-inside.md#rangeMode)。

## end
- **Type**: `number`
- **Default**: `100`

数据窗口范围的结束百分比。范围是：0 ~ 100。

[dataZoom-inside.start](option.dataZoom-inside.md#start) 和 [dataZoom-inside.end](option.dataZoom-inside.md#end) 共同用 **百分比** 的形式定义了数据窗口范围。

关于坐标轴范围（axis extent）和 `dataZoom-inside.end` 的关系的更多信息，请参见：[dataZoom-inside.rangeMode](option.dataZoom-inside.md#rangeMode)。

## startValue
- **Type**: `number|string|Date`

数据窗口范围的起始数值。如果设置了 [dataZoom-inside.start](option.dataZoom-inside.md#start) 则 `startValue` 失效。

[dataZoom-inside.startValue](option.dataZoom-inside.md#startValue) 和 [dataZoom-inside.endValue](option.dataZoom-inside.md#endValue) 共同用 **绝对数值** 的形式定义了数据窗口范围。

注意，如果轴的类型为 `category`，则 `startValue` 既可以设置为 `axis.data` 数组的 `index`，也可以设置为数组值本身。 但是如果设置为数组值本身，会在内部自动转化为数组的 index。

关于坐标轴范围（axis extent）和 `dataZoom-inside.startValue` 的关系的更多信息，请参见：[dataZoom-inside.rangeMode](option.dataZoom-inside.md#rangeMode)。

## endValue
- **Type**: `number|string|Date`

数据窗口范围的结束数值。如果设置了 [dataZoom-inside.end](option.dataZoom-inside.md#end) 则 `endValue` 失效。

[dataZoom-inside.startValue](option.dataZoom-inside.md#startValue) 和 [dataZoom-inside.endValue](option.dataZoom-inside.md#endValue) 共同用 **绝对数值** 的形式定义了数据窗口范围。

注意，如果轴的类型为 `category`，则 `endValue` 即可以设置为 `axis.data` 数组的 `index`，也可以设置为数组值本身。 但是如果设置为数组值本身，会在内部自动转化为数组的 index。

关于坐标轴范围（axis extent）和 `dataZoom-inside.endValue` 的关系的更多信息，请参见：[dataZoom-inside.rangeMode](option.dataZoom-inside.md#rangeMode)。

## minSpan
- **Type**: `number`

用于限制窗口大小的最小值（百分比值），取值范围是 `0` ~ `100`。

如果设置了 [dataZoom-inside.minValueSpan](option.dataZoom-inside.md#minValueSpan) 则 `minSpan` 失效。

## maxSpan
- **Type**: `number`

用于限制窗口大小的最大值（百分比值），取值范围是 `0` ~ `100`。

如果设置了 [dataZoom-inside.maxValueSpan](option.dataZoom-inside.md#maxValueSpan) 则 `maxSpan` 失效。

## minValueSpan
- **Type**: `number|string|Date`

用于限制窗口大小的最小值（实际数值）。

如在时间轴上可以设置为：`3600 * 24 * 1000 * 5` 表示 5 天。 在类目轴上可以设置为 `5` 表示 5 个类目。

## maxValueSpan
- **Type**: `number|string|Date`

用于限制窗口大小的最大值（实际数值）。

如在时间轴上可以设置为：`3600 * 24 * 1000 * 5` 表示 5 天。 在类目轴上可以设置为 `5` 表示 5 个类目。

## orient
- **Type**: `string`

布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。

可选值为：

*   `'horizontal'`：水平。
    
*   `'vertical'`：竖直。

## zoomLock
- **Type**: `boolean`
- **Default**: `false`

是否锁定选择区域（或叫做数据窗口）的大小。

如果设置为 `true` 则锁定选择区域的大小，也就是说，只能平移，不能缩放。

## throttle
- **Type**: `number`
- **Default**: `100`

设置触发视图刷新的频率。单位为毫秒（ms）。

如果 [animation](../option.md#animation) 设为 `true` 且 [animationDurationUpdate](../option.md#animationDurationUpdate) 大于 `0`，可以保持 `throttle` 为默认值 `100`（或者设置为大于 `0` 的值），否则拖拽时有可能画面感觉卡顿。

如果 [animation](../option.md#animation) 设为 `false` 或者 [animationDurationUpdate](../option.md#animationDurationUpdate) 设为 `0`，且在数据量不大时，拖拽时画面感觉卡顿，可以把尝试把 `throttle` 设为 `0` 来改善。

## rangeMode
- **Type**: `Array`

形式为：`[rangeModeForStart, rangeModeForEnd]`。

例如 `rangeMode: ['value', 'percent']`，表示 start 值取绝对数值，end 取百分比。

每项可选值为：`'value'`, `'percent'`

*   `'value'` 模式：处于此模式下，坐标轴范围（axis extent）总只会被`dataZoom.startValue` and `dataZoom.endValue` 决定，而不管数据是多少，以及不管，`axis.min` 和 `axis.max` 怎么设置。
*   `'percent'` 模式：处于此模式下，`100` 代表 100% 的 `[dMin, dMax]`。这里 `dMin` 表示，如果 `axis.min` 设置了就是 `axis.min`，否则是 `data.extent[0]`；`dMax` 表示，如果 `axis.max` 设置了就是 `axis.max`，否则是 `data.extent[1]`。`[dMin, dMax]` 乘以 percent 的结果得到坐标轴范围（axis extent）。

默认情况下，`rangeMode` 总是被自动设定。如果指定了 `option.start`/`option.end` 那么就设定为 `'percent'`，如果指定了 `option.startValue`/`option.endValue` 那么就设定为 `'value'`。以及当用户用不用操作触发视图改变时，`rangeMode` 也可能会相应得变化（如，通过 `toolbox.dataZoom` 触发视图改变时，`rangeMode` 会自动被设置为 `value`，通过 `dataZoom-inside` 和 `dataZoom-slider` 触发视图改变时，会自动被设置为 `'percent'`）。

如果我们手动在 `option` 中设定了 `rangeMode`，那么它只在 `start` 和 `startValue` 都设置了或者 `end` 和 `endValue` 都设置了才有意义。所以通常我们没必要在 `option` 中指定 `rangeMode`。

举例一个使用场景：当我们使用动态数据时（即，周期性得通过 `setOption` 来改变数据），如果 `rangeMode` 在 `'value`' 模式，`dataZoom` 的窗口会一直保持在一个固定的值区间，无论数据怎么改变添加了多少；如果 `rangeMode` 在 `'percent'` 模式，窗口会随着数据的添加而改变（假设 `axis.min` 和 `axis.max` 没有被设置）。

## zoomOnMouseWheel
- **Type**: `boolean|string`
- **Default**: `true`

如何触发缩放。可选值为：

*   `true`：表示不按任何功能键，鼠标滚轮能触发缩放。
*   `false`：表示鼠标滚轮不能触发缩放。
*   `'shift'`：表示按住 `shift` 和鼠标滚轮能触发缩放。
*   `'ctrl'`：表示按住 `ctrl` 和鼠标滚轮能触发缩放。
*   `'alt'`：表示按住 `alt` 和鼠标滚轮能触发缩放。

## moveOnMouseMove
- **Type**: `boolean|string`
- **Default**: `true`

如何触发数据窗口平移。可选值为：

*   `true`：表示不按任何功能键，鼠标移动能触发数据窗口平移。
*   `false`：表示鼠标移动不能触发平移。
*   `'shift'`：表示按住 `shift` 和鼠标移动能触发数据窗口平移。
*   `'ctrl'`：表示按住 `ctrl` 和鼠标移动能触发数据窗口平移。
*   `'alt'`：表示按住 `alt` 和鼠标移动能触发数据窗口平移。

## moveOnMouseWheel
- **Type**: `boolean|string`
- **Default**: `true`

如何触发数据窗口平移。可选值为：

*   `true`：表示不按任何功能键，鼠标滚轮能触发数据窗口平移。
*   `false`：表示鼠标滚轮不能触发平移。
*   `'shift'`：表示按住 `shift` 和鼠标滚轮能触发数据窗口平移。
*   `'ctrl'`：表示按住 `ctrl` 和鼠标滚轮能触发数据窗口平移。
*   `'alt'`：表示按住 `alt` 和鼠标滚轮能触发数据窗口平移。

## preventDefaultMouseMove
- **Type**: `boolean`
- **Default**: `true`

是否阻止 mousemove 事件的默认行为。
