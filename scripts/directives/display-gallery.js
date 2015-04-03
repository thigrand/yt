'use strict';
function displayGallery($http, videoData) {
	return {
		templateUrl:'views/gallery.html',
		link: function($scope, element, $http) {
			$scope.ytUrl = "";//take value from input
			$scope.ytUrlIds = [];
			$scope.videoObjects = [];
			// var exampeID = "vJ3a_AuEW18";
			// var exampleURL = "https://youtu.be/vJ3a_AuEW18";
			// var exampleDos = "https://www.youtube.com/watch?v=4JOAqRS_lms";

			$scope.takeIdFromUrl = function (url, switcher) {
				var videoId = "";

				if(switcher === 1){
					videoId = url;
				}
				if(switcher === 2) {
					videoId = url.substring(17, 28);
				}
				if(switcher === 3) {
					videoId = url.split('v=')[1];
					var ampersandPosition = videoId.indexOf('&');//to
					if(ampersandPosition != -1) {
						videoId = videoId.substring(0, ampersandPosition);
					}
				}
				return (videoId )? videoId : -1;
			}
			$scope.checkUrl = function(url) {
				var isGood = url,
					goodUrl = -1;
				if(url.length === 11) { 
					goodUrl = url;
				}
				if(url.length >= 11 && url.substring(0, 17) === "https://youtu.be/") {
					goodUrl = $scope.takeIdFromUrl(url, 2);
				}
				if(url.length >= 11 && url.substring(0, 24) === "https://www.youtube.com/") {
					goodUrl = $scope.takeIdFromUrl(url, 3);
				}
				return (goodUrl)? goodUrl : -1;
			}
			$scope.addVideo = function() {
				var idFromUrl = $scope.checkUrl($scope.ytUrl);
				if (idFromUrl !== -1){
					$scope.ytUrlIds.push(idFromUrl);
				    videoData.getDataFromYT($scope.ytUrlIds).then(function(data) {
						$scope.videoObjects = data;//videoData.getDataFromYT($scope.ytUrlIds);
				    });
				}
				else {
					alert("Cebuuula normalnie, buractwo");
				}
			}
			$scope.closeBox = function() {

			}
			$scope.playVideo = function() {
				
			}
		}
	};
}
angular.module('ytApp').directive('displayGallery', ['$http', 'videoData', displayGallery]);