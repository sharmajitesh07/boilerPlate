define(['clientApp'], function (clientApp) {
	'use strict';
	return {
		start: function () {
			clientApp.commonData = {
				'registered': false
			};
			clientApp.start();
		},
		stop: function () {
			if (clientApp.mainRegion.currentView) {
				clientApp.stopManullyStartedModules();
				clientApp.mainRegion.reset();
			}
		}
	};
});