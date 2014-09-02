'use strict';

angular.module('messengerApp')
  .controller('ImportCtrl', function ($scope, $state, Aozora, Message, Log, Google) {
    var self = this;
    this.aozoraURI = '';
    this.errMsg = null;

    this.home = function(){
      $state.go('main.messenger');
    }
    this.import = function(){
      this.loading = true;
      this.errMsg = null;

      Aozora.get({
        uri: this.aozoraURI
      },
      //取得成功
      function(res){

        Google.query({q: res.author}, function(authorImgs){
          Google.query({q: res.title}, function(titleImgs){
            self.loading = false;
            Message.load(res);
            Message.authorImgs = authorImgs;
            Message.titleImgs = titleImgs;
            self.home();
          });
        });
      },
      //取得失敗
      function(err){
        self.loading = false;
        self.errMsg = err.data;
      })
    }
  });
