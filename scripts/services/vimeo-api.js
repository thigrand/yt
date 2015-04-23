'use strict';
function vimeo() {

// scope is an array of permissions your token needs to access. You can read more at https://developer.vimeo.com/api/authentication#scopes
    lib.generateClientCredentials(scope, function (err, access_token) {
        if (err) {
                throw err;
        }

        var token = access_token.access_token;

        // Other useful information is included alongside the access token
        // We include the final scopes granted to the token. This is important because the user (or api) might revoke scopes during the authentication process
        var scopes = access_token.scope;
    });

    


    //this.checkUrl = checkUrl;
	return this;
}
angular.module('ytApp').factory('vimeo', [ vimeo]);