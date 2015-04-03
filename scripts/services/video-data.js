'use strict';
function videoData($http, $q) {
	function getDataFromYT(videosID){
		var deffered = $q.defer();
		var videoObjects = [];
		for(var i = 0; i < videosID.length; i++) {
			$http.get('https://gdata.youtube.com/feeds/api/videos/'+videosID[i]+'?v=2&alt=json').
			success(function(data, status, headers, config) {
				videoObjects.push(JSON.parse(JSON.stringify(data)));

				deffered.resolve(videoObjects);
			}).
			error(function(data, status, headers, config) {
				alert("Jakiś błąd pobrania danych");
			});
		}
		return deffered.promise;
	}
	this.getDataFromYT = getDataFromYT;
	return this;
}
angular.module('ytApp').factory('videoData', ['$http', '$q', videoData]);