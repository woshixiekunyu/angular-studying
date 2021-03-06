//路由
;(function(){
	var configs = angular.module('configs',[]);
	configs.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('index',{
			url:'/index',
			templateUrl:'template/home.html',
			controller:'footerCtrl'
		}).state('index.tuijian',{
			url:'/tuijian',
			templateUrl:'template/tuijian.html',
			controller:'tuijianCtrl'
		}).state('index.shehui',{
			url:'/shehui',
			templateUrl:'template/shehui.html',
			controller:'shehuiCtrl'
		}).state('index.yule',{
			url:'/yule',
			templateUrl:'template/yule.html',
			controller:'yuleCtrl'
		}).state('index.junshi',{
			url:'/junshi',
			templateUrl:'template/junshi.html',
			controller:'junshiCtrl'
		})
		.state('tuijian',{
			url:'/tuijian',
			templateUrl:'template/tuijian.html',
		})
		.state('tuijiandetail',{
			url:'/tuijiandetail/:id',
			templateUrl:'template/tuijian-detail.html',
			controller:'tuijian-detailCtrl'
		})
		.state('shehuidetail',{
			url:'/shehuidetail/:id',
			templateUrl:'template/shehui-detail.html',
			controller:'shehui-detailCtrl'
		})
		
		$urlRouterProvider.when('','/index')
	}])
})();