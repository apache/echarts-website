# Incubator ECharts Website

## Setup

Clone this project, alone with [echarts-www](https://github.com/ecomfe/echarts-www), [echarts-examples](https://github.com/ecomfe/echarts-examples), and [echarts-doc](https://github.com/ecomfe/echarts-doc) under the same directory.

## Build

### Config

Set `echarts-www/config/env.js` and `echarts-examples/config/env.js`. Change `debugHost` to be the path to local debug server and examples.

For example, if you use [http-server](https://www.npmjs.com/package/http-server) to start a server `http://127.0.0.1:8080` under `incubator-echarts-website` directory, `debugHost` in the two projects should be `http://127.0.0.1:8080` and `http://127.0.0.1:8080/examples` accordingly.

### Debug Locally

1. Run `gulp release --debug` under `echarts-examples`.

2. Run `sh release.sh` under `echarts-doc`.

3. Run `gulp release --debug` under `echarts-www`.

4. Run a server under `incubator-echarts-website` directory and test.

### Build Release

1. Run `gulp release` under `echarts-examples`.

2. Run `sh release.sh` under `echarts-doc`.

3. Run `gulp release` under `echarts-www`.

4. Commit and push to `asf-site` branch.

5. Initiate a building job at [https://gitbox.apache.org/setup/resync.cgi](https://gitbox.apache.org/setup/resync.cgi) by searching `incubator-echarts-website`.

6. Wait for several minutes and Website should be generated at [https://echarts.apache.org/](https://echarts.apache.org/).
