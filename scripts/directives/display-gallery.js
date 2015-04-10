'use strict';
function displayGallery($http, videoData, $sce) {
	return {
		templateUrl:'views/gallery.html',
		link: function($scope, element, $http) {
			$scope.Math = window.Math;
			$scope.ytUrl = "";//take value from input
			$scope.ytUrlIds = [];
			$scope.videoObjects = [];
			$scope.baseUrl = "http://www.youtube.com/embed/";

			$scope.boxAmount = 12;//$scope.videoObjects.length;
			$scope.boxPerPage = 10;
			$scope.currentPage = 0;
			$scope.pagesAmount = $scope.Math.floor( $scope.boxAmount / $scope.boxPerPage);
			$scope.iterateFrom = $scope.currentPage * $scope.boxPerPage;
			
			$scope.getArray = function () {
				return $scope.videoObjects.slice($scope.iterateFrom, $scope.boxPerPage);
			}
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
			$scope.closeBox = function(boxIndex) {
				$scope.ytUrlIds.pop(boxIndex);
			}
			$scope.getIframeSrc = function(id) {
				var scr = "http://www.youtube.com/embed/" + id;

				return $sce.trustAsResourceUrl(src);
			}
			$scope.somefunc = swfObject.player;


			$scope.incrementPage = function() {

				console.log($scope.currentPage);
				if($scope.pagesAmount > 0 && $scope.currentPage < $scope.pagesAmount) {
					$scope.currentPage++;
				}

				console.log($scope.boxAmount, "długość tablicy");
				console.log($scope.pagesAmount, "pagesAmount");
				console.log($scope.iterateFrom, "iterateFrom");
				
				console.log($scope.currentPage);
			}
			$scope.decrementPage = function() {
				if($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			}

		}
	};
}
angular.module('ytApp').directive('displayGallery', ['$http', 'videoData', "$sce",  displayGallery]);