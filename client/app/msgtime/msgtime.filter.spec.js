'use strict';

describe('Filter: msgtime', function () {

  // load the filter's module
  beforeEach(module('messengerApp'));

  // initialize a new instance of the filter before each test
  var msgtime;
  beforeEach(inject(function ($filter) {
    msgtime = $filter('msgtime');
  }));

  it('should return the input prefixed with "msgtime filter:"', function () {
    var text = 'angularjs';
    expect(msgtime(text)).toBe('msgtime filter: ' + text);
  });

});
