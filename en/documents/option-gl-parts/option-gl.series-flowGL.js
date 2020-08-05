window.__EC_DOC_option_gl_series_flowGL = {
  "particleDensity": {
    "desc": "<p>The density of the particles. The actual number of particles is the square of the set number. The higher the particle density, the better the trace effect, but the greater the performance overhead. In addition to this property, you can get a clearer and more consistent trace using <a href=\"#series-flowGL.particleType\">particleType</a>.</p>\n"
  },
  "particleType": {
    "desc": "<p>The type of particle. The default is <code class=\"codespan\">&#39;point&#39;</code>, which can be set to <code class=\"codespan\">&#39;line&#39;</code>. Line-type particles connect the position of the last motion to the position of the current motion with a line, which makes the trajectory more consistent.</p>\n<p>The following are the differences between the types of <code class=\"codespan\"></code>point&#39;<code class=\"codespan\">and</code>&#39;line&#39;`.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/flowGL-point.jpg\" width=\"100%\" title=\"Point\"><img />\n    <img  src=\"documents/asset/gl/img/flowGL-line.jpg\" width=\"100%\" title=\"Line\"><img />\n<div />\n"
  },
  "particleSize": {
    "desc": "<p>The size of the particle. If <a href=\"#series-flowGL.particleType\">particleType</a> is <code class=\"codespan\">&#39;line&#39;</code>, will be expressed as a line width.</p>\n"
  },
  "particleSpeed": {
    "desc": "<p>The speed of the particle, the default is 1. Note that when <a href=\"#series-flowGL.particleType\">particleType</a> is <code class=\"codespan\">&#39;point&#39;</code>, the excessive speed will make the entire track become intermittent.</p>\n"
  },
  "particleTrail": {
    "desc": "<p>The length of the track of the particle. The larger the value, the longer the track.</p>\n"
  },
  "supersampling": {
    "desc": "<p>The oversampling ratio of the picture, using the &#39;4&#39; supersampling can effectively improve the sharpness of the picture and reduce the picture sawtooth. However, because there is a need to process more pixels, there is a higher performance requirement.</p>\n<p>The following are the differences between no oversampling and a supersampling value of 4.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/flowGL-noss.jpg\" width=\"100%\" title=\"No supersampling\"><img />\n    <img  src=\"documents/asset/gl/img/flowGL-ss.jpg\" width=\"100%\" title=\"Supersampling=4\"><img />\n<div />\n"
  },
  "gridWidth": {
    "desc": "<p>The number of grid widths of the incoming grid data. <code class=\"codespan\">flowGL</code> will create a floating-point texture of the stored vector field based on this value and <a href=\"#series-flowGL.gridHeight\">gridHeight</a> for the particle&#39;s trajectory calculation.</p>\n"
  },
  "gridHeight": {
    "desc": "<p>The number of grid heights of incoming grid data.</p>\n"
  },
  "data": {
    "desc": "<p>The data of the vector field, including the position of the vector and the direction of the vector (including the size). <code class=\"codespan\">flowGL</code> has no mandatory requirements for the order in which data is stored. You can even pass in sparse vector data.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">data: [\n    // Each data item contains four values representing the lng, lat of the position and the speed sLng, sLat on the corresponding dimension.\n    // If it is in a Cartesian coordinate system, it is the position x, y and the speed in the corresponding dimension sx, sy\n    [0, 0, 1, 1], [1, 0, 1, 1],\n    [0, 1, 1, 1], [1, 1, 1, 1]\n];\n</code></pre>\n<p>The default <code class=\"codespan\">flowGL</code> will automatically calculate <a href=\"#series-flowGL.gridWidth\">gridWidth</a> and <a href=\"#series-flowGL.gridHeight\">gridHeight</a> based on the regular grid data. But because flowGL also supports relatively sparse data formats, you can also specify these two values manually.</p>\n"
  },
  "itemStyle": {
    "desc": "<p>The style of the vector field trace.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the vector field trace. More is to encode the size of the vector through the <code class=\"codespan\">visualMap</code> component as demonstrated in the figure above.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>Transparency of vector field traces.</p>\n"
  }
}