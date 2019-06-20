'use strict';

const Controller = require('egg').Controller;

class MemberController extends Controller {
	
  async ZMemberExchange() { //会员中心
    const { ctx } = this;
    const ZMemberExchange = [
			{picture:'http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/change.jpg?ver=1.0.0',explain:'会员兑换中心',pictures:'http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/arrow.png',explains:'众多好礼可用积分兑换'},
			{picture:'http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/gift.jpg?ver=1.0.1',explain:'会员专属礼物',explains:'一样的价格更强大的效果'},
			{picture:'http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/background.jpg?ver=1.0.1',explain:'个性化个人主页背景',explains:'随心所欲更换自己喜爱的背景'},
			{picture:'http://cb.cdn.changbaimg.com/images/officialwebsite/membercenter/whocomes.jpg?ver=1.0.1',explain:'最近来访',explains:'谁在默默关注你？'}
		];
		ctx.body = ZMemberExchange;
  }
  async ShowPrivileges() { //会员中心————会员展示特权
    const { ctx } = this;
		const ShowPrivileges = [
			{
				h: '会员展示特权',
				c: [
					{
		
						explain: '会员个性装扮',
						explains: '会员可使用专属的头像和卡片装扮，聊天气泡及聊天表情，彰显您的个性魅力'
					},
					{
						explain: '作品播放特效',
						explains: '与众不同的播放特效，让你的粉丝赞叹不已'
					},
					{
						explain: '主页背景更换',
						explains: '随心所欲更换自己喜爱的背景，彰显你的个性'
					}
				]
			},{
				h: '会员消费特权',
				c: [{
		
						explain: '上榜记录留存',
						explains: '会员可以展示作品上榜记录，彰显你的歌唱实力'
					},
					{
						explain: '导出上传作品',
						explains: '会员可每天免费导出3首作品'
					},
					{
						explain: '主页置顶作品',
						explains: '将你的主打歌在你的个人主页上置顶吧'
					}
				]
			},{
				h: '会员消费特权',
				c: [{
					explain: '会员专属礼物',
					explains:'专门为会员倾心打造的精美礼物，一样的价格，更强大的效果'
				},
				{
					explain: '人气兑换礼品',
					explains: '众多好礼均可用积分兑换'
					
				},
				{
					explain: '礼物购买折扣',
					explains: '会员在购买唱吧的大部分礼物时均可享受相应的折扣，会员等级越高折扣越多'
				}
				]
			},{
				h: '更多特权',
				c: [{
					explain:'每日鲜花数量上升',
					explains:'会员每天可送出的免费鲜花最高可提升为9朵，会员等级越高数量越高'
				},
				{
					explain:'拥有电脑版个人主页',
					explains:'会员专享电脑版个人主页,粉丝可由此访问您的作品哦'
				},
				{
					explain:'查看更多来访歌友',
					explains:'开通会员就能查看最近一个月的访客记录'
				},
				{
					explain:'收藏歌曲离线播放',
					explains:'收藏的歌曲自动离线，没有网络的时候也可以播放'
				},
				{
					explain:'在线KTV鲜花加速',
					explains:'会员送花间隔加速10秒，缩短为20秒，传情达意快人一步'
				},
				{
					explain:'建群数量上升',
					explains:'会员可创建2个群，每个等级的人数上限是普通群的2倍；优先审核，VIP3及以上可马上建群'
				},
				{
					explain:'加群数量上升',
					explains:'你有太多兴趣爱好，4个群不够你展现才情和个性！会员可以加入10个群'
				}
				]
			},{
				h: '等级特权一览',
				a: [{
					explain:''
				},
				{
					explain:'非会员'
				},
				{
					explain:'VIP1'
				},
				{
					explain:'VIP2'
				},
				{
					explain:'VIP3'
				},
				{
					explain:'VIP4'
				},
				{
					explain:'VIP5'
				},
				{
					explain:'VIP6'
				},
				{
					explain:'VIP7'
				}
				],
				p:[{
					explain:'所需成长点'
				},
				{
					explain:'-'
				},
				{
					explain:'0'
				},
				{
					explain:'600'
				},
				{
					explain:'1800'
				},
				{
					explain:'3600'
				},
				{
					explain:'6000'
				},
				{
					explain:'10800'
				},
				{
					explain:'23600'
				}
				],
				o:[{
					explain:'可加入群组数量'
				},
				{
					explain:'4'
				},
				{
					explain:'10'
				},
				{
					explain:'10'
				},
				{
					explain:'10'
				},
				{
					explain:'10'
				},
				{
					explain:'10'
				},
				{
					explain:'10'
				},
				{
					explain:'10'
				}
				],
				i:[{
					explain:'可创建群组数量'
				},
				{
					explain:'1'
				},
				{
					explain:'2'
				},
				{
					explain:'2'
				},
				{
					explain:'2(无需审批)'
				},
				{
					explain:'2(无需审批)'
				},
				{
					explain:'2(无需审批)'
				},
				{
					explain:'2(无需审批)'
				},
				{
					explain:'2(无需审批)'
				}
				],
				u:[{
					explain:'每日免费鲜花数量'
				},
				{
					explain:'3'
				},
				{
					explain:'6'
				},
				{
					explain:'6'
				},
				{
					explain:'7'
				},
				{
					explain:'7'
				},
				{
					explain:'8'
				},
				{
					explain:'8'
				},
				{
					explain:'9'
				}
				],
				y:[{
					explain:'礼物购买折扣'
				},
				{
					explain:'无'
				},
				{
					explain:'9.5折'
				},
				{
					explain:'9折'
				},
				{
					explain:'8.5折'
				},
				{
					explain:'8.5折'
				},
				{
					explain:'8折'
				},
				{
					explain:'8折'
				},
				{
					explain:'7折'
				}
				],
				t:[{
					explain:'每天免费导出次数'
				},
				{
					explain:'0'
				},
				{
					explain:'3次'
				},
				{
					explain:'3次'
				},
				{
					explain:'3次'
				},
				{
					explain:'3次'
				},
				{
					explain:'3次'
				},
				{
					explain:'3次'
				},
				{
					explain:'3次'
				}
				],
				r:[{
					explain:'1. 会员每天打开唱吧并登录一次即可获得12个成长点，之后逐步累加提升vip等级'
				},
				{
					explain:'2. 如果会员到期了，则每天会自动减5个成长点，直至降为0，续费的时候按照你剩余的成长点重新开始成长'
				},
				{
					explain:'3. 会员购买大部分礼物均有折扣，但是某些礼物会在使用前说明无法享受折扣'
				},
				{
					explain:'4. 如果之前已经是会员，又开通了更高等级的会员，那么最终会员等级为两次开通中的较高的那个等级。注意：会员时长会累加，会员等级不会累加。'
				}
				]
			},
			
		]
   //  const ShowPrivileges = [
			// {explain:'会员个性装扮',explains:'会员可使用专属的头像和卡片装扮，聊天气泡及聊天表情，彰显您的个性魅力'},
			// {explain:'作品播放特效',explains:'与众不同的播放特效，让你的粉丝赞叹不已'},
			// {explain:'主页背景更换',explains:'随心所欲更换自己喜爱的背景，彰显你的个性'},
  	// 	];	
  		ctx.body = ShowPrivileges;
  }

}
 
module.exports = MemberController ;













