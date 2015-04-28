'use strict';
function pagination(videoData) {

	var boxPerPage = 10;

	var getArrayForView = function (arrayOfAllVideos, currentPage) {
		var arrayForView = [],
		iterateFrom = currentPage * boxPerPage,
		iterateTo = iterateFrom + boxPerPage;
		arrayForView = arrayOfAllVideos.slice(iterateFrom, iterateTo);

		return arrayForView;
	}	



	this.getArrayForView = getArrayForView;
	return this;
}
angular.module('ytApp').factory('pagination', ['videoData', pagination]);