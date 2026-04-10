# option-gl.xAxis3D

## show
- **Type**: `boolean`

是否显示 x 轴。

## name
- **Type**: `string`
- **Default**: `'X'`

坐标轴名称。

## grid3DIndex
- **Type**: `number`
- **Default**: `0`

坐标轴使用的 [grid3D](option-gl.grid3D.md) 组件的索引。默认使用第一个 [grid3D](option-gl.grid3D.md) 组件。

## nameTextStyle
- **Type**: `Object`

坐标轴名称的文字样式。

### nameTextStyle.color
- **Type**: `Color`

坐标轴名称的颜色，默认取 [axisLine.lineStyle.color](option-gl.xAxis3D.md#axisLine.lineStyle.color)。

### nameTextStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字的描边宽度。

### nameTextStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

### nameTextStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

### nameTextStyle.fontSize
- **Type**: `number`
- **Default**: `16`

文字的字体大小。

### nameTextStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## nameGap
- **Type**: `number`
- **Default**: `20`

坐标轴名称与轴线之间的距离，注意是三维空间的距离而非屏幕像素值。

## type
- **Type**: `string`
- **Default**: `value`

坐标轴类型。

可选：

*   `'value'` 数值轴，适用于连续数据。
    
*   `'category'` 类目轴，适用于离散的类目数据，为该类型时必须通过 [data](option-gl.xAxis3D.md#data) 设置类目数据。
    
*   `'time'` 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月、星期、日、小时范围的刻度。
    
*   `'log'` 对数轴，适用于对数数据。

## min
- **Type**: `number|string`

坐标轴刻度最小值。

可以设置成特殊值 `'dataMin'`，此时取数据在该轴上的最小值作为最小刻度。

不设置时会自动计算最小值保证坐标轴刻度的均匀分布。

在类目轴中，也可以设置为类目的序数（如类目轴 `data: ['类A', '类B', '类C']` 中，序数 `2` 表示 `'类C'`。也可以设置为负数，如 `-3`）。

## max
- **Type**: `number|string`

坐标轴刻度最大值。

可以设置成特殊值 `'dataMax'`，此时取数据在该轴上的最大值作为最大刻度。

如果不设置，则会自动计算最大值来保证坐标轴刻度的均匀分布。

在类目轴中，也可以设置为类目的序数（如类目轴 `data: ['类A', '类B', '类C']` 中，序数 `2` 表示 `'类C'`。也可以设置为负数，如 `-3`）。

## scale
- **Type**: `boolean`
- **Default**: `false`

只在数值轴中（[type](option-gl.xAxis3D.md#type): 'value'）有效。

是否是脱离 0 值比例。设置成 `true` 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。

在设置 [min](option-gl.xAxis3D.md#min) 和 [max](option-gl.xAxis3D.md#max) 之后该配置项无效。

## splitNumber
- **Type**: `number`
- **Default**: `5`

坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。

在类目轴中无效。

## minInterval
- **Type**: `number`
- **Default**: `0`

自动计算的坐标轴最小间隔大小。

例如可以设置成`1`保证坐标轴分割刻度显示成整数。

```
{
    minInterval: 1
}
```

只在数值轴中（[type](option-gl.xAxis3D.md#type): 'value'）有效。

## interval
- **Type**: `number`

强制设置坐标轴分割间隔。

因为 [splitNumber](option-gl.xAxis3D.md#splitNumber) 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 [min](option-gl.xAxis3D.md#min)、[max](option-gl.xAxis3D.md#max) 强制设定刻度划分，一般不建议使用。

无法在类目轴中使用。在时间轴（[type](option-gl.xAxis3D.md#type): 'time'）中需要传时间戳，在对数轴（[type](option-gl.xAxis3D.md#type): 'log'）中需要传指数值。

## logBase
- **Type**: `number`
- **Default**: `10`

对数轴的底数，只在对数轴中（[type](option-gl.xAxis3D.md#type): 'log'）有效。

## data
- **Type**: `Array`

类目数据，在类目轴（[type](option-gl.xAxis3D.md#type): 'category'）中有效。

如果设置了 [type](option-gl.xAxis3D.md#type) 是 `'category'`，但没有设置 `axis.data`，则 `axis.data` 的内容会自动从 [series.data](../option-gl.md#series.data) 中获取，这会比较方便。不过注意，`axis.data` 指明的是 `'category'` 轴的取值范围。如果不指定而是从 [series.data](../option-gl.md#series.data) 中获取，那么只能获取到 [series.data](../option-gl.md#series.data) 中出现的值。比如说，假如 [series.data](../option-gl.md#series.data) 为空时，就什么也获取不到。

示例：

```
// 所有类目名称列表
data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
// 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
data: [{
    value: '周一',
    // 突出周一
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, '周二', '周三', '周四', '周五', '周六', '周日']
```

### data.value
- **Type**: `string`

单个类目名称。

### data.textStyle
- **Type**: `Object`

类目标签的文字样式。

#### data.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

文字的颜色。

#### data.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字的描边宽度。

#### data.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

#### data.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

#### data.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### data.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## axisLine
- **Type**: `Object`

坐标轴轴线相关设置。

### axisLine.show
- **Type**: `boolean`
- **Default**: `true`

是否显示坐标轴轴线。

### axisLine.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴刻度标签的显示间隔，在类目轴中有效。

默认会自动计算`interval`以保证较好的展示效果。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示『隔两个标签显示一个标签』，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

#### axisLine.lineStyle.color
- **Type**: `string`
- **Default**: `'#333'`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### axisLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### axisLine.lineStyle.width
- **Type**: `number`
- **Default**: `2`

线条的宽度。

## axisLabel
- **Type**: `Object`

坐标轴刻度标签的相关设置。

### axisLabel.show
- **Type**: `boolean`
- **Default**: `true`

是否显示刻度标签。

### axisLabel.margin
- **Type**: `number`
- **Default**: `8`

刻度标签与轴线之间的距离。

**注意：** 这个距离是三维空间而非屏幕空间的。

### axisLabel.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴刻度标签的显示间隔，在类目轴中有效。

默认会自动计算`interval`以保证较好的展示效果。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示『隔两个标签显示一个标签』，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

#### axisLabel.textStyle.color
- **Type**: `Color|Function`

刻度标签文字的颜色，默认取 [axisLine.lineStyle.color](../option-gl.md#.axisLine.lineStyle.color)。支持回调函数，格式如下

```
(val: string) => Color
```

参数是标签的文本，返回颜色值，如下示例：

```
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```

#### axisLabel.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字的描边宽度。

#### axisLabel.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

#### axisLabel.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

#### axisLabel.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### axisLabel.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## axisTick
- **Type**: `Object`

坐标轴刻度相关设置。

### axisTick.show
- **Type**: `boolean`
- **Default**: `true`

是否显示坐标轴刻度。

### axisTick.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴刻度标签的显示间隔，在类目轴中有效。默认同 [axisLabel.interval](../option-gl.md#.axisLabel.interval) 一样。

默认会自动计算`interval`以保证较好的展示效果。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示『隔两个标签显示一个标签』，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

### axisTick.length
- **Type**: `number`
- **Default**: `5`

坐标轴刻度的长度。

#### axisTick.lineStyle.color
- **Type**: `Color`

刻度线的颜色，默认取 [axisLine.lineStyle.color](../option-gl.md#.axisLine.lineStyle.color)。

#### axisTick.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### axisTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线条的宽度。

## splitLine
- **Type**: `Object`

坐标轴轴线相关设置。

### splitLine.show
- **Type**: `boolean`
- **Default**: `true`

是否显示坐标轴轴线。

### splitLine.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴刻度标签的显示间隔，在类目轴中有效。

默认会自动计算`interval`以保证较好的展示效果。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示『隔两个标签显示一个标签』，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

#### splitLine.lineStyle.color
- **Type**: `string`
- **Default**: `'#333'`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### splitLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### splitLine.lineStyle.width
- **Type**: `number`
- **Default**: `2`

线条的宽度。

## splitArea
- **Type**: `Object`

坐标轴在 [grid3D](option-gl.grid3D.md) 的平面上的分隔区域。

### splitArea.show
- **Type**: `boolean`
- **Default**: `false`

是否显示分隔区域。

### splitArea.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

坐标轴分隔区域的显示间隔，在类目轴中有效。默认同 [axisLabel.interval](../option-gl.md#.axisLabel.interval) 一样。

默认会自动计算`interval`以保证较好的展示效果。

可以设置成 0 强制显示所有标签。

如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示『隔两个标签显示一个标签』，以此类推。

可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：

```
(index:number, value: string) => boolean
```

第一个参数是类目的 index，第二个值是类目名称，如果跳过则返回 `false`。

### splitArea.areaStyle
- **Type**: `Object`

分隔区域的样式设置。

#### splitArea.areaStyle.color
- **Type**: `Array`
- **Default**: `['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']`

分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。

## axisPointer
- **Type**: `Object`

坐标轴指示线。

### axisPointer.show
- **Type**: `boolean`
- **Default**: `true`

是否显示坐标轴指示线。

#### axisPointer.lineStyle.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.8)'`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### axisPointer.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### axisPointer.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线条的宽度。

### axisPointer.label
- **Type**: `Object`

指示线标签。

#### axisPointer.label.show
- **Type**: `boolean`
- **Default**: `true`

是否显示指示线标签。默认数值轴显示，类目轴不显示。

#### axisPointer.label.formatter
- **Type**: `Function`

标签格式器，函数第一个参数是当前坐标轴的数值，第二个参数是所有坐标轴的数值数组。

```
(value: number, valueAll: Array) => string
```

#### axisPointer.label.margin
- **Type**: `number`

标签距离坐标轴的距离。同刻度标签一样，这个距离是三维空间而非屏幕像素。

##### axisPointer.label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

文字的颜色。

##### axisPointer.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

文字的描边宽度。

##### axisPointer.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

文字的描边颜色。

##### axisPointer.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

##### axisPointer.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `16`

文字的字体大小。

##### axisPointer.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

文字字体的粗细。

**可选：**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...
