define(['compiled_templates',
'clientApp', 'appConstants',
'util/generic_util', 'global_vent'],
	function (Templates, ClientApp, AppConstants, 
			GenericUtil, globalVent) {
	//ItemView provides some default rendering logic
	'use strict';
	return Backbone.Marionette.ItemView.extend({
		template: Templates.subNavigation,
		ui: {
			'leadCount': '#activeLeadSpan',
			'navigationLink': '[name="navigationLink"]'
		},
		initialize: function () {
			this.listenTo(globalVent, 'change:userRole', this.RoleChanged);
			this.listenTo(globalVent, 'quote:Submitted', this.onQuoteSubmission);
		},
		RoleChanged: function (isCustomerView) {
			this.model.set('isCustomerView', isCustomerView);
			this.render();
			
			if (trademanModel && trademanModel.get('isLoggedIn') && !isCustomerView) {
				this.fetchVendorStats();
			}
		},
		events: {
			//'click .viewLeads': 'viewLeads',
			'click .viewQuotes': 'viewQuotes',
			'click .viewProfile': 'viewProfile',
			'click li': 'changeSelection',
			'click @ui.navigationLink': 'showLoader'
		},
		changeSelection: function (event) {
			this.$el.find('li').removeClass('active');
			jQuery(event.currentTarget).addClass('active');
			window.location.href = jQuery(event.currentTarget).find('a')[0].href;
		},
		onQuoteSubmission: function () {
			if (trademanModel.get('isLoggedIn')) {
				this.fetchVendorStats();
			}
		},
		fetchVendorStats: function () {
        	var that = this;
        	var navigationModel = new NavigationModel();
        	
        	var requestParam = {
        		trademanId: Number(trademanModel.get('trademanID'))
        	};
        	
        	GenericUtil.loaderShowHide(true);
        	
        	navigationModel.fetch({
                data: JSON.stringify(requestParam),
                type: AppConstants.SERVICE_METHOD_POST,
                contentType: AppConstants.SERVICE_CONTENT_JSON,
                success: function (response) {
                	if (response) {
                		that.displayCount(response.get('activeLeads'), that);
                	}
                	GenericUtil.loaderShowHide(false);
                },
                error: function () {                    	
                	GenericUtil.loaderShowHide(false);
                }
            });
        	
        },
		displayCount: function (count, context) {
			if (count > 0) {
				context.$el.find(this.ui.leadCount).removeClass('hide');
				context.$el.find(this.ui.leadCount).addClass('label');
				context.$el.find(this.ui.leadCount).text(count);
			} else {
				context.$el.find(this.ui.leadCount).removeClass('label');
				context.$el.find(this.ui.leadCount).addClass('hide');
				context.$el.find(this.ui.leadCount).text('');
			}
		},
		viewLeads: function (event) {
			event.stopPropagation();
			this.$el.find('li').removeClass('active');
			this.$el.find('.viewLeads').addClass('active');
			//globalVent.trigger('startModule:vendorLeads');			
		},
		viewQuotes: function (event) {
			event.stopPropagation();
			this.$el.find('li').removeClass('active');
			this.$el.find('.viewQuotes').addClass('active');
			//this.comingSoon();
		},
		comingSoon: function () {
			ClientApp.mainDivRegion.reset();
			ClientApp.mainRegion.show(new ComingSoonView({}));
		},
		viewProfile: function (event) {
			event.stopPropagation();
			//this.$el.find('li').removeClass('active');
			//this.$el.find('.viewProfile').addClass('active');
			globalVent.trigger('startModule:vendorProfile');			
		},
		showLoader: function (e) {
			if (!this.$el.find(e.currentTarget).parents('li').hasClass('active')) {
				GenericUtil.loaderShowHide(true);
			}
		}
	});
});