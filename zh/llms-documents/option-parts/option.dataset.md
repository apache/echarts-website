# option.dataset

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## source
- **Type**: `Array|Object`

原始数据。一般来说，原始数据表达的是二维表。可以用如下这些格式表达二维表：

二维数组，其中第一行/列可以给出 [维度名](option.dataset.md#dimensions)，也可以不给出，直接就是数据：

```
[
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
]
```

按行的 key-value 形式（对象数组），其中键（key）表明了 [维度名](option.dataset.md#dimensions)：

```
[
    {product: 'Matcha Latte', count: 823, score: 95.8},
    {product: 'Milk Tea', count: 235, score: 81.4},
    {product: 'Cheese Cocoa', count: 1042, score: 91.2},
    {product: 'Walnut Brownie', count: 988, score: 76.9}
]
```

按列的 key-value 形式，每一项表示二维表的 “一列”：

```
{
    'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    'count': [823, 235, 1042, 988],
    'score': [95.8, 81.4, 91.2, 76.9]
}
```

关于 `dataset` 的详情，请参见[教程](https://echarts.apache.org/handbook/zh/concepts/dataset)。

## dimensions
- **Type**: `Array`

使用 dimensions 定义 `series.data` 或者 `dataset.source` 的每个维度的信息。

注意：如果使用了 [dataset](option.dataset.md)，那么可以在 [dataset.dimensions](option.dataset.md#dimensions) 中定义 dimension ，或者在 [dataset.source](option.dataset.md#source) 的第一行/列中给出 dimension 名称。于是就不用在这里指定 dimension。但如果在这里指定了 `dimensions`，那么优先使用这里的。

例如：

```
option = {
    dataset: {
        source: [
            // 有了上面 dimensions 定义后，下面这五个维度的名称分别为：
            // 'date', 'open', 'close', 'highest', 'lowest'
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        // 定义了每个维度的名称。这个名称会被显示到默认的 tooltip 中。
        dimensions: ['date', 'open', 'close', 'highest', 'lowest']
    }
}
```

```
series: {
    type: 'xxx',
    dimensions: [
        null,                // 如果此维度不想给出定义，则使用 null 即可
        {type: 'ordinal'},   // 只定义此维度的类型。
                             // 'ordinal' 表示离散型，一般文本使用这种类型。
                             // 如果类型没有被定义，会自动猜测类型。
        {name: 'good', type: 'number'},
        'bad'                // 等同于 {name: 'bad'}
    ]
}
```

`dimensions` 数组中的每一项可以是：

*   `string`，如 `'someName'`，等同于 `{name: 'someName'}`
*   `Object`，属性可以有：
    *   name: `string`。
    *   type: `string`，支持
        *   `number`，默认，表示普通数据。
        *   `ordinal`，对于类目、文本这些 string 类型的数据，如果需要能在数轴上使用，须是 'ordinal' 类型。ECharts 默认会自动判断这个类型。但是自动判断也是不可能很完备的，所以使用者也可以手动强制指定。
        *   `float`，即 [Float64Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)。
        *   `int`，即 [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)。
        *   `time`，表示时间类型。设置成 'time' 则能支持自动解析数据成时间戳（timestamp），比如该维度的数据是 '2017-05-10'，会自动被解析。时间类型的支持参见 [data](../option.md#series.data)。
    *   displayName: 一般用于 tooltip 中维度名的展示。`string` 如果没有指定，默认使用 name 来展示。

值得一提的是，当定义了 `dimensions` 后，默认 `tooltip` 中对个维度的显示，会变为『竖排』，从而方便显示每个维度的名称。如果没有定义 `dimensions`，则默认 `tooltip` 会横排显示，且只显示数值没有维度名称可显示。

## sourceHeader
- **Type**: `boolean|number`

`dataset.source` 第一行/列是否是 [维度名](option.dataset.md#dimensions) 信息。可选值：

*   `null/undefined/'auto'`：默认，自动探测。
*   `true`：第一行/列是维度名信息。
*   `false`：第一行/列直接开始是数据。
*   `number`: 维度名行/列数，也就是数据行/列的开始索引。例如：`sourceHeader: 2` 意味着前两行/列为维度名，从第三行/列开始为数据。

注意：“第一行/列” 的意思是，如果 [series.seriesLayoutBy](../option.md#series.seriesLayoutBy) 设置为 `'column'`（默认值），则取第一行，如果 `series.seriesLayoutBy` 设置为 `'row'`，则取第一列。

## transform
- **Type**: `Array`

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)

### transform-filter.config
- **Type**: `*`

"sort" 数据转换器的“条件”。

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)

### transform-filter.print
- **Type**: `boolean`
- **Default**: `false`

使用 transform 时，有时候我们会配不对，显示不出来结果，并且不知道哪里错了。所以，这里提供了一个配置项 `transform.print` 方便 debug 。这个配置项只在开发环境中生效。如下例：

```
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // 配置为 `true` 后， transform 的结果
            // 会被 console.log 打印出来。
            print: true
        }
    }],
    ...
}
```

### transform-sort.config
- **Type**: `*`

"sort" 数据转换器的“条件”。

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)

### transform-sort.print
- **Type**: `boolean`
- **Default**: `false`

使用 transform 时，有时候我们会配不对，显示不出来结果，并且不知道哪里错了。所以，这里提供了一个配置项 `transform.print` 方便 debug 。这个配置项只在开发环境中生效。如下例：

```
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // 配置为 `true` 后， transform 的结果
            // 会被 console.log 打印出来。
            print: true
        }
    }],
    ...
}
```

## transform-xxx:xxx
- **Type**: `Object`

除了上述的内置的数据转换器外，我们也可以使用外部的数据转换器。外部数据转换器能提供或自己定制更丰富的功能。

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)

### transform-xxx:xxx.type
- **Type**: `string`
- **Default**: `'xxx:xxx'`

内置数据转换器没有名空间（如 `type: 'filter'`, `type: 'sort'`）。

外部数据转换器须有名空间（如 `type: 'ecStat:regression'`）。

### transform-xxx:xxx.config
- **Type**: `Object`

这里设置每个数据转换器所须的参数。每种数据转换器有自己的参数格式定义。

### transform-xxx:xxx.print
- **Type**: `boolean`
- **Default**: `false`

使用 transform 时，有时候我们会配不对，显示不出来结果，并且不知道哪里错了。所以，这里提供了一个配置项 `transform.print` 方便 debug 。这个配置项只在开发环境中生效。如下例：

```
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // 配置为 `true` 后， transform 的结果
            // 会被 console.log 打印出来。
            print: true
        }
    }],
    ...
}
```

## fromDatasetIndex
- **Type**: `number`

指定 [dataset.transform](option.dataset.md#transform) 以哪个 dataset 作为输入。如果 [dataset.transform](option.dataset.md#transform) 被指定了，但是 `fromDatasetIndex` 和 `fromDatasetId` 都没有被指定，那么默认会使用 `fromDatasetIndex: 0`.

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)

## fromDatasetId
- **Type**: `string`

指定 [dataset.transform](option.dataset.md#transform) 以哪个 dataset 作为输入。

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)

## fromTransformResult
- **Type**: `number`

如果一个 [dataset.transform](option.dataset.md#transform) 会产出多个结果 data ，我们可以使用 `fromTransformResult` 获得特定的结果。

大多数场景下，transform 只会产出一个结果，所以大多数情况下 `fromTransformResult` 并不需要指定。当不指定 `fromTransformResult` 时，默认使用 `fromTransformResult: 0`。

参见 [数据变换教程](https://echarts.apache.org/handbook/zh/concepts/data-transform)
