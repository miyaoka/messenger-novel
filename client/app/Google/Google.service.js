'use strict';

angular.module('messengerApp')
  .factory('Google', function ($resource) {
    return $resource('api/googles', {
    });
  });
