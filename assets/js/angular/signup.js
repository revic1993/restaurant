/**
* SignupModule Module
*
* Description
*/
var rootScope = null;
angular.module('SignupModule', []).
controller('SignupCtrl',["$scope","$http",function($scope,$http){
	rootScope = $scope;
	$scope.token = $("#csrf").val();
	
	$scope.getUserEmail = function(email){
		var params={
			email:email			
		}
		var postUrl = "http://localhost:1337/user/email";

		$http.post(postUrl,params).success(function(data,status){
			console.log(data);
		}).error(function(data,status){
			console.log(data);
		});

	}

	$scope.getUserEmail('rujulsolanki1993@gmail.com');

}]);