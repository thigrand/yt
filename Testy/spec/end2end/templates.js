describe('E2E: Views', function() {

	beforeEach(function() {
		browser().navigateTo('#/')
	});

//wpisanie do inputa wartości spowoduje dodanie elementu
	it('should load the home template', function(){
		expect(element())
	});

	var videosList = [
	    ['https://www.youtube.com/watch?v=Nv4Buep3kRc'],
	    ['https://www.youtube.com/watch?v=zNj1qBkCsrY'],
	    ['https://www.youtube.com/watch?v=CXC_eqw-GcI'],
	    ['https://www.youtube.com/watch?v=SQdpENFZiFE'],
	    ['https://www.youtube.com/watch?v=bxQKd_jOQXY']
	];
	var exampleVideo = 'https://www.youtube.com/watch?v=Nv4Buep3kRc';

  	it('should list all videos', function() {
        expect(repeater('#gall li').count()).to.equal(videosList.length);

	    for (var i = 0; i < videosList.length; i++) {
	      expect(repeater('#gall li').row(i)).toEqual(videosList[i]);
	    }
  	});
	it('should display main header ', function(){
	  	expect(element('#top-header h1').text()).to.contain('The 5by AngularJS Challenge');
	});

	it('should display gallery header ', function(){
	  	expect(element('#gallery h1').text()).to.contain('The 5by AngularJS Challenge');
	});

	it('should have input and submit button ', function(){
	  	expect(element('input #link-taker').html()).to.exist;
	  	expect(element('input #submit').html()).to.exist;
	});

	it('should have pagination buttons ', function(){
	  	expect(element('input #dec-butt').html()).to.exist;
	  	expect(element('input #inc-butt').html()).to.exist;
	});

	it("entering example url and performing click", function() {
	    input('input #link-taker').enter(exampleVideo);
	    element('button').click();
    });


	it('should add a video box to gallery', function() {
		expect(element('#gall li').count()).to.equal(1);
	});
	
	it('should add a thumbnail, title and likes/views counters', function() {
		expect(element('#thumbnail')).to.exist;
		expect(element('#video-data li[0] span')).to.contain("W Krainie Odżywek - Kupowanie Supli");
	

		// expect(element('#video-data li[1] span')).to.be.above(66 162);
		// expect(element('#video-data li[2] span')).to.be.above(807);
	});
	it('should open modal after click on modal', function() {
		//open modal
		element('#thumbnail img').click();
		expect(element('#myModal-1:visible').count()).to.equal(1);
		//play
		element('#thumbnail img').click();
		//stop
		element('#thumbnail img').click();
		//close modal
		element('.modal-footer button').click();
		
	});

	it('should remove the box after closing', function() {
		element('#closebox').click();
		expect(element('#gall li').count()).to.equal(0);

	});


});