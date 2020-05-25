# Incubator ECharts Website


## Setup

Clone this project, alone with [echarts](https://github.com/apache/incubator-echarts), [echarts-www](https://github.com/ecomfe/echarts-www), [echarts-examples](https://github.com/ecomfe/echarts-examples), [echarts-doc](https://github.com/ecomfe/echarts-doc) under the same directory.


## Debug Locally

Edit `echarts-www/config/env.debug.js` and `echarts-examples/config/env.debug.js`.
Change `host` to be the path to local debug server and examples.

For example, if you use [http-server](https://www.npmjs.com/package/http-server) to start a server `http://127.0.0.1:8080` under `incubator-echarts-website` directory, `host` in the two projects should be `http://127.0.0.1:8080` and `http://127.0.0.1:8080/examples` accordingly.

1. Run `gulp release --dev` under `echarts-examples`.

2. Run `sh release.sh` under `echarts-doc`.

3. Run `gulp release --dev` under `echarts-www`.

4. Run a server under `incubator-echarts-website` directory and test.


## Build Release

Execute the following (optional) steps sequentially.


### Prepare

```shell
export ECHARTS_BASE="/your/local/base/dir/path/of/these/projects"
```



### If the built-in echarts dist needs to be updated

**Prepare echarts source code**
```shell
cd ${ECHARTS_BASE}/echarts
# Make sure in `release branch`
git checkout release
git pull
git status
# Make sure there is no modification in `src`.
```

**Copy echarts dist files and source code for `custom builder`:**
```shell
# Copy dist files:
cp -r ${ECHARTS_BASE}/echarts/dist/* ${ECHARTS_BASE}/echarts-www/dist
ls -alF ${ECHARTS_BASE}/echarts-www/dist
# Copy source code:
rm -r ${ECHARTS_BASE}/echarts-www/builder/src/echarts
rm -r ${ECHARTS_BASE}/echarts-www/builder/src/zrender
cp -r ${ECHARTS_BASE}/echarts/src ${ECHARTS_BASE}/echarts-www/builder/src/echarts
cp -r ${ECHARTS_BASE}/zrender/src ${ECHARTS_BASE}/echarts-www/builder/src/zrender
cat ${ECHARTS_BASE}/echarts-www/builder/src/echarts/echarts.js | grep version
cat ${ECHARTS_BASE}/echarts-www/builder/src/zrender/zrender.js | grep version
${ECHARTS_BASE}/echarts-www/builder/pre/removeDEV.js # remove __DEV__
```

### If the release download list needs to be updated

```shell
code ${ECHARTS_BASE}/echarts-www/js/download.js
# Add the new release to the download list manually.
code ${ECHARTS_BASE}/echarts-www/bin/build.js
# Set the `downloadVersion` to the newest version.
```


### If `echarts-examples` needs to be updated

**If the built-in echarts needs to be updated**
```shell
cd ${ECHARTS_BASE}/echarts-examples
sh update-echarts.sh --only-copy-dist
```

**If any of the thumbnails need to be updated**
```shell
# Edit `BASE_PATH` in `build-example.js` firstly.
code ${ECHARTS_BASE}/echarts-examples/tool/build-example.js
# Generate thumbnails:
cd ${ECHARTS_BASE}/echarts-examples/tool
node build-example.js
# If intending only make thumbnail for "public/data/foo.js" and "public/data/bar.js",
# node build-example.js --pattern "foo,bar"
```


### If `incubator-echarts-website` needs to be built and published

**Build `echarts-www`**
```shell
sh ${ECHARTS_BASE}/echarts-www/bin/release.sh --env asf
# sh ${ECHARTS_BASE}/echarts-www/bin/release.sh --env echartsjs
```

**Clear**
```shell
rm -r ${ECHARTS_BASE}/echarts-www/release
rm ${ECHARTS_BASE}/echarts-www/echarts-www.zip
```

Then commit and push to `asf-site` branch.

Then initiate a building job at [https://gitbox.apache.org/setup/resync.cgi](https://gitbox.apache.org/setup/resync.cgi) by searching `incubator-echarts-website`.

Then wait for several minutes and Website should be generated at [https://echarts.apache.org/](https://echarts.apache.org/).

