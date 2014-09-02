'use strict';

describe('Service: Google', function () {

  // load the service's module
  beforeEach(module('messengerApp'));

  // instantiate service
  var Google;
  beforeEach(inject(function (_Google_) {
    Google = _Google_;
  }));

  it('should do something', function () {
    expect(!!Google).toBe(true);
  });

});
