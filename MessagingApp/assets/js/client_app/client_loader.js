define(['global_vent', 'jquery',
'util/generic_util',
'foundation', 'modernizr'],
 function (globalVent, jQuery, GenericUtil) {
 	'use strict';
	var clientLoader = {};
	
	clientLoader.loader = function () {
		globalVent.on('start:homeModule', function (viewType, token) {
			require(['clientApp', 'homeModule/home_module'],
			 function (clientApp, homeModule) {
				clientApp.stopManuallyStartedModules();
				var option = {
					'viewType': viewType,
					'token': token
				};
				homeModule.start(option);
				commonStuffForEachModule();
			});
		});
	};

	var commonStuffForEachModule = function () {
		document.body.scrollTop = 0;
		jQuery(document).foundation();
		jQuery(document).foundation('reflow');
	};

	return clientLoader;
});