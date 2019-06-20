'use strict';

const Controller = require('egg').Controller;

class jingguoController extends Controller {
	async logList() { //轮播图
	  const { ctx } = this;
	  const logList= [  
			{today:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1518082579.jpg'},
			{today:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1517475806.jpg'},
			{today:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1515056473.jpg'} 
	  ]
	  ctx.body = logList;
	}
	async QTopNews() { //Top news
	  const { ctx } = this;
	  const QTopNews= [  
			{picture:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1556018025.jpg',explain:'05超女合体《向往的生活》，前方高能回忆杀！'},
			{picture:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1556078576.jpg',explain:'【爱乐之城】我是重庆崽儿'},
			{picture:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1555905119.jpg',explain:'【遇见原创】和有趣的灵感不期而遇'},
			{picture:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1556113045.jpg',explain:'“大碗宽面”你看这个面它又长又宽'},
			{picture:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1555675155.jpg',explain:'论偶像的47种“凉”法'},
			{picture:'http://aliimg.changba.com/cache/photo/clienticon/publicaccount~1555585071.jpg',explain:'一周热榜Vol.8'},
	  ]
	  ctx.body = QTopNews;
	}
	async QStar() { //明星
		  const { ctx } = this;
		  const QStar = [  
				{picture:'http://aliimg.changba.com/cache/photo/486450345_200_200.jpg',explain:'_胖胖胖_',information:'歌手'},
				{picture:'http://aliimg.changba.com/cache/photo/747793557_200_200.jpg',explain:'张旸---妖哥快跑💨',information:'第四季《中国好声音》学员 张旸'},
				{picture:'http://aliimg.changba.com/cache/photo/846190135_200_200.jpg',explain:'许多葵',information:'歌手'},
				{picture:'http://aliimg.changba.com/cache/photo/194891340_200_200.jpg',explain:'金城太太之吕小一',information:'著名演员,吕一'},
				{picture:'http://aliimg.changba.com/cache/photo/864836889_200_200.jpg',explain:'2013快乐男声全国十强 张阳阳',information:'2013快乐男声全国十强 张阳阳'}, 
		  ]
		  ctx.body = QStar;
		
		}
	async QStarWorks() { //明星作品
	  const { ctx } = this;
	  const QStarWorks= [  
					  {picture:'http://aliimg.changba.com/cache/photo/59676505_200_200.jpg',explain:'白天不懂夜的黑',explains:'李小萌ANNABEL',amount:'1200'},
			{picture:'http://aliimg.changba.com/cache/photo/723420192_200_200.jpg',explain:'雨蝶',explains:'張艺骞',amount:'500'},
			{picture:'http://aliimg.changba.com/cache/photo/4417e359-7afa-4e7c-bfdf-39c1562aeeaf_200_200.jpg',explain:'李白',explains:'娱乐调频郝帅',amount:'105'},
			{picture:'http://aliimg.changba.com/cache/photo/91404493-84bc-41aa-9dbf-0a869091e80c_200_200.jpg',explain:'春风十里',explains:'周鱼儿和声',amount:'780'},
			{picture:'http://aliimg.changba.com/cache/photo/387476061_200_200.jpg',explain:'All Of Me',explains:'郑虹Hong',amount:'1120'},
			{picture:'http://aliimg.changba.com/cache/photo/4543981f-1139-49a4-8cf7-0974435b44b9_200_200.jpg',explain:'年少有为【高清 立明】',explains:'Tony黄智毅',amount:'2130'},
			{picture:'http://aliimg.changba.com/cache/photo/774c7771-2c7e-4c37-8230-5fcff3733a91_200_200.jpg',explain:'圣诞结',explains:'茸茸仔',amount:'3456'},
			{picture:'http://aliimg.changba.com/cache/photo/194891340_200_200.jpg',explain:'消失',explains:'金城太太之吕小一',amount:'2334'},
			{picture:'http://aliimg.changba.com/cache/photo/672851130_200_200.jpg',explain:'红豆',explains:'茸茸仔',amount:'123'},
			{picture:'http://aliimg.changba.com/cache/photo/624b1cc5-783c-44e0-93a1-b4c242dfddbe_200_200.jpg',explain:'往后余生【樂大神制作】',explains:'Real韩火火',amount:'550'},
			{picture:'http://aliimg.changba.com/cache/photo/624b1cc5-783c-44e0-93a1-b4c242dfddbe_200_200.jpg',explain:'失落沙洲',explains:'林爽Sara',amount:'1234'},
			{picture:'http://aliimg.changba.com/cache/photo/82868217_200_200.jpg',explain:'萧敬腾 - 如果没有你 - 原版伴奏',explains:'梁振伦',amount:'6543'},
			{picture:'http://aliimg.changba.com/cache/photo/732624703_200_200.jpg',explain:'一次就好【女版升调 7】',explains:'就是南宝宝',amount:'654'},
			{picture:'http://aliimg.changba.com/cache/photo/139963070_200_200.jpg',explain:'在一起小龙',explains:'CCTV小龙',amount:'876'},
			{picture:'http://aliimg.changba.com/cache/photo/3332b486-7089-45f1-b99b-cc5461dc2ae1_200_200.jpg',explain:'庞龙-极光 MV',explains:'庞龙\浙音',amount:'764'},
			{picture:'http://qiniuuwmp3.changba.com/670722095_thumb.jpg',explain:'If You',explains:'張瀚文Epic 魔哥',amount:'2345'},
			{picture:'http://aliimg.changba.com/cache/photo/45784294-2c57-47a1-b200-7ea900ba719c_200_200.jpg',explain:'卡路里',explains:'娱乐调频郝帅',amount:'1235'},
			{picture:'http://aliimg.changba.com/cache/photo/194891340_200_200.jpg',explain:'单人房双人床',explains:'金城太太之吕小一',amount:'2343'},
			{picture:'http://aliimg.changba.com/cache/photo/269f5a17-feff-4a18-8288-0ec0b7c74700_200_200.jpg',explain:'屋顶',explains:'Real高虎',amount:'56454'},
			{picture:'http://aliimg.changba.com/cache/photo/629572094_200_200.jpg',explain:'灰姑娘',explains:'刘振宇-',amount:'7654'},
	  ]
	  ctx.body = QStarWorks;
	}
	async QEntryInstitution() { //入驻机构
	  const { ctx } = this;
	  const QEntryInstitution = [  
			{picture:'http://aliimg.changba.com/cache/photo/793246852_200_200.jpg',explain:'极创引力'},
			{picture:'http://aliimg.changba.com/cache/photo/793562942_200_200.jpg',explain:'黄钧泽音乐工作室'},
			{picture:'http://aliimg.changba.com/cache/photo/793114311_200_200.jpg',explain:'众乐纪科夫'},
			{picture:'http://img.changba.com/cache/photo/4/4_200_200.jpg',explain:'雪漫舍'},
			{picture:'http://aliimg.changba.com/cache/photo/793331765_200_200.jpg',explain:'北京麦爱文化传播有限公司'},
	  ]
	  ctx.body = QEntryInstitution;
	}
	async QCooperativePartner() { //合作伙伴
	  const { ctx } = this;
	  const QCooperativePartner = [  
			{picture:'http://cb.cdn.changbaimg.com/assets/images/web/stars/company/weibo.jpeg?v=a987372a04',information:'新浪微博'},
			{picture:'http://cb.cdn.changbaimg.com/assets/images/web/stars/company/tencent.jpeg?v=deead7f9f4',information:'腾讯视频'},
			{picture:'http://cb.cdn.changbaimg.com/assets/images/web/stars/company/iqiyi.jpeg?v=968bf7b012',information:'爱奇艺'},
			{picture:'http://cb.cdn.changbaimg.com/assets/images/web/stars/company/youku.jpeg?v=07b8078037',information:'优酷'},
			{picture:'http://cb.cdn.changbaimg.com/assets/images/web/stars/company/moji.jpeg?v=98edbd9f6d',information:'墨迹天气'},
			{picture:'http://cb.cdn.changbaimg.com/assets/images/web/stars/company/tieba.jpeg?v=bbeb5e5937',information:'百度贴吧'}
	  ]
	  ctx.body = QCooperativePartner;
	}
	
}

module.exports = jingguoController;