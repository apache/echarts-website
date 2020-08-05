window.__EC_DOC_option_series_heatmap = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"#tooltip\">tooltip</a> and filtering with <a href=\"#legend\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>The coordinate used in the series, whose options are:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian2d&#39;</code></p>\n<p>  Use a two-dimensional rectangular coordinate (also known as Cartesian coordinate), with <a href=\"#series-heatmap.xAxisIndex\">xAxisIndex</a> and <a href=\"#series-heatmap.yAxisIndex\">yAxisIndex</a> to assign the corresponding axis component.</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;geo&#39;</code></p>\n<p>  Use geographic coordinate, with <a href=\"#series-heatmap.geoIndex\">geoIndex</a> to assign the corresponding geographic coordinate components.</p>\n</li>\n</ul>\n"
  },
  "xAxisIndex": {
    "desc": "<p>Index of <a href=\"#xAxis\">x axis</a> to combine with, which is  useful for multiple x axes in one chart.</p>\n"
  },
  "yAxisIndex": {
    "desc": "<p>Index of <a href=\"#yAxis\">y axis</a> to combine with, which is  useful for multiple y axes in one chart.</p>\n"
  },
  "geoIndex": {
    "desc": "<p>Index of <a href=\"#geo\">geographic coordinate</a> to combine with, which is useful for multiple geographic axes in one chart.</p>\n"
  },
  "calendarIndex": {
    "desc": "<p>Index of <a href=\"#calendar\">calendar coordinates</a> to combine with, which is useful for multiple calendar coordinates in one chart.</p>\n"
  },
  "pointSize": {
    "desc": "<p>Point size of each data point. It is valid with <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a> of &#39;geo&#39; value.</p>\n"
  },
  "blurSize": {
    "desc": "<p>Blur size of each data point. It is valid with <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a> of &#39;geo&#39; value.</p>\n"
  },
  "minOpacity": {
    "desc": "<p>Minimum opacity. It is valid with <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a> of &#39;geo&#39; value.</p>\n"
  },
  "maxOpacity": {
    "desc": "<p>Maximum opacity. It is valid with <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a> of &#39;geo&#39; value.</p>\n"
  },
  "progressive": {
    "desc": "<p><code class=\"codespan\">progressive</code> specifies the amount of graphic elements that can be rendered within a frame (about 16ms) if &quot;progressive rendering&quot; enabled.</p>\n<p>When data amount is from thousand to more than 10 million, it will take too long time to render all of the graphic elements. Since ECharts 4, &quot;progressive rendering&quot; is supported in its workflow, which processes and renders data chunk by chunk alone with each frame, avoiding to block the UI thread of the browser.</p>\n<p>Set <code class=\"codespan\">progressive: 0</code> to disable progressive permanently. By default, progressive is auto-enabled when data amount is bigger than <code class=\"codespan\">progressiveThreshold</code>.</p>\n"
  },
  "progressiveThreshold": {
    "desc": "<p>If current data amount is over the threshold, &quot;progressive rendering&quot; is enabled.</p>\n"
  },
  "label": {
    "desc": "<p>Work for <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a>: &#39;cartesian2d&#39;.</p>\n"
  },
  "label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "itemStyle": {
    "desc": "<p>Work for <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a>: &#39;cartesian2d&#39;.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "emphasis.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "emphasis.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "emphasis.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "emphasis.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "emphasis.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "emphasis.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "emphasis.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "emphasis.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "emphasis.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "emphasis.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "emphasis.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "emphasis.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "emphasis.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "emphasis.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data": {
    "desc": "<p>Data array of series, which can be in the following forms:</p>\n<p>Notice, if no <code class=\"codespan\">data</code> specified in series, and there is <a href=\"#dataset\">dataset</a> in option, series will use the first <a href=\"#dataset\">dataset</a> as its datasource. If <code class=\"codespan\">data</code> has been specified, <a href=\"#dataset\">dataset</a> will not used.</p>\n<p><code class=\"codespan\">series.datasetIndex</code> can be used to specify other <a href=\"#dataset\">dataset</a>.</p>\n<p>Basically, data is represented by a two-dimension array, like the example below, where each column is named as a &quot;dimension&quot;.</p>\n<pre><code class=\"lang-js\">series: [{\n    data: [\n        // dimX   dimY   other dimensions ...\n        [  3.4,    4.5,   15,   43],\n        [  4.2,    2.3,   20,   91],\n        [  10.8,   9.5,   30,   18],\n        [  7.2,    8.8,   18,   57]\n    ]\n}]\n</code></pre>\n<ul>\n<li>In <a href=\"#grid\">cartesian (grid)</a>, &quot;dimX&quot; and &quot;dimY&quot; correspond to <a href=\"#xAxis\">xAxis</a> and <a href=\"#yAxis\">yAxis</a> respectively.</li>\n<li>In <a href=\"#polar\">polar</a> &quot;dimX&quot; and &quot;dimY&quot; correspond to <a href=\"#radiusAxis\">radiusAxis</a> 和 <a href=\"#anbleAxis\">angleAxis</a> respectively.</li>\n<li>Other dimensions are optional, which can be used in other places. For example:<ul>\n<li><a href=\"#visualMap\">visualMap</a> can map one or more dimensions to visual (color, symbol size ...).</li>\n<li><a href=\"#series.symbolSize\">series.symbolSize</a> can be set as a callback function, where symbol size can be calculated by values of a certain dimension.</li>\n<li>Values in other dimensions can be shown by <a href=\"#tooltip.formatter\">tooltip.formatter</a> or <a href=\"#series.label.formatter\">series.label.formatter</a>.</li>\n</ul>\n</li>\n</ul>\n<p>Especially, when there is one and only one category axis (axis.type is <code class=\"codespan\">&#39;category&#39;</code>), data can be simply be represented by a one-dimension array, like:</p>\n<pre><code class=\"lang-js\">xAxis: {\n    data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;]\n},\nseries: [{\n    // Each item corresponds to each item in xAxis.data.\n    data: [23,  44,  55,  19]\n    // In fact, it is the simplification of the format below:\n    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]\n}]\n</code></pre>\n<p><br>\n<strong>Relationship between &quot;value&quot; and <a href=\"#xAxis.type\">axis.type</a></strong></p>\n<ul>\n<li><p>When a dimension corresponds to a value axis (axis.type is <code class=\"codespan\">&#39;value&#39;</code> or <code class=\"codespan\">&#39;log&#39;</code>):</p>\n<p>  The value can be a <code class=\"codespan\">number</code> (like <code class=\"codespan\">12</code>) (can also be a number in a <code class=\"codespan\">string</code> format, like <code class=\"codespan\">&#39;12&#39;</code>).</p>\n</li>\n<li><p>When a dimension corresponds to a category axis (axis.type is <code class=\"codespan\">&#39;category&#39;</code>):</p>\n<p>  The value should be the ordinal of the axis.data (based on <code class=\"codespan\">0</code>), the string value of the axis.data. For example:</p>\n<pre><code class=\"lang-js\">  xAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;Monday&#39;, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;]\n  },\n  yAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;, &#39;p&#39;, &#39;q&#39;]\n  },\n  series: [{\n      data: [\n          // xAxis      yAxis\n          [  0,           0,    2  ], // This point is located at xAxis: &#39;Monday&#39;, yAxis: &#39;a&#39;.\n          [  &#39;Thursday&#39;,  2,    1  ], // This point is located at xAxis: &#39;Thursday&#39;, yAxis: &#39;m&#39;.\n          [  2,          &#39;p&#39;,   2  ], // This point is located at xAxis: &#39;Wednesday&#39;, yAxis: &#39;p&#39;.\n          [  3,           3,    5  ]\n      ]\n  }]\n</code></pre>\n<p>  There is an example of double category axes: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=scatter-punchCard\" target=\"_blank\">Github Punchcard</a>.</p>\n</li>\n<li><p>When a dimension corresponds to a time axis (type is <code class=\"codespan\">&#39;time&#39;</code>), the value can be:</p>\n<ul>\n<li>a timestamp, like <code class=\"codespan\">1484141700832</code>, which represents a UTC time.</li>\n<li>a date string, in one of the formats below:<ul>\n<li>a subset of <a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\" target=\"_blank\">ISO 8601</a>, only including (all of these are treated as local time unless timezone is specified, which is consistent with <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a>):<ul>\n<li>only part of year/month/date/time are specified: <code class=\"codespan\">&#39;2012-03&#39;</code>, <code class=\"codespan\">&#39;2012-03-01&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05:06&#39;</code>.</li>\n<li>separated by <code class=\"codespan\">&quot;T&quot;</code> or a space: <code class=\"codespan\">&#39;2012-03-01T12:22:33.123&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 12:22:33.123&#39;</code>.</li>\n<li>timezone specified: <code class=\"codespan\">&#39;2012-03-01T12:22:33Z&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33+8000&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33-05:00&#39;</code>.</li>\n</ul>\n</li>\n<li>other date string format (all of these are treated as local time):\n<code class=\"codespan\">&#39;2012&#39;</code>, <code class=\"codespan\">&#39;2012-3-1&#39;</code>, <code class=\"codespan\">&#39;2012/3/1&#39;</code>, <code class=\"codespan\">&#39;2012/03/01&#39;</code>,\n<code class=\"codespan\">&#39;2009/6/12 2:00&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08.123&#39;</code>.</li>\n</ul>\n</li>\n<li>a JavaScript Date instance created by user:<ul>\n<li>Caution, when using a data string to create a Date instance, <a href=\"http://dygraphs.com/date-formats.html\" target=\"_blank\">browser differences and inconsistencies</a> should be considered.</li>\n<li>For example: In chrome, <code class=\"codespan\">new Date(&#39;2012-01-01&#39;)</code> is treated as a Jan 1st 2012 in UTC, while <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> and <code class=\"codespan\">new Date(&#39;2012/01/01&#39;)</code> are treated as Jan 1st 2012 in local timezone. In safari <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> is not supported.</li>\n<li>So if you intent to perform <code class=\"codespan\">new Date(dateString)</code>, it is strongly recommended to use a time parse library (e.g., <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a>), or use <code class=\"codespan\">echarts.number.parseDate</code>, or check <a href=\"http://dygraphs.com/date-formats.html\" target=\"_blank\">this</a>.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p><br>\n<strong>Customize a data item:</strong></p>\n<p>When needing to customize a data item, it can be set as an object, where property <code class=\"codespan\">value</code> reprensent real value. For example:</p>\n<pre><code class=\"lang-js\">[\n    12,\n    24,\n    {\n        value: [24, 32],\n        // label style, only works in this data item.\n        label: {},\n        // item style, only works in this data item.\n        itemStyle:{}\n    },\n    33\n]\n// Or\n[\n    [12, 332],\n    [24, 32],\n    {\n        value: [24, 32],\n        // label style, only works in this data item.\n        label: {},\n        // item style, only works in this data item.\n        itemStyle:{}\n    },\n    [33, 31]\n]\n</code></pre>\n<p><br>\n<strong>Empty value:</strong></p>\n<p><code class=\"codespan\">&#39;-&#39;</code> or <code class=\"codespan\">null</code> or <code class=\"codespan\">undefined</code> or <code class=\"codespan\">NaN</code> can be used to describe that a data item does not exist (ps：<em>not exist</em> does not means its value is <code class=\"codespan\">0</code>).</p>\n<p>For example, line chart can break when encounter an empty value, and scatter chart do not display graphic elements for empty values.</p>\n<p><br><br></p>\n"
  },
  "data.name": {
    "desc": "<p>Name of data item.</p>\n"
  },
  "data.value": {
    "desc": "<p>Value of data item.</p>\n"
  },
  "data.label": {
    "desc": "<p>It is valid with <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a> of &#39;cartesian2d&#39; value.</p>\n"
  },
  "data.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "data.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "data.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "data.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "data.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "data.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.itemStyle": {
    "desc": "<p>Style of a single data point. It is valid with <a href=\"#series-heatmap.coordinateSystem\">coordinateSystem</a> of &#39;cartesian2d&#39; value.</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.emphasis.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.emphasis.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.emphasis.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.emphasis.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "data.emphasis.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "data.emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "data.emphasis.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "data.emphasis.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.emphasis.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.emphasis.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.emphasis.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.emphasis.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.emphasis.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.emphasis.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.emphasis.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.emphasis.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.emphasis.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.emphasis.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.emphasis.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.emphasis.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.emphasis.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "data.emphasis.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.emphasis.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "data.emphasis.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "data.emphasis.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "data.emphasis.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.emphasis.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "data.emphasis.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "data.emphasis.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.emphasis.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.emphasis.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.emphasis.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint": {
    "desc": "<p>Mark point in a chart.</p>\n"
  },
  "markPoint.symbol": {
    "desc": "<p>Symbol of mark point.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>If symbols needs to be different, you can set with callback function in the following format:</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; string\n</code></pre>\n<p>The first parameter <code class=\"codespan\">value</code> is the value in <a href=\"#series-heatmap.data\">data</a>, and the second parameter <code class=\"codespan\">params</code> is the rest parameters of data item.</p>\n",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markPoint.symbolSize": {
    "desc": "<p>mark point symbol size. It can be set to single numbers like <code class=\"codespan\">10</code>, or use an array to represent width and height. For example, <code class=\"codespan\">[20, 10]</code> means symbol width is <code class=\"codespan\">20</code>, and height is<code class=\"codespan\">10</code>.</p>\n<p>If size of symbols needs to be different, you can set with callback function in the following format:</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>The first parameter <code class=\"codespan\">value</code> is the value in <a href=\"#series-heatmap.data\">data</a>, and the second parameter <code class=\"codespan\">params</code> is the rest parameters of data item.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markPoint.symbolRotate": {
    "desc": "<p>Rotate degree of mark point symbol. The negative value represents clockwise. Note that when <code class=\"codespan\">symbol</code> is set to be <code class=\"codespan\">&#39;arrow&#39;</code> in <code class=\"codespan\">markLine</code>, <code class=\"codespan\">symbolRotate</code> value will be ignored, and compulsively use tangent angle.</p>\n<p>If rotation of symbols needs to be different, you can set with callback function in the following format:</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number\n</code></pre>\n<p>The first parameter <code class=\"codespan\">value</code> is the value in <a href=\"#series-heatmap.data\">data</a>, and the second parameter <code class=\"codespan\">params</code> is the rest parameters of data item.</p>\n<blockquote>\n<p>Callback is supported since 4.8.0 .</p>\n</blockquote>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markPoint.symbolKeepAspect": {
    "desc": "<p>Whether to keep aspect for symbols in the form of <code class=\"codespan\">path://</code>.</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markPoint.symbolOffset": {
    "desc": "<p>Offset of mark point symbol relative to original position. By default, symbol will be put in the center position of data. But if symbol is from user-defined vector path or image, you may not expect symbol to be in center. In this case, you may use this attribute to set offset to default position. It can be in absolute pixel value, or in relative percentage value.</p>\n<p>For example, <code class=\"codespan\">[0, &#39;50%&#39;]</code> means to move upside side position of symbol height. It can be used to make the arrow in the bottom to be at data position when symbol is pin.</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markPoint.silent": {
    "desc": "<p>Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "markPoint.label": {
    "desc": "<p>Label of mark point.</p>\n"
  },
  "markPoint.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "markPoint.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.label.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markPoint.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markPoint.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.label.emphasis.show": {
    "desc": "<p>Whether to show label.</p>\n"
  },
  "markPoint.label.emphasis.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markPoint.label.emphasis.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markPoint.label.emphasis.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n"
  },
  "markPoint.label.emphasis.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n"
  },
  "markPoint.label.emphasis.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {@score}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markPoint.label.emphasis.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markPoint.label.emphasis.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markPoint.label.emphasis.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markPoint.label.emphasis.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markPoint.label.emphasis.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.label.emphasis.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.label.emphasis.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.label.emphasis.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markPoint.label.emphasis.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markPoint.label.emphasis.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markPoint.label.emphasis.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markPoint.label.emphasis.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markPoint.label.emphasis.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markPoint.label.emphasis.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markPoint.label.emphasis.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.emphasis.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.emphasis.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markPoint.label.emphasis.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markPoint.label.emphasis.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markPoint.itemStyle": {
    "desc": "<p>Mark point style.</p>\n"
  },
  "markPoint.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.itemStyle.emphasis.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markPoint.itemStyle.emphasis.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n"
  },
  "markPoint.itemStyle.emphasis.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n"
  },
  "markPoint.itemStyle.emphasis.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n"
  },
  "markPoint.itemStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markPoint.itemStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markPoint.itemStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markPoint.itemStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markPoint.itemStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markPoint.data": {
    "desc": "<p>Data array for mark points, each of which is an object. Here are some ways to assign mark point position.</p>\n<ol>\n<li>Assign coordinate according to container with <a href=\"#series-heatmap.markPoint.data.x\">x</a>, <a href=\"#series-heatmap.markPoint.data.y\">y</a> attribute, in which pixel values and percentage are supported.</li>\n</ol>\n<p>When multiple attributes exist, priority is as the above order.</p>\n<p><strong>For example: </strong></p>\n<pre><code class=\"lang-js\">data: [\n    {\n        name: &#39;screen coordinate&#39;,\n        x: 100,\n        y: 100\n    }\n]\n</code></pre>\n"
  },
  "markPoint.data.name": {
    "desc": "<p>Mark point name.</p>\n"
  },
  "markPoint.data.x": {
    "desc": "<p>X position according to container, in pixel.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markPoint.data.y": {
    "desc": "<p>Y position according to container, in pixel.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markPoint.data.value": {
    "desc": "<p>Label value, which can be ignored.</p>\n"
  },
  "markPoint.data.symbol": {
    "desc": "<p>Symbol of mark point.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markPoint.data.symbolSize": {
    "desc": "<p>mark point symbol size. It can be set to single numbers like <code class=\"codespan\">10</code>, or use an array to represent width and height. For example, <code class=\"codespan\">[20, 10]</code> means symbol width is <code class=\"codespan\">20</code>, and height is<code class=\"codespan\">10</code>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markPoint.data.symbolRotate": {
    "desc": "<p>Rotate degree of mark point symbol. The negative value represents clockwise. Note that when <code class=\"codespan\">symbol</code> is set to be <code class=\"codespan\">&#39;arrow&#39;</code> in <code class=\"codespan\">markLine</code>, <code class=\"codespan\">symbolRotate</code> value will be ignored, and compulsively use tangent angle.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markPoint.data.symbolKeepAspect": {
    "desc": "<p>Whether to keep aspect for symbols in the form of <code class=\"codespan\">path://</code>.</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markPoint.data.symbolOffset": {
    "desc": "<p>Offset of mark point symbol relative to original position. By default, symbol will be put in the center position of data. But if symbol is from user-defined vector path or image, you may not expect symbol to be in center. In this case, you may use this attribute to set offset to default position. It can be in absolute pixel value, or in relative percentage value.</p>\n<p>For example, <code class=\"codespan\">[0, &#39;50%&#39;]</code> means to move upside side position of symbol height. It can be used to make the arrow in the bottom to be at data position when symbol is pin.</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markPoint.data.itemStyle": {
    "desc": "<p>Mark point style.</p>\n"
  },
  "markPoint.data.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markPoint.data.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markPoint.data.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markPoint.data.itemStyle.emphasis.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markPoint.data.itemStyle.emphasis.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n"
  },
  "markPoint.data.itemStyle.emphasis.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n"
  },
  "markPoint.data.itemStyle.emphasis.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n"
  },
  "markPoint.data.itemStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markPoint.data.itemStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markPoint.data.itemStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markPoint.data.itemStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markPoint.data.itemStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markPoint.data.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markPoint.data.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markPoint.data.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markPoint.data.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markPoint.data.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.data.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.data.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.data.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.data.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.data.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.data.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.data.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.data.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.data.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.data.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.data.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markPoint.data.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markPoint.data.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markPoint.data.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markPoint.data.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markPoint.data.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markPoint.data.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markPoint.data.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markPoint.data.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markPoint.data.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markPoint.data.label.emphasis.show": {
    "desc": "<p>Whether to show label.</p>\n"
  },
  "markPoint.data.label.emphasis.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markPoint.data.label.emphasis.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markPoint.data.label.emphasis.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n"
  },
  "markPoint.data.label.emphasis.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n"
  },
  "markPoint.data.label.emphasis.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markPoint.data.label.emphasis.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markPoint.data.label.emphasis.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markPoint.data.label.emphasis.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markPoint.data.label.emphasis.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.data.label.emphasis.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.data.label.emphasis.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.data.label.emphasis.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markPoint.data.label.emphasis.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markPoint.data.label.emphasis.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markPoint.data.label.emphasis.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.emphasis.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.emphasis.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markPoint.data.label.emphasis.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markPoint.data.label.emphasis.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markPoint.animation": {
    "desc": "<p>Whether to enable animation.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "markPoint.animationThreshold": {
    "desc": "<p>Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.</p>\n"
  },
  "markPoint.animationDuration": {
    "desc": "<p>Duration of the first animation, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "markPoint.animationEasing": {
    "desc": "<p>Easing method used for the first animation. Varied easing effects can be found at <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">easing effect example</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "markPoint.animationDelay": {
    "desc": "<p>Delay before updating the first animation, which supports callback function for different data to have different animation effect.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "markPoint.animationDurationUpdate": {
    "desc": "<p>Time for animation to complete, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "markPoint.animationEasingUpdate": {
    "desc": "<p>Easing method used for animation.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "markPoint.animationDelayUpdate": {
    "desc": "<p>Delay before updating animation, which supports callback function for different data to have different animation effects.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n<p>prefix</p>\n"
  },
  "markLine": {
    "desc": "<p>Use a line in the chart to illustrate.</p>\n"
  },
  "markLine.silent": {
    "desc": "<p>Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "markLine.symbol": {
    "desc": "<p>Symbol type at the two ends of the mark line. It can be an array for two ends, or assigned seperately. See <a href=\"#series-heatmap.markLine.data.0.symbol\">data.symbol</a> for more format information.</p>\n"
  },
  "markLine.symbolSize": {
    "desc": "<p>Symbol size at the two ends of the mark line. It can be an array for two ends, or assigned seperately.</p>\n<p><strong>Attention: </strong> You cannot assgin width and height seperately as normal <code class=\"codespan\">symbolSize</code>.</p>\n"
  },
  "markLine.precision": {
    "desc": "<p>Precision of marking line value, which is useful when displaying average value mark line.</p>\n"
  },
  "markLine.label": {
    "desc": "<p>Mark line text.</p>\n"
  },
  "markLine.label.show": {
    "desc": "<p>Whether show label or not.</p>\n"
  },
  "markLine.label.position": {
    "desc": "<p>Positions of labels can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> starting point of the line.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> middle point of the line.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> ending point of the line.</li>\n</ul>\n<p>Since version 4.7.0, more label positions are supported: <code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> is the same as <code class=\"codespan\">&#39;middle&#39;</code>. Position is as the following chart.</p>\n<p>The distance between labels and mark lines can be set with <a href=\"#series-.markLine.label.distance\">label.distance</a>.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n\n"
  },
  "markLine.label.distance": {
    "desc": "<p>The distance between labels and mark lines. If it&#39;s an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it&#39;s a number, then the horizontal and vertical distances are the same.</p>\n"
  },
  "markLine.label.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{d}</code>: the percent.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.label.emphasis.show": {
    "desc": "<p>Whether show label or not.</p>\n"
  },
  "markLine.label.emphasis.position": {
    "desc": "<p>Positions of labels can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> starting point of the line.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> middle point of the line.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> ending point of the line.</li>\n</ul>\n<p>Since version 4.7.0, more label positions are supported: <code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> is the same as <code class=\"codespan\">&#39;middle&#39;</code>. Position is as the following chart.</p>\n<p>The distance between labels and mark lines can be set with <a href=\"#series-.markLine.label.distance\">label.distance</a>.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n\n"
  },
  "markLine.label.emphasis.distance": {
    "desc": "<p>The distance between labels and mark lines. If it&#39;s an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it&#39;s a number, then the horizontal and vertical distances are the same.</p>\n"
  },
  "markLine.label.emphasis.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{d}</code>: the percent.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.lineStyle": {
    "desc": "<p>Mark line style.</p>\n"
  },
  "markLine.lineStyle.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.lineStyle.width": {
    "desc": "<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.lineStyle.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.lineStyle.emphasis.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markLine.lineStyle.emphasis.width": {
    "desc": "<p> line width.</p>\n"
  },
  "markLine.lineStyle.emphasis.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n"
  },
  "markLine.lineStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markLine.lineStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markLine.lineStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markLine.lineStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markLine.lineStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markLine.data": {
    "desc": "<p>Data array of marking line. Every array item can be an array of one or two values, representing starting and ending point of the line, and every item is an object. Here are several ways to assign the positions of starting and ending point.</p>\n<ol>\n<li>Assign coordinate according to container with <a href=\"#series-heatmap.markLine.data.0.x\">x</a>, <a href=\"#series-heatmap.markLine.data.0.y\">y</a> attribute, in which pixel values and percentage are supported.</li>\n</ol>\n<p>When multiple attributes exist, priority is as the above order.</p>\n<pre><code>data: [\n    [\n        {\n            name: &#39;Mark line between two points&#39;,\n            x: 100,\n            y: 100\n        },\n        {\n            x: 500,\n            y: 200\n        }\n    ]\n]\n</code></pre>"
  },
  "markLine.data.0": {
    "desc": "<p>Data of the starting point.</p>\n"
  },
  "markLine.data.0.name": {
    "desc": "<p>Name of the marker, which will display as a label.</p>\n"
  },
  "markLine.data.0.x": {
    "desc": "<p>X position according to container, in pixel.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.0.y": {
    "desc": "<p>Y position according to container, in pixel.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.0.value": {
    "desc": "<p>Label value, which can be ignored.</p>\n"
  },
  "markLine.data.0.symbol": {
    "desc": "<p>Symbol of starting point.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markLine.data.0.symbolSize": {
    "desc": "<p>starting point symbol size. It can be set to single numbers like <code class=\"codespan\">10</code>, or use an array to represent width and height. For example, <code class=\"codespan\">[20, 10]</code> means symbol width is <code class=\"codespan\">20</code>, and height is<code class=\"codespan\">10</code>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markLine.data.0.symbolRotate": {
    "desc": "<p>Rotate degree of starting point symbol. The negative value represents clockwise. Note that when <code class=\"codespan\">symbol</code> is set to be <code class=\"codespan\">&#39;arrow&#39;</code> in <code class=\"codespan\">markLine</code>, <code class=\"codespan\">symbolRotate</code> value will be ignored, and compulsively use tangent angle.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markLine.data.0.symbolKeepAspect": {
    "desc": "<p>Whether to keep aspect for symbols in the form of <code class=\"codespan\">path://</code>.</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markLine.data.0.symbolOffset": {
    "desc": "<p>Offset of starting point symbol relative to original position. By default, symbol will be put in the center position of data. But if symbol is from user-defined vector path or image, you may not expect symbol to be in center. In this case, you may use this attribute to set offset to default position. It can be in absolute pixel value, or in relative percentage value.</p>\n<p>For example, <code class=\"codespan\">[0, &#39;50%&#39;]</code> means to move upside side position of symbol height. It can be used to make the arrow in the bottom to be at data position when symbol is pin.</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markLine.data.0.lineStyle": {
    "desc": "<p>Line style of this data item, which will be merged with <code class=\"codespan\">lineStyle</code> of starting point and ending point.</p>\n"
  },
  "markLine.data.0.lineStyle.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.0.lineStyle.width": {
    "desc": "<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.0.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.0.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.0.lineStyle.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.0.lineStyle.emphasis.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markLine.data.0.lineStyle.emphasis.width": {
    "desc": "<p> line width.</p>\n"
  },
  "markLine.data.0.lineStyle.emphasis.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n"
  },
  "markLine.data.0.lineStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markLine.data.0.lineStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markLine.data.0.lineStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markLine.data.0.lineStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markLine.data.0.lineStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markLine.data.0.lineStyle.emphasis.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n"
  },
  "markLine.data.0.label": {
    "desc": "<p>Label of this data item, which will be merged with <code class=\"codespan\">label</code> of starting point and ending point.</p>\n"
  },
  "markLine.data.0.label.show": {
    "desc": "<p>Whether show label or not.</p>\n"
  },
  "markLine.data.0.label.position": {
    "desc": "<p>Positions of labels can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> starting point of the line.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> middle point of the line.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> ending point of the line.</li>\n</ul>\n<p>Since version 4.7.0, more label positions are supported: <code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> is the same as <code class=\"codespan\">&#39;middle&#39;</code>. Position is as the following chart.</p>\n<p>The distance between labels and mark lines can be set with <a href=\"#series-.markLine.label.distance\">label.distance</a>.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n\n"
  },
  "markLine.data.0.label.distance": {
    "desc": "<p>The distance between labels and mark lines. If it&#39;s an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it&#39;s a number, then the horizontal and vertical distances are the same.</p>\n"
  },
  "markLine.data.0.label.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{d}</code>: the percent.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.0.emphasis.lineStyle.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.0.emphasis.lineStyle.width": {
    "desc": "<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.0.emphasis.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.0.emphasis.lineStyle.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.0.emphasis.label.show": {
    "desc": "<p>Whether show label or not.</p>\n"
  },
  "markLine.data.0.emphasis.label.position": {
    "desc": "<p>Positions of labels can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> starting point of the line.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> middle point of the line.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> ending point of the line.</li>\n</ul>\n<p>Since version 4.7.0, more label positions are supported: <code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> is the same as <code class=\"codespan\">&#39;middle&#39;</code>. Position is as the following chart.</p>\n<p>The distance between labels and mark lines can be set with <a href=\"#series-.markLine.label.distance\">label.distance</a>.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n\n"
  },
  "markLine.data.0.emphasis.label.distance": {
    "desc": "<p>The distance between labels and mark lines. If it&#39;s an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it&#39;s a number, then the horizontal and vertical distances are the same.</p>\n"
  },
  "markLine.data.0.emphasis.label.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{d}</code>: the percent.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.1": {
    "desc": "<p>Data of the ending point.</p>\n"
  },
  "markLine.data.1.name": {
    "desc": "<p>Name of the marker, which will display as a label.</p>\n"
  },
  "markLine.data.1.x": {
    "desc": "<p>X position according to container, in pixel.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.1.y": {
    "desc": "<p>Y position according to container, in pixel.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markLine.data.1.value": {
    "desc": "<p>Label value, which can be ignored.</p>\n"
  },
  "markLine.data.1.symbol": {
    "desc": "<p>Symbol of ending point.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon",
      "default": "circle"
    }
  },
  "markLine.data.1.symbolSize": {
    "desc": "<p>ending point symbol size. It can be set to single numbers like <code class=\"codespan\">10</code>, or use an array to represent width and height. For example, <code class=\"codespan\">[20, 10]</code> means symbol width is <code class=\"codespan\">20</code>, and height is<code class=\"codespan\">10</code>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0"
    }
  },
  "markLine.data.1.symbolRotate": {
    "desc": "<p>Rotate degree of ending point symbol. The negative value represents clockwise. Note that when <code class=\"codespan\">symbol</code> is set to be <code class=\"codespan\">&#39;arrow&#39;</code> in <code class=\"codespan\">markLine</code>, <code class=\"codespan\">symbolRotate</code> value will be ignored, and compulsively use tangent angle.</p>\n",
    "uiControl": {
      "type": "angle",
      "min": "-180",
      "max": "180",
      "step": "1"
    }
  },
  "markLine.data.1.symbolKeepAspect": {
    "desc": "<p>Whether to keep aspect for symbols in the form of <code class=\"codespan\">path://</code>.</p>\n",
    "uiControl": {
      "type": "boolean",
      "clean": "true"
    }
  },
  "markLine.data.1.symbolOffset": {
    "desc": "<p>Offset of ending point symbol relative to original position. By default, symbol will be put in the center position of data. But if symbol is from user-defined vector path or image, you may not expect symbol to be in center. In this case, you may use this attribute to set offset to default position. It can be in absolute pixel value, or in relative percentage value.</p>\n<p>For example, <code class=\"codespan\">[0, &#39;50%&#39;]</code> means to move upside side position of symbol height. It can be used to make the arrow in the bottom to be at data position when symbol is pin.</p>\n",
    "uiControl": {
      "type": "vector",
      "separate": "true",
      "dims": "x,y"
    }
  },
  "markLine.data.1.lineStyle": {
    "desc": "<p>Line style of this data item, which will be merged with <code class=\"codespan\">lineStyle</code> of starting point and ending point.</p>\n"
  },
  "markLine.data.1.lineStyle.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.1.lineStyle.width": {
    "desc": "<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.1.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.1.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.1.lineStyle.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.1.lineStyle.emphasis.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markLine.data.1.lineStyle.emphasis.width": {
    "desc": "<p> line width.</p>\n"
  },
  "markLine.data.1.lineStyle.emphasis.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n"
  },
  "markLine.data.1.lineStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markLine.data.1.lineStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markLine.data.1.lineStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markLine.data.1.lineStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markLine.data.1.lineStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markLine.data.1.lineStyle.emphasis.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n"
  },
  "markLine.data.1.label": {
    "desc": "<p>Label of this data item, which will be merged with <code class=\"codespan\">label</code> of starting point and ending point.</p>\n"
  },
  "markLine.data.1.label.show": {
    "desc": "<p>Whether show label or not.</p>\n"
  },
  "markLine.data.1.label.position": {
    "desc": "<p>Positions of labels can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> starting point of the line.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> middle point of the line.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> ending point of the line.</li>\n</ul>\n<p>Since version 4.7.0, more label positions are supported: <code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> is the same as <code class=\"codespan\">&#39;middle&#39;</code>. Position is as the following chart.</p>\n<p>The distance between labels and mark lines can be set with <a href=\"#series-.markLine.label.distance\">label.distance</a>.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n\n"
  },
  "markLine.data.1.label.distance": {
    "desc": "<p>The distance between labels and mark lines. If it&#39;s an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it&#39;s a number, then the horizontal and vertical distances are the same.</p>\n"
  },
  "markLine.data.1.label.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{d}</code>: the percent.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.data.1.emphasis.lineStyle.color": {
    "desc": "<p>Line color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markLine.data.1.emphasis.lineStyle.width": {
    "desc": "<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.type": {
    "desc": "<p> line type.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markLine.data.1.emphasis.lineStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markLine.data.1.emphasis.lineStyle.curveness": {
    "desc": "<p>Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "1",
      "step": "0.01",
      "default": "0"
    }
  },
  "markLine.data.1.emphasis.label.show": {
    "desc": "<p>Whether show label or not.</p>\n"
  },
  "markLine.data.1.emphasis.label.position": {
    "desc": "<p>Positions of labels can be:</p>\n<ul>\n<li><code class=\"codespan\">&#39;start&#39;</code> starting point of the line.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code> middle point of the line.</li>\n<li><code class=\"codespan\">&#39;end&#39;</code> ending point of the line.</li>\n</ul>\n<p>Since version 4.7.0, more label positions are supported: <code class=\"codespan\">&#39;start&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;end&#39;</code>, <code class=\"codespan\">&#39;insideStartTop&#39;</code>, <code class=\"codespan\">&#39;insideStartBottom&#39;</code>, <code class=\"codespan\">&#39;insideMiddleTop&#39;</code>, <code class=\"codespan\">&#39;insideMiddleBottom&#39;</code>, <code class=\"codespan\">&#39;insideEndTop&#39;</code>, <code class=\"codespan\">&#39;insideEndBottom&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;insideMiddleBottom&#39;</code> is the same as <code class=\"codespan\">&#39;middle&#39;</code>. Position is as the following chart.</p>\n<p>The distance between labels and mark lines can be set with <a href=\"#series-.markLine.label.distance\">label.distance</a>.</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=bar-markline&reset=1&edit=1\" width=\"800\" height=\"500\"><iframe />\n\n\n"
  },
  "markLine.data.1.emphasis.label.distance": {
    "desc": "<p>The distance between labels and mark lines. If it&#39;s an array, then the first element is the horizontal distance, and the second element is the vertical distance. If it&#39;s a number, then the horizontal and vertical distances are the same.</p>\n"
  },
  "markLine.data.1.emphasis.label.formatter": {
    "desc": "<p>Data label formatter, which supports string template and callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template</strong></p>\n<p>Model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n<li><code class=\"codespan\">{d}</code>: the percent.</li>\n<li><code class=\"codespan\">{@xxx}: the value of a dimension named</code>&#39;xxx&#39;<code class=\"codespan\">, for example,</code>{@product}<code class=\"codespan\">refers the value of</code>&#39;product&#39;` dimension.</li>\n<li><code class=\"codespan\">{@[n]}: the value of a dimension at the index of</code>n<code class=\"codespan\">, for example,</code>{@[3]}` refers the value at dimensions[3].</li>\n</ul>\n<p><strong>example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {d}&#39;\n</code></pre>\n<p><strong>Callback function</strong></p>\n<p>Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>where <code class=\"codespan\">params</code> is the single dataset needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "markLine.animation": {
    "desc": "<p>Whether to enable animation.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "markLine.animationThreshold": {
    "desc": "<p>Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.</p>\n"
  },
  "markLine.animationDuration": {
    "desc": "<p>Duration of the first animation, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "markLine.animationEasing": {
    "desc": "<p>Easing method used for the first animation. Varied easing effects can be found at <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">easing effect example</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "markLine.animationDelay": {
    "desc": "<p>Delay before updating the first animation, which supports callback function for different data to have different animation effect.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "markLine.animationDurationUpdate": {
    "desc": "<p>Time for animation to complete, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "markLine.animationEasingUpdate": {
    "desc": "<p>Easing method used for animation.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "markLine.animationDelayUpdate": {
    "desc": "<p>Delay before updating animation, which supports callback function for different data to have different animation effects.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "markArea": {
    "desc": "<p>Used to mark an area in chart. For example, mark a time interval.</p>\n"
  },
  "markArea.silent": {
    "desc": "<p>Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "markArea.label": {
    "desc": "<p>Label in mark area.</p>\n"
  },
  "markArea.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markArea.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.label.emphasis.show": {
    "desc": "<p>Whether to show label.</p>\n"
  },
  "markArea.label.emphasis.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markArea.label.emphasis.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markArea.label.emphasis.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n"
  },
  "markArea.label.emphasis.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n"
  },
  "markArea.label.emphasis.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markArea.label.emphasis.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markArea.label.emphasis.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markArea.label.emphasis.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markArea.label.emphasis.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.label.emphasis.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.label.emphasis.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.label.emphasis.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markArea.label.emphasis.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markArea.label.emphasis.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markArea.label.emphasis.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markArea.label.emphasis.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markArea.label.emphasis.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markArea.label.emphasis.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markArea.label.emphasis.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.emphasis.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.emphasis.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markArea.label.emphasis.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markArea.label.emphasis.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markArea.label.emphasis.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markArea.label.emphasis.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markArea.label.emphasis.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markArea.label.emphasis.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markArea.itemStyle": {
    "desc": "<p>Style of the mark area.</p>\n"
  },
  "markArea.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.itemStyle.emphasis.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markArea.itemStyle.emphasis.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n"
  },
  "markArea.itemStyle.emphasis.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n"
  },
  "markArea.itemStyle.emphasis.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n"
  },
  "markArea.itemStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markArea.itemStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markArea.itemStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markArea.itemStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markArea.itemStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markArea.data": {
    "desc": "<p>The scope of the area is defined by <code class=\"codespan\">data</code>, which is an array with two item, representing the left-top point and the right-bottom point of rectangle area. Each item can be defined as follows:</p>\n<ol>\n<li>Specify the coordinate in screen coordinate system using <a href=\"#series-heatmap.markArea.data.0.x\">x</a>, <a href=\"#series-heatmap.markArea.data.0.y\">y</a>, where the unit is pixel (e.g., the value is <code class=\"codespan\">5</code>), or percent (e.g., the value is <code class=\"codespan\">&#39;35%&#39;</code>).</li>\n</ol>\n<p>The priority follows as above if more than one above definition used.</p>\n<pre><code>data: [\n    [\n        {\n            name: &#39;Mark area in two screen points&#39;,\n            x: 100,\n            y: 100\n        }, {\n            x: &#39;90%&#39;,\n            y: &#39;10%&#39;\n        }\n    ]\n]\n</code></pre>"
  },
  "markArea.data.0": {
    "desc": "<p>Specify the left-top point.</p>\n"
  },
  "markArea.data.0.name": {
    "desc": "<p>Name of the marker, which will display as a label.</p>\n"
  },
  "markArea.data.0.x": {
    "desc": "<p>x value on screen coordinate system, can be pixel number (like <code class=\"codespan\">5</code>), or percent value (like <code class=\"codespan\">&#39;20%&#39;</code>).</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.0.y": {
    "desc": "<p>y value on screen coordinate system, can be pixel number (like <code class=\"codespan\">5</code>), or percent value (like <code class=\"codespan\">&#39;20%&#39;</code>).</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.0.value": {
    "desc": "<p>value of the item, not necessary.</p>\n"
  },
  "markArea.data.0.itemStyle": {
    "desc": "<p>Style of the item.\n<code class=\"codespan\">itemStyle</code> of start point and end point will be merged together.</p>\n"
  },
  "markArea.data.0.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.0.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.0.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.0.itemStyle.emphasis.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markArea.data.0.itemStyle.emphasis.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n"
  },
  "markArea.data.0.itemStyle.emphasis.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n"
  },
  "markArea.data.0.itemStyle.emphasis.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n"
  },
  "markArea.data.0.itemStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markArea.data.0.itemStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markArea.data.0.itemStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markArea.data.0.itemStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markArea.data.0.itemStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markArea.data.0.label": {
    "desc": "<p>Label style of the item.\nLabel style of start point and end point will be merged together.</p>\n"
  },
  "markArea.data.0.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.0.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.0.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.0.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.0.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markArea.data.0.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.0.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.0.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.0.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.0.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.0.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.0.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.0.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.0.label.emphasis.show": {
    "desc": "<p>Whether to show label.</p>\n"
  },
  "markArea.data.0.label.emphasis.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markArea.data.0.label.emphasis.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markArea.data.0.label.emphasis.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n"
  },
  "markArea.data.0.label.emphasis.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n"
  },
  "markArea.data.0.label.emphasis.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markArea.data.0.label.emphasis.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markArea.data.0.label.emphasis.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markArea.data.0.label.emphasis.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markArea.data.0.label.emphasis.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.0.label.emphasis.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.0.label.emphasis.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.0.label.emphasis.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markArea.data.0.label.emphasis.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markArea.data.0.label.emphasis.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markArea.data.0.label.emphasis.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.emphasis.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.emphasis.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markArea.data.0.label.emphasis.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markArea.data.0.label.emphasis.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markArea.data.1": {
    "desc": "<p>Specify the right-bottom point.</p>\n"
  },
  "markArea.data.1.name": {
    "desc": "<p>Name of the marker, which will display as a label.</p>\n"
  },
  "markArea.data.1.x": {
    "desc": "<p>x value on screen coordinate system, can be pixel number (like <code class=\"codespan\">5</code>), or percent value (like <code class=\"codespan\">&#39;20%&#39;</code>).</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.1.y": {
    "desc": "<p>y value on screen coordinate system, can be pixel number (like <code class=\"codespan\">5</code>), or percent value (like <code class=\"codespan\">&#39;20%&#39;</code>).</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0"
    }
  },
  "markArea.data.1.value": {
    "desc": "<p>value of the item, not necessary.</p>\n"
  },
  "markArea.data.1.itemStyle": {
    "desc": "<p>Style of the item.\n<code class=\"codespan\">itemStyle</code> of start point and end point will be merged together.</p>\n"
  },
  "markArea.data.1.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "markArea.data.1.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "markArea.data.1.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "markArea.data.1.itemStyle.emphasis.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n"
  },
  "markArea.data.1.itemStyle.emphasis.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n"
  },
  "markArea.data.1.itemStyle.emphasis.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n"
  },
  "markArea.data.1.itemStyle.emphasis.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n"
  },
  "markArea.data.1.itemStyle.emphasis.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n"
  },
  "markArea.data.1.itemStyle.emphasis.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n"
  },
  "markArea.data.1.itemStyle.emphasis.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n"
  },
  "markArea.data.1.itemStyle.emphasis.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n"
  },
  "markArea.data.1.itemStyle.emphasis.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n"
  },
  "markArea.data.1.label": {
    "desc": "<p>Label style of the item.\nLabel style of start point and end point will be merged together.</p>\n"
  },
  "markArea.data.1.label.show": {
    "desc": "<p>Whether to show label.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "markArea.data.1.label.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside"
    }
  },
  "markArea.data.1.label.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "5",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n",
    "uiControl": {
      "type": "angle",
      "default": "0",
      "min": "-90",
      "max": "90",
      "step": "1"
    }
  },
  "markArea.data.1.label.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n",
    "uiControl": {
      "type": "vector",
      "dims": "x,y",
      "step": "0.5",
      "separate": "true"
    }
  },
  "markArea.data.1.label.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.label.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.label.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.label.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.label.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.label.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.label.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.label.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.label.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.label.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.label.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.label.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markArea.data.1.label.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "null"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "markArea.data.1.label.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "markArea.data.1.label.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "left,center,right"
    }
  },
  "markArea.data.1.label.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "options": "top,middle,bottom"
    }
  },
  "markArea.data.1.label.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "markArea.data.1.label.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#fff"
    }
  },
  "markArea.data.1.label.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "LT,RT, RB, LB"
    }
  },
  "markArea.data.1.label.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "markArea.data.1.label.emphasis.show": {
    "desc": "<p>Whether to show label.</p>\n"
  },
  "markArea.data.1.label.emphasis.position": {
    "desc": "<p>Label position.</p>\n<p><strong>Followings are the options: </strong></p>\n<ul>\n<li><p>[x, y]</p>\n<p>  Use relative percentage, or absolute pixel values to represent position of label relative to top-left corner of bounding box.\n  For example:</p>\n<pre><code class=\"lang-js\">  // Absolute pixel values\n  position: [10, 10],\n  // Relative percentage\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p>&#39;top&#39;</p>\n</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n</ul>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markArea.data.1.label.emphasis.distance": {
    "desc": "<p>Distance to the host graphic element. Works when position is string value (like <code class=\"codespan\">&#39;top&#39;</code>、<code class=\"codespan\">&#39;insideRight&#39;</code>).</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=doc-example/label-position\" target=\"_blank\">label position</a>.</p>\n"
  },
  "markArea.data.1.label.emphasis.rotate": {
    "desc": "<p>Rotate label, from -90 degree to 90, positive value represents rotate anti-clockwise.</p>\n<p>See: <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-label-rotation\" target=\"_blank\">label rotation</a>.</p>\n"
  },
  "markArea.data.1.label.emphasis.offset": {
    "desc": "<p>Whether to move text slightly. For example: <code class=\"codespan\">[30, 40]</code> means move <code class=\"codespan\">30</code> horizontally and move <code class=\"codespan\">40</code> vertically.</p>\n"
  },
  "markArea.data.1.label.emphasis.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markArea.data.1.label.emphasis.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markArea.data.1.label.emphasis.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markArea.data.1.label.emphasis.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markArea.data.1.label.emphasis.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.1.label.emphasis.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.1.label.emphasis.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.1.label.emphasis.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markArea.data.1.label.emphasis.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markArea.data.1.label.emphasis.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markArea.data.1.label.emphasis.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.emphasis.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.emphasis.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markArea.data.1.label.emphasis.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich": {
    "desc": "<p>&quot;Rich text styles&quot; can be defined in this <code class=\"codespan\">rich</code> property. For example:</p>\n<pre><code class=\"lang-js\">label: {\n    // Styles defined in &#39;rich&#39; can be applied to some fragments\n    // of text by adding some markers to those fragment, like\n    // `{styleName|text content text content}`.\n    // `&#39;\\n&#39;` is the newline character.\n    formatter: [\n        &#39;{a|Style &quot;a&quot; is applied to this snippet}&#39;\n        &#39;{b|Style &quot;b&quot; is applied to this snippet}This snippet use default style{x|use style &quot;x&quot;}&#39;\n    ].join(&#39;\\n&#39;),\n\n    rich: {\n        a: {\n            color: &#39;red&#39;,\n            lineHeight: 10\n        },\n        b: {\n            backgroundColor: {\n                image: &#39;xxx/xxx.jpg&#39;\n            },\n            height: 40\n        },\n        x: {\n            fontSize: 18,\n            fontFamily: &#39;Microsoft YaHei&#39;,\n            borderColor: &#39;#449933&#39;,\n            borderRadius: 4\n        },\n        ...\n    }\n}\n</code></pre>\n<p>For more details, see <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">Rich Text</a> please.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.color": {
    "desc": "<p> text color.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.fontSize": {
    "desc": "<p> font size.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.align": {
    "desc": "<p>Horizontal alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;left&#39;</code></li>\n<li><code class=\"codespan\">&#39;center&#39;</code></li>\n<li><code class=\"codespan\">&#39;right&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">align</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">align</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    align: right,\n    rich: {\n        a: {\n            // `align` is not set, then it will be right\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.verticalAlign": {
    "desc": "<p>Vertical alignment of text, automatic by default.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;top&#39;</code></li>\n<li><code class=\"codespan\">&#39;middle&#39;</code></li>\n<li><code class=\"codespan\">&#39;bottom&#39;</code></li>\n</ul>\n<p>If <code class=\"codespan\">verticalAlign</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">verticalAlign</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    verticalAlign: bottom,\n    rich: {\n        a: {\n            // `verticalAlign` is not set, then it will be bottom\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.backgroundColor": {
    "desc": "<p>Background color of the text fragment.</p>\n<p>Can be color string, like <code class=\"codespan\">&#39;#123234&#39;</code>, <code class=\"codespan\">&#39;red&#39;</code>, <code class=\"codespan\">&#39;rgba(0,23,11,0.3)&#39;</code>.</p>\n<p>Or image can be used, for example:</p>\n<pre><code class=\"lang-js\">backgroundColor: {\n    image: &#39;xxx/xxx.png&#39;\n    // It can be URL of a image,\n    // or dataURI,\n    // or HTMLImageElement,\n    // or HTMLCanvasElement.\n}\n</code></pre>\n<p><code class=\"codespan\">width</code> or <code class=\"codespan\">height</code> can be specified when using background image, or\nauto adapted by default.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.borderColor": {
    "desc": "<p>Border color of the text fragment.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.borderWidth": {
    "desc": "<p>Border width of the text fragment.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.borderRadius": {
    "desc": "<p>Border radius of the text fragment.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.padding": {
    "desc": "<p>Padding of the text fragment, for example:</p>\n<ul>\n<li><code class=\"codespan\">padding: [3, 4, 5, 6]</code>: represents padding of <code class=\"codespan\">[top, right, bottom, left]</code>.</li>\n<li><code class=\"codespan\">padding: 4</code>: represents <code class=\"codespan\">padding: [4, 4, 4, 4]</code>.</li>\n<li><code class=\"codespan\">padding: [3, 4]</code>: represents <code class=\"codespan\">padding: [3, 4, 3, 4]</code>.</li>\n</ul>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.shadowColor": {
    "desc": "<p>Shadow color of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.shadowBlur": {
    "desc": "<p>Show blur of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.shadowOffsetX": {
    "desc": "<p>Shadow X offset of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.shadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text block.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n<p>If set as <code class=\"codespan\">&#39;auto&#39;</code>, the color will assigned as visual color, such as series color.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n"
  },
  "markArea.data.1.label.emphasis.rich.<style_name>.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n"
  },
  "markArea.animation": {
    "desc": "<p>Whether to enable animation.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false",
      "clean": "true"
    }
  },
  "markArea.animationThreshold": {
    "desc": "<p>Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.</p>\n"
  },
  "markArea.animationDuration": {
    "desc": "<p>Duration of the first animation, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "markArea.animationEasing": {
    "desc": "<p>Easing method used for the first animation. Varied easing effects can be found at <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=line-easing\" target=\"_blank\">easing effect example</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "markArea.animationDelay": {
    "desc": "<p>Delay before updating the first animation, which supports callback function for different data to have different animation effect.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "markArea.animationDurationUpdate": {
    "desc": "<p>Time for animation to complete, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "markArea.animationEasingUpdate": {
    "desc": "<p>Easing method used for animation.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "markArea.animationDelayUpdate": {
    "desc": "<p>Delay before updating animation, which supports callback function for different data to have different animation effects.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in heatmap.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in heatmap, which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "silent": {
    "desc": "<p>Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "tooltip": {
    "desc": "<p>tooltip settings in this series.</p>\n"
  },
  "tooltip.position": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The position of the tooltip&#39;s floating layer, which would follow the position of mouse by default.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  Display the position of tooltip&#39;s floating layer through array, which supports absolute position and relative percentage.</p>\n<p>  Example:</p>\n<pre><code class=\"lang-js\">  // absolute position, which is 10px to the left side and 10px to the top side of the container\n  position: [10, 10]\n  // relative position, in the exact center of the container\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  Callback function in the following form:</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>Parameters:</strong><br>\n  point: Mouse position.<br>\n  param: The same as formatter.<br>\n  dom: The DOM object of tooltip.<br>\n  rect: It is valid only when mouse is on graphic elements, which stands for a bounding box with <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, and <code class=\"codespan\">height</code>.<br>\n  size: The size of dom echarts container. For example: <code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>. <br></p>\n<p>  <strong>Return:</strong><br>\n  Return value is an array standing for tooltip position, which can be absolute pixels, or relative percentage.<br>\n  Or can be an object, like <code class=\"codespan\">{left: 10, top: 30}</code>, or <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>.<br></p>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // fixed at top\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  Or:</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // tooltip will be fixed on the right if mouse hovering on the left,\n      // and on the left if hovering on the right.\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p> Center position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  Top position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  Left position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  Right position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  Bottom position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n</ul>\n"
  },
  "tooltip.formatter": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The content formatter of tooltip&#39;s floating layer which supports string template and callback function.</p>\n<p><strong>1. String template</strong></p>\n<p>The template variables are <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> and <code class=\"codespan\">{e}</code>, which stands for series name, data name and data value and ect. When <a href=\"#tooltip.trigger\">trigger</a> is set to be <code class=\"codespan\">&#39;axis&#39;</code>, there may be data from multiple series. In this time, series index can be refered as <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, or <code class=\"codespan\">{a2}</code>.</p>\n<p><code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> have different meanings for different series types:</p>\n<ul>\n<li><p>Line (area) charts, bar (column) charts, K charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for category name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Scatter (bubble) charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Map: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for area name, <code class=\"codespan\">{c}</code> for merging data, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Pie charts, gauge charts, funnel charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data item name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for percentage.</p>\n</li>\n</ul>\n<p><strong>Example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2. Callback function</strong></p>\n<p>The format of callback function:</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>The first parameter <code class=\"codespan\">params</code> is the data that the formatter needs. Its format is shown as follows:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n    // the percentage of pie chart\n    percent: number,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>When <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;axis&#39;</code>, or when tooltip is triggered by <a href=\"#xAxis.axisPointer\">axisPointer</a>, <code class=\"codespan\">params</code> is the data array of multiple series. The content of each item of the array is the same as above. Besides,</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>Note: </strong>Using array to present all the parameters in ECharts 2.x is not supported anymore.</p>\n<p>The second parameter <code class=\"codespan\">ticket</code> is the asynchronous callback flag which should be used along with the third parameter <code class=\"codespan\">callback</code> when it is used.</p>\n<p>The third parameter <code class=\"codespan\">callback</code> is asynchronous callback. When the content of tooltip is acquired asynchronously, <code class=\"codespan\">ticket</code> and <code class=\"codespan\">htm</code> as introduced above can be used to update tooltip with callback.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "tooltip.backgroundColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The background color of tooltip&#39;s floating layer.</p>\n"
  },
  "tooltip.borderColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The border color of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "tooltip.borderWidth": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The border width of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "tooltip.padding": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The floating layer of tooltip space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples: </p>\n<pre><code class=\"lang-js\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "tooltip.textStyle": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The text syle of tooltip&#39;s floating layer.</p>\n"
  },
  "tooltip.textStyle.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "tooltip.textStyle.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "tooltip.textStyle.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "tooltip.textStyle.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "tooltip.textStyle.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "tooltip.textStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "tooltip.textStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "tooltip.textStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "tooltip.textStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "tooltip.textStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "tooltip.textStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.extraCssText": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>Extra CSS style for floating layer. The following is an example for adding shadow.</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  }
}