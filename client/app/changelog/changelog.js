'use strict';

angular.module('messengerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.changelog', {
        url: '/changelog',
        templateUrl: 'app/changelog/changelog.html',
        controller: 'ChangelogCtrl'
      });
  });