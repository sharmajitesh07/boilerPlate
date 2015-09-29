define(['backbone', 'appConstants',
'util/generic_util'],
function (Backbone, ClientConstants,
GenericUtil) {
'use strict';

var fbUtil = {};

fbUtil.clickFBButton = function (isPostJob) {
    trademanModel.set('isPostJob', isPostJob);
    FB.Event.subscribe('auth.login', callBack);
    FB.getLoginStatus(function(response) {
        if (response.status === 'unknown' || response.status === 'not_authorized') {
            FB.login(FB.getLoginStatus(function(response) {
                callBack(response);
            }), {scope: 'public_profile,email,user_friends'});
        } else {
            callBack(response);
        }
    });
};

var callBack = function (response) {
        var isPostJob = trademanModel.get('isPostJob');
        if (response.status === 'connected') {
            GenericUtil.loaderShowHide(true);
            FB.api('/me', function(response) {
                trademanModel.set({
                    'fbData': response,
                    'name': response.name,
                    'userid': response.email,
                    'isLoggedIn': true
                });
                var photo = response.id + '/picture';
                FB.api(photo, function(response) {
                    trademanModel.set('imageUrl', response.data.url);
                    GenericUtil.setSessionValues();
                });
                var saveModel = new Backbone.Model({
                    'name': response.name,
                    'email': response.email,
                    'fbId': response.id,
                    'fbUrl': response.link,
                    'intendedRole': isPostJob ? 'customer' : trademanModel.get('userRole')
                });
                saveModel.url = ClientConstants.VENDOR_REGISTRATION_URL;
                saveModel.save(null, {
                    success: function(model, response) {
                        if ((response.success && (response.success === 'true' || response.success === true))) {
                            var trademanId = response.trademanid,
                            userRole = isPostJob ? 'customer' : trademanModel.get('userRole'),
                            registrationStatus = 'P',
                            existPassword = 'NO';

                            if (response.trademanBusinessDetail) {
                                userRole = response.trademanBusinessDetail.role;
                                registrationStatus = response.trademanBusinessDetail.registrationStatus;
                                if (response.trademanBusinessDetail.existPassword) {
                                    existPassword = response.trademanBusinessDetail.existPassword;
                                }
                            }

                            trademanModel.set({
                                'trademanID': trademanId,
                                'userRole': userRole,
                                'registrationStatus': registrationStatus,
                                'existPassword': existPassword
                            });
                            GenericUtil.setSessionValues();

                            if (isPostJob) {
                                trademanModel.set('activeRole', 'customer');
                                window.location.href = '#jobListing';
                            } else if (userRole === 'customer') {
                                window.location.href = '#jobListing';
                            } else {
                                if (registrationStatus === 'P') {
                                    window.location.href = '#vendorRegistration';
                                } else {
                                    window.location.href = '#vendorLeads';
                                }
                            }
                        }
                    },
                    error: function () {
                        GenericUtil.loaderShowHide(true);
                        console.log('Could not sign you up due to some technical error. Please try again.');
                        //that.ui.errorDiv.text('Could not sign you up due to some technical error. Please try again.');
                    }
                });
            });
        }
    };
return fbUtil;

});