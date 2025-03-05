# echarts-simple-option-player

This is a non-official library.

This is a simple option player for Apache ECharts 5.

This is a simple tool to manipulate several echarts options to play forward or backward or jump between each other and perform transition animation. [setOption](https://echarts.apache.org/en/api.html#echartsInstance.setOption) will be called internally in this tool when demanded to change option, where the `transition` parameter of [setOption](https://echarts.apache.org/en/api.html#echartsInstance.setOption) will be made based on the setting of `dataMeta` below.


## Usage

```js
const myChart = echarts.init(dom);

// Firstly, Initialize with an array of echarts option info:

const player = ecSimpleOptionPlayer.create({

    /**
     * Mandatory.
     *
     * `chart` can be the echarts instance
     * or chart instance getter function.
     */
    chart: function () {
        return myChart;
    },

    /**
     * Optional.
     *
     * By default `0`.
     */
    seriesIndex: 0,

    /**
     * Optional.
     *
     * If some component type are declared here,
     * when changing option, those types of components will be updated
     * follow the REPLACE_MERGE rule.
     * That is, all of the old components will be replaced by the new one
     * (except those mapped by the same id).
     * If not specified, when option changed, component will follow the
     * NORMAL_MERGE rule, where none of the existing components will be removed
     * but only merged by new ones.
     *
     * See https://echarts.apache.org/en/api.html#echartsInstance.setOption
     * for more details of REPLACE_MERGE and NORMAL_MERGE rule.
     */
    replaceMerge: ['xAxis', 'yAxis']

    /**
     * Mandatory.
     *
     * The data meta info used to determine how to make transition parameter when
     * calling `myChart.setOption` internally.
     *
     * See the example below:
     * `'aaa'`, `'bbb'` are "dataMetaKey", named by user,
     * and can be referenced in `optionList` for each `option`.
     *
     * The rule is:
     *     The field `dimensions` defines a list of dimension names.
     *     The field `uniqueDimension` uniqueDimension a single dimension name.
     *     If the `option_A` is about to switch to the `option_B`,
     *     suppose `option_A` reference `dataMeta` `aaa` and `option_B` reference `dataMeta` `bbb`,
     *     if `aaa.uniqueDimension` in `bbb.dimensions` or `bbb.uniqueDimension` in `aaa.dimensions`,
     *     we can make transition animation (combine and separate effect).
     */
    dataMeta: {
        aaa: {
            dimensions: ['qqq', 'www', 'eee', 'rrr']
        },
        bbb: {
            dimensions: ['ccc', 'www', 'eee'],
            uniqueDimension: 'www',
            // Can be 'duplicate' or 'split'
            dividingMethod: 'duplicate'
        },
        ...
    },

    /**
     * echarts option collection:
     */
    optionList: [
        // dataMetaKey is the key of 'dataMeta'.
        { key: 'Time_Income_Bar', option: option0, dataMetaKey: 'aaa' },
        { key: 'Population_Income_Scatter', option: option1, dataMetaKey: 'bbb' },
        { key: 'Time_Income_Pie', option: option2, dataMetaKey: 'aaa' },
        ...
    ]
});


// Then start to play:

// Display next option (from the first option).
player.next();
// Display previous option.
player.previous();
// Display the specified option.
player.go('Time_Income_Pie');
// return `['Time_Income_Bar', 'Population_Income_Scatter', 'Time_Income_Pie']`
player.getOptionKeys();
```


Also see this [example](https://echarts.apache.org/examples/en/editor.html?c=custom-combine-separate-morph).


