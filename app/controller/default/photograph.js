/*
 * @Author: your name
 * @Date: 2021-03-01 22:46:08
 * @LastEditTime: 2021-03-02 20:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /20200908/app/controller/default/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('/photograph')
  }
}

module.exports = HomeController;
