'use strict';
function displayGallery($http, videoData, $sce, storage, checkAnchor, localStorageService) {
	return {
		templateUrl:'views/gallery.html',
		link: function($scope, $http) {


        //console.log(localStorageService.keys(), 'local storage keys');
        	
			$scope.ytUrl = '';//take value from input
			$scope.ytUrlIds = storage.getIdsFromStorage() || [];

			$scope.videoObjects = [];
			$scope.baseUrl = 'http://www.youtube.com/embed/';


			$scope.Math = window.Math;
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

			// $scope.getArray = function () {
			// 	return $scope.videoObjects.slice($scope.iterateFrom, $scope.boxPerPage);
			// };


			$scope.addVideo = function() {
				var idFromUrl = checkAnchor.checkUrl($scope.ytUrl);
				if (idFromUrl !== -1){
					$scope.ytUrlIds.push(idFromUrl);
			console.log($scope.ytUrlIds.length);
					console.log(idFromUrl);
					storage.setStorage($scope.ytUrlIds.length-1, idFromUrl);
			console.log(localStorageService.keys());
			console.log($scope.ytUrlIds);
					$scope.ytUrlIds
					getData();
					console.log($scope.ytUrlIds);
				
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
			//czyszczenie storage, dla testow w devie
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
angular.module('ytApp').directive('displayGallery', ['$http', 'videoData', "$sce", 'storage', 'checkAnchor', 'localStorageService',  displayGallery]);