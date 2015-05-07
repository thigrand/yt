describe("Unit: Testing pagination factory", function() {

  beforeEach(module('ytApp'));

  it('should contain an pagination factory',
    inject(function(pagination) {

    expect(pagination).not.to.equal(null);
  }));

  it('pagination should contain getArrayForView function',
    inject(['pagination', function(pagination) {

    expect(pagination.getArrayForView).not.to.equal(null);
  }));

  it('should return array of objects for one page (10 elements)',
    inject(['pagination', function(pagination) {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        currentpage = 0,
        arrayForView = pagination.getArrayForView(array, currentpage);

    expect(arrayForView).to.have.length(10);
    currentpage = 1;
    arrayForView = pagination.getArrayForView(array, currentpage);
    expect(arrayForView.length).to.have.length(6);


  }));


});