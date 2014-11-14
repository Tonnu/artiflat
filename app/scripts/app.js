'use strict';
/* global app: true */


var app = angular.module('artiflatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/hoofdstukken', {
        templateUrl: 'views/hoofdstukken.html',
        controller: 'MainCtrl'
      })
      .when('hoofdstuk/:hoofdstukId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
