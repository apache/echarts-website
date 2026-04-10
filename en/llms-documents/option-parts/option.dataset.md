# option.dataset

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## source
- **Type**: `Array|Object`

Source data. Generally speaking, a source data describe a table, where these format below can be applied:

2d array, where [dimension names](option.dataset.md#dimensions) can be provided in the first row/column, or do not provide, only data.

```
[
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
]
```

Row based key-value format (object array), where the keys indicate [dimension names](option.dataset.md#dimensions).

```
[
    {product: 'Matcha Latte', count: 823, score: 95.8},
    {product: 'Milk Tea', count: 235, score: 81.4},
    {product: 'Cheese Cocoa', count: 1042, score: 91.2},
    {product: 'Walnut Brownie', count: 988, score: 76.9}
]
```

Column based key-value format, where each value represents a column of a table.

```
{
    'product': ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie'],
    'count': [823, 235, 1042, 988],
    'score': [95.8, 81.4, 91.2, 76.9]
}
```

More details about `dataset` can be checked in the [tutorial](https://echarts.apache.org/handbook/en/concepts/dataset/).

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

## sourceHeader
- **Type**: `boolean|number`

Whether the first row/column of `dataset.source` represents [dimension names](option.dataset.md#dimensions). Optional values:

*   `null/undefined/'auto'`: means auto detect whether the first row/column is dimension names or data.
*   `true`: the first row/column is dimension names.
*   `false`: data start from the first row/column.
*   `number`: means the row/column count of the dimension names, that is, the start index of data row/column. e.g. `sourceHeader: 2` means the front two rows/columns are dimension names, the back ones are data.

Note: **_the first row/column_** means that if [series.seriesLayoutBy](../option.md#series.seriesLayoutBy) is set as `'column'`, pick the first row, otherwise, if it is set as `'row'`, pick the first column.

## transform
- **Type**: `Array`

See the tutorial of [data transform](../tutorial.md#Data%20Transform).

### transform-filter.config
- **Type**: `*`

The condition of transform "filter".

See the tutorial of [data transform](../tutorial.md#Data%20Transform).

### transform-filter.print
- **Type**: `boolean`
- **Default**: `false`

When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property `transform.print` might help in such case. (`transform.print` is only available in dev environment).

```
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // The result of this transform will be printed
            // in dev tool via `console.log`.
            print: true
        }
    }],
    ...
}
```

### transform-sort.config
- **Type**: `*`

The condition of transform "sort".

See the tutorial of [data transform](../tutorial.md#Data%20Transform).

### transform-sort.print
- **Type**: `boolean`
- **Default**: `false`

When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property `transform.print` might help in such case. (`transform.print` is only available in dev environment).

```
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // The result of this transform will be printed
            // in dev tool via `console.log`.
            print: true
        }
    }],
    ...
}
```

## transform-xxx:xxx
- **Type**: `Object`

Besides built-in transforms (like 'filter', 'sort'), we can also use external transforms to provide more powerful functionalities.

See the tutorial of [data transform](../tutorial.md#Data%20Transform).

### transform-xxx:xxx.type
- **Type**: `string`
- **Default**: `'xxx:xxx'`

Built-in transform has no namespace (like `type: 'filter'`, `type: 'sort'`).

External transform has namespace (like `type: 'ecStat:regression'`).

### transform-xxx:xxx.config
- **Type**: `*`

The needed parameters of this data transform. Each type of transform has its own definition of `config`.

### transform-xxx:xxx.print
- **Type**: `boolean`
- **Default**: `false`

When using data transform, we might run into the trouble that the final chart do not display correctly but we do not know where the config is wrong. There is a property `transform.print` might help in such case. (`transform.print` is only available in dev environment).

```
option = {
    dataset: [{
        source: [ ... ]
    }, {
        transform: {
            type: 'filter',
            config: { ... }
            // The result of this transform will be printed
            // in dev tool via `console.log`.
            print: true
        }
    }],
    ...
}
```

## fromDatasetIndex
- **Type**: `number`

Specify the input dataset for [dataset.transform](option.dataset.md#transform). If [dataset.transform](option.dataset.md#transform) specified but both `fromDatasetIndex` and `fromDatasetId` are not specified, `fromDatasetIndex: 0` will be used by default.

See the tutorial of [data transform](../tutorial.md#Data%20Transform).

## fromDatasetId
- **Type**: `string`

Specify the input dataset for [dataset.transform](option.dataset.md#transform).

See the tutorial of [data transform](../tutorial.md#Data%20Transform).

## fromTransformResult
- **Type**: `number`

If a [dataset.transform](option.dataset.md#transform) produces more than one result, we can use `fromTransformResult` to retrieve some certain result.

In most cases, `fromTransformResult` do not need to be specified because most transforms only produce one result. If `fromTransformResult` is not specified, we use `fromTransformResult: 0` by default.

See the tutorial of [data transform](../tutorial.md#Data%20Transform).
