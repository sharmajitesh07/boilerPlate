define(['backbone', 'underscore', 'appConstants', 'util/generic_util',
        'client_app/app_router', 'client_app/client_loader', 'marionette'],
    function (Backbone, _, AppConstants, GenericUtil, appRouter, ClientLoader) {
        'use strict';
        var ClientApp = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        ClientApp.addRegions({
            menuContainer: '#menuContainer',
            headerRegion:'#header-region',
            mainRegion:'#main-region',
            mainDivRegion: '#main-div',
            footerRegion: '#footer-region',
            dialogRegion: '#dialog-region'
        });

        ClientApp.addInitializer(function () {
        	ClientApp.bootstrapApp();
        });

        ClientApp.on('start', function () {
        	
        });
        
        ClientApp.bootstrapApp = function () {
        	ClientLoader.loader();
            ClientApp.renderLayout();       	
        };
        
        ClientApp.renderLayout = function () {
        	/* jshint ignore:start */
            var appRouterObj = new appRouter();
            /* jshint ignore:end */           
            ClientApp.renderHeaderLayout();
        };
        
        ClientApp.renderHeaderLayout = function () {
	        	require(['headerFooterModule/header_footer_module'],
	        		function (HeaderModule) {
	                	HeaderModule.start();                
	            	}
	        	);
	        	
        	if (Backbone.history) {
                Backbone.history.start();
            }
        };
        
        ClientApp.stopManuallyStartedModules = function () {
            var modules = this.submodules;
            _.each(modules, function(moduleName) {
                moduleName.stop();
            });
        };
        return ClientApp;
    });