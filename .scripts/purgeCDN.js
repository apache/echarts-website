// TODO no permission to run non-verified action

const {runTasks} = require('./task');
const fetch = require('node-fetch').default;
const argv = require('minimist')(process.argv.slice(2));

const files = typeof argv.files === 'string' && argv.files.split(',');

if (!files || !files.length) {
    return console.log('No files to be purged');
}

function getCdnUrl(fileUrl) {
    return `https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/${fileUrl}`;
}

function getPurgeUrl(fileUrl) {
    return `https://purge.jsdelivr.net/gh/apache/echarts-website@asf-site/${fileUrl}`;
}

function purge(url) {
    return fetch(encodeURI(url))
        .then(res => res.json())
        .then(res => {
            if (res.status === 'finished') {
                console.log('Purged', url);
            }
            else {
                console.error('failed to purge', url, res);
            }
        });
}

async function run() {
    console.log(`Purging ${files.length} changed files...`);

    const totalLen = files.length;
    let finished = 0;
    let purged = 0;
    await runTasks(files, async(filePath) => {
        try {
            await purge(getPurgeUrl(filePath));
            purged++;
        }
        catch (e) {
            console.error('failed to purge', filePath);
            console.error(e);
        }
        finished++;
        console.log(`${finished} / ${totalLen} (${(finished / totalLen * 100).toFixed(0)}%)`)
    }, 10);
    console.log(`Purged ${purged} successfully`);
}

run();