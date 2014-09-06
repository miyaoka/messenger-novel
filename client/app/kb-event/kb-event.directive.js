'use strict';

angular.module('messengerApp')
  .directive('kbEvent', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        keypress: '&',
        keydown: '&',
        keyup: '&'
      },
      link: function (scope, element, attrs){
        scope.$on('$destroy', function(){
          $(document).off('keypress keydown keyup');
        });
        $(document).on({
          'keypress': function(e){
            scope.$apply(scope.keypress({$event: e}));
          },
          'keydown': function(e){
            scope.$apply(scope.keydown({$event: e}));
          },
          'keyup': function(e){
            scope.$apply(scope.keyup({$event: e}));
          }
        });
      }
    };
  });