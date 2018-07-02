# Incubator ECharts Website

## Build

1. Clone this project, alone with [echarts-www](https://github.com/ecomfe/echarts-www) and [echarts-doc](https://github.com/ecomfe/echarts-doc) under the same directory.

2. Run `gulp apache` under `echarts-www` project to generate Website files into this repo.

3. If documents are changed, run `node build.js` under `echarts-doc` and then run `gulp apache` under `echarts-www`.

4. Commit and push to `asf-site` branch.

5. Initiate a building job at [https://gitbox.apache.org/setup/resync.cgi](https://gitbox.apache.org/setup/resync.cgi) by searching `incubator-echarts-website`.

6. Wait for several minutes and Website should be generated at [https://echarts.apache.org/](https://echarts.apache.org/).
