'use strict';

angular.module('messengerApp')
  .factory('Message', function (Log) {

    //msg区切りの文字長を都度ランダム決定する
    function minTextLength(){
      return Math.random() * 20;
    }
    function randomJoinBR(items){
      var text = items.shift();
      var lastItem = text;
      items.forEach(function(item){
        //句読点込みで前の文字が3文字以上のときだけ改行を入れる
        //※「一、二時間」といった文言の場合、改行を入れたくないので
        if(lastItem.length > 2 && Math.random() > 0.2){
          text += '<br>';
        }
        text += item;
        lastItem = item;
      });
      return text;
    }
    //本文を会話と地の文で区切った配列にする
    function parseText(input){
      var talks = [];
      var matches = [];
      //会話開始括弧
      var bracketOpen = '「';

      //改行タグ
      var tagPattern = /<(?!(\/?(ruby|rb|rp|rt)))[^>]*?>/gim;
      //会話
      var talkPattern = /((\s|\S)*?)(「|」)/mg;
      //空欄
      var emptyPattern = /^[\n\r]*$/;
      //句読点
      var punctuationPattern = /\S+?(、|。|！|？|…|——|』|$)+/gm;
      //改行
      var rtPattern = /.+?(\n|\r|$)+/gm;

      //会話レベル 0:地の文、1以上:会話
      var talkLevel = 0;
      //会話index：「」毎に加算
      var talkIndex = 0;
      //会話マッチ時の本文index
      var talkMatchLastIndex = 0;

      var text = input.replace(tagPattern, '');


      while(matches = talkPattern.exec(text)){


        //マッチ残り用にindex保存
        talkMatchLastIndex = talkPattern.lastIndex;


        //「」を含んだマッチ部
        var wholeMatch = matches[0];
        //「」を含まないマッチ部
        var match = matches[1];
        //「」部
        var bracket = matches[3];


        //レベル0: 地の文
        if(talkLevel == 0){
          //空文字以外なら追加
          if(!emptyPattern.test(match)){
            //地の文はindex -1で登録
            talks.push({
              index: -1,
              text: match
            });
          }
          //ここで次ターンの会話オブジェクトを挿入しておく
          talks.push({
            index: talkIndex,
            text: ''
          });
        }
        //レベル1以上：会話
        else {
          //配列末尾にテキスト内容追加
          //終了時以外は括弧も含めた内容を追加する
          talks[talks.length -1].text += (talkLevel == 1 && bracket != bracketOpen) ? match : wholeMatch;
        }

        //次ターンの会話レベル設定
        //開き括弧ならレベル上げる
        if(bracket == bracketOpen){
          talkLevel++;
        }
        //閉じ括弧ならレベル下げて元のレベルまで下がればindex増やす
        else{
          talkLevel--;
          if(talkLevel <= 0){
            talkLevel = 0;
            talkIndex++;
          }
        }
      }
      //残りのマッチしなかった部分を追加
      talks.push({
        index: -1,
        text: text.substr(talkMatchLastIndex)
      })

      //会話と地の文からさらに句読点区切りのmsgにする
      var msgs = [];
      talks.forEach(function(talk){


        var currentMsg = [];
        var minText = minTextLength();

        //地の文：
        //改行で配列化
        if(talk.index < 0){
          var matches = talk.text.match(rtPattern);


          if(matches){
            matches.forEach(function(line){



          if(!emptyPattern.test(line)){

            //地の文はindex -1で登録
            msgs.push({
              index: talk.index,
              text: line
            });
          }
            });
          } else {
            msgs.push(talk);
          }
          return;
        }

        //会話の場合：
        //テキストを句読点で配列化してフレーズ単位にする
        var matches = talk.text.match(punctuationPattern);
        if(matches){
          matches.forEach(function(phrase){

            currentMsg.push(phrase);

            //規定長を超えたら結合してmsgにする
            if((currentMsg.join()).length > minText){
              msgs.push({
                index: talk.index,
                text: randomJoinBR(currentMsg)
              });
              currentMsg = [];
              minText = minTextLength();
            }
          })
          if(currentMsg.length > 0){
            msgs.push({
              index: talk.index,
              text: randomJoinBR(currentMsg)
            });
          }
        } else{
          msgs.push(talk);
        }
      });

      return msgs;
    }

    var authorImgs = [];
    var index = 0;
    var Message = {
      set authorImgs(list){
        authorImgs = list;
        if(list && list.length > 0){
          //上位10位からランダムに著者画像を設定
          Message.authorImg = list[ Math.floor(Math.random() * Math.min(10, list.length)) ];
        } else {
          Message.authorImg = null;
        }
      },
      authorImg: null,
      titleImgs: [],
      author: null,
      title: null,
      msgs : [],
      load: function(res){
        Message.author = res.author;
        Message.title = res.title;
        Message.msgs = parseText(res.text);
        index = 0;


        Log.clear();
        Log.add({
          type: 'open',
          text: Message.title
        });
        Log.add({
          type: 'enter',
          text: Message.author + 'が参加しました'
        });

      },
      next : function(){
        var msg;
        if(index > Message.msgs.length){
          return false;
        }
        else if(index == Message.msgs.length){
          msg = {
            type: 'exit',
            text: Message.author + 'が退出しました'
          }
        } else{
          //ランダムで通常メッセージの代わりにスタンプ表示
          if(Message.titleImgs && Message.titleImgs.length > 0 && Math.random() < .05){
            msg = {
              index: Math.floor(Math.random() * 2),
              type: 'sticker',
              src: Message.titleImgs[ Math.floor(Math.random()*Message.titleImgs.length)]
            }
            index--;
          } else {
            msg = Message.msgs[index];
          }
        }
        index++;
        Log.add(msg);
        return true;
      }
    };
    return Message;
  });
