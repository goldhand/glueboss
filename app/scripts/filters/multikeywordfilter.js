'use strict';

/**
 * @ngdoc filter
 * @name gluebossApp.filter:multiKeywordFilter
 * @function
 * @description
 * # multiKeywordFilter
 * Filter in the gluebossApp.
 */
angular.module('gluebossApp')
  .filter('multiKeywordFilter', function ($filter) {
    return function (data, text) {
      var returnData = [];
      if(text) {
        var textArr = text.split(' ');
        angular.forEach(textArr, function(test){
          if(test){
            data = $filter('filter')(data, test);
          };
        });
      };
      return data;
    };
  });
