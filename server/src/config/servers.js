module.exports = [
    // { serverType: 'thirdParty', host: process.env.SERVER_IP_THIRDPARTY, port: 1010, httpPort: 1011, httpGreenPort: 11010, rpcServer: true, rpcGreenPort: 11011 },
    // { serverType: 'dataService', host: process.env.SERVER_IP_DATASERVICE, port: 1020, httpPort: 1029, httpGreenPort: 11029, rpcServer: false },
    { serverType: 'channel', host: process.env.SERVER_IP_CHANNEL, port: 2000, httpPort: 2090, httpGreenPort: 12090, rpcServer: false }, // channel
    // { serverType: 'channelRecord', host: process.env.SERVER_IP_CHANNELRECORD, port: 2200, httpPort: 2290, httpGreenPort: 12290, rpcServer: false }, // channelRecord
    // { serverType: 'channelRecordSport', host: process.env.SERVER_IP_CHANNELRECORDSPORT, port: 2300, httpPort: 77, httpGreenPort: 177, rpcServer: false }, // channelRecordSport
    // { serverType: 'wallet', host: process.env.SERVER_IP_WALLET, port: 2100, rpcServer: true, rpcGreenPort: 12100 },
    // { serverType: 'game', host: process.env.SERVER_IP_GAME, port: 10000, rpcServer: true, rpcGreenPort: 10001 },
    // { serverType: 'manage', host: process.env.SERVER_IP_MANAGE, port: 3000, httpPort: 3000, rpcServer: false },
    // { serverType: 'platform', host: process.env.SERVER_IP_PLATFORM, port: 3050, rpcServer: true }, //后台管理接入进程
    // { serverType: 'statistics', host: process.env.SERVER_IP_STATISTICS, port: 4000, rpcServer: true }, //统计接口
    // { serverType: 'gameRecord', host: process.env.SERVER_IP_GAMERECORD, port: 5000, rpcServer: true, rpcGreenPort: 5001 }, //游戏数据保存1
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7000, rpcServer: true }, //玩家每日信息统计
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7500, rpcServer: true }, //代理统计信息
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7600, rpcServer: true }, //机器统计信息
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7700, rpcServer: true }, //百人统计信息
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7800, rpcServer: true }, //用户路径统计信息
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7900, rpcServer: true }, //房间追放监控数据记录
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7930, rpcServer: true }, //游戏活动排名100
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7940, rpcServer: true }, //代理跳线数据记录
    // { serverType: 'playerInfo', host: process.env.SERVER_IP_PLAYERINFO, port: 7950, rpcServer: true }, //玩家登入相關信息统计
    // { serverType: 'vendor/company', host: process.env.SERVER_IP_COMPANY, port: 23000, httpPort: 85, httpGreenPort: 185, rpcServer: true, rpcGreenPort: 23001 },
    // { serverType: 'vendor/kys', host: process.env.SERVER_IP_VENDOR, port: 24000, httpPort: 87, httpGreenPort: 187, rpcServer: true, rpcGreenPort: 24001 },
    // { serverType: 'vendor/xpg', host: process.env.SERVER_IP_VENDOR, port: 25000, httpPort: 86, httpGreenPort: 186, rpcServer: true, rpcGreenPort: 25001 },
    // { serverType: 'vendor/xinStars', host: process.env.SERVER_IP_XINSTARS, port: 26000, httpPort: 88, httpGreenPort: 188, rpcServer: true, rpcGreenPort: 26001 },
    // { serverType: 'vendor/kylab', host: process.env.SERVER_IP_VENDOR, port: 27000, httpPort: 89, httpGreenPort: 189, rpcServer: true, rpcGreenPort: 27001 },
    // { serverType: 'logoServer', host: '127.0.0.1', port: 8000, httpPort: 7999, rpcServer: false },
    // { serverType: 'vendor/fb', host: process.env.SERVER_IP_FB, port: 22000, httpPort: 76, httpGreenPort: 176, rpcServer: true, rpcGreenPort: 22001 }, // FB體育
    // { serverType: 'notification', host: process.env.SERVER_IP_NOTIFICATION, port: 8200, rpcServer: true, rpcGreenPort: 8201 }, //通知系统
    // { serverType: 'timerTask/vendor/kys', host: process.env.SERVER_IP_TIMERTASK_VENDOR_RECORD, port: 8300, rpcServer: true }, //定时任务
    // { serverType: 'timerTask/vendor/xpg', host: process.env.SERVER_IP_TIMERTASK_VENDOR_RECORD, port: 8400, rpcServer: true }, //定时任务
    // { serverType: 'timerTask/vendor/kyLab', host: process.env.SERVER_IP_TIMERTASK_VENDOR_RECORD, port: 8500, rpcServer: true }, //定时任务
    // { serverType: 'timerTask/vendor/fb', host: process.env.SERVER_IP_TIMERTASK_VENDOR_RECORD, port: 8600, rpcServer: false }, //定时任务    
];
