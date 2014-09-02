'use strict';

angular.module('messengerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.messenger', {
        url: '/',
        templateUrl: 'app/messenger/messenger.html',
        controller: 'MessengerCtrl',
        controllerAs: 'ctrl'
      });
  });