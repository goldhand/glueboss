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
    $http.get('json/vendor-colors.json').success(function(data) {
      $scope.vendorColors = data;
    })
  });
