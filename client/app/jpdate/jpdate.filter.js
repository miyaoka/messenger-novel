'use strict';

angular.module('messengerApp')
  .filter('jpdate', function ($filter) {
    var jpDays = '日月火水木金土日'.split('');
    return function (date) {
      if(!date){
        return '';
      }
      var day = date.getDay();
      return [
        $filter('date')(date, 'M/d'),
        '(', jpDays[day], ')'
      ].join('');
    };
  });
