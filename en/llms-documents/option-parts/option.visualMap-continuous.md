# option.visualMap-continuous

## type
- **Type**: `string`
- **Default**: `continuous`

Used to determine that it is a continuous visualMap component.

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## min
- **Type**: `number`

Specify the min dataValue for the visualMap component. `[visualMap.min, visualMax.max]` make up the domain of viusul mapping.

Notice that `min` and `max` should be specified explicitly, and be `[0, 200]` by default, but not `dataMin` and `dataMax` in series.data.

## max
- **Type**: `number`

Specify the max dataValue for the visualMap component. `[visualMap.min, visualMax.max]` make up the domain of viusul mapping.

Notice that `min` and `max` should be specified explicitly, and be `[0, 200]` by default, but not `dataMin` and `dataMax` in series.data.

## range
- **Type**: `Array`

Specify selected range, that is, the dataValue corresponding to the two handles. For example:

```
chart.setOption({
    visualMap: {
        min: 0,
        max: 100,
        // dataValue corresponding to the two handles.
        range: [4, 15],
        ...
    }
});
```

**auto-adaption when min or max is modified by setOption**

*   If `range` is not set (or set to null or undefined)

```
For instance:
chart.setOption({visualMap: {min: 10, max: 300}}); // range is not set, then range is [min, max] by default, that is, [10, 300].

chart.setOption({visualMap: {min: 0, max: 400}}); // Modify min and max using setOption again.
// Then range will be auto-modified to the new [min, max], that is, [0, 400].
```

**Notice**: see [unboundedRange](../option.md#unboundedRange) for the special case when `range[0]` or `range[1]` touch `min` or `max`.

*   If `range` is set explicitly, such as \[10, 300\]

```
For instance:
chart.setOption({visualMap: {min: 10, max: 300, range: [20, 80]}}); // range is set to [20, 80].

chart.setOption({visualMap: {min: 0, max: 400}}); // min and max are modifies using setOption.
// Then range keep the original value ([20, 80]) but will not do auto-adaption.

chart.setOption({visualMap: {range: null}}); // Set range to null then.
// Then auto-adaption of range turns on and range is auto modified to [min, max], that is, [0, 400].

```

`range` gotten by `getOption` is always an `Array`, but not `null` or `undefined`.

## unboundedRange
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether to treat the range as unbounded when `range` touches `min` or `max`.

*   `true`: when `range[0]` <= `min`, the actual range becomes `[-Infinity, range[1]]`; when `range[1]` >= `max`, the actual range becomes `[range[0], Infinity]`.
    
    > NOTE:
    > 
    > *   This provides a way to ensure all data can be considered in-range when `min`/`max` are not precisely known.
    > *   Default is `true` for backward compatibility.
    > *   Piecewise VisualMap does not need it, since it can define unbounded range in each piece, such as "< 12", ">= 300".
    
*   `false`: Disable the unbounded range behavior.
    *   Use case: e.g., `min`/`max` reflect the normal data range, and some outlier data should always be treated as out of range.

## calculable
- **Type**: `boolean`
- **Default**: `false`

Whether show handles, which can be dragged to adjust "selected range".

Notes: In order to be compatible with ECharts2, the rule, which seems to be a little odd, is retained: when [visualMap.type](../option.md#visualMap.type) is not set, and [visualMap.calculable](option.visualMap-continuous.md#calculable) was set to be `true`, [visualMap.type](../option.md#visualMap.type) will be automatically set as `'continuous'`, regardless of some settings such as [visualMap-piecewise.splitNumber](option.visualMap-piecewise.md#splitNumber). Therefore, it is recommended to set [visualMap.type](../option.md#visualMap.type) explicitly, which avoids ambiguity.

## realtime
- **Type**: `boolean`
- **Default**: `true`

Whether to update view in real time when dragging a handle.

*   If `true`, the chart view will be updated in real time when dragging.
    
*   If `false`, the chart view will be updated at the end of the handle dragging.

## inverse
- **Type**: `boolean`
- **Default**: `false`

Whether to inverse the layout of visualMap component.

As `inverse` is `false`, the layout direction is the same as [cartesian coordinate](option.grid.md). That is:

*   As [visualMap.orient](../option.md#visualMap.orient) is `'vertical'`, large data are placed at the top while small at the bottom.
*   As [visualMap.orient](../option.md#visualMap.orient) is `'horizontal'`, large data are placed on the right while small on the left.

As `inverse` is `true`, the result is opposite.

## precision
- **Type**: `number`
- **Default**: `0`

The decimal precision of label, defaults to be 0 (no decimals).

## itemWidth
- **Type**: `number`
- **Default**: `20`

The width of the main bar of visualMap component.

## itemHeight
- **Type**: `number`
- **Default**: `140`

The height of the main bar of visualMap component.

## align
- **Type**: `string`
- **Default**: `'auto'`

Specify the position of handles and labels, against the main bar. The possible values are:

*   `'auto'` Decide automatically.
*   `'left'` The handles and labels are on the right, which is valid when `orient` is set as `'horizontal'`.
*   `'right'` The handles and labels are on the left, which is valid when `orient` is set as `'horizontal'`.
*   `'top'` the handles and labels are at the bottom, which is valid when `orient` is set as `'vertical'`.
*   `'bottom'` the handles and labels are at the top, which is valid when `orient` is set as `'vertical'`.

## text
- **Type**: `Array`

The label text on both ends, such as `['High', 'Low']`. [sample](https://echarts.apache.org/examples/en/editor.html?c=doc-example/map-visualMap-continuous-text&edit=1&reset=1).

You can understand the order of items in `text` array just by a simple trial. See [visualMap.inverse](../option.md#visualMap.inverse).

## textGap
- **Type**: `number`
- **Default**: `10`

The distance between the ends of the main bar and the label, with unit px. See [visualMap-continuous.text](option.visualMap-continuous.md#text)

## show
- **Type**: `boolean`
- **Default**: `true`

Whether to show visualMap-continuous component. If set as `false`, visualMap-continuous component will not show, but it can still perform visual mapping from dataValue to visual channel in chart.

## dimension
- **Type**: `string`

Specify which dimension should be used to fetch dataValue from [series.data](../option.md#series.data), and then map them to visual channel.

[series.data](../option.md#series.data) can be regarded as a two-dimensional array, for instance:

```
[
    [12, 23, 43],
    [12, 23, 43],
    [43, 545, 65],
    [92, 23, 33]
]
```

Each column of the above array is regarded as a `dimension`. For example, when property `dimension` is set to 1, the second column (i.e., 23, 23, 545, 23) is chosen to perform visual mapping.

Use the last dimension of `data` by default.

## seriesIndex
- **Type**: `number|string|Array`

Specify visual mapping should be performed on which series, from which [series.data](../option.md#series.data) is fetched.

Options:

*   A index number
*   An array of index numbers
*   `'all'`/`null`/`undefined` (default): means all of the series.

## seriesId
- **Type**: `number|string|Array`

Since `v6.0.0`

Specify visual mapping should be performed on which series, from which [series.data](../option.md#series.data) is fetched.

Can be a id or a list of ids. All series are used by default.

## seriesTargets
- **Type**: `Array`

Since `v6.1.0`

Specify multiple series with their corresponding dimension mappings. When `seriesTargets` is configured, `seriesIndex`, `seriesId`, and `dimension` will be ignored.

This option allows a single `visualMap` component to control different dimensions of multiple series simultaneously, which is particularly useful when working with datasets.

Each target object should contain the following properties:

*   `seriesIndex` or `seriesId`: Specify the series (choose one)
*   `dimension`: Specify the data dimension for that series

Example:

```
option = {
    dataset: {
        source: [
            ['product', 'sales', 'price', 'year'],
            ['A', 100, 20, 2020],
            ['B', 200, 30, 2021],
            ['C', 150, 25, 2022]
        ]
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 100,
        // Configure different series to use different dimensions
        seriesTargets: [
            {
                seriesIndex: 0,
                dimension: 1  // First series uses 'sales' dimension
            },
            {
                seriesIndex: 1,
                dimension: 2  // Second series uses 'price' dimension
            }
        ],
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        }
    },
    series: [
        { type: 'bar' },
        { type: 'line' }
    ]
};
```

## hoverLink
- **Type**: `boolean`
- **Default**: `true`

`hoverLink` enable highlight certain graphical elements of chart when mouse hovers on some place of `visualMap` component that is corresponding to those graphical elements by visual mapping.

Inversely, when mouse hovers a graphical element of chart, its value label will be displayed on its corresponding position in `visualMap`.

## inRange
- **Type**: `Object`

Define visual channels that will mapped from dataValues that are **in selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

*   `symbol`: Type of symbol.
*   `symbolSize`: Symbol size.
*   `color`: Symbol color.
*   `colorAlpha`: Symbol alpha channel.
*   `opacity`: Opacity of symbol and others (like labels).
*   `colorLightness`: Lightness in [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV).
*   `colorSaturation`: Saturation in [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV).
*   `colorHue`: Hue in [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV).

`inRange` could customize visual channels both in series (by [visualMap-continuous.seriesIndex](option.visualMap-continuous.md#seriesIndex)) and in `visualMap-continuous` itself.

For instance, if a `visualMap-continuous` component is used on a scatter chart, the mapping approach from data to `color` (or `symbol`, `size`, ...) can be both customized in the scatter chart and `visualMap-continuous` component itself. See the code as following:

```
visualMap: [
    {
        ...,
        // Define visual channels both in target series and visualMap-continuous component itself:
        inRange: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        }
    }
]
```

If you want to define visual channels for target series and visualMap-continuous component separately, you should do as follows:

```
visualMap: [
    {
        ...,
        // Define visual channels only for target series.
        target: {
            inRange: {
                color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                symbolSize: [60, 200]
            }
        },
        // Define visual channels only for visualMap-continuous component.
        controller: {
            inRange: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

Or define as follows:

```
visualMap: [
    {
        ...,
        // Define visual channels for both target series and visualMap-continuous component.
        inRange: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [60, 200]
        },
        // Define visual channels only for visualMap-continuous component, which
        // will overlap the properties with the same name in the above common
        // definition. (symbolSize is overlapped by [30, 100] while color
        // keeps the original value)
        controller: {
            inRange: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

  

* * *

**✦ About visual channels ✦**

*   Various visual channels (such as `color`、`symbolSize` and ect.) can be defined in inRange at the same time and all of them will be apopted.
    
*   Basically visual channels `opacity` is recommended, rather than `colorAlpha`. The former controls the transparency of both graphical element and its attachments (like label), whereas the latter only controls the transparency of graphical element.
    
*   There are two approaches of visual mapping supported: 'Linear Mapping' and 'Table Mapping'.
    

  

* * *

**✦ Linear Mapping to visual channel ✦**

`Linear Mapping` means that linear calculation will be performed on each dataValue (value of series.data), mapping them from the domain of `[visaulMap.min, visualMap.max]` to a given range of `[visual value 1, visual value 2]` and obtaining a final value (say visual value) for visual channel rendering.

For instance, `[visualMap.min, visualMap.max]` is set to be `[0, 100]`, and there is series.data: `[50, 10, 100]`. We intend to map them to an `opacity` range `[0.4, 1]`, by which the size of value can be demonstrated by the transparency of graphical elements. visualMap component will then linear calculate them and get opacity values `[0.7, 0.44, 1]`, cooresponding to each dataValue.

We can also set the visual range inversely, such as `opacity: [1, 0.4]`, and the final mapping result for the given series.data above will be `[0.7, 0.96, 0.4]`.

Notice: \[visualMap.min, visualMap.max\] should be set manually and is \[0, 100\] by default, but not `dataMin` and `dataMax` in series.data.

How to configure visualMap component to do Linear Mapping?

*   When use [visualMap-continuous](option.visualMap-continuous.md), or
    
*   When use [visualMap-piecewise](option.visualMap-piecewise.md) and [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) is not used.
    

About the value of visual channel (visual value):

*   Basically `Array` is used to express the range of visual value, e.g., `color: ['#333', '#777']`.
    
*   Single `number` or single `string` can also be used, which will be converted to an `Array` by visualMap component. e.g.: `opacity: 0.4` will be converted to `opacity: [0.4, 0.4]`, `color: '#333'` will be converted to `color: ['#333', '#333']`.
    
*   For visual channel `symbolSize`, `opacity`, `colorAlpha`, `colorLightness`, `colorSaturation`, `colorHue`, the range of visual value is always in the form of: `[visual value of visualMap.min, visual value of visualMap.max]`. For example, `colorLightness: [0.8, 0.2]` means that the dataValue in series.data that equals to `visualMap.min` (if any) will be mapped to lightness `0.8`, and the dataValue that equals to `visualMap.max` (if any) will be mapped to lightness `0.2`, and other dataValues will be mapped by the linear calculateion based on the domain of `[visualMap.min, visualMap.max]` and the range of `[0.8, 0.2]`.
    
*   For visual channel `color`, array is used, like: `['#333', '#78ab23', 'blue']`, which means a color ribbon is formed based on the three color stops, and dataValues will be mapped to the ribbon. Specifically, the dataValue that equals to `visualMap.min` will be mapped onto `'#333'`, the dataValue that equals to `visualMap.max` will be mapped onto `'blue'`, and other dataValues will be piecewisely interpolated to get the final color.
    
*   For visual channel `symbol`, array is used, like: `['circle', 'rect', 'diamond']`, where the dataValue that equals to `visualMap.min` will be mapped onto `'circle'`, the dataValue that equals to `visualMap.max` will be mapped onto `'diamond'`, and other dataValues will be calculated based on the numerical distance to `visualMax.min` and to `visualMap.max`, and mapped onto one of `'circle'`, `'rect'`, `'diamond'`.
    

About the possible value range of visual value:

*   `opacity`、`colorAlpha`、`colorLightness`、`colorSaturation`、`visual value`
    
    possible value range is `[0, 1]`.
    
*   `colorHue`：
    
    possible value range is `[0, 360]`.
    
*   `color`：
    
    color can use RGB expression, like `'rgb(128, 128, 128)'`, or RGBA expression, like `'rgba(128, 128, 128, 0.5)'`, or Hex expression, like '#ccc'.
    
*   `symbol`：
    

Icon types provided by ECharts includes

`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`

It can be set to an image with `'image://url'` , in which URL is the link to an image, or `dataURI` of an image.

An image URL example:

```
'image://http://example.website/a/b.png'
```

A `dataURI` example:

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

For example:

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

  

* * *

**✦ Table Mapping to visual channel ✦**

`Table Mapping` could be used when dataValue (values in series.data, specified by [visualMap.dimension](../option.md#visualMap.dimension)) is enumerable and we intend to map them to visual value by looking up a given table.

For instance, in a [visualMap-piecewise](option.visualMap-piecewise.md) component, [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories) is set to `['Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin']`. And there is series.data: `['Demon Hunter', 'Death Knight', 'Warden', 'Paladin']`. Then we can establish the lookup rule for color: `color: {'Warden': 'red', 'Demon Hunter': 'black'}`, by which the `visualMap` component will map `dataValue` to `color`.

How to configure `visualMap` component to do `Table Mapping`?

When use [visualMap-piecewise](option.visualMap-piecewise.md) and [visualMap-piecewise.categories](option.visualMap-piecewise.md#categories)is set.

About the value of visual channel (visual value):

Generally `Object` or `Array` is used, for instance:

```
visualMap: {
    type: 'piecewise',
    // categories defines the items that to be displayed in visualMap-piecewise component.
    categories: [
        'Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin'
    ],
    inRange: {
        // visual value can be an Object：
        color: {
            'Warden': 'red',
            'Demon Hunter': 'black',
            '': 'green' // Blank string means that except 'Warden' and 'Demon Hunter',
                        // all other dataValues should be mapped to 'green'.
        }
        // visual value can also be a single value,
        // means that all dataValues should be mapped to the value.
        color: 'green',
        // visual value can also be a array, with the same length
        // as the array of categories and one-one mapping onto it.
        color: ['red', 'black', 'green', 'yellow', 'white']
    }
}
```

[Example](https://echarts.apache.org/examples/en/editor.html?c=doc-example/scatter-visualMap-categories&edit=1&reset=1)

**✦ How to modify configurations of visual encoding? ✦**

If you want to modify the configurations of visual encoding after chart been rendered (by invoke `setOption` to set the initial `option`), `setOption` can be used again to modify configurations of visual encoding. For instance:

```
chart.setOption({
    visualMap: {
        inRange: {color: ['red', 'blue']}
    }
});
```

Notice:

*   These visualMap properties (i.e. `inRange`, `outOfRange`, `target`, `controller`) do not support "merge", that is, anyone among them is modified when use `setOption` again, all of the original values of them will not be kept but erased. The "merge" brings complication in implemnentation and understanding, whereas "erase all" normalize the practise: once you want to modify some visual values, you should pass all of them to `setOption`, no matter they are to be changed.
    
*   This way, `getOption() -> modify the gotten option -> setOption(modified option)`, is strongly **not recommended**, for instance:
    

```
// Not recommended approach, regardless of its correctness:

var option = chart.getOption(); // Get the entire option.
option.visualMap.inRange.color = ['red', 'blue']; // modify color, which is what you want.

// You have to modify those two properties, otherwise you will not get what you want.
option.visualMap.target.inRange.color = ['red', 'blue'];
option.visualMap.controller.inRange.color = ['red', 'blue'];

chart.setOption(option); // set the modified option back.
// You should not use this approach, but use the
// approach demonstrated before this example.
```

**Notice:** There is default color `['#f6efa6', '#d88273', '#bf444c']` in `inRange` if you not set `inRange`. If you don't want it, set `inRange: {color: null}` to disable it.

## outOfRange
- **Type**: `Object`

Define visual channels that will mapped from dataValues that are **out of selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

See available configurations in [visualMap-continuous.inRange](option.visualMap-continuous.md#inRange)

## controller
- **Type**: `Object`

Property `inRange` and `outOfRange` can be set within property `controller`, which means those `inRange` and `outOfRange` are only used on the controller (`visualMap` component itself), but are not used on chart (series). This property is useful in some scenarios when the view of controller needs to be customized in detail.

### controller.inRange
- **Type**: `Object`

Define visual channels that will mapped from dataValues that are **in selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

See available configurations in [visualMap-continuous.inRange](option.visualMap-continuous.md#inRange)

### controller.outOfRange
- **Type**: `Object`

Define visual channels that will mapped from dataValues that are **out of selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

See available configurations in [visualMap-continuous.inRange](option.visualMap-continuous.md#inRange)

## zlevel
- **Type**: `number`
- **Default**: `0`

`zlevel` value of all graphical elements in .

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

## z
- **Type**: `number`
- **Default**: `4`

`z` value of all graphical elements in , which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

`z` has a lower priority to `zlevel`, and will not create new Canvas.

## left
- **Type**: `string|number`
- **Default**: `0`

Distance between visualMap component and the left side of the container.

`left` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

## top
- **Type**: `string|number`
- **Default**: `auto`

Distance between visualMap component and the top side of the container.

`top` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

## right
- **Type**: `string|number`
- **Default**: `auto`

Distance between visualMap component and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

## bottom
- **Type**: `string|number`
- **Default**: `0`

Distance between visualMap component and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

## coordinateSystem
- **Type**: `string`
- **Default**: `'none'`

Since `v6.0.0`

Specifies another coordinate system component on which this `visualMap-continuous` is laid out.

Options:

*   `null`/`undefined`/`'none'`
    
    Not laid out in any coordinate system; instead, laid out independently.
    

*   `'calendar'`
    
    Lay out based on a [calendar coordinate system](option.calendar.md). When multiple calendar coordinate systems exist within an ECharts instance, the corresponding system should be specified using [calendarIndex](option.visualMap-continuous.md#calendarIndex) or [calendarId](option.visualMap-continuous.md#calendarId).
    

*   `'matrix'`
    
    Lay out based on a [matrix coordinate system](option.matrix.md). When multiple matrix coordinate systems exist within an ECharts instance, the corresponding system should be specified using [matrixIndex](option.visualMap-continuous.md#matrixIndex) or [matrixId](option.visualMap-continuous.md#matrixId).
    

**Support for series and component layout on coordinate systems:**

The leftmost column lists the series and components that will be laid out (coordinate systems themselves are also components), and the topmost row lists the coordinate systems that can be laid out on.

|  | no coord sys | [grid](option.grid.md) (cartesian2d) | [polar](option.polar.md) | [geo](option.geo.md) | [singleAxis](option.singleAxis.md) | [radar](option.radar.md) | [parallel](option.parallel.md) | [calendar](option.calendar.md) | [matrix](option.matrix.md) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [grid](option.grid.md) (cartesian2d) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [polar](option.polar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [geo](option.geo.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [singleAxis](option.singleAxis.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [calendar](option.calendar.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [matrix](option.matrix.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| [series-line](option.series-line.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-bar](option.series-bar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-pie](option.series-pie.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-scatter](option.series-scatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-effectScatter](option.series-effectScatter.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [series-radar](option.series-radar.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ (✅ if via [radar](option.radar.md) coord sys) | ❌ (✅ if via [radar](option.radar.md) coord sys) |
| [series-tree](option.series-tree.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-treemap](option.series-treemap.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sunburst](option.series-sunburst.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-boxplot](option.series-boxplot.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-candlestick](option.series-candlestick.md) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-heatmap](option.series-heatmap.md) | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-map](option.series-map.md) | ✅ (create a geo coord sys exclusively) | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-parallel](option.series-parallel.md) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ (✅ if via [parallel](option.parallel.md) coord sys) | ❌ (✅ if via [parallel](option.parallel.md) coord sys) |
| [series-lines](option.series-lines.md) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [geo](option.geo.md)) | ❌ (✅ if via another coord sys like [geo](option.geo.md)) |
| [series-graph](option.series-graph.md) | ✅ (create a "view" coord sys exclusively) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-sankey](option.series-sankey.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-funnel](option.series-funnel.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-gauge](option.series-gauge.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [series-pictorialBar](option.series-pictorialBar.md) | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ (✅ if via another coord sys like [grid](option.grid.md)) | ❌ (✅ if via another coord sys like [grid](option.grid.md)) |
| [series-themeRiver](option.series-themeRiver.md) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ (✅ if via another coord sys like [singleAxis](option.singleAxis.md)) | ❌ (✅ if via another coord sys like [singleAxis](option.singleAxis.md)) |
| [series-chord](option.series-chord.md) | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |
| [title](option.title.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [legend](option.legend.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [dataZoom](../option.md#dataZoom) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [visualMap](../option.md#visualMap) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [toolbox](option.toolbox.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [timeline](option.timeline.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| [thumbnail](option.thumbnail.md) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

See also [visualMap-continuous.coordinateSystemUsage](option.visualMap-continuous.md#coordinateSystemUsage).

## coordinateSystemUsage
- **Type**: `string`
- **Default**: `'box'`

Since `v6.0.0`

Specify how to lay out this `visualMap-continuous` based on the specified [coordinateSystem](option.visualMap-continuous.md#coordinateSystem).

In most cases, there is no need to specify `coordinateSystemUsage`, unless the default behavior is unexpected.

Options:

*   `'data'`: **(Not applicable in [visualMap-continuous](option.visualMap-continuous.md))**
    
    Each data item of a series (e.g., each `series.data[i]`) is laid out separately based on the specified coordinate system. Currently no non-series component supports `coordinateSystemUsage: 'data'`.
    
*   `'box'`:
    
    The entire series or component is laid out as a whole based on the specified coordinate system - that is, the overall bounding rect or basic anchor point is calculated relative to the system.
    
    *   For example, a [grid component](option.grid.md) can be laid out in a [matrix coordinate system](option.matrix.md) or a [calendar coordinate system](option.calendar.md), where its layout rectangle is calculated by the specified [visualMap-continuous.coords](option.visualMap-continuous.md#coords) in that system. See example [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1).
    *   For example, a [pie series](option.series-pie.md) or a [chord series](option.series-chord.md) can be laid out in a [geo coordinate system](option.geo.md) or a [cartesian2d coordinate system](option.grid.md), where the center is calculated by the specified [series-pie.coords](option.series-pie.md#coords) or [series-pie.center](option.series-pie.md#center) in that system. See example [pie in geo](https://echarts.apache.org/examples/en/editor.html?c=map-iceland-pie&edit=1&reset=1).

See also [visualMap-continuous.coordinateSystem](option.visualMap-continuous.md#coordinateSystem).

## coord
- **Type**: `Array|number|string`

Since `v6.0.0`

When [coordinateSystemUsage](option.visualMap-continuous.md#coordinateSystemUsage) is `'box'`, `coord` is used as the input to the coordinate system and calculate the layout rectangle or anchor point.

Examples: [sparkline in matrix](https://echarts.apache.org/examples/en/editor.html?c=matrix-sparkline&edit=1&reset=1), [grpah in matrix](https://echarts.apache.org/examples/en/editor.html?c=doc-example/matrix-graph-box&edit=1&reset=1).

> Note: when [coordinateSystemUsage](option.visualMap-continuous.md#coordinateSystemUsage) is `'data'`, the input of coordinate system is `series.data[i]` rather than this `coord`.

The format this `coord` is defined by each coordinate system, and it's the same as the second parameter of [chart.convertToPixel](../api-parts/api.echartsInstance.md#convertToPixel).

## calendarIndex
- **Type**: `number`
- **Default**: `0`

Since `v6.0.0`

The index of the [calendar coordinate system](option.calendar.md) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## calendarId
- **Type**: `number`
- **Default**: `undefined`

Since `v6.0.0`

The id of the [calendar coordinate system](option.calendar.md) to base on. When mutiple `calendar` exist within an ECharts instance, use this to specify the corresponding `calendar`.

## matrixIndex
- **Type**: `number`
- **Default**: `0`

Since `v6.0.0`

The index of the [matrix coordinate system](option.matrix.md) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.

## matrixId
- **Type**: `number`
- **Default**: `undefined`

Since `v6.0.0`

The id of the [matrix coordinate system](option.matrix.md) to base on. When mutiple `matrix` exist within an ECharts instance, use this to specify the corresponding `matrix`.

## orient
- **Type**: `string`
- **Default**: `'vertical'`

How to layout the visualMap component, `'horizontal'` or `'vertical'`.

## padding
- **Type**: `number|Array`
- **Default**: `5`

The spacing around the visualMap-continuous content, specified in pixels (`px`). The default value for each side is `5`. Supports a single value, a 2-value array, or a 4-value array to configure each side.

Examples:

```
// Applies to all four sides
padding: 5
// [vertical, horizontal] -> top/bottom: 5, left/right: 10
padding: [5, 10]
// Clockwise order: [top, right, bottom, left]
padding: [
    5,  // top
    10, // right
    5,  // bottom
    10, // left
]
```

## backgroundColor
- **Type**: `Color`
- **Default**: `'rgba(0,0,0,0)'`

background color of visualMap component.

## borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

border color of visualMap component.

## borderWidth
- **Type**: `number`
- **Default**: `0`

border width of visualMap component, with unit: px.

## color
- **Type**: `Array`
- **Default**: `['#bf444c', '#d88273', '#f6efa6']`

This property remains only for compatibility with ECharts2, and is not recommended in ECharts3. It is recommended to configure color in [visualMap-continuous.inRange](option.visualMap-continuous.md#inRange), or [visualMap-continuous.outOfRange](option.visualMap-continuous.md#outOfRange) if needed.

If you persist in using it, the following issue should be noticed: the sequence of dataValues that are mapped to colorValues in property `color` is from `large` to `small`, whereas that in [visualMap-continuous.inRange](option.visualMap-continuous.md#inRange) or [visualMap-continuous.outOfRange](option.visualMap-continuous.md#outOfRange) is from `small` to `large`.

### textStyle.color
- **Type**: `Color`
- **Default**: `#333`

visualMap text color.

### textStyle.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

visualMap font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

### textStyle.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

visualMap font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

### textStyle.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

visualMap font family.

Can also be 'serif' , 'monospace', ...

### textStyle.fontSize
- **Type**: `number`
- **Default**: `12`

visualMap font size.

### textStyle.lineHeight
- **Type**: `number`

Line height of the text fragment.

If `lineHeight` is not set in `rich`, `lineHeight` in parent level will be used. For example:

```
{
    lineHeight: 56,
    rich: {
        a: {
            // `lineHeight` is not set, then it will be 56
        }
    }
}
```

### textStyle.width
- **Type**: `number`

Width of text block.

### textStyle.height
- **Type**: `number`

Height of text block.

### textStyle.textBorderColor
- **Type**: `Color`

Stroke color of the text.

### textStyle.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

### textStyle.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Stroke line type of the text.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `textBorderDashOffset` , we can make the line style more flexible.

For example：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

### textStyle.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### textStyle.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

### textStyle.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

### textStyle.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

### textStyle.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

### textStyle.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

### textStyle.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

## formatter
- **Type**: `string|Function`

the formatter tool for label.

*   If it was set as a `string`, it refers to a template, for instance: `aaaa{value}bbbb`, where `{value}` represents the value of the edge of the selected range.
    
*   If it was set as a `Function`, it refers to a callback function, for instance:
    

```
formatter: function (value) {
    return 'aaaa' + value + 'bbbb';
}
```

## handleIcon
- **Type**: `string`

Since `v5.0.0`

Icon of drag handle.

```
'M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z'
```

It can be set to an image with `'image://url'` , in which URL is the link to an image, or `dataURI` of an image.

An image URL example:

```
'image://http://example.website/a/b.png'
```

A `dataURI` example:

```
'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
```

Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about the format of the path. You may export vector paths from tools like Adobe

For example:

```
'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
```

## handleSize
- **Type**: `number|string`
- **Default**: `'120%'`

Since `v5.0.0`

Size of drag handle. It can be a percent string.

## handleStyle
- **Type**: `Object`

Since `v5.0.0`

Style of drag handle.

### handleStyle.color
- **Type**: `Color`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### handleStyle.borderColor
- **Type**: `Color`
- **Default**: `#fff`

border color, whose format is similar to that of `color`.

### handleStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

### handleStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### handleStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### handleStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### handleStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### handleStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### handleStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### handleStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### handleStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### handleStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### handleStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## indicatorIcon
- **Type**: `string`
- **Default**: `'circle'`

Icon of indicator.

Since `v5.0.0`

## indicatorSize
- **Type**: `number|string`
- **Default**: `'50%'`

Since `v5.0.0`

Size of indicator. It can be a percent string.

## indicatorStyle
- **Type**: `Object`

Style of indicator.

### indicatorStyle.color
- **Type**: `Color`

color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### indicatorStyle.borderColor
- **Type**: `Color`
- **Default**: `#fff`

border color, whose format is similar to that of `color`.

### indicatorStyle.borderWidth
- **Type**: `number`
- **Default**: `2`

border width. No border when it is set to be 0.

border width. No border when it is set to be 0.

### indicatorStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

border type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `borderDashOffset` , we can make the line style more flexible.

For example：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### indicatorStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### indicatorStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### indicatorStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### indicatorStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### indicatorStyle.shadowBlur
- **Type**: `number`
- **Default**: `2`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### indicatorStyle.shadowColor
- **Type**: `Color`
- **Default**: `rgba(0,0,0,0.2)`

Shadow color. Support same format as `color`.

### indicatorStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `1`

Offset distance on the horizontal direction of shadow.

### indicatorStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `1`

Offset distance on the vertical direction of shadow.

### indicatorStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.
