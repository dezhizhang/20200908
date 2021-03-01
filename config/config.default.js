/*
 * @Author: your name
 * @Date: 2021-03-01 22:46:08
 * @LastEditTime: 2021-03-01 22:55:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /20200908/config/config.default.js
 */
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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599563893369_2666';

  // add your middleware config here
  config.middleware = [];
  
  //配置模板
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  };

  config.cluster = {
    listen: {
      path: '',
      port: 8094,
      hostname: '0.0.0.0',
    }
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
