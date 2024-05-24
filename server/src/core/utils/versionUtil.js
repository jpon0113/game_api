const { execSync } = require('child_process');
const { log } = require('api_utils/utils');

module.exports = {
    getVersion: function () {
        const data = {};
        try {
            data.service = process.env.name;
            const version = execSync('git rev-parse --short HEAD').toString().trim();
            let tag;
            try {
                tag = execSync('git describe --tags --exact-match');
                tag = tag.toString().trim();
            } catch (e) {
                if (e.message.indexOf('no tag exactly matches')) {
                    tag = null;
                }
            }
            data.gitInfo = JSON.stringify({
                version,
                tag
            });
        } catch (error) {
            log('getVersion util: ' + error);
        } 
        return data;
    }
};