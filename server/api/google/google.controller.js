'use strict';

var _ = require('lodash');
var client = require('cheerio-httpcli');

var gglImg = 'https://www.google.com/search'

exports.index = function(req, res) {

  var imgs = [];

  //画像取得
  client.fetch(
    gglImg,
    {
      'tbm' : 'isch',
      'q' : req.query.q
    },
    function (err, $, gglRes) {
      if(err) {
        return res.json([]);
      }

      $('.rg_i').each(function(){
        var src = $(this).attr('src') || $(this).attr('data-src');
        imgs.push(src);
      });
      return res.json(imgs);
    }
  );
}