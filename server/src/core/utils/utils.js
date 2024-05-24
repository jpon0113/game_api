
const logger = require('api_utils/logger').logger;

const log = function (message) {
    if (useConsoleLog) {
        logger.info(message);
    }
};

const utils = {    
    log,   
};

module.exports = utils;
