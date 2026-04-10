# api

## echarts
- **Type**: `Object`

全局 echarts 对象，在 script 标签引入 `echarts.js` 文件后获得，或者在 AMD 环境中通过 `require('echarts')` 获得。

## echartsInstance
- **Type**: `Object`

通过 [echarts.init](api-parts/api.echarts.md#init) 创建的实例。

## action
- **Type**: `*`

ECharts 中支持的图表行为，通过 [dispatchAction](api-parts/api.echartsInstance.md#dispatchAction) 触发。

**注：** 代码中的 `?:` 表示该属性是可选的。_EVENT:_ 是 action 对应触发的事件。

## events
- **Type**: `*`

在 ECharts 中主要通过 [on](api-parts/api.echartsInstance.md#on) 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。

ECharts 中的事件分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](api-parts/api.echartsInstance.md#dispatchAction) 后触发的事件。

**示例：**

```
myChart.on('click', function (params) {
    console.log(params);
});

myChart.on('legendselectchanged', function (params) {
    console.log(params);
});

chart.on('click', 'series.line', function (params) {
    console.log(params);
});

chart.on('mouseover', {seriesIndex: 1, name: 'xx'}, function (params) {
    console.log(params);
});
```

详细的事件注册方式参见 [on](api-parts/api.echartsInstance.md#on)。
