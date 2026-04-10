# option-gl.series-line3D

## name
- **Type**: `string`

系列名称，用于 [tooltip](https://echarts.apache.org/zh/option.html#tooltip) 的显示，[legend](https://echarts.apache.org/zh/option.html#legend) 的图例筛选，在 `setOption` 更新数据和配置项时用于指定对应的系列。

## coordinateSystem
- **Type**: `string`
- **Default**: `cartesian3D`

该系列使用的坐标系，可选：

*   `'cartesian3D'`
    
    使用三维笛卡尔坐标系，通过 [grid3DIndex](../option-gl.md#series-.grid3DIndex) 指定相应的三维笛卡尔坐标系组件。

## grid3DIndex
- **Type**: `number`
- **Default**: `0`

使用的 [grid3D](option-gl.grid3D.md) 组件的索引。默认使用第一个 [grid3D](option-gl.grid3D.md) 组件。

## lineStyle
- **Type**: `Object`

线条样式。

### lineStyle.color
- **Type**: `string`
- **Default**: `自适应`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

### lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

### lineStyle.width
- **Type**: `number`
- **Default**: `2`

线条的宽度。

#### lineStyle.lineStyle.color
- **Type**: `string`
- **Default**: `自适应`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### lineStyle.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### lineStyle.lineStyle.width
- **Type**: `number`
- **Default**: `2`

线条的宽度。

## data
- **Type**: `Array`

数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：

```
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

数组中的每一项的前三个值分别是`x`, `y`, `z`。除了这三个值也可以添加其它值给 [visualMap](../option-gl.md#visualMap) 组件映射到颜色等其它图形属性。

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

### data.lineStyle
- **Type**: `Object`

单个数据项的样式设置。

#### data.lineStyle.color
- **Type**: `string`
- **Default**: `自适应`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### data.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### data.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线条的宽度。

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
