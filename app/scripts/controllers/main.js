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

  });
