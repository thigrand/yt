'use strict';
function videoData($http, $q) {
	// function getDataFromYT(videosID){
	// 	var deffered = $q.defer();
	// 	var videoObjects = [];
	// 	console.log(videosID, 'videosID');
	// 	for(var i = 0; i < videosID.length; i++) {
	// 		$http.get('https://gdata.youtube.com/feeds/api/videos/'+videosID[i]+'?v=2&alt=json').
	// 		success(function(data, status, headers, config) {
	// 			videoObjects.push(JSON.parse(JSON.stringify(data)));

	// 			deffered.resolve(videoObjects);
	// 		}).
	// 		error(function(data, status, headers, config) {
	// 			alert("Jakiś błąd pobrania danych");
	// 		});
	// 	}
	// 	return deffered.promise;
	// }
	var YOUR_API_KEY = 'AIzaSyDEnxwjeXJlBJ5aDvVT1IO5swoHZkl6E9s';

	

	function getDataFromYT(id) {
	    var deffered = $q.defer();
	    if(id.length === 11) {
		    $http.get('https://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json').
		 //$http.get('https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet%2C+player%2C+statistics&id='+id+'&fields=items(id%2Cplayer%2Csnippet%2Cstatistics)&key={'+YOUR_API_KEY+'}'). // https://developers.google.com/youtube/v3/docs/videos/list#try-it
					success(function(data, status, headers, config) {
						var videoObject = JSON.parse(JSON.stringify(data));
						//var videoObject = data;
						deffered.resolve(videoObject);
					}).
					error(function(data, status, headers, config) {
						alert("Jakiś błąd pobrania danych z youtube");
					});
		}
		if(id.length === 9) {
		   vimeo
		   $http.jsonp('http://vimeo.com/api/v2/video/'+id+'.json?callback=JSON_CALLBACK&_=' + (new Date().getTime())).//https://api.vimeo.com/'+id+'').
		   success(function(data, status, headers, config) {
						var videoObject = JSON.parse(JSON.stringify(data));
						//var videoObject = data;
						deffered.resolve(videoObject);
					}).
					error(function(data, status, headers, config) {
						alert("Jakiś błąd pobrania danych z vimeo");
					});
		} 


	    return deffered.promise;
	}


	function getData(videosID){
		var videoObjects = [];

		for(var i = 0; i < videosID.length; i++) {
			videoObjects.push(getDataFromYT(videosID[i]));
			//videoObjects.push("getDataFromYT(videosID[i])");
		}
		return $q.all(videoObjects);
	}

	this.getData = getData;
	return this;
}
angular.module('ytApp').factory('videoData', ['$http', '$q', videoData]);

