'use strict';

/**
 * @ngdoc function
 * @name gluebossApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gluebossApp
 */
angular.module('gluebossApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
