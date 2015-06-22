describe("Unit: Testing videoData factory", function() {

  var $httpBackend, $rootScope, videoData;

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

  var videoObject1 = { };
  videoObject1.id = 11111111;
  videoObject1.title = "title";
  videoObject1.stats_number_of_plays = 1234;
  videoObject1.stats_number_of_likes = 123;
  videoObject1.thumbnail_medium = "picture";


describe('should test $http', function() {

      var videoObject = JSON.stringify(videoObject1);

    beforeEach(inject(
      function(
      _$httpBackend_, _$rootScope_, _myService_) {
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;

      videoData = _videoData_;
      }));
      it( 'should make a request to the backend' , function() {

      $httpBackend.expect( 'GET' , 'https://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json' )
      .respond( 200, videoObject);
      
      var spy = jasmine.createSpy();
      var promise = videoData.getData('dzyf1tmFt5Q');
       
      promise.then(spy);
       
      $httpBackend.flush();
       
      expect(spy).to.have.been.called();
    });
  });
});