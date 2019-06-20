/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  let config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554276507924_8772';

  // add your middleware config here
  config.middleware = [];

  // add your config here

// config.middleware = [];
//多出来的配置========== 设置开启跨域 
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['http://localhost:8080']
};
config.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
