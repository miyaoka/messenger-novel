'use strict';

angular.module('messengerApp')
  .factory('Log', function () {
    var Log= {
      list: [],
      clear: function(){
        Log.list = [];
      },
      add: function(msg){
        msg.time = new Date();
        Log.list.push(msg);
      }
    }

    return Log;
  });
