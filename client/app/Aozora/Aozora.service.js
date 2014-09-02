'use strict';

angular.module('messengerApp')
  .factory('Aozora', function ($resource) {
    return $resource('api/aozoras', {
    });
  });
