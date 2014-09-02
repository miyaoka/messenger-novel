'use strict';

angular.module('messengerApp')
  .controller('ChangelogCtrl', function ($scope, $state) {
    $scope.home = function(){
      $state.go('main.messenger');
    }
  });
