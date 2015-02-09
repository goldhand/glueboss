'use strict';

/**
 * @ngdoc function
 * @name gluebossApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gluebossApp
 */
angular.module('gluebossApp')
  .controller('MainCtrl', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('https://s3-us-west-1.amazonaws.com/glueboss/vendor-colors.json').success(function(data) {
      $scope.vendorColors = data;
    });
    $http.get('https://s3-us-west-1.amazonaws.com/glueboss/vendor-color-id.json').success(function(data) {
      $scope.vendorColorKeys = {};
      angular.forEach(data, function(colorKey){
        console.log(colorKey.name, colorKey.id);
        $scope.vendorColorKeys[colorKey.name] = colorKey.id;
      });
    });
    $scope.linkUrl = 'https://www.glueboss.com/product-p/sp4-4000.htm';

  });
