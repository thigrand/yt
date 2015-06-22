describe('Unit: Templates', function() {
	var $httpBackend,
		location,
		route,
		rootScope;

	beforeEach(module('ytApp'));
	beforeEach(module('templates'));
	beforeEach(inject(
		function(_$rootScope_, _$route_, _$location_, _$httpBackend_) {
			location = _$location_;
			rootScope = _$rootScope_;
			route = _$route_;
			$httpBackend = _$httpBackend_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('loads the gallery template at /', function() {
		$httpBackend.expectGET('views/gallery.html')
			.respond(200);
		location.path('/');
		rootScope.$digest();
		$httpBackend.flush();
	});

	it('loads the home template at /', function() {
		$httpBackend.expectGET('views/main.html')
			.respond(200);
		location.path('/');
		rootScope.$digest();
		$httpBackend.flush();
	});



})