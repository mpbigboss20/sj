if (typeof(_pageinfo) === "undefined") {
    var _pageinfo = {}
}
var App = _pageinfo
var downUrl = $('#address').attr('href');
window.downUrl = downUrl
var isXiajia = false;
if (_pageinfo.softlicence != 'undefined' && _pageinfo.softlicence == "下架" && $("#address").attr("href") == '') {
    isXiajia = true
}

const IOSEQUIPMENT = browser.versions.ios // 是否是IOS设备

//定义rem尺寸
rem();
window.onresize = function(){
	rem();
}

function rem(){
	//长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/20 = 16px */
    var w = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize=w/7.2+'px';
    window.onresize = function(){
    //长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/20 = 16px */
    var w = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize=w/7.2+'px';
    }	
}

//增加乐乐盒子下载位
// addLldown(".g-down-attr");
function addLldown(obj){
	$(obj).after('<a href="http://tj.viphxw.com/e/7/001/121205" style="width:100%; height:1.91rem; background:url(/skin/new2017/images/llhz-down.jpg) no-repeat; background-size:7.2rem; display:block; overflow:hidden; position:relative;"><strong style="width: 4.2rem; height: auto; line-height: .38rem; font-size: .3rem; font-weight: bold; color: #f6e9c6; padding: 0 0 0 .56rem; margin: 1rem 0 0; display: block; overflow: hidden; opacity: .98;">下载'+$("h1").text()+'</strong></a>');
};
var WebApp = {
    back: function() {
        if (window.history.length > 1) {
            window.history.back()
        } else {
            window.location.href = '/'
        }
    },
    downIos: function() {
        var refDownApp = function(e) {
            if (Cookie.get("isDown") == "Yes") {
                return false
            };
            if (browser.versions.ios) {
                iosurl = "itms-services://?action=download-manifest&url=https://www.haima.me/download/000001533.plist"
                WebApp.getDownload(iosurl, e)
            }
            Cookie.set("isDown", "Yes");
            return false
        }
        setTimeout(refDownApp, 5000)
    },
    initDownload: function() {
        var iframe = '<iframe style="display:none"></iframe>',
            $wrapper = $('<div style="display:none"></div>').appendTo('body');
        var validate = function(e) {
            var $a = $(this),
                href = $a.attr('data-href'),
                timer, $f;
            var error = function() {
                new AjaxTip('抱歉，暂时无法下载');
                $f.remove();
                clearTimeout(timer)
            };
            $f = $(iframe).bind('load', error).attr('src', href).appendTo($wrapper);
            timer = setTimeout(function() {
                $f.unbind('load', error);
                if ($.hasTouch) window.location.href = href
            }, 500);
            e.preventDefault()
        }
        $('body').delegate('.down[data-href]', Event.tap, validate)
    },
    getDownload: function(href, e) {
        window.location.href = href
    }
}
var isAds = false;
var address = $('#address').attr('href');
var notSw = ["6071.com", "1030.apk", "hsxyb.com", "tj.tt1386.com", "tj.tcyl77.com", "http://g.", "http://tj.", "x1.241804.com", "moban.com", "qianghongbaoyo.com", "down1.qianghongbaoyo.com", "yiwan.com", "down2.guopan.cn", "dl.guopan.cn", "guopan.cn", "duowan.com", "ugame.uc.cn", "ugame.9game.cn", "360.cn", "ewan.cn", "anfan.com", "duokoo.baidu.com", "caohua.com", "456.com.cn", "miyugame.com", "sifuba.net", "btsysf.com", "pyw.cn", "sy217.com", "17byh.com", "xinkuai.com", "s.qq.com", "down.nntczn.com", "down.bugeyu.com", "open.play.cn", "hgame.com", "yxgames.com", "tj.viphxw.com", "tj.chenjianxiang.com"];
for (i = 0; i < notSw.length; i++) {
    if (address.indexOf(notSw[i]) > -1) {
        isAds = true
    }
}
var WebPages = {};
var ffTitle = ["红杏直播", "酸果直播", "悦橙直播", "乐秀直播", "蜜豆直播", "BlueSKY", "蜂直播", "甜心直播", "压寨直播", "蜜桃秀", "ZANK", "蜜播", "嗨约吧", "假装情侣吧", "一起秀直播", "觅蜜直播", "嗨播桃花直播", "蜜桃约默默直播", "Pinterest", "mimi视界", "馒头直播", "麻椒直播", "花花直播", "天马直播", "大树直播", "红幸直播", "红杏直播", "月舞直播", "蜜汁直播", "新秀直播", "甘露直播", "蜂直播", "亲亲直播", "万能直播盒", "鸳鸯直播", "fc2", "聚合直播", "橙直播", "天使社区", "桃花直播", "色色快憣", "夜色快播", "夜色直播", "色色快憣", "夜色快播", " 夜色快憣", "夜色播放器", "老虎直播", "老虎", "夜魅社区", "夜魅", "微笑直播", "微笑", "蜜直播", "猫咪", "炸金花", "扎金花", "易发棋牌", "大洋娱乐", "易发棋牌", "大洋娱乐", "夜律", "夜律直播", "玫瑰直播"];
var replaceCont = ["优艺直播间下载", "优艺直播间", "//m.962.net/skin/new2017/images/mgc-img4.jpg", ["//m.962.net/skin/new2017/images/mgc-img1.png", "//m.962.net/skin/new2017/images/mgc-img2.png", "//m.962.net/skin/new2017/images/mgc-img3.png"], "<h4 class=\"m-title\"><b></b>优艺直播间简介</h4><div class=\"m-cont\" style=\"height:auto\"><p>本次为大家带来<strong>优艺直播间vip破解版</strong>，软件已经破解了会员，用户可以免费使用会员，任何直播间都可以进去哦！优艺直播间是一款手机美女视频直播软件，这里有大量的美女帅哥在这里表演自己的才艺。你可以随时的与她们进行聊天互动哦！快来下载使用吧！</p></div>", "http://tj.tcyl77.com/0005/3076/1"]
var dataReplaceHtml = ["腾讯欢乐斗地主官方版下载", "腾讯欢乐斗地主官方版", "http:\/\/pic.962.net\/up\/2018-3\/2018312145196973.png", "<img src=\"http:\/\/pic.962.net\/up\/2018-3\/2018312145117108200.jpg\"><img src=\"http:\/\/pic.962.net\/up\/2018-3\/2018312145119219310.jpg\"><img src=\"http:\/\/pic.962.net\/up\/2018-3\/2018312145122320420.jpg\">", "<p>《欢乐斗地主》是腾讯移动游戏平台的首款实时对战棋牌手游，是根据扑克牌游戏“跑得快”改编而成的三人游戏。该游戏以斗地主活动为背景，通过扑克牌来决定游戏的胜负。<\/p><p>《欢乐斗地主》拥有纯正的经典玩法，等车、排队、闲暇时间太无聊？不如经典模式快速开一局！拥有经典、不洗牌、癞子、天地癞子四大玩法的经典模式为你提供最纯粹的乐趣，11年经典棋牌品牌，与8亿玩家一起《欢乐斗地主》！<\/p>", "http:\/\/tj.tcyl77.com\/0007\/5111"]
var cityArray = ["武汉"];
var cityAll = ["深圳", "上海", "武汉", "广州", "杭州"]
var urlCityAll = ["上海", "武汉", "广州"]
var urlmgCity = ["武汉", "上海", "广州", "深圳"];
var titleHtml = $("title").html();
var forNum = ffTitle.length;
if (typeof(_pageinfo) != "undefined") {
    $("body").append('<div style="display:none"><img src="//mi.962.net/icon_962_' + _pageinfo.id + '.jpg" /></div>');
    if (isXiajia) {
        $("#downAddress .m-down-ul").html('<li class="m-down-last"><a href="javascript:;" class="g-gamedown-btn down" style="background:#888" id="address">该软件己下架</a></li>')
    } else {
        cityIf()
    } 
    if (_pageinfo.path == "down") {
        $(".g-down-recomd-game ul li a strong").each(function() {
            var liText = $(this).text();
            for (i = 0; i < forNum; i++) {
                if (liText.indexOf(ffTitle[i]) != -1) {
                    $(this).parents("li").hide()
                }
            }
        });
        $(".g-rank-ul li").each(function() {
            var liText = $(this).find("a:first p strong").text();
            for (i = 0; i < forNum; i++) {
                if (liText.indexOf(ffTitle[i]) != -1) {
                    $(this).hide()
                }
            }
        })
    }
}


function cityIf() {
    $.ajax({
        async: true,
        url: "//api.map.baidu.com/location/ip?ak=rsilWF7V0HLaZHy2YKBx0bWPGyuMU3su",
        type: "get",
        dataType: "jsonp",
        jsonp: 'callback',
        jsonpCallback: 'cityfunction',
        data: {
            q: "javascript",
            count: 1
        },
        success: function(response, status, xhr) {},
        error: function(error) {
			// console.log(error)	
			/*
			if (Cookie.get("click1") != "one" && isAds == false && address.indexOf("qweqwi.com") != -1) {
				$(".m-game-down").css({"background": "#fbfbfb","color": "#888"}).text('普通下载').parent("li").css({"width":"40%"});
				$(".m-game-down").parents(".m-down-ul").append('<li class="m-down-last" style="width:60%;"><a href="http://tj.viphxw.com/31111843181/6820000" style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; text-align:center; background:#ff4000; border-radius:6px; margin:0; font-family:"microsoft yahei"; display:block; overflow:hidden;" class="f-quick-btn">高速下载</a> </li>');
				$(".m-down-ul").after('<p style=" width:auto; height:auto; margin:0 10px 0; line-height:18px; font-size:12px; font-weight:normal; color:#666; background:#eef7ff; border:1px solid #cde6ff; border-radius:5px; display:block; overflow:hidden; padding:5px 10px;box-sizing:border-box">说明：高速下载是直接下载应用市场，用户下载后可自行搜索目标软件进行更高速，更安全的下载。</p>');
				$(".f-quick-btn").click(function(){
					setCookie("click1");
				});
			}
			*/
		}
    })
}

function setCookie(click1) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = click1 + "=one;expires=" + exp.toGMTString()
}

function cityfunction(result) {
    var province = result.address.split('|')[1];
    var city = result.address.split('|')[2];
    var gsNotCity = ["北京", "上海", "广州", "深圳"];
    var sourceUrl = showAdsRef.in_mid(RefUrl);
	/*
    if (Cookie.get("click1") != "one" && $.inArray(city, gsNotCity) == -1 && isAds == false && address.indexOf("qweqwi.com") != -1) {
        $(".m-game-down").css({"background": "#fbfbfb","color": "#888"}).text('普通下载').parent("li").css({"width":"40%"});
        $(".m-game-down").parents(".m-down-ul").append('<li class="m-down-last" style="width:60%;"><a href="http://tj.viphxw.com/31111843181/6820000" style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; text-align:center; background:#ff4000; border-radius:6px; margin:0; font-family:"microsoft yahei"; display:block; overflow:hidden;" class="f-quick-btn">高速下载</a> </li>');
		$(".m-down-ul").after('<p style=" width:auto; height:auto; margin:0 10px 0; line-height:18px; font-size:12px; font-weight:normal; color:#666; background:#eef7ff; border:1px solid #cde6ff; border-radius:5px; display:block; overflow:hidden; padding:5px 10px;box-sizing:border-box">说明：高速下载是直接下载应用市场，用户下载后可自行搜索目标软件进行更高速，更安全的下载。</p>');
		$(".f-quick-btn").click(function(){
			setCookie("click1");
		});
    }
	*/
    var qpmgcUrl = ['https://ugame.9game.cn/game/downloadGame?pack.cooperateModelId=74539&pack.id=12308979']
    var bymgcUrl = ['https://ugame.9game.cn/game/downloadGame?pack.cooperateModelId=74539&pack.id=12308979']
    var isQpCity = 0;
    var qpEndFor = 0;
    var replacename = "h1,.m-cont,.m-down-ul";
    for (i = 0; i < urlmgCity.length; i++) {
        if (city.indexOf(urlmgCity[i]) != -1) {
            $("#address").each(function() {
                var downLink = $(this).attr("href");
                for (var m = 0; m < qpmgcUrl.length; m++) {
                    if (downLink.indexOf(qpmgcUrl[m]) != -1) {
                        replaceCont(replacename);
                        hideDiv("#g-down-previmg,.g-project,.g-related-recomd,.g-related-rank,.g-game-img,.g-backlist,.g-guess-like");
                        $(".g-introduction .m-title").html("<i></i>简介");
						isQpCity++;
                        qpEndFor++
                        break
                    } else if (downLink.indexOf(bymgcUrl[m]) != -1) {
                        replaceCont(replacename);
                        hideDiv("#g-down-previmg,.g-project,.g-related-recomd,.g-related-rank,.g-game-img,.g-backlist,.g-guess-like");
                        $(".g-introduction .m-title").html("<i></i>简介");
						isQpCity++;
                        qpEndFor++
                        break
                    }
                }
            })
        }
        if (qpEndFor > 0) {
            break
        }
    };
    if (isQpCity == 0) {
        $("#address").each(function() {
            var downLink = $(this).attr("href");
            for (var m = 0; m < qpmgcUrl.length; m++) {
                if (downLink.indexOf(qpmgcUrl[m]) != -1) {
                    $(this).attr("href", "javascript:;").text("暂无下载").css({
                        "background": "#a0a0a0"
                    })
                } else if (downLink.indexOf(bymgcUrl[m]) != -1) {
                    $(this).attr("href", "javascript:;").text("暂无下载").css({
                        "background": "#a0a0a0"
                    })
                }
            }
        })
    }
    if (city == "北京" || city == "上海" || city == "武汉" || city == "广州") {
        isXiajia = true;
        var softrank = _pageinfo.softrank;
        if (softrank == "1") {
            replaceCont(replacename);
            hideDiv("#g-down-previmg,.g-project,.g-related-recomd,.g-related-rank,.g-game-img,.g-backlist,.g-guess-like");
            $(".g-introduction .m-title").html("<i></i>简介")
        }
    }
    var caipiaoCity = ['武汉', '上海', '深圳', '广州', '厦门', '北京'];
    var caipiaoMgc = ['彩票', '时时彩', '福彩', '体彩', '双色球', '购彩', '足彩', '六合彩'];
    for (i = 0; i < caipiaoCity.length; i++) {
        if (city == caipiaoCity[i]) {
            if (_pageinfo.categroyId == 154 || _pageinfo.categroyId == 155) {
                qpHtml()
            } else {
                for (s = 0; s < caipiaoMgc.length; s++) {
                    var contHtml = $(".g-game-information").text().replace(/\s+/g, '');
                    if (contHtml.indexOf(caipiaoMgc[s]) != -1) {
                        qpHtml();
						return false
                    }
                }
            }
        }
    }

    function qpHtml() {
        var hideBox = '.g-alllike,.g-project,.g-related-recomd,.g-related-rank,.g-guess-like,.g-related-cms,.g-cont-btn';
        mgcBoxHide(hideBox);
        var noDownBtnHtml = '<b style="width: 100%; height: 32px; line-height:32px; background:#a0a0a0; border-radius:6px; font-size:16px; font-weight:normal; color:#fff; text-align:center; margin: 10px 0 0; display: block;  overflow:hidden; cursor:pointer">该应用已下架</b>';
        var replaceDiv = ['.m-down-last'];
        var replaceHtml = [noDownBtnHtml];
        mgcBoxHtml(replaceDiv, replaceHtml)
    }
    if ($.inArray(city, cityAll) != -1) {
        var openMgc = 0;
        var jumpUrl = "";
        var htmlTitle = $("title").text().toLowerCase();
        var mgcAll = [
            [
                ["穿越火线", "枪战王者", "cf"],
                ["辅助", "外挂", "钻石", "金币", "破解", "修改", "刷枪", "透视", "作弊", "点券", "礼包", "美化", "自瞄", "准心", "助手", "无敌"],
                ["王者荣耀安卓版下载|王者荣耀官方版下载_乐游网手机下载站", "http://pic1.962.net/962/mb/up/2017-6/201761794124465_120_120.png", "王者荣耀", "http://tj.tcyl77.com/0008/1306", "官方版", "安卓角色扮演", "605.02M", "中文", "2017-03-16", "http://962.net/skin/xsh/images/k-xx4.png", "http://pvp.qq.com/", "<img src='http://pic.962.net/up/2017-12/201712712331320420.jpg'>,<img src='http://pic.962.net/up/2017-12/201712712334653750.jpg'>,<img src='http://pic.962.net/up/2017-12/201712712332108200.jpg'>,<img src='http://pic.962.net/up/2017-12/201712712333875970.jpg'>", "<p><span style='line-height: 12px;'>王者荣耀官方版</span>是一款大型对战MOBA手游，5V5经典地图，各种角色让你选择，法师，战士，奶妈，玩法多样，还有语音聊天模式，边打游戏边语音，玩法多样，还有3V3，1V1模式，快点叫上你的好友一起来游戏吧！</p><h3>【游戏介绍】</h3><p>《王者荣耀》是全球首款5V5英雄公平对战手游，腾讯最新MOBA手游大作! 作为一款MOBA类游戏，《王者荣耀》特色多多，在同类的游戏中可谓是一枝独秀，艳压全场。</p><p>5V5王者峡谷、5V5深渊大乱斗、以及3V3、1V1等多样模式一键体验，海量英雄随心选择，精妙配合默契作战!热血竞技尽享快感!海量英雄随心选择，精妙配合默契作战!10秒实时跨区匹配，与好友组队登顶最强王者!操作简单易上手，一血、五杀、超神，极致还原经典体验!</p><h3>【游戏特色】</h3><p>特色一：5v5!越塔强杀!超神!</p><p>5V5经典地图，三路推塔，呈现最原汁原味的对战体验。英雄策略搭配，组建最强阵容，默契配合极限666!</p><p>特色二：深渊大乱斗!随机英雄一路团战!</p><p>5V5大乱斗，即刻激情团战!随机盲选英雄，全团杀中路，冲突一触即发!一条路，全神装，血战到底!</p><p>特色三：随时开团!10分钟爽一把!</p><p>最适合手机的moba游戏，10分钟享受极致竞技体验。打野迂回，手脑配合，一战到底!人多，速来!</p>"]
            ],
            [
                ["荒野行动", "终结者", "终结者2"],
                ["辅助", "外挂", "吸", "钻石", "金币", "破解", "修改", "点券", "礼包", "美化", "助手", "瞄准", "作弊", "倍功", "透视", "隐身", "加速", "助手", "自瞄"],
                ["荒野行动安卓版下载|荒野行动网易版下载_乐游网手机下载站", "http://pic1.962.net/962/mb/up/2017-11/20171120957312714_120_120.png", "荒野行动手游", "http://tj.tcyl77.com/0008/4917", "官网版", "动作射击", "417M", "中文", "2017-11-27", "http://962.net/skin/xsh/images/k-xx4.png", "http://hy.163.com/", "<img src='http://pic.962.net/up/2017-12/2017127124924229310.jpg'>,<img src='http://pic.962.net/up/2017-12/2017127124921764860.jpg'>,<img src='http://pic.962.net/up/2017-12/2017127124923219310.jpg'>,<img src='http://pic.962.net/up/2017-12/2017127124922542640.jpg'>", "<p><strong>《荒野行动》</strong>是网易推出一款吃鸡射击游戏，可同时容纳高达100人进行同台竞技，真正实现了3D无缝连接，跋涉山峦旷野，探索城镇村郊。组队开黑，战术配合花样迭出；枪械种类自由搭配，更有多种配件强力升级；针对手机端精心设计多种操作模式，提供非常不错的射击体验。</p><h3>【游戏介绍】</h3><p>《网易荒野行动手游》是一款好玩的3D实时射击竞技手游。游戏采用了非常火爆的大逃杀玩法，支持100人作战的无缝大地图。在游戏中，玩家可以拾取武器和道具，消灭所有的对手取得胜利。游戏操作模式多样，运行流畅，喜欢吃鸡的玩家赶紧下载游戏，和好友一起欢乐开黑吧！真正做到了容纳100人开局对战。超大地图超远视距，手机端精心设计多种操作模式，带给玩家畅快舒适的竞技体验！3D无缝大世界，真正容纳100人开局对决！跋涉山峦旷野，探索城镇村郊，处处战场，时刻杀机！组队开黑，战术配合花样迭出；枪械种类丰富，自由搭配，更有多种配件强力升级；针对手机端精心设计多种操作模式，提供极致射击体验。子弹所及，胜者唯一，生死对决，无限可能！</p><h3>【经验分享】</h3><p>1、双人的落地点我主要还是推荐大房子群或者中等房子群(八栋楼以上)，四排需要大量的资源来养活一个队，所以需要向资源丰富的地方跳伞。</p><p>2、落地先进房拿枪，不要对拳。</p>"]
            ],
        ];
        var m = 0;
        var mgcAllSize = mgcAll.length;
        for (i = 0; i < mgcAllSize; i++) {
            var mgcBigSize = mgcAll[i].length;
            for (n = 0; n < mgcBigSize - 1; n++) {
                var mgcEngSize = mgcAll[i][n].length;
                for (s = 0; s < mgcEngSize; s++) {
                    var name = mgcAll[i][n][s];
                    if (htmlTitle.indexOf(name) != -1) {
                        m++;
                        break
                    }
                }
            }
            if (m < 2) {
                m = 0
            } else {
                $("title").text(mgcAll[i][2][0]);
                $(".g-backlist strong").text(mgcAll[i][2][2]);
                $(".g-game-img img").attr("src", mgcAll[i][2][1]);
                $(".g-game-data").html('<h1>' + mgcAll[i][2][2] + '</h1><em>大小：<span class="f-game-size">' + mgcAll[i][2][6] + '</span></em><em>语言：<span>' + mgcAll[i][2][7] + '</span></em><em>系统：<span>Android, 网游</span></em><em>版本：<span>' + mgcAll[i][2][4] + '</span></em>');
                $(".m-down-ul li").each(function() {
                    $(this).find("a").css({
                        "background": "rgb(167, 167, 167)"
                    }).text("该应用已下架").attr("href", "javascript:;")
                });
				var prevImg = mgcAll[i][2][11].split(',');
				var prevImgSize = prevImg.length;
                var prevImgHtml = '';
                for (s = 0; s < prevImgSize; s++) {
                    prevImgHtml += prevImg[s]
                }
                $("#g-down-previmg").html(prevImgHtml);
                $(".m-cont").html(mgcAll[i][2][12]);
                break
            }
        }
    }
    if ($.inArray(city, urlCityAll) != -1) {
        var dzMgcUrlArray = ["http://tj.tcyl77.com/0007/4219", "http://tj.tcyl77.com/0007/4184", "http://tj.tcyl77.com/0007/4493", "http://tj.tcyl77.com/0007/4207", "http://tj.tcyl77.com/0007/4392"]
        var dzMgcLink = $("#address").attr("href");
        for (var y = 0; y < dzMgcUrlArray.length; y++) {
            if (dzMgcLink == dzMgcUrlArray[z]) {
                $('.m-down-ul').each(function() {
                    $(this).find("a").css({
                        "background": "rgb(167, 167, 167)"
                    }).text("该应用已下架").attr("href", "javascript:;")
                })
            }
        }
    }
    if ($.inArray(city, urlCityAll) != -1) {
        var qpMgcUrlArray = ["http://tj.ad677.com/0007/3", "http://tj.ad677.com/0007/4", "http://tj.ad677.com/0007/5", "http://tj.ad677.com/0007/6", "http://tj.ad677.com/0007/7", "http://tj.ad677.com/0007/20"]
        var qpMgcLink = $("#address").attr("href");
        for (var z = 0; z < qpMgcUrlArray.length; z++) {
            if (qpMgcLink == qpMgcUrlArray[z]) {
                qpMgcFunction(dataReplaceHtml)
            }
        }
    }
    for (i = 0; i < cityArray.length; i++) {
        if (city.indexOf(cityArray[i]) != -1) {
            for (o = 0; o < forNum; o++) {
                if (titleHtml.indexOf(ffTitle[o]) != -1) {
                    $("title").html(replaceCont[0]);
                    $("h1").html(replaceCont[1]);
                    $(".g-backlist strong").html(replaceCont[1]);
                    $(".g-game-img img").attr({
                        "src": replaceCont[2]
                    });
                    var previmgSize = replaceCont[3].length;
                    var previmgHtml = "";
                    for (s = 0; s < previmgSize; s++) {
                        previmgHtml += '<img src="' + replaceCont[3][s] + '" />'
                    }
                    $("#g-down-previmg").html('<ul class="g-down-ul">' + previmgHtml + '</ul>');
                    $(".g-introduction").html(replaceCont[4]);
                    $(".m-down-ul li").each(function() {
                        $(this).find("a").css({
                            "background": "rgb(167, 167, 167)"
                        }).text("该应用已下架").attr("href", "javascript:;")
                    });
					$(".g-related-recomd,.g-alllike,.g-project,.g-guess-like").remove();
                    $(".m-cont").addClass("on");
                }
            }
        }
    };

    function replaceCont(data) {
        var replaceArray = data.split(',');
        $("title").text('QQ欢乐斗地主手机客户端');
		$(replaceArray[0]).text('QQ欢乐斗地主手机客户端');
		$(replaceArray[1]).html('<p>QQ欢乐斗地主是由QQ游戏原班团队打造的Android手机平台的一款在线棋牌游戏，可以使用手机客户端直接访问QQ欢乐斗地主游戏，然后与大家一起博弈。</p><h3>【游戏特色】</h3><p><span style="color: rgb(0, 0, 0);">1、游戏的画面质感优秀；</span></p><p><span style="color: rgb(0, 0, 0);">2、游戏支持癞子玩法和其他玩法；</span></p><p><span style="color: rgb(0, 0, 0);">3、增加各种游戏任务；</span></p><p><span style="color: rgb(0, 0, 0);">4、拥有抢地主，明牌，加倍等多种玩法，更添游戏乐趣！</span></p><p><span style="color: rgb(0, 0, 0);">5、丰富的游戏配音；</span></p><h3>【操作玩法】</h3><p><span style="color: rgb(0, 102, 0);">1、登录QQ号后就可以选择不同的玩法开始游戏啦；<br/></span><span style="color: rgb(0, 102, 0);">2、游戏规则和其它斗地主游戏类似，不过游戏中加入了癞子等等特色玩法， 让游戏变的更加的有趣！</span></p><h3>【特别说明】</h3><p><span style="color: rgb(51, 51, 51);"><span style="color: rgb(204, 0, 0);">QQ官方游戏，需要欢乐豆作为货币来进行比赛，没豆子当然就玩不了啦。<br/></span></span></p>').css("height", "auto");
        $(replaceArray[2]).html('<li style="width:100%; height:32px; line-height:32px; font-size:15px; font-weight:normal; color:#fff; background:#888; text-align:center;padding:0; float:none;display:block; overflow:hidden">该资源已下架</li>')
    }

    function hideDiv(data) {
        var hideArray = data.split(',');
        for (var i = 0; i < hideArray.length; i++) {
            $(hideArray[i]).remove()
        }
    }
}
var androidHtml = '<ul class="m-hideshow-top"><li><a href="http://tj.tcyl77.com/570226851/1960004"><img src="/skin/new2016/images/androidad-1.jpg" /><p><strong>红色复仇</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/171226946/9480004"><img src="/skin/new2016/images/androidad-2.jpg" /><p><strong>屠龙战</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/406209839/1370004"><img src="/skin/new2016/images/androidad-3.jpg" /><p><strong>最佳阵容</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/841057445/4090004"><img src="/skin/new2016/images/androidad-4.jpg" /><p><strong>决战沙城</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/996088762/6170004"><img src="/skin/new2016/images/androidad-5.jpg" /><p><strong>赤月屠龙</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/016331992/6850004"><img src="/skin/new2016/images/androidad-6.jpg" /><p><strong>塔防三国志</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/734007138/8250004"><img src="/skin/new2016/images/androidad-7.jpg" /><p><strong>360卫士</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/373029658/8780004"><img src="/skin/new2016/images/androidad-8.jpg" /><p><strong>酷狗音乐</strong><b>下载</b></p></a></li></ul><strong class="g-show-title">游戏排行榜</strong><ul class="m-hideshow-middle"><li><a href="http://tj.tcyl77.com/305209160/8950004"><img src="/skin/new2016/images/androidad-9.jpg" /><p><strong><i>1</i>江湖侠客令</strong><span>角色扮演 / 中文</span></p><b>下载</b></a></li><li><a href="http://tj.tcyl77.com/650305409/9880004"><img src="/skin/new2016/images/androidad-10.jpg" /><p><strong><i>2</i>劲舞团</strong><span>音乐舞蹈 / 中文</span></p><b>下载</b></a></li><li><a href="http://tj.tcyl77.com/889290569/9090004"><img src="/skin/new2016/images/androidad-11.jpg" /><p><strong><i>3</i>天将雄兵</strong><span>卡牌策略 / 中文</span></p><b>下载</b></a></li></ul><strong class="g-show-title">相关应用</strong><ul class="m-hideshow-top"><li><a href="http://tj.tcyl77.com/805232152/2810004"><img src="/skin/new2016/images/androidad-12.jpg" /><p><strong>手机百度</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/892321139/5240004"><img src="/skin/new2016/images/androidad-13.jpg" /><p><strong>微信多开助手</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/975247891/1770004"><img src="/skin/new2016/images/androidad-14.jpg" /><p><strong>wifi万能钥匙</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/250291131/2190004"><img src="/skin/new2016/images/androidad-15.jpg" /><p><strong>猎豹清理大师</strong><b>下载</b></p></a></li></ul>';
var iosTchtml = '<ul class="m-hideshow-top"><li><a href="http://tj.tcyl77.com/262029296/0080005"><img src="/skin/new2016/images/iosad-1.jpg" /><p><strong>去吧皮卡丘</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/315045178/8880005"><img src="/skin/new2016/images/iosad-2.jpg" /><p><strong>口袋妖怪复刻</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/142006155/3580005"><img src="/skin/new2016/images/iosad-3.jpg"><p><strong>小冰冰传奇</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/262006271/8420005"><img src="/skin/new2016/images/iosad-4.jpg" /><p><strong>全民枪战</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/415266950/9140005"><img src="/skin/new2016/images/iosad-5.jpg" /><p><strong>口袋妖怪起源</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/027053379/7900005"><img src="/skin/new2016/images/iosad-6.jpg" /><p><strong>我在大清当皇帝</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/249235356/7320005"><img src="/skin/new2016/images/iosad-7.jpg" /><p><strong>我的世界</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/825312968/2660005"><img src="/skin/new2016/images/iosad-8.jpg" /><p><strong>东方头条</strong><b>下载</b></p></a></li></ul><strong class="g-show-title">游戏排行榜</strong><ul class="m-hideshow-middle"><li><a href="http://tj.tcyl77.com/645185551/0070005"><img src="/skin/new2016/images/iosad-9.jpg" /><p><strong><i>1</i>死神觉醒</strong><span>角色扮演 / 中文</span></p><b>下载</b></a></li><li><a href="http://tj.tcyl77.com/799027351/9960005"><img src="/skin/new2016/images/iosad-10.jpg" /><p><strong><i>2</i>少年三国志</strong><span>角色扮演 / 中文</span></p><b>下载</b></a></li><li><a href="http://tj.tcyl77.com/016087028/3190005"><img src="/skin/new2016/images/iosad-11.jpg" /><p><strong><i>3</i>究极数码暴龙</strong><span>卡牌养成 / 中文</span></p><b>下载</b></a></li></ul><strong class="g-show-title">相关推荐</strong><ul class="m-hideshow-top"><li><a href="http://tj.tcyl77.com/471099000/2960005"><img src="/skin/new2016/images/iosad-12.jpg" /><p><strong>神奇宝贝绿宝石</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/575302538/1400005"><img src="/skin/new2016/images/iosad-13.jpg"><p><strong>口袋妖怪重制</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/527321473/0960005"><img src="/skin/new2016/images/iosad-14.jpg" /><p><strong>热血战神</strong><b>下载</b></p></a></li><li><a href="http://tj.tcyl77.com/533052612/2250005"><img src="/skin/new2016/images/iosad-15.jpg" /><p><strong>血族</strong><b>下载</b></p></a></li></ul>';
var RefUrl = document.referrer;
var showAdsRef = ["baidu.com", "sm.cn", "sogou.com", "so.com", "google.com", "bing.com", "www.962.net", "http://962.net"];
WebPages.down = {
    init: function() {
        this.addContAll();
        this.showCont();
        this.notDown();
        this.pageScroll();
        this.xScroll();
        this.previmgShow();
        this.bigTab();
        this.loadAds();
        this.downLoad();
        this.loadfootad()
        
        this.pbStrategy(); //屏蔽策略
        
    },
    loadAds: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        var isIphone = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		var rootid = _pageinfo.rootId;
        var isGame = GameCateList.in_array(rootid);
        var iosTemp = "";
        gamead = '<p id="ppfootads" style="position:fixed;bottom:0;z-index:9999;"><a href="http://tj.tcyl77.com/907230478/3570000" onclick="return android_zs()"><img src="/img/ppzs.gif" style="display:block;width:100%;max-width:720px;"></a></p>';
        var titleText = $("title").text();
        var isShowPicAds = showAdsTitle.in_mid(titleText);
        isShowPicAds = true;
        if (isShowPicAds) {
            isShowPicAds = showAdsRef.in_mid(RefUrl)
        }
    },
    addContAll: function() {
        var h1Title = $("h1").text();
        var gameImg = $(".g-game-img img").attr("src");
		var gzhHtml = '<a href="http://jump.hupeh.cn/xhjxh1220.php" style=" width:100%; height:auto; padding:18px 10px; border-radius:4px; box-sizing:border-box; display:-webkit-box; overflow:hidden; margin:10px 0 0; background:#fde2cf"><b style=" width:54px; height:54px; border-radius:100%; display:block; overflow:hidden;"><img src="' + gameImg + '" style="width:100%; height:auto; display:block; overflow:hidden"></b><p style="width:auto; height:auto; line-height:20px; font-size:14px; font-weight:normal; color:#333; display:block; overflow:hidden; padding:0 13px; -webkit-box-flex:1;"><span style="font-weight:bold">' + h1Title + '</span>，领礼包，送福利，关注乐游官方号，每天讲笑话，让你乐翻天！</p><b style=" width:50px; height:50px; line-height:18px;    background: #d50118;    color: #fff;text-align: center;font-size: 14px;border-radius: 4px; display:block; overflow:hidden; padding:6px; box-sizing:border-box; font-weight:normal">一键关注</b></a>';
        if ($(".m-special-note dd").html() == "") {
            $(".m-special-note").remove()
        }
        var allLikeHtml = "";
        if (browser.versions.android) {
            allLikeHtml = '<div class="g-white-box g-alllike f-btn1-cont"><h4 class="m-title"><b></b>大家都在玩</h4><div class="g-down-recomd-game plist" id="f-scroll-alllike"><ul class="g-down-recomd-ul"><li><a href="http://m.962.net/k/mmy/"><img class="ico" src="http://pic.962.net/up/2021-4/2021412928499091.png"><strong>抖音摸摸鱼</strong></a></li><li><a href="http://m.962.net/k/bydzz/"><img class="ico" src="http://pic.962.net/up/2021-3/202131156102220.png"><strong>捕鱼大作战</strong></a></li><li><a href="http://m.962.net/mipy/475667.html"><img class="ico" src="http://pic.962.net/up/2021-4/20214121819298595.png"><strong>冰与火之舞</strong></a></li><li><a href="http://m.962.net/y/128588"><img class="ico" src="http://pic.962.net/up/2021-1/2021127166433299.png"><strong>360浏览器</strong></a></li><li><a href="http://m.962.net/y/475896"><img class="ico" src="http://pic.962.net/up/2020-8/20208101722394807.png"><strong>放置封神录</strong></a></li><li><a href="http://m.962.net/y/497284"><img class="ico" src="http://pic.962.net/up/2020-12/202012101731112684.png"><strong>剑斩乾坤</strong></a></li><li><a href="http://m.962.net/y/349534"><img class="ico" src="http://pic.962.net/up/2018-11/201811161417178236.png"><strong>梦幻西游</strong></a></li></ul></div></div>'
        } else {
            allLikeHtml = '<div class="g-white-box g-alllike f-btn1-cont"><h4 class="m-title"><b></b>大家都在玩</h4><div class="g-down-recomd-game plist" id="f-scroll-alllike"><ul class="g-down-recomd-ul"><li><a href="http://m.962.net/y/176238"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/201732310645415_120_120.png"><strong>全民枪战2</strong></a></li><li><a href="http://m.962.net/y/176264"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/2017323102215995_120_120.png"><strong>三国志13</strong></a></li><li><a href="http://m.962.net/y/176337"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/20173231145143404_120_120.png"><strong>拳皇97风云</strong></a></li><li><a href="http://m.962.net/y/165992"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-2/20172201658215318_120_120.png"><strong>8分音符</strong></a></li><li><a href="http://m.962.net/y/124203"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/201732314594739_120_120.png"><strong>口袋妖怪复</strong></a></li><li><a href="http://m.962.net/y/176334"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/20173231154138853_120_120.png"><strong>龙珠GT</strong></a></li><li><a href="http://m.962.net/y/176283"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/2017323113482990_120_120.png"><strong>天天枪战</strong></a></li><li><a href="http://m.962.net/y/171812"><img class="ico" src="http://pic1.962.net/962/mb/up/2017-3/2017310113535289_120_120.jpg"><strong>新仙剑奇侠</strong></a></li></ul></div></div>'
        }
        $(".f-info-d3").after(allLikeHtml)
    },
    showCont: function() {
        $(".f-more-cont").remove()
        return
        var contentHeight = $(".m-cont").height();
        if (contentHeight >= 360) {
            $(".m-cont").height(360);
			$(".f-more-cont").click(function() {
                var btnName = $(this).text();
                if (btnName == "查看更多详情") {
                    $(this).html("收起全文<i></i>").addClass("f-hover");
                    $(".m-cont").height("auto").addClass("on")
                } else {
                    $(this).html("查看更多详情<i></i>").removeClass("f-hover");
                    $(".m-cont").height("360px").removeClass("on")
                }
            })
        } else {
            $(".f-more-cont").hide();
            $(".m-cont").addClass("on")
        }
    },
    notDown: function() {
        var keyHtml = $(".g-guess-like .swiper-wrapper").html().replace(/\s+/g, "");
        if (keyHtml == "") {
            $(".g-guess-like").hide()
        }
        var zeroText = $(".f-game-size").text().replace(/\s+/g, "")
    },
    pageScroll: function() {
        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            preventLinksPropagation: false,
        });
		var themeName = [];
        var themeImg = [];
        $(".g-guess-like .swiper-slide").each(function() {
            themeName.push($(this).find("dl dt").text());
			themeImg.push($(this).find("dl dt img").attr("src"))
        });
		for (i = 0; i < themeName.length; i++) {
            $("head").append('<style>.g-guess-like .swiper-pagination span:nth-child(' + (i + 1) + '):after{content:"' + themeName[i] + '"}</style>');
            $("#f-scroll-project").append("")
        }
    },
    xScroll: function() {
        $(".plist").each(function(i) {
            var idStr = $(this).attr("id");
            createIScroll(idStr, false)
        });

        function createIScroll(idStr, snap) {
            var snap = snap;
            var scrollObj = new IScroll("#" + idStr, {
                snap: snap,
                momentum: !snap,
                resize: true,
                disableMouse: true,
                disablePointer: true,
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
            return scrollObj
        }
    },
    bigTab: function() {
        var liBtnSzie = $(".g-cont-btn li").length;
        $(".g-cont-btn li").click(function() {
            $(this).addClass("f-hover").siblings().removeClass("f-hover");
            var n = $(this).index();
			for (i = 1; i < liBtnSzie + 1; i++) {
                $(".f-btn" + i + "-cont").hide()
            }
            if (n != 0) {
                $(".f-btn" + (n + 1) + "-cont").show()
            } else {
                for (i = 1; i < liBtnSzie + 1; i++) {
                    $(".f-btn" + i + "-cont").show()
                }
            }
        })
    },
    addTags: function() {
        for (i = 0; i < forNum; i++) {
            if (titleHtml.indexOf(ffTitle[i]) != -1) {
                return false
            }
        }
        if ($(".f-game-size").length <= 0) {
            $(".g-game-data em:first span").addClass("f-game-size")
        }
        if ($(".f-game-size").text() == '0KB') {
            return false
        }
        if ($(".g-tags-box").length > 0) {
            if (!browser.versions.android) {
                tagsSystemIf($(".g-tags-box .m-tags-ios"), "IOS", $(".f-game-size").text())
            } else {
                tagsSystemIf($(".g-tags-box .m-tags-android"), "ANDROID", $(".f-game-size").text())
            } if ($(".g-tags-box ul li").length <= 0) {
                $(".g-tags-box").hide()
            }
        }

        function tagsSystemIf(tagsContObj, equipment, gameSize) {
            if (tagsContObj.find("li").length > 0) {
                var tagsHtml = tagsContObj.html();
                tagsHtml = '<div class="g-tags-box"><ul>' + tagsHtml + '</ul></div>';
                $(".g-tags-box").remove();
                $(".g-project").before(tagsHtml);
                var firstSystem = "";
                var firstId = "";
                var firstDownUrl = "";
                var firstName = "";
                if (typeof(tagsContObj.find("li").eq(0).attr("data-size")) != "undefined") {
                    for (i = 0; i < tagsContObj.find("li").length; i++) {
                        if (tagsContObj.find("li").eq(i).attr("data-size") != "0KB") {
                            var firstSystem = tagsContObj.find("li").eq(i).attr("data-system");
                            var firstId = tagsContObj.find("li").eq(i).attr("data-id");
                            var firstDownUrl = tagsContObj.find("li").eq(i).attr("data-downurl");
                            var firstName = tagsContObj.find("li a p").eq(i).text();
                            break
                        }
                    }
                } else {
                    var firstSystem = tagsContObj.find("li").eq(0).attr("data-system");
                    var firstId = tagsContObj.find("li").eq(0).attr("data-id");
                    var firstDownUrl = tagsContObj.find("li").eq(0).attr("data-downurl");
                    var firstName = tagsContObj.find("li a p").eq(0).text()
                } 
                if (_pageinfo.system.toUpperCase().indexOf(equipment) == -1 && firstName != '') {
                    var tagstyle = '<style>.m-tisp1{height:22px;line-height:22px;text-align:center;color:#666;font-size:14px;padding-top:3px}.m-tisp1 strong{font-weight:bold;color:#9b0;padding:0 2px}.m-tisp2{line-height:22px;text-align:left;color:#333;font-size:14px;text-align:center}.m-tisp2 span{color:#f40}</style>';
                    $('head').append(tagstyle);
                    if (_pageinfo.system.toUpperCase().indexOf('IOS') != -1) {
                        $("#downAddress").after('<p class="m-tisp1">该软件为苹果资源，没有<strong>安卓</strong>版</p><p class="m-tisp2">该地址下载的是：<span>' + firstName + '</span></p>')
                    } else if (_pageinfo.system.toUpperCase().indexOf('ANDROID') != -1) {
                        $("#downAddress").after('<p class="m-tisp1">该软件为安卓资源，没有<strong>苹果</strong>版</p><p class="m-tisp2">该地址下载的是：<span>' + firstName + '</span></p>')
                    } else {
                        if (equipment == "IOS") {
                            $("#downAddress").after('<p class="m-tisp1">该软件为PC资源，没有<strong>苹果</strong>版</p><p class="m-tisp2">该地址下载的是：<span>' + firstName + '</span></p>')
                        } else {
                            $("#downAddress").after('<p class="m-tisp1">该软件为PC资源，没有<strong>安卓</strong>版</p><p class="m-tisp2">该地址下载的是：<span>' + firstName + '</span></p>')
                        }
                    }
                    $("#downAddress ul li a").attr("href", "/down.asp?id=" + firstId).attr("data-add", "add")
                }
            } else {
                $(".g-tags-box").remove()
            }
        }
    },
    downLoad: function() {
        var isClickDown = 0;
        var Assid = parseInt($("#Associate").html());
        if (Assid > 0) {
            $(".down").removeAttr("data-href");
            $(".down").attr("href", "/y/" + Assid);
            $(".down").html("手机版下载");
            return false
        }
        if (address == "") {
            if (browser.versions.ios) {
                // address = iosurl
            } else {
                address = downUrl
            }
        }
        var resTitle = $("h1").text();
        resTitle = resTitle.split(/(\s|\()/)[0];
        var softid = _pageinfo.id;
        var appid = 0;
        var tempstr = 0;
        var addrarray = address.split("/");
        if (addrarray.length > 0) {
            tempstr = addrarray[addrarray.length - 1]
        }
        if (!isNaN(tempstr)) {
            appid = tempstr;
            isAds = true
        };
        var key = $("h1").text();
        var verkey = "破解版|修改版|去验证版|无限金币版|无限钻石版|无限道具版|无敌版|全解锁版"
        var downTitle = verkey.split("|").in_mid(resTitle);
		var tns = checkKeys(softid, appid, key);
        var apkhtml = ""
        var ioshtml = ""
        window.ioshtml = ioshtml;
        var isSearchAds = false;
        if (tns.tn.length > 0) {
            isSearchAds = true;
            isAds = true;
            for (var i = 0; i < tns.tn.length; i++) {
                if ((tns.tn[i].name.indexOf("苹果") > -1) || (tns.tn[i].name.indexOf("ios") > -1)) {
                    ioshtml += '<li><a href=' + tns.tn[i].address + '>' + tns.tn[i].name + '</a></li>'
                } else {
                    apkhtml += '<li><a href=' + tns.tn[i].address + '>' + tns.tn[i].name + '</a></li>'
                }
            };
            for (i = 0; i < forNum; i++) {
                if (titleHtml.indexOf(ffTitle[i]) != -1) {
                    return false
                }
            }
            if (browser.versions.ios) {
                if (ioshtml != "") {
                    $(".m-down-ul").empty();
                    $("h1").text($("h1").text() + " 苹果版");
                    $(".m-down-ul").append(ioshtml)
                }
            } else {
                if (apkhtml != "") {
                    if (tns.p == 1) {
                        $(".m-down-ul").empty()
                    } else {
                        if (downTitle != "0") {
                            $(".m-down-ul li").first().find("a").text(downTitle)
                        }
                    }
                    $(".m-down-ul").append(apkhtml)
                }
            }
        }
        var downul = $(".m-down-ul li");
        if (downul.length % 2 > 0) {
            downul.removeClass("m-down-last");
            downul.last().addClass("m-down-last")
        } else {
            $('.m-down-ul').find('li:first').removeClass('m-down-last')
        }
        this.addTags();
        if (browser.versions.ios) { //ios
            ifIspc($(".g-tags-box ul li"), $(".f-game-size").text(), catearrIos.in_array(_pageinfo.categroyId), 'ios');
            iosTancent();
            if (!isAds) {
                this.iossoftAdd()
            }
        } else {
            ifIspc($(".g-tags-box ul li"), $(".f-game-size").text(), catearr.in_array(_pageinfo.categroyId), 'android');
            androidTanceng();
            if (!isAds) {
                this.addhighLab()
            }
            // 高速下载
            // var upDate = $('.g-down-attr li:first span').text().split(' ')[0]
            // var dateTime = new Date(upDate).getTime()/1000; // 更新时间戳
            // var sevenDay = 604800 // 7天的时间戳数值
            // var onDaty = new Date((new Date()).toLocaleDateString().replace(/\//g,'-'))/1000 // 当天时间戳
            
            // var isSevenDay = false // 当前时间 > 更新时间(604800)7天
            // if(onDaty-dateTime >= sevenDay){
            //     isSevenDay = true
            // } 
            // // 更新超过7天，并且不是商务包，并且没有cook记录，并且不是ios设备，并且资源大小不等于0KB
            // console.log(`更新大于7天：${isSevenDay};isAds：${isAds}`)
		    // if(isSevenDay && !isAds && !browser.versions.ios){
            //     var dateTime = new Date(_webInfo.DateTime.replace(/\//g,"-")).getTime()/1000; //转换时间戳
            //     var quicklyDown = 'http://tj.d1dengju.com/e/7/'+_webInfo.Username+'/149488?soft_id='+_pageinfo.id+'&t='+dateTime
            //     let downTips = '需先下载360助手,使用高速下载更快更安全'
            //     let downBtnText = '高速下载'

            //     $("#downAddress").html(`
            //         <div style="width:100%; height:auto; margin:10px 0 0; display:flex; overflow:hidden">
            //             <a href="${downUrl}" style="width:34%; height:32px; line-height:32px; font-size:16px; font-weight:normal; color:#ff8330; text-align:center; border-radius:4px; background:#ffe2cc; display:block; overflow:hidden">普通下载</a>
            //             <a href="${quicklyDown}" style="width:auto; height:32px; line-height:32px; font-size:16px; font-weight:normal; color:#fff; text-align:center; border-radius:4px; background:#f60; margin:0 0 0 10px; flex:1;  display:block; overflow:hidden">${downBtnText}</a>
            //         </div>
            //         <div 
            //             style="width:100%; height:auto; padding:0 0 0; margin:6px 0 0; display:block; overflow:hidden; position:relative;"
            //         >
            //             <i 
            //                 style="width:0; height:0; border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #ffe2cc; display:block; overflow:hidden; position:absolute; left:68%; top:1px; transform:translateX(-50%); z-index:2;"
            //             >
            //             </i>
            //             <i 
            //                 style="width:0; height:0; border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:11px solid #ffbf94; display:block; overflow:hidden; position:absolute; left:68%; top:0; transform:translateX(-50%); z-index:0;"
            //             >
            //             </i>
            //             <p style=" width:100%; height:auto; line-height:20px; font-size:12px; color:#888; padding:10px; box-sizing:border-box; background:#ffe2cc; border:1px solid #ffbf94; border-radius:4px; margin:10px 0 0; display:block; overflow:hidden"><strong style="font-weight:normal; color:#f60">说明：</strong>${downTips}</p>
            //         </div>
            //     `)

            // }
        } 
        if ($('#address').attr('ispc')) {
            $("#address").click(function() {
                setTimer = setTimeout(function() {}, 100)
            });
			$(".m-close-btn,.m-black-bg").click(function() {
                $(".m-click-show").fadeOut("fast")
            })
        }

        function ifIspc(liObj, gameSize, isSystem, equipment) {
            if (isXiajia) {
                return false
            }
            var firstName = "";
            if (typeof(liObj.eq(0).attr("data-size")) != "undefined") {
                if (liObj.length > 0) {
                    for (i = 0; i < liObj.length; i++) {
                        if (liObj.eq(i).attr("data-size") != "0KB") {
                            firstName = liObj.eq(i).text();
                            break
                        }
                    }
                }
            } else {
                firstName = liObj.eq(0).text()
            }
            var downNoLink = $("#address").attr("href");
            // if (downNoLink == '') {
            //     $('#address').attr({
            //         "href": "javascript:;",
            //         "ispc": true
            //     }).text('该资源已下架').css({
            //         "background": "#999"
            //     })
            // }
            if (firstName == "" && (gameSize == "0KB" || gameSize == "1KB")) {
                if (isSystem) {
                    $('#address').attr({
                        "href": "javascript:;",
                        "ispc": true
                    }).text('立即预约').addClass('m-yuyueok');
                    var qqun = '//shang.qq.com/wpa/qunwpa?idkey=9059974d0b33a2901e494a18deba014a06b1424e6a0e3b5b5ae99979e7db99af';
                    var weixinname = ''
                    yuyue(qqun, weixinname)
                }
                if (!isSystem) {
                    if (equipment == "android") {
                        $('#address').attr({
                            "href": "javascript:;",
                            "ispc": true
                        }).css({
                            "background": "#a0a0a0"
                        }).text("该软件没有对应安卓版")
                    } else {
                        $('#address').attr({
                            "href": "javascript:;",
                            "ispc": true
                        }).css({
                            "background": "#a0a0a0"
                        }).text("该软件没有对应苹果版")
                    }
                } else {
                    $('#address').attr('issw', true)
                }
            }
        }

        function yuyue(qqun, weixinname) {
            var yuyuecss = '<style>.g-yuyuebg {z-index:+100;background:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;position:fixed;left:0;top:0;width:100%;height:100%}.g-yuyue{width: 90%;	position: fixed;	left: 5%;		top: 50%;	margin-top: -155px;	z-index: +101;	background: #fff;	border-radius: 10px;	overflow: hidden}.m-yytit {	background: #66d105;	font: 18px/45px microsoft yahei;	color: #fff;	padding: 0 5px 0 15px;	margin-bottom:15px;}.m-yytit span {	float: right;	font-size: 35px;	cursor: pointer; padding:0 5px;line-height:40px}.m-yyinfo { margin-bottom: 15px; text-align: center}.m-yyinfo span{ display: inline-block; width: 80px; text-align: right; font-size: 16px; padding-left: 30px; }.m-yyinfo input {border: #ccc 1px solid;     margin:0 0 0 0;    padding: 0 10px;    font: 14px/34px microsoft yahei;    border-radius: 3px; width: 80%; margin:0 auto;}.m-yyinfo input:focus {	border: #66d105 1px solid}.m-yuyuenum { padding:0 10px; text-align: center;font-size: 14px; margin-bottom:10px; }.m-yuyuenum span { font-weight: bold; color:#f40}.m-yyqdbtn {border-top: 1px solid #e5e5e5; text-align: center; line-height: 70px;}.m-yyqdbtn a {    padding: 12px 40px;    line-height: 20px;    border-radius: 5px; background-color: #66d105; color:#fff; margin:0 10px; font-size: 16px;}.m-yyqdbtn a:hover { background-color: #1b91c8 }.g-yuyue,.g-yuyuebg {display: none}.m-qqweixin {margin-bottom: 10px;text-align: center;}.m-qqweixin a{display: inline-block;padding:4px 15px 8px 10px; text-align: center; margin: 0 10px;background-color: #20aef0; color:#fff; text-decoration: none; border-radius: 5px;position: relative; font-size:14px;}.m-qqweixin a:hover { background-color: #20aecc}.m-qqweixin a span { display: inline-block; width: 20px; height: 20px; background-color: #f00; position: relative;top: 4px; margin-right: 5px }.m-qqweixin a.m-yyqq span { background:url(https://www.cr173.com/images/yyqq.png) 3px 0 ;background-size: 17px; background-repeat: no-repeat; top: 5px}.m-qqweixin a.m-yyweixin { background-color: #50b674 }.m-qqweixin a.m-yyweixin span { background:url(yyweixin.png);background-size: 20px; }.m-qqweixin a.m-yyweixin i{display: none;}.m-qqweixin a.m-yyweixin:hover i{display: block;}.m-qqweixin a.m-yyweixin i{width: 120px;position: absolute;left:-10px;}.m-qqweixin a.m-yyweixin i img{width: 100%;}</style>';
            $('head').append(yuyuecss);
            var yuyuediv = '<div class="g-yuyue" data-click="0"><div class="m-yytit">请输入您的预约信息：<span class="f-fr f-yyclose">×</span></div><div class="m-yyinfo"><span></span><input type="text" id="f-yyPhone" placeholder="输入手机号码" maxlength="11" autocomplete="off"></div><div class="m-yuyuenum">预约后可及时接受<span>活动，礼包，开测和开放下载</span>的提醒</div><div class="m-qqweixin clearfix" ><p><a target="_blank" href="' + qqun + '" class="m-yyqq"><span></span>加入预约QQ群</a></p></div><div class="m-yyqdbtn"><a href="javascript:;" class="m-yybtn f-yybtn">预约</a><a href="javascript:;" class="m-yycl f-yyclose">关闭</a></div></div><div class="g-yuyuebg f-yyclose"></div>';

            $('body').append(yuyuediv);
            $('.m-yuyueok').click(function() {
                var yyclinum = $('.g-yuyue').attr('data-click');
                if (yyclinum != 0) {
                    alert('您已经预约过拉')
                } else {
                    $('.g-yuyue,.g-yuyuebg').fadeIn()
                }
            });
            $('.f-yyclose').click(function() {
                $('.g-yuyue,.g-yuyuebg').hide()
            });
            $('.f-yybtn').click(function() {
                var iputxt = ''
                $('.g-yuyue input').each(function() {
                    iputxt += $(this).val()
                });
				if (iputxt == '') {
                    alert('手机号不能为空');
					return false
                }
                var yyphone = $('#f-yyPhone').val();
                var yyqq = $('#f-QQ').val();
                var phonereg = /^1[\d]{10}$/;
                if (yyphone != '') {
                    if (!phonereg.test(yyphone)) {
                        alert('请输入有效的手机号！');
                        return false
                    }
                }
                $('.g-yuyue').attr('data-click', 1);
                $('.m-yuyueok').text('成功预约');
				alert('预约成功');
                $('.g-yuyue,.g-yuyuebg').hide();
                var yuyuephome = $('#f-yyPhone').val();
                $.getJSON("http://www.962.net/ajax.asp?action=34&id=" + _pageinfo.id + "&phone=" + yuyuephome + "&callback=?", function(data) {})
            })
        }

        function androidTanceng() {
            if ($('#address').attr('ispc')) {
                html = '<div class="m-click-show"><div class="m-show-cont"><strong class="g-show-title"><p>该软件无安卓版，大家<span>还喜欢</span>这些：</p></strong><b class="m-close-btn">+</b>' + androidHtml + '</div><b class="m-black-bg"></b></div>'
            } else {
                html = '<div class="m-click-show"><div class="m-show-cont"><strong class="g-show-title"><p>大家<span>还喜欢</span>这些：</p></strong><b class="m-close-btn">+</b>' + androidHtml + '</div><b class="m-black-bg"></b></div>'
            } if ($(".m-click-show").length <= 0) {
                $("body").append(html)
            }
        }

        function iosTancent() {
            if ($(".m-click-show").length <= 0) {
                if ($('#address').attr('ispc')) {
                    $("body").append('<div class="m-click-show"><div class="m-show-cont"><strong class="g-show-title"><p>该软件无苹果版，大家<span>还喜欢</span>这些：</p></strong><b class="m-close-btn">+</b>' + iosTchtml + '</div><b class="m-black-bg"></b></div>');
					$("#address").attr("href", "javascript:;")
                } else {
                    $("body").append('<div class="m-click-show"><div class="m-show-cont"><strong class="g-show-title"><p>大家<span>还喜欢</span>这些：</p></strong><b class="m-close-btn">+</b>' + iosTchtml + '</div><b class="m-black-bg"></b></div>');
                }
            }
        }
    },
    addhighLab: function() {
        isShowPicAds = showAdsRef.in_mid(RefUrl);
        if (isShowPicAds) {
            jQuery.getScript("http://ca.wk2.com/?id=9621002333", function() {})
        }
    },
    iossoftAdd: function() {
        isShowPicAds = showAdsRef.in_mid(RefUrl);
        if (isShowPicAds) {
            jQuery.getScript("http://ca.wk2.com/?id=10023301", function() {})
        }
    },
    loadfootad: function() {
        if (browser.versions.ios) {} else {}
    },
    previmgShow: function() {
        var previmgHtml = "";
        var imgSrcAll = "";
        $(".g-down-previmg img").each(function() {
            var imgSrc = $(this).attr("src").split("_");
            var imgQz = imgSrc[0];
            if (imgSrc.length >= 2) {
                var imgHz = imgSrc.pop();
                imgHz = imgHz.split(".");
				imgSrcAll = imgQz + "." + imgHz.pop()
            } else {
                imgSrcAll = imgQz
            };
            previmgHtml += '<div class="swiper-slide"><img src="' + imgSrcAll + '"></div>'
        });
		var previmgHtmlBox = '<div class="g-previmg-show f-previmg-swiper"><div class="swiper-wrapper">' + previmgHtml + '</div><div class="m-btn-box"><div class="swiper-button-prev"></div><div class="f-previmgswiper-pagination"></div><div class="swiper-button-next"></div></div><b class="u-close"></b></div>'
        $("body").append(previmgHtmlBox);
        var mySwiper = new Swiper('.f-previmg-swiper', {
            pagination: {
                el: '.f-previmgswiper-pagination',
            },
            preventLinksPropagation: true,
            paginationClickable: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true,
            },
            observer: true,
            observeParents: true,
        });
		$(".g-down-previmg img").click(function() {
            var initialSlideN = $(this).index();
            $(".g-previmg-show").css({
                "left": "0"
            });
			mySwiper.slideTo(initialSlideN, 0, false);
        });
		$(".g-previmg-show .u-close").click(function() {
            $(".g-previmg-show").css({
                "left": "-100%"
            });
        })
    },
    pbStrategy(){
        // 如果注释不为空，则按钮上把注释显示出来
        if(_pageinfo.qihoo !== ''){
            $('#address').after(`
                <div
                    class="gototips"
                    style="width:100%; height:auto; padding:0 0 0; margin:7px 0 0 0; display:block; overflow:hidden; position:relative;"
                >
                    <p 
                        style=" width:100%; height:20px; line-height:20px; font-size:12px; color:#888; padding:0px; box-sizing:border-box;  display:block; overflow:hidden; text-align:center"
                    >
                        ${_pageinfo.qihoo}
                    </p>
                </div>`
            )
            $(".m-down-ul").css({"padding-bottom":"0"})
        }
        // 设备判断和对应资源系统判断
        let downSystem
        if(_pageinfo.system.indexOf('苹果IOS') !== -1){ // 苹果资源
            downSystem = "iosSystem"
        }else if(_pageinfo.system.indexOf('Android') !== -1){ // 安卓资源
            downSystem = "androidSystem"
        }else{ // pc资源
            downSystem = "pcSystem"
        }
        
        if($(".g-tags-box").length <= 0){ // 没有tags
            if(IOSEQUIPMENT && (downSystem === 'androidSystem' || downSystem === 'pcSystem')){ // ios设备+安卓资源
            // if((IOSEQUIPMENT && downSystem === 'androidSystem') || downSystem === 'pcSystem'){ // ios设备+安卓资源
                $("#address").text('该软件没有对应苹果版').css({"background":"#888"})
                $(".gototips").remove()
            }
            if(!IOSEQUIPMENT && (downSystem === 'iosSystem' || downSystem === 'pcSystem')){ // 安卓设备+ios资源
                $("#address").text('该软件没有对应安卓版').css({"background":"#888"})
                $(".gototips").remove()
            }
        }
    },
}
$(function(){
    WebPages.down.init();
    var cqwsCss = '<style>.f-cqws{width:100%; height:auto; padding:10px 20px 0; background:#fff; box-sizing:border-box; display:block; overflow:hidden; margin:0;}.f-cqws strong{ width:100%; height:auto; line-height:20px; font-size:16px; color:#333; display:block; overflow:hidden;}.f-cqws img{width:100%; margin-top:10px; display:block; overflow:hidden}</style>';
    $("head").append(cqwsCss);
	var cqwsHtml = '<a href="http://k.289.com/cqws/?962&' + _pageinfo.id + '" class="f-cqws"><img src="http://k.289.com/cqws/images/cqws-img.jpg" /></a>'
})
function qpMgcFunction(dataReplaceHtml) {
    $('title').html(dataReplaceHtml[0]);
    $('.g-game-data h1').html('<i></i>' + dataReplaceHtml[1]);
    $('.g-game-img').each(function() {
        $(this).find('img').attr('src', dataReplaceHtml[2])
    });
    $('#g-down-previmg').html(dataReplaceHtml[3]);
    $('.m-cont').html(dataReplaceHtml[4]).css("height", "auto");
    $('.m-down-ul').each(function() {
        $(this).find('a').attr('href', dataReplaceHtml[5])
    });
    var titletext = $("title").text().replace(/下载/g, "");
    $("title").text(titletext);
	$(".f-more-cont,.f-show-cont,.g-tags-box,.g-related-recomd,.g-related-rank,.g-guess-like,.g-project,.g-alllike").css("display", "none");
    $(".g-introduction .m-title").html("<i></i>" + dataReplaceHtml[1]);
	$(".g-backlist").html('<a href="/y/catalogid/58/1/0/"><b> < </b><span>安卓游戏辅助 <</span></a><strong>' + dataReplaceHtml[1] + '</strong>');
	$(".m-cont").addClass("on")
}

function mgcBoxHide(objdiv) {
    $(objdiv).hide()
}

function mgcBoxHtml(objArray, divhtml) {
    for (var i = 0; i < objArray.length; i++) {
        $(objArray[i]).html(divhtml[i])
    }
}

// returnCity().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })
//promise返回所在城市
function returnCity(){
    return new Promise((resolve,reject) => {
        $.ajax({
            async: true,
            url: "//api.map.baidu.com/location/ip?ak=rsilWF7V0HLaZHy2YKBx0bWPGyuMU3su",
            type: "get",
            dataType: "jsonp",
            jsonp: 'callback',
            jsonpCallback: 'cityfunction',
            data: {
                q: "javascript",
                count: 1
            },
            success: function(response, status, xhr) {
                resolve(response)
            },
            error: function(err) {
                reject(err)
            }
        })
    })
}