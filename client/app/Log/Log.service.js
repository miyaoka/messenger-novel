'use strict';

angular.module('messengerApp')
  .factory('Log', function () {
    var Log= {
      list: [],
      maxLength: 50,
      get limitList(){
        return Log.list.slice(Math.max(0, Log.list.length - Log.maxLength));
      },
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
