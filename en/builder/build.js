/* global BUILD_CONFIG, UglifyJS */
define(function (require) {

    var saveAs = require('./lib/FileSaver');
    var rollup = require('rollup');
    var transformDev = require('transformDev');

    var TOP_MODULE_NAME = 'topModuleInRequireES';
    var RETRY_MAX = 2;
    var TIMEOUT = 10000;
    var RETRY_DELAY = 2000;

    var $log = document.getElementById('log');
    var $tip = document.getElementById('tip');

    var version = BUILD_CONFIG.version + '';
    var isVersion5 = version.startsWith('5');
    var jsDelivrBase = 'https://fastly.jsdelivr.net/npm';

    var urlArgs = '__v__=' + (+new Date());

    var topCode = [`export * from "echarts/src/echarts";`];
    var srcFolder = version.startsWith('5.0.0') ? 'esm' // Only 5.0.0 has esm folder
        : isVersion5 || version === 'latest' ? 'lib' : 'src';

    if (BUILD_CONFIG.api && (version.startsWith('5.0.0') || !isVersion5)) {
        topCode.push(`export * from "echarts/src/export";`);
    }

    // Including charts
    var charts = (BUILD_CONFIG.charts || '').split(',');
    charts.forEach(function (chart) {
        chart && topCode.push(`import "echarts/src/chart/${chart}";`);
    });

    if (topCode.indexOf(`echarts/src/chart/scatter`) >= 0) {
        topCode.push(`import "echarts/src/chart/effectScatter"`);
    }

    // Including components
    var components = (BUILD_CONFIG.components || '').split(',');
    // PENDING: always import dataset & transform component as they have no entry for now
    components.push('dataset');
    isVersion5 && components.push('transform');
    components.forEach(function (component) {
        component && topCode.push(`import "echarts/src/component/${component}";`);
    });

    if (BUILD_CONFIG.vml && !isVersion5) {
        topCode.push(`import "zrender/${srcFolder}/vml/vml";`);
    }
    if (BUILD_CONFIG.svg) {
        topCode.push(`import "zrender/${srcFolder}/svg/svg";`);
    }

    // Always require log and time axis
    topCode.push(
        `import "echarts/src/scale/Time";`,
        `import "echarts/src/scale/Log";`
    );

    var npmEntries = {};
    var pathsConfig = {
        'echarts/src': `/echarts@${version}/${srcFolder}`
    };

    function resolveNpmDependencies(pkg, version) {
        return fetch(`${jsDelivrBase}/${pkg}@${version}/package.json`, { mode: 'cors' })
            .then(response => response.json())
            .then(pkgCfg => {
                var entry = pkgCfg.module || pkgCfg.main || 'index.js';
                if (!entry.endsWith('.js')) {
                    entry = entry + '.js';
                }
                npmEntries[pkg] = `/${pkg}@${version}/${entry}`;

                var promises = [];
                for (let pkgName in pkgCfg.dependencies) {
                    var depVersion = pkgCfg.dependencies[pkgName];
                    pathsConfig[pkgName] = `/${pkgName}@${depVersion}`;
                    promises.push(resolveNpmDependencies(pkgName, depVersion));
                }
                return Promise.all(promises);
            });
    }

    resolveNpmDependencies('echarts', version)
        .then(startRollup)
    // Loading scripts and build

    function startRollup() {
        var moduleLoadErr;
        var moduleLoadTimers = [];
        rollup.rollup({
            input: TOP_MODULE_NAME,
            // legacy: true,
            plugins: [{
                resolveId: function (importee, importor) {
                    if (importee === TOP_MODULE_NAME) {
                        return importee;
                    }
                    // console.log('resolveid', importee, importor);
                    return getAbsolutePath(
                        importee,
                        importor !== TOP_MODULE_NAME ? importor : null
                    );
                },
                transform: function (code) {
                    return {
                        code: code.replace(/process.env.NODE_ENV/g, JSON.stringify(
                            !BUILD_CONFIG.source ? 'production' : 'development'
                        ))
                    };
                },
                load: function (path) {
                    if (moduleLoadErr) {
                        return;
                    }

                    if (path === TOP_MODULE_NAME) {
                        return topCode.join('\n');
                    }

                    // PENDING: fetch minified file to speed up downloading if no source required
                    if (!BUILD_CONFIG.source) {
                        path = path.replace('.js', '.min.js');
                    }

                    var retryCount = 0;
                    return new Promise(function (resolve, reject) {
                        var err;
                        function retryableLoad() {
                            // When using apache CDN, might fail to loading source.
                            if (retryCount >= RETRY_MAX) {
                                var msg = 'Failed to load module: "' + path + '"!'
                                    + ' Please reload the page to retry.';
                                err.customMessage = msg;
                                moduleLoadErr = err;
                                moduleLoadTimers.forEach(clearTimeout);
                                moduleLoadTimers.length = 0;
                                return reject(err);
                            }
                            fetchModuleContent(`${jsDelivrBase}/${path}`)
                                .then(function (content) {
                                    builderLog('Loaded module: "' + path + '"');
                                    err = null;
                                    resolve(content);
                                })
                                .catch(function (e) {
                                    retryCount++;
                                    err = e;
                                    moduleLoadTimers.push(setTimeout(retryableLoad, RETRY_DELAY));
                                });
                        }
                        retryableLoad();
                    });
                }
            }]
        }).then(function (bundle) {
            builderLog('Bundling code...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    bundle.generate({
                        name: 'echarts',
                        format: 'umd',
                        // legacy: true
                    })
                    .then((result) => {
                        var code = result.output[0].code;
                        code = transformDev.transform(code, false, !BUILD_CONFIG.source ? 'false' : 'true').code;
                        builderLog('Bundle code: Done.', 'success');
                        resolve(code);
                    })
                    .catch(reject);
                }, 0);
            });
        }).then(function (code) {
            if (BUILD_CONFIG.source) {
                return onDone();
            }
            builderLog('Compressing code...');
            setTimeout(() => {
                try {
                    code = jsCompress(code);
                    setTimeout(() => {
                        builderLog('Compress code: Done.', 'success');
                        onDone();
                    }, 0);
                } catch (e) {
                    e.customMessage = 'Failed to compress code: ' + e.message;
                    throw e;
                }
            }, 0);

            function onDone() {
                download(code);
                setTimeout(() => {
                    builderLog('✔️ All Done!', 'success');
                    $tip.innerHTML = 'OK';
                }, 0);
            }
        }).catch(function (err) {
            builderLog(err.customMessage || ('Failed to build code: ' + err.message), 'error');
            $tip.innerHTML = 'Error';
            console.error(err);
        });
    }

    function download(code) {
        const contentType = 'text/javascript;charset=utf-8';
        try {
            var blob = new Blob([code], {
                type: contentType
            });

            var fileName = ['echarts'];
            if (!BUILD_CONFIG.source) {
                fileName.push('min');
            }
            fileName.push('js');

            saveAs(blob, fileName.join('.'));
        }
        catch (e) {
            console.error(e);
            window.open('data:' + contentType +',' + encodeURIComponent(code));
        }
    }

    function builderLog(msg, type) {
        requestAnimationFrame(() => {
            var logLine = document.createElement('div');
            logLine.innerHTML = '[' + new Date().toLocaleTimeString() + '] '
                + (type ? ('<strong style="color:' + (type === 'success' ? 'green' : 'red') + '">' + msg + '</strong>') : msg);
            $log.appendChild(logLine);
            $log.scrollTop = $log.scrollHeight;
        });
    }

    function jsCompress(source) {
        var result = UglifyJS.minify(source);
        if (result.error) {
            throw new Error(result.error)
        }
        return result.code;
    }

    // Get absolute path. `basePath` can be omitted if moduleId is absolute.
    function getAbsolutePath(moduleId, basePath) {
        if (npmEntries[moduleId]) {
            return npmEntries[moduleId];
        }

        moduleId = addExt(moduleId);

        for (var path in pathsConfig) {
            if (pathsConfig.hasOwnProperty(path)) {
                if (moduleId.indexOf(path) === 0) {
                    return moduleId.replace(path, pathsConfig[path]);
                }
            }
        }

        if (basePath) {
            moduleId = resolve(dir(basePath), moduleId);
        }

        if (moduleId.charAt(0) !== '/') {
            throw new Error('"' + moduleId + '" can not be found.');
        }

        return moduleId;
    }

    function addExt(moduleId) {
        if (moduleId.split('/').pop().indexOf('.') < 0) {
            moduleId += '.js';
        }
        return moduleId;
    }

    function fetchModuleContent(moduleUrl) {
        moduleUrl += '?' + urlArgs;

        var controller = new AbortController();
        var timeout = setTimeout(() => controller.abort(), TIMEOUT);

        return fetch(moduleUrl, {
            mode: 'cors',
            signal: controller.signal
        })
        .then(response => response.text())
        .finally(() => clearTimeout(timeout));
    }

    // Nodejs `path.resolve`.
    function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute;

        for (var i = arguments.length - 1; i >= 0 && !resolvedAbsolute; i--) {
            var path = arguments[i];
            if (path) {
                resolvedPath = path + '/' + resolvedPath;
                resolvedAbsolute = path[0] === '/';
            }
        }

        if (!resolvedAbsolute) {
            throw new Error('At least one absolute path should be input.');
        }

        // Normalize the path
        resolvedPath = normalizePathArray(resolvedPath.split('/'), false).join('/');

        return '/' + resolvedPath;
    }

    // resolves . and .. elements in a path array with directory names there
    // must be no slashes or device names (c:\) in the array
    // (so also no leading and trailing slashes - it does not distinguish
    // relative and absolute paths)
    function normalizePathArray(parts, allowAboveRoot) {
        var res = [];
        for (var i = 0; i < parts.length; i++) {
            var p = parts[i];

            // ignore empty parts
            if (!p || p === '.') {
                continue;
            }

            if (p === '..') {
                if (res.length && res[res.length - 1] !== '..') {
                    res.pop();
                }
                else if (allowAboveRoot) {
                    res.push('..');
                }
            } else {
                res.push(p);
            }
        }

        return res;
    }

    function dir(path) {
        if (path) {
            return path.charAt(path.length - 1) === '/' ? path : resolve(path, '..');
        }
    }

});
