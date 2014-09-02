'use strict';

describe('Controller: MessengerCtrl', function () {

  // load the controller's module
  beforeEach(module('messengerApp'));

  var MessengerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessengerCtrl = $controller('MessengerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
