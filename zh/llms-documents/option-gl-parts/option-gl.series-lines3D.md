# option-gl.series-lines3D

## name
- **Type**: `string`

系列名称，用于 [tooltip](https://echarts.apache.org/zh/option.html#tooltip) 的显示，[legend](https://echarts.apache.org/zh/option.html#legend) 的图例筛选，在 `setOption` 更新数据和配置项时用于指定对应的系列。

## coordinateSystem
- **Type**: `string`

该系列使用的坐标系，可选：

*   `'geo3D'`
    
    使用三维地理坐标系，通过 [geo3DIndex](../option-gl.md#series-.geo3DIndex) 指定相应的三维地理坐标系组件
    

*   `'globe'`
    
    使用地球坐标系，通过 [globeIndex](../option-gl.md#series-.globeIndex) 指定相应的地球坐标系组件

## geo3DIndex
- **Type**: `number`
- **Default**: `0`

坐标轴使用的 [geo3D](option-gl.geo3D.md) 组件的索引。默认使用第一个 [geo3D](option-gl.geo3D.md) 组件。

## globeIndex
- **Type**: `number`
- **Default**: `0`

坐标轴使用的 [globe](option-gl.globe.md) 组件的索引。默认使用第一个 [globe](option-gl.globe.md) 组件。

## polyline
- **Type**: `boolean`
- **Default**: `false`

是否是多段线。

默认为 `false`，只能用于绘制只有两个端点的线段（表现为被赛尔曲线）。

如果该配置项为 `true`，则可以在 [data.coords](option-gl.series-lines3D.md#data.coords) 中设置多于 2 个的顶点用来绘制多段线，在绘制路线轨迹的时候比较有用。

## effect
- **Type**: `Object`

飞线的尾迹特效。

### effect.show
- **Type**: `boolean`
- **Default**: `false`

是否显示尾迹特效，默认不显示。

### effect.period
- **Type**: `number`
- **Default**: `4`

尾迹特效的周期。

### effect.constantSpeed
- **Type**: `number`

轨迹特效的移动动画是否是固定速度，单位按三维空间的尺寸，设置为非 null 的值后会忽略 [period](option-gl.series-lines3D.md#effect.period) 配置项。

### effect.trailWidth
- **Type**: `number`
- **Default**: `4`

尾迹的宽度。

### effect.trailLength
- **Type**: `number`
- **Default**: `0.1`

尾迹的长度，范围从 0 到 1，为线条长度的百分比。

### effect.trailColor
- **Type**: `string`

尾迹的颜色，默认跟线条颜色相同。

### effect.trailOpacity
- **Type**: `number`

尾迹的不透明度，默认跟线条不透明度相同。

## lineStyle
- **Type**: `Object`

飞线的线条样式。

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
- **Default**: `0.5`

线条的不透明度。

### lineStyle.width
- **Type**: `number`
- **Default**: `1`

线条的宽度。

## data
- **Type**: `Array`

三维飞线图的数据数组，通常数据的每一项可以是一个包含起点和终点的坐标集。在 [polyline](option-gl.series-lines3D.md#polyline) 设置为 `true` 时支持多于两个的坐标。 如下：

```
data: [
    [
        [120, 66, 1], // 起点的经纬度和海拔坐标
        [122, 67, 2]  // 终点的经纬度和海拔坐标
    ]
]
```

有些时候需要配置数据项的名字或者单独的样式。需要把经纬度坐标写到 coords 属性下。如下：

```
data: [
    {
        coords: [ [120, 66], [122, 67] ],
        // 数据值
        value: 10,
        // 数据名
        name: 'foo',
        // 线条样式
        lineStyle: {}
    }
]
```

### data.coords
- **Type**: `Array`

一个包含两个到多个经纬度坐标的数组。在 [polyline](option-gl.series-lines3D.md#polyline) 设置为 `true` 时支持多于两个的坐标。

### data.value
- **Type**: `Array|number`

数据值。

### data.lineStyle
- **Type**: `Object`

单个数据（单条线）的样式设置。

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

## blendMode
- **Type**: `string`
- **Default**: `'source-over'`

混合模式，目前支持`'source-over'`，`'lighter'`，默认使用的`'source-over'`是通过 alpha 混合，而`'lighter'`是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果。

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
