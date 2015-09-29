define(['clientApp',
'headerFooterModule/views/header_view',
'headerFooterModule/views/footer_view',
'headerFooterModule/views/burger_menu_view'],
 function (ClientApp,
 HeaderView, FooterView, BurgerMenuView) {
	'use strict';
	var mod = ClientApp.module('headerModule', function (headerModule) {
		this.startWithParent = false;

		headerModule.on('start', function(){
		  ClientApp.headerRegion.show(new HeaderView());
	  	  ClientApp.footerRegion.show(new FooterView());
	  	  //if (jQuery(window).width() < 767) {
	  	  ClientApp.menuContainer.show(new BurgerMenuView({
	  	  	model: new Backbone.Model()
	  	  }));
	  	  //}
		});

		headerModule.on('stop', function(){
		  
		});
	});

	
	return mod;
});


