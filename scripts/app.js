'use strict';

/**
 * @ngdoc overview
 * @name ytApp
 * @description
 * # ytApp
 *
 * Main module of the application.
 */
angular.module('youtubeModule',[]);
angular.module('vimeoModule',[]);

angular
  .module('ytApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'angular-sortable-view',
    'youtubeModule',
    'vimeoModule',

  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('/home', {
        templateUrl: 'views/main.html',
        onEnter: function() {
          console.log("pozdrawiam")

        }
      });
  });
