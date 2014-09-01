'use strict';


angular.module('messengerApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {

    //会話と地の文で区切った配列にする
    function toConvs(text){
      var convs = [];
      var matches = [];
      var bracketOpen = '「';
      var convLevel = 0;
      var convIndex = 0;
      var pattern = /((\s|\S)*?)(「|」)/mg;
      var lastIndex = 0;
      var emptyPattern = /^\s+$/;

      while(matches = pattern.exec(text)){

        //マッチ残り用にindex保存
        lastIndex = pattern.lastIndex;

        var wholeConv = matches[0];
        var conv = matches[1];
        var bracket = matches[3];

        //レベル0: 地の文
        if(convLevel == 0){
          //空文字以外なら追加
          if(!emptyPattern.test(conv)){
            convs.push({
              index: -1,
              text: conv
            });
          }
          //ここで次ターンの会話オブジェクトを挿入しておく
          convs.push({
            index: convIndex,
            text: ''
          });
        }
        //レベル1以上：会話
        else {
          //配列末尾にテキスト内容追加
          //終了時以外は括弧も含めた内容を追加する
          convs[convs.length -1].text += (convLevel == 1 && bracket != bracketOpen) ? conv : wholeConv;
        }

        //次ターンの会話レベル設定
        //開き括弧ならレベル上げる
        if(bracket == bracketOpen){
          convLevel++;
        }
        //閉じ括弧ならレベル下げて元のレベルまで下がればindex増やす
        else{
          convLevel--;
          if(convLevel <= 0){
            convLevel = 0;
            convIndex++;
          }
        }
      }
      //残りのマッチしなかった部分を追加
      convs.push({
        index: -1,
        text: text.substr(lastIndex)
      })

      //テキストを句読点で配列化する
      convs.map(function(val){
        val.text = val.text.match(/\S+?(、|。|！|　|——|$)+/g);
        return val;

      });
      console.log(convs);
      return convs;
    }

    $timeout(function(){
      var ao = {
        title: angular.element('.title')[0].innerText,
        author: angular.element('.author')[0].innerText,
        text: angular.element('.main_text')[0].innerHTML
      };

      var text = ao.text.replace(/<br>/g, '');


      $scope.convs = toConvs(text);

      return;

      var re = /「.*?」/gm;

      var lines = ao.text.match(re);
      var line;
      while(line = lines.shift()){
        line = line.replace(/「(.*?)」/, '$1');

        var ph = line.match(/\S+?(、|。|！|　|——|$)+/g);
        console.log(ph.join("\n"));
      }


    },1000)



  });