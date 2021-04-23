// jsdelivr CDN may have possibility that having 403 links. This scripts check if any resource is 403 and use purge API to update it.

const pathTool = require('path');
const globby = require('globby');
const {runTasks} = require('./task');
const fetch = require('node-fetch').default;

const rootDir = pathTool.resolve(__dirname, '../');

function getCdnUrl(fileUrl) {
    return `https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/${fileUrl}`;
}

function getPurgeUrl(fileUrl) {
    return `https://purge.jsdelivr.net/gh/apache/echarts-website@asf-site/${fileUrl}`;
}
// Only reject when url is 403. Don't check if url is 404 or other status
function checkIsUrl403(url) {
    return fetch(encodeURI(url), {
        method: 'HEAD'
    }).then(response => {
        console.log('Check', url, response.status);
        if (response.status === 403) {
            throw '403 URL';
        }
    });
}

function purgeUrl(url) {
    return fetch(encodeURI(url)).then(response => response.json())
        .then(json => {
            if (json.success) {
                console.log('Purge Success', url);
            }
            else {
                console.error('Purge Fail', url);
            }
        });
}

async function find403Urls(files) {
    const totalLen = files.length;
    let finished = 0;
    return (await runTasks(files, async (filePath) => {
        let is403 = false;
        try {
            await checkIsUrl403(getCdnUrl(filePath));
        }
        catch {
            is403 = true;
        }
        finished++;
        console.log(`${finished} / ${totalLen} (${(finished / totalLen * 100).toFixed(0)}%)`);

        return is403 ? filePath : '';
    }, 10)).filter(a => !!a);
}

async function run() {
    const files = await globby([
        'zh/**/*',
        'examples/**/*',
        '!examples/en/**/*',    // Not check english content because they don't use jsdelivr
        '!zh/**/*.html',
        '!examples/**/*.html',

        // It's won't be uploaded to github
        '!examples/data/option',
        '!examples/data-gl/option'
    ], {
        cwd: rootDir
    });

    const files403 = await find403Urls(files);
    let successPurged = 0;
    if (files403.length) {
        console.log(`Purging ${files403.length} 403 URLs`);

        const totalLen = files403.length;
        let finished = 0;
        await runTasks(files403, async(filePath) => {
            try {
                await purgeUrl(getPurgeUrl(filePath));
                successPurged++;
            }
            catch (e) {
                console.log('Purge Error', filePath);
                console.log(e);
            }
            finished++;
            console.log(`${finished} / ${totalLen} (${(finished / totalLen * 100).toFixed(0)}%)`)
        }, 10);
    }
    console.log('Finished');
    console.log(`Found ${files403.length} in ${files.length} is 403`);
    console.log(`Successed purged ${successPurged}`);
}

run();