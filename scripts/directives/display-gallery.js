'use strict';

function displayGallery(storage, checkAnchor, localStorageService, pagination, videoData, objectNeutralizer) {
	return {
		templateUrl: 'views/gallery.html',
		scope: {
			ytUrl: '=',
			ytUrlIds: '=',
			videoObject: '=',
			currentVideoPage: '='
		},
		bindToController: {
			ytUrl: '=',
			ytUrlIds: '=',
			videoObject: '=',
			currentVideoPage: '='
		},
		controller:  'videoCaster as vidcast', 
		link: function($scope) {
			
			// $scope.cleare = function() {
			// 	localStorageService.clearAll();
			// 	console.log(localStorageService.keys(), 'local storage keys'); //do czyszczenia storage w okresie dev. 
			// };
			// $scope.ytUrl = ''; //take value from input
			// $scope.ytUrlIds = storage.getIdsFromStorage();
			// $scope.videoObjects = [];
			// $scope.currentVideoPage = [];
			// console.log(videoCaster.tekst);
			// var getData = function() {
			// 	videoData.getData($scope.ytUrlIds).then(function(data) {
			// 		$scope.videoObjects = objectNeutralizer.getData(data);
			// 		$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);// || objectNeutralizer.getData(data);
			// 		//console.log($scope.videoObjects);
			// 		//console.log($scope.currentVideoPage);
			// 	});
			// };
			// getData();
			// $scope.closeBox = function(boxIndex) {
			// 	var keysOfStorage = localStorageService.keys().sort(numbersComparator);
			// 	localStorageService.remove(keysOfStorage[boxIndex]);
			// 	$scope.ytUrlIds = storage.getIdsFromStorage();
			// };
			// var numbersComparator = function(a, b) {
			// 	return a - b;
			// };
			// $scope.lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
			// $scope.addVideo = function() {
			// 	var idFromUrl = checkAnchor.checkUrl($scope.ytUrl);
			// 	if (idFromUrl !== -1) {
			// 		$scope.ytUrlIds.push(idFromUrl);
			// 		storage.setStorage($scope.lastLsNumber++, idFromUrl);
			// 		getData();
			// 	} else {
			// 		alert('Błędny adres linka.');
			// 	}
			// };

			// var currentPage = 0;
			// var videosAmount = $scope.ytUrlIds.length;
			// var boxPerPage = 10,
			// 	pagesAmount = window.Math.floor(videosAmount / boxPerPage) + 1;

			// $scope.incrementPage = function() {
			// 	console.log(currentPage);
			// 	if (currentPage < pagesAmount) {
			// 		currentPage++;
			// 		$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);
			// 	}
			// };
			// $scope.decrementPage = function() {
			// 	if (currentPage > 0) {
			// 		currentPage--;
			// 		$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);
			// 	}
			// };
			
		}
	};
}
angular
	.module('ytApp')
	.directive('displayGallery', ['storage', 'checkAnchor', 'localStorageService', 'pagination', 'videoData', 'objectNeutralizer',  displayGallery]);
