define(['backbone', 'compiled_templates',
'homeModule/views/login_form_layout_view',
'homeModule/views/sign_up_form_layout_view',
'homeModule/models/signup_model',
'util/generic_util',
'global_vent'],
    function (Backbone, Templates,
    LoginFormView, SignUpFormView, SignUpModel, GenericUtil,
    globalVent) {
        //ItemView provides some default rendering logic
        'use strict';
        var LoginLayoutView = Backbone.Marionette.LayoutView.extend({
            template: Templates.loginViewTemplate,
            //className: 'heroSection margin-t50',
            initialize: function () {
                this.listenTo(globalVent, 'showView:loginPage', this.showLoginFormView);
                this.listenTo(globalVent, 'showView:confirmPin', this.showConfirmPinView);
                this.listenTo(globalVent, 'showView:forgotPinView', this.showForgotPinView);
            },
            resetOldData: function () {
                GenericUtil.clearCachedModels();
            },
            onShow: function () {
                var that = this;
                require(['fb', 'libs/google/client_platform'], function () {
                    if (that.getOption('viewNeeded') === 'signup') {
                        that.showSignUpScreen();
                    } else {
                        that.showLoginFormView();
                    }
                });
                
                
            },
            regions: {
                leftRegion: '#leftRegion',
                centerRegion: '#centerRegion',
                rightRegion: '#rightRegion'
            },
            events: {
                'click #forgotPin': 'showForgotPinView'
                //'click #sign-up-btn': 'showSignUpScreen',
                //'click #log-in-btn': 'showLoginFormView'
            },
            showLoginFormView: function () {
                this.centerRegion.show(new LoginFormView({
                    model: this.model
                }));
                globalVent.trigger('modify:header', null);
            },
            showForgotPinView: function () {
                this.centerRegion.show(new ForgotPasswordView({
                    model: new ForgotPasswordModel()
                }));
            },
            showConfirmPinView: function () {
                this.centerRegion.show(new ConfirmPinView({
                    model: new ConfirmPinModel()
                }));
            },
            showSignUpScreen: function () {
                var object = {};
                if (this.model.get('isPostJob') && this.model.get('name')) {
                    object = {
                        isPostJob: true,
                        byPassUser: this.model.get('byPassUser') ? this.model.get('byPassUser') : false,
                        name: this.model.get('name'),
                        contact: this.model.get('contact'),
                        userId: this.model.get('userId')
                    };
                }
                this.centerRegion.show(new SignUpFormView({
                    model: new SignUpModel(object)
                }));
                globalVent.trigger('modify:header', null);
            }
         });
        return LoginLayoutView;
    });