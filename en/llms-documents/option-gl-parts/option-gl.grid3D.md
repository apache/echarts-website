# option-gl.grid3D

## show
- **Type**: `boolean`

Whether to display a 3D cartesian coordinate system component.

## boxWidth
- **Type**: `number`
- **Default**: `100`

3D cartesian coordinate system width in a 3D scene. With [viewControl.distance](option-gl.grid3D.md#viewControl.distance) you can get the most appropriate display size.

## boxHeight
- **Type**: `number`
- **Default**: `100`

3D cartesian coordinate system height in a 3D scene.

## boxDepth
- **Type**: `number`
- **Default**: `100`

3D cartesian coordinate system depth in a 3D scene.

## axisLine
- **Type**: `Object`

Settings related to axis line.

### axisLine.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis line from showing.

### axisLine.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis.

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

#### axisLine.lineStyle.color
- **Type**: `string`
- **Default**: `'#333'`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### axisLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### axisLine.lineStyle.width
- **Type**: `number`
- **Default**: `2`

The width of the line.

## axisLabel
- **Type**: `Object`

Settings related to axis label.

### axisLabel.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis label from appearing.

### axisLabel.margin
- **Type**: `number`
- **Default**: `8`

The margin between the axis label and the axis line.

**Note：** This distance is three-dimensional space, not screen space.

### axisLabel.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis.

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

#### axisLabel.textStyle.color
- **Type**: `Color|Function`

Color of axis label is set to be [axisLine.lineStyle.color](../option-gl.md#.axisLine.lineStyle.color) by default. Callback function is supported, in the following format:

```
(val: string) => Color
```

Parameter is the text of label, and return value is the color. See the following example:

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

The border width of the text.

#### axisLabel.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

#### axisLabel.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

#### axisLabel.textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

The font size of the text.

#### axisLabel.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## axisTick
- **Type**: `Object`

Settings related to axis tick.

### axisTick.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis tick from showing.

### axisTick.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis. Defaults to the same as [axisLabel.interval](../option-gl.md#.axisLabel.interval).

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

### axisTick.length
- **Type**: `number`
- **Default**: `5`

The length of the axis tick.

#### axisTick.lineStyle.color
- **Type**: `Color`

Color of axis label is set to be [axisLine.lineStyle.color](../option-gl.md#.axisLine.lineStyle.color) by default.

#### axisTick.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### axisTick.lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

## splitLine
- **Type**: `Object`

Settings related to axis line.

### splitLine.show
- **Type**: `boolean`
- **Default**: `true`

Set this to be `false` to prevent the axis line from showing.

### splitLine.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

axis scale label is valid in the category axis.

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

#### splitLine.lineStyle.color
- **Type**: `string`
- **Default**: `'#333'`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### splitLine.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### splitLine.lineStyle.width
- **Type**: `number`
- **Default**: `2`

The width of the line.

## splitArea
- **Type**: `Object`

Split area of axis in [grid](../option-gl.md#grid) area.

### splitArea.show
- **Type**: `boolean`
- **Default**: `false`

Set this to be `true` to show the splitArea.

### splitArea.interval
- **Type**: `number|Function`
- **Default**: `'auto'`

Axis splitArea is valid in the category axis. Defaults to the same as [axisLabel.interval](../option-gl.md#.axisLabel.interval).

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

### splitArea.areaStyle
- **Type**: `Object`

Split area style.

#### splitArea.areaStyle.color
- **Type**: `Array`
- **Default**: `['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']`

Color of the split area. The split area color could also be set in color array, which the split lines would take as their colors in turns. Dark and light colors in turns are used by default.

## axisPointer
- **Type**: `Object`

Configurations for axis pointer.

### axisPointer.show
- **Type**: `boolean`
- **Default**: `true`

Whether to display the axisPointer. Set this to be `true` to show the splitArea.

#### axisPointer.lineStyle.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.8)'`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### axisPointer.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### axisPointer.lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

### axisPointer.label
- **Type**: `Object`

The label of axisPointer.

#### axisPointer.label.show
- **Type**: `boolean`
- **Default**: `true`

Whether to display the label of axisPointer. Value axes are displayed by default, while category axes are not.

#### axisPointer.label.formatter
- **Type**: `Function`

The formatter of the label. . The first parameter to the function is the value of the current axis. The second parameter to the function is an array of values for all axes.

```
(value: number, valueAll: Array) => string
```

#### axisPointer.label.margin
- **Type**: `number`

Distance between label and axis. Like the scale label, this distance is a 3D space rather than a screen pixel.

##### axisPointer.label.textStyle.color
- **Type**: `string`
- **Default**: `"#fff"`

The Color of the text.

##### axisPointer.label.textStyle.borderWidth
- **Type**: `number`
- **Default**: `0`

The border width of the text.

##### axisPointer.label.textStyle.borderColor
- **Type**: `string`
- **Default**: `#fff`

The border color of the text.

##### axisPointer.label.textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

The font family of the text.

##### axisPointer.label.textStyle.fontSize
- **Type**: `number`
- **Default**: `16`

The font size of the text.

##### axisPointer.label.textStyle.fontWeight
- **Type**: `string`
- **Default**: `normal`

The font thick weight of the text.

**Optional:**

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

## environment
- **Type**: `string`
- **Default**: `'auto'`

Environment map. Support for solid colors, gradual colors, URL of panoramic texture. The default is `'auto'`, which is used as the environment texture when [light.ambientCubemap.texture](option-gl.grid3D.md#light.ambientCubemap.texture) is configured. Otherwise, the environment texture is not displayed.

Example:

```
// Configure as a panoramic texture
environment: 'asset/starfield.jpg'
// Configured as a solid black background
environment: '#000'
// Configured as a background with a vertical gradient
environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  offset: 0, color: '#00aaff' // Sky color
}, {
  offset: 0.7, color: '#998866' // Ground color
}, {
  offset: 1, color: '#998866' // Ground color
}], false)

```

## light
- **Type**: `Object`

Light related settings. Invalid when [shading](option-gl.grid3D.md#shading) is 'color'.

The lighting settings affect the components and all the charts on the component's coordinate system.

A reasonable lighting setting can make the brightness and darkness of the whole scene richer and more layered.

### light.main
- **Type**: `Object`

The setting of the main light source of the scene. In the [globe](option-gl.globe.md) component is the sun.

#### light.main.color
- **Type**: `string`
- **Default**: `#fff`

The color of the main light source.

#### light.main.intensity
- **Type**: `number`
- **Default**: `1`

The intensity of the main light source.

#### light.main.shadow
- **Type**: `boolean`
- **Default**: `false`

Whether the main light source displays a shadow. The default is off.

Turning on the shadows can bring more realistic and layered lighting to the scene. But it also increases the operating overhead of the program.

The following two images show the difference between turning on the shadow and turning off the shadow.

![](../../documents/asset/gl/img/geo-shadow.png "Shadow") ![](../../documents/asset/gl/img/geo-no-shadow.png "No Shadow")

#### light.main.shadowQuality
- **Type**: `string`
- **Default**: `'medium'`

The quality of the shadow. You can choose `'low'`, `'medium'`, `'high'`, `'ultra'`

The following two images shows the difference between low quality and high quality shadows.

![](../../documents/asset/gl/img/geo-shadow-low.png "Low") ![](../../documents/asset/gl/img/geo-shadow-high.png "High")

#### light.main.alpha
- **Type**: `number`
- **Default**: `30`

The main light source is around the x-axis, which is the angle of up-down rotation. Control the direction of the light with [beta](option-gl.grid3D.md#light.main.beta).

As the following image show:

![](../../documents/asset/gl/img/light-alpha-beta.png)

The [globe](option-gl.globe.md) component can control the time of sunlight by [time](option-gl.globe.md#light.main.time).

#### light.main.beta
- **Type**: `number`
- **Default**: `30`

The main light source is around the y-axis, which is the angle of the left-right rotation.

### light.ambient
- **Type**: `Object`

Global ambient light settings.

#### light.ambient.color
- **Type**: `string`
- **Default**: `#fff`

The color of ambient light.

#### light.ambient.intensity
- **Type**: `number`
- **Default**: `0.2`

The intensity of ambient light.

### light.ambientCubemap
- **Type**: `Object`

The ambientCubemap uses texture as the source of ambient light, which provides diffuse and specular for objects. The diffuse and specular can be set separately by [diffuseIntensity](option-gl.grid3D.md#light.ambientCubemap.diffuseIntensity) and [specularIntensity](option-gl.grid3D.md#light.ambientCubemap.specularIntensity).

#### light.ambientCubemap.texture
- **Type**: `string`

The URL of the ambient cubemap supports HDR images in the `.hdr` format. You can obtained the resources for `.hdr` from [http://www.hdrlabs.com/sibl/archive.html](http://www.hdrlabs.com/sibl/archive.html) and other websites.

Example：

```
ambientCubemap: {
    texture: 'pisa.hdr',
    // The exposure value used when analytic hdr
    exposure: 1.0
}
```

#### light.ambientCubemap.diffuseIntensity
- **Type**: `number`
- **Default**: `0.5`

The intensity of diffuse.

#### light.ambientCubemap.specularIntensity
- **Type**: `number`
- **Default**: `0.5`

The intensity of specular.

## postEffect
- **Type**: `Object`

Post-processing effects related configuration. It can add effects such as highlights, depth of field, screen space ambient occlusion (SSAO), toning to the picture. And it can make the whole picture more textured.

The following are the differences between closing `postEffect` and opening `postEffect`.

![](../../documents/asset/gl/img/globe-posteffect-disable.png "Disable") ![](../../documents/asset/gl/img/globe-posteffect-enable.png "Enable")

Note that when postEffect is enable, [temporalSuperSampling](option-gl.grid3D.md#temporalSuperSampling) is enable by default. After the picture is still, the picture will continue to be enhanced, including anti-aliasing, depth of field, SSAO, shadows, etc.

### postEffect.enable
- **Type**: `boolean`
- **Default**: `false`

Whether to enable post-processing effects. Not enabled by default.

### postEffect.bloom
- **Type**: `Object`

Bloom is used to reproducing the effects that occur in real cameras when taking pictures in a bright environment. Because traditional RGB can only represent colors in the range of '0 - 255', so we need to use the bloom effect simulates fringes of light extending from the borders of bright areas, creating the illusion of a bright light overwhelming the camera. As shown below：

![](../../documents/asset/gl/img/globe-posteffect-bloom.png)

#### postEffect.bloom.enable
- **Type**: `boolean`
- **Default**: `false`

Whether to enable the bloom effect.

#### postEffect.bloom.bloomIntensity
- **Type**: `number`
- **Default**: `0.1`

The intensity of the bloom. The default is 0.1.

### postEffect.depthOfField
- **Type**: `Object`

Depth of Field is a post-processing effect that simulates the focus properties of a camera. The area of focus is clear, and the area away from the focus is gradually blurred.

The depth of field effect allows the observer to focus on the area of focus and make the picture feel stronger. Large depth of field can also create a macro model effect.

The following are the differences between turning off and turning on the depth of field effect.

![](../../documents/asset/gl/img/geo-no-dof.png "Disable") ![](../../documents/asset/gl/img/geo-dof.png "Enable")

#### postEffect.depthOfField.enable
- **Type**: `boolean`
- **Default**: `false`

Whether to enable the depth of field.

#### postEffect.depthOfField.focalDistance
- **Type**: `boolean`
- **Default**: `50`

The initial focus distance. The user can click on the area to automatically focus.

#### postEffect.depthOfField.focalRange
- **Type**: `boolean`
- **Default**: `20`

The size of the in-focus area. The objects in this range are completely clear and there is no blurring.

#### postEffect.depthOfField.fstop
- **Type**: `number`
- **Default**: `2.8`

\[F value\] of the lens ([https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)](https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94\)), the smaller the value, the shallower the depth of field.

#### postEffect.depthOfField.blurRadius
- **Type**: `number`
- **Default**: `10`

Blur radius outside the focus.

The difference blur effect between the different radius.

![](../../documents/asset/gl/img/geo-dof-small.png "blurSize: 3") ![](../../documents/asset/gl/img/geo-dof-large.png "blurSize: 10")

### postEffect.screenSpaceAmbientOcclusion
- **Type**: `Object`

The ambient occlusion post-processing effect darkens the corners, holes, crevices, and areas where most light can\`t reach. It is a supplement to the traditional shadow map, which makes the whole scene more natural and layered.

Below is a comparison of the effects of no SSAO and SSAO:

![](../../documents/asset/gl/img/geo-no-ssao.png "No SSAO") ![](../../documents/asset/gl/img/geo-ssao.png "SSAO")

### postEffect.SSAO
- **Type**: `Object`

Same as [screenSpaceAmbientOcclusion](option-gl.grid3D.md#postEffect.screenSpaceAmbientOcclusion)

#### postEffect.SSAO.enable
- **Type**: `boolean`
- **Default**: `false`

Whether to enable SSAO (screen space ambient occlusion). Not enabled by default.

#### postEffect.SSAO.quality
- **Type**: `string`
- **Default**: `'medium'`

The quality of SSAO (screen space ambient occlusion). Supporting`'low'`, `'medium'`, `'high'`, `'ultra'`

#### postEffect.SSAO.radius
- **Type**: `number`
- **Default**: `2`

The radius of the SSAO (screen space ambient occlusion). The larger the radius, the more natural the effect, but you need to set a higher `'quality'`.

The following example is the difference between a smaller and larger radius:

![](../../documents/asset/gl/img/geo-ssao-small-radius.png "Radius: 1") ![](../../documents/asset/gl/img/geo-ssao-large-radius.png "Radius: 10")

#### postEffect.SSAO.intensity
- **Type**: `number`
- **Default**: `1`

The intensity of SSAO (screen space ambient occlusion). The larger the value, the darker the color.

### postEffect.colorCorrection
- **Type**: `Object`

Color correction and adjustment. Similar to Color Adjustments in Photoshop.

The same scene in the figure below is adjusted to the difference between the cool color system and the warm color system.

![](../../documents/asset/gl/img/buildings-cold.jpg "Cold") ![](../../documents/asset/gl/img/buildings-warm.jpg "Warm")

#### postEffect.colorCorrection.enable
- **Type**: `boolean`
- **Default**: `true`

Whether to enable the color correction.

#### postEffect.colorCorrection.lookupTexture
- **Type**: `string|HTMLImageElement|HTMLCanvasElement`

Color correction lookup texture, recommended.

The color correction lookup texture is a texture image like the one below.

![](../../documents/asset/gl/img/lookup.png)

This is the basic lookup texture image that you can use directly. To adjust the color of the scene to the effect you want, you can take a screenshot of the scene and adjust the color to the desired effect in image processing software such as Photoshop. Then apply the same adjustment to the image of the lookup texture above.

For example, after turning into a cool tone, the image of the lookup texture will look like this:

![](../../documents/asset/gl/img/crispwinter.png)

Then the texture image is used as the value of the configuration item, and you can get the same effect in Photoshop.

Of course, if you just want to get a screenshot, you don't have to do it anymore, but if you want to easily adjust to the ideal color in real-time interactive works, this is very useful.

#### postEffect.colorCorrection.exposure
- **Type**: `number`
- **Default**: `0`

The exposure of the image.

#### postEffect.colorCorrection.brightness
- **Type**: `number`
- **Default**: `0`

The brightness of the image.

#### postEffect.colorCorrection.contrast
- **Type**: `number`
- **Default**: `1`

The contrast of the image.

#### postEffect.colorCorrection.saturation
- **Type**: `number`
- **Default**: `1`

The saturation of the image.

### postEffect.FXAA
- **Type**: `Object`

After opening [postEffect](option-gl.grid3D.md#postEffect), WebGL's default MSAA (Multi Sampling Anti Aliasing) will not work. At this time, FXAA (Fast Approximate Anti-Aliasing) can solve the anti-aliasing problem quickly and easily. FXAA blurs the edge of the scene to solve the problem of aliasing. It works well on some scenes, but in echarts-gl, you need to ensure that the edges of many texts and lines are sharp and clear, so FXAA is not suitable. At this point we can use supersampling by setting a higher `devicePixelRatio` as follows:

```
var chart = echarts.init(dom, null, {
    devicePixelRatio: 2
})
```

However, setting a higher `devicePixelRatio` has high requirements for computer performance, so more often we recommend using [temporalSuperSampling](option-gl.grid3D.md#temporalSuperSampling) in echarts-gl. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated.,thus achieving anti-aliasing effect.

#### postEffect.FXAA.enable
- **Type**: `boolean`
- **Default**: `false`

Whether to enable FXAA. Not enabled by default.

## temporalSuperSampling
- **Type**: `Object`

Temporal supersampling. After opening [postEffect](option-gl.grid3D.md#postEffect), WebGL's default MSAA (MultiSampling Anti-Aliasing) will not work, so we need to solve the problem of sampling.

Temporal supersampling is an anti-aliasing method. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated, thus achieving anti-aliasing effect. And in this process, ECharts-gl also progressively enhances some of the effects in [postEffect](option-gl.grid3D.md#postEffect) that require sampled guarantees. For example [SSAO](option-gl.grid3D.md#postEffect.SSAO), [Depth of Field](option-gl.grid3D.md#postEffect.depthOfField), and shadow.

The following is the difference between not opening `temporalSuperSampling` and opening `temporalSuperSampling`.

![](../../documents/asset/gl/img/surface-no-taa.png "No AA") ![](../../documents/asset/gl/img/surface-taa.png "AA")

### temporalSuperSampling.enable
- **Type**: `boolean`
- **Default**: `'auto'`

Whether to enable temporal supersampling. By default, temporal supersampling is also turned on synchronously when [postEffect](option-gl.grid3D.md#postEffect) is turned on.

## viewControl
- **Type**: `Object`

`viewControl` is used for mouse rotation, zooming, and other perspective control.

### viewControl.projection
- **Type**: `string`
- **Default**: `perspective`

The way of projection, the default is `'perspective'` projection, also supports setting to `'orthogonal'` projection.

### viewControl.autoRotate
- **Type**: `boolean`
- **Default**: `false`

Whether to enable the angle of view to automatically rotate around the object.

### viewControl.autoRotateDirection
- **Type**: `string`
- **Default**: `cw`

The direction in which the object auto rotates. The default is `'cw'` means clockwise from top to bottom, and can also use `'ccw'` means counterclockwise from top to bottom.

### viewControl.autoRotateSpeed
- **Type**: `number`
- **Default**: `10`

The speed at which the object auto rotates. The unit is `angle/second`, the default is `10`, which is a turn of `36` seconds.

### viewControl.autoRotateAfterStill
- **Type**: `number`
- **Default**: `3`

The time interval for automatic rotation to resume after the mouse is still. Valid after opening [autoRotate](option-gl.grid3D.md#viewControl.autoRotate).

### viewControl.damping
- **Type**: `number`
- **Default**: `0.8`

The damping when the mouse is rotated, zoomed, etc. When it is greater than 0, the angle of view will continue to move (rotate and zoom) due to certain inertia after the mouse is still.

### viewControl.rotateSensitivity
- **Type**: `number|Array`
- **Default**: `1`

The sensitivity of the rotation operation. The greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical rotation sensitivity separately.

The default is `1`.

Cannot be rotated after setting to `0`.

```
// can't rotate
rotateSensitivity: 0
// can only be rotated horizontally
rotateSensitivity: [1, 0]
//  can only rotate vertically
rotateSensitivity: [0, 1]
```

### viewControl.zoomSensitivity
- **Type**: `number`
- **Default**: `1`

The sensitivity of the zoom operation, the larger the value, the more sensitive. The default is `1`.

Can`t be scaled after setting to`0\`.

### viewControl.panSensitivity
- **Type**: `number`
- **Default**: `1`

The sensitivity of the panning operation, the greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical translation sensitivity.

The default is `1`.

Cannot pan after setting to `0`.

### viewControl.panMouseButton
- **Type**: `string`
- **Default**: `left`

The mouse button used for panning operation supports:

*   `'left'` left mouse button (default)
    
*   `'middle'` middle mouse button
    
*   `'right'` right mouse button
    

Note: If set to the right mouse button, the default context menu will be blocked.

### viewControl.rotateMouseButton
- **Type**: `string`
- **Default**: `middle`

The mouse button used for the rotation operation supports:

*   `'left'` left mouse button
    
*   `'middle'` middle mouse button (default)
    
*   `'right'` right mouse button
    

Note: If set to the right mouse button, the default context menu will be blocked.

### viewControl.distance
- **Type**: `number`
- **Default**: `200`

The distance of the default perspective from the subject. For [globe](option-gl.globe.md), the distance from the Earth's surface is the distance from the center origin for other components such as [grid3D](option-gl.grid3D.md) and [geo3D](option-gl.geo3D.md). Valid when [projection](option-gl.grid3D.md#viewControl.projection) is `'perspective'`.

### viewControl.minDistance
- **Type**: `number`
- **Default**: `40`

The angle of view is controlled by the mouse to bring the minimum distance to the subject. Valid when [projection](option-gl.grid3D.md#viewControl.projection) is `'perspective'`.

### viewControl.maxDistance
- **Type**: `number`
- **Default**: `400`

The angle of view can be extended to the maximum distance of the subject by mouse control. Valid when [projection](option-gl.grid3D.md#viewControl.projection) is `'perspective'`.

### viewControl.orthographicSize
- **Type**: `number`
- **Default**: `200`

The size of the orthogonal projection. Valid when [projection](option-gl.grid3D.md#viewControl.projection) is `'orthographic'`.

### viewControl.maxOrthographicSize
- **Type**: `number`
- **Default**: `40`

The maximum value of the orthogonal projection scaling. Valid when [projection](option-gl.grid3D.md#viewControl.projection) is `'orthographic'`.

### viewControl.minOrthographicSize
- **Type**: `number`
- **Default**: `400`

The minimum value of the orthogonal projection scaling. Valid when [projection](option-gl.grid3D.md#viewControl.projection) is `'orthographic'`

### viewControl.alpha
- **Type**: `number`
- **Default**: `20`

The angle of view is around the x-axis, which is the angle of rotation up and down. With [beta](option-gl.grid3D.md#light.main.beta) you can control the direction of the perspective.

As shown below：

![](../../documents/asset/gl/img/view-alpha-beta.png)

### viewControl.beta
- **Type**: `number`
- **Default**: `40`

The angle of view is around the y-axis, which is the angle of rotation from left to right.

### viewControl.center
- **Type**: `Array`

At the center of the angle of view, the rotation will also rotate around this center point. The default is `[0,0,0]`.

### viewControl.minAlpha
- **Type**: `number`
- **Default**: `-90`

The minimum alpha value to rotate up and down. That is, the angle of view can be rotated to reach the uppermost angle.

### viewControl.maxAlpha
- **Type**: `number`
- **Default**: `90`

The maximum alpha value to rotate up and down. That is, the angle of view can be rotated to the lowest angle.

### viewControl.minBeta
- **Type**: `number`

The minimum beta value to rotate left and right. That is, the angle of view can be rotated to the leftmost angle.

### viewControl.maxBeta
- **Type**: `number`

The maximum beta value to rotate left and right rotation. That is, the angle of view can be rotated to the rightmost angle.

### viewControl.animation
- **Type**: `boolean`
- **Default**: `true`

Whether to enable animation.

### viewControl.animationDurationUpdate
- **Type**: `number`
- **Default**: `1000`

The duration time for update the transition animation.

### viewControl.animationEasingUpdate
- **Type**: `string`
- **Default**: `cubicInOut`

The easing effect for update transition animation.

## zlevel
- **Type**: `number`
- **Default**: `-10`

The layer in which the component is located.

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

**Note:** The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same `zlevel` cannot be used for both WebGL and Canvas drawing at the same time.

## left
- **Type**: `string|number`
- **Default**: `auto`

Distance between component and the left side of the container.

`left` value can be instant pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

## top
- **Type**: `string|number`
- **Default**: `auto`

Distance between component and the top side of the container.

`top` value can be instant pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

## right
- **Type**: `string|number`
- **Default**: `auto`

Distance between component and the right side of the container.

`right` value can be instant pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`.

Adaptive by default.

## bottom
- **Type**: `string|number`
- **Default**: `auto`

Distance between component and the bottom side of the container.

`bottom` value can be instant pixel value like `20`; it can also be a percentage value relative to container width like `'20%'`.

Adaptive by default.

## width
- **Type**: `string|number`
- **Default**: `auto`

The width of the view of the component.

## height
- **Type**: `string|number`
- **Default**: `auto`

The height of the view of the component.
