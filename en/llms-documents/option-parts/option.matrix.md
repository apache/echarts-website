# option.matrix

## id
- **Type**: `string`

Component ID, not specified by default. If specified, it can be used to refer the component in option or API.

## zlevel
- **Type**: `number`
- **Default**: `0`

`zlevel` value of all graphical elements in .

`zlevel` is used to make layers with Canvas. Graphical elements with different `zlevel` values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate `zlevel`. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.

Canvases with bigger `zlevel` will be placed on Canvases with smaller `zlevel`.

## z
- **Type**: `number`
- **Default**: `2`

`z` value of all graphical elements in , which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

`z` has a lower priority to `zlevel`, and will not create new Canvas.

## left
- **Type**: `string|number`
- **Default**: `10%`

Distance between undefined component and the left side of the container.

`left` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`; and it can also be `'left'`, `'center'`, or `'right'`.

If the `left` value is set to be `'left'`, `'center'`, or `'right'`, then the component will be aligned automatically based on position.

## top
- **Type**: `string|number`
- **Default**: `10%`

Distance between undefined component and the top side of the container.

`top` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`; and it can also be `'top'`, `'middle'`, or `'bottom'`.

If the `top` value is set to be `'top'`, `'middle'`, or `'bottom'`, then the component will be aligned automatically based on position.

## right
- **Type**: `string|number`
- **Default**: `'auto'`

Distance between undefined component and the right side of the container.

`right` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

Adaptive by default.

## bottom
- **Type**: `string|number`
- **Default**: `'auto'`

Distance between undefined component and the bottom side of the container.

`bottom` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

Adaptive by default.

## width
- **Type**: `string|number`
- **Default**: `'auto'`

Width of matrix component. Adaptive by default.

`width` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

## height
- **Type**: `string|number`
- **Default**: `'auto'`

Height of matrix component. Adaptive by default.

`height` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

## x
- **Type**: `Object`

Since `v6.0.0`

X-axis header region.

### x.show
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Determines whether to display the header row(in `matrix.x`)/column(in `matrix.y`).

### x.data
- **Type**: `Array`

Since `v6.0.0`

Specifies the data for the x-axis cells. i.e., defined the column/row.

```
// Data for a single row
data: ['A', 'B', 'C', 'D', 'E']

// Or if column/row names is not of concern, simply
data: Array(5).fill(null) // Five columns or rows
// Note: DO NOT support array with empty slots：
// data: Array(5) // ❌

// Data in a tree structure
data: [{
    value: 'A',
    children: [
        {
            value: 'A1',
            children: [
                {value: 'A1-1'},
                {value: 'A1-2'}
            ]
        },
        {value: 'A2'}
    ]
}, {
    value: 'B',
    children: [
        {value: 'B1'},
        {value: 'B2'}
    ]
}]
```

If [matrix.x.data](option.matrix.md#x.data) is not provided, it will be collected from `series.data` or `dataset.soruce`.

See [matrix data collection example](https://echarts.apache.org/examples/en/editor.html?c=matrix-mini-bar-data-collection&edit=1&reset=1).

And in this case [series.encode](option.series-scatter.md#encode) can be used to specify the dimension from which value is collected. For example,

```
var option = {
    // no matrix.x/y.data is specified;
    // so collect from series.data or dataset.source (if any)
    matrix: {},
    series: {
        type: 'scatter',
        coordinateSystem: 'matrix',
        // Collect values from dimension index 3 and 2.
        encode: {x: 3, y: 2},
        data: [
            // 0   1    2    3    (dimension index)
            [100, 111, 122, 133],
            [200, 211, 222, 233],
        ]
    }
}
```

#### x.data.value
- **Type**: `string|number`

Since `v6.0.0`

The text in the header cell. Can also be used as a index of this column or row. Optional. If not specified, auto generate a text.

#### x.data.children
- **Type**: `Array`

Since `v6.0.0`

See [matrix.x.data](option.matrix.md#x.data).

#### x.data.size
- **Type**: `number`

Since `v6.0.0`

**\[\[The rule of cell size\]\]**

*   option `levelSize`
    *   It specifies the size of all cells in a row or a column.
        *   For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        *   For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    *   It can be declared in:
        *   `matrix.levelSize` specifies the default size of every columns or rows.
        *   `matrix.levels[i].levelSize` specifies the size of a certain column or row.
*   option `size`
    *   It specifies the size of a single cell.
        *   For `matrix.x`, it refers to the cell width.
        *   For `matrix.y`, it refers to the cell height.
    *   It can be declared in:
        *   `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

*   Unspecified(default): The width or height is evenly distributed.
*   `number`: Represents pixel value.
*   `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:

```
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

### x.label
- **Type**: `Object`

Since `v6.0.0`

Text label of x-axis cells, to explain some data information about graphic item like value, name and so on. `label` is placed under `itemStyle` in ECharts 2.x. In ECharts 3, to make the configuration structure flatter, `label`is taken to be at the same level with `itemStyle`, and has `emphasis` as `itemStyle` does.

#### x.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show label.

#### x.label.position
- **Type**: `string|Array`

Label position.

**Followings are the options:**

*   \[x, y\]
    
    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box. For example:
    
    ```
      // Absolute pixel values
      position: [10, 10],
      // Relative percentage
      position: ['50%', '50%']
    ```
    
*   'top'
    
*   'left'
*   'right'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideBottomLeft'
*   'insideTopRight'
*   'insideBottomRight'

See: [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position).

#### x.label.distance
- **Type**: `number`
- **Default**: `5`

Distance to the host graphic element.

It is valid only when `position` is string value (like `'top'`、`'insideRight'`).

See: [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position).

#### x.label.rotate
- **Type**: `number`

Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.

See: [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation).

#### x.label.offset
- **Type**: `Array`

Whether to move text slightly. For example: `[30, 40]` means move `30` horizontally and move `40` vertically.

#### x.label.formatter
- **Type**: `string|Function`

Data label formatter, which supports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Model variation includes:

*   `{a}`: series name.
*   `{b}`: the name of a data item.
*   `{c}`: the value of a data item.
*   `{@xxx}`: the value of a dimension named `'xxx'`, for example, `{@product}` refers the value of `'product'` dimension.
*   `{@[n]}`: the value of a dimension at the index of `n`, for example, `{@[3]}` refers the value at dimensions\[3\].

**example:**

```
formatter: '{b}: {@score}'
```

**Callback function**

Callback function is in form of:

```
(params: Object|Array) => string
```

where `params` is the single dataset needed by formatter, which is formed as:

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

```
dataset: {
    source: [
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

```
dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### x.label.color
- **Type**: `Color`
- **Default**: `#333`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### x.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### x.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### x.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### x.label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

#### x.label.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

#### x.label.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

#### x.label.lineHeight
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

#### x.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### x.label.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### x.label.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

#### x.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

#### x.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### x.label.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

#### x.label.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#### x.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

#### x.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

#### x.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

#### x.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

#### x.label.width
- **Type**: `number`

Width of text block.

#### x.label.height
- **Type**: `number`

Height of text block.

#### x.label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### x.label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### x.label.textBorderType
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

#### x.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### x.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### x.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### x.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### x.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### x.label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### x.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### x.label.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

###### x.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### x.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### x.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### x.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

###### x.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

###### x.label.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

###### x.label.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

###### x.label.rich.<style_name>.lineHeight
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

###### x.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### x.label.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### x.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

###### x.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

###### x.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### x.label.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

###### x.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

###### x.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

###### x.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

###### x.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

###### x.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

###### x.label.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

###### x.label.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

###### x.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### x.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

###### x.label.rich.<style_name>.textBorderType
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

###### x.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### x.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

###### x.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

###### x.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

###### x.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### x.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### x.itemStyle
- **Type**: `Object`

Since `v6.0.0`

Graphic style of x-axis cells, `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.

#### x.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

x-axis cells color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### x.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

x-axis cells border color, whose format is similar to that of `color`.

#### x.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

x-axis cells border width. No border when it is set to be 0.

x-axis cells border width. No border when it is set to be 0.

#### x.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

x-axis cells border type.

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

#### x.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### x.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### x.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### x.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### x.itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### x.itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### x.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### x.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### x.itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### x.silent
- **Type**: `boolean`
- **Default**: `false`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

### x.cursor
- **Type**: `string`

Mouse cursor when hovering on the cell.

### x.z2
- **Type**: `number`

Specify the z-index (z-order) of the cell. Used when style conflict - especially for thick border style.

### x.levelSize
- **Type**: `number|string`

Since `v6.0.0`

**\[\[The rule of cell size\]\]**

*   option `levelSize`
    *   It specifies the size of all cells in a row or a column.
        *   For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        *   For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    *   It can be declared in:
        *   `matrix.levelSize` specifies the default size of every columns or rows.
        *   `matrix.levels[i].levelSize` specifies the size of a certain column or row.
*   option `size`
    *   It specifies the size of a single cell.
        *   For `matrix.x`, it refers to the cell width.
        *   For `matrix.y`, it refers to the cell height.
    *   It can be declared in:
        *   `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

*   Unspecified(default): The width or height is evenly distributed.
*   `number`: Represents pixel value.
*   `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:

```
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

### x.levels
- **Type**: `Array`

Since `v6.0.0`

Settings for each column(in `matrix.x`) or row(in `matrix.y`). The first element represents the first column/row, and so on.

*   If any item in the array is `null`/`undefined`, it means using the default value.
*   Otherwise any item in the array should be an object, such as `{levelSize: number}`.

For example

```
matrix: {
    x: {
        level: [null, {levelSize: '20%'}]
        // The second column width should be 20% of
        // the matrix width.
        // The first column has no specific setting.
    },
    // ...
},
```

#### x.levels.levelSize
- **Type**: `number|string`

Since `v6.0.0`

**\[\[The rule of cell size\]\]**

*   option `levelSize`
    *   It specifies the size of all cells in a row or a column.
        *   For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        *   For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    *   It can be declared in:
        *   `matrix.levelSize` specifies the default size of every columns or rows.
        *   `matrix.levels[i].levelSize` specifies the size of a certain column or row.
*   option `size`
    *   It specifies the size of a single cell.
        *   For `matrix.x`, it refers to the cell width.
        *   For `matrix.y`, it refers to the cell height.
    *   It can be declared in:
        *   `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

*   Unspecified(default): The width or height is evenly distributed.
*   `number`: Represents pixel value.
*   `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:

```
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

### x.dividerLineStyle
- **Type**: `Object`

Since `v6.0.0`

Header divider line style.

#### x.dividerLineStyle.color
- **Type**: `Color`
- **Default**: `'#aaa'`

header dividerLine color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### x.dividerLineStyle.width
- **Type**: `number`
- **Default**: `1`

header divider line width.

#### x.dividerLineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

line type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `dashOffset` , we can make the line style more flexible.

For example：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### x.dividerLineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### x.dividerLineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### x.dividerLineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### x.dividerLineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### x.dividerLineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### x.dividerLineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### x.dividerLineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### x.dividerLineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### x.dividerLineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## y
- **Type**: `Object`

Since `v6.0.0`

Y-axis header region.

### y.show
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Determines whether to display the header row(in `matrix.x`)/column(in `matrix.y`).

### y.data
- **Type**: `Array`

Since `v6.0.0`

Specifies the data for the y-axis cells. i.e., defined the column/row.

```
// Data for a single row
data: ['A', 'B', 'C', 'D', 'E']

// Or if column/row names is not of concern, simply
data: Array(5).fill(null) // Five columns or rows
// Note: DO NOT support array with empty slots：
// data: Array(5) // ❌

// Data in a tree structure
data: [{
    value: 'A',
    children: [
        {
            value: 'A1',
            children: [
                {value: 'A1-1'},
                {value: 'A1-2'}
            ]
        },
        {value: 'A2'}
    ]
}, {
    value: 'B',
    children: [
        {value: 'B1'},
        {value: 'B2'}
    ]
}]
```

If [matrix.y.data](option.matrix.md#y.data) is not provided, it will be collected from `series.data` or `dataset.soruce`.

See [matrix data collection example](https://echarts.apache.org/examples/en/editor.html?c=matrix-mini-bar-data-collection&edit=1&reset=1).

And in this case [series.encode](option.series-scatter.md#encode) can be used to specify the dimension from which value is collected. For example,

```
var option = {
    // no matrix.x/y.data is specified;
    // so collect from series.data or dataset.source (if any)
    matrix: {},
    series: {
        type: 'scatter',
        coordinateSystem: 'matrix',
        // Collect values from dimension index 3 and 2.
        encode: {x: 3, y: 2},
        data: [
            // 0   1    2    3    (dimension index)
            [100, 111, 122, 133],
            [200, 211, 222, 233],
        ]
    }
}
```

#### y.data.value
- **Type**: `string|number`

Since `v6.0.0`

The text in the header cell. Can also be used as a index of this column or row. Optional. If not specified, auto generate a text.

#### y.data.children
- **Type**: `Array`

Since `v6.0.0`

See [matrix.y.data](option.matrix.md#y.data).

#### y.data.size
- **Type**: `number`

Since `v6.0.0`

**\[\[The rule of cell size\]\]**

*   option `levelSize`
    *   It specifies the size of all cells in a row or a column.
        *   For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        *   For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    *   It can be declared in:
        *   `matrix.levelSize` specifies the default size of every columns or rows.
        *   `matrix.levels[i].levelSize` specifies the size of a certain column or row.
*   option `size`
    *   It specifies the size of a single cell.
        *   For `matrix.x`, it refers to the cell width.
        *   For `matrix.y`, it refers to the cell height.
    *   It can be declared in:
        *   `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

*   Unspecified(default): The width or height is evenly distributed.
*   `number`: Represents pixel value.
*   `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:

```
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

### y.label
- **Type**: `Object`

Since `v6.0.0`

Text label of y-axis cells, to explain some data information about graphic item like value, name and so on. `label` is placed under `itemStyle` in ECharts 2.x. In ECharts 3, to make the configuration structure flatter, `label`is taken to be at the same level with `itemStyle`, and has `emphasis` as `itemStyle` does.

#### y.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show label.

#### y.label.position
- **Type**: `string|Array`

Label position.

**Followings are the options:**

*   \[x, y\]
    
    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box. For example:
    
    ```
      // Absolute pixel values
      position: [10, 10],
      // Relative percentage
      position: ['50%', '50%']
    ```
    
*   'top'
    
*   'left'
*   'right'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideBottomLeft'
*   'insideTopRight'
*   'insideBottomRight'

See: [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position).

#### y.label.distance
- **Type**: `number`
- **Default**: `5`

Distance to the host graphic element.

It is valid only when `position` is string value (like `'top'`、`'insideRight'`).

See: [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position).

#### y.label.rotate
- **Type**: `number`

Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.

See: [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation).

#### y.label.offset
- **Type**: `Array`

Whether to move text slightly. For example: `[30, 40]` means move `30` horizontally and move `40` vertically.

#### y.label.formatter
- **Type**: `string|Function`

Data label formatter, which supports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Model variation includes:

*   `{a}`: series name.
*   `{b}`: the name of a data item.
*   `{c}`: the value of a data item.
*   `{@xxx}`: the value of a dimension named `'xxx'`, for example, `{@product}` refers the value of `'product'` dimension.
*   `{@[n]}`: the value of a dimension at the index of `n`, for example, `{@[3]}` refers the value at dimensions\[3\].

**example:**

```
formatter: '{b}: {@score}'
```

**Callback function**

Callback function is in form of:

```
(params: Object|Array) => string
```

where `params` is the single dataset needed by formatter, which is formed as:

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

```
dataset: {
    source: [
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

```
dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### y.label.color
- **Type**: `Color`
- **Default**: `#333`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### y.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### y.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### y.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### y.label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

#### y.label.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

#### y.label.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

#### y.label.lineHeight
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

#### y.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### y.label.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### y.label.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

#### y.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

#### y.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### y.label.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

#### y.label.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#### y.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

#### y.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

#### y.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

#### y.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

#### y.label.width
- **Type**: `number`

Width of text block.

#### y.label.height
- **Type**: `number`

Height of text block.

#### y.label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### y.label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### y.label.textBorderType
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

#### y.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### y.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### y.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### y.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### y.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### y.label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### y.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### y.label.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

###### y.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### y.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### y.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### y.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

###### y.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

###### y.label.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

###### y.label.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

###### y.label.rich.<style_name>.lineHeight
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

###### y.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### y.label.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### y.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

###### y.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

###### y.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### y.label.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

###### y.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

###### y.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

###### y.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

###### y.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

###### y.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

###### y.label.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

###### y.label.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

###### y.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### y.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

###### y.label.rich.<style_name>.textBorderType
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

###### y.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### y.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

###### y.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

###### y.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

###### y.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### y.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### y.itemStyle
- **Type**: `Object`

Since `v6.0.0`

Graphic style of y-axis cells, `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.

#### y.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

y-axis cells color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### y.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

y-axis cells border color, whose format is similar to that of `color`.

#### y.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

y-axis cells border width. No border when it is set to be 0.

y-axis cells border width. No border when it is set to be 0.

#### y.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

y-axis cells border type.

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

#### y.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### y.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### y.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### y.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### y.itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### y.itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### y.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### y.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### y.itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### y.silent
- **Type**: `boolean`
- **Default**: `false`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

### y.cursor
- **Type**: `string`

Mouse cursor when hovering on the cell.

### y.z2
- **Type**: `number`

Specify the z-index (z-order) of the cell. Used when style conflict - especially for thick border style.

### y.levelSize
- **Type**: `number|string`

Since `v6.0.0`

**\[\[The rule of cell size\]\]**

*   option `levelSize`
    *   It specifies the size of all cells in a row or a column.
        *   For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        *   For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    *   It can be declared in:
        *   `matrix.levelSize` specifies the default size of every columns or rows.
        *   `matrix.levels[i].levelSize` specifies the size of a certain column or row.
*   option `size`
    *   It specifies the size of a single cell.
        *   For `matrix.x`, it refers to the cell width.
        *   For `matrix.y`, it refers to the cell height.
    *   It can be declared in:
        *   `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

*   Unspecified(default): The width or height is evenly distributed.
*   `number`: Represents pixel value.
*   `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:

```
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

### y.levels
- **Type**: `Array`

Since `v6.0.0`

Settings for each column(in `matrix.x`) or row(in `matrix.y`). The first element represents the first column/row, and so on.

*   If any item in the array is `null`/`undefined`, it means using the default value.
*   Otherwise any item in the array should be an object, such as `{levelSize: number}`.

For example

```
matrix: {
    x: {
        level: [null, {levelSize: '20%'}]
        // The second column width should be 20% of
        // the matrix width.
        // The first column has no specific setting.
    },
    // ...
},
```

#### y.levels.levelSize
- **Type**: `number|string`

Since `v6.0.0`

**\[\[The rule of cell size\]\]**

*   option `levelSize`
    *   It specifies the size of all cells in a row or a column.
        *   For `matrix.x`, it refers to the cell height of a row ("level" refers to a row).
        *   For `matrix.y`, it refers to the cell width of a column ("level" refers to a column).
    *   It can be declared in:
        *   `matrix.levelSize` specifies the default size of every columns or rows.
        *   `matrix.levels[i].levelSize` specifies the size of a certain column or row.
*   option `size`
    *   It specifies the size of a single cell.
        *   For `matrix.x`, it refers to the cell width.
        *   For `matrix.y`, it refers to the cell height.
    *   It can be declared in:
        *   `matrix.x/y.data[i].size`

The value of `levelSize` or `size` can be:

*   Unspecified(default): The width or height is evenly distributed.
*   `number`: Represents pixel value.
*   `string`: Percentage value (e.g., `'33%'`), representing the percentage relative to the width (in `matrix.x`) or height (in `matrix.y`) of the matrix.

For example:

```
{
    matrix: {
        x: {
            // The height of the second row is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other row height are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The width of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell width are evenly distributed.
                // ...
            ]
        },
        y: {
            // The width of the second column is 10% of the matrix width,
            levels: [undefined, {levelSize: '10%'}]
            // And the other column width are evenly distributed.
            levelSize: undefined,
            data: [
                {
                    // The height of the first cell is 30 pixel.
                    size: 30
                },
                // And the other cell height are evenly distributed.
                // ...
            ]
        },
        // ...
    },
}
```

### y.dividerLineStyle
- **Type**: `Object`

Since `v6.0.0`

Header divider line style.

#### y.dividerLineStyle.color
- **Type**: `Color`
- **Default**: `'#aaa'`

header dividerLine color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### y.dividerLineStyle.width
- **Type**: `number`
- **Default**: `1`

header divider line width.

#### y.dividerLineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

line type.

Possible values are:

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

Since `v5.0.0`, it can also be a number or a number array to specify the [dash array](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) of the line. With `dashOffset` , we can make the line style more flexible.

For example：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### y.dividerLineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `type` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### y.dividerLineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### y.dividerLineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `miterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### y.dividerLineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `join` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### y.dividerLineStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### y.dividerLineStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### y.dividerLineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### y.dividerLineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### y.dividerLineStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## body
- **Type**: `Object`

Since `v6.0.0`

Body cells, which are the ones except header cells.

### body.data
- **Type**: `Array`

Since `v6.0.0`

Only specify some special cell definitions for Body cells.

```
data: [
    {
        coord: [[3, 5], [1, 2]], // Required to locate the cell.
                                 // See the rule below.
        value: 'some_text',      // Optional. The text to display.
        mergeCells: true,        // Optional. `false` by default.
    },
    {
        // ...
    },
    // ...
]
```

Cell locating and reference: see the description in [matrix.body.data](option.matrix.md#body.data.coord)

#### body.data.coord
- **Type**: `Array`

**Body/Corner Cell Locating**

The rule is uniformly applied, such as, in `matrix.dataToPoint` and `matrix.dataToLayout` and `xxxComponent.coord`.

Suppose the matrix.x/y dimensions (header) are defined as:

```
matrix: {
    x: [{ value: 'Xa0', children: ['Xb0', 'Xb1'] }, 'Xa1'],
    y: [{ value: 'Ya0', children: ['Yb0', 'Yb1'] }],
}
```

```
 -----------------------------------------
 |       |       |     Xa0       |       |
 |-------+-------+---------------|  Xa1  |
 |cornerQ|cornerP|  Xb0  |  Xb1  |       |
 |-------+-------+-------+-------+--------
 |       |  Yb0  | bodyR | bodyS |       |
 |  Ya0  |-------+-------+---------------|
 |       |  Yb1  |       |     bodyT     |
 |---------------|------------------------
```

*   `Locator number`:
    *   The term `locator` refers to a integer number to locate cells on x or y direction.
    *   Use the top-left cell of the body as the origin point `(0, 0)`,
        *   the non-negative locator indicates the right/bottom of the origin point;
        *   the negative locator indicates the left/top of the origin point.
*   `Ordinal number` (`OrdinalNumber`):
    *   This term follows the same meaning as that in category axis of cartesian. They are non-negative integer, designating each string `matrix.x.data[i].value`/`matrix.y.data[i].value`. `'Xb0'`, `'Xb2'`, `'Xa1'`, `'Xa0'` are assigned with the ordinal numbers `0`, `1`, `2`, `3`. For every leaf dimension cell, `OrdinalNumber` and `MatrixXYLocator` is the same.
*   A single cell or multiple cells can be determined/located by an array of `locator number` or `ordinal number` or the original `value` string as follows:
    *   e.g., the body cell `bodyS` above can be located by:
        *   `coord: [1, 0]` (Use non-negative integer)
        *   `coord: ['Xb1', 'Yb0']` (Use the `value` properties in `matrix.x/y.data`)
        *   `coord: ['Xb1', 0]` (mix them)
    *   e.g., the corner cell `cornerQ` above can be located by:
        *   `coord: [-2, -1]` (negative `MatrixXYLocator`)
        *   But it is NOT supported to use `coord: ['Y1_0', 'X1_0']` (XY transposed form) here.
    *   The dimension (header) cell can be located by negative integers. For example:
        *   The center of the node `'Ya0'` can be located by `[-2, 'Ya0']`.
    *   Cross cells: multiple cells can be located. e.g., if using `[['Xb0', 'Xb1'], ['Yb0']]`, or using a non-leaf dimension cell to locate, such as `['Xa0', 'Yb0']`, it returns only according to the center of the dimension cells, regardless of the body span. (therefore, the result can be on the boundary of two body cells.) And the ordinal number assigned to 'Xa0' is 3, thus input `[3, 'Yb0']` get the some result.
*   In a nutshell, **The formatter of `matrix.data.coord`** is as follows:
    *   `[2, 8]` indicates a cell.
    *   `[[2, 5], 8]` indicates a rect of cells in x range of `2~5` and y `8`.
    *   `[[2, 5], [7, 8]]` indicates a rect of cells in x range of `2~5` and y range of `7~8`.
    *   `['aNonLeaf', 8]` indicates a rect of cells in x range of `aNonLeaf` and y `8`.
    *   `[2, null/undefined/NaN]` means y is the entire column (only work on `coordClamp: true`).
    *   `[null/undefined/NaN, 8]` is the opposite (only work on `coordClamp: true`).
    *   `[[2, 5], null/undefined/NaN]` indicates a x range of `2~5` and y is the entire column (only work on `coordClamp: true`)..
*   **NOTICE**
    
    *   `bodyR` above is `[0, 0]`\*\*.
    *   The formatter of `matrix.data.coord` is `MatrixCoordRangeOption[]` as follows.
*   The API `dataToPoint` and `dataToLayout` also uses this locating rule:
    
    *   Input `['Xa1', 'Yb1']` to `dataToPoint` will get a point in the center of "bodyT".
    *   Input `['Xa1', 'Yb1']` to `dataToLayout` will get a rect of the "bodyT".

#### body.data.coordClamp
- **Type**: `boolean`

*   `true`: `matrix.body/corner.data[i].coord` can use `[null/undefined/NaN/invalid_values, xxx]` or `[xxx, null/undefined/NaN/invalid_values]` to refer to a entire row/column.
*   `false`: Disallow that. And an error message will be printed in dev mode when such values are used.

#### body.data.mergeCells
- **Type**: `boolean`

Body cells or corner cells can be merged.

#### body.data.value
- **Type**: `string|number`

Text to display in the cell.

### body.label
- **Type**: `Object`

Since `v6.0.0`

Text label of Body cells, to explain some data information about graphic item like value, name and so on. `label` is placed under `itemStyle` in ECharts 2.x. In ECharts 3, to make the configuration structure flatter, `label`is taken to be at the same level with `itemStyle`, and has `emphasis` as `itemStyle` does.

#### body.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show label.

#### body.label.position
- **Type**: `string|Array`

Label position.

**Followings are the options:**

*   \[x, y\]
    
    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box. For example:
    
    ```
      // Absolute pixel values
      position: [10, 10],
      // Relative percentage
      position: ['50%', '50%']
    ```
    
*   'top'
    
*   'left'
*   'right'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideBottomLeft'
*   'insideTopRight'
*   'insideBottomRight'

See: [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position).

#### body.label.distance
- **Type**: `number`
- **Default**: `5`

Distance to the host graphic element.

It is valid only when `position` is string value (like `'top'`、`'insideRight'`).

See: [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position).

#### body.label.rotate
- **Type**: `number`

Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.

See: [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation).

#### body.label.offset
- **Type**: `Array`

Whether to move text slightly. For example: `[30, 40]` means move `30` horizontally and move `40` vertically.

#### body.label.formatter
- **Type**: `string|Function`

Data label formatter, which supports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Model variation includes:

*   `{a}`: series name.
*   `{b}`: the name of a data item.
*   `{c}`: the value of a data item.
*   `{@xxx}`: the value of a dimension named `'xxx'`, for example, `{@product}` refers the value of `'product'` dimension.
*   `{@[n]}`: the value of a dimension at the index of `n`, for example, `{@[3]}` refers the value at dimensions\[3\].

**example:**

```
formatter: '{b}: {@score}'
```

**Callback function**

Callback function is in form of:

```
(params: Object|Array) => string
```

where `params` is the single dataset needed by formatter, which is formed as:

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

```
dataset: {
    source: [
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

```
dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### body.label.color
- **Type**: `Color`
- **Default**: `#333`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### body.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### body.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### body.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### body.label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

#### body.label.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

#### body.label.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

#### body.label.lineHeight
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

#### body.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### body.label.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### body.label.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

#### body.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

#### body.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### body.label.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

#### body.label.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#### body.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

#### body.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

#### body.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

#### body.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

#### body.label.width
- **Type**: `number`

Width of text block.

#### body.label.height
- **Type**: `number`

Height of text block.

#### body.label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### body.label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### body.label.textBorderType
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

#### body.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### body.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### body.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### body.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### body.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### body.label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### body.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### body.label.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

###### body.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### body.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### body.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### body.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

###### body.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

###### body.label.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

###### body.label.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

###### body.label.rich.<style_name>.lineHeight
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

###### body.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### body.label.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### body.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

###### body.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

###### body.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### body.label.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

###### body.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

###### body.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

###### body.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

###### body.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

###### body.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

###### body.label.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

###### body.label.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

###### body.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### body.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

###### body.label.rich.<style_name>.textBorderType
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

###### body.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### body.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

###### body.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

###### body.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

###### body.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### body.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### body.itemStyle
- **Type**: `Object`

Since `v6.0.0`

Graphic style of Body cells, `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.

#### body.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

Body cells color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### body.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

Body cells border color, whose format is similar to that of `color`.

#### body.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

Body cells border width. No border when it is set to be 0.

Body cells border width. No border when it is set to be 0.

#### body.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Body cells border type.

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

#### body.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### body.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### body.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### body.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### body.itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### body.itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### body.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### body.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### body.itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### body.silent
- **Type**: `boolean`
- **Default**: `false`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

### body.cursor
- **Type**: `string`

Mouse cursor when hovering on the cell.

### body.z2
- **Type**: `number`

Specify the z-index (z-order) of the cell. Used when style conflict - especially for thick border style.

## corner
- **Type**: `Object`

Since `v6.0.0`

Corner cells, which are the one at the intersection of x and y-axis.

### corner.data
- **Type**: `Array`

Since `v6.0.0`

Only specify some special cell definitions for Corner cells.

```
data: [
    {
        coord: [[3, 5], [1, 2]], // Required to locate the cell.
                                 // See the rule below.
        value: 'some_text',      // Optional. The text to display.
        mergeCells: true,        // Optional. `false` by default.
    },
    {
        // ...
    },
    // ...
]
```

Cell locating and reference: see the description in [matrix.body.data](option.matrix.md#body.data.coord)

#### corner.data.coord
- **Type**: `Array`

**Body/Corner Cell Locating**

The rule is uniformly applied, such as, in `matrix.dataToPoint` and `matrix.dataToLayout` and `xxxComponent.coord`.

Suppose the matrix.x/y dimensions (header) are defined as:

```
matrix: {
    x: [{ value: 'Xa0', children: ['Xb0', 'Xb1'] }, 'Xa1'],
    y: [{ value: 'Ya0', children: ['Yb0', 'Yb1'] }],
}
```

```
 -----------------------------------------
 |       |       |     Xa0       |       |
 |-------+-------+---------------|  Xa1  |
 |cornerQ|cornerP|  Xb0  |  Xb1  |       |
 |-------+-------+-------+-------+--------
 |       |  Yb0  | bodyR | bodyS |       |
 |  Ya0  |-------+-------+---------------|
 |       |  Yb1  |       |     bodyT     |
 |---------------|------------------------
```

*   `Locator number`:
    *   The term `locator` refers to a integer number to locate cells on x or y direction.
    *   Use the top-left cell of the body as the origin point `(0, 0)`,
        *   the non-negative locator indicates the right/bottom of the origin point;
        *   the negative locator indicates the left/top of the origin point.
*   `Ordinal number` (`OrdinalNumber`):
    *   This term follows the same meaning as that in category axis of cartesian. They are non-negative integer, designating each string `matrix.x.data[i].value`/`matrix.y.data[i].value`. `'Xb0'`, `'Xb2'`, `'Xa1'`, `'Xa0'` are assigned with the ordinal numbers `0`, `1`, `2`, `3`. For every leaf dimension cell, `OrdinalNumber` and `MatrixXYLocator` is the same.
*   A single cell or multiple cells can be determined/located by an array of `locator number` or `ordinal number` or the original `value` string as follows:
    *   e.g., the body cell `bodyS` above can be located by:
        *   `coord: [1, 0]` (Use non-negative integer)
        *   `coord: ['Xb1', 'Yb0']` (Use the `value` properties in `matrix.x/y.data`)
        *   `coord: ['Xb1', 0]` (mix them)
    *   e.g., the corner cell `cornerQ` above can be located by:
        *   `coord: [-2, -1]` (negative `MatrixXYLocator`)
        *   But it is NOT supported to use `coord: ['Y1_0', 'X1_0']` (XY transposed form) here.
    *   The dimension (header) cell can be located by negative integers. For example:
        *   The center of the node `'Ya0'` can be located by `[-2, 'Ya0']`.
    *   Cross cells: multiple cells can be located. e.g., if using `[['Xb0', 'Xb1'], ['Yb0']]`, or using a non-leaf dimension cell to locate, such as `['Xa0', 'Yb0']`, it returns only according to the center of the dimension cells, regardless of the body span. (therefore, the result can be on the boundary of two body cells.) And the ordinal number assigned to 'Xa0' is 3, thus input `[3, 'Yb0']` get the some result.
*   In a nutshell, **The formatter of `matrix.data.coord`** is as follows:
    *   `[2, 8]` indicates a cell.
    *   `[[2, 5], 8]` indicates a rect of cells in x range of `2~5` and y `8`.
    *   `[[2, 5], [7, 8]]` indicates a rect of cells in x range of `2~5` and y range of `7~8`.
    *   `['aNonLeaf', 8]` indicates a rect of cells in x range of `aNonLeaf` and y `8`.
    *   `[2, null/undefined/NaN]` means y is the entire column (only work on `coordClamp: true`).
    *   `[null/undefined/NaN, 8]` is the opposite (only work on `coordClamp: true`).
    *   `[[2, 5], null/undefined/NaN]` indicates a x range of `2~5` and y is the entire column (only work on `coordClamp: true`)..
*   **NOTICE**
    
    *   `bodyR` above is `[0, 0]`\*\*.
    *   The formatter of `matrix.data.coord` is `MatrixCoordRangeOption[]` as follows.
*   The API `dataToPoint` and `dataToLayout` also uses this locating rule:
    
    *   Input `['Xa1', 'Yb1']` to `dataToPoint` will get a point in the center of "bodyT".
    *   Input `['Xa1', 'Yb1']` to `dataToLayout` will get a rect of the "bodyT".

#### corner.data.coordClamp
- **Type**: `boolean`

*   `true`: `matrix.body/corner.data[i].coord` can use `[null/undefined/NaN/invalid_values, xxx]` or `[xxx, null/undefined/NaN/invalid_values]` to refer to a entire row/column.
*   `false`: Disallow that. And an error message will be printed in dev mode when such values are used.

#### corner.data.mergeCells
- **Type**: `boolean`

Body cells or corner cells can be merged.

#### corner.data.value
- **Type**: `string|number`

Text to display in the cell.

### corner.label
- **Type**: `Object`

Since `v6.0.0`

Text label of Corner cells, to explain some data information about graphic item like value, name and so on. `label` is placed under `itemStyle` in ECharts 2.x. In ECharts 3, to make the configuration structure flatter, `label`is taken to be at the same level with `itemStyle`, and has `emphasis` as `itemStyle` does.

#### corner.label.show
- **Type**: `boolean`
- **Default**: `false`

Whether to show label.

#### corner.label.position
- **Type**: `string|Array`

Label position.

**Followings are the options:**

*   \[x, y\]
    
    Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box. For example:
    
    ```
      // Absolute pixel values
      position: [10, 10],
      // Relative percentage
      position: ['50%', '50%']
    ```
    
*   'top'
    
*   'left'
*   'right'
*   'bottom'
*   'inside'
*   'insideLeft'
*   'insideRight'
*   'insideTop'
*   'insideBottom'
*   'insideTopLeft'
*   'insideBottomLeft'
*   'insideTopRight'
*   'insideBottomRight'

See: [label position](https://echarts.apache.org/examples/en/view.html?c=doc-example/label-position).

#### corner.label.distance
- **Type**: `number`
- **Default**: `5`

Distance to the host graphic element.

It is valid only when `position` is string value (like `'top'`、`'insideRight'`).

See: [label position](https://echarts.apache.org/examples/en/editor.html?c=doc-example/label-position).

#### corner.label.rotate
- **Type**: `number`

Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.

See: [label rotation](https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation).

#### corner.label.offset
- **Type**: `Array`

Whether to move text slightly. For example: `[30, 40]` means move `30` horizontally and move `40` vertically.

#### corner.label.formatter
- **Type**: `string|Function`

Data label formatter, which supports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Model variation includes:

*   `{a}`: series name.
*   `{b}`: the name of a data item.
*   `{c}`: the value of a data item.
*   `{@xxx}`: the value of a dimension named `'xxx'`, for example, `{@product}` refers the value of `'product'` dimension.
*   `{@[n]}`: the value of a dimension at the index of `n`, for example, `{@[3]}` refers the value at dimensions\[3\].

**example:**

```
formatter: '{b}: {@score}'
```

**Callback function**

Callback function is in form of:

```
(params: Object|Array) => string
```

where `params` is the single dataset needed by formatter, which is formed as:

```
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data. In most series it is the same as data.
    // But in some series it is some part of the data (e.g., in map, radar)
    value: number|Array|Object,
    // encoding info of coordinate system
    // Key: coord, like ('x' 'y' 'radius' 'angle')
    // value: Must be an array, not null/undefined. Contain dimension indices, like:
    // {
    //     x: [2] // values on dimension index 2 are mapped to x axis.
    //     y: [0] // values on dimension index 0 are mapped to y axis.
    // }
    encode: Object,
    // dimension names list
    dimensionNames: Array<String>,
    // data dimension index, for example 0 or 1 or 2 ...
    // Only work in `radar` series.
    dimensionIndex: number,
    // Color of data
    color: string
}
```

**How to use `encode` and `dimensionNames`?**

When the dataset is like

```
dataset: {
    source: [
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.encode.y[0]]
```

When the dataset is like

```
dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
    ]
}
```

We can get the value of the y-axis via

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### corner.label.color
- **Type**: `Color`
- **Default**: `#333`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### corner.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### corner.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### corner.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

#### corner.label.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

#### corner.label.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

#### corner.label.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

#### corner.label.lineHeight
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

#### corner.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### corner.label.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### corner.label.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

#### corner.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

#### corner.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### corner.label.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

#### corner.label.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#### corner.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

#### corner.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

#### corner.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

#### corner.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

#### corner.label.width
- **Type**: `number`

Width of text block.

#### corner.label.height
- **Type**: `number`

Height of text block.

#### corner.label.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

#### corner.label.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

#### corner.label.textBorderType
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

#### corner.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### corner.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

#### corner.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

#### corner.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

#### corner.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### corner.label.overflow
- **Type**: `string`
- **Default**: `'none'`

Determine how to display the text when it's overflow. Available when `width` is set.

*   `'truncate'` Truncate the text and trailing with `ellipsis`.
*   `'break'` Break by word
*   `'breakAll'` Break by character.

#### corner.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

Ellipsis to be displayed when `overflow` is set to `truncate`.

*   `'truncate'` Truncate the overflow lines.

#### corner.label.rich
- **Type**: `Object`

"Rich text styles" can be defined in this `rich` property. For example:

```
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

    rich: {
        a: {
            color: 'red',
            lineHeight: 10
        },
        b: {
            backgroundColor: {
                image: 'xxx/xxx.jpg'
            },
            height: 40
        },
        x: {
            fontSize: 18,
            fontFamily: 'Microsoft YaHei',
            borderColor: '#449933',
            borderRadius: 4
        },
        ...
    }
}
```

For more details, see [Rich Text](../tutorial.md#Rich%20Text) please.

###### corner.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

text color.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### corner.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

font style.

Options are:

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### corner.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

font thick weight.

Options are:

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### corner.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

font family.

Can also be 'serif' , 'monospace', ...

###### corner.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

font size.

###### corner.label.rich.<style_name>.align
- **Type**: `string`

Horizontal alignment of text, automatic by default.

Options are:

*   `'left'`
*   `'center'`
*   `'right'`

If `align` is not set in `rich`, `align` in parent level will be used. For example:

```
{
    align: right,
    rich: {
        a: {
            // `align` is not set, then it will be right
        }
    }
}
```

###### corner.label.rich.<style_name>.verticalAlign
- **Type**: `string`

Vertical alignment of text, automatic by default.

Options are:

*   `'top'`
*   `'middle'`
*   `'bottom'`

If `verticalAlign` is not set in `rich`, `verticalAlign` in parent level will be used. For example:

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // `verticalAlign` is not set, then it will be bottom
        }
    }
}
```

###### corner.label.rich.<style_name>.lineHeight
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

###### corner.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or auto adapted by default.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### corner.label.rich.<style_name>.borderColor
- **Type**: `Color`

Border color of the text fragment.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### corner.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

Border width of the text fragment.

###### corner.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

the text fragment border type.

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

###### corner.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### corner.label.rich.<style_name>.borderRadius
- **Type**: `number`
- **Default**: `0`

Border radius of the text fragment.

###### corner.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

Padding of the text fragment, for example:

*   `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
*   `padding: 4`: represents `padding: [4, 4, 4, 4]`.
*   `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

###### corner.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text block.

###### corner.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

Show blur of the text block.

###### corner.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text block.

###### corner.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text block.

###### corner.label.rich.<style_name>.width
- **Type**: `number|string`

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.

Notice, `width` and `height` only work when `rich` specified.

###### corner.label.rich.<style_name>.height
- **Type**: `number|string`

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

###### corner.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

Stroke color of the text.

If set as `'inherit'`, the color will assigned as visual color, such as series color.

###### corner.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

Stroke line width of the text.

###### corner.label.rich.<style_name>.textBorderType
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

###### corner.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `textBorderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

###### corner.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

Shadow color of the text itself.

###### corner.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

Shadow blue of the text itself.

###### corner.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

Shadow X offset of the text itself.

###### corner.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

Shadow Y offset of the text itself.

#### corner.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

Since `v6.0.0`

Whether rich text inherits plain text style.

This option is just for backward compatibility.

> The [label.rich / textStyle.rich](option.series-scatter.md#label.rich) `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY` are changed to inherit the corresponding [plain label styles](option.series-scatter.md#label) since echarts v6. You can use `richInheritPlainLabel: false` to restore it. For example,
> 
> ```
> option = {
>     richInheritPlainLabel: false, // In most cases, this is enough.
>     xxx1: {
>         // Can also set it here to only control this label.
>         label: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     },
>     xxx2: {
>         textStyle: {
>             richInheritPlainLabel: false,
>             rich: {/* ... */},
>         }
>     }
> }
> ```

### corner.itemStyle
- **Type**: `Object`

Since `v6.0.0`

Graphic style of Corner cells, `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.

#### corner.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

Corner cells color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

#### corner.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

Corner cells border color, whose format is similar to that of `color`.

#### corner.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

Corner cells border width. No border when it is set to be 0.

Corner cells border width. No border when it is set to be 0.

#### corner.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Corner cells border type.

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

#### corner.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

#### corner.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

#### corner.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

#### corner.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

#### corner.itemStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### corner.itemStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

#### corner.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

#### corner.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

#### corner.itemStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

### corner.silent
- **Type**: `boolean`
- **Default**: `false`

Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.

### corner.cursor
- **Type**: `string`

Mouse cursor when hovering on the cell.

### corner.z2
- **Type**: `number`

Specify the z-index (z-order) of the cell. Used when style conflict - especially for thick border style.

## backgroundStyle
- **Type**: `Object`

Since `v6.0.0`

The style of the entire matrix area.

### backgroundStyle.color
- **Type**: `Color`
- **Default**: `none`

Entire matrix area color.

> Supports setting as solid color using `rgb(255,255,255)`, `rgba(255,255,255,1)`, `#fff`, etc. Also supports setting as gradient color and pattern fill, see [option.color](../option.md#color) for details

### backgroundStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

Entire matrix area border color, whose format is similar to that of `color`.

### backgroundStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

Entire matrix area border width. No border when it is set to be 0.

Entire matrix area border width. No border when it is set to be 0.

### backgroundStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

Entire matrix area border type.

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

### backgroundStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

Since `v5.0.0`

To set the line dash offset. With `borderType` , we can make the line style more flexible.

Refer to MDN [lineDashOffset](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset) for more details.

### backgroundStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

Since `v5.0.0`

To specify how to draw the end points of the line. Possible values are:

*   `'butt'`: The ends of lines are squared off at the endpoints.
*   `'round'`: The ends of lines are rounded.
*   `'square'`: The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.

Default value is `'butt'`. Refer to MDN [lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details.

### backgroundStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

Since `v5.0.0`

To determine the shape used to join two line segments where they meet.

Possible values are:

*   `'bevel'`: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.
*   `'round'`: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.
*   `'miter'`: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the `borderMiterLimit` property.

Default value is `'bevel'`. Refer to MDN [lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details.

### backgroundStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

Since `v5.0.0`

To set the miter limit ratio. Only works when `borderJoin` is set as `miter`.

Default value is `10`. Negative、`0`、`Infinity` and `NaN` values are ignored.

Refer to MDN [miterLimit](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit) for more details.

### backgroundStyle.shadowBlur
- **Type**: `number`

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### backgroundStyle.shadowColor
- **Type**: `Color`

Shadow color. Support same format as `color`.

### backgroundStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

Offset distance on the horizontal direction of shadow.

### backgroundStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

Offset distance on the vertical direction of shadow.

### backgroundStyle.opacity
- **Type**: `number`

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.

## borderZ2
- **Type**: `number`

The secondary z-index of the outer border and the divider line.

## tooltip
- **Type**: `Object`

The tooltip for cells, follow the same option as [tooltip](option.tooltip.md). Disabled by default. We can enable tooltip if the text is overflow a cell boundary and truncated.

```
matrix: {
    tooltip: {
        show: true
    },
    // ...
}
```
