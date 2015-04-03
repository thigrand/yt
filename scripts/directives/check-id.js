'use strict';
function checkID() {
	return {
		link: function(scope, element) {
			var exampeID = "vJ3a_AuEW18";
			var exampleURL = "https://youtu.be/vJ3a_AuEW18";
			scope.consd = function () {
				console.log("dsa");
			};
			
			

		}
	};
}
angular.module("ytApp").directive('checkID', [checkID])