define(['backbone', 'compiled_templates',
'util/generic_util',
'global_vent', 'marionette'],
    function (Backbone, Templates, GenericUtil, globalVent) {
        //ItemView provides some default rendering logic
        'use strict';
        return Backbone.Marionette.LayoutView.extend({
            template: Templates.burgerMenuTemplate,
            ui: {
                'loginOnlyLinks': '.show-on-login-only',
                'logoutOnlyLinks': '.show-on-logout-only',
                'logout': '.logout',
                'viewProfile': '#viewProfile'
            },
            events: {
                'click @ui.logout': 'logout',
                'click li': 'closeMenu',
                'click #changeToTradeMan': 'changeToTradeMan',
                'click #customerView': 'customerView',
                'click #vendorView': 'vendorView'
            },
            initialize: function () {

            },
            controlViewProfile: function () {
                if (trademanModel.get('registrationStatus') === 'P') {
                    this.ui.viewProfile.addClass('hide');
                } else {
                    this.ui.viewProfile.removeClass('hide');
                }
            },
            userRoleChanged: function () {
                this.model.set('isTrademan', trademanModel.get('userRole') === 'trademan');
                this.render();
            },
            manipulateView: function () {
                this.model.set('isLoggedIn', trademanModel.get('isLoggedIn'));
                this.render();
            },
            changeToTradeMan: function () {
                trademanModel.unset('activeRole');
                trademanModel.set('userRole', 'trademan');
                this.model.set('isTrademan', true);
                this.render();
            },
            customerView: function () {
                trademanModel.unset('activeRole');
                globalVent.trigger('change:userRole', true);
            },
            vendorView: function () {
                trademanModel.unset('activeRole');
                globalVent.trigger('change:userRole', false);
            },
            logout: function () {
                GenericUtil.logoutUser();
            },
            closeMenu: function (event) {
                jQuery('.left-off-canvas-menu').toggleClass('move-left');
                jQuery('.c-hamburger').removeClass('is-active');
                var targetId = event.target.id,
                parents;
                if (!event.target.id) {
                    parents = jQuery(event.target).parents('li');
                    if (parents && parents.length > 0) {
                        targetId = parents[0].id;
                    }
                }
                if (targetId === 'whyUs') {
                    globalVent.trigger('bringTabsInFocus', '1');
                } else if (targetId === 'howItWorks') {
                    globalVent.trigger('bringTabsInFocus', '2');
                }
                
            }       
        });
    });