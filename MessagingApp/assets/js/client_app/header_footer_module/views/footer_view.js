define(['backbone', 'compiled_templates', 'marionette'],
		function (Backbone, Templates) {
	//ItemView provides some default rendering logic
	'use strict';
	return Backbone.Marionette.LayoutView.extend({
		template: Templates.footerViewTemplate
	});
});