# option-gl.series-polygons3D

## multiPolygon
- **Type**: `boolean`
- **Default**: `true`

是否一个数据包含多个多边形。

## itemStyle
- **Type**: `Object`

图形样式，包括颜色、透明度、描边等。

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

## emphasis
- **Type**: `Object`

鼠标 hover 高亮时图形和标签的样式。

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

## data
- **Type**: `Object`

多边形的数据列表。

```
data: [{
    // A square
    coords: [[0, 0], [100, 0], [100, 100], [0, 100]],
    // Height
    height: 3
}, {
    // A triangle
    coords: [[50, 0], [100, 100], [0, 100]],
    // Height
    height: 5
}]
```

### data.coords
- **Type**: `Array`

多边形的坐标列表。如果 [multiPolygon](option-gl.series-polygons3D.md#multiPolygon) 设成 true，则是包含多个多边形的数组。

## progressiveThreshold
- **Type**: `number`
- **Default**: `1000`

启用渐进渲染的阈值，渐进渲染可以让你在加载画面的过程中不会有阻塞。

## progressive
- **Type**: `number`
- **Default**: `1000`

渐进渲染每次渲染的数据量。
