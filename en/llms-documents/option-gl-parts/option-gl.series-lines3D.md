# option-gl.series-lines3D

## name
- **Type**: `string`

Series name used for displaying in [tooltip](https://echarts.apache.org/zh/option.html#tooltip) and filtering with [legend](https://echarts.apache.org/zh/option.html#legend), or updating data and configuration with `setOption`.

## coordinateSystem
- **Type**: `string`

The coordinate used in the series, whose options are:

*   `'geo3D'` Use 3D geographic coordinate, with [geoIndex](../option-gl.md#series-.geoIndex) to assign the corresponding 3D geographic coordinate components.

*   `'globe'`
    
    Use 3D globe coordinate, with [globeIndex](../option-gl.md#series-.globeIndex) to assign the corresponding 3D globe coordinate components.

## geo3DIndex
- **Type**: `number`
- **Default**: `0`

The index of the [geo3D](option-gl.geo3D.md) component used by the axis.The first [grid3D](option-gl.grid3D.md) component is used by default.

## globeIndex
- **Type**: `number`
- **Default**: `0`

The index of the [globe](option-gl.globe.md) component used by the axis.The first [globe](option-gl.globe.md) component is used by default.

## polyline
- **Type**: `boolean`
- **Default**: `false`

If draw as a polyline.

Default to be `false`. Can only draw a two end straight line.

If it is set true, [data.coords](../option-gl.md#series-lines.data.coords) can have more than two coords to draw a polyline. It is useful when visualizing GPS track data.

## effect
- **Type**: `Object`

The setting about the special effects of lines.

### effect.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show special effect. It is not displayed by default.

### effect.period
- **Type**: `number`
- **Default**: `4`

The duration of the special effect, which unit is second.

### effect.constantSpeed
- **Type**: `number`

Whether the moving animation of the trail of special effect has a constant speed, which unit is dimensioned in 3D space. The [period](../option-gl.md#series-lines.effect.period) will be ignored when it is set to a non-null value.

### effect.trailWidth
- **Type**: `number`
- **Default**: `4`

The width of the trail of special effects.

### effect.trailLength
- **Type**: `number`
- **Default**: `0.1`

The length of trail of special effect. The values from 0 to 1 could be set. Is the percentage of the length of the line.

### effect.trailColor
- **Type**: `string`

The color of the trail, which default is the same as the line color.

### effect.trailOpacity
- **Type**: `number`

The opacity of the trail, which default is the same as line opacity.

## lineStyle
- **Type**: `Object`

The line style of the lines.

### lineStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the line. Color is taken from [option.color Palette](../option-gl.md#color) by default.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

### lineStyle.opacity
- **Type**: `number`
- **Default**: `0.5`

The opacity of the line.

### lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

## data
- **Type**: `Array`

A data array of 3D lines. Usually, each item of data can be a set of coordinates containing the start point and end point.

More than two coordinates can be supported when [polyline](option-gl.series-lines3D.md#polyline) is set to `true`. as follows:

```
data: [
    [
        [120, 66, 1], // latitude, longitude and altitude coordinates of the start point
        [122, 67, 2]  // latitude, longitude and altitude coordinates of the end point
    ]
]
```

Sometimes you need to configure the name of the data item or a separate style. You need to write the latitude and longitude coordinates to the coords property, as follows:

```
data: [
    {
        coords: [ [120, 66], [122, 67] ],
        // The value of data
        value: 10,
        // The name of data
        name: 'foo',
        // The style of line
        lineStyle: {}
    }
]
```

### data.coords
- **Type**: `Array`

An array of two or more latitude and longitude coordinates. When [polyline](option-gl.series-lines3D.md#polyline) is set to `true`, support more than two coordinates.

### data.value
- **Type**: `Array|number`

The value of data.

### data.lineStyle
- **Type**: `Object`

Style setting for single data (single line).

#### data.lineStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the line.

In addition to color strings, RGBA values represented by arrays are supported, for example:

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### data.lineStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the line.

#### data.lineStyle.width
- **Type**: `number`
- **Default**: `1`

The width of the line.

## blendMode
- **Type**: `string`
- **Default**: `'source-over'`

Sets the type of compositing operation to apply when drawing a new shape.

Currently supporting `'source-over'`, `'lighter'`. The default is `'source-over'` mode is blended by alpha. The `'lighter'` is overlap mode. In this mode, the area where the number of graphics is concentrated can be highlighted by the overlap.

## zlevel
- **Type**: `number`
- **Default**: `-10`

The layer in which the component is located.

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

**Note:** The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same `zlevel` cannot be used for both WebGL and Canvas drawing at the same time.

## silent
- **Type**: `boolean`
- **Default**: `false`

Whether the graph doesn\`t respond and triggers a mouse event. The default is false, which is to respond to and trigger mouse events.
