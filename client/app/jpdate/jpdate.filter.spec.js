'use strict';

describe('Filter: jpdate', function () {

  // load the filter's module
  beforeEach(module('messengerApp'));

  // initialize a new instance of the filter before each test
  var jpdate;
  beforeEach(inject(function ($filter) {
    jpdate = $filter('jpdate');
  }));

  it('should return the input prefixed with "jpdate filter:"', function () {
    var text = 'angularjs';
    expect(jpdate(text)).toBe('jpdate filter: ' + text);
  });

});
