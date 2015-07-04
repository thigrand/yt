'use strict';
function objectNeutralizer() {

	function transformVimeoObject(videoObject) {
		var simpleObject = {
			source : 'vimeo',
			id : videoObject[0].id,
			name : videoObject[0].title,
			viewCount : videoObject[0].stats_number_of_plays,
			likesCount : videoObject[0].stats_number_of_likes,
			thumbnail : videoObject[0].thumbnail_medium,
			baseUrl : 'https://player.vimeo.com/video/',
			playerUrl : 'https://player.vimeo.com/video/' + videoObject[0].id
		};
		return simpleObject;
	}
	function transformYouTubeObject(videoObject) {
		var simpleObject = {
			source : 'youtube',
			id : videoObject.items[0].id,
			name : videoObject.items[0].snippet.title,
			viewCount : videoObject.items[0].statistics.viewCount,
			likesCount : videoObject.items[0].statistics.likeCount,
			thumbnail : videoObject.items[0].snippet.thumbnails.standard.url,
			baseUrl : 'http://www.youtube.com/embed/',
			playerUrl : 'http://www.youtube.com/embed/' + videoObject.items[0].id
		};
		return simpleObject;
	};
	function getData(data) {
			// videoData.getData(ytUrlIds).then(function(data) {
				//console.log(data);
			var arrayOfVideosObjects = [];
			for (var i = 0; i < data.length; i++) {
				//console.log(data[i]);
				if (data[i].pageInfo) {
					arrayOfVideosObjects.push(transformYouTubeObject(data[i]));
				} else {
					arrayOfVideosObjects.push(transformVimeoObject(data[i]));
				};
			}
			// console.log(arrayOfVideosObjects);
			return arrayOfVideosObjects;
			// });
		}
		// var neutralizeObject = function(object) {
		// 	console.log(object);
		// 	var neutrilzed = {};
		// 	if(object.entry) {
		// 		neutrilzed = transformYouTubeObject(object);
		// 	}
		// 	else {
		// 		neutrilzed = transformVimeoObject(object);
		// 	};		
		// 	return neutralized;
		// }
		// this.neutralizeObject = neutralizeObject;
	return {
		getData: getData,
		transformYouTubeObject: transformYouTubeObject,
		transformVimeoObject: transformVimeoObject
	}
}
angular.module('ytApp').factory('objectNeutralizer', [objectNeutralizer]);