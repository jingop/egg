'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {  
  const { router, controller,axiospractice } = app;
//精彩表演
	// 精彩表演——编辑推荐
	router.get('/Bhigh', controller.boy.Bhigh); //精彩表演——编辑推荐———优质MV+动听单曲+精彩合唱
	router.get('/Rightuser', controller.boy.Rightuser); //精彩表演——编辑推荐———实力歌手
	router.get('/Hotgame', controller.boy.Hotgame); //精彩表演——编辑推荐———热门比赛

	//精彩表演——全国榜
	router.get('/SingerInformation', controller.ranking.SingerInformation);
	
	//精彩表演———— 歌单
	router.get('/QsongSheet', controller.home.QsongSheet); 
	
	//精彩表演——明星专区
	router.get('/logList', controller.jinguo.logList);  //精彩表演——明星专区——轮播图
	router.get('/QTopNews', controller.jinguo.QTopNews);  //精彩表演——明星专区————Top news
	router.get('/QStar', controller.jinguo.QStar);  //精彩表演———明星专区————明星
	router.get('/QStarWorks', controller.jinguo.QStarWorks);  //精彩表演——明星专区————明星作品
	router.get('/QEntryInstitution', controller.jinguo.QEntryInstitution);//精彩表演——明星专区————入驻机构
	router.get('/QCooperativePartner', controller.jinguo.QCooperativePartner); //精彩表演——明星专区———合作伙伴
	
	//精彩表演——附近作品
	router.get('/Nearbys', controller.nearby.Nearbys); //精彩表演——附近作品——附近内容
	router.get('/Singersinthevicinity', controller.nearby.Singersinthevicinity); //精彩表演——附近作品——附近歌手


	
	
	
	
	//会员中心
	router.get('/ZMemberExchange', controller.member.ZMemberExchange); //会员中心
	router.get('/ShowPrivileges', controller.member.ShowPrivileges); //会员中心————会员展示特权
	
	
	
	router.get('/', controller.homes.index);
	router.get('/Jsl_Responsibilities1', controller.homes.Jsl_Responsibilities1);// 跟home.js里面的async的名字一样
	router.get('/Jsl_Responsibilities2', controller.homes.Jsl_Responsibilities2);
	router.get('/Jsl_Responsibilities3', controller.homes.Jsl_Responsibilities3);
	router.get('/Jsl_Responsibilities4', controller.homes.Jsl_Responsibilities4);
	router.get('/Jsl_Responsibilities5', controller.homes.Jsl_Responsibilities5);
	router.get('/Jsl_Responsibilities6', controller.homes.Jsl_Responsibilities6);
	router.get('/SheZhao_logo', controller.homes.SheZhao_logo);
	router.get('/SocialRecruitment_logo', controller.homes.SocialRecruitment_logo);
	router.get('/Layout_item', controller.homes.Layout_item);
	
	  // 校招 -> 市场类 
	router.get('/Xz_ShiChangLei', controller.homes.Xz_ShiChangLei);
	router.get('/Yxl_MarketingCategory1', controller.homes.Yxl_MarketingCategory1);
	router.get('/Yxl_MarketingCategory2', controller.homes.Yxl_MarketingCategory2);
	router.get('/Yxl_MarketingCategory3', controller.homes.Yxl_MarketingCategory3);
	// 社招 -> 技术类
	router.get('/SzScl_NewMediaOperations1', controller.homes.SzScl_NewMediaOperations1);
	
	// 练习axios 
	router.get('/Ljg', controller.ctice.Ljg);
	router.get('/Tbb', controller.boy.Tbb);

};