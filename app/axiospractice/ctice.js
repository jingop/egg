'use strict';

const Controller = require('egg').Controller;

class ActiController extends Controller {
	
  async Ljg() { //歌单
    const { ctx } = this;
    const Ljg = [
			{picture:'https://aliimg.changba.com/cache/photo/873497012_200_200.jpg',explain:'《余味》'},
			{picture:'https://aliimg.changba.com/cache/photo/820966363_200_200.jpg',explain:'Angel Said'},
		];
		ctx.body = Ljg;
  }

}
 
module.exports = ActiController ;