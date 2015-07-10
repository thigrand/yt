'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function videoCaster( $http, videoData, storage, videoData2, checkAnchor, objectNeutralizer, pagination, localStorageService, $scope) {
// function MainCtrl($vidcast, $log) {
	var vidcast = this;
	vidcast.ytUrl = ''; //take value from input
	vidcast.ytUrlIds = storage.getIdsFromStorage() || "bamboocha";
	vidcast.videoObjects = [];
	vidcast.currentVideoPage = [];
	// vidcast.videoToPlay = vidcast.play ;
	vidcast.play = function (url) {
		vidcast.videoToPlay = url;
		return url;
	}

 	// videoData2.getData(vidcast.ytUrlIds); 
 	$scope.$watch('vidcast.currentVideoPage', function( newValue, oldValue){

 	})

	var getData = function() {
		
		videoData.getData(vidcast.ytUrlIds).then(function(data) {
			vidcast.videoObjects = objectNeutralizer.getData(data);
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);// || objectNeutralizer.getData(data);
			// console.log(vidcast.videoObjects);
			// console.log( vidcast.currentVideoPage);
		});
	};
	getData();
	vidcast.closeBox = function(boxIndex) {
		var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		localStorageService.remove(keysOfStorage[boxIndex]);
		vidcast.ytUrlIds = storage.getIdsFromStorage();
	};
	var numbersComparator = function(a, b) {
		return a - b;
	};
	// vidcast.lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
	// vidcast.addVideo = function() {
	// 	console.log("start");
	// 	var idFromUrl = checkAnchor.checkUrl(vidcast.ytUrl);
	// 	console.log(vidcast.ytUrlIds.length);
	// 	if (idFromUrl !== -1) {
	// 		vidcast.ytUrlIds.push(idFromUrl);
	// 		storage.setStorage(vidcast.lastLsNumber++, idFromUrl);

	// 		getData();
			
	// 		console.log("ogarniam film");
	// 	} else {
	// 		alert('Błędny adres linka.');
	// 		console.log("błąd");
	// 	}
	// 	console.log("koniec");
	// 	console.log(vidcast.ytUrlIds.length);
	// };

	var currentPage = 0;
	var videosAmount = vidcast.ytUrlIds.length;
	var boxPerPage = 10,
		pagesAmount = window.Math.floor(videosAmount / boxPerPage) + 1;

	vidcast.incrementPage = function() {
		console.log(currentPage);
		console.log(videosAmount);
		console.log(pagesAmount);
		
		if (currentPage < pagesAmount) {
			currentPage++;
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);
		}
	};
	vidcast.decrementPage = function() {
		if (currentPage > 0) {
			currentPage--;
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);
		}
	};
	

}
angular
	.module('ytApp')
	.controller('videoCaster', ['$http', 'videoData', 'storage', 'videoData2', 'checkAnchor', 'objectNeutralizer', 'pagination', 'localStorageService', '$scope', videoCaster]);
// angular.module('ytApp').controller('MainCtrl', ['$vidcast', '$log',  MainCtrl]);

