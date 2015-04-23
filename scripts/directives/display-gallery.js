'use strict';
function displayGallery($http, videoData, $sce, storage, checkAnchor, localStorageService) {
	return {
		templateUrl:'views/gallery.html',
		link: function($scope, $http) {

			$scope.cleare = function() {
            	localStorageService.clearAll();
            	console.log(localStorageService.keys(), 'local storage keys');
 			};
			$scope.closeBox = function(boxIndex) {

				var keysOfStorage = localStorageService.keys();
				console.log(boxIndex, "boxIndex");
				console.log(keysOfStorage, "keysOfStorage");
				console.log(keysOfStorage[boxIndex], "keysOfStorage[boxIndex]");
				localStorageService.remove(keysOfStorage[boxIndex]);
				$scope.ytUrlIds = storage.getIdsFromStorage() ;//tu jest coś nie tak.
				//getData();
				console.log(localStorageService.keys(), "localStorageService.keys()");
				console.log($scope.ytUrlIds, "$scope.ytUrlIds");
			};
        	$scope.modals = {};


			$scope.ytUrl = '';//take value from input
			
			$scope.ytUrlIds = storage.getIdsFromStorage() ;
			console.log(localStorageService.keys());
			console.log($scope.ytUrlIds);

			$scope.videoObjects = [];
			$scope.baseUrl = 'http://www.youtube.com/embed/';
			$scope.baseUrlVimeo = 'https://player.vimeo.com/video/';


			$scope.Math = window.Math;
			$scope.boxAmount = 12;//$scope.videoObjects.length;
			$scope.boxPerPage = 10;
			$scope.currentPage = 0;
			$scope.pagesAmount = $scope.Math.floor( $scope.boxAmount / $scope.boxPerPage);
			$scope.iterateFrom = $scope.currentPage * $scope.boxPerPage;
			



			var getData = function() {
				videoData.getData($scope.ytUrlIds).then(function(data) {
					$scope.videoObjects = data;//przypisany jest obiekt z właściwościami zawierajacymi obiekty do kazdego filmiku
				});
				
			};
			getData();

			// $scope.getArray = function () {
			// 	return $scope.videoObjects.slice($scope.iterateFrom, $scope.boxPerPage);
			// };

			$scope.lastLsNumber = 1;
			$scope.addVideo = function() {
				var idFromUrl = checkAnchor.checkUrl($scope.ytUrl);
				
				if (idFromUrl !== -1){
					$scope.ytUrlIds.push(idFromUrl);

					console.log(idFromUrl);
					storage.setStorage($scope.lastLsNumber++, idFromUrl);
					
			console.log(localStorageService.keys());
			console.log($scope.ytUrlIds);
					//$scope.ytUrlIds
					getData();
					console.log($scope.ytUrlIds);
				
				}
				else {
					alert('Cebuuula normalnie, buractwo');
				}
			};
			


			//do poprawy
			//czyszczenie storage, dla testow w devie

			$scope.passToModal = function(obj, index) {

			console.log(obj);
			console.log(index);
			console.log($scope.modals);

				$scope.modals.video = obj;
				$scope.modals.index = index;
			console.log($scope.modal.video);
			console.log($scope.modal.index);
			return $scope.modals;
			};



            $scope.getIframeSrc = function(id) {
				var scr = "http://www.youtube.com/embed/" + id;
				return $sce.trustAsResourceUrl(src);
			};
		}
	};
}
angular.module('ytApp').directive('displayGallery', ['$http', 'videoData', "$sce", 'storage', 'checkAnchor', 'localStorageService',  displayGallery]);