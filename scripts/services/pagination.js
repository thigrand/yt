function pagination() {

	var boxAmount = 12,//$scope.videoObjects.length;
		boxPerPage = 10,
		currentPage = 0,
		agesAmount = window.Math.floor( boxAmount / boxPerPage),
		iterateFrom = currentPage * boxPerPage;
	
	var incrementPage = function() {
				console.log(currentPage);
				if(pagesAmount > 0 && currentPage < pagesAmount) {
					currentPage++;
				}
				console.log(boxAmount, 'długość tablicy');
				console.log(pagesAmount, 'pagesAmount');
				console.log(iterateFrom, 'iterateFrom');
				
				console.log(currentPage);
			};
	var decrementPage = function() {
		if(currentPage > 0) {
			currentPage--;
		}
	};


	//this.checkUrl = checkUrl;
	return this;
}
angular.module('ytApp').factory('pagination', [ pagination]);