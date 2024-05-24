const path = require('path');
const winston = require('winston');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, json, printf, colorize, errors } = format;
const logFolderPath = process.env.logFolderPath;
const env = process.env.NODE_ENV || 'dev';
const brand = process.env.BRAND_TYPE ? process.env.BRAND_TYPE.toLowerCase() : '';
const team = 'a';
const app_instance = process.env.NODE_APP_INSTANCE;

const levels = {
    error: 0,
    info: 1,
    http: 2,
    warn: 3,
    debug: 4
};

const colors = {
    error: 'red',
    info: 'green',
    http: 'magenta',
    warn: 'yellow',
    debug: 'cyan'
};

winston.addColors(colors);

const level = () => {
    const isDevelopment = env === 'dev';
    return isDevelopment ? 'debug' : 'warn';
};

const logFormat = printf(({ level, message, ...metadata }) => {
    return `${level}: ${typeof message === 'object' && message !== null ? JSON.stringify(message, null, 4) : message} ` + `${metadata.stack ? JSON.stringify(metadata, null, 4) : ''}`;
});

const logger = (() => {
    const service = process.env.name;
    const logsFolder = path.resolve(__dirname, logFolderPath);

    return createLogger({
        level: level(),
        levels,
        defaultMeta: {
            team, env, brand, service, app_instance
        },
        format: combine(
            timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            json(),
            errors({ stack: true })
        ),
        // 設定此 logger 的日誌輸出器
        transports: [
            new transports.Console({
                level: level(),
                format: combine(colorize(), logFormat)
            }),
            new transports.DailyRotateFile({
                filename: `${logsFolder}/%DATE%/${service}-out.log`,
                json: true,
                datePattern: 'YYYYMMDD'
            }),
            new transports.DailyRotateFile({
                level: 'error',
                filename: `${logsFolder}/%DATE%/${service}-err.log`,
                datePattern: 'YYYYMMDD',
                zippedArchive: true,
            })
        ]
    });
})();

module.exports.logger = logger;