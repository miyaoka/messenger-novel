'use strict';

angular.module('messengerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.import', {
        url: '/import?uri',
        templateUrl: 'app/import/import.html',
        controller: 'ImportCtrl',
        controllerAs: 'ctrl'
      });
  });