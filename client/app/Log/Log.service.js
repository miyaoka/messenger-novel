'use strict';

angular.module('messengerApp')
  .factory('Log', function () {
    var Log= {
      list: [],
      maxLength: 100,
      clear: function(){
        Log.list = [];
      },
      add: function(msg){
        msg.time = new Date();
        Log.list.push(msg);

        //最大表示行数を超えたら先頭から消去
        while(Log.list.length > Log.maxLength){
          Log.list.shift();
        }
      }
    }

    return Log;
  });
