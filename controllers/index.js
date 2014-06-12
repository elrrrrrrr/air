var User = require('../proxy/user');
exports.intro = function (req,res) {
	console.log('controller get');
	//User.insert(1,user);
	User.insert(req.body,'user');
	res.header("Content-Type", "application/json; charset=utf-8");
	res.send(req.body);
}

exports.prize = function(req,res) {
	res.header("Content-Type", "application/json; charset=utf-8");
	var prize_list = [ ];
	var no_prize = {
		code: 406,
		msg: {
		message: "感谢您的关注，活动已关闭！"
		}
	};
	var prize_rank = {
		code: 200,
		msg: {
			chanceNum: 0,
			recordId: 1850413,
			prize: {
				memo: "",
				pic: "",
				prizeId: 2845,
				prizeName: "我是测试用的奖品",
				prizeType: 0,
				rank: 3
			}
		}
	};
	var no_chance = {
		code: 501,
		msg: {
		message: "对不起，您还剩余0次抽奖机会！"
		}
	}

	prize_list.push(no_prize,prize_rank,no_chance)
	res.send(prize_list[Math.floor(Math.random()*prize_list.length)]);
}

exports.account = function(req,res) {
	res.header("Content-Type", "application/json; charset=utf-8");
	var result = {
			code: 200,
			msg: {
			id: 15448257,
			email: "244883833@qq.com",
			name: "都被占用了啊",
			mobile: "13391129699"
			}
		}
	res.send(result);
}

exports.recordList = function (req,res){
	
	var result = {
code: 200,
groupId: 231,
max: 13,
msg: {
recordList: [
{
addDate: "2014-06-12 09:55",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1861374,
userFace: "http://i3.dpfile.com/pc/9b43a8f51ba401fa0ed815ae9fcde6a0(48c48)/thumb.jpg",
userId: 2492350,
userNickName: "糖盒子__行大运"
},
{
addDate: "2014-06-12 09:51",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1861303,
userFace: "http://i3.dpfile.com/u/20101128/5958683_80665_s.jpg",
userId: 5958683,
userNickName: "五月的花儿别样红"
},
{
addDate: "2014-06-12 09:33",
groupId: 231,
prizeId: 1936,
prizeName: "20只小龙虾",
recordId: 1860932,
userFace: null,
userId: 63414259,
userNickName: "dpuser_5258070007"
},
{
addDate: "2014-06-12 09:31",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1860881,
userFace: "http://i1.dpfile.com/comm/userface/5932/2725932_57723_s.jpg",
userId: 2725932,
userNickName: "李二小姐"
},
{
addDate: "2014-06-12 09:15",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1860557,
userFace: "http://i2.dpfile.com/pc/1030ea9e8407310263ea5bc3d6a67a4c(48c48)/thumb.jpg",
userId: 803778,
userNickName: "xiu570822"
},
{
addDate: "2014-06-12 09:15",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1860543,
userFace: "http://i3.dpfile.com/pc/cf288054af3f33e63991569e764c5484(48c48)/thumb.jpg",
userId: 14377164,
userNickName: "huniuniumama"
},
{
addDate: "2014-06-12 08:50",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1860097,
userFace: "http://i2.dpfile.com/pc/f95e5621fc15c025aa71fb095d2cd793(48c48)/thumb.jpg",
userId: 4524686,
userNickName: "月亮5663"
},
{
addDate: "2014-06-12 08:32",
groupId: 231,
prizeId: 1936,
prizeName: "20只小龙虾",
recordId: 1859851,
userFace: null,
userId: 45447012,
userNickName: "桃子麻麻8010"
},
{
addDate: "2014-06-12 08:26",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1859773,
userFace: "http://i3.dpfile.com/pc/dedf6483a8480d297563c80902cc521b(48c48)/thumb.jpg",
userId: 4018086,
userNickName: "璐珠菁盈"
},
{
addDate: "2014-06-12 08:16",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1859684,
userFace: null,
userId: 49200154,
userNickName: "周周112132"
},
{
addDate: "2014-06-12 06:59",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1859419,
userFace: null,
userId: 45446373,
userNickName: "th1333"
},
{
addDate: "2014-06-12 05:51",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1859338,
userFace: "http://i2.dpfile.com/comm/userface/8804/1438804_67472_s.jpg",
userId: 1438804,
userNickName: "heriver"
},
{
addDate: "2014-06-12 00:31",
groupId: 231,
prizeId: 1937,
prizeName: "10只小龙虾",
recordId: 1858928,
userFace: "http://i3.dpfile.com/pc/ab4bea374a494d50cf71d4a2f14ae72a(48c48)/thumb.jpg",
userId: 2920692,
userNickName: "蛋奶星星茶"
}
]
}
};
	res.header("Content-Type", "application/json; charset=utf-8");
	res.send(result)
}