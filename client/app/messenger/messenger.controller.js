'use strict';

angular.module('messengerApp')
  .controller('MessengerCtrl', function ($scope, $timeout, Message, Log, $state) {

    var self = this;
    this.msgs = Message;
    this.logs = Log;


    this.say = function(){
      if(!Message.next()){
        return;
      }
      $('#msgr-scroll').stop();
      $('#msgr-scroll').animate({
        scrollTop: document.getElementById('msgr-scroll').scrollHeight
      }, 300);
    }

    this.keyPress = function(e){
      //13: enter
      //32: space
      if(e.which == 13 || e.which == 32){
        self.say();
      }
    }
    //arrow keyはpressで取得できないのでdownから
    this.keyDown = function(e){
      //40: arrow down
      if(e.which == 40){
        self.say();
      }
    }
  });
