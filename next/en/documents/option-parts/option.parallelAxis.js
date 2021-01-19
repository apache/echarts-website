window.__EC_DOC_option_parallelAxis = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "dim": {
    "desc": "<p>Dimension index of coordinate axis.</p>\n<p>For example, <a href=\"#series-parallel.data\">series-parallel.data</a> is the following data:</p>\n<pre><code class=\"lang-javascript\">[\n    [1,  55,  9,   56,  0.46,  18,  6,  &#39;good&#39;],\n    [2,  25,  11,  21,  0.65,  34,  9,  &#39;excellent&#39;],\n    [3,  56,  7,   63,  0.3,   14,  5,  &#39;good&#39;],\n    [4,  33,  7,   29,  0.33,  16,  6,  &#39;excellent&#39;],\n    { // Data item can also be an Object, so that perticular settings of its line can be set here.\n        value: [5,  42,  24,  44,  0.76,  40,  16, &#39;excellent&#39;]\n        lineStyle: {...},\n    }\n    ...\n]\n</code></pre>\n<p>In data above, each row is a &quot;data item&quot;, and each column represents a &quot;dimension&quot;. For example, the meanings of columns above are: &quot;data&quot;, &quot;AQI&quot;, &quot;PM2.5&quot;, &quot;PM10&quot;, &quot;carbon monoxide level&quot;, &quot;nitrogen dioxide level&quot;, and &quot;sulfur dioxide level&quot;.</p>\n<p><code class=\"codespan\">dim</code> defines which dimension (which <em>row</em>) of data would map to this axis.</p>\n<p>Started from <code class=\"codespan\">0</code>. For example, if the <code class=\"codespan\">dim</code> of coordinate axis is <code class=\"codespan\">1</code>, it indicates that the second row of data would map to this axis.</p>\n"
  },
  "parallelIndex": {
    "desc": "<p>It is used to define which <em>coordinate</em> the <em>axis</em> should map to.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">myChart.setOption({\n    parallel: [\n        {...},                      // the first parallel coordinate\n        {...}                       // the second parallel coordinate\n    ],\n    parallelAxis: [\n        {parallelIndex: 1, ...},    // the first coordinate axis, mapping to the second parallel coordinate\n        {parallelIndex: 0, ...},    //  the second coordinate axis, mapping to the first parallel coordinate\n        {parallelIndex: 1, ...},    //  the third coordinate axis, mapping to the second parallel coordinate\n        {parallelIndex: 0, ...}     //  the fourth coordinate axis, mapping to the first parallel coordinate\n    ],\n    ...\n});\n</code></pre>\n<p>If there is only one parallel coordinate, you don&#39;t have to configure it, whose default value is <code class=\"codespan\">0</code>.</p>\n"
  },
  "realtime": {
    "desc": "\n\n<p>Whether to refresh view when brush-selecting axis. If is set to be <code class=\"codespan\">false</code>, view is updated after brush-selecting action ends.</p>\n<p>When data amount is large, it is suggested to set to be <code class=\"codespan\">false</code> to avoid efficiency problems.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "areaSelectStyle": {
    "desc": "<p>Area selecting is available on axes. Here is some configurations.</p>\n<p><br></p>\n"
  },
  "areaSelectStyle.width": {
    "desc": "\n\n<p>Width of selecting box.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "20",
      "step": "1"
    }
  },
  "areaSelectStyle.borderWidth": {
    "desc": "\n\n<p>Border width of the select box.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1",
      "step": "0.5"
    }
  },
  "areaSelectStyle.borderColor": {
    "desc": "\n\n<p>Border color of the select box.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(160,197,232)"
    }
  },
  "areaSelectStyle.color": {
    "desc": "\n\n<p>Border fill color of the select box.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(160,197,232)"
    }
  },
  "areaSelectStyle.opacity": {
    "desc": "\n\n<p>Opacity of the select box.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "default": "0.3"
    }
  },
  "type": {
    "desc": "<p>Type of axis.</p>\n<p>Option:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;value&#39;</code>\n  Numerical axis, suitable for continuous data.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;category&#39;</code>\n  Category axis, suitable for discrete category data. Category data can be auto retrieved from <a href=\"#series.data\">series.data</a> or <a href=\"#dataset.source\">dataset.source</a>, or can be specified via <a href=\"#parallelAxis.data\">parallelAxis.data</a>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;time&#39;</code>\n  Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;log&#39;</code>\n  Log axis, suitable for log data.</p>\n</li>\n</ul>\n"
  },
  "name": {
    "desc": "\n\n<p>Name of axis.</p>\n",
    "uiControl": {
      "type": "text"
    }
  },
  "nameLocation": {
    "desc": "\n\n<p>Location of axis name.</p>\n<p><strong>Options: </strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> or <code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;end&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "start,middle,end",
      "default": "end"
    }
  },
  "nameTextStyle": {
    "desc": "<p>Text style of axis name.</p>\n"
  },
  "nameTextStyle.color": {
    "desc": "\n\n<p>Color of axis name uses <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "nameTextStyle.fontStyle": {
    "desc": "\n\n<p>axis name font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "nameTextStyle.fontWeight": {
    "desc": "\n\n<p>axis name font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "nameTextStyle.fontFamily": {
    "desc": "\n\n<p>axis name font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "nameTextStyle.fontSize": {
    "desc": "\n\n<p>axis name font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "nameTextStyle.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "nameTextStyle.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "nameTextStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "nameTextStyle.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "nameTextStyle.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "nameTextStyle.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "nameTextStyle.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "nameTextStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "nameTextStyle.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "200",
      "step": "1"
    }
  },
  "nameTextStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "200",
      "step": "1"
    }
  },
  "nameTextStyle.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "nameTextStyle.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "nameTextStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "nameTextStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n"
  },
  "nameTextStyle.lineOverflow": {
    "desc": "<p>Determine how to display the text when it&#39;s overflow on height.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "nameTextStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "nameTextStyle.rich.<style_name>.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "nameTextStyle.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "nameTextStyle.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "nameTextStyle.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "nameTextStyle.rich.<style_name>.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "nameTextStyle.rich.<style_name>.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "nameTextStyle.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "nameTextStyle.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "nameTextStyle.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "nameTextStyle.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "nameTextStyle.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "nameTextStyle.rich.<style_name>.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "nameTextStyle.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "nameTextStyle.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "nameTextStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "nameTextStyle.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "nameTextStyle.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "nameTextStyle.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameTextStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "nameGap": {
    "desc": "\n\n<p>Gap between axis name and axis line.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5",
      "default": "15"
    }
  },
  "nameRotate": {
    "desc": "\n\n<p>Rotation of axis name.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-360",
      "max": "360",
      "step": "1"
    }
  },
  "inverse": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">true</code> to invert the axis.\nThis is a new option available from Echarts 3 and newer.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "boundaryGap": {
    "desc": "\n\n<p>The boundary gap on both sides of a coordinate axis. The setting and behavior of category axes and non-category axes are different.</p>\n<p>The <code class=\"codespan\">boundaryGap</code> of category axis can be set to either <code class=\"codespan\">true</code> or <code class=\"codespan\">false</code>. Default value is set to be <code class=\"codespan\">true</code>, in which case <a href=\"#parallelAxis.axisTick\">axisTick</a> is served only as a separation line, and labels and data appear only in the center part of two <a href=\"#parallelAxis.axisTick\">axis ticks</a>, which is called <em>band</em>.</p>\n<p>For non-category axis, including time, numerical value, and log axes, <code class=\"codespan\">boundaryGap</code> is an array of two values, representing the spanning range between minimum and maximum value. The value can be set in numeric value or relative percentage, which becomes invalid after setting <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a>.\n<strong>Example: </strong></p>\n<pre><code class=\"lang-js\">boundaryGap: [&#39;20%&#39;, &#39;20%&#39;]\n</code></pre>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "min": {
    "desc": "\n\n<p>The minimun value of axis.</p>\n<p>It can be set to a special value <code class=\"codespan\">&#39;dataMin&#39;</code> so that the minimum value on this axis is set to be the minimum label.</p>\n<p>It will be automatically computed to make sure axis tick is equally distributed when not set.</p>\n<p>In category axis, it can also be set as the ordinal number. For example, if a catergory axis has <code class=\"codespan\">data: [&#39;categoryA&#39;, &#39;categoryB&#39;, &#39;categoryC&#39;]</code>, and the ordinal <code class=\"codespan\">2</code> represents <code class=\"codespan\">&#39;categoryC&#39;</code>. Moreover, it can be set as negative number, like <code class=\"codespan\">-3</code>.</p>\n<p>If <code class=\"codespan\">min</code> is specified as a function, it should return a min value, like:</p>\n<pre><code class=\"lang-js\">min: function (value) {\n    return value.min - 20;\n}\n</code></pre>\n<p><code class=\"codespan\">value</code> is an object, containing the <code class=\"codespan\">min</code> value and <code class=\"codespan\">max</code> value of the data. This function should return the min value of axis, or return <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> to make echarts use the auto calculated min value (<code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> return is only supported since <code class=\"codespan\">v4.8.0</code>).</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "max": {
    "desc": "\n\n<p>The maximum value of axis.</p>\n<p>It can be set to a special value <code class=\"codespan\">&#39;dataMax&#39;</code> so that the minimum value on this axis is set to be the maximum label.</p>\n<p>It will be automatically computed to make sure axis tick is equally distributed when not set.</p>\n<p>In category axis, it can also be set as the ordinal number. For example, if a catergory axis has <code class=\"codespan\">data: [&#39;categoryA&#39;, &#39;categoryB&#39;, &#39;categoryC&#39;]</code>, and the ordinal <code class=\"codespan\">2</code> represents <code class=\"codespan\">&#39;categoryC&#39;</code>. Moreover, it can be set as negative number, like <code class=\"codespan\">-3</code>.</p>\n<p>If <code class=\"codespan\">max</code> is specified as a function, it should return a max value, like:</p>\n<pre><code class=\"lang-js\">max: function (value) {\n    return value.max - 20;\n}\n</code></pre>\n<p><code class=\"codespan\">value</code> is an object, containing the <code class=\"codespan\">min</code> value and <code class=\"codespan\">max</code> value of the data. This function should return the max value of axis, or return <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> to make echarts use the auto calculated max value (<code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code> return is only supported since <code class=\"codespan\">v4.8.0</code>).</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "scale": {
    "desc": "\n\n<p>It is available only in numerical axis, i.e., <a href=\"#parallelAxis.type\">type</a>: &#39;value&#39;.</p>\n<p>It specifies whether not to contain zero position of axis compulsively. When it is set to be <code class=\"codespan\">true</code>, the axis may not contain zero position, which is useful in the scatter chart for both value axes.</p>\n<p>This configuration item is unavailable when the <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a> are set.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "splitNumber": {
    "desc": "\n\n<p>Number of segments that the axis is split into. Note that this number serves only as a recommendation, and the true segments may be adjusted based on readability.</p>\n<p>This is unavailable for category axis.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "step": "1",
      "default": "5"
    }
  },
  "minInterval": {
    "desc": "\n\n<p>Minimum gap between split lines.</p>\n<p>For example, it can be set to be <code class=\"codespan\">1</code> to make sure axis label is show as integer.</p>\n<pre><code class=\"lang-js\">{\n    minInterval: 1\n}\n</code></pre>\n<p>It is available only for axis of <a href=\"#parallelAxis.type\">type</a> &#39;value&#39; or &#39;time&#39;.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "maxInterval": {
    "desc": "\n\n<p>Maximum gap between split lines.</p>\n<p>For example, in time axis (<a href=\"#parallelAxis.type\">type</a> is &#39;time&#39;), it can be set to be <code class=\"codespan\">3600 * 24 * 1000</code> to make sure that the gap between axis labels is less than or equal to one day.</p>\n<pre><code class=\"lang-js\">{\n    maxInterval: 3600 * 1000 * 24\n}\n</code></pre>\n<p>It is available only for axis of <a href=\"#parallelAxis.type\">type</a> &#39;value&#39; or &#39;time&#39;.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "interval": {
    "desc": "\n\n<p>Compulsively set segmentation interval for axis.</p>\n<p>As <a href=\"#parallelAxis.splitNumber\">splitNumber</a> is a recommendation value, the calculated tick may not be the same as expected. In this case, interval should be used along with <a href=\"#parallelAxis.min\">min</a> and <a href=\"#parallelAxis.max\">max</a> to compulsively set tickings. But in most cases, we do not suggest using this, out automatic calculation is enough for most situations.</p>\n<p>This is unavailable for category axis. Timestamp should be passed for <a href=\"#parallelAxis.type\">type</a>: &#39;time&#39; axis. Logged value should be passed for <a href=\"#parallelAxis.type\">type</a>: &#39;log&#39; axis.</p>\n",
    "uiControl": {
      "type": "number"
    }
  },
  "logBase": {
    "desc": "\n\n<p>Base of logarithm, which is valid only for numeric axes with <a href=\"#parallelAxis.type\">type</a>: &#39;log&#39;.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "10"
    }
  },
  "silent": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code>, to prevent interaction with the axis.</p>\n"
  },
  "triggerEvent": {
    "desc": "<p>Set this to <code class=\"codespan\">true</code> to enable triggering events.</p>\n<p>Parameters of the event include:</p>\n<pre><code class=\"lang-js\">{\n    // Component type: xAxis, yAxis, radiusAxis, angleAxis\n    // Each of which has an attribute for index, e.g., xAxisIndex for xAxis\n    componentType: string,\n    // Value on axis before being formatted.\n    // Click on value label to trigger event.\n    value: &#39;&#39;,\n    // Name of axis.\n    // Click on laben name to trigger event.\n    name: &#39;&#39;\n}\n</code></pre>\n"
  },
  "axisLine": {
    "desc": "<p>Settings related to axis line.</p>\n"
  },
  "axisLine.show": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">false</code> to prevent the axis line from showing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "axisLine.symbol": {
    "desc": "\n\n<p>Symbol of the two ends of the axis. It could be a string, representing the same symbol for two ends; or an array with two string elements, representing the two ends separately. It&#39;s set to be <code class=\"codespan\">&#39;none&#39;</code> by default, meaning no arrow for either end. If it is set to be <code class=\"codespan\">&#39;arrow&#39;</code>, there shall be two arrows. If there should only one arrow at the end, it should set to be <code class=\"codespan\">[&#39;none&#39;, &#39;arrow&#39;]</code>.</p>\n",
    "uiControl": {
      "type": "icon",
      "default": "none"
    }
  },
  "axisLine.symbolSize": {
    "desc": "\n\n<p>Size of the arrows at two ends. The first is the width perpendicular to the axis, the next is the width parallel to the axis.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "10,15"
    }
  },
  "axisLine.symbolOffset": {
    "desc": "\n\n<p>Arrow offset of axis. If is array, the first number is the offset of the arrow at the beginning, and the second number is the offset of the arrow at the end. If is number, it means the arrows have the same offset.</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "0,0"
    }
  },
  "axisLine.lineStyle.color": {
    "desc": "\n\n<p>line styleLine color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLine.lineStyle.width": {
    "desc": "\n\n<p>line style line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.type": {
    "desc": "\n\n<p>line style line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisLine.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisLine.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisLine.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisTick": {
    "desc": "<p>Settings related to axis tick.</p>\n"
  },
  "axisTick.show": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">false</code> to prevent the axis tick from showing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "axisTick.alignWithLabel": {
    "desc": "\n\n<p>Align axis tick with label, which is available only when <code class=\"codespan\">boundaryGap</code> is set to be <code class=\"codespan\">true</code> in category axis. See the following picture:</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/img/axis-align-with-label.png\"></p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "axisTick.interval": {
    "desc": "\n\n\n\n<p>Interval of axisTick, which is available in category axis.  is set to be the same as <a href=\"#parallelAxis.axisLabel.interval\">axisLabel.interval</a> by default.</p>\n<p>It uses a strategy that labels do not overlap by default.</p>\n<p>You may set it to be 0 to display all labels compulsively.</p>\n<p>If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.</p>\n<p>On the other hand, you can control by callback function, whose format is shown below:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "axisTick.inside": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">true</code> so the axis labels face the <code class=\"codespan\">inside</code> direction.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "axisTick.length": {
    "desc": "\n\n<p>The length of the axis tick.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "5"
    }
  },
  "axisTick.lineStyle": {
    "desc": "<p>Line style of axis ticks.</p>\n"
  },
  "axisTick.lineStyle.color": {
    "desc": "<p>Color of axis label is set to be <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n"
  },
  "axisTick.lineStyle.width": {
    "desc": "\n\n<p>axisTick line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.type": {
    "desc": "\n\n<p>axisTick line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisTick.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisTick.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisTick.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "minorTick": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.6.0</code></p>\n</blockquote>\n<p>Settings related minor ticks.</p>\n<p>Note: <code class=\"codespan\">minorTick</code> is not available in the <code class=\"codespan\">category</code> type axis.</p>\n<p>Examples:</p>\n<p>1) Using minor ticks in function plotting.</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/en/view.html?c=line-function&edit=1&reset=1\" width=\"600\" height=\"350\"></iframe>\n\n\n<p>2) Using minor ticks in log axis.</p>\n<iframe  data-src=\"https://echarts.apache.org/next/examples/en/view.html?c=line-log&edit=1&reset=1\" width=\"600\" height=\"350\"></iframe>\n\n"
  },
  "minorTick.show": {
    "desc": "\n\n<p>If show minor ticks.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "minorTick.splitNumber": {
    "desc": "\n\n<p>Number of interval splited by minor ticks.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "1",
      "step": "1",
      "default": "5"
    }
  },
  "minorTick.length": {
    "desc": "\n\n<p>Length of minor ticks lines。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5",
      "default": "3"
    }
  },
  "minorTick.lineStyle.color": {
    "desc": "\n\n<p>Style configuration of minor ticks lines <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a>。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "minorTick.lineStyle.width": {
    "desc": "\n\n<p>minorTick line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "minorTick.lineStyle.type": {
    "desc": "\n\n<p>minorTick line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "minorTick.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "minorTick.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "minorTick.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "minorTick.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "minorTick.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisLabel": {
    "desc": "<p>Settings related to axis label.</p>\n"
  },
  "axisLabel.show": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">false</code> to prevent the axis label from appearing.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "axisLabel.interval": {
    "desc": "\n\n\n\n<p>Interval of Axis label, which is available in category axis. </p>\n<p>It uses a strategy that labels do not overlap by default.</p>\n<p>You may set it to be 0 to display all labels compulsively.</p>\n<p>If it is set to be 1, it means that labels are shown once after one label. And if it is set to be 2, it means labels are shown once after two labels, and so on.</p>\n<p>On the other hand, you can control by callback function, whose format is shown below:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is index of category, and the second parameter is the name of category. The return values decides whether to display label.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "axisLabel.inside": {
    "desc": "\n\n<p>Set this to <code class=\"codespan\">true</code> so the axis labels face the <code class=\"codespan\">inside</code> direction.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "axisLabel.rotate": {
    "desc": "\n\n<p>Rotation degree of axis label, which is especially useful when there is no enough space for category axis.</p>\n<p>Rotation degree is from -90 to 90.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "axisLabel.margin": {
    "desc": "\n\n<p>The margin between the axis label and the axis line.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "8",
      "step": "0.5"
    }
  },
  "axisLabel.formatter": {
    "desc": "<p>Formatter of axis label, which supports string template and callback function.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">// Use string template; template variable is the default label of axis {value}\nformatter: &#39;{value} kg&#39;\n// Use callback.\nformatter: function (value, index) {\n    return value + &#39;kg&#39;;\n}\n</code></pre>\n<hr>\n<p>For axes of time <a href=\"#.type\">type</a>: <code class=\"codespan\">&#39;time&#39;</code>, <code class=\"codespan\">formatter</code> supports the following forms:</p>\n<ul>\n<li><strong>String Templates</strong>: an easy and fast way to make frequently used date/time template, formed in <code class=\"codespan\">string</code></li>\n<li><strong>Callback Functions</strong>: customized formatter to make complex format, formed in <code class=\"codespan\">Function</code></li>\n<li><strong>Cascading Templates</strong>: to adopt different formatters for different time granularity, formed in <code class=\"codespan\">object</code></li>\n</ul>\n<p>Next, we are going to introduce these three forms one by one.</p>\n<p><strong> String Templates </strong></p>\n<p>Using string templates is an easy way to format date/time with frequently used formats. If it can be used to make what you want, you are advised to do so. If not, you could then consider the others. Supported formats are:</p>\n<table>\n<thead>\n<tr>\n<th>Group</th>\n<th>Template</th>\n<th>Value (EN)</th>\n<th>Value (ZH)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Year</td>\n<td>{yyyy}</td>\n<td>e.g., 2020, 2021, ...</td>\n<td>例：2020, 2021, ...</td>\n</tr>\n<tr>\n<td></td>\n<td>{yy}</td>\n<td>00-99</td>\n<td>00-99</td>\n</tr>\n<tr>\n<td>Quarter</td>\n<td>{Q}</td>\n<td>1, 2, 3, 4</td>\n<td>1, 2, 3, 4</td>\n</tr>\n<tr>\n<td>Month</td>\n<td>{MMMM}</td>\n<td>e.g., January, February, ...</td>\n<td>一月、二月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MMM}</td>\n<td>e.g., Jan, Feb, ...</td>\n<td>1月、2月、……</td>\n</tr>\n<tr>\n<td></td>\n<td>{MM}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{M}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Day of Month</td>\n<td>{dd}</td>\n<td>01-31</td>\n<td>01-31</td>\n</tr>\n<tr>\n<td></td>\n<td>{d}</td>\n<td>1-31</td>\n<td>1-31</td>\n</tr>\n<tr>\n<td>Day of Week</td>\n<td>{eeee}</td>\n<td>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>\n<td>星期日、星期一、星期二、星期三、星期四、星期五、星期六</td>\n</tr>\n<tr>\n<td></td>\n<td>{ee}</td>\n<td>Sun, Mon, Tues, Wed, Thu, Fri, Sat</td>\n<td>日、一、二、三、四、五、六</td>\n</tr>\n<tr>\n<td></td>\n<td>{e}</td>\n<td>1-54</td>\n<td>1-54</td>\n</tr>\n<tr>\n<td>Hour</td>\n<td>{HH}</td>\n<td>00-23</td>\n<td>00-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{H}</td>\n<td>0-23</td>\n<td>0-23</td>\n</tr>\n<tr>\n<td></td>\n<td>{hh}</td>\n<td>01-12</td>\n<td>01-12</td>\n</tr>\n<tr>\n<td></td>\n<td>{h}</td>\n<td>1-12</td>\n<td>1-12</td>\n</tr>\n<tr>\n<td>Minute</td>\n<td>{mm}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{m}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Second</td>\n<td>{ss}</td>\n<td>00-59</td>\n<td>00-59</td>\n</tr>\n<tr>\n<td></td>\n<td>{s}</td>\n<td>0-59</td>\n<td>0-59</td>\n</tr>\n<tr>\n<td>Millisecond</td>\n<td>{SSS}</td>\n<td>000-999</td>\n<td>000-999</td>\n</tr>\n<tr>\n<td></td>\n<td>{S}</td>\n<td>0-999</td>\n<td>0-999</td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>Templates of other languages can be found in <a href=\"https://github.com/apache/echarts/tree/master/src/i18n\" target=\"_blank\">the language package</a>. Please refer to <a href=\"api.html#echarts.registerLocale\" target=\"_blank\">echarts.registerLocale</a> to register a language.</p>\n</blockquote>\n<p>Example:</p>\n<pre><code class=\"lang-js\">formatter: &#39;{yyyy}-{MM}-{dd}&#39; // gets labels like &#39;2020-12-02&#39;\nformatter: &#39;Day {d}&#39; // gets labels like &#39;Day 2&#39;\n</code></pre>\n<p><strong> Callback Functions </strong></p>\n<p>Callback functions can be used to get different formats for different axis tick values. Sometimes, if you have complex date/time formatting requirement, third-party libraries like <a href=\"https://momentjs.com/\" target=\"_blank\">Moment.js</a> or <a href=\"https://date-fns.org/\" target=\"_blank\">date-fns</a> can be used to return formatted labels.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">// Use callback function; function parameters are axis index\nformatter: function (value, index) {\n    // Formatted to be month/day; display year only in the first label\n    var date = new Date(value);\n    var texts = [(date.getMonth() + 1), date.getDate()];\n    if (idx === 0) {\n        texts.unshift(date.getYear());\n    }\n    return texts.join(&#39;/&#39;);\n}\n</code></pre>\n<p><strong> Cascading Templates </strong></p>\n<p>Sometimes, we wish to use different formats for different time granularity. For example, in a quarter-year chart, we may wish to see the month name with the first date of the month, while see the date name with others. This can be made with:</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">formatter: {\n    month: &#39;{MMMM}&#39;, // Jan, Feb, ...\n    day: &#39;{d}&#39; // 1, 2, ...\n}\n</code></pre>\n<p>Supported levels and their default formatters are:</p>\n<pre><code class=\"lang-js\">{\n    year: &#39;{yyyy}&#39;,\n    month: &#39;{MMM}&#39;,\n    day: &#39;{d}&#39;,\n    hour: &#39;{HH}:{mm}&#39;,\n    minute: &#39;{HH}:{mm}&#39;,\n    second: &#39;{HH}:{mm}:{ss}&#39;,\n    millisecond: &#39;{hh}:{mm}:{ss} {SSS}&#39;,\n    none: &#39;{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}&#39;\n}\n</code></pre>\n<p>Let&#39;s take <code class=\"codespan\">day</code> for example. When a tick value is <code class=\"codespan\">0</code> for its hour, minute, second, and millisecond, <code class=\"codespan\">day</code> level will be used to make formatter. <code class=\"codespan\">none</code> is used when no other level fulfills, which is for tick values with millisecond values other than <code class=\"codespan\">0</code>.</p>\n<p><strong> Rich Text </strong></p>\n<p>The above three forms all support rich text, so it can be used to make some complex effects.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: {\n            // Display year and month information on the first data of a year\n            year: &#39;{yearStyle|{yyyy}}\\n{monthStyle|{MMM}}&#39;,\n            month: &#39;{monthStyle|{MMM}}&#39;\n        },\n        rich: {\n            yearStyle: {\n                // Make yearly text more standing out\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            monthStyle: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n<p>The above example can also be made with a callback function:</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">xAxis: {\n    type: &#39;time&#39;,\n    axisLabel: {\n        formatter: function (value) {\n            const date = new Date(value);\n            const yearStart = new Date(value);\n            yearStart.setMonth(0);\n            yearStart.setDate(1);\n            yearStart.setHours(0);\n            yearStart.setMinutes(0);\n            yearStart.setSeconds(0);\n            yearStart.setMilliseconds(0);\n            // Whether a tick value is the start of a year\n            if (date.getTime() === yearStart.getTime()) {\n                return &#39;{year|&#39; + date.getFullYear() + &#39;}\\n&#39;\n                    + &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;;\n            }\n            else {\n                return &#39;{month|&#39; + (date.getMonth() + 1) + &#39;月}&#39;\n            }\n        },\n        rich: {\n            year: {\n                color: &#39;#000&#39;,\n                fontWeight: &#39;bold&#39;\n            },\n            month: {\n                color: &#39;#999&#39;\n            }\n        }\n    }\n},\n</code></pre>\n"
  },
  "axisLabel.showMinLabel": {
    "desc": "\n\n<p>Whether to show the label of the min tick. Optional values: <code class=\"codespan\">true</code>, <code class=\"codespan\">false</code>, <code class=\"codespan\">null</code>. It is auto determined by default, that is, if labels are overlapped, the label of the min tick will not be displayed.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "axisLabel.showMaxLabel": {
    "desc": "\n\n<p>Whether to show the label of the max tick. Optional values: <code class=\"codespan\">true</code>, <code class=\"codespan\">false</code>, <code class=\"codespan\">null</code>. It is auto determined by default, that is, if labels are overlapped, the label of the max tick will not be displayed.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "axisLabel.color": {
    "desc": "\n\n<p>Color of axis label is set to be <a href=\"#parallelAxis.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default. Callback function is supported, in the following format:</p>\n<pre><code class=\"lang-js\">(val: string) =&gt; Color\n</code></pre>\n<p>Parameter is the text of label, and return value is the color. See the following example:</p>\n<pre><code class=\"lang-js\">textStyle: {\n    color: function (value, index) {\n        return value &gt;= 0 ? &#39;green&#39; : &#39;red&#39;;\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "axisLabel.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "axisLabel.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "axisLabel.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "axisLabel.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "axisLabel.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "axisLabel.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "axisLabel.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "axisLabel.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "axisLabel.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "200",
      "step": "1"
    }
  },
  "axisLabel.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "200",
      "step": "1"
    }
  },
  "axisLabel.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "axisLabel.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "axisLabel.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n"
  },
  "axisLabel.lineOverflow": {
    "desc": "<p>Determine how to display the text when it&#39;s overflow on height.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "axisLabel.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "axisLabel.rich.<style_name>.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "axisLabel.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "axisLabel.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "axisLabel.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "axisLabel.rich.<style_name>.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "axisLabel.rich.<style_name>.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "axisLabel.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "axisLabel.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "axisLabel.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "axisLabel.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "axisLabel.rich.<style_name>.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "axisLabel.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "axisLabel.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "axisLabel.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisLabel.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "axisLabel.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisLabel.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data": {
    "desc": "<p>Category data, available in <a href=\"#parallelAxis.type\">type</a>: &#39;category&#39; axis.</p>\n<p>If <a href=\"#parallelAxis.type\">type</a> is not specified, but <code class=\"codespan\">axis.data</code> is specified, the <a href=\"#parallelAxis.type\">type</a> is auto set as <code class=\"codespan\">&#39;category&#39;</code>.</p>\n<p>If <a href=\"#parallelAxis.type\">type</a> is specified as <code class=\"codespan\">&#39;category&#39;</code>, but <code class=\"codespan\">axis.data</code> is not specified, <code class=\"codespan\">axis.data</code> will be auto collected from <a href=\"#series.data\">series.data</a>. It brings convenience, but we should notice that <code class=\"codespan\">axis.data</code> provides then value range of the <code class=\"codespan\">&#39;category&#39;</code> axis. If  it is auto collected from <a href=\"#series.data\">series.data</a>, Only the values appearing in <a href=\"#series.data\">series.data</a> can be collected. For example, if <a href=\"#series.data\">series.data</a> is empty, nothing will be collected.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">// Name list of all categories\ndata: [&#39;Monday&#39;, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;, &#39;Sunday&#39;]\n// Each item could also be a specific configuration item.\n// In this case, `value` is used as the category name.\ndata: [{\n    value: &#39;Monday&#39;,\n    // Highlight Monday\n    textStyle: {\n        fontSize: 20,\n        color: &#39;red&#39;\n    }\n}, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;, &#39;Friday&#39;, &#39;Saturday&#39;, &#39;Sunday&#39;]\n</code></pre>\n"
  },
  "data.value": {
    "desc": "<p>Name of a category.</p>\n"
  },
  "data.textStyle": {
    "desc": "<p>Text style of the category.</p>\n"
  },
  "data.textStyle.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.textStyle.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.textStyle.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.textStyle.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.textStyle.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.textStyle.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.textStyle.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.textStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.textStyle.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.textStyle.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.textStyle.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.textStyle.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.textStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.textStyle.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "200",
      "step": "1"
    }
  },
  "data.textStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "200",
      "step": "1"
    }
  },
  "data.textStyle.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.textStyle.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.textStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "data.textStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n"
  },
  "data.textStyle.lineOverflow": {
    "desc": "<p>Determine how to display the text when it&#39;s overflow on height.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "data.textStyle.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "data.textStyle.rich.<style_name>.color": {
    "desc": "\n\n<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.textStyle.rich.<style_name>.fontStyle": {
    "desc": "\n\n<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.textStyle.rich.<style_name>.fontWeight": {
    "desc": "\n\n<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.textStyle.rich.<style_name>.fontFamily": {
    "desc": "\n\n<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.textStyle.rich.<style_name>.fontSize": {
    "desc": "\n\n<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.textStyle.rich.<style_name>.align": {
    "desc": "\n\n<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.textStyle.rich.<style_name>.verticalAlign": {
    "desc": "\n\n<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.textStyle.rich.<style_name>.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.textStyle.rich.<style_name>.backgroundColor": {
    "desc": "\n\n<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.textStyle.rich.<style_name>.borderColor": {
    "desc": "\n\n<p>Border color of the text fragment.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.textStyle.rich.<style_name>.borderWidth": {
    "desc": "\n\n<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.borderRadius": {
    "desc": "\n\n<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.textStyle.rich.<style_name>.padding": {
    "desc": "\n\n<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.textStyle.rich.<style_name>.shadowColor": {
    "desc": "\n\n<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.textStyle.rich.<style_name>.shadowBlur": {
    "desc": "\n\n<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.shadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.shadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.textStyle.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.textStyle.rich.<style_name>.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.textStyle.rich.<style_name>.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.textStyle.rich.<style_name>.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.textStyle.rich.<style_name>.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  }
}