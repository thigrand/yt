'use strict';

/* Filters */


function interpolate (version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
}
angular.module('ytApp').filter('interpolate', ['$scope', interpolate]);