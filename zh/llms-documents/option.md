# option

## title
- **Type**: `Object`

标题组件，包含主标题和副标题。

在 ECharts 2.x 中单个 ECharts 实例最多只能拥有一个标题组件。但是在 ECharts 3 中可以存在任意多个标题组件，这在需要标题进行排版，或者单个实例中的多个图表都需要标题时会比较有用。

**例如下面不同缓动函数效果的示例，每一个缓动效果图都带有一个标题组件：**

## legend
- **Type**: `Object`

图例组件。

图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。

ECharts 3 中单个 echarts 实例中可以存在多个图例组件，会方便多个图例的布局。

当图例数量过多时，可以使用 [滚动图例（垂直）](https://echarts.apache.org/examples/zh/editor.html?c=pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](https://echarts.apache.org/examples/zh/editor.html?c=radar2&edit=1&reset=1)，参见：[legend.type](option-parts/option.legend.md#type)

## grid
- **Type**: `Object`

`grid 组件` 是一个矩形容器，用于绘制二维直角坐标系（`cartesian2d`）。一个 `cartesian2d` 坐标系由一个 [xAxis](option.md#xAixs) 和一个 [yAxis](option-parts/option.yAxis.md) 构成。一个 `grid 组件` 中可以存在多个 `cartesian2d` 坐标系。即，一个 `grid 组件` 可以配置多个 [xAxis](option.md#xAixs) 和多个 [yAxis](option-parts/option.yAxis.md)。

[xAxis](option.md#xAixs) 和 [yAxis](option-parts/option.yAxis.md) 可以被多个 `cartesian2d` 坐标系共享。例如，一个 [xAxis](option.md#xAixs) 和两个 [yAxis](option-parts/option.yAxis.md) 构成两个 `cartesian2d` 坐标系。

可以在 `grid 组件` 中绘制例如 [折线图](option-parts/option.series-line.md)，[柱状图](option-parts/option.series-bar.md)，[散点图（气泡图）](option-parts/option.series-scatter.md) 等等。

> 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，自从 ECharts 3 开始可以存在任意多个 `grid 组件`。

**例如下面这个 Anscombe Quartet 的示例：**

## xAxis
- **Type**: `Object`

直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 [offset](option-parts/option.xAxis.md#offset) 属性防止同个位置多个 x 轴的重叠。

## yAxis
- **Type**: `Object`

直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 [offset](option-parts/option.yAxis.md#offset) 属性防止同个位置多个 Y 轴的重叠。

## polar
- **Type**: `Object`

极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个[角度轴](option-parts/option.angleAxis.md)和一个[半径轴](option-parts/option.radiusAxis.md)。

**示例：**

## radiusAxis
- **Type**: `Object`

极坐标系的径向轴。

## angleAxis
- **Type**: `Object`

极坐标系的角度轴。

## radar
- **Type**: `Object`

雷达图坐标系组件，只适用于[雷达图](option-parts/option.series-radar.md)。该组件等同 ECharts 2 中的 polar 组件。因为 3 中的 polar 被重构为标准的极坐标组件，为避免混淆，雷达图使用 radar 组件作为其坐标系。

雷达图坐标系与极坐标系不同的是它的每一个轴（indicator 指示器）都是一个单独的维度，可以通过 [name](option-parts/option.radar.md#name)、[axisLine](option-parts/option.radar.md#axisLine)、[axisTick](option-parts/option.radar.md#axisTick)、[axisLabel](option-parts/option.radar.md#axisLabel)、[splitLine](option-parts/option.radar.md#splitLine)、 [splitArea](option-parts/option.radar.md#splitArea) 几个配置项配置指示器坐标轴线的样式。

下面是一个 radar 组件的一个自定义例子。

## dataZoom
- **Type**: `Array`

`dataZoom` 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。

现在支持这几种类型的 `dataZoom` 组件：

*   [内置型数据区域缩放组件（dataZoomInside）](option-parts/option.dataZoom-inside.md)：内置于坐标系中，使用户可以在坐标系上通过鼠标拖拽、鼠标滚轮、手指滑动（触屏上）来缩放或漫游坐标系。
    
*   [滑动条型数据区域缩放组件（dataZoomSlider）](option-parts/option.dataZoom-slider.md)：有单独的滑动条，用户在滑动条上进行缩放或漫游。
    
*   [框选型数据区域缩放组件（dataZoomSelect）](option-parts/option.toolbox.md#feature.dataZoom)：提供一个选框进行数据区域缩放。即 [toolbox.feature.dataZoom](option-parts/option.toolbox.md#feature.dataZoom)，配置项在 `toolbox` 中。
    

如下例子：

  

* * *

**✦ dataZoom 和 数轴的关系 ✦**

`dataZoom` 主要是对 `数轴（axis）` 进行操作（控制数轴的显示范围，或称窗口（window））。

> 可以通过 [dataZoom.xAxisIndex](option.md#dataZoom.xAxisIndex) 或 [dataZoom.yAxisIndex](option.md#dataZoom.yAxisIndex) 或 [dataZoom.radiusAxisIndex](option.md#dataZoom.radiusAxisIndex) 或 [dataZoom.angleAxisIndex](option.md#dataZoom.angleAxisIndex) 来指定 `dataZoom` 控制哪个或哪些数轴。

`dataZoom` 组件可 **同时存在多个**，起到共同控制的作用。如果多个 `dataZoom` 组件共同控制同一个数轴，他们会自动联动。

  

* * *

**✦ dataZoom 组件如何影响轴和数据 ✦**

`dataZoom` 的运行原理是通过 `数据过滤` 以及在内部设置轴的显示窗口来达到 `数据窗口缩放` 的效果。

数据过滤模式（[dataZoom.filterMode](option.md#dataZoom.filterMode)）的设置不同，效果也不同。

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

另外，如果在任一个数轴上设置了 `min`、`max`（如设置 `yAxis: {min: 0, max: 400}`），那么这个数轴无论如何也不会被其他数轴的 dataZoom 行为影响了。

  

* * *

**✦ 数据窗口的设置 ✦**

`dataZoom` 的数据窗口范围的设置，目前支持两种形式：

*   百分比形式：即设置 [dataZoom.start](option.md#dataZoom.start) 和 [dataZoom.end](option.md#dataZoom.end)。
    
*   绝对数值形式：即设置 [dataZoom.startValue](option.md#dataZoom.startValue) 和 [dataZoom.endValue](option.md#dataZoom.endValue)。
    

注意：当使用百分比形式指定 `dataZoom` 范围时，且处于如下场景（或类似场景）中，`dataZoom` 的结果是和 `dataZoom` 组件的定义顺序相关的。

```
option = {
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
            start: 30,
            end: 70
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty',
            start: 20,
            end: 80
        }
    ],
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
        // yAxis 中并没有使用 min、max 来显示限定轴的显示范围。
    },
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

在上例中，`dataZoomY` 的 `start: 20, end: 80` 到底表示什么意思？

*   如果 `yAxis.min`、`yAxis.max` 进行了直接设置：
    
    那么 `dataZoomY` 的 `start: 20, end: 80` 表示 `yAxis.min` ~ `yAxis.max` 的 `20%` 到 `80%`。
    
*   如果 `yAxis.min`、`yAxis.max` 没有设置：
    
    *   如果 `dataZoomX` 设置为 `filterMode: 'empty'`：
        
        那么 `dataZoomY` 的 `start: 20, end: 80` 表示 series.data 中 `dataMinY` ~ `dataMaxY`（即上例中的 `9` ~ `80`）的 `20%` 到 `80%`。
        
    *   如果 `dataZoomX` 设置为 `filterMode: 'filter'`：
        
        那么，因为 `dataZoomX` 定义 `dataZoomY` 组件之前，所以 `dataZoomX` 的 `start: 30, end: 70` 表示全部数据的 `30%` 到 `70%`，而 `dataZoomY` 组件的 `start: 20, end: 80` 表示经过 `dataZoomX` 过滤处理后，所得数据集的 `20%` 到 `80%`。
        
        如果需要改变这种处理顺序，那么改变 `dataZoomX` 和 `dataZoomY` 在 option 中的出现顺序即可。

## dataZoom-inside
- **Type**: `Object`

**内置型数据区域缩放组件（dataZoomInside）**

（参考[数据区域缩放组件（dataZoom）的介绍](option.md#dataZoom)）

所谓『内置』，即内置在坐标系中。

*   平移：在坐标系中滑动拖拽进行数据区域平移。
*   缩放：
    *   PC端：鼠标在坐标系范围内滚轮滚动（MAC触控板类同）
    *   移动端：在移动端触屏上，支持两指滑动缩放。

## dataZoom-slider
- **Type**: `Object`

**滑动条型数据区域缩放组件（dataZoomInside）**

滑动条型数据区域缩放组件提供了数据缩略图显示，缩放，刷选，拖拽，点击快速定位等数据筛选的功能。下图显示了该组件可交互部分

![](../documents/asset/img/dataZoom-zone.png)

## visualMap
- **Type**: `Array`

`visualMap` 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。

视觉元素可以是：  

*   `symbol`: 图元的图形类别。
*   `symbolSize`: 图元的大小。
*   `color`: 图元的颜色。
*   `colorAlpha`: 图元的颜色的透明度。
*   `opacity`: 图元以及其附属物（如文字标签）的透明度。
*   `colorLightness`: 颜色的明暗度，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。
*   `colorSaturation`: 颜色的饱和度，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。
*   `colorHue`: 颜色的色调，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。

`visualMap` 组件可以定义多个，从而可以同时对数据中的多个维度进行视觉映射。

`visualMap` 组件可以定义为 [分段型（visualMapPiecewise）](option-parts/option.visualMap-piecewise.md) 或 [连续型（visualMapContinuous）](option-parts/option.visualMap-continuous.md)，通过 `type` 来区分。例如：

```
option = {
    visualMap: [
        { // 第一个 visualMap 组件
            type: 'continuous', // 定义为连续型 visualMap
            ...
        },
        { // 第二个 visualMap 组件
            type: 'piecewise', // 定义为分段型 visualMap
            ...
        }
    ],
    ...
};
```

  
**✦ 视觉映射方式的配置 ✦**

既然是『数据』到『视觉元素』的映射，`visualMap` 中可以指定数据的『哪个维度』（参见[visualMap.dimension](option.md#visualMap.dimension)）映射到哪些『视觉元素』（参见[visualMap.inRange](option.md#visualMap.inRange) 和 [visualMap.outOfRange](option.md#visualMap.outOfRange)）中。

  
在 visualMap 组件所控制的 series 中，如果 series 中某个数据项需要避开 visualMap 映射，可以这么配置：

```
series: {
    type: '...',
    data: [
        {name: 'Shanghai', value: 251},
        {name: 'Haikou', value: 21},
        // 设置 `visualMap: false` 则 visualMap 不对此项进行控制，此时系列
        // 可使用自身的视觉参数（color/symbol/ ...控制此项的显示。
        {name: 'Beijing', value: 821, visualMap: false},
        ...
    ]
}
```

  
**✦ 与 ECharts2 中 dataRange 的关系 ✦**

`visualMap` 是由 ECharts2 中的 `dataRange` 组件改名以及扩展而来。ECharts3里 `option` 中的 `dataRange` 配置项仍然被兼容，会自动转换成 `visualMap` 配置项。在option中推荐写 `visualMap` 而非 `dataRange`。

## visualMap-continuous
- **Type**: `Object`

**连续型视觉映射组件（visualMapContinuous）**

（参考[视觉映射组件（visualMap）的介绍](option.md#visualMap)）

`visualMapContinuous`中，可以通过 [visualMap.calculable](option.md#visualMap.calculable) 来显示或隐藏手柄（手柄能拖拽改变值域）。

## visualMap-piecewise
- **Type**: `Object`

**分段型视觉映射组件（visualMapPiecewise）**

（参考[视觉映射组件（visualMap）的介绍](option.md#visualMap)）

分段型视觉映射组件，有三种模式：

*   **连续型数据平均分段**: 依据 [visualMap-piecewise.splitNumber](option-parts/option.visualMap-piecewise.md#splitNumber) 来自动平均分割成若干块。
*   **连续型数据自定义分段**: 依据 [visualMap-piecewise.pieces](option-parts/option.visualMap-piecewise.md#pieces) 来定义每块范围。
*   **离散数据根据类别分段**: 类别定义在 [visualMap-piecewise.categories](option-parts/option.visualMap-piecewise.md#categories) 中。

## tooltip
- **Type**: `Object`

提示框组件。

* * *

**提示框组件的通用介绍：**

提示框组件可以设置在多种地方：

*   可以设置在全局，即 [tooltip](option-parts/option.tooltip.md)
    
*   可以设置在坐标系中，即 [grid.tooltip](option-parts/option.grid.md#tooltip)、[polar.tooltip](option-parts/option.polar.md#tooltip)、[single.tooltip](option.md#single.tooltip)
    
*   可以设置在系列中，即 [series.tooltip](option.md#series.tooltip)
    
*   可以设置在系列的每个数据项中，即 [series.data.tooltip](option.md#series.data.tooltip)

## axisPointer
- **Type**: `Object`

这是坐标轴指示器（axisPointer）的全局公用设置。

* * *

坐标轴指示器是指示坐标轴当前刻度的工具。

如下例，鼠标悬浮到图上，可以出现标线和刻度文本。

上例中，使用了 [axisPointer.link](option-parts/option.axisPointer.md#link) 来关联不同的坐标系中的 axisPointer。

坐标轴指示器也有适合触屏的交互方式，如下：

坐标轴指示器在多轴的场景能起到辅助作用：

* * *

> **注意：** 一般来说，axisPointer 的具体配置项会配置在各个轴中（如 [xAxis.axisPointer](option-parts/option.xAxis.md#axisPointer)）或者 `tooltip` 中（如 [tooltip.axisPointer](option-parts/option.tooltip.md#axisPointer)）。

> 但是这几个选项只能配置在全局的 axisPointer 中：[axisPointer.triggerOn](option-parts/option.axisPointer.md#triggerOn)、[axisPointer.link](option-parts/option.axisPointer.md#link)。

* * *

**如何显示 axisPointer：**

直角坐标系 [grid](option-parts/option.grid.md)、极坐标系 [polar](option-parts/option.polar.md)、单轴坐标系 [single](option.md#single) 中的每个轴都自己的 axisPointer。

他们的 axisPointer 默认不显示。有两种方法可以让他们显示：

*   设置轴上的 `axisPointer.show`（例如 [xAxis.axisPointer.show](option-parts/option.xAxis.md#axisPointer.show)）为 `true`，则显示此轴的 axisPointer。
    
*   设置 [tooltip.trigger](option-parts/option.tooltip.md#trigger) 设置为 `'axis'` 或者 [tooltip.axisPointer.type](option-parts/option.tooltip.md#axisPointer.type) 设置为 `'cross'`，则此时坐标系会自动选择显示哪个轴的 axisPointer，也可以使用 [tooltip.axisPointer.axis](option-parts/option.tooltip.md#axisPointer.axis) 改变这种选择。注意，轴上如果设置了 axisPointer，会覆盖此设置。
    

* * *

**如何显示 axisPointer 的 label：**

axisPointer 的 label 默认不显示（也就是默认只显示指示线），除非：

*   设置轴上的 `axisPointer.label.show`（例如 [xAxis.axisPointer.label.show](option-parts/option.xAxis.md#axisPointer.show)）为 `true`，则显示此轴的 axisPointer 的 label。
    
*   设置 [tooltip.axisPointer.type](option-parts/option.tooltip.md#axisPointer.type) 为 `'cross'` 时会自动显示 axisPointer 的 label。
    

* * *

**关于触屏的 axisPointer 的设置**

设置轴上的 `axisPointer.handle.show`（例如 [xAxis.axisPointer.handle.show](option-parts/option.xAxis.md#axisPointer.handle.show) 为 `true` 则会显示出此 axisPointer 的拖拽按钮。（polar 坐标系暂不支持此功能）。

**注意：** 如果发现此时 tooltip 效果不良好，可设置 [tooltip.triggerOn](option-parts/option.tooltip.md#triggerOn) 为 `'none'`（于是效果为：手指按住按钮则显示 tooltip，松开按钮则隐藏 tooltip），或者 [tooltip.alwaysShowContent](option-parts/option.tooltip.md#alwaysShowContent) 为 `true`（效果为 tooltip 一直显示）。

参见[例子](https://echarts.apache.org/examples/zh/editor.html?c=line-tooltip-touch&edit=1&reset=1)。

* * *

**自动吸附到数据（snap）**

对于数值轴、时间轴，如果开启了 [snap](option-parts/option.xAxis.md#axisPointer.snap)，则 axisPointer 会自动吸附到最近的点上。

* * *

## toolbox
- **Type**: `Object`

工具栏。内置有[导出图片](option-parts/option.toolbox.md#feature.saveAsImage)，[数据视图](option-parts/option.toolbox.md#feature.dataView)，[动态类型切换](option-parts/option.toolbox.md#feature.magicType)，[数据区域缩放](option-parts/option.toolbox.md#feature.dataZoom)，[重置](option-parts/option.toolbox.md#feature.reset)五个工具。

**如下示例：**

## brush
- **Type**: `Object`

`brush` 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。

  

* * *

**刷子的类型和启动按钮**

目前 `brush` 组件支持的图表类型：`scatter`、`bar`、`candlestick`（`parallel` 本身自带刷选功能，但并非由 brush 组件来提供）。

点击 `toolbox` 中的按钮，能够进行『区域选择』、『清除选择』等操作。

  
`横向刷子` 的示例如下（点击 `toolbox` 中的按钮启动刷选）：

  
`bar` 图中的 `brush`（点击 `toolbox` 中的按钮启动刷选）：

启动 `brush` 的按钮既可以在 `toolbox` 中指定（参见 [toolbox.feature.brush.type](option-parts/option.toolbox.md#feature.brush.type)），也可以在 `brush` 组件的配置中指定（参见 [brush.toolbox](option-parts/option.brush.md#toolbox)）。

支持这几种选框：`矩形刷子`，`任意形状刷子`，`横向刷子`，`纵向刷子`。参见 [brush.toolbox](option-parts/option.brush.md#toolbox)。

可以使用 `保持选择` 按钮，切换单选和多选模式。

*   单选即同时只能存在一个选框，可单击空白区域消除选框。
*   多选即同时可存在多个选框，单击空白区域不能消除选框，需要点击『清除按钮』消除线框。

  

* * *

**刷选和坐标系的关系**

可以设置 `brush` 是『全局的』还是『属于坐标系的』。

**全局 brush**

在 echarts 实例中任意地方刷选。这是默认情况。如果没有指定为『坐标系 brush』，就是『全局 brush』。

**坐标系 brush**

在 指定的坐标系中刷选。选框可以跟随坐标系的缩放和平移（roam 和 dataZoom）而移动。

坐标系 brush 实际更为常用，尤其是在 geo 中。

通过指定 [brush.geoIndex](option-parts/option.brush.md#geoIndex) 或 [brush.xAxisIndex](option-parts/option.brush.md#xAxisIndex) 或 [brush.yAxisIndex](option-parts/option.brush.md#yAxisIndex) 来规定可以在哪些坐标系中进行刷选。

这几个配置项的取值可以是：

*   `'all'`，表示所有
*   `number`，如 `0`，表示这个 index 所对应的坐标系。
*   `Array`，如 `[0, 4, 2]`，表示指定这些 index 所对应的坐标系。
*   `'none'` 或 `null` 或 `undefined`，表示不指定。

例如：

```
option = {
    geo: {
        ...
    },
    brush: {
        geoIndex: 'all', // 只可以在所有 geo 坐标系中刷选，也就是上面定义的 geo 组件中。
        ...
    }
};
```

例如：

```
option = {
    grid: [
        {...}, // grid 0
        {...}  // grid 1
    ],
    xAxis: [
        {gridIndex: 1, ...}, // xAxis 0，属于 grid 1。
        {gridIndex: 0, ...}  // xAxis 1，属于 grid 0。
    ],
    yAxis: [
        {gridIndex: 1, ...}, // yAxis 0，属于 grid 1。
        {gridIndex: 0, ...}  // yAxis 1，属于 grid 0。
    ],
    brush: {
        xAxisIndex: [0, 1], // 只可以在 xAxisIndex 为 `0` 和 `1` 的 xAxis 所在的直角坐标系中刷选。
        ...
    }
};
```

  

* * *

**使用 API 控制选框**

可以通过调用 `dispatchAction` 来用程序主动渲染选框，例如：

```
myChart.dispatchAction({
    type: 'brush',
    areas: [
        {
            geoIndex: 0,
            // 指定选框的类型。
            brushType: 'polygon',
            // 指定选框的形状。
            coordRange: [[119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]]
        }
    ]
});
```

详情参见 [action.brush](api-parts/api.action.md#brush)

  

* * *

**brushLink**

不同系列间，选中的项可以联动。

参见如下效果（刷选一个 `scatter`，其他 `scatter` 以及 `parallel` 图都会有选中效果）：

`brushLink` 配置项是一个数组，内容是 seriesIndex，指定了哪些 series 可以被联动。例如可以是：

*   `[3, 4, 5]` 表示 seriesIndex 为 `3`, `4`, `5` 的 series 可以被联动。
*   `'all'` 表示所有 series 都进行 brushLink。
*   `'none'` 或 `null` 或 `undefined` 表示不启用 brushLink 功能。

**注意**

brushLink 是通过 dataIndex 进行映射，所以需要保证，**联动的每个系列的 `data` 都是 `index` 对应的**。\*

例如：

```
option = {
    brush: {
        brushLink: [0, 1]
    },
    series: [
        {
            type: 'bar'
            data: [232,    4434,    545,      654]     // data 有四个项
        },
        {
            type: 'parallel',
            data: [[4, 5], [3, 5], [66, 33], [99, 66]] // data 同样有四个项，两个系列的 data 是对应的。
        }
    ]
};
```

参见 [brush.brushLink](option-parts/option.brush.md#brushLink)。

  

* * *

**throttle / debounce / 事件延迟**

默认情况，刷选或者移动选区的时候，会不断得发 `brushSelected` 事件，从而告诉外界选中的内容。

但是频繁的事件可能导致性能问题，或者动画效果很差。所以 brush 组件提供了 [brush.throttleType](option-parts/option.brush.md#throttleType)，[brush.throttleDelay](option-parts/option.brush.md#throttleDelay) 来解决这个问题。

throttleType 取值可以是：

*   `'debounce'`：表示只有停止动作了（即一段时间没有操作了），才会触发事件。时间阈值由 [brush.throttleDelay](option-parts/option.brush.md#throttleDelay) 指定。
*   `'fixRate'`：表示按照一定的频率触发事件，时间间隔由 [brush.throttleDelay](option-parts/option.brush.md#throttleDelay) 指定。

  

* * *

**被选中项和未被选中项的视觉设置**

参见 [brush.inBrush](option-parts/option.brush.md#inBrush) 和 [brush.outOfBrush](option-parts/option.brush.md#outOfBrush)。

  

* * *

下面是详细配置。

## geo
- **Type**: `Object`

地理坐标系组件。

地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制[散点图](option-parts/option.series-scatter.md)，[线集](option-parts/option.series-lines.md)。

`3.1.10` 开始 geo 组件也支持鼠标事件。事件参数为

```
{
    componentType: 'geo',
    // Geo 组件在 option 中的 index
    geoIndex: number,
    // 点击区域的名称，比如"上海"
    name: string,
    // 传入的点击区域的 region 对象，见 geo.regions
    region: Object
}
```

**Tip:** geo 区域的颜色也可以被 map series 所控制，参见 [series-map.geoIndex](option-parts/option.series-map.md#geoIndex)。

## parallel
- **Type**: `Object`

**平行坐标系介绍**

[平行坐标系（Parallel Coordinates）](https://en.wikipedia.org/wiki/Parallel_coordinates) 是一种常用的可视化高维数据的图表。

例如 [series-parallel.data](option-parts/option.series-parallel.md#data) 中有如下数据：

```
[
    [1,  55,  9,   56,  0.46,  18,  6,  '良'],
    [2,  25,  11,  21,  0.65,  34,  9,  '优'],
    [3,  56,  7,   63,  0.3,   14,  5,  '良'],
    [4,  33,  7,   29,  0.33,  16,  6,  '优'],
    { // 数据项也可以是 Object，从而里面能含有对线条的特殊设置。
        value: [5,  42,  24,  44,  0.76,  40,  16, '优']
        lineStyle: {...},
    }
    ...
]
```

数据中，每一行是一个『数据项』，每一列属于一个『维度』。（例如上面数据每一列的含义分别是：『日期』,『AQI指数』, 『PM2.5』, 『PM10』, 『一氧化碳值』, 『二氧化氮值』, 『二氧化硫值』）。

平行坐标系适用于对这种多维数据进行可视化分析。每一个维度（每一列）对应一个坐标轴，每一个『数据项』是一条线，贯穿多个坐标轴。在坐标轴上，可以进行数据选取等操作。如下：

**配置方式概要**

『平行坐标系』的 `option` 基本配置如下例：

```
option = {
    parallelAxis: [                     // 这是一个个『坐标轴』的定义
        {dim: 0, name: schema[0].text}, // 每个『坐标轴』有个 'dim' 属性，表示坐标轴的维度号。
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
            type: 'category',           // 坐标轴也可以支持类别型数据
            data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
        }
    ],
    parallel: {                         // 这是『坐标系』的定义
        left: '5%',                     // 平行坐标系的位置设置
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {          // 『坐标轴』的公有属性可以配置在这里避免重复书写
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [                           // 这里三个系列共用一个平行坐标系
        {
            name: '北京',
            type: 'parallel',           // 这个系列类型是 'parallel'
            data: [
                [1,  55,  9,   56,  0.46,  18,  6,  '良'],
                [2,  25,  11,  21,  0.65,  34,  9,  '优'],
                ...
            ]
        },
        {
            name: '上海',
            type: 'parallel',
            data: [
                [3,  56,  7,   63,  0.3,   14,  5,  '良'],
                [4,  33,  7,   29,  0.33,  16,  6,  '优'],
                ...
            ]
        },
        {
            name: '广州',
            type: 'parallel',
            data: [
                [4,  33,  7,   29,  0.33,  16,  6,  '优'],
                [5,  42,  24,  44,  0.76,  40,  16, '优'],
                ...
            ]
        }
    ]
};
```

需要涉及到三个组件：[parallel](option-parts/option.parallel.md)、[parallelAxis](option-parts/option.parallelAxis.md)、[series-parallel](option-parts/option.series-parallel.md)

*   [parallel](option-parts/option.parallel.md)
    
    这个配置项是平行坐标系的『坐标系』本身。一个系列（`series`）或多个系列（如上图中的『北京』、『上海』、『广州』分别各是一个系列）可以共用这个『坐标系』。
    
    和其他坐标系一样，坐标系也可以创建多个。
    
    位置设置，也是放在这里进行。
    
*   [parallelAxis](option-parts/option.parallelAxis.md)
    
    这个是『坐标系』中的坐标轴的配置。自然，需要有多个坐标轴。
    
    其中有 [parallelAxis.parallelIndex](option-parts/option.parallelAxis.md#parallelIndex) 属性，指定这个『坐标轴』在哪个『坐标系』中。默认使用第一个『坐标系』。
    
*   [series-parallel](option-parts/option.series-parallel.md)
    
    这个是『系列』的定义。系列被画到『坐标系』上。
    
    其中有 [series-parallel.parallelIndex](option-parts/option.series-parallel.md#parallelIndex) 属性，指定使用哪个『坐标系』。默认使用第一个『坐标系』。
    

**配置注意和最佳实践**

配置多个 [parallelAxis](option-parts/option.parallelAxis.md) 时，有些值一样的属性，如果书写多遍则比较繁琐，那么可以放置在 [parallel.parallelAxisDefault](option-parts/option.parallel.md#parallelAxisDefault) 里。在坐标轴初始化前，[parallel.parallelAxisDefault](option-parts/option.parallel.md#parallelAxisDefault) 里的配置项，会分别融合进 [parallelAxis](option-parts/option.parallelAxis.md)，形成最终的坐标轴的配置。

**如果数据量很大并且发生卡顿**

建议把 [series-parallel.lineStyle.width](option-parts/option.series-parallel.md#lineStyle.width) 设为 `0.5`（或更小）， 可能显著改善性能。

**高维数据的显示**

维度比较多时，比如有 50+ 的维度，那么就会有 50+ 个轴。那么可能会页面显示不下。

可以通过 [parallel.axisExpandable](option-parts/option.parallel.md#axisExpandable) 来改善显示效果。

## parallelAxis
- **Type**: `Object`

这个组件是平行坐标系中的坐标轴。

**平行坐标系介绍**

[平行坐标系（Parallel Coordinates）](https://en.wikipedia.org/wiki/Parallel_coordinates) 是一种常用的可视化高维数据的图表。

例如 [series-parallel.data](option-parts/option.series-parallel.md#data) 中有如下数据：

```
[
    [1,  55,  9,   56,  0.46,  18,  6,  '良'],
    [2,  25,  11,  21,  0.65,  34,  9,  '优'],
    [3,  56,  7,   63,  0.3,   14,  5,  '良'],
    [4,  33,  7,   29,  0.33,  16,  6,  '优'],
    { // 数据项也可以是 Object，从而里面能含有对线条的特殊设置。
        value: [5,  42,  24,  44,  0.76,  40,  16, '优']
        lineStyle: {...},
    }
    ...
]
```

数据中，每一行是一个『数据项』，每一列属于一个『维度』。（例如上面数据每一列的含义分别是：『日期』,『AQI指数』, 『PM2.5』, 『PM10』, 『一氧化碳值』, 『二氧化氮值』, 『二氧化硫值』）。

平行坐标系适用于对这种多维数据进行可视化分析。每一个维度（每一列）对应一个坐标轴，每一个『数据项』是一条线，贯穿多个坐标轴。在坐标轴上，可以进行数据选取等操作。如下：

**配置方式概要**

『平行坐标系』的 `option` 基本配置如下例：

```
option = {
    parallelAxis: [                     // 这是一个个『坐标轴』的定义
        {dim: 0, name: schema[0].text}, // 每个『坐标轴』有个 'dim' 属性，表示坐标轴的维度号。
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
            type: 'category',           // 坐标轴也可以支持类别型数据
            data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
        }
    ],
    parallel: {                         // 这是『坐标系』的定义
        left: '5%',                     // 平行坐标系的位置设置
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {          // 『坐标轴』的公有属性可以配置在这里避免重复书写
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [                           // 这里三个系列共用一个平行坐标系
        {
            name: '北京',
            type: 'parallel',           // 这个系列类型是 'parallel'
            data: [
                [1,  55,  9,   56,  0.46,  18,  6,  '良'],
                [2,  25,  11,  21,  0.65,  34,  9,  '优'],
                ...
            ]
        },
        {
            name: '上海',
            type: 'parallel',
            data: [
                [3,  56,  7,   63,  0.3,   14,  5,  '良'],
                [4,  33,  7,   29,  0.33,  16,  6,  '优'],
                ...
            ]
        },
        {
            name: '广州',
            type: 'parallel',
            data: [
                [4,  33,  7,   29,  0.33,  16,  6,  '优'],
                [5,  42,  24,  44,  0.76,  40,  16, '优'],
                ...
            ]
        }
    ]
};
```

需要涉及到三个组件：[parallel](option-parts/option.parallel.md)、[parallelAxis](option-parts/option.parallelAxis.md)、[series-parallel](option-parts/option.series-parallel.md)

*   [parallel](option-parts/option.parallel.md)
    
    这个配置项是平行坐标系的『坐标系』本身。一个系列（`series`）或多个系列（如上图中的『北京』、『上海』、『广州』分别各是一个系列）可以共用这个『坐标系』。
    
    和其他坐标系一样，坐标系也可以创建多个。
    
    位置设置，也是放在这里进行。
    
*   [parallelAxis](option-parts/option.parallelAxis.md)
    
    这个是『坐标系』中的坐标轴的配置。自然，需要有多个坐标轴。
    
    其中有 [parallelAxis.parallelIndex](option-parts/option.parallelAxis.md#parallelIndex) 属性，指定这个『坐标轴』在哪个『坐标系』中。默认使用第一个『坐标系』。
    
*   [series-parallel](option-parts/option.series-parallel.md)
    
    这个是『系列』的定义。系列被画到『坐标系』上。
    
    其中有 [series-parallel.parallelIndex](option-parts/option.series-parallel.md#parallelIndex) 属性，指定使用哪个『坐标系』。默认使用第一个『坐标系』。
    

**配置注意和最佳实践**

配置多个 [parallelAxis](option-parts/option.parallelAxis.md) 时，有些值一样的属性，如果书写多遍则比较繁琐，那么可以放置在 [parallel.parallelAxisDefault](option-parts/option.parallel.md#parallelAxisDefault) 里。在坐标轴初始化前，[parallel.parallelAxisDefault](option-parts/option.parallel.md#parallelAxisDefault) 里的配置项，会分别融合进 [parallelAxis](option-parts/option.parallelAxis.md)，形成最终的坐标轴的配置。

**如果数据量很大并且发生卡顿**

建议把 [series-parallel.lineStyle.width](option-parts/option.series-parallel.md#lineStyle.width) 设为 `0.5`（或更小）， 可能显著改善性能。

**高维数据的显示**

维度比较多时，比如有 50+ 的维度，那么就会有 50+ 个轴。那么可能会页面显示不下。

可以通过 [parallel.axisExpandable](option-parts/option.parallel.md#axisExpandable) 来改善显示效果。

## singleAxis
- **Type**: `Object`

单轴。可以被应用到散点图中展现一维数据，如下示例

## timeline
- **Type**: `Object`

`timeline` 组件，提供了在多个 ECharts `option` 间进行切换、播放等操作的功能。

示例效果如下：

`timeline` 和其他场景有些不同，它需要操作『多个option』。我们把传入 `setOption` 第一个参数的东西，称为 `ECOption`，然后称传统的 ECharts 单个 option 为 `ECUnitOption`。

*   当 `timeline` 和 `media query` 没有被设置时，一个 `ECUnitOption` 就是一个 `ECOption`。
*   当 `timeline` 或 `media query` 被使用设置时，一个 `ECOption` 由几个 `ECUnitOption` 组成。
    *   `ECOption` 的各个根属性，形成一个 `ECUnitOption`，叫做 `baseOption`，它代表了各种默认设置。
    *   `options` 数组每项，形成一个 `ECUnitOption`，我们为了方便也叫做 `switchableOption`，它代表了每个时间粒度对应的 option。
*   `baseOption` 和一个 `switchableOption` 会用来计算最终的 `finalOption`，图表就是根据这个最终结果绘制的。

例如：

```
// 如下，baseOption 是一个 『原子option』，options 数组
// 中的每一项也是一个 『原子option』。
// 每个『原子option』中就是本文档中描述的各种配置项。
myChart.setOption({
    // `baseOption` 的属性.
    timeline: {
        ...,
        // `timeline.data` 中的每一项，对应于 `options`
        // 数组中的每个 `option`
        data: ['2002-01-01', '2003-01-01', '2004-01-01']
    },
    grid: { ... },
    xAxis: [ ... ],
    yAxis: [ ... ],
    series: [{
        // 系列一的一些其他配置
        type: 'bar',
        ...
    }, {
        // 系列二的一些其他配置
        type: 'line',
        ...
    }, {
        // 系列三的一些其他配置
        type: 'pie',
        ...
    }],
    // `switchableOption`s:
    options: [{
        // 这是'2002-01-01' 对应的 option
        title: {
            text: '2002年统计值'
        },
        series: [
            { data: [] }, // 系列一的数据
            { data: [] }, // 系列二的数据
            { data: [] }  // 系列三的数据
        ]
    }, {
        // 这是'2003-01-01' 对应的 option
        title: {
            text: '2003年统计值'
        },
        series: [
            { data: [] },
            { data: [] },
            { data: [] }
        ]
    }, {
        // 这是'2004-01-01' 对应的 option
        title: {
            text: '2004年统计值'
        },
        series: [
            { data: [] },
            { data: [] },
            { data: [] }
        ]
    }]
});
```

  
**`finalOption` 是怎么计算出来的?**

初始化的时候，对应于当前时间的那个 `switchableOption` 会被合并（merge）到 `baseOption`，形成 `finalOption`。而每当时间变化时，对应于新时间的 `switchableOption` 会被合并（merge）到`finalOption`。

有两种合并（merge）策略：

*   默认使用 `NORMAL_MERGE`。
*   如果 [timeline.replaceMerge](option.md#option.html#timeline.replaceMerge) 被指定了，则使用 `REPLACE_MERGE`。如果要知道 `REPLACE_MERGE` 更多信息，可以参见 [setOption](option.md#api.html#echartsInstance.setOption) 中 `REPLACE_MERGE` 一节。 。

  
**兼容 ECharts4**

如下这种设置方式，也支持：

```
option = {
    baseOption: {
        timeline: {},
        series: [],
        // ... other properties of baseOption.
    },
    options: []
};
```

## graphic
- **Type**: `*`

`graphic` 是原生图形元素组件。可以支持的图形元素包括：

[image](option-parts/option.graphic.md#elements-image), [text](option-parts/option.graphic.md#elements-text), [circle](option-parts/option.graphic.md#elements-circle), [sector](option-parts/option.graphic.md#elements-sector), [ring](option-parts/option.graphic.md#elements-ring), [polygon](option-parts/option.graphic.md#elements-polygon), [polyline](option-parts/option.graphic.md#elements-polyline), [rect](option-parts/option.graphic.md#elements-rect), [line](option-parts/option.graphic.md#elements-line), [bezierCurve](option-parts/option.graphic.md#elements-bezierCurve), [arc](option-parts/option.graphic.md#elements-arc), [group](option-parts/option.graphic.md#elements-group),

下面示例中，使用图形元素做了水印，和文本块：

下面示例中，使用隐藏的图形元素实现了拖拽：

**graphic 设置介绍**

只配一个图形元素时的简写方法：

```
myChart.setOption({
    ...,
    graphic: {
        type: 'image',
        ...
    }
});
```

配多个图形元素：

```
myChart.setOption({
    ...,
    graphic: [
        { // 一个图形元素，类型是 image。
            type: 'image',
            ...
        },
        { // 一个图形元素，类型是 text，指定了 id。
            type: 'text',
            id: 'text1',
            ...
        },
        { // 一个图形元素，类型是 group，可以嵌套子节点。
            type: 'group',
            children: [
                {
                    type: 'rect',
                    id: 'rect1',
                    ...
                },
                {
                    type: 'image',
                    ...
                },
                ...
            ]
        }
        ...
    ]
});

```

使用 setOption 来删除或更换（替代）已有的图形元素：

```
myChart.setOption({
    ...,
    graphic: [
        { // 删除上例中定义的 'text1' 元素。
            id: 'text1',
            $action: 'remove',
            ...
        },
        { // 将上例中定义的 'rect1' 元素换成 circle。
          // 注意尽管 'rect1' 在一个 group 中，但这里并不需要顾忌层级，用id指定就可以了。
            id: 'rect1',
            $action: 'replace',
            type: 'circle',
            ...
        }
    ]
});
```

注意，如果没有指定 id，第二次 setOption 时会按照元素在 option 中出现的顺序和已有的图形元素进行匹配。这有时会产生不易理解的效果。 所以，一般来说，更新 elements 时推荐使用 id 进行准确的指定，而非省略 id。

**图形元素设置介绍**

介绍每个图形元素的配置。不同类型的图形元素的设置有这些共性：

```
{
    // id 用于在更新图形元素时指定更新哪个图形元素，如果不需要用可以忽略。
    id: 'xxx',

    // 这个字段在第一次设置时不能忽略，取值见上方『支持的图形元素』。
    type: 'image',

    // 下面的各个属性如果不需要设置都可以忽略，忽略则取默认值。

    // 指定本次 setOption 对此图形元素进行的操作。默认是 'merge'，还可以 'replace' 或 'remove'。
    $action: 'replace',

    // 这是四个相对于父元素的定位属性，每个属性可取『像素值』或者『百分比』或者 'center'/'middle'。
    left: 10,
    // right: 10,
    top: 'center',
    // bottom: '10%',

    shape: {
        // 定位、形状相关的设置，如 x, y, cx, cy, width, height, r, points 等。
        // 注意，如果设置了 left/right/top/bottom，这里的定位用的 x/y/cx/cy 会失效。
    },

    style: {
        // 样式相关的设置，如 fill, stroke, lineWidth, shadowBlur 等。
    },

    // 表示 z 高度，从而指定了图形元素的覆盖关系。
    z: 10,
    // 表示不响应事件。
    silent: true,
    // 节点是否不显示
    invisible: false,
    // 设置是否整体限制在父节点范围内。可选值：'raw', 'all'。
    bouding: 'raw',
    // 是否可以被拖拽。
    draggable: false,
    // 事件的监听器，还可以是 onmousemove, ondrag 等。支持的事件参见下。
    onclick: function () {...}
}
```

**图形元素的事件**

支持这些事件配置： `onclick`, `onmouseover`, `onmouseout`, `onmousemove`, `onmousewheel`, `onmousedown`, `onmouseup`, `ondrag`, `ondragstart`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondrop`。

**图形元素的层级关系**

只有 `group` 元素可以有子节点，从而以该 `group` 元素为根的元素树可以共同定位（共同移动）。

**图形元素的基本形状设置**

每个图形元素本身有自己的图形基本的位置和尺寸设置，例如：

```
{
    type: 'rect',
    shape: {
        x: 10,
        y: 10,
        width: 100,
        height: 200
    }
},
{
    type: 'circle',
    shape: {
        cx: 20,
        cy: 30,
        r: 100
    }
},
{
    type: 'image',
    style: {
        image: 'http://example.website/a.png',
        x: 100,
        y: 200,
        width: 230,
        height: 400
    }
},
{
    type: 'text',
    style: {
        text: 'This text',
        x: 100,
        y: 200
    }

}
```

**图形元素的定位和 transfrom**

除此以外，可以以 transform 的方式对图形进行平移、旋转、缩放， 参见：[position](option-parts/option.graphic.md#elements.position)、[rotation](option-parts/option.graphic.md#elements.rotation)、[scale](option-parts/option.graphic.md#elements.scale)、[origin](option-parts/option.graphic.md#elements.origin)。

```
{
    type: 'rect',
    position: [100, 200], // 平移，默认值为 [0, 0]。
    scale: [2, 4], // 缩放，默认值为 [1, 1]。表示缩放的倍数。
    rotation: Math.PI / 4, // 旋转，默认值为 0。表示旋转的弧度值。正值表示逆时针旋转。
    origin: [10, 20], // 旋转和缩放的中心点，默认值为 [0, 0]。
    shape: {
        // ...
    }
}
```

每个图形元素在父节点的坐标系中进行 transform，也就是说父子节点的 transform 能『叠加』。

每个图形元素进行 transform 顺序是：

1.  平移 \[-el.origin\[0\], -el.origin\[1\]\]。
2.  根据 el.scale 缩放。
3.  根据 el.rotation 旋转。
4.  根据 el.origin 平移。
5.  根据 el.position 平移。

也就是说先缩放旋转后平移，这样平移不会影响缩放旋转的 origin。

**图形元素相对定位**

以上两者是基本的绝对定位，除此之外，在实际应用中，容器尺寸常常是不确定甚至动态变化的，所以需要提供相对定位的机制。graphic 组件使用 [left](option-parts/option.graphic.md#elements.left) / [right](option-parts/option.graphic.md#elements.right) / [top](option-parts/option.graphic.md#elements.top) / [bottom](option-parts/option.graphic.md#elements.bottom) / [width](option-parts/option.graphic.md#elements.width) / [height](option-parts/option.graphic.md#elements.height) 提供了相对定位的机制。

例如：

```
{ // 将图片定位到最下方的中间：
    type: 'image',
    left: 'center', // 水平定位到中间
    bottom: '10%',  // 定位到距离下边界 10% 处
    style: {
        image: 'http://example.website/a.png',
        width: 45,
        height: 45
    }
},
{ // 将旋转过的 group 整体定位右下角：
    type: 'group',
    right: 0,  // 定位到右下角
    bottom: 0, // 定位到右下角
    rotation: Math.PI / 4,
    children: [
        {
            type: 'rect',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            shape: {
                width: 190,
                height: 90
            },
            style: {
                fill: '#fff',
                stroke: '#999',
                lineWidth: 2,
                shadowBlur: 8,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowColor: 'rgba(0,0,0,0.3)'
            }
        },
        {
            type: 'text',
            left: 'center', // 相对父元素居中
            top: 'middle',  // 相对父元素居中
            style: {
                fill: '#777',
                text: [
                    'This is text',
                    '这是一段文字',
                    'Print some text'
                ].join('\n'),
                font: '14px Microsoft YaHei'
            }
        }
    ]
}
```

注意，可以用 [bounding](graphic.elements.bounding) 来设置是否整体限制在父节点范围内。

## calendar
- **Type**: `Object`

日历坐标系组件。

在ECharts中，我们非常有创意地实现了日历图，是通过使用日历坐标系组件来达到日历图效果的，如下方的几个示例图所示，我们可以在热力图、散点图、关系图中使用日历坐标系。

在日历坐标系中使用热力图的示例:

在日历坐标系中使用散点图的示例:

在日历坐标系中使用关系图（以及混合图表）的示例:

灵活利用 echarts 图表和坐标系的组合，以及 API，可以实现更丰富的效果。 [在日历中使用文字](https://echarts.apache.org/examples/zh/editor.html?c=calendar-lunar&edit=1&reset=1)、 [在日历中放置饼图](https://echarts.apache.org/examples/zh/editor.html?c=calendar-pie&edit=1&reset=1)

* * *

**水平和垂直放置日历**

在日历坐标系可以水平放置，也可以垂直放置。如上面的例子，使用热力图时，经常是水平放置的。但是如果需要格子的尺寸大些，水平放置就过于宽了，于是也可以选择垂直放置。参见 [calendar.orient](option-parts/option.calendar.md#orient)。

* * *

**尺寸的自适应**

可以设置日历坐标系使他支持不同尺寸的容器（页面）大小变化的自适应。首先，和 echarts 其他组件一样，日历坐标系可以选择使用 [left](option-parts/option.calendar.md#left) [right](option-parts/option.calendar.md#right) [top](option-parts/option.calendar.md#top) [bottom](bottom) [width](option-parts/option.calendar.md#width) [height](option-parts/option.calendar.md#height) 来描述尺寸和位置，从而将日历摆放在上下左右各种位置，并随着页面尺寸变动而改变自身尺寸。另外，也可以使用 [cellSize](option-parts/option.calendar.md#cellSize) 来固定日历格子的长宽。

* * *

**中西方日历习惯的支持**

中西方日历有所差别，西方常使用星期日作为一周的第一天，中国使用星期一为一周的第一天。日历坐标系做了这种切换的支持。参见 [calendar.dayLabel.firstDay](option-parts/option.calendar.md#dayLabel.firstDay)。

另外，日历上的『月份』和『星期几』的文字，也可以较方便的切换中英文，甚至自定义。参见 [calendar.dayLabel.nameMap](option-parts/option.calendar.md#dayLabel.nameMap) [calendar.monthLabel.nameMap](option-parts/option.calendar.md#monthLabel.nameMap)。

* * *

## matrix
- **Type**: `Object`

从 `v6.0.0` 开始支持

矩阵坐标系组件。

矩阵坐标系（`matrix`）类似表格，可作为系列（`series`）中数据项的布局系统，主要用于展示多维数据的关系与交互。它以矩形网格形式呈现数据，每个网格单元（或"单元格"）代表 `series.heatmap`、`series.scatter`、`series.custom` 等系列中某个数据点的值。整体布局以行列形式展示，用于表达二维或高维数据之间的关系。

矩阵坐标系（`matrix`）还可作为盒布局系统，布局各个系列、其他坐标系（如 `grid`（即笛卡尔坐标系）、`geo`、`polar` 等）和普通组件（如 `legend`、`dataZoom` 等）。该特性支持在表格中布局 [微型图表](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1)，或使用类似 [CSS grid layout](https://echarts.apache.org/examples/zh/editor.html?c=matrix-grid-layout&edit=1&reset=1) 的布局方式进行排版。目前，所有系列和组件均可在 `matrix` 中布局。`matrix` 也可纯用作文字数据表。

在矩阵坐标系中使用热力图的相关矩阵图：

在矩阵坐标系中使用散点图的相关矩阵图：

在矩阵坐标系中使用关系图的相关矩阵图：

在矩阵坐标系中使用饼图的相关矩阵图，下面的例子展示了多层级的 X 数据：

在矩阵坐标系中使用自定义系列的混淆矩阵图：

矩阵中的微型图表：

以及其他 **微型图** 的例子：[矩阵中的微型柱状图和地图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-mini-bar-data-collection&edit=1&reset=1)。

灵活利用图表系列、坐标系、API 的组合，可以实现更丰富的效果。

引用：

*   单元格的定位和引用：见 [matrix.body.data](option-parts/option.matrix.md#body.data.coord) 中的描述。

## thumbnail
- **Type**: `Object`

从 `v6.0.0` 开始支持

缩略图组件。

现在仅支持用在 [关系图系列（series.graph）](option-parts/option.series-graph.md) 上。

示例：[graph NPM](https://echarts.apache.org/examples/zh/editor.html?c=graph-npm&edit=1&reset=1)、[graph Webkit dep](https://echarts.apache.org/examples/zh/editor.html?c=graph-webkit-dep&edit=1&reset=1)。

## dataset
- **Type**: `Object`

ECharts 4 开始支持了 `数据集`（`dataset`）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便。

关于 `dataset` 的详情，请参见[教程](https://echarts.apache.org/handbook/zh/concepts/dataset)。

## aria
- **Type**: `*`

W3C 制定了无障碍富互联网应用规范集（[WAI-ARIA](https://www.w3.org/WAI/intro/aria)，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。Apache ECharts 4 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。除此之外，Apache ECharts 5 新增支持贴花纹理，作为颜色的辅助表达，进一步用以区分数据。

默认关闭，需要通过将 [aria.enabled](option-parts/option.aria.md#enabled) 设置为 `true` 开启。

## series-line
- **Type**: `Object`

**折线/面积图**

折线图是用折线将各个数据点[标志](option-parts/option.series-line.md#symbol)连接起来的图表，用于展现数据的变化趋势。可用于[直角坐标系](option-parts/option.grid.md)和[极坐标系](option-parts/option.polar.md)上。

**Tip:** 设置 [areaStyle](option-parts/option.series-line.md#areaStyle) 后可以绘制面积图。

**Tip:** 配合分段型 [visualMap](option-parts/option.visualMap-piecewise.md) 组件可以将折线/面积图通过不同颜色分区间。如下示例

## series-bar
- **Type**: `Object`

**柱状图**

柱状图（或称条形图）是一种通过柱形的高度（横向的情况下则是宽度）来表现数据大小的一种常用图表类型。

## series-pie
- **Type**: `Object`

**饼图**

饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。

对于一个图表中有多个饼图的场景，可以使用 [left](option-parts/option.series-pie.md#left)、[right](option-parts/option.series-pie.md#right)、[top](option-parts/option.series-pie.md#top)、[bottom](option-parts/option.series-pie.md#bottom)、[width](option-parts/option.series-pie.md#width)、[height](option-parts/option.series-pie.md#height) 配置每个饼图系列的位置和视口大小。[radius](option-parts/option.series-pie.md#radius)、[label.edgeDistance](option-parts/option.series-pie.md#label.edgeDistance) 等支持百分比的配置项，是相对于该配置项决定的矩形的大小而言的。

**Tip:** 饼图更适合表现数据相对于总数的百分比等关系。如果只是表示不同类目数据间的大小，建议使用 [柱状图](bar)，人们对于微小的弧度差别相比于微小的长度差别更不敏感，或者也可以通过配置 [roseType](option-parts/option.series-pie.md#roseType) 显示成南丁格尔图，通过半径大小区分数据的大小。

**下面是自定义南丁格尔图的示例：**

从 ECharts v4.6.0 版本起，我们提供了 `'labelLine'` 与 `'edge'` 两种新的布局方式。详情参见 [label.alignTo](option-parts/option.series-pie.md#label.alignTo)。

## series-scatter
- **Type**: `Object`

散点（气泡）图。[直角坐标系](option-parts/option.grid.md)上的散点图可以用来展现数据的 `x`，`y` 之间的关系，如果数据项有多个维度，其它维度的值可以通过不同大小的 [symbol](option-parts/option.series-scatter.md#symbol) 展现成气泡图，也可以用颜色来表现。这些可以配合 [visualMap](option.md#visualMap) 组件完成。

可以应用在[直角坐标系](option-parts/option.grid.md)，[极坐标系](option-parts/option.polar.md)，[地理坐标系](option-parts/option.geo.md)上。

## series-effectScatter
- **Type**: `Object`

带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某些想要突出的数据进行视觉突出。

**Tip:** ECharts 2.x 中在地图上通过 markPoint 实现地图特效在 ECharts 3 中建议通过地理坐标系上的 effectScatter 实现。

## series-radar
- **Type**: `Object`

**雷达图**

雷达图主要用于表现多变量的数据，例如球员的各个属性分析。依赖 [radar](option-parts/option.radar.md) 组件。

下面是 AQI 数据用雷达图表现的示例。

## series-tree
- **Type**: `Object`

**树图**

树图主要用来可视化树形数据结构，是一种特殊的层次类型，具有唯一的根节点，左子树，和右子树。

**注意：目前不支持在单个 series 中直接绘制森林，可以通过在一个 option 中配置多个 series 实现森林**

**树图示例：**

**多个 series 组合成森林示例：**

## series-treemap
- **Type**: `Object`

[Treemap](https://en.wikipedia.org/wiki/Treemapping) 是一种常见的表达『层级数据』『树状数据』的可视化形式。它主要用面积的方式，便于突出展现出『树』的各层级中重要的节点。

**示例：**

**视觉映射：**

treemap 首先是把数值映射到『面积』这种视觉元素上。

此外，也支持对数据的其他维度进行视觉映射，例如映射到颜色、颜色明暗度上。

关于视觉设置，详见 [series-treemap.levels](option-parts/option.series-treemap.md#levels)。

**下钻（drill down）：**

`drill down` 功能即点击后才展示子层级。 设置了 [leafDepth](option-parts/option.series-treemap.md#leafDepth) 后，下钻（`drill down`）功能开启。

**如下是 drill down 的例子：**

注：treemap 的配置项 和 ECharts2 相比有一些变化，一些不太成熟的配置方式不再支持或不再兼容：

*   `center/size` 方式的定位不再支持，而是统一使用 `left/top/bottom/right/width/height` 方式定位。
    
*   `breadcrumb` 的配置被移动到了 `itemStyle/itemStyle.emphasis` 外部，和 `itemStyle` 平级。
    
*   `root` 的设置暂时不支持。目前可以使用 `zoom` 的方式来查看树更下层次的细节，或者使用 [leafDepth](option-parts/option.series-treemap.md#leafDepth) 开启 "drill down" 功能。
    
*   `label` 的配置被移动到了 `itemStyle/itemStyle.emphasis` 外部，和 `itemStyle` 平级。
    
*   `itemStyle.childBorderWidth`、`itemStyle.childBorderColor`不再支持（因为这个配置方式只能定义两层的treemap）。统一使用 [series-treemap.levels](option-parts/option.series-treemap.md#levels) 来进行各层级的定义。

## series-sunburst
- **Type**: `Object`

[旭日图（Sunburst）](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart,_sunburst_chart,_and_multilevel_pie_chart)由多层的环形图组成，在数据结构上，内圈是外圈的父节点。因此，它既能像[饼图](option-parts/option.series-pie.md)一样表现局部和整体的占比，又能像[矩形树图](option-parts/option.series-treemap.md)一样表现层级关系。

**示例：**

**数据下钻**

旭日图默认支持数据下钻，也就是说，当用户点击了某个扇形块之后，将会以该节点作为根结点显示，并且在中间出现一个返回上层节点的圆。如果不希望有数据下钻功能，可以通过将 [series-sunburst.nodeClick](option-parts/option.series-sunburst.md#nodeClick) 设置为 `false` 实现。

## series-boxplot
- **Type**: `Object`

[Boxplot](https://en.wikipedia.org/wiki/Box_plot) 中文可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』，是一种用作显示一组数据分散情况资料的统计图。它能显示出一组数据的最大值、最小值、中位数、下四分位数及上四分位数。

**示例如下：**

也支持多个 `series` 在同一个坐标系中，参见 [例子](https://echarts.apache.org/examples/zh/editor.html?c=boxplot-multi&edit=1&reset=1)。

## series-candlestick
- **Type**: `Object`

[Candlestick](https://en.wikipedia.org/wiki/Candlestick_chart) 即我们常说的 `K线图`。

在 ECharts3 中，同时支持 `'candlestick'` 和 `'k'`这两种 `'series.type'`（`'k'` 会被自动转为 `'candlestick'`）。

**示例如下：**

  
**关于『涨』『跌』的颜色：**

不同国家或地区对于 K线图 的颜色定义不一样，可能是『红涨绿跌』或『红涨蓝跌』（如中国内地、中国台湾地区、日本、韩国等），可能是『绿涨红跌』（如西方国家、中国香港、新加坡等）。K线图也不一定要用红蓝、红绿来表示涨跌，也可以是『有色/无色』等表示方法。

默认配置项，采用的是『红涨绿跌』。如果想更改这个颜色配置，在这些配置项中更改即可：

*   [series-candlestick.itemStyle.color](option-parts/option.series-candlestick.md#itemStyle.color)：阳线填充色（即『涨』）
*   [series-candlestick.itemStyle.color0](option-parts/option.series-candlestick.md#itemStyle.color0)：阴线填充色（即『跌』）
*   [series-candlestick.itemStyle.borderColor](option-parts/option.series-candlestick.md#itemStyle.borderColor)：阳线边框色（即『涨』）
*   [series-candlestick.itemStyle.borderColor0](option-parts/option.series-candlestick.md#itemStyle.borderColor0)：阴线边框色（即『跌』）
*   [series-candlestick.itemStyle.borderColorDoji](option-parts/option.series-candlestick.md#itemStyle.borderColorDoji)：十字星边框色（即开盘价等于收盘价时候的边框色）

## series-heatmap
- **Type**: `Object`

**热力图**

热力图主要通过颜色去表现数值的大小，必须要配合 [visualMap](option.md#visualMap) 组件使用。

可以应用在[直角坐标系](option-parts/option.grid.md)以及[地理坐标系](option-parts/option.geo.md)上，这两个坐标系上的表现形式相差很大，直角坐标系上必须要使用两个类目轴。

下面是在直角坐标系上应用的例子：

**直角坐标系：**

## series-map
- **Type**: `Object`

**地图。**

地图主要用于地理区域数据的可视化，配合 [visualMap](option.md#visualMap) 组件用于展示不同区域的人口分布密度等数据。

多个[地图类型](option-parts/option.series-map.md#map)相同的系列会在同一地图上显示，这时候使用第一个系列的配置项作为地图绘制的配置。

**Tip:** 在 ECharts 3 中不再建议在地图类型的图表使用 `markLine` 和 `markPoint`。如果要实现点数据或者线数据的可视化，可以使用在[地理坐标系组件](option-parts/option.geo.md)上的[散点图](option-parts/option.series-scatter.md)和[线图](option-parts/option.series-lines.md)。

## series-parallel
- **Type**: `Object`

平行坐标系的系列。

**平行坐标系介绍**

[平行坐标系（Parallel Coordinates）](https://en.wikipedia.org/wiki/Parallel_coordinates) 是一种常用的可视化高维数据的图表。

例如 [series-parallel.data](option-parts/option.series-parallel.md#data) 中有如下数据：

```
[
    [1,  55,  9,   56,  0.46,  18,  6,  '良'],
    [2,  25,  11,  21,  0.65,  34,  9,  '优'],
    [3,  56,  7,   63,  0.3,   14,  5,  '良'],
    [4,  33,  7,   29,  0.33,  16,  6,  '优'],
    { // 数据项也可以是 Object，从而里面能含有对线条的特殊设置。
        value: [5,  42,  24,  44,  0.76,  40,  16, '优']
        lineStyle: {...},
    }
    ...
]
```

数据中，每一行是一个『数据项』，每一列属于一个『维度』。（例如上面数据每一列的含义分别是：『日期』,『AQI指数』, 『PM2.5』, 『PM10』, 『一氧化碳值』, 『二氧化氮值』, 『二氧化硫值』）。

平行坐标系适用于对这种多维数据进行可视化分析。每一个维度（每一列）对应一个坐标轴，每一个『数据项』是一条线，贯穿多个坐标轴。在坐标轴上，可以进行数据选取等操作。如下：

**配置方式概要**

『平行坐标系』的 `option` 基本配置如下例：

```
option = {
    parallelAxis: [                     // 这是一个个『坐标轴』的定义
        {dim: 0, name: schema[0].text}, // 每个『坐标轴』有个 'dim' 属性，表示坐标轴的维度号。
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
            type: 'category',           // 坐标轴也可以支持类别型数据
            data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
        }
    ],
    parallel: {                         // 这是『坐标系』的定义
        left: '5%',                     // 平行坐标系的位置设置
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {          // 『坐标轴』的公有属性可以配置在这里避免重复书写
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [                           // 这里三个系列共用一个平行坐标系
        {
            name: '北京',
            type: 'parallel',           // 这个系列类型是 'parallel'
            data: [
                [1,  55,  9,   56,  0.46,  18,  6,  '良'],
                [2,  25,  11,  21,  0.65,  34,  9,  '优'],
                ...
            ]
        },
        {
            name: '上海',
            type: 'parallel',
            data: [
                [3,  56,  7,   63,  0.3,   14,  5,  '良'],
                [4,  33,  7,   29,  0.33,  16,  6,  '优'],
                ...
            ]
        },
        {
            name: '广州',
            type: 'parallel',
            data: [
                [4,  33,  7,   29,  0.33,  16,  6,  '优'],
                [5,  42,  24,  44,  0.76,  40,  16, '优'],
                ...
            ]
        }
    ]
};
```

需要涉及到三个组件：[parallel](option-parts/option.parallel.md)、[parallelAxis](option-parts/option.parallelAxis.md)、[series-parallel](option-parts/option.series-parallel.md)

*   [parallel](option-parts/option.parallel.md)
    
    这个配置项是平行坐标系的『坐标系』本身。一个系列（`series`）或多个系列（如上图中的『北京』、『上海』、『广州』分别各是一个系列）可以共用这个『坐标系』。
    
    和其他坐标系一样，坐标系也可以创建多个。
    
    位置设置，也是放在这里进行。
    
*   [parallelAxis](option-parts/option.parallelAxis.md)
    
    这个是『坐标系』中的坐标轴的配置。自然，需要有多个坐标轴。
    
    其中有 [parallelAxis.parallelIndex](option-parts/option.parallelAxis.md#parallelIndex) 属性，指定这个『坐标轴』在哪个『坐标系』中。默认使用第一个『坐标系』。
    
*   [series-parallel](option-parts/option.series-parallel.md)
    
    这个是『系列』的定义。系列被画到『坐标系』上。
    
    其中有 [series-parallel.parallelIndex](option-parts/option.series-parallel.md#parallelIndex) 属性，指定使用哪个『坐标系』。默认使用第一个『坐标系』。
    

**配置注意和最佳实践**

配置多个 [parallelAxis](option-parts/option.parallelAxis.md) 时，有些值一样的属性，如果书写多遍则比较繁琐，那么可以放置在 [parallel.parallelAxisDefault](option-parts/option.parallel.md#parallelAxisDefault) 里。在坐标轴初始化前，[parallel.parallelAxisDefault](option-parts/option.parallel.md#parallelAxisDefault) 里的配置项，会分别融合进 [parallelAxis](option-parts/option.parallelAxis.md)，形成最终的坐标轴的配置。

**如果数据量很大并且发生卡顿**

建议把 [series-parallel.lineStyle.width](option-parts/option.series-parallel.md#lineStyle.width) 设为 `0.5`（或更小）， 可能显著改善性能。

**高维数据的显示**

维度比较多时，比如有 50+ 的维度，那么就会有 50+ 个轴。那么可能会页面显示不下。

可以通过 [parallel.axisExpandable](option-parts/option.parallel.md#axisExpandable) 来改善显示效果。

## series-lines
- **Type**: `Object`

**路径图**

用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化。

ECharts 2.x 里会用地图上的 `markLine` 去绘制迁徙效果，在 ECharts 3 里建议使用单独的 `lines` 类型图表。

## series-graph
- **Type**: `Object`

**关系图**

用于展现节点以及节点之间的关系数据。

**示例：**

## series-sankey
- **Type**: `Object`

**桑基图**

是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

**示例：**

  
**可视编码：**

桑基图将原数据中的每个`node`编码成一个小矩形，不同的节点尽量用不同的颜色展示，小矩形旁边的`label`编码的是节点的名称。

此外，图中每两个小矩形之间的边编码的是原数据中的`link`，边的粗细编码的是`link`中的`value`。

  
**排序：**

如果想指定每层节点的顺序是按照 [data](option-parts/option.series-sankey.md#data) 中的顺序排列的。可以设置 [layoutIterations](option-parts/option.series-sankey.md#layoutIterations) 为 `0`。

## series-funnel
- **Type**: `Object`

**漏斗图**

**示例：**

## series-gauge
- **Type**: `Object`

**仪表盘**

**示例：**

## series-pictorialBar
- **Type**: `Object`

**象形柱图**

象形柱图是可以设置各种具象图形元素（如图片、[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) 等）的柱状图。往往用在信息图中。用于有至少一个类目轴或时间轴的[直角坐标系](option-parts/option.grid.md)上。

**示例：**

**布局**

象形柱图可以被想象为：它首先是个柱状图，但是柱状图的柱子并不显示。这些柱子我们称为『基准柱（reference bar）』，根据基准柱来定位和显示各种象形图形（包括图片）。

每个象形图形根据基准柱的定位，是通过 [symbolPosition](option-parts/option.series-pictorialBar.md#symbolPosition)、[symbolOffset](option-parts/option.series-pictorialBar.md#symbolOffset) 来调整其于基准柱的相对位置。

参见例子：

可以使用 [symbolSize](option-parts/option.series-pictorialBar.md#symbolSize) 调整大小，从而形成各种视图效果。

参见例子：

**象形图形类型**

每个图形可以配置成『单独』和『重复』两种类型，即通过 [symbolRepeat](option-parts/option.series-pictorialBar.md#symbolRepeat) 来设置。

*   设置为 `false`（默认），则一个图形来代表一个数据项。
*   设置为 `true`，则一组重复的图形来代表一个数据项。

参见例子：

每个象形图形可以是基本图形（如 `'circle'`, `'rect'`, ...）、[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)、图片，参见：[symbolType](option-parts/option.series-pictorialBar.md#symbolType)。

参见例子：

可以使用 [symbolClip](option-parts/option.series-pictorialBar.md#symbolClip) 对图形进行剪裁。

参见例子：

## series-themeRiver
- **Type**: `Object`

**主题河流**

是一种特殊的流图, 它主要用来表示事件或主题等在一段时间内的变化。

**示例：**

  
**可视编码：**

主题河流中不同颜色的条带状河流分支编码了不同的事件或主题，河流分支的宽度编码了原数据集中的value值。

此外，原数据集中的时间属性，映射到单个时间轴上。

## series-chord
- **Type**: `Object`

从 `v6.0.0` 开始支持

和弦图是一种用于可视化不同实体之间相互关系和流量的数据图表。它通过优美的弧形和弦连接，展示数据流动的方向和比例。

**示例：**

## series-custom
- **Type**: `Object`

**自定义系列**

自定义系列可以自定义系列中的图形元素渲染。从而能扩展出不同的图表。

同时，echarts 会统一管理图形的创建删除、动画、与其他组件（如 [dataZoom](option.md#dataZoom)、[visualMap](option.md#visualMap)）的联动，使开发者不必纠结这些细节。

**例如，下面的例子使用 custom series 扩展出了 x-range 图：**

**更多的例子参见：[custom examples](https://echarts.apache.org/examples/zh/index.html#chart-type-custom)**

**[这里是个教程](tutorial.md#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B3%BB%E5%88%97)**

**开发者自定义渲染逻辑（renderItem 函数）**

custom 系列需要开发者以 `Function` 形式提供图形渲染的逻辑或者以 `string` 形式使用预先注册的图形渲染逻辑（从 `v6.0.0` 开始支持，详见 [echarts.registerCustomSeries](api-parts/api.echarts.md#registerCustomSeries)）。这个渲染逻辑一般命名为 [renderItem](option-parts/option.series-custom.md#renderItem)。例如：

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

对于 `data` 中的每个数据项（为方便描述，这里称为 `dataItem`)，会调用此 [renderItem](option-parts/option.series-custom.md#renderItem) 函数。

[renderItem](option-parts/option.series-custom.md#renderItem) 函数提供了两个参数：

*   [params](option-parts/option.series-custom.md#renderItem.arguments.params)：包含了当前数据信息和坐标系的信息。
*   [api](option-parts/option.series-custom.md#renderItem.arguments.api)：是一些开发者可调用的方法集合。

[renderItem](option-parts/option.series-custom.md#renderItem) 函数须返回根据此 `dataItem` 绘制出的图形元素的定义信息，参见 [renderItem.return](option-parts/option.series-custom.md#renderItem.return)。

一般来说，[renderItem](option-parts/option.series-custom.md#renderItem) 函数的主要逻辑，是将 `dataItem` 里的值映射到坐标系上的图形元素。这一般需要用到 [renderItem.arguments.api](option-parts/option.series-custom.md#renderItem.arguments.api) 中的两个函数：

*   [api.value(...)](option-parts/option.series-custom.md#renderItem.arguments.api.value)，意思是取出 `dataItem` 中的数值。例如 `api.value(0)` 表示取出当前 `dataItem` 中第一个维度的数值。
*   [api.coord(...)](option-parts/option.series-custom.md#renderItem.arguments.api.coord)，意思是进行坐标转换计算。例如 `var point = api.coord([api.value(0), api.value(1)])` 表示 `dataItem` 中的数值转换成坐标系上的点。

有时候还需要用到 [api.size(...)](option-parts/option.series-custom.md#renderItem.arguments.api.size) 函数，表示得到坐标系上一段数值范围对应的长度。

返回值中样式的设置可以使用 [api.style(...)](option-parts/option.series-custom.md#renderItem.arguments.api.style) 函数，他能得到 [series.itemStyle](option-parts/option.series-custom.md#itemStyle) 中定义的样式信息，以及视觉映射的样式信息。也可以用这种方式覆盖这些样式信息：`api.style({fill: 'green', stroke: 'yellow'})`。

**维度的映射（encode 和 dimensions 属性）**

`custom` 系列往往需要定义 [series.encode](option-parts/option.series-custom.md#encode)，主要用于指明 `data` 的哪些维度映射到哪些数轴上。从而，echarts 能根据这些维度的值的范围，画出合适的数轴刻度。 同时，encode.tooltip 和 encode.label 也可以被指定，指明默认的 tooltip 和 label 显示什么内容。[series.dimensions](option-parts/option.series-custom.md#dimensions) 也可以被指定，指明显示在 tooltip 中的维度名称，或者维度的类型。

例如：

```
series: {
    type: 'custom',
    renderItem: function () {
        ...
    },
    encode: {
        x: [2, 4, 3],
        y: 1,
        label: 0,
        tooltip: [2, 4, 3]
    }
}
```

**与 dataZoom 组件的结合**

与 [dataZoom](option.md#dataZoom) 结合使用的时候，常常使用会设置 [dataZoom.filterMode](option.md#dataZoom.filterMode) 为 'weakFilter'，从而让 `dataItem` 部分超出坐标系边界的时候，不会整体被过滤掉。

**关于 `dataIndex` 和 `dataIndexInside` 的区别**

*   `dataIndex` 指的 `dataItem` 在原始数据中的 index。
*   `dataIndexInside` 指的是 `dataItem` 在当前数据窗口（参见 [dataZoom](option.md#dataZoom)）中的 index。

[renderItem.arguments.api](option-parts/option.series-custom.md#renderItem.arguments.api) 中使用的参数都是 `dataIndexInside` 而非 `dataIndex`，因为从 `dataIndex` 转换成 `dataIndexInside` 需要时间开销。

**Event listener**

```
chart.setOption({
    // ...
    series: {
        type: 'custom',
        renderItem: function () {
            // ...
            return {
                type: 'group',
                children: [{
                    type: 'circle'
                    // ...
                }, {
                    type: 'circle',
                    name: 'aaa',
                    // 用户指定的信息，可以在 event handler 访问到。
                    info: 12345,
                    // ...
                }]
            };
        }
    }
});
chart.on('click', {element: 'aaa'}, function (params) {
    // 当 name 为 'aaa' 的图形元素被点击时，此回调被触发。
    console.log(params.info);
});
```

## darkMode
- **Type**: `boolean`

是否是暗黑模式，默认会根据背景色 [backgroundColor](option.md#backgroundColor) 的亮度自动设置。 如果是设置了容器的背景色而无法判断到，就可以使用该配置手动指定，echarts 会根据是否是暗黑模式调整文本等的颜色。

该配置通常会被用于主题中。

## color
- **Type**: `Array`

调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。 默认为：

```
['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
```

支持的颜色格式：

*   使用 RGB 表示颜色，比如 `'rgb(128, 128, 128)'`，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 `'#ccc'`。
    
*   渐变色或者纹理填充
    
    ```
    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
          offset: 0, color: 'red' // 0% 处的颜色
      }, {
          offset: 1, color: 'blue' // 100% 处的颜色
      }],
      global: false // 缺省为 false
    }
    // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
    {
      type: 'radial',
      x: 0.5,
      y: 0.5,
      r: 0.5,
      colorStops: [{
          offset: 0, color: 'red' // 0% 处的颜色
      }, {
          offset: 1, color: 'blue' // 100% 处的颜色
      }],
      global: false // 缺省为 false
    }
    // 纹理填充
    {
      image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
      repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
    }
    ```

## backgroundColor
- **Type**: `Color`
- **Default**: `'transparent'`

背景色，默认无背景。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](option.md#color)

## textStyle
- **Type**: `Object`

全局的字体样式。

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

## stateAnimation
- **Type**: `Object`

状态切换的动画配置，支持在每个系列里设置单独针对该系列的配置。

## blendMode
- **Type**: `string`
- **Default**: `'source-over'`

图形的混合模式，不同的混合模式见 [https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) 。

默认为 `'source-over'`。 支持每个系列单独设置。

`'lighter'` 也是比较常见的一种混合模式，该模式下图形数量集中的区域会颜色叠加成高亮度的颜色（白色）。常常能起到突出该区域的效果。见示例 [全球飞行航线](https://echarts.apache.org/examples/zh/editor.html?c=lines-airline)

## hoverLayerThreshold
- **Type**: `number`
- **Default**: `3000`

图形数量阈值，决定是否开启单独的 hover 层，在整个图表的图形数量大于该阈值时开启单独的 hover 层。

单独的 hover 层主要是为了在高亮图形的时候不需要重绘整个图表，只需要把高亮的图形放入单独的一个 canvas 层进行绘制，防止在图形数量很多的时候因为高亮重绘所有图形导致卡顿。

ECharts 2 里是底层强制使用单独的层绘制高亮图形，但是会带来很多问题，比如高亮的图形可能会不正确的遮挡所有其它图形，还有图形有透明度因为高亮和正常图形叠加导致不正确的透明度显示，还有移动端上因为每个图表都要多一个 canvas 带来的额外内存开销。因此 3 里默认不会开启该优化，只有在图形数量特别多，有必要做该优化时才会自动开启。

## useUTC
- **Type**: `boolean`
- **Default**: `false`

是否使用 UTC 时间。

*   `true`: 表示 `axis.type` 为 `'time'` 时，依据 UTC 时间确定 tick 位置，并且 `axisLabel` 和 `tooltip` 默认展示的是 UTC 时间。
*   `false`: 表示 `axis.type` 为 `'time'` 时，依据本地时间确定 tick 位置，并且 `axisLabel` 和 `tooltip` 默认展示的是本地时间。

默认取值为false，即使用本地时间。因为考虑到：

*   很多情况下，需要展示为本地时间（无论服务器存储的是否为 `UTC` 时间）。
*   如果 data 中的时间为 '2012-01-02' 这样的没有指定时区的时间表达式，往往意为本地时间。默认情况下，时间被展示时需要和输入一致而非有时差。

注意，这个参数实际影响的是『展示』，而非用户输入的时间值的解析。 关于用户输入的时间值（例如 `1491339540396`, `'2013-01-04'` 等）的解析，参见 [date 中时间相关部分](option-parts/option.series-line.md#data)。

注意，如果设置了 `useUTC: true`，并且使用了帮助函数 `echarts.time.format`（或者其他第三方类似函数），它同样要设置成按照 UTC 运作。例如，

```
// 第三个参数 `true` 表示，按照 UTC 来解释时间。
const timeStrUTC = echarts.time.format(value, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}', true);
```

## richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option-parts/option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option-parts/option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

## options
- **Type**: `Array`

用于 [timeline](option-parts/option.timeline.md) 的 option 数组。数组的每一项是一个 echarts option (`ECUnitOption`)。

## media
- **Type**: `Array`

请参见 [移动端自适应](tutorial.md#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%87%AA%E9%80%82%E5%BA%94)。
