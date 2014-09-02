'use strict';

angular.module('messengerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });