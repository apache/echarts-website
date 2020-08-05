window.__EC_DOC_option_gl_grid3D = {
  "show": {
    "desc": "<p>Whether to display a 3D cartesian coordinate system component.</p>\n"
  },
  "boxWidth": {
    "desc": "<p>3D cartesian coordinate system width in a 3D scene. With <a href=\"#grid3D.viewControl.distance\">viewControl.distance</a> you can get the most appropriate display size.</p>\n"
  },
  "boxHeight": {
    "desc": "<p>3D cartesian coordinate system height in a 3D scene.</p>\n"
  },
  "boxDepth": {
    "desc": "<p>3D cartesian coordinate system depth in a 3D scene.</p>\n"
  },
  "axisLine": {
    "desc": "<p>Settings related to axis line.</p>\n"
  },
  "axisLine.show": {
    "desc": "<p>Set this to be <code class=\"codespan\">false</code> to prevent the axis line from showing.</p>\n"
  },
  "axisLine.interval": {
    "desc": "<p>axis scale label is valid in the category axis. </p>\n<p>By default, <code class=\"codespan\">interval</code> is automatically calculated to ensure a good display.</p>\n<p>It can be set to 0 to force all labels to be displayed.</p>\n<p>If the value is <code class=\"codespan\">1</code>, it means &quot;displays a label every other label&quot;. If the value is <code class=\"codespan\">2</code>, it means &quot;displays a label between two labels&quot;, and so on.</p>\n<p>The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns <code class=\"codespan\">false</code>.</p>\n"
  },
  "axisLine.lineStyle.color": {
    "desc": "<p>The color of the line. </p>\n<p>In addition to color strings, RGBA values represented by arrays are supported, for example:</p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "axisLine.lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "axisLine.lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "axisLabel": {
    "desc": "<p>Settings related to axis label.</p>\n"
  },
  "axisLabel.show": {
    "desc": "<p>Set this to be <code class=\"codespan\">false</code> to prevent the axis label from appearing.</p>\n"
  },
  "axisLabel.margin": {
    "desc": "<p>The margin between the axis label and the axis line.</p>\n<p><strong>Note：</strong> This distance is three-dimensional space, not screen space.</p>\n"
  },
  "axisLabel.interval": {
    "desc": "<p>axis scale label is valid in the category axis. </p>\n<p>By default, <code class=\"codespan\">interval</code> is automatically calculated to ensure a good display.</p>\n<p>It can be set to 0 to force all labels to be displayed.</p>\n<p>If the value is <code class=\"codespan\">1</code>, it means &quot;displays a label every other label&quot;. If the value is <code class=\"codespan\">2</code>, it means &quot;displays a label between two labels&quot;, and so on.</p>\n<p>The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns <code class=\"codespan\">false</code>.</p>\n"
  },
  "axisLabel.textStyle.color": {
    "desc": "<p>Color of axis label is set to be <a href=\"#.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default. Callback function is supported, in the following format:</p>\n<pre><code class=\"lang-js\">(val: string) =&gt; Color\n</code></pre>\n<p>Parameter is the text of label, and return value is the color. See the following example:</p>\n<pre><code class=\"lang-js\">textStyle: {\n    color: function (value, index) {\n        return value &gt;= 0 ? &#39;green&#39; : &#39;red&#39;;\n    }\n}\n</code></pre>\n"
  },
  "axisLabel.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "axisLabel.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "axisLabel.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "axisLabel.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "axisLabel.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "axisTick": {
    "desc": "<p>Settings related to axis tick.</p>\n"
  },
  "axisTick.show": {
    "desc": "<p>Set this to be <code class=\"codespan\">false</code> to prevent the axis tick from showing.</p>\n"
  },
  "axisTick.interval": {
    "desc": "<p>axis scale label is valid in the category axis.  Defaults to the same as <a href=\"#.axisLabel.interval\">axisLabel.interval</a>. </p>\n<p>By default, <code class=\"codespan\">interval</code> is automatically calculated to ensure a good display.</p>\n<p>It can be set to 0 to force all labels to be displayed.</p>\n<p>If the value is <code class=\"codespan\">1</code>, it means &quot;displays a label every other label&quot;. If the value is <code class=\"codespan\">2</code>, it means &quot;displays a label between two labels&quot;, and so on.</p>\n<p>The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns <code class=\"codespan\">false</code>.</p>\n"
  },
  "axisTick.length": {
    "desc": "<p>The length of the axis tick.</p>\n"
  },
  "axisTick.lineStyle.color": {
    "desc": "<p>Color of axis label is set to be <a href=\"#.axisLine.lineStyle.color\">axisLine.lineStyle.color</a> by default.</p>\n"
  },
  "axisTick.lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "axisTick.lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "splitLine": {
    "desc": "<p>Settings related to axis line.</p>\n"
  },
  "splitLine.show": {
    "desc": "<p>Set this to be <code class=\"codespan\">false</code> to prevent the axis line from showing.</p>\n"
  },
  "splitLine.interval": {
    "desc": "<p>axis scale label is valid in the category axis. </p>\n<p>By default, <code class=\"codespan\">interval</code> is automatically calculated to ensure a good display.</p>\n<p>It can be set to 0 to force all labels to be displayed.</p>\n<p>If the value is <code class=\"codespan\">1</code>, it means &quot;displays a label every other label&quot;. If the value is <code class=\"codespan\">2</code>, it means &quot;displays a label between two labels&quot;, and so on.</p>\n<p>The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns <code class=\"codespan\">false</code>.</p>\n"
  },
  "splitLine.lineStyle.color": {
    "desc": "<p>The color of the line. </p>\n<p>In addition to color strings, RGBA values represented by arrays are supported, for example:</p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "splitLine.lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "splitLine.lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "splitArea": {
    "desc": "<p>Split area of axis in <a href=\"#grid\">grid</a> area.</p>\n"
  },
  "splitArea.show": {
    "desc": "<p>Set this to be <code class=\"codespan\">true</code> to show the splitArea.</p>\n"
  },
  "splitArea.interval": {
    "desc": "<p>Axis splitArea is valid in the category axis.  Defaults to the same as <a href=\"#.axisLabel.interval\">axisLabel.interval</a>. </p>\n<p>By default, <code class=\"codespan\">interval</code> is automatically calculated to ensure a good display.</p>\n<p>It can be set to 0 to force all labels to be displayed.</p>\n<p>If the value is <code class=\"codespan\">1</code>, it means &quot;displays a label every other label&quot;. If the value is <code class=\"codespan\">2</code>, it means &quot;displays a label between two labels&quot;, and so on.</p>\n<p>The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:</p>\n<pre><code class=\"lang-js\">(index:number, value: string) =&gt; boolean\n</code></pre>\n<p>The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns <code class=\"codespan\">false</code>.</p>\n"
  },
  "splitArea.areaStyle": {
    "desc": "<p>Split area style.</p>\n"
  },
  "splitArea.areaStyle.color": {
    "desc": "<p>Color of the split area.\nThe split area color could also be set in color array, which the split lines would take as their colors in turns. Dark and light colors in turns are used by default.</p>\n"
  },
  "axisPointer": {
    "desc": "<p>Configurations for axis pointer.</p>\n"
  },
  "axisPointer.show": {
    "desc": "<p>Whether to display the axisPointer. Set this to be <code class=\"codespan\">true</code> to show the splitArea.</p>\n"
  },
  "axisPointer.lineStyle.color": {
    "desc": "<p>The color of the line. </p>\n<p>In addition to color strings, RGBA values represented by arrays are supported, for example:</p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "axisPointer.lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "axisPointer.lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "axisPointer.label": {
    "desc": "<p>The label of axisPointer.</p>\n"
  },
  "axisPointer.label.show": {
    "desc": "<p>Whether to display the label of axisPointer. Value axes are displayed by default, while category axes are not.</p>\n"
  },
  "axisPointer.label.formatter": {
    "desc": "<p>The formatter of the label. . The first parameter to the function is the value of the current axis. The second parameter to the function is an array of values for all axes.</p>\n<pre><code class=\"lang-js\">(value: number, valueAll: Array) =&gt; string\n</code></pre>\n"
  },
  "axisPointer.label.margin": {
    "desc": "<p>Distance between label and axis.\nLike the scale label, this distance is a 3D space rather than a screen pixel.</p>\n"
  },
  "axisPointer.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "axisPointer.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "axisPointer.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "axisPointer.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "axisPointer.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "axisPointer.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "environment": {
    "desc": "<p>Environment map. Support for solid colors, gradual colors, URL of panoramic texture. The default is <code class=\"codespan\">&#39;auto&#39;</code>, which is used as the environment texture when <a href=\"#grid3D.light.ambientCubemap.texture\">light.ambientCubemap.texture</a> is configured. Otherwise, the environment texture is not displayed.</p>\n<p>Example: </p>\n<pre><code class=\"lang-js\">// Configure as a panoramic texture\nenvironment: &#39;asset/starfield.jpg&#39;\n// Configured as a solid black background\nenvironment: &#39;#000&#39;\n// Configured as a background with a vertical gradient\nenvironment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{\n  offset: 0, color: &#39;#00aaff&#39; // Sky color\n}, {\n  offset: 0.7, color: &#39;#998866&#39; // Ground color\n}, {\n  offset: 1, color: &#39;#998866&#39; // Ground color\n}], false)\n\n</code></pre>\n"
  },
  "light": {
    "desc": "<p>Light related settings. Invalid when <a href=\"#grid3D.shading\">shading</a> is &#39;color&#39;.</p>\n<p>The lighting settings affect the components and all the charts on the component&#39;s coordinate system.</p>\n<p>A reasonable lighting setting can make the brightness and darkness of the whole scene richer and more layered.</p>\n"
  },
  "light.main": {
    "desc": "<p>The setting of the main light source of the scene. In the <a href=\"#globe\">globe</a> component is the sun.</p>\n"
  },
  "light.main.color": {
    "desc": "<p>The color of the main light source.</p>\n"
  },
  "light.main.intensity": {
    "desc": "<p>The intensity of the main light source.</p>\n"
  },
  "light.main.shadow": {
    "desc": "<p>Whether the main light source displays a shadow. The default is off.</p>\n<p>Turning on the shadows can bring more realistic and layered lighting to the scene. But it also increases the operating overhead of the program.</p>\n<p>The following two images show the difference between turning on the shadow and turning off the shadow.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow.png\" width=\"100%\" title=\"Shadow\"><img />\n    <img  src=\"documents/asset/gl/img/geo-no-shadow.png\" width=\"100%\" title=\"No Shadow\"><img />\n<div />\n"
  },
  "light.main.shadowQuality": {
    "desc": "<p>The quality of the shadow. You can choose <code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n<p>The following two images shows the difference between low quality and high quality shadows.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-shadow-low.png\" width=\"100%\" title=\"Low\"><img />\n    <img  src=\"documents/asset/gl/img/geo-shadow-high.png\" width=\"100%\" title=\"High\"><img />\n<div />\n"
  },
  "light.main.alpha": {
    "desc": "<p>The main light source is around the x-axis, which is the angle of up-down rotation. Control the direction of the light with <a href=\"#grid3D.light.main.beta\">beta</a>.</p>\n<p>As the following image show:</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/light-alpha-beta.png\"></p>\n<p>The <a href=\"#globe\">globe</a> component can control the time of sunlight by <a href=\"#globe.light.main.time\">time</a>.</p>\n"
  },
  "light.main.beta": {
    "desc": "<p>The main light source is around the y-axis, which is the angle of the left-right rotation.</p>\n"
  },
  "light.ambient": {
    "desc": "<p>Global ambient light settings.</p>\n"
  },
  "light.ambient.color": {
    "desc": "<p>The color of ambient light.</p>\n"
  },
  "light.ambient.intensity": {
    "desc": "<p>The intensity of ambient light.</p>\n"
  },
  "light.ambientCubemap": {
    "desc": "<p>The ambientCubemap uses texture as the source of ambient light, which provides diffuse and specular for objects. The diffuse and specular can be set separately by <a href=\"#grid3D.light.ambientCubemap.diffuseIntensity\">diffuseIntensity</a> and <a href=\"#grid3D.light.ambientCubemap.specularIntensity\">specularIntensity</a>.</p>\n"
  },
  "light.ambientCubemap.texture": {
    "desc": "<p>The URL of the ambient cubemap supports HDR images in the <code class=\"codespan\">.hdr</code> format. You can obtained the resources for <code class=\"codespan\">.hdr</code> from <a href=\"http://www.hdrlabs.com/sibl/archive.html\" target=\"_blank\">http://www.hdrlabs.com/sibl/archive.html</a> and other websites.</p>\n<p>Example：</p>\n<pre><code class=\"lang-js\">ambientCubemap: {\n    texture: &#39;pisa.hdr&#39;,\n    // The exposure value used when analytic hdr\n    exposure: 1.0\n}\n</code></pre>\n"
  },
  "light.ambientCubemap.diffuseIntensity": {
    "desc": "<p>The intensity of diffuse.</p>\n"
  },
  "light.ambientCubemap.specularIntensity": {
    "desc": "<p>The intensity of specular.</p>\n"
  },
  "postEffect": {
    "desc": "<p>Post-processing effects related configuration. It can add effects such as highlights, depth of field, screen space ambient occlusion (SSAO), toning to the picture. And it can make the whole picture more textured.</p>\n<p>The following are the differences between closing <code class=\"codespan\">postEffect</code> and opening <code class=\"codespan\">postEffect</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/globe-posteffect-disable.png\" width=\"100%\" title=\"Disable\"><img />\n    <img  src=\"documents/asset/gl/img/globe-posteffect-enable.png\" width=\"100%\" title=\"Enable\"><img />\n<div />\n\n<p>Note that when postEffect is enable, <a href=\"#grid3D.temporalSuperSampling\">temporalSuperSampling</a> is enable by default. After the picture is still, the picture will continue to be enhanced, including anti-aliasing, depth of field, SSAO, shadows, etc.</p>\n"
  },
  "postEffect.enable": {
    "desc": "<p>Whether to enable post-processing effects. Not enabled by default.</p>\n"
  },
  "postEffect.bloom": {
    "desc": "<p>Bloom is used to reproducing the effects that occur in real cameras when taking pictures in a bright environment.\nBecause traditional RGB can only represent colors in the range of &#39;0 - 255&#39;, so we need to use the bloom effect simulates fringes of light extending from the borders of bright areas, creating the illusion of a bright light overwhelming the camera. As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/globe-posteffect-bloom.png\"></p>\n"
  },
  "postEffect.bloom.enable": {
    "desc": "<p>Whether to enable the bloom effect.</p>\n"
  },
  "postEffect.bloom.bloomIntensity": {
    "desc": "<p>The intensity of the bloom. The default is 0.1.</p>\n"
  },
  "postEffect.depthOfField": {
    "desc": "<p>Depth of Field is a post-processing effect that simulates the focus properties of a camera. The area of focus is clear, and the area away from the focus is gradually blurred.</p>\n<p>The depth of field effect allows the observer to focus on the area of focus and make the picture feel stronger. Large depth of field can also create a macro model effect.</p>\n<p>The following are the differences between turning off and turning on the depth of field effect.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-dof.png\" width=\"100%\" title=\"Disable\"><img />\n    <img  src=\"documents/asset/gl/img/geo-dof.png\" width=\"100%\" title=\"Enable\"><img />\n<div />\n"
  },
  "postEffect.depthOfField.enable": {
    "desc": "<p>Whether to enable the depth of field.</p>\n"
  },
  "postEffect.depthOfField.focalDistance": {
    "desc": "<p>The initial focus distance. The user can click on the area to automatically focus.</p>\n"
  },
  "postEffect.depthOfField.focalRange": {
    "desc": "<p>The size of the in-focus area. The objects in this range are completely clear and there is no blurring.</p>\n"
  },
  "postEffect.depthOfField.fstop": {
    "desc": "<p>[F value] of the lens (<a href=\"https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)\" target=\"_blank\">https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)</a>, the smaller the value, the shallower the depth of field.</p>\n"
  },
  "postEffect.depthOfField.blurRadius": {
    "desc": "<p>Blur radius outside the focus.</p>\n<p>The difference blur effect between the different radius. </p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-dof-small.png\" width=\"100%\" title=\"blurSize: 3\"><img />\n    <img  src=\"documents/asset/gl/img/geo-dof-large.png\" width=\"100%\" title=\"blurSize: 10\"><img />\n<div />\n"
  },
  "postEffect.screenSpaceAmbientOcclusion": {
    "desc": "<p>The ambient occlusion post-processing effect darkens the corners, holes, crevices, and areas where most light can`t reach. It is a supplement to the traditional shadow map, which makes the whole scene more natural and layered.</p>\n<p>Below is a comparison of the effects of no SSAO and SSAO:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-no-ssao.png\" width=\"100%\" title=\"No SSAO\"><img />\n    <img  src=\"documents/asset/gl/img/geo-ssao.png\" width=\"100%\" title=\"SSAO\"><img />\n<div />\n"
  },
  "postEffect.SSAO": {
    "desc": "<p>Same as <a href=\"#grid3D.postEffect.screenSpaceAmbientOcclusion\">screenSpaceAmbientOcclusion</a></p>\n"
  },
  "postEffect.SSAO.enable": {
    "desc": "<p>Whether to enable SSAO (screen space ambient occlusion). Not enabled by default.</p>\n"
  },
  "postEffect.SSAO.quality": {
    "desc": "<p>The quality of SSAO (screen space ambient occlusion). Supporting<code class=\"codespan\">&#39;low&#39;</code>, <code class=\"codespan\">&#39;medium&#39;</code>, <code class=\"codespan\">&#39;high&#39;</code>, <code class=\"codespan\">&#39;ultra&#39;</code></p>\n"
  },
  "postEffect.SSAO.radius": {
    "desc": "<p>The radius of the SSAO (screen space ambient occlusion). The larger the radius, the more natural the effect, but you need to set a higher <code class=\"codespan\">&#39;quality&#39;</code>. </p>\n<p>The following example is the difference between a smaller and larger radius:</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/geo-ssao-small-radius.png\" width=\"100%\" title=\"Radius: 1\"><img />\n    <img  src=\"documents/asset/gl/img/geo-ssao-large-radius.png\" width=\"100%\" title=\"Radius: 10\"><img />\n<div />\n"
  },
  "postEffect.SSAO.intensity": {
    "desc": "<p>The intensity of SSAO (screen space ambient occlusion). The larger the value, the darker the color.</p>\n"
  },
  "postEffect.colorCorrection": {
    "desc": "<p>Color correction and adjustment. Similar to Color Adjustments in Photoshop.</p>\n<p>The same scene in the figure below is adjusted to the difference between the cool color system and the warm color system.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/buildings-cold.jpg\" width=\"100%\" title=\"Cold\"><img />\n    <img  src=\"documents/asset/gl/img/buildings-warm.jpg\" width=\"100%\" title=\"Warm\"><img />\n<div />\n\n"
  },
  "postEffect.colorCorrection.enable": {
    "desc": "<p>Whether to enable the color correction.</p>\n"
  },
  "postEffect.colorCorrection.lookupTexture": {
    "desc": "<p>Color correction lookup texture, recommended.</p>\n<p>The color correction lookup texture is a texture image like the one below.</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/lookup.png\"></p>\n<p>This is the basic lookup texture image that you can use directly.\nTo adjust the color of the scene to the effect you want, you can take a screenshot of the scene and adjust the color to the desired effect in image processing software such as Photoshop. Then apply the same adjustment to the image of the lookup texture above.</p>\n<p>For example, after turning into a cool tone, the image of the lookup texture will look like this:</p>\n<p><img width=\"200\" height=\"auto\" src=\"documents/asset/gl/img/crispwinter.png\"></p>\n<p>Then the texture image is used as the value of the configuration item, and you can get the same effect in Photoshop.</p>\n<p>Of course, if you just want to get a screenshot, you don&#39;t have to do it anymore, but if you want to easily adjust to the ideal color in real-time interactive works, this is very useful.</p>\n"
  },
  "postEffect.colorCorrection.exposure": {
    "desc": "<p>The exposure of the image.</p>\n"
  },
  "postEffect.colorCorrection.brightness": {
    "desc": "<p>The brightness of the image.</p>\n"
  },
  "postEffect.colorCorrection.contrast": {
    "desc": "<p>The contrast of the image.</p>\n"
  },
  "postEffect.colorCorrection.saturation": {
    "desc": "<p>The saturation of the image.</p>\n"
  },
  "postEffect.FXAA": {
    "desc": "<p>After opening <a href=\"#grid3D.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (Multi Sampling Anti Aliasing) will not work. At this time, FXAA (Fast Approximate Anti-Aliasing) can solve the anti-aliasing problem quickly and easily. FXAA blurs the edge of the scene to solve the problem of aliasing. It works well on some scenes, but in echarts-gl, you need to ensure that the edges of many texts and lines are sharp and clear, so FXAA is not suitable. At this point we can use supersampling by setting a higher <code class=\"codespan\">devicePixelRatio</code> as follows:</p>\n<pre><code class=\"lang-js\">var chart = echarts.init(dom, null, {\n    devicePixelRatio: 2\n})\n</code></pre>\n<p>However, setting a higher <code class=\"codespan\">devicePixelRatio</code> has high requirements for computer performance, so more often we recommend using <a href=\"#grid3D.temporalSuperSampling\">temporalSuperSampling</a> in echarts-gl. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated.,thus achieving anti-aliasing effect.</p>\n"
  },
  "postEffect.FXAA.enable": {
    "desc": "<p>Whether to enable FXAA. Not enabled by default.</p>\n"
  },
  "temporalSuperSampling": {
    "desc": "<p>Temporal supersampling. After opening <a href=\"#grid3D.postEffect\">postEffect</a>, WebGL&#39;s default MSAA (MultiSampling Anti-Aliasing) will not work, so we need to solve the problem of sampling.</p>\n<p>Temporal supersampling is an anti-aliasing method. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated, thus achieving anti-aliasing effect.\nAnd in this process, ECharts-gl also progressively enhances some of the effects in <a href=\"#grid3D.postEffect\">postEffect</a> that require sampled guarantees. For example <a href=\"#grid3D.postEffect.SSAO\">SSAO</a>, <a href=\"#grid3D.postEffect.depthOfField\">Depth of Field</a>, and shadow.</p>\n<p>The following is the difference between not opening <code class=\"codespan\">temporalSuperSampling</code> and opening <code class=\"codespan\">temporalSuperSampling</code>.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 800px;\">\n    <img  src=\"documents/asset/gl/img/surface-no-taa.png\" width=\"100%\" title=\"No AA\"><img />\n    <img  src=\"documents/asset/gl/img/surface-taa.png\" width=\"100%\" title=\"AA\"><img />\n<div />\n"
  },
  "temporalSuperSampling.enable": {
    "desc": "<p>Whether to enable temporal supersampling. By default, temporal supersampling is also turned on synchronously when <a href=\"#grid3D.postEffect\">postEffect</a> is turned on.</p>\n"
  },
  "viewControl": {
    "desc": "<p><code class=\"codespan\">viewControl</code> is used for mouse rotation, zooming, and other perspective control.</p>\n"
  },
  "viewControl.projection": {
    "desc": "<p>The way of projection, the default is <code class=\"codespan\">&#39;perspective&#39;</code> projection, also supports setting to <code class=\"codespan\">&#39;orthogonal&#39;</code> projection.</p>\n"
  },
  "viewControl.autoRotate": {
    "desc": "<p>Whether to enable the angle of view to automatically rotate around the object.</p>\n"
  },
  "viewControl.autoRotateDirection": {
    "desc": "<p>The direction in which the object auto rotates. The default is <code class=\"codespan\">&#39;cw&#39;</code> means clockwise from top to bottom, and can also use  <code class=\"codespan\">&#39;ccw&#39;</code> means counterclockwise from top to bottom.</p>\n"
  },
  "viewControl.autoRotateSpeed": {
    "desc": "<p>The speed at which the object auto rotates. The unit is <code class=\"codespan\">angle/second</code>, the default is <code class=\"codespan\">10</code>, which is a turn of <code class=\"codespan\">36</code> seconds.</p>\n"
  },
  "viewControl.autoRotateAfterStill": {
    "desc": "<p>The time interval for automatic rotation to resume after the mouse is still. Valid after opening <a href=\"#grid3D.viewControl.autoRotate\">autoRotate</a>.</p>\n"
  },
  "viewControl.damping": {
    "desc": "<p>The damping when the mouse is rotated, zoomed, etc.\nWhen it is greater than 0, the angle of view will continue to move (rotate and zoom) due to certain inertia after the mouse is still.</p>\n"
  },
  "viewControl.rotateSensitivity": {
    "desc": "<p>The sensitivity of the rotation operation. The greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical rotation sensitivity separately.</p>\n<p>The default is <code class=\"codespan\">1</code>.</p>\n<p>Cannot be rotated after setting to <code class=\"codespan\">0</code>.</p>\n<pre><code class=\"lang-js\">// can&#39;t rotate\nrotateSensitivity: 0\n// can only be rotated horizontally\nrotateSensitivity: [1, 0]\n//  can only rotate vertically\nrotateSensitivity: [0, 1]\n</code></pre>\n"
  },
  "viewControl.zoomSensitivity": {
    "desc": "<p>The sensitivity of the zoom operation, the larger the value, the more sensitive. The default is <code class=\"codespan\">1</code>.</p>\n<p>Can<code class=\"codespan\">t be scaled after setting to</code>0`.</p>\n"
  },
  "viewControl.panSensitivity": {
    "desc": "<p>The sensitivity of the panning operation, the greater the value, the more sensitive. Supports the use of arrays to set the horizontal and vertical translation sensitivity.</p>\n<p>The default is <code class=\"codespan\">1</code>.</p>\n<p>Cannot pan after setting to <code class=\"codespan\">0</code>.</p>\n"
  },
  "viewControl.panMouseButton": {
    "desc": "<p>The mouse button used for panning operation supports:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> left mouse button (default)</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> middle mouse button</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> right mouse button</p>\n</li>\n</ul>\n<p>Note: If set to the right mouse button, the default context menu will be blocked.</p>\n"
  },
  "viewControl.rotateMouseButton": {
    "desc": "<p>The mouse button used for the rotation operation supports:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;left&#39;</code> left mouse button</p>\n</li>\n<li><p><code class=\"codespan\">&#39;middle&#39;</code> middle mouse button (default)</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code> right mouse button</p>\n</li>\n</ul>\n<p>Note: If set to the right mouse button, the default context menu will be blocked.</p>\n"
  },
  "viewControl.distance": {
    "desc": "<p>The distance of the default perspective from the subject. For <a href=\"#globe\">globe</a>, the distance from the Earth&#39;s surface is the distance from the center origin for other components such as <a href=\"#grid3D\">grid3D</a> and <a href=\"#geo3D\">geo3D</a>. Valid when <a href=\"#grid3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.minDistance": {
    "desc": "<p>The angle of view is controlled by the mouse to bring the minimum distance to the subject. Valid when <a href=\"#grid3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.maxDistance": {
    "desc": "<p>The angle of view can be extended to the maximum distance of the subject by mouse control. Valid when <a href=\"#grid3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;perspective&#39;</code>.</p>\n"
  },
  "viewControl.orthographicSize": {
    "desc": "<p>The size of the orthogonal projection. Valid when <a href=\"#grid3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code>.</p>\n"
  },
  "viewControl.maxOrthographicSize": {
    "desc": "<p>The maximum value of the orthogonal projection scaling. Valid when <a href=\"#grid3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code>.</p>\n"
  },
  "viewControl.minOrthographicSize": {
    "desc": "<p>The minimum value of the orthogonal projection scaling. Valid when <a href=\"#grid3D.viewControl.projection\">projection</a> is <code class=\"codespan\">&#39;orthographic&#39;</code></p>\n"
  },
  "viewControl.alpha": {
    "desc": "<p>The angle of view is around the x-axis, which is the angle of rotation up and down. With <a href=\"#grid3D.light.main.beta\">beta</a> you can control the direction of the perspective.</p>\n<p>As shown below：</p>\n<p><img width=\"\" height=\"auto\" src=\"documents/asset/gl/img/view-alpha-beta.png\"></p>\n"
  },
  "viewControl.beta": {
    "desc": "<p>The angle of view is around the y-axis, which is the angle of rotation from left to right.</p>\n"
  },
  "viewControl.center": {
    "desc": "<p>At the center of the angle of view, the rotation will also rotate around this center point. The default is <code class=\"codespan\">[0,0,0]</code>.</p>\n"
  },
  "viewControl.minAlpha": {
    "desc": "<p>The minimum alpha value to rotate up and down. That is, the angle of view can be rotated to reach the uppermost angle.</p>\n"
  },
  "viewControl.maxAlpha": {
    "desc": "<p>The maximum alpha value to rotate up and down. That is, the angle of view can be rotated to the lowest angle.</p>\n"
  },
  "viewControl.minBeta": {
    "desc": "<p>The minimum beta value to rotate left and right. That is, the angle of view can be rotated to the leftmost angle.</p>\n"
  },
  "viewControl.maxBeta": {
    "desc": "<p>The maximum beta value to rotate left and right rotation. That is, the angle of view can be rotated to the rightmost angle.</p>\n"
  },
  "viewControl.animation": {
    "desc": "<p>Whether to enable animation.</p>\n"
  },
  "viewControl.animationDurationUpdate": {
    "desc": "<p>The duration time for update the transition animation.</p>\n"
  },
  "viewControl.animationEasingUpdate": {
    "desc": "<p>The easing effect for update transition animation.</p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between  component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n"
  },
  "top": {
    "desc": "<p>Distance between  component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n"
  },
  "right": {
    "desc": "<p>Distance between  component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p> Adaptive by default.</p>\n"
  },
  "bottom": {
    "desc": "<p>Distance between  component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p> Adaptive by default.</p>\n"
  },
  "width": {
    "desc": "<p> The width of the view of the component.</p>\n"
  },
  "height": {
    "desc": "<p> The height of the view of the component.</p>\n"
  }
}