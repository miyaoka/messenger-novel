'use strict';

describe('Controller: ReadmeCtrl', function () {

  // load the controller's module
  beforeEach(module('messengerApp'));

  var ReadmeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadmeCtrl = $controller('ReadmeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
