'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function MainCtrl(objectNeutralizer, videoData, storage, videoData2, checkAnchor, pagination, $scope) {


	var main = this;
	main.ytUrl = ''; //take value from input
	main.ytUrlIds = storage.getIdsFromStorage();
	main.videoObjects = [];
	main.currentVideoPage = [];

console.log(main.ytUrlIds, "ytUrlIds");

	main.getData = function() {
		videoData.getData(main.ytUrlIds).then(function(data) {
			main.videoObjects = objectNeutralizer.getData(data);
			main.currentVideoPage = pagination.getArrayForView(main.videoObjects, currentPage);// || objectNeutralizer.getData(data);
			// console.log(main.videoObjects);
			// console.log( main.currentVideoPage);
		});
	};

var currentPage = 0;
	main.lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
	main.addVideo = function() {
		console.log('start');
		var idFromUrl = checkAnchor.checkUrl(main.ytUrl);
		console.log(main.ytUrlIds.length);
		if (idFromUrl !== -1) {
			main.ytUrlIds.push(idFromUrl);
			storage.setStorage(main.lastLsNumber++, idFromUrl);

			main.getData();
			
			console.log('ogarniam film');
		} else {
			alert('Błędny adres linka.');
			console.log('błąd');
		}
		console.log('koniec');
		console.log(main.ytUrlIds.length);
	};


}
angular
.module('ytApp')
.controller('MainCtrl', ['objectNeutralizer', 'videoData', 'storage', 'videoData2', 'checkAnchor', 'pagination', '$scope', MainCtrl]);
// angular.module('ytApp').controller('MainCtrl', ['$scope', '$log',  MainCtrl]);

