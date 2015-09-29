define(['backbone', 'appConstants'],
function (Backbone, AppConstants) {
    'use strict';
    var TokenModel = Backbone.Model.extend({
    	url: AppConstants.SAMPLE_URL
    });

    return TokenModel;
});