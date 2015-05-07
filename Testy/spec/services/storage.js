describe("Unit: Testing storage factory", function() {

  beforeEach(module('ytApp'));

  it('should contain an storage factory',
    inject(function(storage) {

    expect(storage).not.to.equal(null);
  }));

  it('storage should contain getArrayForView function',
    inject(['storage', function(storage) {

    expect(storage.numbersComparator).not.to.equal(null);
    expect(storage.getIdsFromStorage).not.to.equal(null);
    expect(storage.setStorage).not.to.equal(null);
    expect(storage.getLastKeyNumber).not.to.equal(null);
    
  }));

  it('should return number grater than 0 when first argument is higher',
    inject(['storage', function(storage) {

    expect(storage.numbersComparator(1, 2)).to.be.above(0);
    expect(storage.numbersComparator(2, 1)).to.be.below(0);
    expect(storage.numbersComparator(2, 2)).to.be.equal(0);
  }));

  it('should return array of local storage values',
    inject(['storage', function(storage) {
      localStorageService.clearAll();
      localStorageService.set(0, "val number 1");
      localStorageService.set(1, "val number 2");


    expect(storage.getIdsFromStorage).to.have.length(2);
    expect(storage.getIdsFromStorage[0]).to.be("val number 1");
    expect(storage.getIdsFromStorage[1]).to.be("val number 2");

  }));
  it('should set a value to the key in local storage',
    inject(['storage', function(storage) {
    var key = 1,
        value = "test value";

    expect(storage.setStorage(key, val)).to.be.true;

  }));
  it('should return index of the last local storage ',
  inject(['storage', function(storage) {
      localStorageService.clearAll();
      localStorageService.set(0, "val number 1");
      localStorageService.set(1, "val number 2");

  expect(storage.getLastKeyNumber).to.be.above(0);

  }));



});