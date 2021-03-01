/*
 * @Author: your name
 * @Date: 2021-03-01 22:46:08
 * @LastEditTime: 2021-03-01 22:51:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /20200908/app/controller/default/home.js
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await this.ctx.render('/index')
  }
}

module.exports = HomeController;
