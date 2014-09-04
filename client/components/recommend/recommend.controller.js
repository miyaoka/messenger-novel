'use strict';

angular.module('messengerApp')
  .controller('RecommendCtrl', function ($scope) {
    $scope.items = [
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000081%2Ffiles%2F43754_17659.html',
        title: '注文の多い料理店',
        author: '宮沢賢治'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000119%2Ffiles%2F624_14544.html',
        title: '山月記',
        author: '中島敦'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000096%2Ffiles%2F2093_28841.html',
        title: 'ドグラ・マグラ',
        author: '夢野久作'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000009%2Ffiles%2F8_31220.html',
        title: '赤毛連盟',
        author: 'アーサー・コナン・ドイル'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000291%2Ffiles%2F42159_23807.html',
        title: '下町',
        author: '林芙美子'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000160%2Ffiles%2F1227_28153.html',
        title: '三十年後の東京',
        author: '海野十三'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000214%2Ffiles%2F1098_42470.html',
        title: '少女病',
        author: '田山花袋'
      },
      {
        href: 'http:%2F%2Fwww.aozora.gr.jp%2Fcards%2F000984%2Ffiles%2F3212_7923.html',
        title: '浮浪',
        author: '葛西善蔵'
      }
    ]
  });
