module.exports = function (appBuildPath) {
	'use strict';
	var outputPath = appBuildPath + '/build/';
	return {
		appDir: 'assets',
		baseUrl: 'js',
		dir: outputPath,
		mainConfigFile: 'assets/js/main.js',
		skipDirOptimize: true,
		modules: [{
			name: 'main',
			exclude: ['jquery', 'underscore', 'backbone', 'marionette',
			'handlebars', 'backboneRadio', 'foundation', 'modernizr',
			'jqueryBarrating', 'stickit', 'backboneValidation', 'jqueryui',
			'tagator', 'jqueryForm', 'facebook', 'async']
		}],
		fileExclusionRegExp: /^(node_modules|release|test|docs)$/,
		optimize: 'uglify2',
		optimizeCss: 'standard',
		generateSourceMaps: false,
		preserveLicenseComments: true
	};
};