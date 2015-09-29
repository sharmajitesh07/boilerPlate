module.exports = function getConfig(output) {
	'use strict';
	var outputPath = output + '/jshint_logs/jshint.xml';
	return {
		options: {
			force: false,
			reporter: 'jslint',
			reporterOutput: outputPath,
			jshintrc: true
		},
		src: ['**/*.js',
			'!assets/browserDetection/*.js',
			'!node_modules/**/*.js',
			'!release_build/**/*.js',
			'!assets/js/libs/**/*.js',
			'!!assets/js/compiled_templates.js']
	};
};