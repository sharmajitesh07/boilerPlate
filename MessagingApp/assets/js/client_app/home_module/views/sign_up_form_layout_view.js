define(['backbone', 'compiled_templates',
'appConstants',
'util/error_handler_util',
'util/fb_callbacks_util',
'util/generic_util',
'util/google_callbacks_util',
'marionette'],
function (Backbone, Templates, ClientConstants,
ErrorHandler, FbCallBackUtil,
GenericUtil, GoogleCallBackUtil) {
    //ItemView provides some default rendering logic
    'use strict';
    var LoginFormView = Backbone.Marionette.LayoutView.extend({
        template: Templates.signUpFormTemplate,
        //className: 'column medium-4 margin-t50',
        ui: {
            'errorDiv': '#error',
            'loginForm': '#loginForm',
            'rememberMe': '#rememberMe',
            'headerMessage': '#message',
            'passwordToggle': '#passwordToggle',
            'password': '#password'
        },
        bindings: {
            'input[name=name]': {
                observe: 'name',
                events: ['blur'],
                setOptions: {
                    validate: true
                },
                onSet: function (value) {
                    this.ui.errorDiv.text('');
                    return value;
                }
            },
            'input[name=email]': {
                observe: 'email',
                events: ['blur'],
                setOptions: {
                    validate: true
                },
                onSet: function (value) {
                    this.ui.errorDiv.text('');
                    return value;
                }
            },
            'input[name=password]': {
                observe: 'password',
                events: ['blur', 'change'],
                setOptions: {
                    validate: true
                },
                onSet: function (value) {
                    this.ui.errorDiv.text('');
                    return value;
                }
            },
            'input[name=contact]': {
                observe: 'contact',
                events: ['blur'],
                setOptions: {
                    validate: true
                },
                onSet: function (value) {
                    this.ui.errorDiv.text('');
                    return value;
                }
            }
        },
        events: {
            'keypress #password': 'checkForEnter',
            'keypress #contact': 'checkForZero',
            'click #signUpBtn': 'signUpUser',
            'click .facebook': 'loginFb',
            'click .google': 'loginGoogle',
            'click @ui.passwordToggle': 'passwordToggle'
        },
        initialize: function () {
            var isDetailedMessageShown = this.model.get('isPostJob') && !(this.model.get('byPassUser'));
            this.model.set('isDetailedMessageShown', isDetailedMessageShown);
        },
        passwordToggle: function () {
            if (this.ui.passwordToggle.text() === 'Show') {
                this.ui.passwordToggle.text('Hide');
                this.ui.password[0].type = 'text';
            } else {
                this.ui.passwordToggle.text('Show');
                this.ui.password[0].type = 'password';
            }
        },
        checkForZero: function (event) {
            if (!this.$el.find('#contact').val() && event.keyCode && (event.keyCode === 96 || event.keyCode === 48)) {
                event.preventDefault();
            }
        },
        checkForEnter: function (event) {
            if (event.keyCode && event.keyCode === 13) {
                this.signUpUser();
            }
        },
        signUpUser: function () {
            this.ui.errorDiv.text('');
            if (this.model.isValid(true)) {
                GenericUtil.loaderShowHide(true);
                var that = this;
                var requestObject = {
                    'name': this.model.get('name'),
                    'contact': this.model.get('contact'),
                    'email': this.model.get('email'),
                    'password': this.model.get('password')
                };
                //var loginForm = this.ui.loginForm[0];
                this.model.url = ClientConstants.VENDOR_REGISTRATION_URL;
                if (this.model.get('isPostJob')) {
                    requestObject.userID = this.model.get('userId');
                    this.model.url = ClientConstants.REGISTER_CUSTOMER;
                }
                this.model.save(null, {
                    data: JSON.stringify(requestObject),
                    contentType: 'application/JSON',
                    success: function(model, response) {
                        console.log(model);
                        if (that.model.get('isPostJob')) {
                            trademanModel.set({
                                'name': that.model.get('name'),
                                'trademanID': response.userID,
                                'userid': that.model.get('email'),
                                'isLoggedIn': true,
                                'userRole': 'customer'
                            });
                            GenericUtil.setSessionValues();
                            window.location.href = '#jobListing';
                        } else if (response.success && (response.success === 'true' || response.success === true)) {
                            trademanModel.set({
                                'name': that.model.get('name'),
                                'trademanID': response.trademanid,
                                'userid': that.model.get('email'),
                                'isLoggedIn': true,
                                'userRole': 'trademan'
                            });
                            GenericUtil.setSessionValues();
                            window.location.href = '#vendorRegistration';
                        } else {
                            that.model.unset('errorID');
                            that.model.unset('trademanid');
                            that.model.unset('success');
                            that.ui.errorDiv.text(ErrorHandler.getErrorText(response.errorID, 'signUpErrors'));
                            that.$el.foundation('equalizer');
                            GenericUtil.loaderShowHide(false);
                        }
                    },
                    error: function () {
                        that.model.unset('errorID');
                        that.model.unset('trademanid');
                        that.model.unset('success');
                        that.ui.errorDiv.text('Could not sign you up due to some technical error. Please try again.');
                        that.$el.foundation('equalizer');
                        GenericUtil.loaderShowHide(false);
                    }
                });
            } else {
                this.$el.foundation('equalizer');
            }
        },
        onRender: function () {
            var that = this;
            this.stickit();
            if (!this.bound) {
                Backbone.Validation.bind(this, {
                    forceUpdate: true,
                    selector: 'id',
                    valid: function(view, attr) {
                        var inputField = view.$el.find('#' + attr);
                        inputField.parent().removeClass('error');
                        that.$el.find('small.error.' +attr).text('').addClass('hide');
                        that.$el.foundation('equalizer');
                    },
                    invalid: function(view, attr, error) {
                        var inputField = view.$el.find('#' + attr);
                        inputField.parent().addClass('error');
                        that.$el.find('small.error.' +attr).text(error).removeClass('hide');
                        that.$el.foundation('equalizer');
                        }
                    });
                this.bound = true;
            }
        },
        onShow: function () {
            if (this.model.get('isPostJob')) {
                this.$el.find('#name').attr('disabled', true);
                this.$el.find('#contact').attr('disabled', true);
            }
            jQuery(document).foundation();
        },
        loginFb: function () {
            FbCallBackUtil.clickFBButton(this.model.get('isPostJob'));
        },
        loginGoogle: function () {
            GoogleCallBackUtil.initGoogleLogin(this.model.get('isPostJob'));
        }
    });
    return LoginFormView;
});