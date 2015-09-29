define(['backbone', 'global_vent', 'marionette'],
    function (Backbone, globalVent) {
    'use strict';
    return Backbone.Marionette.Controller.extend({
        home: function (token) {
            globalVent.trigger('start:homeModule', 'login', token);
        }
    });
});