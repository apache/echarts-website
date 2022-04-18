const { generateSW } = require('workbox-build');

generateSW({
    globDirectory: '../',
    globPatterns: [
      '**/*\.*'
    ],
    globIgnores: [
      '**/*.map',
      '\.*',
      '**/node_modules/**',
      '**/package*\.json',
      'sw\.js',
      'workbox*',
    ],
    sourcemap: false,
    swDest: 'sw.js'
});