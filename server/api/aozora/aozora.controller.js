'use strict';

var _ = require('lodash');
var client = require('cheerio-httpcli');

function hexNumRefToString(hexNumRef) {
  return hexNumRef.replace(/&#x([0-9a-f]+);/ig, function(match, $1, idx, all) {
    return String.fromCharCode('0x' + $1);
  });
}

// Get list of aozoras
exports.index = function(req, res) {
  client.fetch(req.query.uri, {}, function (err, $, aozoraRes) {

    if(err) {
      res.status(err.statusCode ? err.statusCode : 400);
      return res.send('ページの取得に失敗しました');
    }
    //青空文庫の要素を抽出する
    var title = $('.title').text();
    var author = $('.author').text();
    var text = $('.main_text').html();

    //全て揃って無ければエラー
    if(!title || !author || !text){
      res.status(400);
      return res.send('青空文庫の作品ページではありません');
    }


    //.html()だと数値文字参照（16進）で返るので文字列に変換する
    text = hexNumRefToString(text);

    return res.json({
      title: title,
      author: author,
      text: text
    });
  });

};