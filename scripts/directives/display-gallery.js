'use strict';

function displayGallery($q, videoData, $sce, storage, checkAnchor, localStorageService, pagination, objectNeutralizer) {
	return {
		templateUrl: 'views/gallery.html',
		link: function($scope) {

			$scope.cleare = function() {
				localStorageService.clearAll();
				console.log(localStorageService.keys(), 'local storage keys'); //do czyszczenia storage w okresie dev. 
			};

			$scope.modals = {};
			$scope.ytUrl = ''; //take value from input
			$scope.ytUrlIds = storage.getIdsFromStorage();
			console.log(localStorageService.keys());
			console.log($scope.ytUrlIds);
			$scope.videoObjects = [];
			$scope.currentVideoPage = [];

			var getData = function() {
				videoData.getData($scope.ytUrlIds).then(function(data) {
					$scope.videoObjects = objectNeutralizer.getData(data);
					$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);
					console.log($scope.videoObjects);
					// $scope.videoObjects = data;//przypisany jest obiekt z właściwościami zawierajacymi obiekty do kazdego filmiku
					// $scope.currentVideoPage = pagination.getArrayForView(data, currentPage);
				});
			};
			getData();
			$scope.closeBox = function(boxIndex) {
				var keysOfStorage = localStorageService.keys().sort(numbersComparator);
				// console.log(boxIndex, "boxIndex");
				// console.log(keysOfStorage, "keysOfStorage");
				// console.log(keysOfStorage[boxIndex], "keysOfStorage[boxIndex]");
				localStorageService.remove(keysOfStorage[boxIndex]);
				$scope.ytUrlIds = storage.getIdsFromStorage();
				// console.log(localStorageService.keys(), "localStorageService.keys()");
				// console.log(localStorageService.keys().sort(numbersComparator), "localStorageService.keys()");
				// console.log($scope.ytUrlIds, "$scope.ytUrlIds");
			};
			var numbersComparator = function(a, b) {
				return a - b
			}
			$scope.lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
			$scope.addVideo = function() {
				var idFromUrl = checkAnchor.checkUrl($scope.ytUrl);
				if (idFromUrl !== -1) {
					$scope.ytUrlIds.push(idFromUrl);
					// console.log(idFromUrl);
					storage.setStorage($scope.lastLsNumber++, idFromUrl);
					// console.log(localStorageService.keys());
					// console.log(localStorageService.keys().sort(numbersComparator), "localStorageService.keys().sort");
					// console.log($scope.ytUrlIds);
					getData();
				} else {
					alert('Cebuuula normalnie, buractwo');
				}
			};

			var currentPage = 0;
			var videosAmount = $scope.ytUrlIds.length;
			var boxPerPage = 10,
				pagesAmount = window.Math.floor(videosAmount / boxPerPage) + 1;
			$scope.incrementPage = function() {
				console.log(currentPage);
				if (currentPage < pagesAmount) {
					currentPage++;
					$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);
				}

			};
			$scope.decrementPage = function() {
				if (currentPage > 0) {
					currentPage--;
					$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);
				}

			};
		}
	};
}
angular.module('ytApp').directive('displayGallery', ['$q', 'videoData', "$sce", 'storage', 'checkAnchor', 'localStorageService', 'pagination', 'objectNeutralizer', displayGallery]);