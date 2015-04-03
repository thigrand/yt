'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function MainCtrl($scope, $http, videoData) {


	// for(var i; i < $scope.ytUrlIds.length ; i++) {
	// 	$http.get('https://gdata.youtube.com/feeds/api/videos/'+$scope.ytUrlIds[i]+'?v=2').
	// 	success(function(data, status, headers, config) {
	// 	// this callback will be called asynchronously
	// 	// when the response is available
	// 	console.log(data);
	// 	}).
	// 	error(function(data, status, headers, config) {
	// 	// called asynchronously if an error occurs
	// 	// or server returns response with an error status.
	// 	console.log("porażka");
	// 	});
	// }
   //  $scope.getDataFromYouTube = function () {
			// 	for(var i; i < $scope.ytUrlIds.length ; i++) {

			// 	}
			// }
 

}
angular.module('ytApp').controller('MainCtrl', ['$scope', '$http', 'videoData', MainCtrl]);
