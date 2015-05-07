describe("Unit: Testing videoData factory", function() {

  var $httpBackend, authRequestHandler;

  beforeEach(module('ytApp'));

  it('should contain an videoData factory',
    inject(function(videoData) {

    expect(videoData).not.to.equal(null);
  }));

  it('should contain getArrayForView function',
    inject(['videoData'], function(videoData) {

    expect(videoData.getDataFromYT).not.to.equal(null);
    expect(videoData.getData).not.to.equal(null);
    
  }));

  videoObject1[0] = { };
  videoObject1[0].id : 11111111;
  videoObject1[0].title : "title";
  videoObject1[0].stats_number_of_plays : 1234;
  videoObject1[0].stats_number_of_likes : 123;
  videoObject1[0].thumbnail_medium : "picture";

  beforeEach(inject(function($injector) {
     // Set up the mock http service responses
     $httpBackend = $injector.get('$httpBackend');
     // backend definition common for all tests
     authRequestHandler = $httpBackend.when('GET', 'https://gdata.youtube.com/feeds/api/videos/vJ3a_AuEW18?v=2&alt=json')
                            .respond({videoObject1[0]});


});