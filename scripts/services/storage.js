function storage(localStorageService) {

	var getIdsFromStorage = function () {
		//wez wszystkie elementy ze storage i przypisz do nowej 
		var idsFromStorage = [];
		for(var key in localStorageService.keys()) { //for(var i = 0; i < localStorageService.length() ; i++)
			idsFromStorage.push(localStorageService.get(key));
		}					
		console.log(idsFromStorage, 'idsFromStorage');
		return idsFromStorage;
	};	

	var setStorage = function (key, val) {
		return localStorageService.set(key, val);
	};

	this.getIdsFromStorage = getIdsFromStorage;
	this.setStorage = setStorage;
	return this;
}
angular.module('ytApp').factory('storage', ['localStorageService', storage]);