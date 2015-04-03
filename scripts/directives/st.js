'use strict';

/* Directives */


function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );

    return xmlHttp.responseText;

}

// console.log(httpGet("https://gdata.youtube.com/feeds/api/videos/4JOAqRS_lms?v=2"));









// function appVersion(version) {
//     return function(scope, element, attrs) {
//     	element.text(version);
//     };
// }
// angular.module('ytApp').directive('appVersion', ['version', appVersion]);