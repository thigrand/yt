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
	
		}
	};
}
angular
	.module('ytApp')
	.directive('displayGallery', ['storage', 'checkAnchor', 'localStorageService', 'pagination', 'videoData', 'objectNeutralizer',  displayGallery]);
