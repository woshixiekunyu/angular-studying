//控制器
;(function(){
	var controllers = angular.module('controllers',[]);

	//主页
	controllers.controller('footerCtrl',['$scope','$location','$window',function($scope,$location,$window){
		$scope.name = 'xie';
		$scope.item = function(items){
			$scope.items = items;
		}
		$scope.isShowTips = true;
		$scope.showTip = function(){
			$scope.isShowTips = false;
		}
		$scope.back = function(){
			$scope.ifs();
			$window.history.back();
		}
		$scope.to = function(){
			$scope.ifs();
			$window.history.forward();
		}
		$scope.ifs = function(){
			if($location.$$url == '/index'){
				$scope.isShowTips = true;
			}
			if($location.$$url == '/index/tuijian'){
				$scope.items = 0;
				$scope.isShowTips = false;
			}else if($location.$$url == '/index/yule'){
				$scope.items = 1;
				$scope.isShowTips = false;
			}else if($location.$$url == '/index/shehui'){
				$scope.items = 2;
				$scope.isShowTips = false;
			}else if($location.$$url == '/index/junshi'){
				$scope.items = 3;
				$scope.isShowTips = false;
			}
		}
		$scope.ifs();

	}])


	controllers.controller('tuijianCtrl',['$scope','$http','$timeout','$document',function($scope,$http,$timeout,$document){
		$scope.name = '推荐';
		$scope.isShowLoad = false;
		$scope.issort = false;
		$scope.sort = function(){
			$scope.issort = !$scope.issort;
		}
		$scope.loadMore = function(){
			$scope.isShowLoad = true;
			$timeout(function(){
				$http({
					url:'data/news.json',
					method:'GET',
					params: {
						channel_id:'6',
						// page:$scope.page++
					}
				}).then(function(data){
					$scope.isShowLoad = false;
					// console.log(data.data.news_list)
					$scope.news = data.data.news_list.concat($scope.news);
				})
			},1500)
		}

		$scope.loadMore();
	}])
	controllers.controller('yuleCtrl',['$scope','$http',function($scope,$http){
		$scope.name = '娱乐';
		$scope.isShowLoad = false;
		$scope.issort = false;
		$scope.sort = function(){
			$scope.issort = !$scope.issort;
		}
		$scope.loadMore = function(){
			$scope.isShowLoad = true;
			function formatterDateTime() {
				var date=new Date()
				var month=date.getMonth() + 1
				var datetime = date.getFullYear()
		            + ""// "年"
		            + (month >= 10 ? month : "0"+ month)
		            + ""// "月"
		            + (date.getDate() < 10 ? "0" + date.getDate() : date
		                    .getDate())
		            + ""
		            + (date.getHours() < 10 ? "0" + date.getHours() : date
		                    .getHours())
		            + ""
		            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
		                    .getMinutes())
		            + ""
		            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
		                    .getSeconds());
				return datetime;
			}
			$http({
				url:'http://route.showapi.com/109-35',
				method:'GET',
				params: {
					"showapi_timestamp":formatterDateTime(),
					"showapi_appid":'26916',
					"showapi_sign": '72fa78be4c2045138d456456fb9a3a90' 
				}
			}).then(function(data){
				$scope.isShowLoad = false;
				// console.log(data.data.showapi_res_body.pagebean.contentlist)
				$scope.news = data.data.showapi_res_body.pagebean.contentlist.concat($scope.news)
			})
		}
		$scope.loadMore();
	}])
	controllers.controller('shehuiCtrl',['$scope','$http',function($scope,$http){
		$scope.name = '社会'

		// $http.jsonp('http://localhost:8080/disanjieduan(%E7%BB%83%E4%B9%A0)/news/php',{
		// 	params: {
		// 		type:'shehui',
		// 		key:'APPKEY'
		// 	}
		// }).success(function(data){
		// 	console.log(data)
		// })
		// $http({
		// 	url:'http://localhost:8080/disanjieduan(%E7%BB%83%E4%B9%A0)/news/php',
		// 	params: {
		// 		// type:'shehui'
		//  		// key:'APPKEY'
		// 	}
		// }).then(function(data){
		// 	console.log(data)
		// })



		// $http({
		// 	url:'http://route.showapi.com/255-1',
		// 	method:'GET',
		// 	params: {
		// 		"showapi_appid": '26916', 
		// 		"showapi_sign": '72fa78be4c2045138d456456fb9a3a90'
		// 	}
		// }).then(function(data){
		// 	$scope.news = data.data.showapi_res_body.pagebean.contentlist
		// 	console.log($scope.news)
		// })
	}])
	controllers.controller('junshiCtrl',['$scope',function($scope){
		$scope.name = '军事'
	}])
	controllers.controller('tuijian-detailCtrl',['$scope','$state','$http',function($scope,$state,$http){

		$http({
			url:'data/detail.json',
			method:'GET'
			// params: {
			// 	id:$state.params.id
			// }
		}).then(function(data){
			for(var i=0;i<data.data.news_list.length;i++){
				if(data.data.news_list[i].id == $state.params.id){
					$scope.newsdata = data.data.news_list[i];
					break;
				}
			}
		})
	}])
	controllers.controller('shehui-detailCtrl',['$scope','$state','$http',function($scope,$state,$http){

		$http({
			url:'http://route.showapi.com/255-1',
			method:'GET',
			params: {
				"showapi_appid": '26916', 
				"showapi_sign": '72fa78be4c2045138d456456fb9a3a90'
			}
		}).then(function(data){
			// console.log(data)
			for(var i=0;i<data.data.showapi_res_body.pagebean.contentlist.length;i++){
				if(data.data.showapi_res_body.pagebean.contentlist[i].id == $state.params.id){
					$scope.newsdata = data.data.showapi_res_body.pagebean.contentlist[i];
					console.log($scope.newsdata)
					break;
				}
			}
		})
	}])
	
})();