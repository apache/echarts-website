window.__EC_DOC_option_graphic = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "elements": {
    "desc": "<p>A list of all graphic elements.</p>\n<p>Note, the standard configuration of graphic component is:</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: {\n        elements: [\n            {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n        ]\n    }\n}\n</code></pre>\n<p>But we always use short patterns for convenience:</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: { // Declare only one graphic element.\n        type: &#39;rect&#39;,\n        ...\n    }\n}\n</code></pre>\n<p>Or:</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: [ // Declare multiple graphic elements.\n        {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n    ]\n}\n</code></pre>\n"
  },
  "elements-group": {
    "desc": "<p><code class=\"codespan\">group</code> is the only type that can contain children, so that a group of elements can be positioned and transformed together.</p>\n"
  },
  "elements-group.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-group.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-group.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-group.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-group.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-group.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-group.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-group.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-group.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-group.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-group.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-group.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-group.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-group.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-group.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-group.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-group.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-group.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-group.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-group.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-group.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-group.width": {
    "desc": "<p>Specify width of this <code class=\"codespan\">group</code>.</p>\n<p>This width is only used for the positioning of its children.</p>\n<p>When width is <code class=\"codespan\">0</code>, children can also be positioned according to its parent using <code class=\"codespan\">left: &#39;center&#39;</code>.</p>\n"
  },
  "elements-group.height": {
    "desc": "<p>Specify height of this <code class=\"codespan\">group</code>.</p>\n<p>This height is only used for the positioning of its children.</p>\n<p>When height is <code class=\"codespan\">0</code>, children can also be positioned according to its parent using <code class=\"codespan\">top: &#39;middle&#39;</code>.</p>\n"
  },
  "elements-group.diffChildrenByName": {
    "desc": "<p>In <a href=\"#series-custom\">custom series</a>, when <code class=\"codespan\">diffChildrenByName</code> is set as <code class=\"codespan\">true</code>, for each <a href=\"#graphic.elements-group\">group</a> returned from <a href=\"#series-custom.renderItem\">renderItem</a>, &quot;diff&quot; will be performed to its <a href=\"#graphic.elements-group.children\">children</a> according to the <a href=\"#graphic.elements-polygon.name\">name</a> attribute of each graphic elements. Here &quot;diff&quot; means that map the coming graphic elements to the existing graphic elements when repainting according to <code class=\"codespan\">name</code>, which enables the transition animation if data is modified.</p>\n<p>But notice that the operation is performance consuming, do not use it for large data amount.</p>\n"
  },
  "elements-group.children": {
    "desc": "<p>A list of children, each item is a declaration of an element.</p>\n"
  },
  "elements-image.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-image.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-image.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-image.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-image.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-image.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-image.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-image.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-image.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-image.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-image.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-image.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-image.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-image.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-image.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-image.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-image.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-image.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-image.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-image.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-image.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-image.style.image": {
    "desc": "<p>Specify contant of the image, can be a URL, or <a href=\"https://tools.ietf.org/html/rfc2397\" target=\"_blank\">dataURI</a>.</p>\n"
  },
  "elements-image.style.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-image.style.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-image.style.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "elements-image.style.height": {
    "desc": "<p>The height of the shape of the element.</p>\n<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-image.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-image.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-image.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-image.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-image.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-image.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-image.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-text": {
    "desc": "<p>Text block.</p>\n"
  },
  "elements-text.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-text.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-text.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-text.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-text.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-text.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-text.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-text.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-text.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-text.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-text.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-text.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-text.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-text.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-text.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-text.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-text.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-text.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-text.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-text.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-text.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-text.style.text": {
    "desc": "<p>Text content. <code class=\"codespan\">\\n</code> can be used as a line break.</p>\n"
  },
  "elements-text.style.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-text.style.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-text.style.font": {
    "desc": "<p>Font size, font type, font weight, font color, follow the form of <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font\" target=\"_blank\">css font</a>.</p>\n<p>For example:</p>\n<pre><code>// size | family\nfont: &#39;2em &quot;STHeiti&quot;, sans-serif&#39;\n\n// style | weight | size | family\nfont: &#39;italic bolder 16px cursive&#39;\n\n// weight | size | family\nfont: &#39;bolder 2em &quot;Microsoft YaHei&quot;, sans-serif&#39;\n</code></pre>"
  },
  "elements-text.style.textAlign": {
    "desc": "<p>Text horizontal alignment. Optional values: <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;left&#39;</code> means the left side of the text block is specified by the <a href=\"#graphic.elements-text.style.x\">style.x</a>, while <code class=\"codespan\">&#39;right&#39;</code> means the right side of the text block is specified by <a href=\"#graphic.elements-text.style.y\">style.y</a>.</p>\n"
  },
  "elements-text.style.textVerticalAlign": {
    "desc": "<p>Text vertical alignment. Optional values: <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-text.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-text.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-text.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-text.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-text.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-text.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-text.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-rect": {
    "desc": "<p>Rectangle element.</p>\n"
  },
  "elements-rect.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-rect.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-rect.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-rect.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-rect.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-rect.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-rect.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-rect.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-rect.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-rect.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-rect.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-rect.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-rect.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-rect.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-rect.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-rect.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-rect.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-rect.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-rect.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-rect.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-rect.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-rect.shape.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-rect.shape.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-rect.shape.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "elements-rect.shape.height": {
    "desc": "<p>The height of the shape of the element.</p>\n"
  },
  "elements-rect.shape.r": {
    "desc": "<p>Specify border radius of the rectangular here. Generally, <code class=\"codespan\">r</code> should be <code class=\"codespan\">[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]</code>, where each item is a number.</p>\n<p>Abbreviation is enabled, for example:</p>\n<ul>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">1</code>         means <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1]</code>       means <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1, 2]</code>    means <code class=\"codespan\">[1, 2, 1, 2]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1, 2, 3]</code> means <code class=\"codespan\">[1, 2, 3, 2]</code></li>\n</ul>\n"
  },
  "elements-rect.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-rect.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-rect.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-rect.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-rect.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-rect.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-rect.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-rect.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-circle": {
    "desc": "<p>Circle element.</p>\n"
  },
  "elements-circle.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-circle.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-circle.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-circle.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-circle.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-circle.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-circle.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-circle.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-circle.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-circle.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-circle.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-circle.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-circle.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-circle.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-circle.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-circle.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-circle.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-circle.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-circle.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-circle.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-circle.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-circle.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-circle.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-circle.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-circle.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-circle.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-circle.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-circle.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-circle.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-circle.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-circle.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-circle.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-ring": {
    "desc": "<p>Ring element.</p>\n"
  },
  "elements-ring.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-ring.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-ring.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-ring.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-ring.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-ring.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-ring.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-ring.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-ring.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-ring.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-ring.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-ring.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-ring.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-ring.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-ring.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-ring.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-ring.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-ring.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-ring.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-ring.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-ring.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-ring.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-ring.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-ring.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-ring.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "elements-ring.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-ring.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-ring.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-ring.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-ring.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-ring.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-ring.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-ring.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-sector": {
    "desc": "<p>Sector element.</p>\n"
  },
  "elements-sector.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-sector.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-sector.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-sector.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-sector.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-sector.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-sector.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-sector.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-sector.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-sector.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-sector.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-sector.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-sector.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-sector.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-sector.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-sector.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-sector.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-sector.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-sector.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-sector.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-sector.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-sector.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-sector.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-sector.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-sector.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "elements-sector.shape.startAngle": {
    "desc": "<p>start angle, in radian.</p>\n"
  },
  "elements-sector.shape.endAngle": {
    "desc": "<p>end anble, in radian.</p>\n"
  },
  "elements-sector.shape.clockwise": {
    "desc": "<p>Whether draw clockwise.</p>\n"
  },
  "elements-sector.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-sector.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-sector.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-sector.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-sector.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-sector.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-sector.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-sector.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-arc": {
    "desc": "<p>Arc element.</p>\n"
  },
  "elements-arc.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-arc.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-arc.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-arc.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-arc.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-arc.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-arc.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-arc.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-arc.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-arc.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-arc.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-arc.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-arc.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-arc.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-arc.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-arc.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-arc.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-arc.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-arc.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-arc.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-arc.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-arc.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-arc.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "elements-arc.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "elements-arc.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "elements-arc.shape.startAngle": {
    "desc": "<p>start angle, in radian.</p>\n"
  },
  "elements-arc.shape.endAngle": {
    "desc": "<p>end anble, in radian.</p>\n"
  },
  "elements-arc.shape.clockwise": {
    "desc": "<p>Whether draw clockwise.</p>\n"
  },
  "elements-arc.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-arc.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-arc.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-arc.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-arc.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-arc.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-arc.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-arc.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-polygon": {
    "desc": "<p>Polygon element.</p>\n"
  },
  "elements-polygon.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-polygon.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-polygon.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-polygon.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polygon.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polygon.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polygon.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polygon.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polygon.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polygon.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polygon.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polygon.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-polygon.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-polygon.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-polygon.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-polygon.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-polygon.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-polygon.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-polygon.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-polygon.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-polygon.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-polygon.shape.points": {
    "desc": "<p>A list of points, which defines the shape, like <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code>.</p>\n"
  },
  "elements-polygon.shape.smooth": {
    "desc": "<p>Whether smooth the line.</p>\n<ul>\n<li>If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of <code class=\"codespan\">[0, 1]</code>.</li>\n<li>If the value is <code class=\"codespan\">&#39;spline&#39;</code>, Catmull-Rom spline interpolation is used.</li>\n</ul>\n"
  },
  "elements-polygon.shape.smoothConstraint": {
    "desc": "<p>Whether prevent the smooth process cause the line out of the bounding box.</p>\n<p>Only works when <code class=\"codespan\">smooth</code> is <code class=\"codespan\">number</code> (bezier smooth).</p>\n"
  },
  "elements-polygon.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-polygon.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-polygon.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-polygon.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-polygon.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-polygon.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-polygon.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-polygon.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-polyline": {
    "desc": "<p>Polyline element.</p>\n"
  },
  "elements-polyline.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-polyline.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-polyline.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-polyline.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polyline.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polyline.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polyline.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-polyline.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polyline.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-polyline.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polyline.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-polyline.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-polyline.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-polyline.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-polyline.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-polyline.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-polyline.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-polyline.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-polyline.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-polyline.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-polyline.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-polyline.shape.points": {
    "desc": "<p>A list of points, which defines the shape, like <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code>.</p>\n"
  },
  "elements-polyline.shape.smooth": {
    "desc": "<p>Whether smooth the line.</p>\n<ul>\n<li>If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of <code class=\"codespan\">[0, 1]</code>.</li>\n<li>If the value is <code class=\"codespan\">&#39;spline&#39;</code>, Catmull-Rom spline interpolation is used.</li>\n</ul>\n"
  },
  "elements-polyline.shape.smoothConstraint": {
    "desc": "<p>Whether prevent the smooth process cause the line out of the bounding box.</p>\n<p>Only works when <code class=\"codespan\">smooth</code> is <code class=\"codespan\">number</code> (bezier smooth).</p>\n"
  },
  "elements-polyline.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-polyline.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-polyline.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-polyline.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-polyline.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-polyline.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-polyline.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-polyline.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-line": {
    "desc": "<p>Line element.</p>\n"
  },
  "elements-line.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-line.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-line.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-line.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-line.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-line.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-line.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-line.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-line.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-line.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-line.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-line.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-line.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-line.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-line.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-line.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-line.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-line.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-line.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-line.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-line.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-line.shape.x1": {
    "desc": "<p>x value of the start point.</p>\n"
  },
  "elements-line.shape.y1": {
    "desc": "<p>y value of the start point.</p>\n"
  },
  "elements-line.shape.x2": {
    "desc": "<p>x value of the end point.</p>\n"
  },
  "elements-line.shape.y2": {
    "desc": "<p>y value of the end point.</p>\n"
  },
  "elements-line.shape.percent": {
    "desc": "<p>Specify the percentage of drawing, useful in animation.</p>\n<p>Value range: [0, 1].</p>\n"
  },
  "elements-line.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-line.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-line.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-line.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-line.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-line.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-line.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-line.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "elements-bezierCurve": {
    "desc": "<p>Quadratic bezier curve or cubic bezier curve.</p>\n"
  },
  "elements-bezierCurve.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-bezierCurve.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "elements-bezierCurve.$action": {
    "desc": "<p>Specify the operation should be performed to the element when calling <code class=\"codespan\">setOption</code>.\nDefault value is &#39;merge&#39;, other values can be &#39;replace&#39; or &#39;remove&#39;.</p>\n<p>Optional values:</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>: merge the given option to existing element (if any), otherwise create a new element.</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>: create a new element according to the given option and replace the existing element (if any).</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>: delete the existing element (if any).</li>\n</ul>\n"
  },
  "elements-bezierCurve.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-bezierCurve.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-bezierCurve.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-bezierCurve.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#graphic.elements-polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#graphic.elements-polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#graphic.elements-polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#graphic.elements-group\">group</a> or the root canvas). Thus we are able to <a href=\"#graphic.elements-group\">group</a> multiple elements, and <a href=\"#graphic.elements-group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "elements-bezierCurve.left": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.right": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the height of its parent.</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.left\">left</a> and <a href=\"#graphic.elements-polygon.right\">right</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.left\">left</a> or <a href=\"#graphic.elements-polygon.right\">right</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">x</code>, <code class=\"codespan\">cx</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.top": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.bottom": {
    "desc": "<p>Specify how to be positioned in its parent.</p>\n<p>When the element is at the top level, the parent is the container of the chart instance.\nOtherwise, the parent is a <code class=\"codespan\">group</code> element.</p>\n<p>Optional values:</p>\n<ul>\n<li>Pixel value: For example, can be a number <code class=\"codespan\">30</code>, means <code class=\"codespan\">30px</code>.</li>\n<li>Percent value: For example, can be a string <code class=\"codespan\">&#39;33%&#39;</code>, means the final result should be calculated by this value and the width of its parent.</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>: means position the element in the middle of according to its parent.</li>\n</ul>\n<p>Only one between <a href=\"#graphic.elements-polygon.top\">top</a> and <a href=\"#graphic.elements-polygon.bottom\">bottom</a> can work.</p>\n<p>If <a href=\"#graphic.elements-polygon.top\">top</a> or <a href=\"#graphic.elements-polygon.bottom\">bottom</a> is specified, positioning attributes in <a href=\"#graphic.elements-polygon.shape\">shape</a> (like <code class=\"codespan\">y</code>, <code class=\"codespan\">cy</code>) will not work.</p>\n"
  },
  "elements-bezierCurve.bounding": {
    "desc": "<p>Used to specify whether the entire transformed element (containing children if is group) is confined in its container.</p>\n<p>See sample:</p>\n<iframe  data-src=\"https://echarts.apache.org/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"><iframe />\n\n\n<p>Optional values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>: (default)\n  Use the transformed bounding box of itself and its descendants to perform position calculation, which confine the entire body in the boundary of its parent.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>:\n  Only use the untransformed bounding box of itself (without its descentant) to perform position calculation, which is suitable when the content in the element need to be overflow its parent.</p>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.z": {
    "desc": "<p>z value of the elements, determine the overlap order.</p>\n"
  },
  "elements-bezierCurve.zlevel": {
    "desc": "<p>Determine which canvas layer this element should be in.</p>\n<p>Notice: Multiple canvas layer may affect performance.</p>\n"
  },
  "elements-bezierCurve.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-bezierCurve.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "elements-bezierCurve.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "elements-bezierCurve.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "elements-bezierCurve.cursor": {
    "desc": "<p>The mouse style when mouse hovers on an element, the same as <code class=\"codespan\">cursor</code> property in <code class=\"codespan\">CSS</code>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-bezierCurve.draggable": {
    "desc": "<p>Can be dragged or not.</p>\n"
  },
  "elements-bezierCurve.progressive": {
    "desc": "<p>Whether use progressive render to improve performance. Usually used when number of element is too large.</p>\n"
  },
  "elements-bezierCurve.shape.x1": {
    "desc": "<p>x value of the start point.</p>\n"
  },
  "elements-bezierCurve.shape.y1": {
    "desc": "<p>y value of the start point.</p>\n"
  },
  "elements-bezierCurve.shape.x2": {
    "desc": "<p>x value of the end point.</p>\n"
  },
  "elements-bezierCurve.shape.y2": {
    "desc": "<p>y value of the end point.</p>\n"
  },
  "elements-bezierCurve.shape.cpx1": {
    "desc": "<p>x of control point.</p>\n"
  },
  "elements-bezierCurve.shape.cpy1": {
    "desc": "<p>y of control point.</p>\n"
  },
  "elements-bezierCurve.shape.cpx2": {
    "desc": "<p>x of the second control point. If specified, cubic bezier is used.</p>\n<p>If both <code class=\"codespan\">cpx2</code> and <code class=\"codespan\">cpy2</code> are not set, quatratic bezier is used.</p>\n"
  },
  "elements-bezierCurve.shape.cpy2": {
    "desc": "<p>y of the second control point. If specified, cubic bezier is used.</p>\n<p>If both <code class=\"codespan\">cpx2</code> and <code class=\"codespan\">cpy2</code> are not set, quatratic bezier is used.</p>\n"
  },
  "elements-bezierCurve.shape.percent": {
    "desc": "<p>Specify the percentage of drawing, useful in animation.</p>\n<p>Value range: [0, 1].</p>\n"
  },
  "elements-bezierCurve.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-bezierCurve.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "elements-bezierCurve.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "elements-bezierCurve.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "elements-bezierCurve.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "elements-bezierCurve.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "elements-bezierCurve.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "elements-bezierCurve.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  }
}