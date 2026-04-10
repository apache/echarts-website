# option.aria

## enabled
- **Type**: `boolean`
- **Default**: `false`

Whether or not aria is turned on. If not, the `label` or `decal` effect is not applied.

## label
- **Type**: `Object`

If [aria.enabled](option.aria.md#enabled) is set to `true`, `label` is enabled by default. When enabled, the description of the chart will be automatically and intelligently generated based on the chart, data, title, etc. Users can also modify the description through the configuration item.

**Example:**

```
option = {
    aria: {
        // The following lines can be omitted because label.enabled defaults to true.
        // label: {
        // enabled: true
        // },
        enabled: true
    },
    title: {
        text: 'User access sources for a site',
        x: 'center'
    },
    series: [
        {
            name: 'access source',
            type: 'pie',
            data: [
                { value: 335, name: 'Direct Access' },
                { value: 310, name: 'Email Marketing' },
                { value: 234, name: 'Affiliate Ads' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engine' }
            ]
        }
    ]
};
```

On the generated chart DOM, there is an `aria-label` attribute that allows the blind to understand the chart with the help of a reading device. Its value is:

> This is a chart of "Source of user access to a site." The chart type is a pie chart that indicates the source of the visit. The data is - direct access data is 335, mail marketing data is 310, union ad data is 234, video ad data is 135, search engine data is 1548.

The basic process for generating the description is that if [aria.enabled](option.aria.md#enabled) is set to `true` (not the default) and [aria.label.enabled](option.aria.md#label.enabled) is set to `true` (the default), then the accessibility description is generated. Otherwise it is not generated. If [aria.label.description](option.aria.md#label.description) is defined, it is used as the full description of the chart, otherwise the description is generated according to the template stitching. We provide a default algorithm for generating descriptions, and only if the generated descriptions are not quite right, you need to modify these templates, or even override them completely with `aria.label.description`.

When using the template, if [title.text](option.title.md#text)is set, it is used in [aria.label.general.withTitle](../option-parts/option.aria.md#label.general.withTitle). If [title.text](option.title.md#text) has no value, [aria.label.general.withoutTitle](../option-parts/option.aria.md#label.general.withoutTitle) is used instead. `aria.general.withTitle` supports a template `'{title}'`, which will be replaced with the chart title. This means, if `aria.general.withTitle` is set to be `'The chart title is {title}.'` and the chart title is `Price Distribution`, it will be interpreted into `'The chart title is Price Distribution.'`

After generating the title, the description of the series ([aria.label.series](../option-parts/option.aria.md#label.series)) and the description of the data for each series ([aria.label.data](../option-parts/option.aria.md#label.data)) are generated in turn.

The complete description generation process is:

![](../../documents/asset/img/echarts-aria.jpg)

### label.enabled
- **Type**: `boolean`
- **Default**: `true`

Whether or not to enable label generation for accessibility. When enabled, the attribute `aria-label` will be generated.

### label.description
- **Type**: `string`

By default, an algorithm is used to automatically generate a chart description, but if you want to fully customize it, you can set this value to a description. If it is set to `'This is a chart showing price changes'`, then the value of the `aria-label` attribute of the chart DOM is this string.

This configuration item is often used to display text that specifies a general description of the chart, when displaying individual data does not show the contents of the chart. For example, if the chart is a map with a large number of scattered points, the default algorithm can only show the locations of the data points and cannot convey the author's intent as a whole. In this case, you can specify `description` as what the author wants to say.

### label.general
- **Type**: `Object`

For the overall description of the chart.

#### label.general.withTitle
- **Type**: `string`
- **Default**: `'This is a chart about "{title}".'`

If the chart exists [title.text](option.title.md#text), then `withTitle` is used. This includes the template variable.

*   `{title}`: will be replaced with [title.text](option.title.md#text) of the chart.

#### label.general.withoutTitle
- **Type**: `string`
- **Default**: `'This is a chart,'`

If the chart does not have [title.text](option.title.md#text), then `withoutTitle` is used.

### label.series
- **Type**: `Object`

series-related configuration items.

#### label.series.maxCount
- **Type**: `number`
- **Default**: `10`

The maximum number of series in the description.

#### label.series.single
- **Type**: `Object`

The description used when the chart contains only one series.

##### label.series.single.prefix
- **Type**: `string`
- **Default**: `''`

Holistic descriptions for all series are shown before each series description. This includes template variables.

*   `{seriesCount}`: will be replaced with the number of series, where it is always 1.

##### label.series.single.withName
- **Type**: `string`
- **Default**: `' with type {seriesType} named {seriesName}.'`

This description is used if the series has the `name` attribute. This includes the template variable.

*   `{seriesName}`: will be replaced with `name` of the series.
*   `{seriesType}`: the name of the type that will be replaced with the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

##### label.series.single.withoutName
- **Type**: `string`
- **Default**: `' with type {seriesType}.'`

This description is used if the series has no `name` attribute. This includes the template variable.

*   `{seriesType}`: the name of the type that will be replaced with the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

#### label.series.multiple
- **Type**: `Object`

Description to use when the chart contains only multiple series.

##### label.series.multiple.prefix
- **Type**: `string`
- **Default**: `'. It consists of {seriesCount} series count.'`

A holistic description for all series is displayed before each series description. This includes the template variable.

*   `{seriesCount}`: will be replaced with the number of series.

##### label.series.multiple.withName
- **Type**: `string`
- **Default**: `' The {seriesId} series is a {seriesType} representing {seriesName}.`

This description is used if the series has the `name` attribute. This includes the template variable.

*   `{seriesName}`: will be replaced with `name` of the series.
*   `{seriesType}`: the name of the type that will be replaced with the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

##### label.series.multiple.withoutName
- **Type**: `string`
- **Default**: `' The {seriesId} series is a {seriesType}.'`

This description is used if the series has no `name` attribute. This includes the template variable.

*   `{seriesType}`: the name of the type that will be replaced with the name of the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

##### label.series.multiple.separator
- **Type**: `Object`

The separator between the series and the description of the series.

###### label.series.multiple.separator.middle
- **Type**: `string`
- **Default**: `';'`

Except for the separator after the last series.

###### label.series.multiple.separator.end
- **Type**: `string`
- **Default**: `'.'`

Delimiter after the last series.

### label.data
- **Type**: `Object`

Data-related configuration items.

#### label.data.maxCount
- **Type**: `number`
- **Default**: `10`

The maximum number of data occurrences per series in the description.

#### label.data.allData
- **Type**: `string`
- **Default**: `'whose data is --'`

Description to be used when all data is displayed. This item **doesn't** make all the data displayed. It can be achieved by setting [aria.data.maxCount](option.aria.md#data.maxCount) to `Number.MAX_VALUE`.

#### label.data.partialData
- **Type**: `string`
- **Default**: `'where the first {displayCnt} term is --'`

Descriptions used when only partial data is displayed. This includes template variables.

*   `{displayCnt}`: the number of data that will be replaced with the number of displays.

#### label.data.withName
- **Type**: `string`
- **Default**: `'The data for {name} is {value}'`

This description is used if the data has the `name` attribute. This includes the template variable.

*   `{name}`: `name` that will be replaced with the data.
*   `{value}`: the value that will be replaced with the data.

#### label.data.withoutName
- **Type**: `string`
- **Default**: `'{value}'`

This description is used if the data does not have the `name` attribute. This includes the template variable.

*   `{value}`: the value that will be replaced with the data.

#### label.data.excludeDimensionId
- **Type**: `Array`

Since `v5.6.0`

The specified column indexes are excluded in the data in [aria.label](option.aria.md#label).

#### label.data.separator
- **Type**: `Object`

The separator between data and data description.

##### label.data.separator.middle
- **Type**: `string`
- **Default**: `','`

The delimiter of the data except the last one.

##### label.data.separator.end
- **Type**: `string`
- **Default**: `''`

The delimiter after the last data.

Note that usually the last series is followed by the series `separator.end`, so `data.separator.end` is an empty string in most cases.

## decal
- **Type**: `Object`

Decal patterns are added to series data as an additional hint other than colors to help differentiate the data. It is easy to enabled the default decal patterns by enabling it:

```
aria: {
    enabled: true,
    decal: {
        show: true
    }
}
```

Most series types are supported, including: `'line'`, `'bar'`, `'pie'`, `'radar'`, `'treemap'`, `'sunburst'`, `'boxplot'`, `'sankey'`, `'funnel'`, `'gauge'`, `'pictorialBar'`, `'themeRiver'`, `'custom'` and so on. Among them, some series have no filling color by default (such as `'line'`, `'radar'`, `'boxplot'`), which take effect only if the `'areaStyle'` is set.

### decal.show
- **Type**: `boolean`
- **Default**: `false`

Whether or not to display the decal pattern is not shown by default. If you want to display the applique, you need to make sure [aria.enabled](option.aria.md#enabled) and `aria.decal.show` are both `true`.

### decal.decals
- **Type**: `Object|Array`

The style of the decal pattern. If it is an `Object` type, it means all data will have the same style, if it is an array, then each item in the array will have one style and the data will be looped through the array in order.

#### decal.decals.symbol
- **Type**: `string|Array`
- **Default**: `'rect'`

The symbol type of the decal. If it is in the type of `string[]`, it means the symbols are used one by one.

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

#### decal.decals.symbolSize
- **Type**: `number`
- **Default**: `1`

Range of values: `0` to `1`, representing the size of symbol relative to decal.

#### decal.decals.symbolKeepAspect
- **Type**: `boolean`
- **Default**: `true`

Whether or not to keep the aspect ratio of the pattern.

#### decal.decals.color
- **Type**: `string`
- **Default**: `'rgba(0, 0, 0, 0.2)'`

For the color of the decal pattern, it is recommended to use a translucent color, which can be superimposed on the color of the series itself.

#### decal.decals.backgroundColor
- **Type**: `string`

The background color of the decal will be over the color of the series itself, under the decal pattern.

#### decal.decals.dashArrayX
- **Type**: `number|Array`
- **Default**: `5`

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayX` controls the horizontal pattern pattern. When its value is of type `number` or `number[]`, it is similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

*   If it is of type `number`, it means that the pattern and the blank space are of this value respectively. For example, `5` means the pattern with width 5 is displayed first, then 5 pixels empty, then the pattern with width 5 is displayed...
    
*   In the case of `number[]` type, it means that the pattern and empty space are loops of an array of values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels wide, then 10 pixels empty, then the pattern is 2 pixels wide, then 6 pixels empty, then the pattern is 5 pixels wide...
    
*   If of type `(number | number[])[]`, it means that each row is a loop with an array of values for the pattern and blank space. For example: `[10, [2, 5]]` means that the first line will be 10 pixels by 10 pixels and empty space, the second line will be 2 pixels by 2 pixels and empty space, and the third line will be 10 pixels by 10 pixels and empty space...
    

This interface can be better understood with the following examples.

#### decal.decals.dashArrayY
- **Type**: `number|Array`
- **Default**: `5`

The basic pattern of the decal pattern is an infinite loop in the form of `Pattern - Blank - Pattern - Blank - Pattern - Blank` both horizontally and vertically, respectively. By setting the length of each pattern and blank, complex pattern effects can be achieved.

`dashArrayY` controls the horizontal pattern pattern. Similar to [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray).

*   If it is a `number` type, it means the pattern and the blank are each of this value. For example, `5` means that the pattern with a height of 5 is displayed first, then 5 pixels empty, then the pattern with a height of 5 is displayed...
    
*   In the case of `number[]` type, it means that the pattern and empty space are loops of sequential array values. For example: `[5, 10, 2, 6]` means the pattern is 5 pixels high, then 10 pixels empty, then the pattern is 2 pixels high, then 6 pixels empty, then the pattern is 5 pixels high...
    

This interface can be better understood with the following examples.

#### decal.decals.rotation
- **Type**: `number`
- **Default**: `0`

The overall rotation angle (in radians) of the pattern, in the range from \`-Math.

#### decal.decals.maxTileWidth
- **Type**: `number`
- **Default**: `512`

The upper limit of the width of the generated pattern before it is duplicated. Usually this value is not necessary, but you can try to increase it if you notice discontinuous seams in the pattern when it repeats.

#### decal.decals.maxTileHeight
- **Type**: `number`
- **Default**: `512`

The upper limit of the height of the generated pattern before it repeats. This value is usually not necessary to set, but you can try to increase it if you find that the pattern has discontinuous seams when it is repeated.
