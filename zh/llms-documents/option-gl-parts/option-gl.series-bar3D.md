# option-gl.series-bar3D

## name
- **Type**: `string`

系列名称，用于 [tooltip](https://echarts.apache.org/zh/option.html#tooltip) 的显示，[legend](https://echarts.apache.org/zh/option.html#legend) 的图例筛选，在 `setOption` 更新数据和配置项时用于指定对应的系列。

## coordinateSystem
- **Type**: `string`
- **Default**: `cartesian3D`

该系列使用的坐标系，可选：

*   `'cartesian3D'`
    
    使用三维笛卡尔坐标系，通过 [grid3DIndex](../option-gl.md#series-.grid3DIndex) 指定相应的三维笛卡尔坐标系组件。
    

*   `'geo3D'`
    
    使用三维地理坐标系，通过 [geo3DIndex](../option-gl.md#series-.geo3DIndex) 指定相应的三维地理坐标系组件
    

*   `'globe'`
    
    使用地球坐标系，通过 [globeIndex](../option-gl.md#series-.globeIndex) 指定相应的地球坐标系组件

## grid3DIndex
- **Type**: `number`
- **Default**: `0`

使用的 [grid3D](option-gl.grid3D.md) 组件的索引。默认使用第一个 [grid3D](option-gl.grid3D.md) 组件。

## geo3DIndex
- **Type**: `number`
- **Default**: `0`

坐标轴使用的 [geo3D](option-gl.geo3D.md) 组件的索引。默认使用第一个 [geo3D](option-gl.geo3D.md) 组件。

## globeIndex
- **Type**: `number`
- **Default**: `0`

坐标轴使用的 [globe](option-gl.globe.md) 组件的索引。默认使用第一个 [globe](option-gl.globe.md) 组件。

## bevelSize
- **Type**: `number`
- **Default**: `0`

柱子的倒角尺寸。支持设置为从 0 到 1 的值。默认为 0，即没有倒角。

下面是无倒角和有倒角的区别。

![](../../documents/asset/gl/img/bar3D-no-bevel.png "bevelSize: 0") ![](../../documents/asset/gl/img/bar3D-bevel.png "bevelSize: 0.3")

## bevelSmoothness
- **Type**: `number`
- **Default**: `2`

柱子倒角的光滑/圆润度，数值越大越光滑/圆润。

## stack
- **Type**: `string`

堆叠的组名。在**同一个类目轴（category axis）**上，配置了相同 `stack` 组名的系列会互相堆叠。关于数值的堆叠方式，可参见 [stackStrategy](option-gl.series-bar3D.md#stackStrategy)。

**注意：**堆叠功能只支持被堆叠轴为 `'value'` 或 `'log'` 类型，不支持被堆叠轴为 `'time'` 或 `'category'` 类型。

## stackStrategy
- **Type**: `string`
- **Default**: `'samesign'`

从 ECharts `v5.3.3` 开始支持

堆叠数值的计算方式，仅在设置了 [stack](option-gl.series-bar3D.md#stack) 属性后生效。可选值：

*   `'samesign'` 仅当待堆叠数值与当前累积堆叠值正负符号一致时才堆叠。**(默认)**
*   `'all'` 堆叠所有数值，不区分正负。
*   `'positive'` 只堆叠正值。
*   `'negative'` 只堆叠负值。

## stackOrder
- **Type**: `string`
- **Default**: `'seriesAsc'`

从 ECharts `v6.0.0` 开始支持

堆叠顺序。可选值：

*   `'seriesAsc'` 按系列顺序堆叠。**(默认)**
*   `'seriesDesc'` 按系列反向顺序堆叠。

**注意：**

*   `stackOrder` 应该为所有具有相同 `stack` 名称的系列定义。如果只为部分系列定义 `stackOrder`，当某些系列被隐藏（如通过图例切换）时，可能会导致堆叠顺序发生意外变化。

## minHeight
- **Type**: `number`
- **Default**: `0`

最小柱子高度。

## itemStyle
- **Type**: `Object`

柱子的样式，包括颜色和不透明度。

### itemStyle.color
- **Type**: `string|Function`
- **Default**: `自适应`

图形的颜色。 默认从全局调色盘 [option.color](https://echarts.apache.org/zh/option.html#color) 获取颜色

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

### itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形的不透明度。

## label
- **Type**: `Object`

柱子的标签配置。

### label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

### label.distance
- **Type**: `number`
- **Default**: `2`

标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。

### label.formatter
- **Type**: `Function|string`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板**

模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。

**示例：**

```
formatter: '{b}: {c}'
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

### label.textStyle
- **Type**: `Object`

标签的字体样式。

#### label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

文字的颜色。

#### label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

文字的描边宽度。

#### label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

#### label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

#### label.textStyle.fontSize
- **Type**: `number`
- **Default**: `20`

文字的字体大小。

#### label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## emphasis
- **Type**: `Object`

柱子高亮状态的标签和样式配置。

#### emphasis.itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### emphasis.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形的不透明度。

#### emphasis.label.show
- **Type**: `boolean`
- **Default**: `true`

是否显示标签。

#### emphasis.label.distance
- **Type**: `number`
- **Default**: `2`

标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。

#### emphasis.label.formatter
- **Type**: `Function|string`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板**

模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。

**示例：**

```
formatter: '{b}: {c}'
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

#### emphasis.label.textStyle
- **Type**: `Object`

标签的字体样式。

##### emphasis.label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

文字的颜色。

##### emphasis.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

文字的描边宽度。

##### emphasis.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

##### emphasis.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

##### emphasis.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `20`

文字的字体大小。

##### emphasis.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## data
- **Type**: `Array`

三维柱状图数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：

```
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

对于数组中的每一项：

1.  在 [grid3D](option-gl.grid3D.md) 中，每一项的前三个值分别是`x`, `y`, `z`。
2.  在 [geo3D](option-gl.geo3D.md) 以及 [globe](option-gl.globe.md) 中，每一项的前两个值分别是经纬度 `lng`, `lat`，第三个值表示数值大小，例如人口的多少。这个值会被映射到 [minHeight](option-gl.series-bar3D.md#minHeight) ~ [maxHeight](option-gl.series-bar3D.md#maxHeight) 的范围。

除了默认给坐标系使用的三个值，每一项还可以加入任意多个值，用于给 [visualMap](../option-gl.md#visualMap) 组件映射到颜色等其它图形属性。

有些时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：

```
[{
    // 数据项的名称
    name: '数据1',
    // 数据项值
    value: [12, 14, 10]
}, {
    name: '数据2',
    value: [34, 50, 15]
}]
```

需要对个别内容指定进行个性化定义时：

```
[{
    name: '数据1',
    value: [12, 14, 10]
}, {
    // 数据项名称
    name: '数据2',
    value : [34, 50, 15],
    //自定义特殊itemStyle，仅对该item有效
    itemStyle:{}
}]
```

### data.name
- **Type**: `string`

数据项名称。

### data.value
- **Type**: `Array`

数据项值。

### data.itemStyle
- **Type**: `Object`

单个数据项的样式设置。

#### data.itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### data.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形的不透明度。

### data.label
- **Type**: `Object`

单个数据项的标签设置。

#### data.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### data.label.distance
- **Type**: `number`
- **Default**: `2`

标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。

#### data.label.formatter
- **Type**: `Function|string`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板**

模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。

**示例：**

```
formatter: '{b}: {c}'
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

#### data.label.textStyle
- **Type**: `Object`

标签的字体样式。

##### data.label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

文字的颜色。

##### data.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

文字的描边宽度。

##### data.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

##### data.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

##### data.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `20`

文字的字体大小。

##### data.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### data.emphasis
- **Type**: `Object`

单个数据项高亮状态的标签和样式配置。

##### data.emphasis.itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

##### data.emphasis.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形的不透明度。

##### data.emphasis.label.show
- **Type**: `boolean`
- **Default**: `true`

是否显示标签。

##### data.emphasis.label.distance
- **Type**: `number`
- **Default**: `2`

标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。

##### data.emphasis.label.formatter
- **Type**: `Function|string`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板**

模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。

**示例：**

```
formatter: '{b}: {c}'
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

##### data.emphasis.label.textStyle
- **Type**: `Object`

标签的字体样式。

###### data.emphasis.label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

文字的颜色。

###### data.emphasis.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

文字的描边宽度。

###### data.emphasis.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

###### data.emphasis.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

###### data.emphasis.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `20`

文字的字体大小。

###### data.emphasis.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## shading
- **Type**: `string`

三维柱状图中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：

*   `'color'` 只显示颜色，不受光照等其它因素的影响。
    
*   `'lambert'` 通过经典的 [lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) 着色表现光照带来的明暗。
    
*   `'realistic'` 真实感渲染，配合 [light.ambientCubemap](option-gl.globe.md#light.ambientCubemap) 和 [postEffect](option-gl.globe.md#postEffect) 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了[基于物理的渲染（PBR）](https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/) 来表现真实感材质。

## realisticMaterial
- **Type**: `Object`

真实感材质相关的配置项，在 [shading](option-gl.series-bar3D.md#shading) 为`'realistic'`时有效。

### realisticMaterial.detailTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的纹理贴图。

### realisticMaterial.textureTiling
- **Type**: `number`
- **Default**: `1`

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

### realisticMaterial.textureOffset
- **Type**: `number`
- **Default**: `0`

材质细节纹理的位移。

### realisticMaterial.roughness
- **Type**: `number|string|HTMLImageElement|HTMLCanvasElement`
- **Default**: `0.5`

`roughness`属性用于表示材质的粗糙度，`0`为完全光滑，`1`完全粗糙，中间的值则是介于这两者之间。

下图是 [globe](option-gl.globe.md) 中`roughness`分别是`0.2`（光滑）与`0.8`（粗糙）的效果。

![](../../documents/asset/gl/img/globe-gloss.png) ![](../../documents/asset/gl/img/globe-rough.png)

当你想要表达更复杂的材质时。你可以直接将 `roughness` 设置为如下用每个像素存储粗糙度的贴图。

![](../../documents/asset/gl/img/roughness.png)

贴图中颜色越白的地方值越大，就越粗糙。你可以从 [http://freepbr.com/](http://freepbr.com/) 等资源网站获取不同材质的贴图资源，也可以使用其他工具自己生成。

### realisticMaterial.metalness
- **Type**: `number|string|HTMLImageElement|HTMLCanvasElement`
- **Default**: `0`

`metalness`属性用于表示材质是金属还是非金属，`0`为非金属，`1`为金属，中间的值则是介于这两者之间。通常设成`0`和`1`就能满足大部分场景了。

下图是 [globe](option-gl.globe.md) 中`metalness`分别设成`1`与`0`的效果区别。

![](../../documents/asset/gl/img/globe-metal.png) ![](../../documents/asset/gl/img/globe-non-metal.png)

跟 [roughness](option-gl.series-bar3D.md#realisticMaterial.roughness) 一样 你可以直接将 `metalness` 设置为金属度贴图。

### realisticMaterial.roughnessAdjust
- **Type**: `number`
- **Default**: `0.5`

粗糙度调整，在使用粗糙度贴图的时候有用。可以对贴图整体的粗糙度进行调整。默认为 `0.5`，`0`的时候为完全光滑，`1`的时候为完全粗糙。

### realisticMaterial.metalnessAdjust
- **Type**: `number`
- **Default**: `0.5`

金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 `0.5`，`0`的时候为非金属，`1`的时候为金属。

### realisticMaterial.normalTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的法线贴图。

使用法线贴图可以在较少的顶点下依然表现出物体表面丰富的明暗细节。

## lambertMaterial
- **Type**: `Object`

lambert 材质相关的配置项，在 [shading](option-gl.series-bar3D.md#shading) 为`'lambert'`时有效。

### lambertMaterial.detailTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的纹理贴图。

### lambertMaterial.textureTiling
- **Type**: `number`
- **Default**: `1`

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

### lambertMaterial.textureOffset
- **Type**: `number`
- **Default**: `0`

材质细节纹理的位移。

## colorMaterial
- **Type**: `Object`

color 材质相关的配置项，在 [shading](option-gl.series-bar3D.md#shading) 为`'color'`时有效。

### colorMaterial.detailTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的纹理贴图。

### colorMaterial.textureTiling
- **Type**: `number`
- **Default**: `1`

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

### colorMaterial.textureOffset
- **Type**: `number`
- **Default**: `0`

材质细节纹理的位移。

## zlevel
- **Type**: `number`
- **Default**: `-10`

组件所在的层。

`zlevel`用于 Canvas 分层，不同`zlevel`值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的`zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。

**注:** echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 `zlevel` 不能同时用于 WebGL 和 Canvas 的绘制。

## silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

## animation
- **Type**: `boolean`
- **Default**: `true`

是否开启动画。

## animationDurationUpdate
- **Type**: `number`
- **Default**: `500`

过渡动画的时长。

## animationEasingUpdate
- **Type**: `string`
- **Default**: `cubicOut`

过渡动画的缓动效果。
