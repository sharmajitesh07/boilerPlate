module.exports = function (appBuildPath) {
	'use strict';
	var outputPath = appBuildPath + '/build/';
	return {
		appDir: 'assets',
		baseUrl: 'js',
		dir: outputPath,
		mainConfigFile: 'assets/js/framework_common.js',
		skipDirOptimize: true,
		modules: [{
			name: 'framework_common',
			include: ['jquery', 'underscore', 'backbone', 'marionette',
			'handlebars', 'backboneRadio', 'foundation', 'modernizr',
			'jqueryBarrating', 'stickit', 'backboneValidation', 'jqueryui',
			'tagator', 'jqueryForm', 'facebook', 'async']
		}],
		fileExclusionRegExp: /^(node_modules|release|test|docs)$/,
		optimize: 'uglify2',
		optimizeCss: 'satandard',
		generateSourceMaps: false,
		preserveLicenseComments: false
	};
};