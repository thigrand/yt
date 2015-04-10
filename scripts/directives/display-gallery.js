'use strict';
function displayGallery($http, videoData, $sce, localStorageService) {
	return {
		templateUrl:'views/gallery.html',
		link: function($scope, $http) {

			var getIdsFromStorage = function () {
				//wez wszystkie elementy ze storage i przypisz do nowej 
				var idsFromStorage = [];
				for(var key in localStorageService.keys()) { //for(var i = 0; i < localStorageService.length() ; i++)
					idsFromStorage.push(localStorageService.get(key));
				}					
				return idsFromStorage;
			};	
           console.log(localStorageService.keys(), 'local storage keys');

			$scope.Math = window.Math;
			$scope.ytUrl = '';//take value from input
			$scope.ytUrlIds = getIdsFromStorage() ;
			console.log($scope.ytUrlIds, 'tablica id');
			$scope.videoObjects = [];
			$scope.baseUrl = 'http://www.youtube.com/embed/';

			$scope.boxAmount = 12;//$scope.videoObjects.length;
			$scope.boxPerPage = 10;
			$scope.currentPage = 0;
			$scope.pagesAmount = $scope.Math.floor( $scope.boxAmount / $scope.boxPerPage);
			$scope.iterateFrom = $scope.currentPage * $scope.boxPerPage;
			
			var getData = function() {
				videoData.getDataFromYT($scope.ytUrlIds).then(function(data) {
			$scope.videoObjects = data;//videoData.getDataFromYT($scope.ytUrlIds);
				});
			};
			getData();
			$scope.getArray = function () {
				return $scope.videoObjects.slice($scope.iterateFrom, $scope.boxPerPage);
			};

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
					if(ampersandPosition !== -1) {
						videoId = videoId.substring(0, ampersandPosition);
					}
				}
				return (videoId )? videoId : -1;
			};
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
			};
			$scope.setStorage = function (key, val) {
				return localStorageService.set(key, val);
			};
			$scope.addVideo = function() {
				var idFromUrl = $scope.checkUrl($scope.ytUrl);
				if (idFromUrl !== -1){
					$scope.ytUrlIds.push(idFromUrl);
					console.log($scope.ytUrlIds.length);
					console.log(idFromUrl);
					$scope.setStorage($scope.ytUrlIds.length-1, idFromUrl);
					console.log(localStorageService.keys());
					videoData.getDataFromYT($scope.ytUrlIds).then(function(data) {
						$scope.videoObjects = data;//videoData.getDataFromYT($scope.ytUrlIds);
					});
				}
				else {
					alert('Cebuuula normalnie, buractwo');
				}
			};
			$scope.closeBox = function(boxIndex) {
				$scope.ytUrlIds.pop(boxIndex);
				localStorageService.remove(boxIndex);
			};

			//do poprawy
			$scope.incrementPage = function() {
				console.log($scope.currentPage);
				if($scope.pagesAmount > 0 && $scope.currentPage < $scope.pagesAmount) {
					$scope.currentPage++;
				}
				console.log($scope.boxAmount, 'długość tablicy');
				console.log($scope.pagesAmount, 'pagesAmount');
				console.log($scope.iterateFrom, 'iterateFrom');
				
				console.log($scope.currentPage);
			};
			$scope.decrementPage = function() {
				if($scope.currentPage > 0) {
					$scope.currentPage--;
				}
			};

            $scope.cleare = function() {
            	localStorageService.clearAll();
            	console.log(localStorageService.keys(), 'local storage keys');
            };

            $scope.getIframeSrc = function(id) {
				var scr = "http://www.youtube.com/embed/" + id;
				return $sce.trustAsResourceUrl(src);
			};
		}
	};
}
angular.module('ytApp').directive('displayGallery', ['$http', 'videoData', "$sce", "localStorageService",  displayGallery]);