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
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'

      })
      .state('video-player', {
        url:'/player/:player/:id',
        templateUrl: 'views/video-player.html',
        controller: 'videoCaster',
        controllerAs: 'vidcast'
      });
  });
