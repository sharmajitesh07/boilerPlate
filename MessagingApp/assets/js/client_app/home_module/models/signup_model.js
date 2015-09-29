define(['backbone'],
function (Backbone) {
    //ItemView provides some default rendering logic
    'use strict';
    var signUpModel = Backbone.Model.extend({
        validation: {
            'name' : [{
                required: true,
                msg: 'Please enter your name'
            }],
            'email' : [{
                required: true,
                msg: 'Please enter your email address'
            }, {
                pattern: 'email',
                msg: 'Please enter a valid email address'
            }],
            'password' : [{
                required: true,
                msg: 'Please enter your password'
            }, {
                minLength: 6,
                msg: 'Password must be atleast six characters'
            }],
            'contact' : [{
                required: true,
                msg: 'Please enter your 10 digit mobile number'
            }, {
                pattern: 'digits',
                msg: 'Please enter your 10 digit mobile number'
            }, {
                minLength: 10,
                msg: 'Please enter your 10 digit mobile number'
            }]
        }
    });

    return signUpModel;
});