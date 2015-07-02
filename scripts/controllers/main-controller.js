'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function MainCtrl($scope, $http, videoData, storage, videoData2, checkAnchor) {
// function MainCtrl($scope, $log) {

	$scope.ytUrl = ''; //take value from input
	$scope.ytUrlIds = storage.getIdsFromStorage();
	$scope.videoObjects = [];
	$scope.currentVideoPage = [];

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
	//  function ab() {
	// 	alert("ds");
	// }
	// ab();
	// console.log($scope);
	// 		var getData = function() {
	// 			videoData.getData($scope.ytUrlIds).then(function(data) {
	// 				$scope.videoObjects = objectNeutralizer.getData(data);
	// 				$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);// || objectNeutralizer.getData(data);
	// 				console.log($scope.videoObjects);
	// 				//console.log($scope.currentVideoPage);
	// 			});
	// 		};

 	videoData2.getData($scope.ytUrlIds);
 $scope.test = function( ){
 	console.log("sdmo")
 }
 $scope.$log = $log.log("ds");	

}
angular.module('ytApp').controller('MainCtrl', ['$scope', '$http', 'videoData', 'storage', 'videoData2', 'checkAnchor',  MainCtrl]);
// angular.module('ytApp').controller('MainCtrl', ['$scope', '$log',  MainCtrl]);
