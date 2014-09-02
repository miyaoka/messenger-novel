'use strict';

angular.module('messengerApp')
  .controller('SidebarCtrl', function ($scope, $state) {
    $scope.readme = function(){
      console.log('a');
      $state.go('main.readme');
    }
  });
