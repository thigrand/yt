'use strict';
function dataFromYT($http, $q) {
	var YOUR_API_KEY = 'AIzaSyDEnxwjeXJlBJ5aDvVT1IO5swoHZkl6E9s',
		BASE_API_URL = 'https://www.googleapis.com/youtube/v3/videos?id=',
		AUTORISATION_KEY = '&key=',
		API_FILTER = '&part=snippet,statistics';

	function get(id) {
		var deferred = $q.defer();
		$http.get(BASE_API_URL + id + AUTORISATION_KEY + YOUR_API_KEY + API_FILTER).
			success(function(data) {
			// console.log(data);
				var videoObject = JSON.parse(JSON.stringify(data));
				deferred.resolve(videoObject);
			}).
			error(function(data) {
				alert("Jakiś błąd pobrania danych z youtube");
			});

		return deferred.promise;
	}
	
	function transformYouTubeObject(videoObject) {
		var simpleObject = {};
		simpleObject.source = 'youtube';
		simpleObject.id = videoObject.items[0].id;
		simpleObject.name = videoObject.items[0].snippet.title;
		simpleObject.viewCount = videoObject.items[0].statistics.viewCount;
		simpleObject.likesCount = videoObject.items[0].statistics.likeCount;
		simpleObject.thumbnail = videoObject.items[0].snippet.thumbnails.standard.url;
		simpleObject.baseUrl = 'http://www.youtube.com/embed/';
		simpleObject.playerUrl = 'http://www.youtube.com/embed/' + videoObject.items[0].id;

		return simpleObject;
	};
	return {
		get: get
	}
}
angular.module('youtubeModule').factory('dataFromYT', ['$http','$q', dataFromYT]);
