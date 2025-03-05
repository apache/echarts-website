# echarts-simple-transform

This is a non-official library.

There are some simple data transformers for Apache ECharts 5 in this library. Some of them might be migrated as ECharts built-in transforms in future.


## Aggregate Transform
```js
echarts.registerTransform(ecSimpleTransform.aggregate);

const option = {
    dataset: [{
        source: [
            ['aa', 'bb', 'cc', 'tag'],
            [12, 0.33, 5200, 'AA'],
            [21, 0.65, 7100, 'AA'],
            [51, 0.15, 1100, 'BB'],
            [71, 0.75, 9100, 'BB'],
            ...
        ]
    }, {
        transform: {
            type: 'ecSimpleTransform:aggregate',
            config: {
                resultDimensions: [
                    // by default, use the same name with `from`.
                    { from: 'aa', method: 'sum' },
                    { from: 'bb', method: 'count' },
                    { from: 'cc' }, // method by default: use the first value.
                    { from: 'dd', method: 'Q1' },
                    { from: 'tag' }
                ],
                groupBy: 'tag'
            }
        }
        // Then the result data will be:
        // [
        //     ['aa', 'bb', 'cc', 'tag'],
        //     [12, 0.33, 5200, 'AA'],
        //     [21, 0.65, 8100, 'BB'],
        //     ...
        // ]
    }],
    // ...
};

const myChart = echarts.init(dom);
myChart.setOption(option);
```


Current supported `method`s (case insensitive):
+ 'sum'
+ 'count'
+ 'first'
+ 'average'
+ 'Q1'
+ 'Q2' or 'median'
+ 'Q3'
+ 'min'
+ 'max'

Also see this [example](https://echarts.apache.org/examples/en/editor.html?c=data-transform-aggregate).


## Id Transform

```js
echarts.registerTransform(ecSimpleTransform.aggregate);

const option = {
    dataset: [{
        source: [
            ['aa', 'bb', 'cc', 'tag'],
            [12, 0.33, 5200, 'AA'],
            [21, 0.65, 8100, 'AA'],
            ...
        ]
    }, {
        transform: {
            type: 'ecSimpleTransform:id',
            config: {
                dimensionIndex: 4,
                dimensionName: 'ID'
            }
        }
        // Then the result data will be:
        // [
        //     ['aa', 'bb', 'cc', 'tag', 'ID'],
        //     [12, 0.33, 5200, 'AA', 0],
        //     [21, 0.65, 8100, 'BB', 1],
        //     ...
        // ]
    }],
    // ...
};

const myChart = echarts.init(dom);
myChart.setOption(option);
```
