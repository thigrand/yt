'use strict';
function ytAPI() {

	var apiKey = 'AIzaSyDEnxwjeXJlBJ5aDvVT1IO5swoHZkl6E9s';




	function appendResults(text) {
        var results = document.getElementById('results');
        results.appendChild(document.createElement('P'));
        results.appendChild(document.createTextNode(text));
      }

	function makeRequest() {
		var request = gapi.client.urlshortener.url.get({
		  'shortUrl': 'http://goo.gl/fbsS'
		});
		request.then(function(response) {
		  appendResults(response.result.longUrl);
		}, function(reason) {
		  console.log('Error: ' + reason.result.error.message);
		});
	}

	function init() {
		gapi.client.setApiKey(apiKey);
		gapi.client.load('urlshortener', 'v3').then(makeRequest);
	}
	

	// console.log(gapi.config.get);
	return init;

}
angular.module('ytApp').factory('ytAPI', [ytAPI]);