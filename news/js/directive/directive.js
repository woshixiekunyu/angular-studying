//组件和指令
;(function(){
	var directives = angular.module('directives',[]);
	directives.directive('xheader',function(){
		return {
			templateUrl:'directive/xheader.html'
		}
	})
	directives.directive('xfooter',function(){
		return {
			templateUrl:'directive/xfooter.html'
		}
	})
	directives.directive('xswiper',function(){
		return {
			templateUrl:'directive/xswiper.html',
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	})
	directives.directive('tuijianList',function(){
		return {
			templateUrl:'directive/tuijian-list.html'
		}
	})
	directives.directive('yuleList',function(){
		return {
			templateUrl:'directive/yule-list.html'
		}
	})
	directives.directive('shehuiList',function(){
		return {
			templateUrl:'directive/shehui-list.html'
		}
	})
	directives.directive('mark',function(){
		return {
			link:function(scope,ele,attr){
				//点击提示警告
				scope.isShowMark = false;
				scope.showMark = function(){
					scope.isShowMark = true;
				}

				//点击取消警告
				scope.removeMark = function(){
					scope.isShowMark = false
				}
			}
		}
	})
	directives.directive('xsearch',function(){
		return {
			templateUrl:'directive/search.html',
			link:function(scope,ele,attr){
				//点击显示搜索框
				scope.isSearchShow = false;
				scope.searchShow = function(){
					scope.isSearchShow = true;
				}

				//点击隐藏搜索框
				scope.searchRemove = function(){
					scope.isSearchShow = false;
				}

				//点击清除搜索框内容
				scope.searchClear = function(){
					scope.searchValue = '';
					var inputValue = document.querySelector('#search_input');
					inputValue.focus();

				}
			}
		}
	})
	directives.directive('more',function(){
		return {
			templateUrl:'directive/more.html'
		}
	})
	directives.directive('totuijian',['$window',function($window){
		return {
			link:function(scope,ele,attr){
				$window.location.href="http://localhost/myangular/news/index.html#/index/tuijian"
			}
		}
	}])
})();