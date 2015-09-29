define(['backbone', 'compiled_templates', 'global_vent',
'headerFooterModule/views/header_right_view',
'headerFooterModule/views/sub_navigation_view',
'marionette'],
    function (Backbone, Templates, globalVent,
    HeaderRightView, SubNavigationView) {
        //ItemView provides some default rendering logic
        'use strict';
        return Backbone.Marionette.LayoutView.extend({
            template: Templates.header,
            //tagName: 'header',
            //className: 'fixed',
            regions: {
                'topSection': '#topSection',
                'subNavigation': '#subNavigation'
            },
            events: {
                'click .c-hamburger': 'toggleBurgerMenu',
                'click @ui.login': 'goToLogin'
            },
            ui: {
                'titleBar': '.title-bar',
                'login': '.login',
                'dynamicHeading': '#dynamicHeading',
                'toggleHandler': '.c-hamburger'
            },
            goToLogin: function () {
                globalVent.trigger('showView:loginPage');
            },
            // attributes: {
            //      'data-magellan-expedition' : 'fixed'
            // },
            initialize: function () {
                this.listenTo(globalVent, 'show:SubNavidation', this.showNavigation);
                this.listenTo(globalVent, 'modify:header', this.modifyHeader);
                //this.listenTo(trademanModel, 'change:imageUrl change:isLoggedIn', this.changePicture);
            },
            toggleBurgerMenu: function () {
                jQuery('.left-off-canvas-menu').toggleClass('move-left');
                if (this.ui.toggleHandler.hasClass('is-active')) {
                    this.ui.toggleHandler.removeClass('is-active');
                } else {
                    this.ui.toggleHandler.addClass('is-active');
                }
            },
            onShow: function () {
                this.topSection.show(new HeaderRightView({
                    model: new Backbone.Model()
                }));
                jQuery('body').removeClass('f-topbar-fixed');
                jQuery('.toggle-topbar').click(function () {
                    jQuery('nav').toggleClass('expanded');
                });
                
                this.subNavigationView = new SubNavigationView({
                    model: new Backbone.Model({
                        type: 'vendorProfile'
                    })
                });
            },
            showNavigation: function (type) {
                if (type && trademanModel.get('isLoggedIn')) {
                    if (!this.isSubShown || !this.subNavigationView.isRendered) {
                        this.subNavigationView = new SubNavigationView({
                            model: new Backbone.Model({
                                type: 'vendorProfile',
                                'isCustomerView': trademanModel.get('userRole') !== 'trademan'
                            })
                        });
                        this.subNavigation.show(this.subNavigationView);
                        jQuery('.subNavigation').html(new SubNavigationView({
                            model: new Backbone.Model({
                                type: 'vendorProfile',
                                'isCustomerView': trademanModel.get('userRole') !== 'trademan'
                            })
                        }).render().$el);
                        jQuery('.subNavigation').show();
                        this.isSubShown = true;
                    } else {
                        jQuery('.subNavigation').show();
                    }
                    
                } else {
                    jQuery('.subNavigation').hide();
                    //this.isSubShown = false;
                }
            },
            modifyHeader: function (header) {
                if (header) {
                    this.ui.titleBar.removeClass('hide');
                    this.ui.dynamicHeading.text(header);
                } else {
                    jQuery('.title-bar').addClass('hide');
                }
            },
            changePicture: function () {
                var imageUrl = trademanModel.get('imageUrl'),
                isLoggedIn = trademanModel.get('isLoggedIn');
                if (imageUrl && isLoggedIn){
                    this.$el.find('#mobileProfile').css('background', 'url('+ trademanModel.get('imageUrl') +') 0 0 no-repeat').removeClass('hide');
                    this.$el.find('.phone-pic').addClass('hide');
                } else {
                    this.$el.find('#mobileProfile').addClass('hide');
                    this.$el.find('.phone-pic').removeClass('hide');
                }
            }
        });
    });