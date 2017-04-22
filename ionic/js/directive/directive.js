;(function(){
	var directives = angular.module('directives',[]);
	directives.directive('index',function($window){
		return {
			templateUrl:'directive/index.html'
		}
		
	})
	directives.directive('link',function($window){
		return {
			link:function(){
				// $window.location.href='http://localhost/myangular/ionic/footer&header.html#/index/meinv'
			}
		}
		
	})
})();