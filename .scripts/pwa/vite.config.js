const path = require('path')
const { defineConfig } = require('vite')
const { VitePWA } = require('vite-plugin-pwa')

const ROOT = path.resolve(__dirname)

module.exports = defineConfig({
  root: ROOT,
  plugins: [
    VitePWA({
      base: '__HOST__',
      scope: '__SCOPE__',
      manifest: false,
      filename: 'pwa-sw.js',
      workbox: {
        globDirectory: path.resolve(ROOT, '../../'),
        globPatterns: [
          // '**\/**\/*.{js,css,html}'
          // avoid precaching too many files, use runtime caching as much as possible.
          // PENDING: also precache css & js?
          '**\/**\/{index,option,api,download}\.html',
          '**\/**\/{handbook,examples}\/**\/index\.html'
        ],
        globIgnores: [
          '**\/\.*\/**\/*',
          '**\/node_modules\/**\/*',
          '**\/examples\/**\/view\.html',
          'v4\/**\/*',
          'pwa\.js',
          'pwa-*\.js',
          'workbox-*\.js'
        ],
        // ignoreURLParametersMatching: true,
        offlineGoogleAnalytics: false,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: {
                maxEntries: 4,
                maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
              },
              fetchOptions: {
                mode: 'cors',
                credentials: 'omit'
              }
            },
          },
          {
            urlPattern: /^https:\/\/.*\.?(?:hm\.baidu|google-analytics|googletagmanager).*/i,
            handler: 'NetworkOnly'
          },
          {
            urlPattern: /^https:\/\/.*\.(?:jsdelivr|unpkg)(?:.*\/gh\/apache\/).*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'cdn-apache-assets',
              expiration: {
                // PENDING not limit our apache repositories?
                // maxEntries: 128,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
              fetchOptions: {
                mode: 'cors',
                credentials: 'omit'
              }
            },
          },
          {
            urlPattern: /^https:\/\/.*\.(?:jsdelivr|unpkg).*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-assets',
              expiration: {
                maxEntries: 128,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
              fetchOptions: {
                mode: 'cors',
                credentials: 'omit'
              }
            },
          },
          {
            urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-font-assets',
              expiration: {
                maxEntries: 8,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              }
            },
          },
          {
            urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-image-assets',
              expiration: {
                maxEntries: 128,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },
          {
            urlPattern: /\.(?:js)/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-js-assets',
              expiration: {
                maxEntries: 64,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
          {
            urlPattern: /\.(?:css|less)/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-style-assets',
              expiration: {
                maxEntries: 64,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
            },
          },
          {
            urlPattern: /.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'others',
              expiration: {
                maxEntries: 32,
                maxAgeSeconds: 24 * 60 * 60, // 24 hours
              },
              networkTimeoutSeconds: 10,
            },
          },
        ]
      }
    }),
    {
      name: 'replace-host',
      transform(code) {
        return {
          // FIXME a bit tricky
          code: code
            // inject by echarts-www
            .replace(/\/?__HOST__/g, '" + window.EC_WWW_HOST + "/')
            .replace(/__SCOPE__/g, '')
        }
      }
    }
  ],
  build: {
    lib: {
      entry: 'main.js',
      formats: ['iife'],
      name: 'PWA',
      fileName: () => 'pwa.js'
    },
    outDir: path.resolve(ROOT, '../../')
  }
})