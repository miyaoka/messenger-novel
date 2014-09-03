'use strict';

angular.module('messengerApp')
  .controller('MessengerCtrl', function ($scope, $timeout, Message, Log, $state) {

    this.msgs = Message;
    this.logs = Log;

    $scope.keyDown = function(e) {
      //本state以外でもキーイベントを拾ってしまうのでその場合は破棄する
      if(!$state.is('main.messenger')){
        return;
      }
      //32: space
      //40: arrow down
      if(e.which == 32 || e.which == 40){
        $scope.say();
      }
    };

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
