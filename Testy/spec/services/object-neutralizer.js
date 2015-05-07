describe("Unit: Testing objectNeutralizer factory", function() {

  beforeEach(module('ytApp'));

  it('should contain an objectNeutralizer factory',
    inject(function(objectNeutralizer) {

    expect(objectNeutralizer).not.to.equal(null);
  }));

  it('objectNeutralizer should contain two transform functions and getData function',
    inject(['objectNeutralizer', function(objectNeutralizer) {

    expect(objectNeutralizer.transformVimeoObject).not.to.equal(null);
    expect(objectNeutralizer.transformYouTubeObject).not.to.equal(null);
    expect(objectNeutralizer.getData).not.to.equal(null);
    
  }));
    var videoObject1 = {},
        videoObject2.entry = {};

    videoObject1[0].id = 11111111;
    videoObject1[0].title = "title";
    videoObject1[0].stats_number_of_plays = 1234;
    videoObject1[0].stats_number_of_likes = 123;
    videoObject1[0].thumbnail_medium = "picture";


    videoObject2.entry.id = 22222222222;
    videoObject2.entry.name = "title";
    videoObject2.entry.viewCount = 1234;
    videoObject2.entry.likesCount = 123;
    videoObject2.entry.thumbnail = "picture";


  it('should return neutralized object from vimeo ',
    inject(['objectNeutralizer', function(objectNeutralizer) {

    expect(objectNeutralizer.transformVimeoObject(videoObject1).source).to.equal("vimeo");
    expect(objectNeutralizer.transformVimeoObject(videoObject1).id).to.equal(11111111);
    expect(objectNeutralizer.transformVimeoObject(videoObject1).name).to.equal("title");
    expect(objectNeutralizer.transformVimeoObject(videoObject1).viewCount).to.equal("1234");
    expect(objectNeutralizer.transformVimeoObject(videoObject1).likesCount).to.equal("123");
    expect(objectNeutralizer.transformVimeoObject(videoObject1).thumbnail).to.equal("picture");
    expect(objectNeutralizer.transformVimeoObject(videoObject1).baseUrl).to.equal("https://player.vimeo.com/video/");
    expect(objectNeutralizer.transformVimeoObject(videoObject1).playerUrl).to.equal("https://player.vimeo.com/video/11111111");
  }));

  it('should return neutralized object from youtube ',
    inject(['objectNeutralizer', function(objectNeutralizer) {

    expect(objectNeutralizer.transformVimeoObject(videoObject2).source).to.equal("youtube");
    expect(objectNeutralizer.transformVimeoObject(videoObject2).id).to.equal(22222222222);
    expect(objectNeutralizer.transformVimeoObject(videoObject2).name).to.equal("title");
    expect(objectNeutralizer.transformVimeoObject(videoObject2).viewCount).to.equal("1234");
    expect(objectNeutralizer.transformVimeoObject(videoObject2).likesCount).to.equal("123");
    expect(objectNeutralizer.transformVimeoObject(videoObject2).thumbnail).to.equal("picture");
    expect(objectNeutralizer.transformVimeoObject(videoObject2).baseUrl).to.equal("http://www.youtube.com/embed/");
    expect(objectNeutralizer.transformVimeoObject(videoObject2).playerUrl).to.equal("http://www.youtube.com/embed/22222222222");
  }));


  it('should return an array of ',
    inject(['objectNeutralizer', function(objectNeutralizer) {
    var data = [videoObject1, videoObject2],
        neutralizedObjectsArray = objectNeutralizer.getData(data);

    expect(neutralizedObjectsArray.length).to.equal(2);
    expect(neutralizedObjectsArray[0].source).to.equal("vimeo");
    expect(neutralizedObjectsArray[1].source).to.equal("youtube");


  }]));

});