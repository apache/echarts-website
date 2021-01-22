window.__EC_DOC_option_parallel = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in .</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in , which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between parallel  component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "<p>Distance between parallel  component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "<p>Distance between parallel  component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "<p>Distance between parallel  component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "width": {
    "desc": "<p>Width of parallel  component. Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "height": {
    "desc": "<p>Height of parallel  component. Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "50%"
    }
  },
  "layout": {
    "desc": "<p>Layout modes, whose optional values are:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;horizontal&#39;</code>: place each axis horizontally.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;vertical&#39;</code>: place each axis vertically.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "horizontal,vertical",
      "default": "horizontal"
    }
  },
  "axisExpandable": {
    "desc": "<p>When dimension number is extremely large, say, more than 50 dimensions, there will be more than 50 axes, which may hardly display in a page.</p>\n<p>In this case, you may use <a href=\"#parallel.axisExpandable\">parallel.axisExpandable</a> to improve the display. See this example:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=map-parallel-prices&edit=1&reset=1\" width=\"600\" height=\"460\"><iframe />\n\n\n\n\n<p>Whether to enable toggling axis on clicking.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "axisExpandCenter": {
    "desc": "<p>Index of the axis which is used as the center of expanding initially. It doesn&#39;t have a default value, and needs to be assigned manually.</p>\n<p>Please refer to <a href=\"parallel.axisExpandable\" target=\"_blank\">parallel.axisExpandable</a> for more information.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "axisExpandCount": {
    "desc": "<p>Defines how many axes are at expanding state initially. We&#39;d suggest you assign this value manually according to dimensions.</p>\n<p>Please refer to <a href=\"parallel.axisExpandCenter\" target=\"_blank\">parallel.axisExpandCenter</a> and <a href=\"parallel.axisExpandable\" target=\"_blank\">parallel.axisExpandable</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "axisExpandWidth": {
    "desc": "<p>Distance between two axes when at expanding state, in pixels.</p>\n<p>Please refer to <a href=\"parallel.axisExpandable\" target=\"_blank\">parallel.axisExpandable</a> for more information.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "50",
      "step": "1"
    }
  },
  "axisExpandTriggerOn": {
    "desc": "<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;click&#39;</code>: Trigger expanding when mouse clicking.</li>\n<li><code class=\"codespan\">&#39;mousemove&#39;</code>: Trigger expanding when mouse hovering.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "click,mousemove"
    }
  },
  "parallelAxisDefault": {
    "desc": "<p>When configuring multiple <a href=\"#parallelAxis\">parallelAxis</a>, there might be some common attributes in each axis configuration. To avoid writing them repeatly, they can be put under <a href=\"#parallel.parallelAxisDefault\">parallel.parallelAxisDefault</a>. Before initializing axis, configurations in <a href=\"#parallel.parallelAxisDefault\">parallel.parallelAxisDefault</a> will be merged into <a href=\"#parallelAxis\">parallelAxis</a> to generate the final axis configuration.</p>\n<p><a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/parallel-all&amp;edit=1&amp;reset=1\" target=\"_blank\">See the sample</a>.</p>\n<p><br></p>\n"
  },
  "parallelAxisDefault.type": {
    "desc": "<p>Type of axis.</p>\n<p>Option:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;value&#39;</code>\n  Numerical axis, suitable for continuous data.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;category&#39;</code>\n  Category axis, suitable for discrete category data. Category data can be auto retrieved from <a href=\"#series.data\">series.data</a> or <a href=\"#dataset.source\">dataset.source</a>, or can be specified via <a href=\"#parallelAxis.data\">parallelAxis.data</a>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;time&#39;</code>\n  Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;log&#39;</code>\n  Log axis, suitable for log data.</p>\n</li>\n</ul>\n"
  },
  "parallelAxisDefault.name": {
    "desc": "<p>Name of axis.</p>\n",
    "uiControl": {
      "type": "text"
    }
  },
  "parallelAxisDefault.nameLocation": {
    "desc": "<p>Location of axis name.</p>\n<p><strong>Options: </strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> or <code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;end&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "start,middle,end",
      "default": "end"
    }
  },
  "parallelAxisDefault.nameTextStyle": {
    "desc": "<p>Text style of axis name.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.color": {
    "desc": "<p>Color of axis name uses <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontStyle": {
    "desc": "<p>axis name font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontWeight": {
    "desc": "<p>axis name font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontFamily": {
    "desc": "<p>axis name font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.nameTextStyle.fontSize": {
    "desc": "<p>axis name font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.nameTextStyle.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.nameTextStyle.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.nameTextStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.nameTextStyle.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.nameTextStyle.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameTextStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.nameGap": {
    "desc": "<p>Gap between axis name and axis line.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5",
      "default": "15"
    }
  },
  "parallelAxisDefault.nameRotate": {
    "desc": "<p>Rotation of axis name.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-360",
      "max": "360",
      "step": "1"
    }
  },
  "parallelAxisDefault.inverse": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code> to invert the axis.\nThis is a new option available from Echarts 3 and newer.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.boundaryGap": {
    "desc": "<p>The boundary gap on both sides of a coordinate axis. The setting and behavior of category axes and non-category axes are different.</p>\n<p>The <code class=\"codespan\">boundaryGap</code> of category axis can be set to either <code class=\"codespan\">true</code> or <code class=\"codespan\">false</code>. Default value is set to be <code class=\"codespan\">true</code>, in which case <a href=\"#parallelAxis.axisTick\">axisTick</a> is served only as a separation line, and labels and data appear only in the center part of two <a href=\"#parallelAxis.axisTick\">axis ticks</a>, which is called <em>band</em>.</p>\n<p>For non-category axis, including time, numerical value, and log axes, <code class=\"codespan\">boundaryGap</code> is an array of two values, representing the spanning range between minimum and maximum value. The value can be set in numeric value or relative percentage, which becomes invalid after setting <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a>.\n<strong>Example: </strong></p>\n<pre><code class=\"lang-js\">boundaryGap: [&#39;20%&#39;, &#39;20%&#39;]\n</code></pre>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.min": {
    "desc": "<p>The minimun value of axis.</p>\n<p>It can be set to a special value <code class=\"codespan\">&#39;dataMin&#39;</code> so that the minimum value on this axis is set to be the minimum label.</p>\n<p>It will be automatically computed to make sure axis tick is equally distributed when not set.</p>\n<p>In category axis, it can also be set as the ordinal number. For example, if a catergory axis has <code class=\"codespan\">data: [&#39;categoryA&#39;, &#39;categoryB&#39;, &#39;categoryC&#39;]</code>, and the ordinal <code class=\"codespan\">2</code> represents <code class=\"codespan\">&#39;categoryC&#39;</code>. Moreover, it can be set as negative number, like <code class=\"codespan\">-3</code>.</p>\n<p>If <code class=\"codespan\">min</code> is specified as a function, it should return a min value, like:</p>\n<pre><code class=\"lang-js\">min: function (value) {\n    return value.min - 20;\n}\n</code></pre>\n<p><code class=\"codespan\">value</code> is an object, containing the <code class=\"codespan\">min</code> value and <code class=\"codespan\">max</code> value of the data. This function should return the min value of axis, or return <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> to make echarts use the auto calculated min value (<code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> return is only supported since <code class=\"codespan\">v4.8.0</code>).</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.max": {
    "desc": "<p>The maximum value of axis.</p>\n<p>It can be set to a special value <code class=\"codespan\">&#39;dataMax&#39;</code> so that the minimum value on this axis is set to be the maximum label.</p>\n<p>It will be automatically computed to make sure axis tick is equally distributed when not set.</p>\n<p>In category axis, it can also be set as the ordinal number. For example, if a catergory axis has <code class=\"codespan\">data: [&#39;categoryA&#39;, &#39;categoryB&#39;, &#39;categoryC&#39;]</code>, and the ordinal <code class=\"codespan\">2</code> represents <code class=\"codespan\">&#39;categoryC&#39;</code>. Moreover, it can be set as negative number, like <code class=\"codespan\">-3</code>.</p>\n<p>If <code class=\"codespan\">max</code> is specified as a function, it should return a max value, like:</p>\n<pre><code class=\"lang-js\">max: function (value) {\n    return value.max - 20;\n}\n</code></pre>\n<p><code class=\"codespan\">value</code> is an object, containing the <code class=\"codespan\">min</code> value and <code class=\"codespan\">max</code> value of the data. This function should return the max value of axis, or return <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> to make echarts use the auto calculated max value (<code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> return is only supported since <code class=\"codespan\">v4.8.0</code>).</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.scale": {
    "desc": "<p>It is available only in numerical axis, i.e., <a href=\"#parallelAxis.type\">type</a>: &#39;value&#39;.</p>\n<p>It specifies whether not to contain zero position of axis compulsively. When it is set to be <code class=\"codespan\">true</code>, the axis may not contain zero position, which is useful in the scatter chart for both value axes.</p>\n<p>This configuration item is unavailable when the <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a> are set.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.splitNumber": {
    "desc": "<p>Number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.</p>\n<p>This is unavailable for category axis.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "step": "1",
      "default": "5"
    }
  },
  "parallelAxisDefault.minInterval": {
    "desc": "<p>Minimum gap between split lines.</p>\n<p>For example, it can be set to be <code class=\"codespan\">1</code> to make sure axis label is show as integer.</p>\n<pre><code class=\"lang-js\">{\n    minInterval: 1\n}\n</code></pre>\n<p>It is available only for axis of <a href=\"#parallelAxis.type\">type</a> &#39;value&#39; or &#39;time&#39;.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.maxInterval": {
    "desc": "<p>Maximum gap between split lines.</p>\n<p>For example, in time axis (<a href=\"#parallelAxis.type\">type</a> is &#39;time&#39;), it can be set to be <code class=\"codespan\">3600 * 24 * 1000</code> to make sure that the gap between axis labels is less than or equal to one day.</p>\n<pre><code class=\"lang-js\">{\n    maxInterval: 3600 * 1000 * 24\n}\n</code></pre>\n<p>It is available only for axis of <a href=\"#parallelAxis.type\">type</a> &#39;value&#39; or &#39;time&#39;.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.interval": {
    "desc": "<p>Compulsively set segmentation interval for axis.</p>\n<p>As <a href=\"#parallelAxis.splitNumber\">splitNumber</a> is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a> to compulsively set tickings. But in most cases, we do not suggest using this, out automatic calculation is enough for most situations.</p>\n<p>This is unavailable for category axis. Timestamp should be passed for <a href=\"#parallelAxis.type\">type</a>: &#39;time&#39; axis. Logged value should be passed for <a href=\"#parallelAxis.type\">type</a>: &#39;log&#39; axis.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "parallelAxisDefault.logBase": {
    "desc": "<p>Base of logarithm, which is valid only for numeric axes with <a href=\"#parallelAxis.type\">type</a>: &#39;log&#39;.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "10"
    }
  },
  "parallelAxisDefault.silent": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code>, to prevent interaction with the axis.</p>\n"
  },
  "parallelAxisDefault.triggerEvent": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code> to enable triggering events.</p>\n<p>Parameters of the event include:</p>\n<pre><code class=\"lang-js\">{\n    // Component type: xAxis, yAxis, radiusAxis, angleAxis\n    // Each of which has an attribute for index, e.g., xAxisIndex for xAxis\n    componentType: string,\n    // Value on axis before being formatted.\n    // Click on value label to trigger event.\n    value: &#39;&#39;,\n    // Name of axis.\n    // Click on laben name to trigger event.\n    name: &#39;&#39;\n}\n</code></pre>\n"
  },
  "parallelAxisDefault.axisLine": {
    "desc": "<p>Settings related to axis line.</p>\n"
  },
  "parallelAxisDefault.axisLine.show": {
    "desc": "<p>Set this to <code class=\"codespan\">false</code> to prevent the axis line from showing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.axisLine.symbol": {
    "desc": "<p>Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It&#39;s set to be <code class=\"codespan\">&#39;none&#39;</code> by default, meaning no arrow for either end. If it is set to be <code class=\"codespan\">&#39;arrow&#39;</code>, there shall be two arrows. If there should only one arrow at the end, it should set to be <code class=\"codespan\">[&#39;none&#39;, &#39;arrow&#39;]</code>.</p>\n",
    "uiControl": {
      "type": "icon",
      "default": "none"
    }
  },
  "parallelAxisDefault.axisLine.symbolSize": {
    "desc": "<p>Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "10,15"
    }
  },
  "parallelAxisDefault.axisLine.symbolOffset": {
    "desc": "<p>Arrow offset of axis. If is array, the first number is the offset of the arrow at the beginning, and the second number is the offset of the arrow at the end. If is number, it means the arrows have the same offset.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "0,0"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.color": {
    "desc": "<p>line styleLine color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.width": {
    "desc": "<p>line style line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.type": {
    "desc": "<p>line style line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLine.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "parallelAxisDefault.axisTick": {
    "desc": "<p>Settings related to axis tick.</p>\n"
  },
  "parallelAxisDefault.axisTick.show": {
    "desc": "<p>Set this to <code class=\"codespan\">false</code> to prevent the axis tick from showing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.axisTick.alignWithLabel": {
    "desc": "<p>Align axis tick with label, which is available only when <code class=\"codespan\">boundaryGap</code> is set to be <code class=\"codespan\">true</code> in category axis. See the following picture:</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/img/axis-align-with-label.png\"></p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "parallelAxisDefault.axisTick.interval": {
    "desc": "<p>Interval of axisTick, which is available in category axis.  is set to be the same as <a href=\"#parallelAxis.axisLabel.interval\">axisLabel.interval</a> by default.</p>\n<p>It uses a strategy that labels do not overlap by default.</p>\n<p>You may set it to be 0 to display all labels compulsively.</p>\n<p>If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.</p>\n<p>On the other hand, you can control by callback function, whose format is shown below:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisTick.inside": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code> so the axis labels face the <code class=\"codespan\">inside</code> direction.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisTick.length": {
    "desc": "<p>The length of the axis tick.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.color": {
    "desc": "<p>Color of axis label is set to be <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n"
  },
  "parallelAxisDefault.axisTick.lineStyle.width": {
    "desc": "<p>axisTick line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.type": {
    "desc": "<p>axisTick line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisTick.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "parallelAxisDefault.minorTick": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.6.0</code></p>\n</blockquote>\n<p>Settings related minor ticks.</p>\n<p>Note: <code class=\"codespan\">minorTick</code> is not available in the <code class=\"codespan\">category</code> type axis.</p>\n<p>Examples:</p>\n<p>1) Using minor ticks in function plotting.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=line-function&edit=1&reset=1\" width=\"600\" height=\"350\"><iframe />\n\n\n<p>2) Using minor ticks in log axis.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=line-log&edit=1&reset=1\" width=\"600\" height=\"350\"><iframe />\n\n\n"
  },
  "parallelAxisDefault.minorTick.show": {
    "desc": "<p>If show minor ticks.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.minorTick.splitNumber": {
    "desc": "<p>Number of interval splited by minor ticks.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "step": "1",
      "default": "5"
    }
  },
  "parallelAxisDefault.minorTick.length": {
    "desc": "<p>Length of minor ticks lines。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "3"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.color": {
    "desc": "<p>Style configuration of minor ticks lines <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.width": {
    "desc": "<p>minorTick line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.type": {
    "desc": "<p>minorTick line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.minorTick.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "parallelAxisDefault.axisLabel": {
    "desc": "<p>Settings related to axis label.</p>\n"
  },
  "parallelAxisDefault.axisLabel.show": {
    "desc": "<p>Set this to <code class=\"codespan\">false</code> to prevent the axis label from appearing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "parallelAxisDefault.axisLabel.interval": {
    "desc": "<p>Interval of Axis label, which is available in category axis. </p>\n<p>It uses a strategy that labels do not overlap by default.</p>\n<p>You may set it to be 0 to display all labels compulsively.</p>\n<p>If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.</p>\n<p>On the other hand, you can control by callback function, whose format is shown below:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.inside": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code> so the axis labels face the <code class=\"codespan\">inside</code> direction.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.rotate": {
    "desc": "<p>Rotation degree of axis label, which is especially useful when there is no enough space for category axis.</p>\n<p>Rotation degree is from -90 to 90.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.margin": {
    "desc": "<p>The margin between the axis label and the axis line.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "8",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.formatter": {
    "desc": "<p>Formatter of axis label, which supports string template and callback function.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">// Use string template; template variable is the default label of axis {value}\nformatter: &#39;{value} kg&#39;\n\n// Use callback function; function parameters are axis index\nformatter: function (value, index) {\n    // Formatted to be month/day; display year only in the first label\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (idx === 0) {\n        texts.unshift(date.getYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n</code></pre>\n"
  },
  "parallelAxisDefault.axisLabel.showMinLabel": {
    "desc": "<p>Whether to show the label of the min tick. Optional values: <code class=\"codespan\">true</code>, <code class=\"codespan\">false</code>, <code class=\"codespan\">null</code>. It is auto determined by default, that is, if labels are overlapped, the label of the min tick will not be displayed.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.showMaxLabel": {
    "desc": "<p>Whether to show the label of the max tick. Optional values: <code class=\"codespan\">true</code>, <code class=\"codespan\">false</code>, <code class=\"codespan\">null</code>. It is auto determined by default, that is, if labels are overlapped, the label of the max tick will not be displayed.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "parallelAxisDefault.axisLabel.color": {
    "desc": "<p>Color of axis label is set to be <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default. Callback function is supported, in the following format:</p>\n<pre><code class=\"lang-js\">(val: string) =&gt; Color\n</code></pre>\n<p>Parameter is the text of label, and return value is the color. See the following example:</p>\n<pre><code class=\"lang-js\">textStyle: {\n    color: function (value, index) {\n        return value &gt;= 0 ? &#39;green&#39; : &#39;red&#39;;\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.axisLabel.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.axisLabel.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.axisLabel.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.axisLabel.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.axisLabel.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.axisLabel.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.axisLabel.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.axisLabel.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.axisLabel.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.axisLabel.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.axisLabel.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data": {
    "desc": "<p>Category data, available in <a href=\"#parallelAxis.type\">type</a>: &#39;category&#39; axis.</p>\n<p>If <a href=\"#parallelAxis.type\">type</a> is not specified, but <code class=\"codespan\">axis.data</code> is specified, the <a href=\"#parallelAxis.type\">type</a> is auto set as <code class=\"codespan\">&#39;category&#39;</code>.</p>\n<p>If <a href=\"#parallelAxis.type\">type</a> is specified as <code class=\"codespan\">&#39;category&#39;</code>, but <code class=\"codespan\">axis.data</code> is not specified, <code class=\"codespan\">axis.data</code> will be auto collected from <a href=\"#series.data\">series.data</a>. It brings convenience, but we should notice that <code class=\"codespan\">axis.data</code> provides then value range of the <code class=\"codespan\">&#39;category&#39;</code> axis. If  it is auto collected from <a href=\"#series.data\">series.data</a>, Only the values appearing in <a href=\"#series.data\">series.data</a> can be collected. For example, if <a href=\"#series.data\">series.data</a> is empty, nothing will be collected.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">// Name list of all categories\ndata: [&#39;Monday&#39;, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;, &#39;Sunday&#39;]\n// Each item could also be a specific configuration item.\n// In this case, `value` is used as the category name.\ndata: [{\n    value: &#39;Monday&#39;,\n    // Highlight Monday\n    textStyle: {\n        fontSize: 20,\n        color: &#39;red&#39;\n    }\n}, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;, &#39;Sunday&#39;]\n</code></pre>\n"
  },
  "parallelAxisDefault.data.value": {
    "desc": "<p>Name of a category.</p>\n"
  },
  "parallelAxisDefault.data.textStyle": {
    "desc": "<p>Text style of the category.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.data.textStyle.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.data.textStyle.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.data.textStyle.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.data.textStyle.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.data.textStyle.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.data.textStyle.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.data.textStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.data.textStyle.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.data.textStyle.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "parallelAxisDefault.data.textStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  }
}