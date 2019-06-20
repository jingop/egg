'use strict';

const Controller = require('egg').Controller;

class NearbyController extends Controller {
	
  async Nearbys() { //附近作品--左模块--附近内容
    const { ctx } = this;
    const Nearbys = [
			{picture:'http://aliimg.changba.com/cache/photo/885294621_200_200.jpg',explain:'后来',distance:'400米以内',authors:'王者'},
			{picture:'http://aliimg.changba.com/cache/photo/839015018_200_200.jpg',explain:'爱如潮水',distance:'1公里以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885296732_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885303123_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/872016049_200_200.jpg',explain:'爱上你是一个错【DJ版】',distance:'1公里以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/884883457_200_200.jpg',explain:'不了情',distance:'600米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/882338338_200_200.jpg',explain:'天天都想见到你',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885302699_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885297010_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/881207229_200_200.jpg',explain:'Danger【原唱】',distance:'1公里以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885302006_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885301244_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885297246_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/885303591_200_200.jpg',explain:'后来',distance:'400米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/883855609_200_200.jpg',explain:'去年夏天',distance:'700米以内',authors:''},
			{picture:'http://aliimg.changba.com/cache/photo/754290480_200_200.jpg',explain:'胡广生【电影《无名之辈》宣传推广曲】',distance:'800米以内',authors:''},
		];
		ctx.body = Nearbys;
  }
  async Singersinthevicinity() { //附近作品--右模块--附近歌手
    const { ctx } = this;
    const Singersinthevicinity = [
		{picture:'https://cb.cdn.changbaimg.com/images/now/show/photo-default.png',authors:'',time:'',distance:'',styles:'right-tubiao-girl'},
  			{picture:'https://aliimg.changba.com/cache/photo/724108674_200_200.jpg',authors:'缑昭懿',time:'1分钟前',distance:'1m',styles:'right-tubiao-boy'},
			{picture:'http://img.changba.com/cache/photo/4/4_200_200.jpg',authors:'118165',time:'1分钟前',distance:'17m',styles:'right-tubiao-boy'},
			{picture:'http://img.changba.com/cache/photo/4/4_200_200.jpg',authors:'',time:'1分钟前',distance:'17m',styles:'right-tubiao-girl'},
			{picture:'http://img.changba.com/cache/photo/4/4_200_200.jpg',authors:'',time:'1分钟前',distance:'17m',styles:'right-tubiao-girl'},
			{picture:'https://aliimg.changba.com/cache/photo/795145469_200_200.jpg',authors:'宁宝宝（纯属娱乐）',time:'1分钟前',distance:'26m',styles:'right-tubiao-boy'},
			{picture:'https://aliimg.changba.com/cache/photo/672744686_200_200.jpg',authors:'GCH-KAKA',time:'1分钟前',distance:'29m',styles:'right-tubiao-boy'},
			{picture:'https://aliimg.changba.com/cache/photo/842914614_200_200.jpg',authors:'肝儿颤',time:'17分钟前',distance:'34m',styles:'right-tubiao-boy'},
			{picture:'http://img.changba.com/cache/photo/4/4_200_200.jpg',authors:'极地',time:'1分钟前',distance:'43m',styles:'right-tubiao-boy'},
			{picture:'http://img.changba.com/cache/photo/4/4_200_200.jpg',authors:'fcc1116',time:'1分钟前',distance:'52m',styles:'right-tubiao-girl'},
  		];
  		ctx.body = Singersinthevicinity;
  }

}
 
module.exports = NearbyController ;