'use strict';

angular.module('messengerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.readme', {
        url: '/readme',
        templateUrl: 'app/readme/readme.html',
        controller: 'ReadmeCtrl'
      });
  });