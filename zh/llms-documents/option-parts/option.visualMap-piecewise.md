# option.visualMap-piecewise

## type
- **Type**: `string`
- **Default**: `piecewise`

类型为分段型。

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## splitNumber
- **Type**: `number`
- **Default**: `5`

对于连续型数据，自动平均切分成几段。默认为5段。 连续数据的范围需要 [max](option.visualMap-piecewise.md#max) 和 [min](option.visualMap-piecewise.md#min) 来指定。

如果设置了 [visualMap-piecewise.pieces](option.visualMap-piecewise.md#pieces) 或者 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories)，则 `splitNumber` 无效。

## pieces
- **Type**: `Array`

自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式。例如：

```
pieces: [
    {min: 1500}, // 不指定 max，表示 max 为无限大（Infinity）。
    {min: 900, max: 1500},
    {min: 310, max: 1000},
    {min: 200, max: 300},
    {min: 10, max: 200, label: '10 到 200（自定义label）'},
    {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
    {max: 5}     // 不指定 min，表示 min 为无限大（-Infinity）。
]
```

或者，更精确得，可以使用 `lt`（小于，less than），`gt`（大于，greater than），`lte`（小于等于 less than or equals），`gte`（大于等于，greater than or equals）来表达边界：

```
pieces: [
    {gt: 1500},            // (1500, Infinity]
    {gt: 900, lte: 1500},  // (900, 1500]
    {gt: 310, lte: 1000},  // (310, 1000]
    {gt: 200, lte: 300},   // (200, 300]
    {gt: 10, lte: 200, label: '10 到 200（自定义label）'},       // (10, 200]
    {value: 123, label: '123（自定义特殊颜色）', color: 'grey'},  // [123, 123]
    {lt: 5}                 // (-Infinity, 5)
]
```

注意，如果两个 piece 的区间重叠，则会自动进行去重。

在每个 piece 中支持的 visualMap 属性有：

*   `symbol`: 图元的图形类别。
*   `symbolSize`: 图元的大小。
*   `color`: 图元的颜色。
*   `colorAlpha`: 图元的颜色的透明度。
*   `opacity`: 图元以及其附属物（如文字标签）的透明度。
*   `colorLightness`: 颜色的明暗度，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。
*   `colorSaturation`: 颜色的饱和度，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。
*   `colorHue`: 颜色的色调，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。

[参见示例](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/map-visualMap-pieces&edit=1&reset=1)

（注：在 ECharts2 中，`pieces` 叫做 `splitList`。现在后者仍兼容，但推荐使用 `pieces`）

`pieces` 中的顺序，其实试试就知道。若要看详细的规则，参见 [visualMap.inverse](../option.md#visualMap.inverse)。

## categories
- **Type**: `Array`

用于表示离散型数据（或可以称为类别型数据、枚举型数据）的全集。

当所指定的维度（[visualMap-piecewise.dimension](option.visualMap-piecewise.md#dimension)）的数据为离散型数据时，例如数据值为『优』、『良』等，那么可如下配置：

```
categories: ['严重污染', '重度污染', '中度污染', '轻度污染', '良', '优'],
```

[参见示例](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-visualMap-categories&edit=1&reset=1)

`categories` 中的顺序，其实试试就知道。若要看详细的规则，参见 [visualMap.inverse](../option.md#visualMap.inverse)。

## min
- **Type**: `number`

指定 visualMapPiecewise 组件的最小值。

在 **连续型数据自定义分段** 模式（即 [visualMap-piecewise.pieces](option.visualMap-piecewise.md#pieces) 被使用）或 **离散数据根据类别分段** 模式（即 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 被使用）时，`max` 和 `min` 不需指定。

在 **连续型数据平均分段** 模式（即 (that is, when [visualMap-piecewise.splitNumber](option.visualMap-piecewise.md#splitNumber) 被使用时）需指定 `min`、`max`，如果不指定，则默认为 `[0, 200]`（注意并不是默认为 series.data 的 `dataMin` 和 `dataMax`）。

## max
- **Type**: `number`

指定 visualMapPiecewise 组件的最大值。参见 [visualMap-piecewise.splitNumber](option.visualMap-piecewise.md#splitNumber)

**连续型数据自定义分段** 模式（即 [visualMap-piecewise.pieces](option.visualMap-piecewise.md#pieces) 被使用）或 **离散数据根据类别分段** 模式（即 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 被使用），`max` 和 `min` 不需指定。

**连续型数据平均分段** 模式（即 (that is, when [visualMap-piecewise.splitNumber](option.visualMap-piecewise.md#splitNumber) 被使用时）需指定 `min`、`max`，如果不指定，则默认为 `[0, 200]`（注意并不是默认为 series.data 的 `dataMin` 和 `dataMax`）。

## minOpen
- **Type**: `boolean`

当 `type` 为 `piecewise` 且使用 `min`/`max`/`splitNumber` 时，此参数有效。当值为 `true` 时，界面上会额外多出一个『< min』的选块。

## maxOpen
- **Type**: `boolean`

当 `type` 为 `piecewise` 且使用 `min`/`max`/`splitNumber` 时，此参数有效。当值为 `true` 时，界面上会额外多出一个『> max』的选块。

## selectedMode
- **Type**: `string|boolean`
- **Default**: `'multiple'`

选择模式，可以是：

*   `'multiple'`（多选）。
*   `'single'`（单选）。
*   `true`（单选）从`5.3.3`版本支持。
*   `false`（禁止选择）从`5.3.3`版本支持。

## inverse
- **Type**: `boolean`
- **Default**: `false`

是否反转。

*   **连续型数据平均分段** 模式（即 (that is, when [visualMap-piecewise.splitNumber](option.visualMap-piecewise.md#splitNumber) 被使用时），数据排布规则，同 [visualMap-continuous.inverse](option.visualMap-continuous.md#inverse)。
    
*   **连续型数据自定义分段** 模式（即 [visualMap-piecewise.pieces](option.visualMap-piecewise.md#pieces) 被使用）或 **离散数据根据类别分段** 模式（即 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 被使用），每个块的排布位置，取决于 `pieces` 或 `categories` 列表的定义顺序，即：
    
    *   当`inverse`为`false`时：
        
        *   当 [visualMap.orient](../option.md#visualMap.orient) 为 `'vertical'` 时，`pieces[0]` 或 `categories[0]`对应『上方』
            
        *   当 [visualMap.orient](../option.md#visualMap.orient) 为 `'horizontal'` 时，`pieces[0]` 或 `categories[0]` 对应『左方』。
            
    *   当 `inverse` 为 `true` 时，与上面相反。
        

其实没有那么复杂，使用时候，试试就知道了。

## precision
- **Type**: `number`

数据展示的小数精度。

*   **连续型数据平均分段** 模式（即 (that is, when [visualMap-piecewise.splitNumber](option.visualMap-piecewise.md#splitNumber) 被使用时），精度根据数据自动适应。
    
*   **连续型数据自定义分段** 模式（即 [visualMap-piecewise.pieces](option.visualMap-piecewise.md#pieces) 被使用）或 **离散数据根据类别分段** 模式（即 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 被使用），精度默认为0（没有小数）。

## itemWidth
- **Type**: `number`
- **Default**: `20`

图形的宽度，即每个小块的宽度。

## itemHeight
- **Type**: `number`
- **Default**: `14`

图形的高度，即每个小块的高度。

## align
- **Type**: `string`
- **Default**: `'auto'`

指定组件中图形（比如小方块）和文字的摆放关系，可选值为：

*   `'auto'` 自动决定。
*   `'left'` 图形在左文字在右。
*   `'right'` 图形在右文字在左。

## text
- **Type**: `Array`

两端的文本，如\['High', 'Low'\]。[参见例子](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/map-visualMap-piecewise-text&edit=1&reset=1)。

`text` 中的顺序，其实试试就知道。若要看详细的规则，参见 [visualMap.inverse](../option.md#visualMap.inverse)。

兼容 ECharts2，当有 `text` 时，label不显示。

## textGap
- **Type**: `number`
- **Default**: `10`

每项的色块与文本标签之间的距离，单位为px。参见 [visualMap-piecewise.showLabel](option.visualMap-piecewise.md#showLabel)

## showLabel
- **Type**: `boolean`

是否显示每项的文本标签。默认情况是，如果 [visualMap-piecewise.text](option.visualMap-piecewise.md#text) 被使用则不显示文本标签，否则显示。

## itemGap
- **Type**: `number`
- **Default**: `10`

每两个图元之间的间隔距离，单位为px。

## itemSymbol
- **Type**: `string`
- **Default**: `'roundRect'`

默认的图形。可选值为：

`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

。

symbol的设置参见 [visualMap-piecewise.inRange](option.visualMap-piecewise.md#inRange) 和 [visualMap-piecewise.outOfRange](option.visualMap-piecewise.md#outOfRange)。

当他们没有进行指定时，取此 `itemSymbol` 为默认值（但是只在 visualMap 组件上使用，不在 chart 中使用）。

## show
- **Type**: `boolean`
- **Default**: `true`

是否显示 visualMap-piecewise 组件。如果设置为 `false`，不会显示，但是数据映射的功能还存在。

## dimension
- **Type**: `number`

指定用数据的『哪个维度』，映射到视觉元素上。『数据』即 [series.data](../option.md#series.data)。 可以把 [series.data](../option.md#series.data) 理解成一个二维数组，例如：

```
[
    [12, 23, 43],
    [12, 23, 43],
    [43, 545, 65],
    [92, 23, 33]
]
```

其中每个列是一个维度，即 `dimension`。 例如 `dimension` 为 1 时，取第二列（即 23，23，545，23），映射到视觉元素上。

默认取 `data` 中最后一个维度。

## seriesIndex
- **Type**: `number|string|Array`

指定取哪个系列的数据，即哪个系列的 [series.data](../option.md#series.data)。

可取值：

*   一个系列的 index
*   系列的 index 的数组
*   `'all'`/`null`/`undefined` (default)：取所有系列。

## seriesId
- **Type**: `number|string|Array`

从 `v6.0.0` 开始支持

指定取哪个系列的数据，即哪个系列的 [series.data](../option.md#series.data)。

可以是一个 id 或者一个 id 数组。 默认取所有系列。

## seriesTargets
- **Type**: `Array`

从 `v6.1.0` 开始支持

指定多个系列及其对应的维度映射关系。当配置了 `seriesTargets` 时，`seriesIndex`、`seriesId` 和 `dimension` 将被忽略。

这个选项允许单个 `visualMap` 组件同时控制多个系列的不同维度，特别适用于使用 dataset 的场景。

每个目标对象应包含以下属性：

*   `seriesIndex` 或 `seriesId`：指定系列（二者选其一）
*   `dimension`：指定该系列使用的数据维度

示例：

```
option = {
    dataset: {
        source: [
            ['product', 'sales', 'price', 'year'],
            ['A', 100, 20, 2020],
            ['B', 200, 30, 2021],
            ['C', 150, 25, 2022]
        ]
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 100,
        // 配置不同系列使用不同维度
        seriesTargets: [
            {
                seriesIndex: 0,
                dimension: 1  // 第一个系列使用 'sales' 维度
            },
            {
                seriesIndex: 1,
                dimension: 2  // 第二个系列使用 'price' 维度
            }
        ],
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        }
    },
    series: [
        { type: 'bar' },
        { type: 'line' }
    ]
};
```

## hoverLink
- **Type**: `boolean`
- **Default**: `true`

打开 `hoverLink` 功能时，鼠标悬浮到 `visualMap` 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮。

反之，鼠标悬浮到图表中的图形元素上时，在 `visualMap` 组件的相应位置会有三角提示其所对应的数值。

## inRange
- **Type**: `Object`

定义 **在选中范围中** 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）

可选的视觉元素有：

*   `symbol`: 图元的图形类别。
*   `symbolSize`: 图元的大小。
*   `color`: 图元的颜色。
*   `colorAlpha`: 图元的颜色的透明度。
*   `opacity`: 图元以及其附属物（如文字标签）的透明度。
*   `colorLightness`: 颜色的明暗度，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。
*   `colorSaturation`: 颜色的饱和度，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。
*   `colorHue`: 颜色的色调，参见 [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV)。

`inRange` 能定义目标系列（参见 [visualMap-piecewise.seriesIndex](option.visualMap-piecewise.md#seriesIndex)）视觉形式，也同时定义了 `visualMap-piecewise` 本身的视觉样式。通俗来讲就是，假如 `visualMap-piecewise`控制的是散点图，那么 `inRange` 同时定义了散点图的 `颜色`、`尺寸` 等，也定义了 `visualMap-piecewise` 本身的 `颜色`、`尺寸` 等。这二者能对应上。

定义方式，例如：

```
visualMap: [
    {
        ...,
        inRange: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        }
    }
]
```

如果想分别定义 `visualMap-piecewise` 本身的视觉样式和 `目标系列` 的视觉样式，则这样定义：

```
visualMap: [
    {
        ...,
        // 表示 目标系列 的视觉样式。
        target: {
            inRange: {
                color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                symbolSize: [60, 200]
            }
        },
        // 表示 visualMap-piecewise 本身的视觉样式。
        controller: {
            inRange: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

或者这样定义：

```
visualMap: [
    {
        ...,
        // 表示 目标系列 的视觉样式 和 visualMap-piecewise 共有的视觉样式。
        inRange: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [60, 200]
        },
        // 表示 visualMap-piecewise 本身的视觉样式，会覆盖共有的视觉样式。比如，symbolSize 覆盖成为 [30, 100]，而 color 不变。
        controller: {
            inRange: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

**✦ 关于视觉通道 ✦**

*   inRange 中，可以有任意几个的『视觉通道』定义（如 `color`、`symbolSize` 等）。这些视觉通道，会被同时采用。
    
*   一般来说，建议使用 `透明度（opacity）` ，而非 `颜色透明度（colorAlpha）` （他们细微的差异在于，前者能也同时控制图元中的附属物（如 label）的透明度，而后者只能控制图元本身颜色的透明度）。
    
*   视觉映射的方式：支持两种方式：线性映射、查表映射。
    

**✦ 视觉通道 -- 线性映射 ✦**

`线性映射` 表示 series.data 中的每一个值（dataValue）会经过线性映射计算，从 `[visualMap.min, visualMap.max]` 映射到设定的 `[visual value 1, visual value 2]` 区间中的某一个视觉的值（下称 visual value）。

例如，我们设置了 `[visualMap.min, visualMap.max] 为 [0, 100]`，并且我们有 `series.data: [50, 10, 100]`。我们想将其映射到范围为 `[0.4, 1]` 的 `opacity` 上，从而达到用透明度表达数值大小的目的。那么 visualMap 组件会对 series.data 中的每一个 dataValue 做线性映射计算，得到一个 opacityValue。最终得到的 opacityValues 为 `[0.7, 0.44, 1]`。

visual 范围也可以反向，例如上例，可以设定 `opacity` 范围为 `[1, 0.4]`，则上例得到的 opacityValues 为 `[0.7, 0.96, 0.4]`。

注意，\[visualMap.min, visualMap.max\] 须手动设置，不设置则默认取 \[0, 100\]，而非 series.data 中的 `dataMin` 和 `dataMax`。

如何设定为线性映射？以下情况时，会设定为 `线性映射`：

*   当 `visualMap` 为 [visualMap-continuous](option.visualMap-continuous.md) 时，或者
    
*   当 `visualMap` 为 [visualMap-piecewise](option.visualMap-piecewise.md) 且 未设置 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 时。
    

视觉通道的值（visual value）：

*   视觉通道的值一般都以 `Array` 形式表示，例如：`color: ['#333', '#777']`。
    
*   如果写成 `number` 或 `string`，会转成 `Array`。例如，写成 `opacity: 0.4` 会转成 `opacity: [0.4, 0.4]`，`color: '#333'` 会转成 `color: ['#333', '#333']`。
    
*   对于 `图形大小（symbolSize）`、`透明度（opacity）`、`颜色透明度（colorAlpha）`、`颜色明暗度（colorLightness）`、`颜色饱和度（colorSaturation）`、`色调（colorHue）`：形如`Array` 的视觉范围总是表示：`[最小数据值对应的视觉值, 最大数据值对应的视觉值]`。比如：`colorLightness: [0.8, 0.2]`，表示 series.data 中，和 `visualMap.min` 相等的值（如果有的话）映射到 `颜色明暗` 的 `0.8`，和 `visualMap.max` 相等的值（如果有的话）映射到 `颜色明暗` 的 `0.2`，中间其他数据值，按照线性计算出映射结果。
    
*   对于 `颜色（color）`，使用数组表示例如：`['#333', '#78ab23', 'blue']`。意思就是以这三个点作为基准，形成一种『渐变』的色带，数据映射到这个色带上。也就是说，与 `visualMap.min` 相等的值会映射到 `'#333'`，与 `visualMap.max` 相等的值会映射到 `'blue'`。对于 `visualMap.min` 和 `visualMap.max` 中间的其他点，以所给定的 `'#333'`, `'#78ab23'`, `'blue'` 这三个颜色作为基准点进行分段线性插值，得到映射结果。
    
*   对于 `图形类别（symbol）`：使用数据表示例如：`['circle', 'rect', 'diamond']`。与 `visualMap.min` 相等的值会映射到 `'circle'`，与 `visualMap.max` 相等的值会映射到 `'diamond'`。对于 中间的其他点，会根据他们和 `visualMap.min` 和 `visualMap.max` 的数值距离，映射到 `'circle'`, `'rect'`, `'diamond'` 中某个值上。
    

visual value 的取值范围：

*   `透明度（opacity）`、`颜色透明度（colorAlpha）`、`颜色明暗度（colorLightness）`、`颜色饱和度（colorSaturation）`、`visual value`
    
    取值范围是 `[0, 1]`。
    
*   `色调（colorHue）`：
    
    取值范围是 `[0, 360]`。
    
*   `颜色（color）`：
    
    颜色可以使用 RGB 表示，比如 `'rgb(128, 128, 128)'`，如果想要加上 alpha 通道，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 '#ccc'。
    
*   `图形类别（symbol）`：
    

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

**✦ 视觉通道 -- 查表映射 ✦**

`查表映射` 表示 series.data 中的所有值（dataValue）是可枚举的，会根据给定的映射表查表得到映射结果。

例如，在 [visualMap-piecewise](option.visualMap-piecewise.md) 中，我们设定了 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 为 `['Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin']`。我们有 series.data: `['Demon Hunter', 'Death Knight', 'Warden', 'Paladin']`。然后我们可以定立查表映射规则：`color: {'Warden': 'red', 'Demon Hunter': 'black'}`，于是 `visualMap` 组件会按照表来将 `dataValue` 映射到 `color`。

如何设定为查表映射？当 `visualMap` 为 [visualMap-piecewise](option.visualMap-piecewise.md) 且 设置了 [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) 时，会进行查表映射。

视觉通道的值（visual value）：一般使用 `Object` 或 `Array` 来表示，例如：

```
visualMap: {
    type: 'piecewise',
    // categories 定义了 visualMap-piecewise 组件显示出来的项。
    categories: [
        'Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin'
    ],
    inRange: {
        // visual value 可以配成 Object：
        color: {
            'Warden': 'red',
            'Demon Hunter': 'black',
            '': 'green' // 空字串，表示除了'Warden'、'Demon Hunter'外，都对应到 'green'。
        }
        // visual value 也可以只配一个单值，表示所有都映射到一个值，如：
        color: 'green',
        // visual value 也可以配成数组，这个数组须和 categories 数组等长，
        // 每个数组项和 categories 数组项一一对应：
        color: ['red', 'black', 'green', 'yellow', 'white']
    }
}
```

[参见示例](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/scatter-visualMap-categories&edit=1&reset=1)

**✦ 修改视觉编码 ✦**

如果在图表被渲染后（即已经使用 `setOption` 设置了初始 `option` 之后），想修改 visualMap 的各种 `视觉编码`，按照惯例，再次使用 `setOption` 即可。例如：

```
chart.setOption({
    visualMap: {
        inRange: {color: ['red', 'blue']}
    }
});
```

但请注意：

*   visualMap option 中的这几个属性，`inRange`, `outOfRange`, `target`, `controller`，在 setOption 时不支持 merge。否则会带来过于复杂的 merge 逻辑。也就是说，`setOption` 时，一旦修改了以上几个属性中的一项，其他项也会被清空，而非保留当前状态。所以，设置 visual 值时，请一次性全部设置，而非只设置一部分。
    
*   **不推荐使用 `getOption -> 修改option -> setOption` 的方式：**
    

```
// 不推荐这样做（尽管也能达到和上面的例子相同的结果）：
var option = chart.getOption(); // 获取所有option。
option.visualMap.inRange.color = ['red', 'blue']; // 改动color（我想要改变 color）。

// 如下两处也要进行同步改动，否则可能达不到期望效果。
option.visualMap.target.inRange.color = ['red', 'blue'];
option.visualMap.controller.inRange.color = ['red', 'blue'];

chart.setOption(option); // option设置回 visualMap
```

**注意**，inRange 没有指定，则会默认会设置 color: `['#f6efa6', '#d88273', '#bf444c']`，如果你不想要这个color，可以 `inRange: {color: null}` 来去除。

## outOfRange
- **Type**: `Object`

定义 **在选中范围外** 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）

配置参考 [visualMap-piecewise.inRange](option.visualMap-piecewise.md#inRange)

## controller
- **Type**: `Object`

visualMap 组件中，`控制器` 的 `inRange` `outOfRange` 设置。如果没有这个 `controller` 设置，`控制器` 会使用外层的 `inRange` `outOfRange` 设置；如果有这个 `controller` 设置，则会采用这个设置。适用于一些控制器视觉效果需要特殊定制或调整的场景。

### controller.inRange
- **Type**: `Object`

定义 **在选中范围中** 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）

配置参考 [visualMap-piecewise.inRange](option.visualMap-piecewise.md#inRange)

### controller.outOfRange
- **Type**: `Object`

定义 **在选中范围外** 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）

配置参考 [visualMap-piecewise.inRange](option.visualMap-piecewise.md#inRange)

## zlevel
- **Type**: `number`
- **Default**: `0`

所有图形的 zlevel 值。

`zlevel`用于 Canvas 分层，不同`zlevel`值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的`zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。

## z
- **Type**: `number`
- **Default**: `4`

组件的所有图形的`z`值。控制图形的前后顺序。`z`值小的图形会被`z`值大的图形覆盖。

`z`相比`zlevel`优先级更低，而且不会创建新的 Canvas。

## left
- **Type**: `string|number`
- **Default**: `0`

视觉映射（visualMap）组件离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## top
- **Type**: `string|number`
- **Default**: `auto`

视觉映射（visualMap）组件离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

## right
- **Type**: `string|number`
- **Default**: `auto`

视觉映射（visualMap）组件离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

## bottom
- **Type**: `string|number`
- **Default**: `0`

视觉映射（visualMap）组件离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

## coordinateSystem
- **Type**: `string`
- **Default**: `'none'`

从 `v6.0.0` 开始支持

指定另一个坐标系组件，本 `visualMap-piecewise` 布局在那个坐标系中。

可选值：

*   `null`、`undefined` 或者 `'none'`
    
    不布局在任何坐标系中。自己独立完成布局。
    

*   `'calendar'`
    
    布局在一个 [日历坐标系](option.calendar.md) 中。当一个 ECharts 实例中存在多个日历坐标系时，须通过 [calendarIndex](option.visualMap-piecewise.md#calendarIndex) 或 [calendarId](option.visualMap-piecewise.md#calendarId) 指定所使用的日历坐标系。
    

*   `'matrix'`
    
    布局在一个 [矩阵坐标系](option.matrix.md)中。当一个 ECharts 实例中存在多个矩阵坐标系时，须通过 [matrixIndex](option.visualMap-piecewise.md#matrixIndex) 或 [matrixId](option.visualMap-piecewise.md#matrixId) 指定所使用的矩阵坐标系。
    

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

也参见 [visualMap-piecewise.coordinateSystemUsage](option.visualMap-piecewise.md#coordinateSystemUsage)。

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'box'`

从 `v6.0.0` 开始支持

如何在指定的 [坐标系](option.visualMap-piecewise.md#coordinateSystem) 上布局本 `visualMap-piecewise`。

在大多数情况下，无需显式指定 `coordinateSystemUsage`，除非默认行为不符合预期。

可选值：

*   `'data'`：**（不适用于 [visualMap-piecewise](option.visualMap-piecewise.md)）**
    
    此系列的每个数据项（例如，每个 `series.data[i]`）将独立地在指定的坐标系进行布局。 注：当前没有任何“非系列组件”支持 `coordinateSystemUsage: 'data'`。
    
*   `'box'`：
    
    此系列或组件作为一个整体，在指定的坐标系中进行布局——即根据坐标系计算整体的包围盒或基础锚点。
    
    *   例如，[grid 组件](option.grid.md) 可以布局在 [matrix 坐标系](option.matrix.md) 或 [calendar 坐标系](option.calendar.md) 中，这时其布局矩形是由 [visualMap-piecewise.coords](option.visualMap-piecewise.md#coords) 在坐标系中计算出来的。参见示例：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1)。
    *   又如，[饼图系列](option.series-pie.md) 或 [和弦图系列](option.series-chord.md) 可以布局在 [geo 坐标系](option.geo.md) 或 [cartesian2d 坐标系](option.grid.md) 中，这时其中心点是由 [series-pie.coords](option.series-pie.md#coords) 或 [series-pie.center](option.series-pie.md#center) 在坐标系中计算出来的。参见示例：[地理坐标系中的饼图](https://echarts.apache.org/examples/zh/editor.html?c=map-iceland-pie&edit=1&reset=1)。

另参考：[visualMap-piecewise.coordinateSystem](option.visualMap-piecewise.md#coordinateSystem)。

## coord
- **Type**: `Array|number|string`

从 `v6.0.0` 开始支持

当 [coordinateSystemUsage](option.visualMap-piecewise.md#coordinateSystemUsage) 为 `'box'` 时, `coord` 被输入给坐标系，计算得到布局位置（布局盒或者中心点）。

例子：[矩阵中的微型折线图](https://echarts.apache.org/examples/zh/editor.html?c=matrix-sparkline&edit=1&reset=1), [矩阵中的关系图](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> 注：当 [coordinateSystemUsage](option.visualMap-piecewise.md#coordinateSystemUsage) 为 `'data'` 时，输入给坐标系的是 `series.data[i]` 而非此 `coord`。

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

## orient
- **Type**: `string`
- **Default**: `'vertical'`

如何放置 visualMap 组件，水平（`'horizontal'`）或者竖直（`'vertical'`）。

## padding
- **Type**: `number|Array`
- **Default**: `5`

visualMap-piecewise内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。

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

## backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(0,0,0,0)'`

背景色。

## borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

边框颜色。

## borderWidth
- **Type**: `number`
- **Default**: `0`

边框线宽，单位px。

## color
- **Type**: `Array`
- **Default**: `['#bf444c', '#d88273', '#f6efa6']`

这个配置项，是为了兼容 ECharts2 而存在，ECharts3 中已经不推荐使用。它的功能已经移到了 [visualMap-piecewise.inRange](option.visualMap-piecewise.md#inRange) 和 [visualMap-piecewise.outOfRange](option.visualMap-piecewise.md#outOfRange) 中。

如果要使用，则须注意，`color`属性中的顺序是由数值 `大` 到 `小`，但是 [visualMap-piecewise.inRange](option.visualMap-piecewise.md#inRange) 或 [visualMap-piecewise.outOfRange](option.visualMap-piecewise.md#outOfRange) 中 `color` 的顺序，总是由数值 `小` 到 `大`。二者不一致。

### textStyle.color
- **Type**: `Color`
- **Default**: `#333`

visualMap 文字的颜色。

### textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

visualMap 文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

visualMap 文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

visualMap 文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

### textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

visualMap 文字的字体大小。

### textStyle.lineHeight
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

### textStyle.width
- **Type**: `number`

文本显示宽度。

### textStyle.height
- **Type**: `number`

文本显示高度。

### textStyle.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

### textStyle.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

### textStyle.textBorderType
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

### textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

### textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

### textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

### textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

### textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

### textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

## formatter
- **Type**: `string|Function`

标签的格式化工具。

*   如果为`string`，表示模板，例如：`aaaa{value}bbbb{value2}`。其中 `{value}` 和 `{value2}` 是当前的范围边界值。
*   如果为 `Function`，表示回调函数，形如：

```
formatter: function (value, value2) {
    return 'aaaa' + value + 'bbbb' + value2; // 范围标签显示内容。
}
```
