# option-gl.mapbox3D

## style
- **Type**: `string|Object`

Mapbox 地图样式。同 [https://www.mapbox.com/mapbox-gl-js/style-spec/](https://www.mapbox.com/mapbox-gl-js/style-spec/)

## center
- **Type**: `Array`

Mapbox 地图中心经纬度。经纬度用数组表示，例如：

```
mapbox3D: {
    center: [104.114129, 37.550339],
    zoom: 3
}
```

## zoom
- **Type**: `number`

Mapbox 地图的缩放等级。见 [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-zoom)

## bearing
- **Type**: `number`
- **Default**: `0`

Mapbox 地图的旋转角度。见 [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-bearing)

## pitch
- **Type**: `number`
- **Default**: `0`

视角俯视的倾斜角度。默认为`0`，也就是垂直于地图表面。最大的值是`60`。见 [https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch](https://www.mapbox.com/mapbox-gl-js/style-spec/#root-pitch)

## altitudeScale
- **Type**: `number`
- **Default**: `1`

海拔的缩放。

## shading
- **Type**: `string`

mapbox3D中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：

*   `'color'` 只显示颜色，不受光照等其它因素的影响。
    
*   `'lambert'` 通过经典的 [lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) 着色表现光照带来的明暗。
    
*   `'realistic'` 真实感渲染，配合 [light.ambientCubemap](option-gl.globe.md#light.ambientCubemap) 和 [postEffect](option-gl.globe.md#postEffect) 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了[基于物理的渲染（PBR）](https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/) 来表现真实感材质。

## realisticMaterial
- **Type**: `Object`

真实感材质相关的配置项，在 [shading](option-gl.mapbox3D.md#shading) 为`'realistic'`时有效。

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

跟 [roughness](option-gl.mapbox3D.md#realisticMaterial.roughness) 一样 你可以直接将 `metalness` 设置为金属度贴图。

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

lambert 材质相关的配置项，在 [shading](option-gl.mapbox3D.md#shading) 为`'lambert'`时有效。

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

color 材质相关的配置项，在 [shading](option-gl.mapbox3D.md#shading) 为`'color'`时有效。

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

## light
- **Type**: `Object`

光照相关的设置。在 [shading](option-gl.mapbox3D.md#shading) 为 `'color'` 的时候无效。

光照的设置会影响到组件以及组件所在坐标系上的所有图表。

合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。

### light.main
- **Type**: `Object`

场景主光源的设置，在 [globe](option-gl.globe.md) 组件中就是太阳光。

#### light.main.color
- **Type**: `string`
- **Default**: `#fff`

主光源的颜色。

#### light.main.intensity
- **Type**: `number`
- **Default**: `1`

主光源的强度。

#### light.main.shadow
- **Type**: `boolean`
- **Default**: `false`

主光源是否投射阴影。默认为关闭。

开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。

下图是开启阴影以及关闭阴影的区别。

![](../../documents/asset/gl/img/geo-shadow.png "Shadow") ![](../../documents/asset/gl/img/geo-no-shadow.png "No Shadow")

#### light.main.shadowQuality
- **Type**: `string`
- **Default**: `'medium'`

阴影的质量。可选`'low'`, `'medium'`, `'high'`, `'ultra'`

下图是低质量和高质量阴影的区别。

![](../../documents/asset/gl/img/geo-shadow-low.png "Low") ![](../../documents/asset/gl/img/geo-shadow-high.png "High")

#### light.main.alpha
- **Type**: `number`
- **Default**: `40`

主光源绕 x 轴，即上下旋转的角度。配合 [beta](option-gl.mapbox3D.md#light.main.beta) 控制光源的方向。

如下示意图：

![](../../documents/asset/gl/img/light-alpha-beta.png)

[globe](option-gl.globe.md) 组件中可以通过 [time](option-gl.globe.md#light.main.time) 控制日光的时间。

#### light.main.beta
- **Type**: `number`
- **Default**: `40`

主光源绕 y 轴，即左右旋转的角度。

### light.ambient
- **Type**: `Object`

全局的环境光设置。

#### light.ambient.color
- **Type**: `string`
- **Default**: `#fff`

环境光的颜色。

#### light.ambient.intensity
- **Type**: `number`
- **Default**: `0.2`

环境光的强度。

### light.ambientCubemap
- **Type**: `Object`

ambientCubemap 会使用纹理作为环境光的光源，会为物体提供漫反射和高光反射。可以通过 [diffuseIntensity](option-gl.mapbox3D.md#light.ambientCubemap.diffuseIntensity) 和 [specularIntensity](option-gl.mapbox3D.md#light.ambientCubemap.specularIntensity) 分别设置漫反射强度和高光反射强度。

#### light.ambientCubemap.texture
- **Type**: `string`

环境光贴图的 url，支持使用`.hdr`格式的 HDR 图片。可以从 [http://www.hdrlabs.com/sibl/archive.html](http://www.hdrlabs.com/sibl/archive.html) 等网站获取 `.hdr` 的资源。

例如：

```
ambientCubemap: {
    texture: 'pisa.hdr',
    // 解析 hdr 时使用的曝光值
    exposure: 1.0
}
```

#### light.ambientCubemap.diffuseIntensity
- **Type**: `number`
- **Default**: `0.5`

漫反射的强度。

#### light.ambientCubemap.specularIntensity
- **Type**: `number`
- **Default**: `0.5`

高光反射的强度。

## postEffect
- **Type**: `Object`

后处理特效的相关配置。后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。

下面分别是关闭和开启 `postEffect` 的区别。

![](../../documents/asset/gl/img/globe-posteffect-disable.png "Disable") ![](../../documents/asset/gl/img/globe-posteffect-enable.png "Enable")

注意在开启 postEffect 的时候默认会开启 [temporalSuperSampling](option-gl.mapbox3D.md#temporalSuperSampling) 在画面静止后持续对画面增强，包括抗锯齿、景深、SSAO、阴影等。

### postEffect.enable
- **Type**: `boolean`
- **Default**: `false`

是否开启后处理特效。默认关闭。

### postEffect.bloom
- **Type**: `Object`

高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现`0 - 255`范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现。如下图：

![](../../documents/asset/gl/img/globe-posteffect-bloom.png)

#### postEffect.bloom.enable
- **Type**: `boolean`
- **Default**: `false`

是否开启光晕特效。

#### postEffect.bloom.bloomIntensity
- **Type**: `number`
- **Default**: `0.1`

光晕的强度，默认为 0.1

### postEffect.depthOfField
- **Type**: `Object`

景深效果。景深效果是模拟摄像机的光学成像效果，在对焦的区域相对清晰，离对焦的区域越远则会逐渐模糊。

景深效果可以让观察者集中注意力到对焦的区域，而且让画面的镜头感更强，大景深还能塑造出微距的模型效果。

下面分别是关闭和开启景深的区别。

![](../../documents/asset/gl/img/geo-no-dof.png "Disable") ![](../../documents/asset/gl/img/geo-dof.png "Enable")

#### postEffect.depthOfField.enable
- **Type**: `boolean`
- **Default**: `false`

是否开启景深。

#### postEffect.depthOfField.focalDistance
- **Type**: `boolean`
- **Default**: `50`

初始的焦距，用户可以点击区域自动聚焦。

#### postEffect.depthOfField.focalRange
- **Type**: `boolean`
- **Default**: `20`

完全聚焦的区域范围，在此范围内的物体时完全清晰的，不会有模糊

#### postEffect.depthOfField.fstop
- **Type**: `number`
- **Default**: `2.8`

镜头的[F值](https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)，值越小景深越浅。

#### postEffect.depthOfField.blurRadius
- **Type**: `number`
- **Default**: `10`

焦外的模糊半径

不同模糊半径的区别：

![](../../documents/asset/gl/img/geo-dof-small.png "blurSize: 3") ![](../../documents/asset/gl/img/geo-dof-large.png "blurSize: 10")

### postEffect.screenSpaceAmbientOcclusion
- **Type**: `Object`

屏幕空间的环境光遮蔽效果。环境光遮蔽效果可以让拐角处、洞、缝隙等大部分光无法到达的区域变暗，是传统的阴影贴图的补充，可以让整个场景更加自然，有层次。

下面是无 SSAO 和有 SSAO 的效果对比：

![](../../documents/asset/gl/img/geo-no-ssao.png "No SSAO") ![](../../documents/asset/gl/img/geo-ssao.png "SSAO")

### postEffect.SSAO
- **Type**: `Object`

同 [screenSpaceAmbientOcclusion](option-gl.mapbox3D.md#postEffect.screenSpaceAmbientOcclusion)

#### postEffect.SSAO.enable
- **Type**: `boolean`
- **Default**: `false`

是否开启环境光遮蔽。默认不开启。

#### postEffect.SSAO.quality
- **Type**: `string`
- **Default**: `'medium'`

环境光遮蔽的质量。支持`'low'`, `'medium'`, `'high'`, `'ultra'`。

#### postEffect.SSAO.radius
- **Type**: `number`
- **Default**: `2`

环境光遮蔽的采样半径。半径越大效果越自然，但是需要设置较高的`'quality'`。

下面是半径值较小与较大之间的区别：

![](../../documents/asset/gl/img/geo-ssao-small-radius.png "Radius: 1") ![](../../documents/asset/gl/img/geo-ssao-large-radius.png "Radius: 10")

#### postEffect.SSAO.intensity
- **Type**: `number`
- **Default**: `1`

环境光遮蔽的强度。值越大颜色越深。

### postEffect.colorCorrection
- **Type**: `Object`

颜色纠正和调整。类似 Photoshop 中的 Color Adjustments。

下图同个场景调整为冷色系和暖色系的区别。

![](../../documents/asset/gl/img/buildings-cold.jpg "Cold") ![](../../documents/asset/gl/img/buildings-warm.jpg "Warm")

#### postEffect.colorCorrection.enable
- **Type**: `boolean`
- **Default**: `true`

是否开启颜色纠正。

#### postEffect.colorCorrection.lookupTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

颜色查找表，推荐使用。

颜色查找表是一张像下面这样的纹理图片。

![](../../documents/asset/gl/img/lookup.png)

这张是基础的查找表图片，你可以直接拿来使用，为了方便将场景色调调整你想要的效果，你可以将场景截图后在 Photoshop 等图像处理软件中调整颜色到想要的效果，然后将相同的调整应用到上面这张查找表的图片上。

比如调成冷色调后，查找表的纹理图片就会成为下面这样：

![](../../documents/asset/gl/img/crispwinter.png)

然后那这张纹理图片就作为该配置项的值，就可以得到相同的在 Photoshop 里调整好的效果了。

当然如果你只是想得到一张截图，完全可以不这样操作，但是如果你想在可以实时交互的作品中能方便的调整到理想的色调，这个就非常有用了。

#### postEffect.colorCorrection.exposure
- **Type**: `number`
- **Default**: `0`

画面的曝光。

#### postEffect.colorCorrection.brightness
- **Type**: `number`
- **Default**: `0`

画面的亮度。

#### postEffect.colorCorrection.contrast
- **Type**: `number`
- **Default**: `1`

画面的对比度。

#### postEffect.colorCorrection.saturation
- **Type**: `number`
- **Default**: `1`

画面的饱和度。

### postEffect.FXAA
- **Type**: `Object`

在开启 [postEffect](option-gl.mapbox3D.md#postEffect) 后，WebGL 默认的 MSAA (Multi Sampling Anti Aliasing) 会无法使用。这时候通过 FXAA (Fast Approximate Anti-Aliasing) 可以廉价方便的解决抗锯齿的问题，FXAA 会对一些场景的边缘部分进行模糊从而解决锯齿的问题，这在一些场景上效果还不错，但是在 echarts-gl 中，需要保证很多文字和线条边缘的锐利清晰，因此 FXAA 并不是那么适用。这时候我们可以通过设置更高的`devicePixelRatio`来使用超采样，如下所示：

```
var chart = echarts.init(dom, null, {
    devicePixelRatio: 2
})
```

但是设置更高的`devicePixelRatio` 对电脑性能有很高的要求，所以更多时候我们建议使用 echarts-gl 中的 [temporalSuperSampling](option-gl.mapbox3D.md#temporalSuperSampling)，在画面静止后会持续分帧对一个像素多次抖动采样，从而达到超采样抗锯齿的效果。

#### postEffect.FXAA.enable
- **Type**: `boolean`
- **Default**: `false`

是否开启 FXAA。默认为不开启。

## temporalSuperSampling
- **Type**: `Object`

分帧超采样。在开启 [postEffect](option-gl.mapbox3D.md#postEffect) 后，WebGL 默认的 MSAA 会无法使用，所以我们需要自己解决锯齿的问题。

分帧超采样是用来解决锯齿问题的方法，它在画面静止后会持续分帧对一个像素多次抖动采样，从而达到抗锯齿的效果。而且在这个分帧采样的过程中，echarts-gl 也会对 [postEffect](option-gl.mapbox3D.md#postEffect) 中一些需要采样保证效果的特效，例如 [SSAO](option-gl.mapbox3D.md#postEffect.SSAO), [景深](option-gl.mapbox3D.md#postEffect.depthOfField)，以及阴影进行渐进增强。

下面是未开启和开启`temporalSuperSampling`的区别。

![](../../documents/asset/gl/img/surface-no-taa.png "No AA") ![](../../documents/asset/gl/img/surface-taa.png "AA")

### temporalSuperSampling.enable
- **Type**: `boolean`
- **Default**: `'auto'`

是否开启分帧超采样。默认在开启 [postEffect](option-gl.mapbox3D.md#postEffect) 后也会同步开启。
