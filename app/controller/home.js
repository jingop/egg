'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	
  async QsongSheet() { //歌单
    const { ctx } = this;
    const QsongSheet = [
			{picture:'http://aliimg.changba.com/changba_com/958904af28e72e0d200ba294633347d2.jpg',explain:'迟来▪初雪',amount:'1234'},
			{picture:'http://aliimg.changba.com/changba_com/c635a4e4bf0973d45408e2d6f9341a0a.jpg',explain:'唱吧音乐人原创歌单',amount:'1315074'},
			{picture:'http://aliimg.changba.com/changba_com/158745e92a6492ea18dbf54a18386893.jpg',explain:'多想回到最初，与你相遇的时光',amount:'1311925'},
			{picture:'http://aliimg.changba.com/changba_com/185398de886415b818108c2fd0624c93.jpg',explain:'一首歌，就是一句情话',amount:'1308230'},
			{picture:'http://aliimg.changba.com/changba_com/9d92e4c03187934235572b67424fb072.jpg',explain:'怪你过分美丽',amount:'1338338'},
			{picture:'http://aliimg.changba.com/changba_com/48afcd49b4cbb50ecfd722f91c5fd5bd.jpg',explain:'口袋里的单曲循环',amount:'1319070'},
			{picture:'http://aliimg.changba.com/changba_com/901bacf093d9dddababa8331eb0a275f.jpg',explain:'他们唱的比说更好听！',amount:'1296875'},
			{picture:'http://aliimg.changba.com/changba_com/ba322aad088b239479e163d7d8313c6b.jpg',explain:'暖暖民谣',amount:'1294594'},
			{picture:'http://aliimg.changba.com/changba_com/32bce44b1f4dfaafcf176988d83656c9.jpg',explain:'这些歌曲热得发烫！',amount:'1313698'},
			{picture:'http://aliimg.changba.com/changba_com/77ac4c3dad5ef5617e3d0fe0e9951378.jpg',explain:'这些歌治愈了我',amount:'1340540'},
			{picture:'http://aliimg.changba.com/changba_com/318769d9c3a599caf74a397b623293d1.jpg',explain:'周二歌单',amount:'1283993'},
			{picture:'http://aliimg.changba.com/changba_com/9a272af62363346d7a72b887eabd2d55.jpg',explain:'歌里的风花雪月',amount:'1295070'},
		];
		ctx.body = QsongSheet;
  }

}
 
module.exports = HomeController;
