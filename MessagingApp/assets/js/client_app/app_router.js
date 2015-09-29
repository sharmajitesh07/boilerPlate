define(['client_app/client_app_controller', 'appConstants', 'marionette'],
 function(ClientAppController, ClientConstants) {
   'use strict';
   return Backbone.Marionette.AppRouter.extend({
       controller: new ClientAppController(),
       appRoutes: {
           'home(/:token)':  'home',
           '*path':  'home'
       }
   });
});