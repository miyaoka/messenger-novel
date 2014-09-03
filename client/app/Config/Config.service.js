'use strict';

angular.module('messengerApp')
  .factory('Config', function () {
    var Config = {
      autoImport: false
    }

    return Config;
  });
