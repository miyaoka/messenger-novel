'use strict';

angular.module('messengerApp')
  .controller('ReadmeCtrl', function ($scope, $state) {
    $scope.home = function(){
      $state.go('main.messenger');
    }
  });
