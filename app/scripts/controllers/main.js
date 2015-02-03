'use strict';

/**
 * @ngdoc function
 * @name gluebossApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gluebossApp
 */
angular.module('gluebossApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
