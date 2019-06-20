'use strict';

const Controller = require('egg').Controller;

class RankingController extends Controller {
	
  async SingerInformation() { //全国榜
    const { ctx } = this;
    const SingerInformation = [
		{id:'1',picture:'https://aliimg.changba.com/cache/photo/851045194_200_200.jpg',explain:'只因你伤心',singer:'浪子心声✎﹏ King', styles:"gray"},
		{id:'2',picture:'https://aliimg.changba.com/cache/photo/884320847_200_200.jpg',explain:'入心的人【女版】',singer:'心灵守望',styles:"blue"},
		{id:'3',picture:'https://aliimg.changba.com/cache/photo/879789489_200_200.jpg',explain:'爱如星火【冷漠制作】',singer:'成功',styles:"green"},
		{id:'4',picture:'https://aliimg.changba.com/cache/photo/885107599_200_200.jpg',explain:'独角戏',singer:'乖雪'},
		{id:'5',picture:'https://aliimg.changba.com/cache/photo/597064371_200_200.jpg',explain:'像鱼',singer:' 丽人 '},
		{id:'6',picture:'https://aliimg.changba.com/cache/photo/807066780_200_200.jpg',explain:'那个女孩【晓宇H】',singer:'唐芯芯.'},
		
		{id:'7',picture:'https://aliimg.changba.com/cache/photo/851045194_200_200.jpg',explain:'站着等你三千年',singer:'SHT一上海滩'},
		
		{id:'8',picture:' https://aliimg.changba.com/cache/photo/883145371_200_200.jpg',explain:'万爱千恩',singer:'江南木歌居家美装'},
		{id:'9',picture:' https://aliimg.changba.com/cache/photo/838625903_200_200.jpg',explain:'祝福',singer:'林子不玩币'},
		{id:'10',picture:' https://aliimg.changba.com/cache/photo/877279639_200_200.jpg',explain:'女人的一生【纯为娱乐制作】',singer:'G262gHul'},
		{id:'11',picture:' https://aliimg.changba.com/cache/photo/868972255_200_200.jpg',explain:'飘摇',singer:' ❥✾͡ೄ紫韵ℒøṽℯ离殇ζั͡❦'},
		{id:'12',picture:' https://aliimg.changba.com/cache/photo/856640263_200_200.jpg',explain:'无缘的牵挂【單身的演歌提供】',singer:'Kris 无魂@'},
		{id:'13',picture:' https://aliimg.changba.com/cache/photo/878632279_200_200.jpg',explain:'爱情临时工(DJ何鹏 Remix)',singer:'爰听歌'},
		{id:'14',picture:'https://aliimg.changba.com/cache/photo/803837726_200_200.jpg',explain:'草原夜色美',singer:'꧁จุ๊บ※云儿※จุ๊บ꧂'},
		{id:'15',picture:'https://aliimg.changba.com/cache/photo/847848819_200_200.jpg',explain:'丢了我你会不会心痛',singer:'淑伊伊'}
		];
		ctx.body = SingerInformation;
  }

}
 
module.exports = RankingController ;