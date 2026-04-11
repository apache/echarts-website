# option.matrix

## id
- **Type**: `string`

组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。

## zlevel
- **Type**: `number`
- **Default**: `0`

所有图形的 zlevel 值。

`zlevel`用于 Canvas 分层，不同`zlevel`值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的`zlevel`。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

`zlevel` 大的 Canvas 会放在 `zlevel` 小的 Canvas 的上面。

## z
- **Type**: `number`
- **Default**: `2`

组件的所有图形的`z`值。控制图形的前后顺序。`z`值小的图形会被`z`值大的图形覆盖。

`z`相比`zlevel`优先级更低，而且不会创建新的 Canvas。

## left
- **Type**: `string|number`
- **Default**: `10%`

undefined组件离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## top
- **Type**: `string|number`
- **Default**: `10%`

undefined组件离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

## right
- **Type**: `string|number`
- **Default**: `'auto'`

undefined组件离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

默认自适应。

## bottom
- **Type**: `string|number`
- **Default**: `'auto'`

undefined组件离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

默认自适应。

## width
- **Type**: `string|number`
- **Default**: `'auto'`

矩阵坐标系（matrix）组件的宽度。默认自适应。

`width` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

## height
- **Type**: `string|number`
- **Default**: `'auto'`

矩阵坐标系（matrix）组件的高度。默认自适应。

`height` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

## x
- **Type**: `Object`

从 `v6.0.0` 开始支持

x 轴表头区。

### x.show
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

是否显示表头 行(如果是 `matrix.x`) 或 列(如果是 `matrix.y`)。

### x.data
- **Type**: `Array`

从 `v6.0.0` 开始支持

指定 x 轴表头区单元格 的数据，即定义列/行。

```
// 一行的数据
data: ['A', 'B', 'C', 'D', 'E']

// 或者如果不关心列/行名称，可以直接
data: Array(5).fill(null) // 五列或五行
// 注：不支持未初始化数组项的数组：
// data: Array(5) // ❌

// 树状结构的数据
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

如果 [matrix.x.data](option.matrix.md#x.data) 没有提供，它会从 `series.data` 或者 `dataset.source` 中自动收集。

参见 [示例](https://echarts.apache.org/examples/zh/editor.html?c=matrix-mini-bar-data-collection&edit=1&reset=1)。

在这种情况下，[series.encode](option.series-scatter.md#encode) 可指定从哪个维度收集数据。例如：

```
var option = {
    // matrix.x/y.data 没有指定。
    // 于是从 series.data or dataset.source 收集。
    matrix: {},
    series: {
        type: 'scatter',
        coordinateSystem: 'matrix',
        // 指定从 dimension index 为 3 和 2 的列收集数据。
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

从 `v6.0.0` 开始支持

每个表头单元格中的文字，也可用于索引这行或列。如果不指定，自动生成一个。

#### x.data.children
- **Type**: `Array`

从 `v6.0.0` 开始支持

见 [matrix.x.data](option.matrix.md#x.data).

#### x.data.size
- **Type**: `number`

从 `v6.0.0` 开始支持

**\[\[单元格尺寸的规则\]\]**

*   配置项 `levelSize`
    *   用于指定某一行或某一列所有单元格的尺寸。
        *   对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        *   对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    *   可以在以下位置声明：
        *   `matrix.levelSize`：指定所有行或列的默认尺寸。
        *   `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
*   配置项 `size`
    *   用于指定单个单元格的尺寸。
        *   对于 `matrix.x`，指的是单元格的宽度。
        *   对于 `matrix.y`，指的是单元格的高度。
    *   可以在以下位置声明：
        *   `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

*   未指定（默认）：宽度或高度会被均匀分配。
*   `number`：表示像素值。
*   `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：

```
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```

### x.label
- **Type**: `Object`

从 `v6.0.0` 开始支持

x 轴表头区单元格图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。

#### x.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### x.label.position
- **Type**: `string|Array`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### x.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### x.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### x.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### x.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### x.label.color
- **Type**: `Color`
- **Default**: `#333`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### x.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### x.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### x.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### x.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### x.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### x.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### x.label.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

#### x.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### x.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### x.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### x.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### x.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### x.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### x.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### x.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### x.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### x.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### x.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### x.label.width
- **Type**: `number`

文本显示宽度。

#### x.label.height
- **Type**: `number`

文本显示高度。

#### x.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### x.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### x.label.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

#### x.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### x.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### x.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### x.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### x.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### x.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### x.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### x.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### x.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### x.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### x.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### x.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### x.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### x.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### x.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### x.label.rich.<style_name>.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

###### x.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### x.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### x.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### x.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

###### x.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### x.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### x.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### x.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### x.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### x.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### x.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### x.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### x.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### x.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### x.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### x.label.rich.<style_name>.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

###### x.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### x.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### x.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### x.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### x.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### x.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

从 `v6.0.0` 开始支持

x 轴表头区单元格 图形样式。

#### x.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

x 轴表头区单元格图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### x.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

x 轴表头区单元格图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#### x.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

x 轴表头区单元格描边线宽。为 0 时无描边。

#### x.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

x 轴表头区单元格描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### x.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### x.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### x.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### x.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### x.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### x.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### x.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### x.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### x.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### x.silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

### x.cursor
- **Type**: `string`

鼠标悬停在单元格上时的鼠标样式。

### x.z2
- **Type**: `number`

指定单元格的 z-index（堆叠顺序）。 用于样式冲突时，尤其是边框较粗时。

### x.levelSize
- **Type**: `number|string`

从 `v6.0.0` 开始支持

**\[\[单元格尺寸的规则\]\]**

*   配置项 `levelSize`
    *   用于指定某一行或某一列所有单元格的尺寸。
        *   对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        *   对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    *   可以在以下位置声明：
        *   `matrix.levelSize`：指定所有行或列的默认尺寸。
        *   `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
*   配置项 `size`
    *   用于指定单个单元格的尺寸。
        *   对于 `matrix.x`，指的是单元格的宽度。
        *   对于 `matrix.y`，指的是单元格的高度。
    *   可以在以下位置声明：
        *   `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

*   未指定（默认）：宽度或高度会被均匀分配。
*   `number`：表示像素值。
*   `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：

```
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```

### x.levels
- **Type**: `Array`

从 `v6.0.0` 开始支持

每一列（对于 `matrix.x`）或每一行（对于 `matrix.y`）的设置。第一个元素表示第一列/行，依此类推。

*   如果数组中的某一项为 `null`/`undefined`，表示使用默认值。
*   否则每一项应为一个对象，例如 `{levelSize: number}`。

例如

```
matrix: {
    x: {
        level: [null, {levelSize: '20%'}]
        // 第二列宽度应为矩阵宽度的 20%。
        // 第一列没有特殊设置。
    },
    // ...
},
```

#### x.levels.levelSize
- **Type**: `number|string`

从 `v6.0.0` 开始支持

**\[\[单元格尺寸的规则\]\]**

*   配置项 `levelSize`
    *   用于指定某一行或某一列所有单元格的尺寸。
        *   对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        *   对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    *   可以在以下位置声明：
        *   `matrix.levelSize`：指定所有行或列的默认尺寸。
        *   `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
*   配置项 `size`
    *   用于指定单个单元格的尺寸。
        *   对于 `matrix.x`，指的是单元格的宽度。
        *   对于 `matrix.y`，指的是单元格的高度。
    *   可以在以下位置声明：
        *   `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

*   未指定（默认）：宽度或高度会被均匀分配。
*   `number`：表示像素值。
*   `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：

```
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```

### x.dividerLineStyle
- **Type**: `Object`

从 `v6.0.0` 开始支持

表头分割线样式

#### x.dividerLineStyle.color
- **Type**: `Color`
- **Default**: `'#aaa'`

表头分割线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### x.dividerLineStyle.width
- **Type**: `number`
- **Default**: `1`

表头分割线宽。

#### x.dividerLineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线的类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `dashOffset` 可实现更灵活的虚线效果。

例如：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### x.dividerLineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### x.dividerLineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### x.dividerLineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### x.dividerLineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### x.dividerLineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### x.dividerLineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### x.dividerLineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### x.dividerLineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### x.dividerLineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

## y
- **Type**: `Object`

从 `v6.0.0` 开始支持

y 轴表头区。

### y.show
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

是否显示表头 行(如果是 `matrix.x`) 或 列(如果是 `matrix.y`)。

### y.data
- **Type**: `Array`

从 `v6.0.0` 开始支持

指定 y 轴表头区单元格 的数据，即定义列/行。

```
// 一行的数据
data: ['A', 'B', 'C', 'D', 'E']

// 或者如果不关心列/行名称，可以直接
data: Array(5).fill(null) // 五列或五行
// 注：不支持未初始化数组项的数组：
// data: Array(5) // ❌

// 树状结构的数据
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

如果 [matrix.y.data](option.matrix.md#y.data) 没有提供，它会从 `series.data` 或者 `dataset.source` 中自动收集。

参见 [示例](https://echarts.apache.org/examples/zh/editor.html?c=matrix-mini-bar-data-collection&edit=1&reset=1)。

在这种情况下，[series.encode](option.series-scatter.md#encode) 可指定从哪个维度收集数据。例如：

```
var option = {
    // matrix.x/y.data 没有指定。
    // 于是从 series.data or dataset.source 收集。
    matrix: {},
    series: {
        type: 'scatter',
        coordinateSystem: 'matrix',
        // 指定从 dimension index 为 3 和 2 的列收集数据。
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

从 `v6.0.0` 开始支持

每个表头单元格中的文字，也可用于索引这行或列。如果不指定，自动生成一个。

#### y.data.children
- **Type**: `Array`

从 `v6.0.0` 开始支持

见 [matrix.y.data](option.matrix.md#y.data).

#### y.data.size
- **Type**: `number`

从 `v6.0.0` 开始支持

**\[\[单元格尺寸的规则\]\]**

*   配置项 `levelSize`
    *   用于指定某一行或某一列所有单元格的尺寸。
        *   对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        *   对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    *   可以在以下位置声明：
        *   `matrix.levelSize`：指定所有行或列的默认尺寸。
        *   `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
*   配置项 `size`
    *   用于指定单个单元格的尺寸。
        *   对于 `matrix.x`，指的是单元格的宽度。
        *   对于 `matrix.y`，指的是单元格的高度。
    *   可以在以下位置声明：
        *   `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

*   未指定（默认）：宽度或高度会被均匀分配。
*   `number`：表示像素值。
*   `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：

```
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```

### y.label
- **Type**: `Object`

从 `v6.0.0` 开始支持

y 轴表头区单元格图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。

#### y.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### y.label.position
- **Type**: `string|Array`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### y.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### y.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### y.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### y.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### y.label.color
- **Type**: `Color`
- **Default**: `#333`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### y.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### y.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### y.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### y.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### y.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### y.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### y.label.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

#### y.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### y.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### y.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### y.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### y.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### y.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### y.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### y.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### y.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### y.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### y.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### y.label.width
- **Type**: `number`

文本显示宽度。

#### y.label.height
- **Type**: `number`

文本显示高度。

#### y.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### y.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### y.label.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

#### y.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### y.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### y.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### y.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### y.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### y.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### y.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### y.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### y.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### y.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### y.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### y.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### y.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### y.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### y.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### y.label.rich.<style_name>.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

###### y.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### y.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### y.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### y.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

###### y.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### y.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### y.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### y.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### y.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### y.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### y.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### y.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### y.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### y.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### y.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### y.label.rich.<style_name>.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

###### y.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### y.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### y.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### y.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### y.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### y.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

从 `v6.0.0` 开始支持

y 轴表头区单元格 图形样式。

#### y.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

y 轴表头区单元格图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### y.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

y 轴表头区单元格图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#### y.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

y 轴表头区单元格描边线宽。为 0 时无描边。

#### y.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

y 轴表头区单元格描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### y.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### y.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### y.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### y.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### y.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### y.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### y.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### y.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### y.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### y.silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

### y.cursor
- **Type**: `string`

鼠标悬停在单元格上时的鼠标样式。

### y.z2
- **Type**: `number`

指定单元格的 z-index（堆叠顺序）。 用于样式冲突时，尤其是边框较粗时。

### y.levelSize
- **Type**: `number|string`

从 `v6.0.0` 开始支持

**\[\[单元格尺寸的规则\]\]**

*   配置项 `levelSize`
    *   用于指定某一行或某一列所有单元格的尺寸。
        *   对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        *   对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    *   可以在以下位置声明：
        *   `matrix.levelSize`：指定所有行或列的默认尺寸。
        *   `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
*   配置项 `size`
    *   用于指定单个单元格的尺寸。
        *   对于 `matrix.x`，指的是单元格的宽度。
        *   对于 `matrix.y`，指的是单元格的高度。
    *   可以在以下位置声明：
        *   `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

*   未指定（默认）：宽度或高度会被均匀分配。
*   `number`：表示像素值。
*   `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：

```
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```

### y.levels
- **Type**: `Array`

从 `v6.0.0` 开始支持

每一列（对于 `matrix.x`）或每一行（对于 `matrix.y`）的设置。第一个元素表示第一列/行，依此类推。

*   如果数组中的某一项为 `null`/`undefined`，表示使用默认值。
*   否则每一项应为一个对象，例如 `{levelSize: number}`。

例如

```
matrix: {
    x: {
        level: [null, {levelSize: '20%'}]
        // 第二列宽度应为矩阵宽度的 20%。
        // 第一列没有特殊设置。
    },
    // ...
},
```

#### y.levels.levelSize
- **Type**: `number|string`

从 `v6.0.0` 开始支持

**\[\[单元格尺寸的规则\]\]**

*   配置项 `levelSize`
    *   用于指定某一行或某一列所有单元格的尺寸。
        *   对于 `matrix.x`，指的是一行单元格的高度（"level" 指一行）。
        *   对于 `matrix.y`，指的是一列单元格的宽度（"level" 指一列）。
    *   可以在以下位置声明：
        *   `matrix.levelSize`：指定所有行或列的默认尺寸。
        *   `matrix.levels[i].levelSize`：指定某一行或列的尺寸。
*   配置项 `size`
    *   用于指定单个单元格的尺寸。
        *   对于 `matrix.x`，指的是单元格的宽度。
        *   对于 `matrix.y`，指的是单元格的高度。
    *   可以在以下位置声明：
        *   `matrix.x/y.data[i].size`

`levelSize` 或 `size` 的取值可以为：

*   未指定（默认）：宽度或高度会被均匀分配。
*   `number`：表示像素值。
*   `string`：百分比值（如 `'33%'`），表示相对于矩阵宽度（在 `matrix.x` 中）或高度（在 `matrix.y` 中）的百分比。

例如：

```
{
    matrix: {
        x: {
            // 第二行的高度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他行的高度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的宽度为 30 像素
                    size: 30
                },
                // 其他单元格的宽度均匀分配
                // ...
            ]
        },
        y: {
            // 第二列的宽度为矩阵宽度的 10%
            levels: [undefined, {levelSize: '10%'}]
            // 其他列的宽度均匀分配
            levelSize: undefined,
            data: [
                {
                    // 第一个单元格的高度为 30 像素
                    size: 30
                },
                // 其他单元格的高度均匀分配
                // ...
            ]
        },
        // ...
    },
}
```

### y.dividerLineStyle
- **Type**: `Object`

从 `v6.0.0` 开始支持

表头分割线样式

#### y.dividerLineStyle.color
- **Type**: `Color`
- **Default**: `'#aaa'`

表头分割线的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### y.dividerLineStyle.width
- **Type**: `number`
- **Default**: `1`

表头分割线宽。

#### y.dividerLineStyle.type
- **Type**: `string|number|Array`
- **Default**: `'solid'`

线的类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `dashOffset` 可实现更灵活的虚线效果。

例如：

```
{

type: [5, 10],

dashOffset: 5
}
```

#### y.dividerLineStyle.dashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `type` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### y.dividerLineStyle.cap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### y.dividerLineStyle.join
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `miterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### y.dividerLineStyle.miterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `join` 为 `miter` 时， `miterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### y.dividerLineStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### y.dividerLineStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### y.dividerLineStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### y.dividerLineStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### y.dividerLineStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

## body
- **Type**: `Object`

从 `v6.0.0` 开始支持

内容区单元格，即表单除了表头区外的区域。

### body.data
- **Type**: `Array`

从 `v6.0.0` 开始支持

为 内容区单元格 指定部分特殊单元格定义。

```
data: [
    {
        coord: [[3, 5], [1, 2]], // 必填。用于定位单元格。
                                 // 详细规则见下方描述。
        value: 'some_text',      // 可选。要显示的文本。
        mergeCells: true,        // 可选。默认为 `false`。
    },
    {
        // ...
    },
    // ...
]
```

单元格定位与引用规则详见 [matrix.body.data](option.matrix.md#body.data.coord) 的描述。

#### body.data.coord
- **Type**: `Array`

**内容区/角区单元格定位说明**

定位规则在 `matrix.dataToPoint`、`matrix.dataToLayout` 及 `xxxComponent.coord` 等 API 中统一适用。

假设矩阵 x/y 维度（表头）定义如下：

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

*   **Locator number**：
    *   `locator` 表示用于在 x 或 y 方向定位单元格的整数。
    *   以内容区左上角单元格为原点 `(0, 0)`，
        *   非负数表示原点右侧/下方；
        *   负数表示原点左侧/上方。
*   **Ordinal number**：
    *   与笛卡尔坐标系类目轴一致。为非负整数，指定每个 `matrix.x.data[i].value`/`matrix.y.data[i].value`。如 `'Xb0'`、`'Xb2'`、`'Xa1'`、`'Xa0'` 分别对应序数 `0`、`1`、`2`、`3`。每个叶子维度单元格的 `OrdinalNumber` 与 `MatrixXYLocator` 相同。
*   单个或多个单元格可通过 locator 数字、ordinal 数字或原始 value 字符串数组定位。例如：
    *   如上表中的 bodyS 可通过以下方式定位：
        *   `coord: [1, 0]`（非负整数）
        *   `coord: ['Xb1', 'Yb0']`（使用 `matrix.x/y.data` 的 value 属性）
        *   `coord: ['Xb1', 0]`（混合用法）
    *   角区单元格 cornerQ 可通过：
        *   `coord: [-2, -1]`（负数定位）
        *   不支持 `coord: ['Y1_0', 'X1_0']`（XY 交换形式）。
    *   维度（表头）单元格可通过负数定位。例如 `'Ya0'` 的中心可通过 `[-2, 'Ya0']` 定位。
    *   跨单元格定位：如 `[['Xb0', 'Xb1'], ['Yb0']]`，或用非叶子维度单元格如 `['Xa0', 'Yb0']`，此时仅返回维度单元格中心（结果可能在两个 body 单元格边界上）。'Xa0' 的序数为 3，因此 `[3, 'Yb0']` 也可定位到同一位置。
*   简而言之，`matrix.data.coord` 的格式如下：
    *   `[2, 8]` 表示单个单元格。
    *   `[[2, 5], 8]` 表示 x 方向 2~5，y 方向 8 的矩形区域。
    *   `[[2, 5], [7, 8]]` 表示 x 方向 2~5，y 方向 7~8 的矩形区域。
    *   `['aNonLeaf', 8]` 表示 x 方向为非叶子节点，y 方向为 8 的区域。
    *   `[2, null/undefined/NaN]` 表示 y 方向整列（仅在 `coordClamp: true` 时生效）。
    *   `[null/undefined/NaN, 8]` 表示 x 方向整行（仅在 `coordClamp: true` 时生效）。
    *   `[[2, 5], null/undefined/NaN]` 表示 x 方向 2~5，y 方向整列（仅在 `coordClamp: true` 时生效）。
*   **注意**
    *   上表中的 bodyR 对应 `[0, 0]`。
    *   `matrix.data.coord` 的格式为 `MatrixCoordRangeOption[]`。
*   `dataToPoint` 和 `dataToLayout` API 也遵循此定位规则：
    *   输入 `['Xa1', 'Yb1']` 到 `dataToPoint` 得到 bodyT 的中心点。
    *   输入 `['Xa1', 'Yb1']` 到 `dataToLayout` 得到 bodyT 的矩形区域。

#### body.data.coordClamp
- **Type**: `boolean`

*   `true`: `matrix.body/corner.data[i].coord` 中 `[null/undefined/NaN/invalid_values, xxx]` 或 `[xxx, null/undefined/NaN/invalid_values]` 能指代一整行/列.
*   `false`: 不支持上述设定，且使用这些值时会打印错误提示（仅在 dev 模式下打印）。

#### body.data.mergeCells
- **Type**: `boolean`

内容区或角区单元格可合并。

#### body.data.value
- **Type**: `string|number`

单元格中显示的文本。

### body.label
- **Type**: `Object`

从 `v6.0.0` 开始支持

内容区单元格图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。

#### body.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### body.label.position
- **Type**: `string|Array`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### body.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### body.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### body.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### body.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### body.label.color
- **Type**: `Color`
- **Default**: `#333`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### body.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### body.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### body.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### body.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### body.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### body.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### body.label.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

#### body.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### body.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### body.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### body.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### body.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### body.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### body.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### body.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### body.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### body.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### body.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### body.label.width
- **Type**: `number`

文本显示宽度。

#### body.label.height
- **Type**: `number`

文本显示高度。

#### body.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### body.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### body.label.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

#### body.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### body.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### body.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### body.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### body.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### body.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### body.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### body.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### body.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### body.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### body.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### body.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### body.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### body.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### body.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### body.label.rich.<style_name>.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

###### body.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### body.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### body.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### body.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

###### body.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### body.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### body.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### body.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### body.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### body.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### body.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### body.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### body.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### body.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### body.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### body.label.rich.<style_name>.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

###### body.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### body.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### body.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### body.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### body.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### body.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

从 `v6.0.0` 开始支持

内容区单元格 图形样式。

#### body.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

内容区单元格图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### body.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

内容区单元格图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#### body.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

内容区单元格描边线宽。为 0 时无描边。

#### body.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

内容区单元格描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### body.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### body.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### body.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### body.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### body.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### body.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### body.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### body.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### body.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### body.silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

### body.cursor
- **Type**: `string`

鼠标悬停在单元格上时的鼠标样式。

### body.z2
- **Type**: `number`

指定单元格的 z-index（堆叠顺序）。 用于样式冲突时，尤其是边框较粗时。

## corner
- **Type**: `Object`

从 `v6.0.0` 开始支持

角区单元格，即表单行列表头区的交集区域。

### corner.data
- **Type**: `Array`

从 `v6.0.0` 开始支持

为 角区单元格 指定部分特殊单元格定义。

```
data: [
    {
        coord: [[3, 5], [1, 2]], // 必填。用于定位单元格。
                                 // 详细规则见下方描述。
        value: 'some_text',      // 可选。要显示的文本。
        mergeCells: true,        // 可选。默认为 `false`。
    },
    {
        // ...
    },
    // ...
]
```

单元格定位与引用规则详见 [matrix.body.data](option.matrix.md#body.data.coord) 的描述。

#### corner.data.coord
- **Type**: `Array`

**内容区/角区单元格定位说明**

定位规则在 `matrix.dataToPoint`、`matrix.dataToLayout` 及 `xxxComponent.coord` 等 API 中统一适用。

假设矩阵 x/y 维度（表头）定义如下：

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

*   **Locator number**：
    *   `locator` 表示用于在 x 或 y 方向定位单元格的整数。
    *   以内容区左上角单元格为原点 `(0, 0)`，
        *   非负数表示原点右侧/下方；
        *   负数表示原点左侧/上方。
*   **Ordinal number**：
    *   与笛卡尔坐标系类目轴一致。为非负整数，指定每个 `matrix.x.data[i].value`/`matrix.y.data[i].value`。如 `'Xb0'`、`'Xb2'`、`'Xa1'`、`'Xa0'` 分别对应序数 `0`、`1`、`2`、`3`。每个叶子维度单元格的 `OrdinalNumber` 与 `MatrixXYLocator` 相同。
*   单个或多个单元格可通过 locator 数字、ordinal 数字或原始 value 字符串数组定位。例如：
    *   如上表中的 bodyS 可通过以下方式定位：
        *   `coord: [1, 0]`（非负整数）
        *   `coord: ['Xb1', 'Yb0']`（使用 `matrix.x/y.data` 的 value 属性）
        *   `coord: ['Xb1', 0]`（混合用法）
    *   角区单元格 cornerQ 可通过：
        *   `coord: [-2, -1]`（负数定位）
        *   不支持 `coord: ['Y1_0', 'X1_0']`（XY 交换形式）。
    *   维度（表头）单元格可通过负数定位。例如 `'Ya0'` 的中心可通过 `[-2, 'Ya0']` 定位。
    *   跨单元格定位：如 `[['Xb0', 'Xb1'], ['Yb0']]`，或用非叶子维度单元格如 `['Xa0', 'Yb0']`，此时仅返回维度单元格中心（结果可能在两个 body 单元格边界上）。'Xa0' 的序数为 3，因此 `[3, 'Yb0']` 也可定位到同一位置。
*   简而言之，`matrix.data.coord` 的格式如下：
    *   `[2, 8]` 表示单个单元格。
    *   `[[2, 5], 8]` 表示 x 方向 2~5，y 方向 8 的矩形区域。
    *   `[[2, 5], [7, 8]]` 表示 x 方向 2~5，y 方向 7~8 的矩形区域。
    *   `['aNonLeaf', 8]` 表示 x 方向为非叶子节点，y 方向为 8 的区域。
    *   `[2, null/undefined/NaN]` 表示 y 方向整列（仅在 `coordClamp: true` 时生效）。
    *   `[null/undefined/NaN, 8]` 表示 x 方向整行（仅在 `coordClamp: true` 时生效）。
    *   `[[2, 5], null/undefined/NaN]` 表示 x 方向 2~5，y 方向整列（仅在 `coordClamp: true` 时生效）。
*   **注意**
    *   上表中的 bodyR 对应 `[0, 0]`。
    *   `matrix.data.coord` 的格式为 `MatrixCoordRangeOption[]`。
*   `dataToPoint` 和 `dataToLayout` API 也遵循此定位规则：
    *   输入 `['Xa1', 'Yb1']` 到 `dataToPoint` 得到 bodyT 的中心点。
    *   输入 `['Xa1', 'Yb1']` 到 `dataToLayout` 得到 bodyT 的矩形区域。

#### corner.data.coordClamp
- **Type**: `boolean`

*   `true`: `matrix.body/corner.data[i].coord` 中 `[null/undefined/NaN/invalid_values, xxx]` 或 `[xxx, null/undefined/NaN/invalid_values]` 能指代一整行/列.
*   `false`: 不支持上述设定，且使用这些值时会打印错误提示（仅在 dev 模式下打印）。

#### corner.data.mergeCells
- **Type**: `boolean`

内容区或角区单元格可合并。

#### corner.data.value
- **Type**: `string|number`

单元格中显示的文本。

### corner.label
- **Type**: `Object`

从 `v6.0.0` 开始支持

角区单元格图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。

#### corner.label.show
- **Type**: `boolean`
- **Default**: `false`

是否显示标签。

#### corner.label.position
- **Type**: `string|Array`

标签的位置。

*   可以通过内置的语义声明位置：
    
    示例：
    
    ```
      position: 'top'
    ```
    
    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`
    
*   也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    
    示例：
    
    ```
      // 绝对的像素值
      position: [10, 10],
      // 相对的百分比
      position: ['50%', '50%']
    ```
    

参见：[label position](https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position)。

#### corner.label.distance
- **Type**: `number`
- **Default**: `5`

距离图形元素的距离。

当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position)。

#### corner.label.rotate
- **Type**: `number`

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation)。

#### corner.label.offset
- **Type**: `Array`

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

#### corner.label.formatter
- **Type**: `string|Function`

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

**字符串模板** 模板变量有：

*   `{a}`：系列名。
*   `{b}`：数据名。
*   `{c}`：数据值。
*   `{@xxx}`：数据中名为 `'xxx'` 的维度的值，如 `{@product}` 表示名为 `'product'` 的维度的值。
*   `{@[n]}`：数据中维度 `n` 的值，如 `{@[3]}` 表示维度 3 的值，从 0 开始计数。

**示例：**

```
formatter: '{b}: {@score}'
```

**回调函数**

回调函数格式：

```
(params: Object|Array) => string
```

参数 `params` 是 formatter 需要的单个数据集。格式如下：

```
{
    componentType: 'series',
    // 系列类型
    seriesType: string,
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number|Array|Object,
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefined，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode: Object,
    // 维度名列表
    dimensionNames: Array<String>,
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number,
    // 数据图形的颜色
    color: string
}
```

注：encode 和 dimensionNames 的使用方式，例如：

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.encode.y[0]]
```

如果数据为：

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

则可这样得到 y 轴对应的 value：

```
params.value[params.dimensionNames[params.encode.y[0]]]
```

#### corner.label.color
- **Type**: `Color`
- **Default**: `#333`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### corner.label.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

#### corner.label.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

#### corner.label.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#### corner.label.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

#### corner.label.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

#### corner.label.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

#### corner.label.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

#### corner.label.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### corner.label.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### corner.label.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

#### corner.label.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### corner.label.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### corner.label.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

#### corner.label.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#### corner.label.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

#### corner.label.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

#### corner.label.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

#### corner.label.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

#### corner.label.width
- **Type**: `number`

文本显示宽度。

#### corner.label.height
- **Type**: `number`

文本显示高度。

#### corner.label.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

#### corner.label.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

#### corner.label.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

#### corner.label.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### corner.label.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

#### corner.label.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

#### corner.label.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

#### corner.label.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### corner.label.overflow
- **Type**: `string`
- **Default**: `'none'`

文字超出宽度是否截断或者换行。配置`width`时有效

*   `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
*   `'break'` 换行
*   `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#### corner.label.ellipsis
- **Type**: `string`
- **Default**: `'...'`

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

#### corner.label.rich
- **Type**: `Object`

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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

详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

###### corner.label.rich.<style_name>.color
- **Type**: `Color`
- **Default**: `'#fff'`

文字的颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### corner.label.rich.<style_name>.fontStyle
- **Type**: `string`
- **Default**: `'normal'`

文字字体的风格。

可选：

*   `'normal'`
*   `'italic'`
*   `'oblique'`

###### corner.label.rich.<style_name>.fontWeight
- **Type**: `string|number`
- **Default**: `'normal'`

文字字体的粗细。

可选：

*   `'normal'`
*   `'bold'`
*   `'bolder'`
*   `'lighter'`
*   100 | 200 | 300 | 400...

###### corner.label.rich.<style_name>.fontFamily
- **Type**: `string`
- **Default**: `'sans-serif'`

文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

###### corner.label.rich.<style_name>.fontSize
- **Type**: `number`
- **Default**: `12`

文字的字体大小。

###### corner.label.rich.<style_name>.align
- **Type**: `string`

文字水平对齐方式，默认自动。

可选：

*   `'left'`
*   `'center'`
*   `'right'`

`rich` 中如果没有设置 `align`，则会取父层级的 `align`。例如：

```
{
    align: right,
    rich: {
        a: {
            // 没有设置 `align`，则 `align` 为 right
        }
    }
}
```

###### corner.label.rich.<style_name>.verticalAlign
- **Type**: `string`

文字垂直对齐方式，默认自动。

可选：

*   `'top'`
*   `'middle'`
*   `'bottom'`

`rich` 中如果没有设置 `verticalAlign`，则会取父层级的 `verticalAlign`。例如：

```
{
    verticalAlign: bottom,
    rich: {
        a: {
            // 没有设置 `verticalAlign`，则 `verticalAlign` 为 bottom
        }
    }
}
```

###### corner.label.rich.<style_name>.lineHeight
- **Type**: `number`

行高。

`rich` 中如果没有设置 `lineHeight`，则会取父层级的 `lineHeight`。例如：

```
{
    lineHeight: 56,
    rich: {
        a: {
            // 没有设置 `lineHeight`，则 `lineHeight` 为 56
        }
    }
}
```

###### corner.label.rich.<style_name>.backgroundColor
- **Type**: `string|Object`
- **Default**: `'transparent'`

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### corner.label.rich.<style_name>.borderColor
- **Type**: `Color`

文字块边框颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### corner.label.rich.<style_name>.borderWidth
- **Type**: `number`
- **Default**: `0`

文字块边框宽度。

###### corner.label.rich.<style_name>.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字块边框描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

###### corner.label.rich.<style_name>.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### corner.label.rich.<style_name>.borderRadius
- **Type**: `number|Array`
- **Default**: `0`

文字块的圆角。

###### corner.label.rich.<style_name>.padding
- **Type**: `number|Array`
- **Default**: `0`

文字块的内边距。例如：

*   `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
*   `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
*   `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

###### corner.label.rich.<style_name>.shadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字块的背景阴影颜色。

###### corner.label.rich.<style_name>.shadowBlur
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影长度。

###### corner.label.rich.<style_name>.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 X 偏移。

###### corner.label.rich.<style_name>.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字块的背景阴影 Y 偏移。

###### corner.label.rich.<style_name>.width
- **Type**: `number|string`

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### corner.label.rich.<style_name>.height
- **Type**: `number|string`

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

###### corner.label.rich.<style_name>.textBorderColor
- **Type**: `Color`

文字本身的描边颜色。

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。

###### corner.label.rich.<style_name>.textBorderWidth
- **Type**: `number`

文字本身的描边宽度。

###### corner.label.rich.<style_name>.textBorderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

文字本身的描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `textBorderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

textBorderType: [5, 10],

textBorderDashOffset: 5
}
```

###### corner.label.rich.<style_name>.textBorderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `textBorderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

###### corner.label.rich.<style_name>.textShadowColor
- **Type**: `Color`
- **Default**: `'transparent'`

文字本身的阴影颜色。

###### corner.label.rich.<style_name>.textShadowBlur
- **Type**: `number`
- **Default**: `0`

文字本身的阴影长度。

###### corner.label.rich.<style_name>.textShadowOffsetX
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 X 偏移。

###### corner.label.rich.<style_name>.textShadowOffsetY
- **Type**: `number`
- **Default**: `0`

文字本身的阴影 Y 偏移。

#### corner.label.richInheritPlainLabel
- **Type**: `boolean`
- **Default**: `true`

从 `v6.0.0` 开始支持

富文本样式是否继承普通文本样式。

此配置项用于向历史兼容。

> 从 v6 版本开始，[富文本标签 (label.rich / textStyle.rich)](option.series-scatter.md#label.rich) 部分样式（`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`）默认继承 [普通文本样式 (label / textStyle)](option.series-scatter.md#label)。你可以设置 `richInheritPlainLabel: false` （可在最外层配置项或与同级文本样式配置项）来禁用此行为。
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

从 `v6.0.0` 开始支持

角区单元格 图形样式。

#### corner.itemStyle.color
- **Type**: `Color`
- **Default**: `none`

角区单元格图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

#### corner.itemStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

角区单元格图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#### corner.itemStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

角区单元格描边线宽。为 0 时无描边。

#### corner.itemStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

角区单元格描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

#### corner.itemStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

#### corner.itemStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

#### corner.itemStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

#### corner.itemStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

#### corner.itemStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

#### corner.itemStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

#### corner.itemStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

#### corner.itemStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

#### corner.itemStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

### corner.silent
- **Type**: `boolean`
- **Default**: `false`

图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。

### corner.cursor
- **Type**: `string`

鼠标悬停在单元格上时的鼠标样式。

### corner.z2
- **Type**: `number`

指定单元格的 z-index（堆叠顺序）。 用于样式冲突时，尤其是边框较粗时。

## backgroundStyle
- **Type**: `Object`

从 `v6.0.0` 开始支持

整个矩形视图区的样式。

### backgroundStyle.color
- **Type**: `Color`
- **Default**: `none`

整个矩形视图区图形的颜色。

> 支持使用`rgb(255,255,255)`，`rgba(255,255,255,1)`，`#fff`等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见[option.color](../option.md#color)

### backgroundStyle.borderColor
- **Type**: `Color`
- **Default**: `'#ccc'`

整个矩形视图区图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

### backgroundStyle.borderWidth
- **Type**: `number`
- **Default**: `1`

整个矩形视图区描边线宽。为 0 时无描边。

### backgroundStyle.borderType
- **Type**: `string|number|Array`
- **Default**: `'solid'`

整个矩形视图区描边类型。

可选：

*   `'solid'`
*   `'dashed'`
*   `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 `borderDashOffset` 可实现更灵活的虚线效果。

例如：

```
{

borderType: [5, 10],

borderDashOffset: 5
}
```

### backgroundStyle.borderDashOffset
- **Type**: `number`
- **Default**: `0`

从 `v5.0.0` 开始支持

用于设置虚线的偏移量，可搭配 `borderType` 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

### backgroundStyle.borderCap
- **Type**: `string`
- **Default**: `'butt'`

从 `v5.0.0` 开始支持

用于指定线段末端的绘制方式，可以是：

*   `'butt'`: 线段末端以方形结束。
*   `'round'`: 线段末端以圆形结束。
*   `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。

### backgroundStyle.borderJoin
- **Type**: `string`
- **Default**: `'bevel'`

从 `v5.0.0` 开始支持

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：

*   `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
*   `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
*   `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 `borderMiterLimit` 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。

### backgroundStyle.borderMiterLimit
- **Type**: `number`
- **Default**: `10`

从 `v5.0.0` 开始支持

用于设置斜接面限制比例。只有当 `borderJoin` 为 `miter` 时， `borderMiterLimit` 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。

### backgroundStyle.shadowBlur
- **Type**: `number`

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：

```
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

### backgroundStyle.shadowColor
- **Type**: `Color`

阴影颜色。支持的格式同`color`。

### backgroundStyle.shadowOffsetX
- **Type**: `number`
- **Default**: `0`

阴影水平方向上的偏移距离。

### backgroundStyle.shadowOffsetY
- **Type**: `number`
- **Default**: `0`

阴影垂直方向上的偏移距离。

### backgroundStyle.opacity
- **Type**: `number`
- **Default**: `1`

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。

## borderZ2
- **Type**: `number`

最外层的边框和分割线的 z2-index 。

## tooltip
- **Type**: `Object`

单元格的 tooltip 配置，配置项同 [tooltip](option.tooltip.md)。默认不显示，文字很多的时候会被裁剪，这时可以开启 tooltip，如下示例：

```
matrix: {
    tooltip: {
        show: true
    },
    // ...
}
```
