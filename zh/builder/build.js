/* global BUILD_CONFIG, UglifyJS */
define(function (require) {

    // var mangleString = require('./mangleString');
    var saveAs = require('./lib/FileSaver');
    var rollup = require('rollup');
    var transformDev = require('transformDev');

    var TOP_MODULE_NAME = 'topModuleInRequireES';
    var RETRY_MAX = 2;
    var TIMEOUT = 10000;
    var RETRY_DELAY = 2000;

    var $log = document.getElementById('log');

    var version = BUILD_CONFIG.version + '';
    var isVersion5 = version.startsWith('5');
    var jsDelivrBase = 'https://cdn.jsdelivr.net/npm';

    var urlArgs = '__v__=' + (+new Date());

    var topCode = [`export * from "echarts/src/echarts";`];
    var srcFolder = version.startsWith('5.0.0') ? 'esm' // Only 5.0.0 has esm folder
        : isVersion5 ? 'lib' : 'src';

    if (BUILD_CONFIG.api) {
        topCode.push(`export * from "echarts/src/export";`);
    }

    // Including charts
    (BUILD_CONFIG.charts || '').split(',').forEach(function (chart) {
        chart && topCode.push(`import "echarts/src/chart/${chart}";`);
    });

    if (topCode.indexOf(`echarts/src/chart/scatter`) >= 0) {
        topCode.push(`import "echarts/src/chart/effectScatter"`);
    }

    // Including components
    (BUILD_CONFIG.components || '').split(',').forEach(function (component) {
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
        rollup.rollup({
            input: TOP_MODULE_NAME,
            legacy: true,
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
                    if (path === TOP_MODULE_NAME) {
                        return topCode.join('\n');
                    }

                    var retryCount = 0;
                    return new Promise(function (resolve, reject) {
                        function retryableLoad() {
                            // When using apache CDN, might fail to loading soource.
                            if (retryCount >= RETRY_MAX) {
                                var log = 'Loaded module failed: "' + path
                                    + '"<br><strong style="color:red">! Please reload page to retry. !</strong>';
                                builderLog(log);
                                return reject(log);
                            }
                            ajax(`${jsDelivrBase}/${path}`, TIMEOUT)
                                .then(function (content) {
                                    builderLog('Loaded module: "' + path + '"');
                                    resolve(content);
                                })
                                .catch(function () {
                                    retryCount++;
                                    setTimeout(retryableLoad, RETRY_DELAY);
                                });
                        }
                        retryableLoad();
                    });
                }
            }]
        }).then(function (bundle) {
            return bundle.generate({
                name: 'echarts',
                format: 'umd',
                legacy: true
            });
        }).then(function (result) {
            var code = result.code;
            code = transformDev.transform(code, false, !BUILD_CONFIG.source ? 'false' : 'true').code;

            if (!BUILD_CONFIG.source) {
                builderLog('<br />Compressing code...');
                // code = mangleString(code);
                // Otherwise uglify will throw error.
                code = code.replace(/\t/g, '    ');
                code = jsCompress(code);
            }

            download(code);

            builderLog('<br />Completed');

            document.getElementById('tip').innerHTML = 'OK';
        });
    }

    function download(code) {
        try {
            var blob = new Blob([code], {
                type: 'text/plain;charset=utf8'
            });

            // var URL = window.URL || window.webkitURL;
            // var scriptUrl = URL.createObjectURL(blob);

            // URL.revokeObjectURL(blob);

            // window.open(scriptUrl);
            // return;

            var fileName = ['echarts'];
            if (!BUILD_CONFIG.source) {
                fileName.push('min');
            }
            fileName.push('js');

            saveAs(blob, fileName.join('.'));
        }
        catch (e) {
            console.error(e);
            window.open('data:text/plain;charset=utf-8,' + encodeURIComponent(code));
        }
    }

    function builderLog(msg) {
        $log.innerHTML += msg + '<br />';
        $log.scrollTop = $log.scrollHeight;
    }

    function jsCompress(source) {
        var ast = UglifyJS.parse(source);
        /* jshint camelcase: false */
        // compressor needs figure_out_scope too
        ast.figure_out_scope();
        ast = ast.transform(UglifyJS.Compressor());

        // need to figure out scope again so mangler works optimally
        ast.figure_out_scope();
        ast.compute_char_frequency();
        ast.mangle_names();

        return ast.print_to_string();
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

    function ajax(toUrl, timeout) {
        toUrl += '?' + urlArgs;

        return fetch(toUrl, {
            mode: 'cors'
        }).then(response => response.text());
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