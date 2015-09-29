define(['backbone', 'compiled_templates',
'util/generic_util', 'global_vent', 'marionette'],
    function (Backbone, Templates,
    GenericUtil, globalVent) {
        //ItemView provides some default rendering logic
        'use strict';
        return Backbone.Marionette.LayoutView.extend({
            getTemplate: function () {
                return Templates.loggedOutHeader;
            },
            tagName: 'ul',
            className: 'right',
            ui: {
                'topBar': '.toggle-topbar',
                'registerTrader': '#registerTrader',
                'titleBar': '.sub-nav-container',
                'imageHeading': '.header-image',
                'dynamicHeading': '#dynamicHeading',
                'nav': 'nav',
                'changePassword': '#changePassword',
                'changeToTradeMan': '#changeToTradeMan'
            },
            events: {
                'click @ui.topBar' : 'expandMenu',
                'click @ui.registerTrader': 'registerTrader',
                'click .fbLogin': 'loginFb',
                'click .logOut': 'logout',
                'click @ui.changeToTradeMan': 'changeToTradeMan',
                'click #vendorView': 'vendorView',
                'click #customerView': 'customerView'
            },
            customerView: function () {
                trademanModel.unset('activeRole');
                globalVent.trigger('change:userRole', true);
            },
            vendorView: function () {
                trademanModel.unset('activeRole');
                globalVent.trigger('change:userRole', false);
            },
            initialize: function () {

            },
            onShow: function () {
                jQuery('body').removeClass('f-topbar-fixed');
                jQuery('.toggle-topbar').click(function () {
                    jQuery('nav').toggleClass('expanded');
                });
            },
            expandMenu: function () {
                jQuery('nav').toggleClass('expanded');
            },
            changeToTradeMan: function () {
                trademanModel.set('userRole', 'trademan');
                this.model.set('isCustomer', false);
            },
            modifyHeader: function (header) {
                if (header) {
                    jQuery('.sub-nav-container').removeClass('hide');
                    jQuery('.header-image').removeClass('hide');
                    jQuery('.sub-nav-container #dynamicHeading').text(header);
                } else {
                    jQuery('.sub-nav-container').addClass('hide');
                    jQuery('.header-image').addClass('hide');
                    jQuery('#header-region').removeClass('margin-0');
                }
            },
            logout: function () {
                //var that = this;
                GenericUtil.logoutUser();
            },
            renderView: function () {
                //even when the userRole is not present it is customer :)
                this.model.set('isCustomer', trademanModel.get('userRole') !== 'trademan');
                this.model.set('name', trademanModel.get('name'));
                this.model.set('registrationPending', trademanModel.get('registrationStatus') === 'P');
                this.render();
                var imageUrl = trademanModel.get('imageUrl');
                if(imageUrl){
                    this.$el.find('.profile-pic').css('background', 'url('+ trademanModel.get('imageUrl') +') 0 0 no-repeat');
                }
                
                
            },
            changePicture: function () {
                this.$el.find('.profile-pic').css('background', 'url('+ trademanModel.get('imageUrl') +') 0 0 no-repeat');
            }           
        });
    });