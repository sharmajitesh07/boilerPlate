define(['global_vent', 'util/generic_util'
],
function(globalVent, GenericUtil) {
	'use strict';
	var globalAppLoader = {};
	
	globalAppLoader.loader = function () {
		globalVent.trigger('startApp:Client');
	};

	globalVent.on('startApp:Client', function () {
		require(['client_app/client_main'], function (clientMain) {
			clientMain.start();
		});
	});
	return globalAppLoader;
});

