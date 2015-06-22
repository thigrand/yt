describe("Unit: Testing displayGallery directive", function() {
	var ele, scope;

	beforeEach(module('ytApp'));
	beforeEach(module('templates'));
	beforeEach(inject(function($compile, $rootScope) {
		scope = $rootScope;
		//create and compile element
		ele = angular.element(
			'<div display-gallery ></div>');
		$compile(ele)(scope);
	}));



});