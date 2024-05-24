const dotenv = require('dotenv');
dotenv.config();
// 引入 server 配置文件
const servers = require('api_config/servers'); 
// 引入工具函數
const utils = require('api_utils/utils'); 
// 解析命令行參數
const [, , serverId] = process.argv; 
// 取藍綠設定
const BG_RUNTIME = require('api_config/bgDeploy').BG_RUNTIME;
const rpcPortKey = BG_RUNTIME === 'blue' ? 'port' : 'rpcGreenPort';
const httpPortKey = BG_RUNTIME === 'blue' ? 'httpPort' : 'httpGreenPort';
// 過濾出 RPC 服務器
const rpcServerConfigs = servers.filter((server) => server.rpcServer == true).map(s=>({...s, port: s[rpcPortKey] || s['port']})); 
//引入版本號工具
const versionUtil = require('api_utils/versionUtil');
// redis
const redisDao = require('api_dao/redisDao');