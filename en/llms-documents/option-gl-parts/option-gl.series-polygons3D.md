# option-gl.series-polygons3D

## multiPolygon
- **Type**: `boolean`
- **Default**: `true`

Whether a data contains multiple polygons.

## itemStyle
- **Type**: `Object`

Graphic styles, including color, transparency, strokes, and etc.

### itemStyle.color
- **Type**: `string|Function`
- **Default**: `adaptive`

The color of the graphic.

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

### itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the graphic.

## emphasis
- **Type**: `Object`

Mouse hover Highlights the style of graphics and labels.

#### emphasis.itemStyle.color
- **Type**: `string`
- **Default**: `adaptive`

The color of the graphic.

```
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#### emphasis.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

The opacity of the graphic.

## data
- **Type**: `Object`

A list of data for the polygon.

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

A list of coordinates of the polygon. If [multiPolygon](option-gl.series-polygons3D.md#multiPolygon) is set to true, it is an array containing multiple polygons.

## progressiveThreshold
- **Type**: `number`
- **Default**: `1000`

Enable progressive rendering thresholds, progressive rendering can be loading the screen without blocking.

## progressive
- **Type**: `number`
- **Default**: `1000`

Progressively render the amount of data per render.
