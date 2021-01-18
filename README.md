# Apache ECharts Website


## Setup

Clone this project, alone with [echarts](https://github.com/apache/echarts), [echarts-www](https://github.com/apache/echarts-www), [echarts-examples](https://github.com/apache/echarts-examples), [echarts-doc](https://github.com/apache/echarts-doc) under the same directory.


## Debug Locally

Edit `echarts-www/config/env.debug.js` and `echarts-examples/config/env.debug.js`.
Change `host` to be the path to local debug server and examples.

For example, if you use [http-server](https://www.npmjs.com/package/http-server) to start a server `http://127.0.0.1:8080` under `echarts-website` directory, `host` in the two projects should be `http://127.0.0.1:8080` and `http://127.0.0.1:8080/examples` accordingly.

1. Run `gulp release --dev` under `echarts-examples`.

2. Run `sh release.sh` under `echarts-doc`.

3. Run `gulp release --dev` under `echarts-www`.

4. Run a server under `echarts-website` directory and test.


## Build Release

Check the "echarts release guide" please.
