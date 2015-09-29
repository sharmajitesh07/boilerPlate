define(['backbone'],
function (Backbone) {
    //ItemView provides some default rendering logic
    'use strict';
    var loginModel = Backbone.Model.extend({
        validation: {
            'userid' : [{
                required: true,
                msg: 'Please enter your email address'
            }],
            'password' : [{
                required: true,
                msg: 'Please enter your password'
            }]
        }
    });

    return loginModel;
});