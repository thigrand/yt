describe('Unit: trustAsResourceUrl filter test', function() {
	var filter;

	beforeEach(module('ytApp'));
	beforeEach(inject(function($filter) {
		filter = $filter;
	}));

	it('should return trusted url', function() {
		expect(filter("https://www.youtube.com/watch?v=Nv4Buep3kRc")).to.be.equal("https://www.youtube.com/watch?v=Nv4Buep3kRc");
	});
});