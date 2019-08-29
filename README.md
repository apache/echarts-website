# Incubator ECharts Website


## Setup

Clone this project, alone with [echarts](https://github.com/apache/incubator-echarts), [zrender](https://github.com/ecomfe/zrender), [echarts-www](https://github.com/ecomfe/echarts-www), [echarts-examples](https://github.com/ecomfe/echarts-examples), [echarts-doc](https://github.com/ecomfe/echarts-doc) under the same directory.


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

rm -r ${ECHARTS_BASE}/release
rm ${ECHARTS_BASE}/echarts-www.zip
```


### If the built-in echarts dist needs to be upated

**Copy echarts dist code**
```shell
cp -r ${ECHARTS_BASE}/echarts/dist/* ${ECHARTS_BASE}/echarts-www/dist
ll ${ECHARTS_BASE}/echarts-www/dist
```

**Update the source code of `custom builder`:**
```shell
rm -r ${ECHARTS_BASE}/echarts-www/builder/src/echarts
rm -r ${ECHARTS_BASE}/echarts-www/builder/src/zrender
cp -r ${ECHARTS_BASE}/echarts/src ${ECHARTS_BASE}/echarts-www/builder/src/echarts
cp -r ${ECHARTS_BASE}/zrender/src ${ECHARTS_BASE}/echarts-www/builder/src/zrender
cat ${ECHARTS_BASE}/echarts-www/builder/src/echarts/echarts.js | grep version
cat ${ECHARTS_BASE}/echarts-www/builder/src/zrender/zrender.js | grep version
${ECHARTS_BASE}/echarts-www/builder/pre/removeDEV.js # remove __DEV__
```

**Update the version number of echarts in `echarts-www`.**
```shell
cd ${ECHARTS_BASE}/echarts-www/
code ${ECHARTS_BASE}/echarts-www/config/common.js
# Update the version manually. Then:
./node_modules/.bin/gulp sourceVersion
cat builder/echarts.html | grep urlArgs
```

### If the release download list needs to be updated

```shell
code ${ECHARTS_BASE}/echarts-www/js/download.js
# Add the new release to the download list manually.
```


### If `echarts-examples` needs to be updated

**If any of the thumbnails need to be updated**
```shell
cd ${ECHARTS_BASE}/echarts-examples/tool
node build-example.js
```

**If the built-in echarts needs to be updated**
```shell
cd ${ECHARTS_BASE}/echarts-examples
sh update-echarts.sh
```

**Build `echarts-examples`**
```shell
sh ${ECHARTS_BASE}/echarts-examples/release.sh --env asf
# sh ${ECHARTS_BASE}/echarts-examples/release.sh --env echartsjs
```


### If the `echarts-doc` needs to be updated

First of all, ensure "echarts-doc" is on the correct git branch (`relase` branch).

```shell
sh ${ECHARTS_BASE}/echarts-doc/release.sh --env asf
# sh ${ECHARTS_BASE}/echarts-doc/release.sh --env echartsjs
ll ${ECHARTS_BASE}/echarts-www/documents/cn
ll ${ECHARTS_BASE}/echarts-www/documents/en
ll ${ECHARTS_BASE}/echarts-www/documents/asset/
```


### If `incubator-echarts-website` needs to be built and published

```shell
sh ${ECHARTS_BASE}/echarts-www/release.sh --env asf
# sh ${ECHARTS_BASE}/echarts-www/release.sh --env echartsjs
```

Then commit and push to `asf-site` branch.

Then initiate a building job at [https://gitbox.apache.org/setup/resync.cgi](https://gitbox.apache.org/setup/resync.cgi) by searching `incubator-echarts-website`.

Then wait for several minutes and Website should be generated at [https://echarts.apache.org/](https://echarts.apache.org/).
