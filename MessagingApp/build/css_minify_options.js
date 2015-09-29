module.exports = function getConfig(appBuildPath) {
	'use strict';
	var outputPath = appBuildPath + '/build/';
	return {
		options: {
			optimizeCss: 'standard',
		    cssIn: 'assets/css/app.css',
		    out: outputPath + 'css/app.css'
		}
	};
};