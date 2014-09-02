'use strict';

describe('Service: Aozora', function () {

  // load the service's module
  beforeEach(module('messengerApp'));

  // instantiate service
  var Aozora;
  beforeEach(inject(function (_Aozora_) {
    Aozora = _Aozora_;
  }));

  it('should do something', function () {
    expect(!!Aozora).toBe(true);
  });

});
