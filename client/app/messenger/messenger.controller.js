'use strict';

angular.module('messengerApp')
  .controller('MessengerCtrl', function ($scope, $timeout, Message, Log) {

    this.msgs = Message;
    this.logs = Log;

    $scope.say = function(){
      var msg = Message.next();
      if(!msg){
        return;
      }

      $('#msgr-scroll').animate({
        scrollTop: document.getElementById('msgr-scroll').scrollHeight
      }, 300);

    }
  });
