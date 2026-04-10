# option-gl.series-surface

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

## parametric
- **Type**: `boolean`
- **Default**: `false`

是否为参数曲面。

## wireframe
- **Type**: `Object`

曲面图的网格线。

### wireframe.show
- **Type**: `boolean`
- **Default**: `true`

是否显示网格线。默认显示。

### wireframe.lineStyle
- **Type**: `Object`

网格线的样式。

#### wireframe.lineStyle.color
- **Type**: `string`
- **Default**: `#222`

线条的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### wireframe.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

线条的不透明度。

#### wireframe.lineStyle.width
- **Type**: `number`
- **Default**: `1`

线条的宽度。

## equation
- **Type**: `Object`

曲面的函数表达式。如果需要展示的是函数曲面，可以不设置 [data](option-gl.series-surface.md#data)，通过 [equation](option-gl.series-surface.md#equation) 去声明函数表达式。例如通过下面这个函数可以模拟波纹效果。

```
equation: {
    x: {
        step: 0.1,
        min: -3,
        max: 3,
    },
    y: {
        step: 0.1,
        min: -3,
        max: 3,
    },
    z: function (x, y) {
        return Math.sin(x * x + y * y) * x / 3.14
    }
}
```

### equation.x
- **Type**: `Object`

自变量 x。

#### equation.x.step
- **Type**: `number`

x 的步长。

#### equation.x.min
- **Type**: `number`

x 的最小值。

#### equation.x.max
- **Type**: `number`

x 的最大值。

### equation.y
- **Type**: `Object`

自变量 y。

#### equation.y.step
- **Type**: `number`

y 的步长。

#### equation.y.min
- **Type**: `number`

y 的最小值。

#### equation.y.max
- **Type**: `number`

y 的最大值。

### equation.z
- **Type**: `Function`

因变量 z。

z 为关于 [x](option-gl.series-surface.md#equation.x), [y](option-gl.series-surface.md#equation.y) 的函数。

```
(x: number, y: number) => number
```

## parametricEquation
- **Type**: `Object`

曲面的[参数方程](https://zh.wikipedia.org/wiki/%E5%8F%83%E6%95%B8%E6%96%B9%E7%A8%8B)。在[data](option-gl.series-surface.md#data)没被设置的时候，可以通过 [parametricEquation](option-gl.series-surface.md#equation) 去声明参数参数方程。在 [parametric](option-gl.series-surface.md) 为`true`时有效。

参数方程是 [x](option-gl.series-surface.md#parametricEquation.x)、[y](option-gl.series-surface.md#parametricEquation.y)、 [z](option-gl.series-surface.md#parametricEquation.z) 关于参数 [u](option-gl.series-surface.md#parametricEquation.u)、[v](option-gl.series-surface.md#parametricEquation.v) 的方程。

下面的参数方程就是绘制前面图中类似一个金属零件的参数曲面的：

```
var aa = 0.4;
var r = 1 - aa * aa;
var w = sqrt(r);
...
parametricEquation: {
    u: {
        min: -13.2,
        max: 13.2,
        step: 0.5
    },
    v: {
        min: -37.4,
        max: 37.4,
        step: 0.5
    },
    x: function (u, v) {
        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
        return -u + (2 * r * cosh(aa * u) * sinh(aa * u) / denom);
    },
    y: function (u, v) {
        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
        return 2 * w * cosh(aa * u) * (-(w * cos(v) * cos(w * v)) - (sin(v) * sin(w * v))) / denom;
    },
    z: function (u, v) {
        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
        return  2 * w * cosh(aa * u) * (-(w * sin(v) * cos(w * v)) + (cos(v) * sin(w * v))) / denom
    }
}
```

### parametricEquation.u
- **Type**: `Object`

自变量 u。

#### parametricEquation.u.step
- **Type**: `number`

u 的步长。

#### parametricEquation.u.min
- **Type**: `number`

u 的最小值。

#### parametricEquation.u.max
- **Type**: `number`

u 的最大值。

### parametricEquation.v
- **Type**: `Object`

自变量 v。

#### parametricEquation.v.step
- **Type**: `number`

v 的步长。

#### parametricEquation.v.min
- **Type**: `number`

v 的最小值。

#### parametricEquation.v.max
- **Type**: `number`

v 的最大值。

### parametricEquation.x
- **Type**: `Function`

x 为关于 [u](option-gl.series-surface.md#equation.u), [v](option-gl.series-surface.md#equation.v) 的函数。

```
(u: number, v: number) => number
```

### parametricEquation.y
- **Type**: `Function`

x 为关于 [u](option-gl.series-surface.md#equation.u), [v](option-gl.series-surface.md#equation.v) 的函数。

```
(u: number, v: number) => number
```

### parametricEquation.z
- **Type**: `Function`

x 为关于 [u](option-gl.series-surface.md#equation.u), [v](option-gl.series-surface.md#equation.v) 的函数。

```
(u: number, v: number) => number
```

## itemStyle
- **Type**: `Object`

曲面的颜色、不透明度等样式。

### itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

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

## data
- **Type**: `Array`

曲面图的数据数组。

数据是线性存储的数组，包含`X 顶点数`x`Y 顶点数`个数据。一个 5 x 5 的曲面共有 25 个顶点，数据在数组中的索引如下

![](../../documents/asset/gl/img/surface-index.png)

上图使用的数据：

```
data: [
    [-1,-1,0],[-0.5,-1,0],[0,-1,0],[0.5,-1,0],[1,-1,0],
    [-1,-0.5,0],[-0.5,-0.5,1],[0,-0.5,0],[0.5,-0.5,-1],[1,-0.5,0],
    [-1,0,0],[-0.5,0,0],[0,0,0],[0.5,0,0],[1,0,0],
    [-1,0.5,0],[-0.5,0.5,-1],[0,0.5,0],[0.5,0.5,1],[1,0.5,0],
    [-1,1,0],[-0.5,1,0],[0,1,0],[0.5,1,0],[1,1,0]
]
```

每一项分别为 `x`, `y`, `z`。

对于参数方程来说，每一项需要存储五个数据，分别是 `x`, `y`, `z` 和参数 `u`, `v`。而数据的索引按照`u`, `v` 的顺序。例如下面的数据：

```
data: [
    // v 为 0，u 从 -3.14 到 3.13
    [0,0,1,-3.14,0],[0,0,1,-1.57,0],[0,0,1,0,0],[0,0,1,1.57,0],[0,0,1,3.14,0],
    // v 为 1.57，u 从 -3.14 到 3.13
    [0,-1,0,-3.14,1.57],[-1,0,0,-1.57,1.57],[0,1,0,0,1.57],[1,0,0,1.57,1.57],[0,-1,0,3.14,1.57],
    // v 为 3.14，u 从 -3.14 到 3.13
    [0,0,-1,-3.14,3.14],[0,0,-1,-1.57,3.14],[0,0,-1,0,3.14],[0,0,-1,1.57,3.14],[0,0,-1,3.14,3.14]]
]
```

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

### data.itemStyle
- **Type**: `Object`

单个数据项的样式设置。

#### data.itemStyle.color
- **Type**: `string`
- **Default**: `自适应`

图形的颜色。

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。

#### data.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形的不透明度。

## shading
- **Type**: `string`

曲面图中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：

*   `'color'` 只显示颜色，不受光照等其它因素的影响。
    
*   `'lambert'` 通过经典的 [lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) 着色表现光照带来的明暗。
    
*   `'realistic'` 真实感渲染，配合 [light.ambientCubemap](option-gl.globe.md#light.ambientCubemap) 和 [postEffect](option-gl.globe.md#postEffect) 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了[基于物理的渲染（PBR）](https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/) 来表现真实感材质。

## realisticMaterial
- **Type**: `Object`

真实感材质相关的配置项，在 [shading](option-gl.series-surface.md#shading) 为`'realistic'`时有效。

### realisticMaterial.detailTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的纹理贴图。

### realisticMaterial.textureTiling
- **Type**: `number`
- **Default**: `1`

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

### realisticMaterial.textureOffset
- **Type**: `number`
- **Default**: `0`

材质细节纹理的位移。

### realisticMaterial.roughness
- **Type**: `number|string|HTMLImageElement|HTMLCanvasElement`
- **Default**: `0.5`

`roughness`属性用于表示材质的粗糙度，`0`为完全光滑，`1`完全粗糙，中间的值则是介于这两者之间。

下图是 [globe](option-gl.globe.md) 中`roughness`分别是`0.2`（光滑）与`0.8`（粗糙）的效果。

![](../../documents/asset/gl/img/globe-gloss.png) ![](../../documents/asset/gl/img/globe-rough.png)

当你想要表达更复杂的材质时。你可以直接将 `roughness` 设置为如下用每个像素存储粗糙度的贴图。

![](../../documents/asset/gl/img/roughness.png)

贴图中颜色越白的地方值越大，就越粗糙。你可以从 [http://freepbr.com/](http://freepbr.com/) 等资源网站获取不同材质的贴图资源，也可以使用其他工具自己生成。

### realisticMaterial.metalness
- **Type**: `number|string|HTMLImageElement|HTMLCanvasElement`
- **Default**: `0`

`metalness`属性用于表示材质是金属还是非金属，`0`为非金属，`1`为金属，中间的值则是介于这两者之间。通常设成`0`和`1`就能满足大部分场景了。

下图是 [globe](option-gl.globe.md) 中`metalness`分别设成`1`与`0`的效果区别。

![](../../documents/asset/gl/img/globe-metal.png) ![](../../documents/asset/gl/img/globe-non-metal.png)

跟 [roughness](option-gl.series-surface.md#realisticMaterial.roughness) 一样 你可以直接将 `metalness` 设置为金属度贴图。

### realisticMaterial.roughnessAdjust
- **Type**: `number`
- **Default**: `0.5`

粗糙度调整，在使用粗糙度贴图的时候有用。可以对贴图整体的粗糙度进行调整。默认为 `0.5`，`0`的时候为完全光滑，`1`的时候为完全粗糙。

### realisticMaterial.metalnessAdjust
- **Type**: `number`
- **Default**: `0.5`

金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 `0.5`，`0`的时候为非金属，`1`的时候为金属。

### realisticMaterial.normalTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的法线贴图。

使用法线贴图可以在较少的顶点下依然表现出物体表面丰富的明暗细节。

## lambertMaterial
- **Type**: `Object`

lambert 材质相关的配置项，在 [shading](option-gl.series-surface.md#shading) 为`'lambert'`时有效。

### lambertMaterial.detailTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的纹理贴图。

### lambertMaterial.textureTiling
- **Type**: `number`
- **Default**: `1`

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

### lambertMaterial.textureOffset
- **Type**: `number`
- **Default**: `0`

材质细节纹理的位移。

## colorMaterial
- **Type**: `Object`

color 材质相关的配置项，在 [shading](option-gl.series-surface.md#shading) 为`'color'`时有效。

### colorMaterial.detailTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

材质细节的纹理贴图。

### colorMaterial.textureTiling
- **Type**: `number`
- **Default**: `1`

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

### colorMaterial.textureOffset
- **Type**: `number`
- **Default**: `0`

材质细节纹理的位移。

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
