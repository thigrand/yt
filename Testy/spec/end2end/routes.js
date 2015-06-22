describe('E2E: Routes', function() {

	it('should load the index page', function() {
		browser().navigateTo('/#/');
		expect(browser().location().path()).to.be('/');
	})


});