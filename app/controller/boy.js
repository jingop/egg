'use strict';

const Controller = require('egg').Controller;

class BoyController extends Controller {
	
	async Bhigh() { //精彩表演——编辑推荐———优质MV
    const { ctx } = this;
    const Bhigh = [
		{
			Titles: '优质MV',
			content:[
				{picture:'https://aliimg.changba.com/cache/photo/873497012_200_200.jpg',explain:'《余味》',information:'《余味》',explains:'',amount:'64527',ys:'VIP1',bian:'dahuangguang'},
				{picture:'https://aliimg.changba.com/cache/photo/820966363_200_200.jpg',explain:'Angel Said',information:'Angel Said',explains:'',amount:'13502',ys:'VIP1',bian:'lanzuanshi'},
				{picture:'https://aliimg.changba.com/cache/photo/853152490_200_200.jpg',explain:'像鱼',information:'像鱼',explains:'',amount:'12527',ys:'VIP1',bian:'xiaohuangguan'},
				{picture:'https://aliimg.changba.com/cache/photo/884843256_200_200.jpg',explain:'不负时光',information:'不负时光',explains:'',amount:'47748',bian:'xiaohuangguan'}
			]
		},
		{
			Titles: '动听单曲',
			content:[
				{picture:'https://aliimg.changba.com/cache/photo/838881757_200_200.jpg',explain:'九万字',information:'九万字',explains:'',amount:'24446',ys:'VIP1',bian:'lanzuanshi'},
				{picture:'https://aliimg.changba.com/cache/photo/830709473_200_200.jpg',explain:'爱殇',information:'爱殇',explains:'',amount:'20880',bian:'lanzuanshi'},
				{picture:'https://aliimg.changba.com/cache/photo/880566000_200_200.jpg',explain:'Again',information:'Again',explains:'',amount:'12345',bian:'lanzuanshi'},
				{picture:'https://aliimg.changba.com/cache/photo/883938491_200_200.jpg',explain:'静悄悄',information:'静悄悄',explains:'',amount:'1748',bian:'lanzuanshi'}
			]
		},
		{
			Titles: '精彩合唱',
			content:[
				{picture:'https://aliimg.changba.com/cache/photo/875016243_200_200.jpg',explain:'月光',information:'月光',explains:'',amount:'3422',bian:'lanzuanshi'},
				{picture:'https://aliimg.changba.com/cache/photo/773541653_200_200.jpg',explain:'离人',information:'离人',explains:'',amount:'2044',bian:'xingxing'},
				{picture:'https://aliimg.changba.com/cache/photo/848357978_200_200.jpg',explain:'Femme Fatale Nico karaoke',information:'Femme Fatale Nico karaoke',explains:'',amount:'2345',bian:'xingxing'},
				{picture:'https://aliimg.changba.com/cache/photo/866840958_200_200.jpg',explain:'星期三或礼拜三',information:'星期三或礼拜三',explains:'',amount:'17748',bian:'lanzuanshi'}
			]
		}
		
	];
		ctx.body = Bhigh;
  }
	async Tbb() { //周期考试 机试练习
	  const { ctx } = this;
	  const Tbb = [
			{picture:'https://gw.alicdn.com/i2/TB1y05BU7voK1RjSZFwXXciCFXa_.jpg_160x160Q30s100.jpg',explain:'一条狗的使命2',explain1:'淘票票评分 8.9',explain2:'导演：盖尔·曼库索',explain3:'主演：丹尼斯·奎德',explain4:'购票',explain5:'特惠'},
		{picture:'https://gw.alicdn.com/i1/TB1fypRUBLoK1RjSZFuXXXn0XXa_.jpg_160x160Q30s100.jpg',explain:'大侦探皮卡丘',explain1:'淘票票评分 8.5',explain2:'导演：罗伯·莱特曼  ',explain3:'主演：丹尼斯·奎德'},
		{picture:'https://gw.alicdn.com/i4/TB1.8Ebg8LoK1RjSZFuXXXn0XXa_.jpg_160x160Q30s100.jpg',explain:'阿拉丁',explain1:'11.0万 人想看本周五上映',explain2:'导演：盖·里奇',explain3:'主演：梅纳·玛索德'},
		];
		ctx.body = Tbb;
	}
	async Rightuser() { //精彩表演——编辑推荐———实力歌手
	  const { ctx } = this;
	  const Rightuser = [
			{picture:'https://aliimg.changba.com/cache/photo/486450345_200_200.jpg',explain:'',userID:'1743829',styles:'right-tubiao-boy',styles1:'VIP2'},
			{picture:'https://aliimg.changba.com/cache/photo/880486490_200_200.jpg',explain:'',userID:'12316',styles:'right-tubiao-girl'},
			{picture:'https://aliimg.changba.com/cache/photo/884581310_200_200.jpg',explain:'',userID:'10280',styles:'right-tubiao-girl'},
			{picture:'https://aliimg.changba.com/cache/photo/847480887_200_200.jpg',explain:'',userID:'10280',styles:'right-tubiao-boy'},
			{picture:'https://aliimg.changba.com/cache/photo/847480887_200_200.jpg',explain:'',userID:'21467',styles:'right-tubiao-girl'},
			{picture:'https://aliimg.changba.com/cache/photo/684688487_200_200.jpg',explain:'',userID:'1097689',styles:'right-tubiao-girl'},
			{picture:'https://aliimg.changba.com/cache/photo/824504505_200_200.jpg',explain:'',userID:'14390',styles:'right-tubiao-boy'},
			{picture:'https://aliimg.changba.com/cache/photo/862136239_200_200.jpg',explain:'',userID:'10986',styles:'right-tubiao-girl'},
			{picture:'https://aliimg.changba.com/cache/photo/881694353_200_200.jpg',explain:'',userID:'440121',styles:'right-tubiao-boy',styles1:'VIP1'}
		];
		ctx.body = Rightuser;
	}
	async Hotgame() { //精彩表演——编辑推荐———热门比赛
	  const { ctx } = this;
	  const Hotgame = [
		{picture:'http://aliimg.changba.com/competition/3bbc50f52099880fcaeba2bdba7fa799.jpg',titles:'唱吧麦克风&坚果手机'},
		{picture:'http://aliimg.changba.com/competition/23891548920180702004755.png',titles:'孝親獎詞曲創作大賽（有獎人氣排行活動）'},
		{picture:'http://aliimg.changba.com/competition/9778073cb4526d9c45af148830aa49db.jpg',titles:'这个浪漫季·邀TA唱游全新世界'},
		{picture:'http://aliimg.changba.com/competition/12986230320180605061959.png',titles:'送给父亲的歌'},
		{picture:'http://aliimg.changba.com/competition/',titles:'反差萌（*/∇＼*）'},
		{picture:'http://aliimg.changba.com/competition/',titles:'元元比赛场'},
		];
		ctx.body = Hotgame;
	}
}
 
module.exports = BoyController ;


