'use strict';

angular.module('messengerApp')
  .directive('kbEvent', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      link:    function postLink(scope, iElement, iAttrs){
        jQuery(document).on('keydown', function(e){
          scope.$apply(scope.keyDown(e));
        });
      }
    };
  });