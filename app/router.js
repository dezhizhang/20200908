/*
 * @Author: your name
 * @Date: 2021-03-01 22:46:08
 * @LastEditTime: 2021-03-02 20:41:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /20200908/app/router.js
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.default.home.index);
  router.get('/photograph', controller.default.photograph.index);
};
