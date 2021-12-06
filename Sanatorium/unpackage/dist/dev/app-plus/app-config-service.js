
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/house/house","pages/index/house/houseDetail","pages/index/book/bookType","pages/index/hulian/hulian","pages/index/hugong/hugong","pages/index/jiaren/jiaren","pages/index/jiaren/food/food","pages/index/cost/cost","pages/index/book/bookSight/bookSight","pages/index/book/bookHouse/bookHouse","pages/index/rank/rank","pages/index/police/policeType/policeType","pages/index/police/police/police","pages/index/police/dealPolice/dealPolice","pages/index/police/dealPolice/dealDetail/dealDetail","pages/login/login","pages/login/regist/regist","pages/login/regist/binding","pages/login/regist/bindingOld","pages/message/message","pages/message/messageDetail","pages/mine/mine","pages/mine/commit/commit","pages/mine/commit/doCommit","pages/mine/edit/information","pages/mine/real/real","pages/photo/photo","pages/photo/photoDetail","pages/photo/project/doProject"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"#3A9255","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/index1.png","selectedIconPath":"static/images/new2.png"},{"pagePath":"pages/photo/photo","text":"监控","iconPath":"static/images/photo1.png","selectedIconPath":"static/images/new1.png"},{"pagePath":"pages/message/message","text":"消息","iconPath":"static/images/message1.png","selectedIconPath":"static/images/new4.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/images/mine1.png","selectedIconPath":"static/images/new3.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Sanatorium","compilerVersion":"3.1.12","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#27ACA3","navigationStyle":"custom"}},{"path":"/pages/index/house/house","meta":{},"window":{"navigationBarTitleText":"疗养院"}},{"path":"/pages/index/house/houseDetail","meta":{},"window":{"navigationBarTitleText":"疗养院"}},{"path":"/pages/index/book/bookType","meta":{},"window":{"navigationBarTitleText":"预约种类"}},{"path":"/pages/index/hulian/hulian","meta":{},"window":{"navigationBarTitleText":"互联疗养"}},{"path":"/pages/index/hugong/hugong","meta":{},"window":{"navigationBarTitleText":"护工交流"}},{"path":"/pages/index/jiaren/jiaren","meta":{},"window":{"navigationBarTitleText":"家人健康"}},{"path":"/pages/index/jiaren/food/food","meta":{},"window":{"navigationBarTitleText":"查看膳食"}},{"path":"/pages/index/cost/cost","meta":{},"window":{"navigationBarTitleText":"收费明细"}},{"path":"/pages/index/book/bookSight/bookSight","meta":{},"window":{"navigationBarTitleText":"预约参观申请"}},{"path":"/pages/index/book/bookHouse/bookHouse","meta":{},"window":{"navigationBarTitleText":"预约疗养院"}},{"path":"/pages/index/rank/rank","meta":{},"window":{"navigationBarTitleText":"金牌护工榜"}},{"path":"/pages/index/police/policeType/policeType","meta":{},"window":{"navigationBarTitleText":"报警分类"}},{"path":"/pages/index/police/police/police","meta":{},"window":{"navigationBarTitleText":"立即报警"}},{"path":"/pages/index/police/dealPolice/dealPolice","meta":{},"window":{"navigationBarTitleText":"处理事项"}},{"path":"/pages/index/police/dealPolice/dealDetail/dealDetail","meta":{},"window":{"navigationBarTitleText":"处理事项"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/login/regist/regist","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/login/regist/binding","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/login/regist/bindingOld","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息"}},{"path":"/pages/message/messageDetail","meta":{},"window":{"navigationBarTitleText":"消息详情"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/mine/commit/commit","meta":{},"window":{"navigationBarTitleText":"待评价"}},{"path":"/pages/mine/commit/doCommit","meta":{},"window":{"navigationBarTitleText":"评价"}},{"path":"/pages/mine/edit/information","meta":{},"window":{"navigationBarTitleText":"个人设置"}},{"path":"/pages/mine/real/real","meta":{},"window":{"navigationBarTitleText":"实名认证"}},{"path":"/pages/photo/photo","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"监控"}},{"path":"/pages/photo/photoDetail","meta":{},"window":{"navigationBarTitleText":"监控"}},{"path":"/pages/photo/project/doProject","meta":{},"window":{"navigationBarTitleText":"提交任务"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
