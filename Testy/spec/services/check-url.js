describe("Unit: Testing checkAnchor factory", function() {

  beforeEach(module('ytApp'));

  it('should contain an checkAnchor factory',
    inject(function(checkAnchor) {

    expect(checkAnchor).not.to.equal(null);
  }));

  it('checkAnchor should contain an takeIdFromUrl and checkUrl function',
    inject(['checkAnchor', function(checkAnchor) {

    expect(checkAnchor.takeIdFromUrl).not.to.equal(null);
    expect(checkAnchor.checkUrl).not.to.equal(null);
  }));


  it('checkAnchor should contain an takeIdFromUrl and checkUrl function',
    inject(['checkAnchor', function(checkAnchor) {

    expect(checkAnchor.takeIdFromUrl).not.to.equal(null);
    expect(checkAnchor.checkUrl).not.to.equal(null);
  }));

  var exampleUrl1 = 'https://www.youtube.com/watch?v=4JOAqRS_lms';
  var exampleUrl2 = 'https://youtu.be/vJ3a_AuEW18';
  var exampleUrl3 = '0ud9SFlvRQc';
  var exampleUrl4 = 'https://vimeo.com/80523173';
  var exampleUrl5 = '124740781';
  var exampleUrl6 = "vdas";

  it('should return video ID or "-1" when url was incorrect',
    inject(['checkAnchor', function(checkAnchor) {


    expect(checkAnchor.checkUrl(exampleUrl1)).to.equal("4JOAqRS_lms");
    expect(checkAnchor.checkUrl(exampleUrl2)).to.equal("vJ3a_AuEW18");
    expect(checkAnchor.checkUrl(exampleUrl3)).to.equal("0ud9SFlvRQc");
    expect(checkAnchor.checkUrl(exampleUrl4)).to.equal("80523173");
    expect(checkAnchor.checkUrl(exampleUrl5)).to.equal("124740781");
    expect(checkAnchor.checkUrl(exampleUrl6)).to.equal(-1);
  }));


  it('should get url and return video ID or "-1" when url was incorrect',
    inject(['checkAnchor', function(checkAnchor) {

    expect(checkAnchor.takeIdFromUrl(exampleUrl1, 3)).to.equal("4JOAqRS_lms");
    expect(checkAnchor.takeIdFromUrl(exampleUrl2, 2)).to.equal("vJ3a_AuEW18");
    expect(checkAnchor.takeIdFromUrl(exampleUrl3, 1)).to.equal("0ud9SFlvRQc");
    expect(checkAnchor.takeIdFromUrl(exampleUrl4, 6)).to.equal("80523173");
    expect(checkAnchor.takeIdFromUrl(exampleUrl5, 1)).to.equal("124740781");
    expect(checkAnchor.takeIdFromUrl(exampleUrl6, 1)).to.equal(-1);
  }]));

});