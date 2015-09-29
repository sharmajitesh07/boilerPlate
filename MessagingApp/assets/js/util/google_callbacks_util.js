define(['backbone', 'appConstants', 'util/generic_util'], function (Backbone, ClientConstants, GenericUtil) {
'use strict';
return {
    initGoogleLogin: function (isPostJob) {
			var additionalParams = {
             'callback': this.googleCallback
            };
            gapi.auth.signIn(additionalParams);
        },
        
        googleCallback: function (response) {
            // The user is signed in
            /*jshint camelcase: false */
            if (response.access_token) {
                GenericUtil.loaderShowHide(true);
                //Get User Info from Google Plus API
                gapi.client.load('plus','v1').then(function(){ 
                    var request = gapi.client.plus.people.get( {'userId' : 'me'} );
                    request.execute( function(profile) {
                        var email = profile.emails.filter(function(v) {
                            return v.type === 'account'; // Filter out the primary email
                        })[0].value;
                        console.log(email);
                        console.log(profile);
                        console.log(profile.displayName);
                        console.log(profile.image.url);
                        console.log(profile.id);
                        console.log(profile.url);
                        GenericUtil.loaderShowHide(false);
                    });
                });
                
            } else if (response.error) {
                // There was an error, which means the user is not signed in.
                console.log('There was an error: ' + response.error);
            }
        }
	};
});