# graph modularity extension for [Apache ECharts (incubating)](https://github.com/apache/incubator-echarts)

Graph modularity extension will do community detection and partition a graph's vertices in several subsets. Each subset will be assigned a different color.

![](./example/modularity.png)

## Install

```html
<script src="echarts.min.js"></script>
<script src="echarts-graph-modularity.min.js"></script>
```

Or

```shell
npm install echarts-graph-modularity
```

```js
import * as echarts from 'echarts';
import 'echarts-graph-modularity';
```

NOTE:

V2.x is for ECharts 5.x

## Usage

```js
setOption({

    ...

    series: [{
        type: 'graph',
        layout: 'force',
        // Set modularity property true and extension will automatically detect different communities
        // and assign each different color.
        modularity: true

        // Specify resolution. Higher resolution will produce less communities
        modularity: {
            resolution: 5,
            // If sort the communities
            sort: false
        }

        ...
    }]
})
```
