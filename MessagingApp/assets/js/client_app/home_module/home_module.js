define(['clientApp', 'homeModule/views/login_layout_view',
	'homeModule/models/login_model', 'appConstants'],
 function (ClientApp, LoginLayoutView, LoginModel, ClientConstants) {
	'use strict';
	var mod = ClientApp.module('loginModule', function (loginModule) {
		this.startWithParent = false;

		loginModule.on('start', function(option){
			var viewType = option.viewType;
			var token = option.token;
			console.log(token);
			var loginModel = new LoginModel();
			if(token) {
				var getLoginDetailsModel = new Backbone.Model();
                var dataToSend = {'token': token};
                getLoginDetailsModel.url = ClientConstants.USER_REGISTRATION_TOKEN;
                getLoginDetailsModel.fetch({
                    remove: false,
                    global: false,
                    method:'POST',
                    contentType: 'application/JSON',
                    data: JSON.stringify(dataToSend),
                    success: function (model) {
                        console.log('success');
                        loginModel.set('isPostJob', true);
                        loginModel.set('byPassUser', true);
						loginModel.set('name', model.get('name'));
						loginModel.set('contact', model.get('mobile'));
						loginModel.set('userId', model.get('userId'));
						ClientApp.mainRegion.show(new LoginLayoutView({
					  		model : loginModel,
					  		viewNeeded: viewType
						}));
						jQuery(document).foundation('reflow');
						jQuery('body').removeClass('f-topbar-fixed');
                    }, error : function (error) {
                        console.log(error);
                    }
                });
			}
			else {
			  	ClientApp.mainRegion.show(new LoginLayoutView({
			  		model : loginModel,
			  		viewNeeded: viewType
				}));
				jQuery(document).foundation('reflow');
				jQuery('body').removeClass('f-topbar-fixed');
			}
		});

		loginModule.on('stop', function(){
		  
		});
	});
	return mod;
});