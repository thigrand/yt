'use strict';
function storage(localStorageService) {

	var getIdsFromStorage = function () {
		//wez wszystkie elementy ze storage i przypisz do nowej 
		var idsFromStorage = [];
		var keysOfStorage = localStorageService.keys();

		//console.log(localStorageService.keys(), "localStorageService.keys()");
		for(var key in localStorageService.keys()) { //key 
			idsFromStorage.push(localStorageService.get(keysOfStorage[key]));
			//console.log(localStorageService.get(keysOfStorage[key]), "localStorageService.get(keysOfStorage[key])");
		}					
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