'use strict';

function objectNeutralizer() {

	var transformVimeoObject = function(videoObject) {
		var simpleObject = {};
		simpleObject.source = 'vimeo';
		simpleObject.id = videoObject[0].id;
		simpleObject.name = videoObject[0].title;
		simpleObject.viewCount = videoObject[0].stats_number_of_plays;
		simpleObject.likesCount = videoObject[0].stats_number_of_likes;
		simpleObject.thumbnail = videoObject[0].thumbnail_medium;
		simpleObject.baseUrl = 'https://player.vimeo.com/video/';
		simpleObject.playerUrl = 'https://player.vimeo.com/video/' + videoObject[0].id;

		return simpleObject;
	};
	var transformYouTubeObject = function(videoObject) {
		var simpleObject = {};
		simpleObject.source = 'youtube';
		simpleObject.id = videoObject.entry.media$group.yt$videoid.$t;
		simpleObject.name = videoObject.entry.title.$t;
		simpleObject.viewCount = videoObject.entry.yt$statistics.viewCount;
		simpleObject.likesCount = videoObject.entry.yt$rating.numLikes;
		simpleObject.thumbnail = videoObject.entry.media$group.media$thumbnail[3].url;
		simpleObject.baseUrl = 'http://www.youtube.com/embed/';
		simpleObject.playerUrl = 'http://www.youtube.com/embed/' + videoObject.entry.media$group.yt$videoid.$t;

		return simpleObject;
	};
	var getData = function(data) {
			// videoData.getData(ytUrlIds).then(function(data) {
			var arrayOfVideosObjects = [];
			// console.log(data);
			for (var i = 0; i < data.length; i++) {
				if (data[i].entry) {
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
	this.getData = getData;
	return this;
}
angular.module('ytApp').factory('objectNeutralizer', [objectNeutralizer]);