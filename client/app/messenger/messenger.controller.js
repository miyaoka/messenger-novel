'use strict';

angular.module('messengerApp')
  .controller('MessengerCtrl', function ($scope, $timeout, Message, Log, $state) {

    var self = this;
    this.msgs = Message;
    this.logs = Log;
    this.finished = false;

    var pressedKeys = {};

    this.say = function(){
      say(true);
    }
    this.restart = function(){
      Log.clear();
      Message.reload();
      self.finished = false;
    }

    function say(animate){
      if(!Message.next()){
        self.finished = true;
      }
      scrollMsg(animate);
    }
    function scrollMsg(animate){
      if(!animate){
        $('#msgr-scroll').scrollTop(document.getElementById('msgr-scroll').scrollHeight);
        return;
      }
      $('#msgr-scroll').stop(true, true).animate({
        scrollTop: document.getElementById('msgr-scroll').scrollHeight
      }, 500);
    }
    function sayByKey(key){
      say(!pressedKeys[key]);
      pressedKeys[key] = true;
    }

    this.keyPress = function(e){
      //13: enter
      //32: space
      if(e.which == 13 || e.which == 32){
        sayByKey(e.which);
      }
    }
    //arrow keyはpressで取得できないのでdownから
    this.keyDown = function(e){
      //40: arrow down
      if(e.which == 40){
        sayByKey(e.which);
      }
    }
    this.keyUp = function(e){
      if(pressedKeys[e.which]){
        pressedKeys[e.which] = false;
        scrollMsg(true);
      }
    }
  });
