'use strict';

angular.module('messengerApp')
  .controller('ImportCtrl', function ($scope, $state, Aozora, Message, Log, Google, Config) {
    var self = this;
    this.aozoraURI = $state.params.uri;
    this.errMsg = null;
    this.loading = false;

    this.home = function(){
      $state.go('main.messenger');
    }
    this.import = function(){
      //2回読み込んでしまうのを防止
      Config.autoImport = true;

      this.loading = true;
      this.errMsg = null;

      //入力内容をクエリにつけて同stateを読み直すことでリンク用アドレス生成
      $state.transitionTo($state.current, {uri: this.aozoraURI}, {location:true, reload:false, notify:false});

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

            //URLはそのままでmessenger画面に遷移する
            $state.transitionTo('main.messenger', {}, {location:false});
          });
        });
      },
      //取得失敗
      function(err){
        self.loading = false;
        self.errMsg = err.data;
      })
    }



    //一旦リセット
    $state.params = {};

    //クエリがあれば自動でインポート開始する
    if(this.aozoraURI && !Config.autoImport ){
      this.import();
    }
  });
