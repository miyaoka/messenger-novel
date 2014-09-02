'use strict';

angular.module('messengerApp')
  .filter('msgtime', function ($filter) {
    return function (date) {
      return $filter('date')(date, 'HH:mm');
    };
  });
