function checkAnchor() {
	var takeIdFromUrl = function (url, switcher) {
		var videoId = "";

		if(switcher === 1){
			videoId = url;
		}
		if(switcher === 2) {
			videoId = url.substring(17, 28);
		}
		if(switcher === 3) {
			videoId = url.split('v=')[1];
			var ampersandPosition = videoId.indexOf('&');//to
			if(ampersandPosition !== -1) {
				videoId = videoId.substring(0, ampersandPosition);
			}
		}
		return (videoId )? videoId : -1;
	};
	var checkUrl = function(url) {
		var isGood = url,
			goodUrl = -1;
		if(url.length === 11) { 
			goodUrl = url;
		}
		if(url.length >= 11 && url.substring(0, 17) === "https://youtu.be/") {
			goodUrl = takeIdFromUrl(url, 2);
		}
		if(url.length >= 11 && url.substring(0, 24) === "https://www.youtube.com/") {
			goodUrl = takeIdFromUrl(url, 3);
		}
		return (goodUrl)? goodUrl : -1;
	};

	

	this.checkUrl = checkUrl;
	return this;
}
angular.module('ytApp').factory('checkAnchor', [ checkAnchor]);