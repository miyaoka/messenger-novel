'use strict';

describe('Controller: RecommendCtrl', function () {

  // load the controller's module
  beforeEach(module('messengerApp'));

  var RecommendCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendCtrl = $controller('RecommendCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
