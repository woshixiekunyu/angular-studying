;(function(){
	var routers = angular.module('routers',[]);
	routers.config(function($stateProvider,$urlRouterProvider){
		$stateProvider.state('index',{
			url:'/index',
			templateUrl:'template/index.html',
			controller:'indexCtrl'
		}).state('index.meinv',{
			url:'/meinv',
			templateUrl:'template/meinv.html',
			controller:'meinvCtrl'
		}).state('index.youdao',{
			url:'/youdao',
			templateUrl:'template/translate.html',
			controller:'youdaoCtrl'
		})
		$urlRouterProvider.when('','/index/youdao')
	})
	
})();