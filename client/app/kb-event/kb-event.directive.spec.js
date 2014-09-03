'use strict';

describe('Directive: kbEvent', function () {

  // load the directive's module
  beforeEach(module('messengerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<kb-event></kb-event>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the kbEvent directive');
  }));
});