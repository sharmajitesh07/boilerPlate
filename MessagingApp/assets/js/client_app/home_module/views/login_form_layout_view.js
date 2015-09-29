define(['backbone', 'compiled_templates',
'appConstants',
'util/fb_callbacks_util',
'util/generic_util',
'util/google_callbacks_util', 'global_vent',
'marionette'],
function (Backbone, Templates, ClientConstants, FbCallBackUtil, GenericUtil, GoogleCallBackUtil, globalVent) {
    //ItemView provides some default rendering logic
    'use strict';
    var LoginFormView = Backbone.Marionette.LayoutView.extend({
        template: Templates.loginFormTemplate,
        //className: 'column medium-4 margin-t50',
        ui: {
            'errorDiv': '#error',
            'loginForm': '#loginForm',
            'rememberMe': '#rememberMe',
            'headerMessage': '#message',
            'key': '#key'
        },
        bindings: {
            'input[name=userid]': {
                observe: 'userid',
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
            }
        },
        events: {
            'keypress #password': 'checkForEnter',
            'click #loginButton': 'loginUser',
            'click .facebook': 'loginFb',
            'click .google': 'loginGoogle'
        },
        initialize: function () {
            var isDetailedMessageShown = this.model.get('isPostJob') && !(this.model.get('byPassUser'));
            this.model.set('isDetailedMessageShown', isDetailedMessageShown);
        },
        checkForEnter: function (event) {
            if (event.keyCode && event.keyCode === 13) {
                this.loginUser();
            }
        },
        loginUser: function () {
            this.ui.errorDiv.text('');
            if (this.model.isValid(true)) {
                trademanModel.unset('jobId');
                GenericUtil.loaderShowHide(true);
                var that = this;
                if (this.ui.rememberMe[0].checked) {
                    this.ui.key.attr('value', true);
                } else {
                    this.ui.key.attr('value', false);
                }
                var loginForm = this.ui.loginForm[0];
                loginForm.action = ClientConstants.LOGIN_URL;
                jQuery(loginForm).ajaxSubmit({
                    global: false,
                    success: function(response) {
                        if (response.success) {
                            var userName, 
                            emailID, 
                            trademanID = null, 
                            completeObject, 
                            registrationStatus = null;

                            if (response.trademanBusinessDetail) {
                                trademanModel.set('userRole', response.trademanBusinessDetail.role ? response.trademanBusinessDetail.role : 'trademan');
                                userName = response.trademanBusinessDetail.name;
                                emailID = response.trademanBusinessDetail.email;
                                trademanID = response.trademanBusinessDetail.trademanID;
                                completeObject = response.trademanBusinessDetail;
                                registrationStatus = response.trademanBusinessDetail.registrationStatus;
                            } else if (response.customerDetail) {
                                trademanModel.set('userRole', 'customer');
                                userName = response.customerDetail.name;
                                emailID = response.customerDetail.email;
                                trademanID = response.customerDetail.userID;
                                completeObject = response.trademanBusinessDetail;
                            }
                            trademanModel.set({
                                'name': userName,
                                'trademanID': trademanID,
                                'userid': emailID,
                                'isLoggedIn': true,
                                'registrationStatus': registrationStatus,
                                'completeObject': completeObject
                            });
                            GenericUtil.setSessionValues();
                            if (that.ui.rememberMe[0].checked) {
                                localStorage.setItem('rememberMe', true);
                                localStorage.setItem('name', userName);
                                localStorage.setItem('userid', emailID);
                                localStorage.setItem('msg', response.msg);
                            } else {
                                localStorage.clear();
                            }
                            if (that.model.get('isPostJob')) {
                                trademanModel.set('activeRole', 'customer');
                                window.location.href = '#jobListing';
                            } else if (trademanModel.get('userRole') === 'customer') {
                                globalVent.trigger('change:userRole', true);
                                window.location.href = '#jobListing';
                            } else {
                                globalVent.trigger('change:userRole', false);
                                if (response.trademanBusinessDetail && response.trademanBusinessDetail.registrationStatus === 'P') {
                                    window.location.href = '#vendorRegistration';
                                } else {
                                    window.location.href = '#vendorLeads';
                                }
                            }
                            
                            
                        } else {
                            GenericUtil.loaderShowHide(false);
                            that.ui.errorDiv.text(response.msg);
                        }
                    },
                    error: function () {
                        GenericUtil.loaderShowHide(false);
                        that.ui.errorDiv.text('Incorrect email or password, Please try again');
                    }
                });
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
                    },
                    invalid: function(view, attr, error) {
                        var inputField = view.$el.find('#' + attr);
                        inputField.parent().addClass('error');
                        that.$el.find('small.error.' +attr).text(error).removeClass('hide');
                        }
                    });
                this.bound = true;
            }
        },
        onShow: function () {
            jQuery(document).foundation();
        },
        checkRemberMe: function () {
            if (localStorage.getItem('rememberMe')) {
                this.ui.rememberMe[0].checked = true;
                this.model.set('userid', localStorage.getItem('userid'));
                this.model.set('password', localStorage.getItem('pwd'));
                //this.ui.headerMessage.text('Welcome ' + localStorage.getItem('name') + ', Please enter your password to continue.');
            }
        },
        loginFb: function () {
            //top.location = 'http://graph.facebook.com/oauth/authorize?client_id=859933510739850&scope=public_profile&redirect_uri=http://localhost:8001/QuoteMyKaam/#vendorRegistration';
            FbCallBackUtil.clickFBButton(this.model.get('isPostJob'));
        },
        loginGoogle: function () {
            GoogleCallBackUtil.initGoogleLogin(this.model.get('isPostJob'));
        }
    });
    return LoginFormView;
});