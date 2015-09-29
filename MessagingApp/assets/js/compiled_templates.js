define(['handlebars'], function(Handlebars) {

this["template"] = this["template"] || {};

this["template"]["contactUsTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\r\n    <section class=\"row margin-t20\" id=\"formContainerDiv\">\r\n      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n      <div class=\"column small-12 large-8 text-center\">\r\n        \r\n        \r\n        \r\n        <h4 class=\"text-center border-btm\">Contact us by sending message</h4>\r\n        <p class=\"\">We'd love to hear from you. Drop us a line with any feedback or questions and we will get back to you at the earliest.</p>\r\n        <div class=\"row\">\r\n          <div class=\"columns small-12 medium-6 form-icon no-space\">\r\n            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name\">\r\n            <i class=\"fi fi-torso\"></i>\r\n            <small class=\"error hide name\"></small>\r\n          </div>\r\n          <div class=\"columns small-12 medium-6 form-icon no-space\">\r\n            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your email address\">\r\n            <i class=\"fi fi-mail\"></i>\r\n            <small class=\"error hide email\"></small>\r\n          </div>\r\n          <div class=\"columns\">\r\n            <textarea rows=\"8\" name=\"description\" id=\"description\" placeholder=\"Please enter your comments\"></textarea>\r\n            <small class=\"error hide description\"></small>\r\n          </div>\r\n          <div class=\"text-center column\">\r\n            <a href=\"javascript:void(0)\" id=\"contactUs\" class=\"button small blue column\">Send message</a>\r\n          </div>\r\n          <!--div class=\"column or-seperator-contact\"></div-->\r\n          <div class=\"column\">\r\n            <div class=\"transulant radius\">\r\n              <div class=\"row collapse\">\r\n                <div class=\"padding-a5 column text-center small-only-text-center\">\r\n                  <div>or call us at</div>\r\n                  <i class=\"fi fi-telephone\"></i> : <a href=\"tel:09899763411\">09899763411</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n\r\n    <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n  </section>\r\n\r\n  <section class=\"row margin-t20 hide\" id=\"successMessage\">\r\n      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n      <div class=\"column small-12 large-8 text-center\">\r\n        <h4 class=\"text-center border-btm\" id=\"message-header\">Your message has been posted</h4>\r\n        <p class=\"\" id=\"message-content\">Thanks for writing to us. We will get back to you soon.</p>\r\n      </div>\r\n      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n  </section>\r\n  \r\n";
},"useData":true});

this["template"]["editProfileTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section class=\"column medium-2 hide-for-small-only\"  id=\"leftRegion\">&nbsp;</section>\r\n<section class=\"column medium-8\">\r\n    <article class=\"panel radius\" id=\"centerRegion\" style=\"min-height:100px;\">\r\n        <div class=\"panel-container\">\r\n            \r\n            \r\n            <h4 id=\"editHeader\" class=\"text-center border-btm margin-b20\">Edit Profile</h4>\r\n            <h6 id=\"editText\" class=\"text-center margin-b20 hide\">Your profile has been updated.</h6>\r\n                <form method=\"post\" id=\"changeProfileForm\">\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6 form-icon\">\r\n                            <input type=\"email\" name=\"name\" id=\"name\" placeholder=\"Enter your name\" value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n                            <input disabled='disabled' type=\"email\" name=\"email\" id=\"email\" value=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\">\r\n                            <input type=\"text\" name=\"number\" id=\"number\" placeholder=\"Enter your contact number\" value=\""
    + alias3(((helper = (helper = helpers.contact || (depth0 != null ? depth0.contact : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contact","hash":{},"data":data}) : helper)))
    + "\">\r\n                            <input type=\"hidden\" name=\"type\" value=\"trademan\">\r\n                            <input type=\"hidden\" name=\"userid\">\r\n                            <input type=\"hidden\" name=\"token\">\r\n                            <input type=\"hidden\" name=\"trademanid\">\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns text-center\">\r\n                            <small class=\"error hide\" id=\"error\"></small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6\">\r\n                            <a href=\"javascript:void(0)\" class=\"column button radius small blue last\" id=\"submitRequest\">Submit </a>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                    </div>\r\n                </form>\r\n        </div>\r\n		<form method=\"post\" id=\"updateProfileForm\">\r\n        </form>\r\n		\r\n    </article>\r\n</section>\r\n<section class=\"column medium-2 hide-for-small-only\" id=\"rightRegion\">&nbsp;</section>\r\n";
},"useData":true});

this["template"]["editProfileWrapperTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"column medium-2 hide-for-small-only\"  id=\"leftRegion\">&nbsp;</section>\r\n<section class=\"column medium-8\">\r\n    <article class=\"panel radius\" id=\"centerRegion\" style=\"min-height:100px;\">\r\n        <div class=\"panel-container\" id=\"editProfile\">\r\n            \r\n            \r\n        </div>\r\n		\r\n		<div class=\"panel-container\" id=\"editSettings\">\r\n           \r\n        </div>\r\n    </article>\r\n</section>\r\n<section class=\"column medium-2 hide-for-small-only\" id=\"rightRegion\">&nbsp;</section>\r\n";
},"useData":true});

this["template"]["editSettingsTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h4 id=\"messageHeader\" class=\"text-center border-btm margin-b20\">Choose a new password</h4>\r\n            <h6 id=\"messageText\" class=\"text-center margin-b20 hide\">Your password has been changed.</h6>\r\n                <form method=\"post\" id=\"changePasswordForm\">\r\n                        <input type=\"hidden\" name=\"oldKey\" id=\"oldKey\">\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6 form-icon\">\r\n                            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Enter New Password\">\r\n                            <input type=\"hidden\" name=\"type\" value=\"trademan\">\r\n                            <input type=\"hidden\" name=\"userid\">\r\n                            <input type=\"hidden\" name=\"token\">\r\n                            <input type=\"hidden\" name=\"trademanid\">\r\n                            <i class=\"fi fi-lock\"></i>\r\n                            <small class=\"error hide password\"></small>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6 form-icon\">\r\n                            <input type=\"password\" name=\"repeatPassword\" id=\"repeatPassword\" placeholder=\"Re-enter Password\">\r\n                            <i class=\"fi fi-lock\"></i>\r\n                            <small class=\"error hide repeatPassword\"></small>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns text-center\">\r\n                            <small class=\"error hide\" id=\"error\"></small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6\">\r\n                            <a href=\"javascript:void(0)\" class=\"column button radius small blue last\" id=\"submitRequest\">Submit </a>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                    </div>\r\n                </form>\r\n        </div><div class=\"panel-edit-bar padding-16 text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"small backToMain\">Back to Log-in page</a>\r\n        </div>";
},"useData":true});

this["template"]["burgerMenuTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <li id=\"whyUs\" class=\"\">\r\n        <a href=\"#providerHomePage/1\"><em class=\"icon ic-1x ic-fl ic-why\"></em>Why Us</a>\r\n      </li>\r\n\r\n      <li id=\"howItWorks\" class=\"\">\r\n        <a href=\"#providerHomePage/2\"><em class=\"icon ic-1x ic-fl ic-how-works\"></em>How it works</a>\r\n      </li>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "      <li class=\"\">\r\n        <a href=\"#welcome\"><em class=\"icon ic-1x ic-fl ic-post-job\"></em>Post a request</a>\r\n      </li>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isTrademan : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "    \r\n      \r\n    \r\n      <li class=\"logout\"><a href=\"javascript:void(0)\">\r\n        <em class=\"icon ic-1x ic-fl ic-logout\"></em>\r\n        <span>Logout</span>\r\n      </a></li>\r\n\r\n";
},"6":function(depth0,helpers,partials,data) {
    return "        <li id=\"vendorView\"><a href=\"#vendorLeads\">\r\n          <em class=\"icon ic-1x ic-fl ic-business-view\"></em>\r\n          <span>Business View</span>\r\n        </a></li>\r\n\r\n        <li id=\"customerView\"><a href=\"#jobListing\">\r\n          <em class=\"icon ic-1x ic-fl ic-customer-view\"></em>\r\n          <span>Customer View</span>\r\n        </a></li>\r\n\r\n        <li><a href=\"#resetPassword/change\">\r\n          <em class=\"icon ic-1x ic-fl ic-change-password\"></em>\r\n          <span>Change password</span>\r\n        </a></li>\r\n\r\n";
},"8":function(depth0,helpers,partials,data) {
    return "\r\n        <li><a href=\"#jobListing\">\r\n          <em class=\"icon ic-1x ic-fl ic-my-account\"></em>\r\n          <span>My requests</span>\r\n        </a></li>\r\n\r\n        <li><a href=\"#editProfile\">\r\n          <em class=\"icon ic-1x ic-fl ic-customer-view\"></em> \r\n          <span>Edit profile</span>\r\n        </a></li>\r\n\r\n        <li><a href=\"#resetPassword/change\">\r\n          <em class=\"icon ic-1x ic-fl ic-change-password\"></em> \r\n          <span>Change password</span>\r\n        </a></li>\r\n\r\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isTrademan : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n        <li class=\"\">\r\n          <a href=\"#login\"><em class=\"icon ic-1x ic-fl ic-login\"></em>Login</a>\r\n        </li>\r\n\r\n";
},"11":function(depth0,helpers,partials,data) {
    return "\r\n        <li class=\"\">\r\n          <a href=\"#signup\"><em class=\"icon ic-1x ic-fl ic-register\"></em>Register</a>\r\n        </li>\r\n\r\n";
},"13":function(depth0,helpers,partials,data) {
    return "\r\n        <li id=\"changeToTradeMan\"><a href=\"#providerHomePage/3\">\r\n          <em class=\"icon ic-1x ic-fl ic-list-business\"></em> \r\n          <span>List your business</span>\r\n        </a></li>\r\n\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<aside class=\"left-off-canvas-menu\">\r\n  <!-- Right Nav Section -->\r\n  <div id=\"toFocus\" class=\"\"></div>\r\n  <ul class=\"off-canvas-list\">\r\n    <li id=\"whyUs\" class=\"\">\r\n        <a href=\"#welcome\"><em class=\"icon ic-1x ic-fl ic-home\"></em>Home</a>\r\n      </li>\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isTrademan : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "    \r\n    <li class=\"\">\r\n      <a href=\"#contactUs\"><em class=\"icon ic-1x ic-fl ic-contact-us\"></em>Contact us</a>\r\n    </li>\r\n\r\n  </ul>\r\n</aside>\r\n<a class=\"exit-off-canvas\"></a>";
},"useData":true});

this["template"]["comingSoon"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"row\">\r\n\r\n      <section class=\"column medium-2 hide-for-small-only\">&nbsp;\r\n      </section>\r\n       <section class=\"column medium-8 text-center\">\r\n        <p><img src=\"assets/img/coming-soon.png\" /></p>\r\n       \r\n<blockquote>Very soon we would be launching the full site and send you requests from customers. You can view customer work  requests online, provide quotes, and grow your business.\r\n<br/>\r\n<br/>\r\nMeanwhile please <strong>update your profile details</strong> � First thing customer sees!\r\n</blockquote>\r\n\r\n<h6>We will notify you once we fully launch this site. </h6>\r\n\r\n<!--h6>For any queries you can write to us at - <a href=\"#\">quotemykaam@gmail.com</a></h6-->\r\n      </section>\r\n       <section class=\"column medium-2 hide-for-small-only\">&nbsp;\r\n      </section>\r\n     \r\n    </section>\r\n    <br><br>";
},"useData":true});

this["template"]["footerViewTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<footer id=appFooterRegion>\r\n    <div class=\"row collapse app-footer-region\">\r\n        <div class=\"columns small-11 small-centered\">\r\n            <div class=row data-equalizer>\r\n                <div class=\"columns small-12 medium-6 col-0\" data-equalizer-watch>\r\n                    <div id=\"footerAboutRegion\">\r\n                        <div class=\"about-region\">\r\n                            <div class=\"app-logo white\">\r\n                                about quote my kaam\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--div class=\"columns small-12 medium-4 col-1\" data-equalizer-watch>\r\n                    <div id=\"footerLinksRegion\">\r\n                        <div class=footer-links>\r\n                            <ul class=no-bullet>\r\n                                <li><a href=\"#providerHomePage/1\">Why Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"#providerHomePage/2\">How It Works</a> </li>\r\n                                <li><a href=\"#contactUs\">Contact Us</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"#welcome\">Post Your Request</a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div-->\r\n                <div class=\"columns small-12 medium-6 col-2\" data-equalizer-watch>\r\n                    <div id=footerShareRegion>\r\n                        <div class=\"social-share clearfix\">\r\n                            <span>You can<br>Follow us on</span>\r\n                            <ul class=\"inline-list left\">\r\n                               <li> <a class=\"icon ic-2x ic-social-tw\" href=javascript:void(0);></a> </li> \r\n                               <li> <a class=\"icon ic-2x ic-social-fb\" href=javascript:void(0);></a> </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div> \r\n                </div> \r\n            </div>\r\n        </div>\r\n    </div> \r\n</footer>";
},"useData":true});

this["template"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row collapse \">\r\n  <div class=\"column\">\r\n    <span id=\"mobileProfile\" class=\"right profile-pic show-for-small-only hide\"></span>\r\n    <nav class=\"top-bar\" data-topbar role=\"navigation\">\r\n      <ul class=\"title-area\">\r\n\r\n        <li class=\"name\">\r\n          <button class=\"show-for-small-only left c-hamburger c-hamburger--htla\">\r\n            <span>toggle menu</span>\r\n          </button>&nbsp;&nbsp;\r\n          <h1 class=\"logo left\">\r\n            <a href=\"#\">\r\n              <!--img src=\"assets/img/qmk-logo.svg\" style=\"height:100%\"-->\r\n            </a>\r\n          </h1>\r\n      </li>\r\n      <!-- Remove the class \"menu-icon\" to get rid of menu icon. Take out \"Menu\" to just have icon alone -->\r\n      \r\n      </ul>\r\n      <section class=\"top-bar-links hide-for-small-only\" id=\"topSection\">\r\n        <!-- Right Nav Section -->\r\n        \r\n      </section>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"subNavigation\" class=\"subNavigation\">\r\n\r\n</div>";
},"useData":true});

this["template"]["loggedInHeader"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "	<li class=\"\"><a href=\"#welcome\">Post a request</a></li>\r\n	<li class=\"\"><a href=\"#contactUs\">Contact us</a></li>\r\n	<li class=\"\"><a href=\"#jobListing\">My account</a></li>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "	<li class=\"\"><a href=\"#providerHomePage/1\">Why us</a></li>\r\n	<li class=\"\"><a href=\"#providerHomePage/2\">How it works</a></li>\r\n	<li class=\"\"><a href=\"#contactUs\">Contact us</a></li>\r\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.registrationPending : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    return "		<li class=\"\">\r\n			|&nbsp;\r\n			<a id=\"vendorView\" href=\"#vendorLeads\">Business view</a>\r\n			&nbsp;&nbsp;\r\n			<a id=\"customerView\" href=\"#jobListing\">Customer view</a>\r\n			&nbsp;|\r\n		</li>\r\n";
},"6":function(depth0,helpers,partials,data) {
    return "	  	<li><a href=\"#editProfile\">Edit profile</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isCustomer : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<li class=\"welcome\">\r\n	<a style=\"text-transform: capitalize;\" href=\"javascript:void(0)\" data-dropdown=\"drop1\" aria-controls=\"drop1\" aria-expanded=\"false\">\r\n\r\n		Hi, "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " &nbsp;\r\n		<span class=\"right toggle-panel close\"></span>\r\n		<span class=\"right profile-pic\"></span>\r\n\r\n	</a>\r\n	<ul id=\"drop1\" data-dropdown-content class=\"f-dropdown\" role=\"menu\" aria-hidden=\"false\" tabindex=\"-1\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isCustomer : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	  <li><a href=\"#resetPassword/change\" id=\"changePassword\">Change password</a></li>\r\n	  <li><a href=\"javascript:void(0)\" class=\"logOut\">Logout</a></li>\r\n	</ul>\r\n</li>\r\n\r\n";
},"useData":true});

this["template"]["loggedOutHeader"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "	<li class=\"\"><a href=\"#welcome\">Post a request</a></li>\r\n	<li class=\"\"><a href=\"#contactUs\">Contact us</a></li>\r\n	<li class=\"\"><a id=\"loginLink\" href=\"#login\" class=\"button tiny secondary radius login\">Login</a> </li>\r\n	<li class=\"\"><a href=\"#providerHomePage/3\" id=\"changeToTradeMan\" class=\"button tiny radius red-button\">List your business</a></li>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "	<li class=\"\"><a href=\"#providerHomePage/1\">Why us</a></li>\r\n	<li class=\"\"><a href=\"#providerHomePage/2\">How it works</a></li>\r\n	<li class=\"\"><a href=\"#welcome\">Post a request</a></li>\r\n	<li class=\"\"><a href=\"#contactUs\">Contact us</a></li>\r\n	<li class=\"\"><a id=\"loginLink\" href=\"#login\" class=\"button tiny secondary radius login\">Login</a> </li>\r\n	<li class=\"\"><a href=\"#signup\" class=\"button tiny radius red-button\">Register now</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isCustomer : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});

this["template"]["subNavigation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <div class=\"column medium-9 medium-centered\" style=\"margin-right:initial;\">\r\n          <ul class=\"sub-nav-new\">\r\n            <li class=\"small-6 medium-4 small-text-center\" name=\"postJobLink\">\r\n              <div class=\"small-11\">\r\n              	<a id=\"jobCategory\" href=\"#welcome\" name=\"navigationLink\">Post a request</a>\r\n              </div>\r\n            </li>\r\n            <li class=\"active small-6 medium-4 small-text-center\" name=\"myRequestsLink\">\r\n              <div class=\"small-11\">\r\n            	 <a href=\"#jobListing\" class=\"small-11\" name=\"navigationLink\">My requests</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n         </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <div class=\"column medium-9 medium-centered\">\r\n          <ul class=\"sub-nav-new\">\r\n            <li class=\"viewLeads active small-4 small-text-center\" name=\"newLeadsLink\">\r\n              <div class=\"small-11\">\r\n	              <a id=\"leadsLink\" href=\"#vendorLeads\" name=\"navigationLink\">\r\n	                <span class=\"hide-for-small-only\">New Leads</span>\r\n	                <span class=\"show-for-small-only\">New<br> Leads</span>\r\n	                <span id=\"activeLeadSpan\" class=\"round success label\"></span>\r\n	              </a>\r\n             </div> \r\n            </li>\r\n            <li class=\"viewQuotes small-4 small-text-center\" name=\"submittedQuotesLink\">\r\n            	<div class=\"small-11\">\r\n	              <a href=\"#vendorQuotes\" name=\"navigationLink\">\r\n	                <span class=\"hide-for-small-only\">SUBMITTED QUOTES</span>\r\n	                <span class=\"show-for-small-only\">SUBMITTED<br> QUOTES</span>\r\n	              </a>\r\n	            </div>  \r\n            </li>\r\n            <li class=\"viewProfile small-4 enabled small-text-center\" name=\"profileLink\">\r\n              <div class=\"small-11\">\r\n	              <a href=\"#vendorProfile\" name=\"navigationLink\">\r\n	                <span class=\"hide-for-small-only\">YOUR PROFILE</span>\r\n	                <span class=\"show-for-small-only\">YOUR<br> PROFILE</span>\r\n	              </a>\r\n	             </div>    \r\n            </li>\r\n          </ul>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"subNavigationId\" class=\"sub-nav-container\">  \r\n  <div class=\"row collapse\">\r\n    \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isCustomerView : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      \r\n  </div>\r\n</div>";
},"useData":true});

this["template"]["hiredSomeone"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"verifyDetails\" class=\"reveal-modal medium\" data-reveal=\"\" aria-labelledby=\"firstModalTitle\" aria-hidden=\"true\" role=\"dialog\">\r\n      <div id=\"vendorView\">\r\n      <h4 id=\"modalTitle\" class=\"reveal-heading with-border\"><b>Who did you hire?</b></h4>\r\n      <div class=\"app-listing-region with-border\">\r\n		 <div id=\"vendorRegion\">\r\n		 </div>\r\n		 \r\n	  </div>\r\n	  </div>\r\n	 <div style=\"display: none;\" id=\"vendorBack\" class=\"small-centered medium-11\">\r\n					<a href=\"javascript:void(0);\">\r\n					<div class=\"small-centered\">  	   \r\n					<em class=\"icon ic-1x ic-fl ic-back-arrow\"></em>\r\n					<span class=\"reveal-heading\"><b>Please Provide Feedback</b></span>\r\n					</div>\r\n					</a>\r\n				<hr>\r\n				</div>\r\n      <div id=\"displayRegion\"></div>\r\n      <a class=\"close-reveal-modal\" aria-label=\"Close\"><em class=\"icon ic-x ic-close ic-hover\"></em></a>\r\n</div>";
},"useData":true});

this["template"]["jobEditSuccess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div data-alert class=\"alert-box info radius\" id=\"updateAlert\" >\r\n  <h2>Thank you. \r\n  <small>Your job details are updated now...</small>\r\n  </h2>\r\n  \r\n  <a href=\"javascript:void(0)\" class=\"close\">&times;</a>\r\n</div>";
},"useData":true});

this["template"]["jobListingAdvertisingPanel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "      <h5>Need Quotes For Something Else?</h5>\r\n      <ul class=\"circle\">\r\n        <li>Plumbers <a href=\"#\">from Rs. 250 per hour</a></li>\r\n        <li>Air conditioning electricians <a href=\"#\">from Rs. 450 per hour</a></li>\r\n        <li>TV anteena specialist</li>\r\n      </ul>\r\n      <p>We have 105,000 local businesses ready to quote on <a href=\"#\">other jobs</a> you might need done.</p>\r\n      <div class=\"panel\">\r\n        <h4>Advertisings</h4>\r\n      </div>\r\n";
},"useData":true});

this["template"]["jobListingEmptyView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n      Your requests would appear here. Post a request and start getting quotes for your requests.\r\n</div>";
},"useData":true});

this["template"]["jobListingItemViewNew"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "\r\n         "
    + this.escapeExpression(((helper = (helper = helpers.noOfQuotes || (depth0 != null ? depth0.noOfQuotes : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"noOfQuotes","hash":{},"data":data}) : helper)))
    + " Quote(s)\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "         0 Quote\r\n         ";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "        <ul class=\"no-bullet mb-0\">\r\n        <li><em class=\"icon ic_x ic-address\"></em>&nbsp;"
    + this.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</li>\r\n        </ul>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return ", "
    + this.escapeExpression(((helper = (helper = helpers.submittedOnTime || (depth0 != null ? depth0.submittedOnTime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"submittedOnTime","hash":{},"data":data}) : helper)))
    + " ";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return ", "
    + this.escapeExpression(((helper = (helper = helpers.requiredTimeSlot || (depth0 != null ? depth0.requiredTimeSlot : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"requiredTimeSlot","hash":{},"data":data}) : helper)))
    + " ";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hiredVendorCompanyName : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data) {
    var helper;

  return " \r\n                <em class=\"icon ic-1x ic-fl ic-req-hired\"></em> \r\n                Hired, "
    + this.escapeExpression(((helper = (helper = helpers.hiredVendorCompanyName || (depth0 != null ? depth0.hiredVendorCompanyName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"hiredVendorCompanyName","hash":{},"data":data}) : helper)))
    + " \r\n                ";
},"14":function(depth0,helpers,partials,data) {
    return "                 <em class=\"icon ic-x ic-feedback-given ic-hover icon-svg\"></em>\r\n                 <a href=\"javascript:void(0);\" class=\"disabled\">Feedback provided</a>\r\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.noOfQuotes : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"17":function(depth0,helpers,partials,data) {
    return "                   <em class=\"icon ic-x ic-feedback icon-svg\"></em>\r\n                   <a href=\"javascript:void(0);\" data-reveal-id=\"firstModal\" class=\"feedBack\">Give feedback</a>\r\n";
},"19":function(depth0,helpers,partials,data) {
    var helper;

  return "         <span class=\"round secondary label\">\r\n         "
    + this.escapeExpression(((helper = (helper = helpers.noOfQuotes || (depth0 != null ? depth0.noOfQuotes : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"noOfQuotes","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-wrapper completed request-listing-panel\">\r\n   <div class=\"panel-badge\"> "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.noOfQuotes : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>\r\n   <div class=\"panel panel-content-wrapper\">\r\n      <div class=\"panel-content\">\r\n         <h5 class=\"content-heading jobDetailsPopUp\">\r\n          <a href=\"javascript:void(0)\" data-reveal-id=\"jobDetailModal\"><b>"
    + alias3(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobTitle","hash":{},"data":data}) : helper)))
    + "</b></a>\r\n        </h5>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "         <ul class=\"no-bullet date-list\">\r\n            <li>Posted on: "
    + ((stack1 = ((helper = (helper = helpers.submittedOn || (depth0 != null ? depth0.submittedOn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"submittedOn","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.submittedOnTime : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n            <li>Required on: "
    + ((stack1 = ((helper = (helper = helpers.requiredOnFormatted || (depth0 != null ? depth0.requiredOnFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"requiredOnFormatted","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.requiredTimeSlot : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n         </ul>\r\n      </div>\r\n      <div class=\"panel-action-bar with-border\">\r\n         <div class=\"row collapse row-gutter-b quote-status-div\">\r\n            <div class=\"columns small-9 quote-status\">\r\n               <em class=\"icon ic-1x ic-fl ic-req-"
    + alias3(((helper = (helper = helpers.jobStatusClass || (depth0 != null ? depth0.jobStatusClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobStatusClass","hash":{},"data":data}) : helper)))
    + "\"></em> \r\n               <b>"
    + alias3(((helper = (helper = helpers.jobStatus || (depth0 != null ? depth0.jobStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobStatus","hash":{},"data":data}) : helper)))
    + "</b>\r\n               <p><b>\r\n                "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.requestCompleted : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n              </b></p>\r\n            </div>\r\n			<div class=\"columns small-3 feedback-div\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.feedbackGiven : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\r\n         </div>\r\n         <div class=\"text-center\">\r\n         <button class=\"radius secondary expand-small viewQuotes\">\r\n         View quotes\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.noOfQuotes : depth0),{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "         </button>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>";
},"useData":true});

this["template"]["jobListingMainContent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\r\n<div class=\"row\">\r\n  <div class=\"column\" id=\"messageBox\">\r\n    \r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"columns small-11 medium-8 small-centered\">\r\n    <div id=\"leftRegion\">\r\n\r\n    </div>\r\n    <div id=\"rightRegion\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>";
},"useData":true});

this["template"]["jobListingView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\" id=\"jobLisitngs\">\r\n      \r\n</div>";
},"useData":true});

this["template"]["jobListingViewNew"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"requestListingRegion\">\r\n                <div class=\"request-listing-region\" id=\"jobLisitngs\">\r\n                \r\n                </div>\r\n                </section>";
},"useData":true});

this["template"]["jobSaveSuccess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div data-alert=\"\" class=\"alert-box secondary radius\" id=\"mainAlert\">\r\n  <h2>Thank you. \r\n  	<small>\r\n  		Your request has now been successfully posted and is being reviewed by service providers to provide best quote.\r\n  	</small>\r\n  </h2>\r\n  <h4>\r\n  	<small>\r\n  		We would aim to provide quotes for this job latest by \r\n  		<strong>2 hours</strong>. \r\n  		To save your time, once we have quotes ready for your review we will send you an SMS on the \r\n  		<strong>"
    + alias3(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "</strong> \r\n  		provided and on the \r\n  		<strong>"
    + alias3(((helper = (helper = helpers.emailID || (depth0 != null ? depth0.emailID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"emailID","hash":{},"data":data}) : helper)))
    + "</strong>\r\n  		You can then login using email address and password to view service provider and quote details.\r\n  	</small>\r\n  </h4>\r\n  <a href=\"javascript:void(0)\" class=\"close\">×</a>\r\n</div>";
},"useData":true});

this["template"]["vendorCollectionItemView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "assets/img/default-profile-pic.png";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <!-- <li>\r\n              <input type=\"radio\" class='selectVendor' name=\"hireVendorYes\" id=\""
    + alias3(((helper = (helper = helpers.vendorId || (depth0 != null ? depth0.vendorId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorId","hash":{},"data":data}) : helper)))
    + "\">\r\n              <label for=\""
    + alias3(((helper = (helper = helpers.vendorId || (depth0 != null ? depth0.vendorId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorId","hash":{},"data":data}) : helper)))
    + "\"><strong>"
    + alias3(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</strong><br>"
    + alias3(((helper = (helper = helpers.vendorName || (depth0 != null ? depth0.vendorName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorName","hash":{},"data":data}) : helper)))
    + "</label>\r\n            </li>-->\r\n\r\n	   \r\n\r\n            <a class=\"selectVendor list-item clearfix\" href=\"javascript:void(0)\" id=\""
    + alias3(((helper = (helper = helpers.vendorId || (depth0 != null ? depth0.vendorId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorId","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"img\">\r\n                <img src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n              </div>\r\n              <div class=\"text text-body\">\r\n                <ul class=\"no-bullet\">\r\n                  <li class=\"text-sec\"><strong>"
    + alias3(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</strong></li>\r\n                  <li>"
    + alias3(((helper = (helper = helpers.vendorName || (depth0 != null ? depth0.vendorName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorName","hash":{},"data":data}) : helper)))
    + "</li>\r\n                  <li></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n            </a>";
},"useData":true});

this["template"]["vendorCollectionView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul id=\"vendorList\" class=\"small-block-grid-1 medium-block-grid-2\"></ul>";
},"useData":true});

this["template"]["jobQueryAddressAutoSuggest"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper completed panel-1c\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper panel-1a\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\"><em class=\"icon ic-1x ic-fl ic-tick\"></em>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        <a href=\"javascript:void(0)\" class=\"action-link edit\" id=\"edit-question-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"editJobQuestions\">\r\n            <em class=\"icon ic-x ic-edit\"></em>&nbsp;Edit\r\n        </a>\r\n      </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"panel-heading\">\r\n        <h4 class=\"heading\">"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n      </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "			<div class=\"small-12 columns\">\r\n				<p>"
    + this.escapeExpression(((helper = (helper = helpers.valueEntered || (depth0 != null ? depth0.valueEntered : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"valueEntered","hash":{},"data":data}) : helper)))
    + "</p>\r\n			</div>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			<div class=\"small-12 medium-9 columns\">\r\n				<!-- <label for=\"addressLine-1\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</label>  -->\r\n				<input  type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"defaultValue","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.valueEntered || (depth0 != null ? depth0.valueEntered : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"valueEntered","hash":{},"data":data}) : helper)))
    + "\">\r\n			</div>\r\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-action-bar hide\">\r\n          <div class=\"text-center\">\r\n            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n          </div>\r\n        </div>\r\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel-action-bar\">\r\n          <div class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAnsweredOneTime : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"16":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n";
},"18":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" disabled=\"disabled\">Continue</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"panel panel-content-wrapper\"> \r\n	<div class=\"panel-content\"> \r\n		<div class=\"row\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div> \r\n	</div> \r\n\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "</div> \r\n</div>";
},"useData":true});

this["template"]["jobQueryCheckBox"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper completed panel-1c\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper panel-1a\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\"><em class=\"icon ic-1x ic-fl ic-tick\"></em>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        <a href=\"javascript:void(0)\" class=\"action-link edit\" id=\"edit-question-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"editJobQuestions\">\r\n            <em class=\"icon ic-x ic-edit\"></em>&nbsp;Edit\r\n        </a>\r\n      </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\">"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n      </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "              <li>\r\n                <label>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.backgroundPosition : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  <span>"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.optionValue : depth0), depth0))
    + "</span>\r\n                </label>\r\n              </li>\r\n";
},"12":function(depth0,helpers,partials,data) {
    return "                  <em class=\"icon-question ic-1x ic-fl\" style=\"background-position: "
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.backgroundPosition : depth0), depth0))
    + " !important\"></em>\r\n";
},"14":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "              <li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.program(18, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                <label for=\""
    + alias2(alias1((depths[1] != null ? depths[1].questionID : depths[1]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.backgroundPosition : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  <span>"
    + alias2(alias1((depth0 != null ? depth0.optionValue : depth0), depth0))
    + "</span>\r\n                </label>\r\n              </li>\r\n";
},"16":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <input type=\"checkbox\" value=\""
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "\" id=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" class=\"show-for-sr\" checked=\"checked\">\r\n";
},"18":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <input type=\"checkbox\" value=\""
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "\" id=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" class=\"show-for-sr\">\r\n";
},"20":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-action-bar hide\">\r\n          <div class=\"text-center\">\r\n            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n          </div>\r\n        </div>\r\n";
},"22":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel-action-bar\">\r\n          <div class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAnsweredOneTime : depth0),{"name":"if","hash":{},"fn":this.program(23, data, 0),"inverse":this.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"23":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n";
},"25":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" disabled=\"disabled\">Continue</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    <div class=\"panel panel-content-wrapper\">\r\n        <div class=\"panel-content\">\r\n          <ul class=\"small-block-grid-2 medium-block-grid-3 block-grid service-list-grid\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(14, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "          </ul>\r\n        </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0, blockParams, depths),"inverse":this.program(22, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["template"]["jobQueryDateSelecter"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"panel-wrapper completed panel-1c\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"panel-wrapper panel-1a\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-heading\">\r\n<h4 class=\"heading\"><em class=\"icon ic-1x ic-fl ic-tick\"></em>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n<a href=\"javascript:void(0)\" class=\"action-link edit\" id=\"edit-question-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"editJobQuestions\">\r\n<em class=\"icon ic-x ic-edit\"></em>&nbsp;Edit\r\n</a>\r\n</div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"panel-heading\">\r\n<h4 class=\"heading\">"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n</div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "	<div class=\"panel-content\"> <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.selectedDate : depth0)) != null ? stack1.date : stack1), depth0))
    + "<sup>nd</sup> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.selectedDate : depth0)) != null ? stack1.month : stack1), depth0))
    + ", "
    + alias2(((helper = (helper = helpers.timingSelected || (depth0 != null ? depth0.timingSelected : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"timingSelected","hash":{},"data":data}) : helper)))
    + "</p> </div>\r\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"panel-content\">\r\n<div class=\"service-calender-wrapper\">\r\n<label>Date when do you want?</label>\r\n<div class=\"service-calender flexslider row-gutter-b\">\r\n<div class=\"flex-viewport\" style=\"overflow: hidden; position: relative;\">\r\n<ul class=\"slides\" style=\"width: 8200%; -webkit-transition-duration: 0s; transition-duration: 0s; -webkit-transform: translate3d(0px, 0px, 0px); transform: translate3d(0px, 0px, 0px);\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n</div>\r\n<ul class=\"flex-direction-nav\">\r\n<li class=\"flex-nav-prev\">\r\n<a class=\"flex-prev flex-disabled\" href=\"javascript: void(0)\" tabindex=\"-1\">Previous</a>\r\n</li>\r\n<li class=\"flex-nav-next\">\r\n<a class=\"flex-next\" href=\"javascript: void(0)\">Next</a>\r\n</li>\r\n</ul>\r\n</div>\r\n<div class=\"row-gutter-b\">\r\n<label>What time suits you? </label>\r\n<ul class=\"small-block-grid-2 medium-block-grid-4 service-time-grid\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.timingOptions : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n</div>\r\n</div>\r\n</div>\r\n";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "	<li style=\"width: 80px; float: left; display: block;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.program(15, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	<label for=\"serviceDate-"
    + alias2(alias1((depth0 != null ? depth0.month : depth0), depth0))
    + "-"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "\">\r\n	<span class=\"month\">"
    + alias2(alias1((depth0 != null ? depth0.month : depth0), depth0))
    + "</span>\r\n	<span class=\"date\">"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</span>\r\n	</label>\r\n	<span class=\"day\">"
    + alias2(alias1((depth0 != null ? depth0.day : depth0), depth0))
    + "</span>\r\n	</li>\r\n";
},"13":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<input type=\"radio\" name=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "\" id=\"serviceDate-"
    + alias2(alias1((depth0 != null ? depth0.month : depth0), depth0))
    + "-"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "\" class=\"show-for-sr\" checked=\"\">\r\n";
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "			<input type=\"radio\" name=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "\" id=\"serviceDate-"
    + alias2(alias1((depth0 != null ? depth0.month : depth0), depth0))
    + "-"
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "\" class=\"show-for-sr\">\r\n";
},"17":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "		<li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "			<label for=\""
    + alias2(alias1((depth0 != null ? depth0.optionId : depth0), depth0))
    + "\">\r\n				"
    + alias2(alias1((depth0 != null ? depth0.phase : depth0), depth0))
    + "<br>"
    + alias2(alias1((depth0 != null ? depth0.duration : depth0), depth0))
    + "\r\n			</label>\r\n		</li>\r\n";
},"18":function(depth0,helpers,partials,data) {
    return "			<input type=\"radio\" name=\"service-time\" id=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.optionId : depth0), depth0))
    + "\" class=\"show-for-sr\" checked=\"\">\r\n";
},"20":function(depth0,helpers,partials,data) {
    return "			<input type=\"radio\" name=\"service-time\" id=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.optionId : depth0), depth0))
    + "\" class=\"show-for-sr\">\r\n";
},"22":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-action-bar hide\">\r\n          <div class=\"text-center\">\r\n            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">"
    + alias3(((helper = (helper = helpers.buttonValue || (depth0 != null ? depth0.buttonValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonValue","hash":{},"data":data}) : helper)))
    + "</button>\r\n          </div>\r\n        </div>\r\n";
},"24":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel-action-bar\">\r\n          <div class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAnsweredOneTime : depth0),{"name":"if","hash":{},"fn":this.program(25, data, 0),"inverse":this.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"25":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">"
    + alias3(((helper = (helper = helpers.buttonValue || (depth0 != null ? depth0.buttonValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonValue","hash":{},"data":data}) : helper)))
    + "</button>\r\n";
},"27":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" disabled=\"disabled\">"
    + alias3(((helper = (helper = helpers.buttonValue || (depth0 != null ? depth0.buttonValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonValue","hash":{},"data":data}) : helper)))
    + "</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<div class=\"panel panel-content-wrapper\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0, blockParams, depths),"inverse":this.program(24, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>\r\n</div>";
},"useData":true,"useDepths":true});

this["template"]["jobQueryLayoutTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row collapse page-content-region\"> \r\n	<div id=\"pageWrapperRegion\" class=\"columns small-11 medium-8 small-centered\">\r\n		<section id=\"pageHeadingRegion\"></section>\r\n		<section id=\"productDetailStepsRegion\"></section>\r\n		<section id=\"questionaireRegion\"></section>\r\n	</div>\r\n</div>";
},"useData":true});

this["template"]["jobQueryRadioButton"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper completed panel-1c\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper panel-1a\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\"><em class=\"icon ic-1x ic-fl ic-tick\"></em>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        <a href=\"javascript:void(0)\" class=\"action-link edit\" id=\"edit-question-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"editJobQuestions\">\r\n            <em class=\"icon ic-x ic-edit\"></em>&nbsp;Edit\r\n        </a>\r\n      </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\">"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n      </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    return "              <li>\r\n                <label>\r\n                  <!-- <em class=\"icon ic-1x ic-fl ic-entertainment\"></em> -->\r\n                  <span>"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.optionValue : depth0), depth0))
    + "</span>\r\n                </label>\r\n              </li>\r\n";
},"13":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"14":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "              <li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSelected : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.program(17, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                <label for=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\">\r\n                  <!-- <em class=\"icon ic-1x ic-fl ic-entertainment\"></em> -->\r\n                  <span>"
    + alias2(alias1((depth0 != null ? depth0.optionValue : depth0), depth0))
    + "</span>\r\n                </label>\r\n              </li>\r\n";
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <input type=\"radio\" value=\""
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "\" id=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" class=\"show-for-sr\" checked=\"checked\">\r\n";
},"17":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                <input type=\"radio\" value=\""
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "\" id=\""
    + alias2(alias1((depths[2] != null ? depths[2].questionID : depths[2]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" class=\"show-for-sr\">\r\n";
},"19":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "              <li>\r\n                <input type=\"radio\" value=\""
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depths[1] != null ? depths[1].questionID : depths[1]), depth0))
    + "\" id=\""
    + alias2(alias1((depths[1] != null ? depths[1].questionID : depths[1]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\" class=\"show-for-sr\">\r\n                <label for=\""
    + alias2(alias1((depths[1] != null ? depths[1].questionID : depths[1]), depth0))
    + "_"
    + alias2(alias1((depth0 != null ? depth0.optionID : depth0), depth0))
    + "\">\r\n                  <em class=\"icon ic-1x ic-fl ic-entertainment\"></em>\r\n                  <span>"
    + alias2(alias1((depth0 != null ? depth0.optionValue : depth0), depth0))
    + "</span>\r\n                </label>\r\n              </li>\r\n";
},"21":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-action-bar hide\">\r\n          <div class=\"text-center\">\r\n            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n          </div>\r\n        </div>\r\n";
},"23":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel-action-bar\">\r\n          <div class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAnsweredOneTime : depth0),{"name":"if","hash":{},"fn":this.program(24, data, 0),"inverse":this.program(26, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"24":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n";
},"26":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" disabled=\"disabled\">Continue</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    <div class=\"panel panel-content-wrapper\">\r\n\r\n      <div class=\"panel-content\">\r\n          <ul class=\"small-block-grid-2 medium-block-grid-3 block-grid service-list-grid\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "          </ul>\r\n        </div>\r\n\r\n        <!-- <div class=\"panel-content\">\r\n          <ul class=\"small-block-grid-2 medium-block-grid-3 block-grid service-list-grid\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(19, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\r\n        </div> -->\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0, blockParams, depths),"inverse":this.program(23, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["template"]["jobQueryTextArea"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper completed panel-1c\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper panel-1a\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\"><em class=\"icon ic-1x ic-fl ic-tick\"></em>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        <a href=\"javascript:void(0)\" class=\"action-link edit\" id=\"edit-question-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"editJobQuestions\">\r\n            <em class=\"icon ic-x ic-edit\"></em>&nbsp;Edit\r\n        </a>\r\n      </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\">"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n      </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "                  <div class=\"small-12 columns\">\r\n                    <p class=\"fade-out-answer\">"
    + this.escapeExpression(((helper = (helper = helpers.valueEntered || (depth0 != null ? depth0.valueEntered : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"valueEntered","hash":{},"data":data}) : helper)))
    + "</p>\r\n                  </div>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\r\n<div class=\"columns small-12 medium-8\" style=\"margin-bottom: 20px\">\r\n    <!-- <label for=\"additionalDetails\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</label>  -->\r\n    <textarea placeholder=\""
    + alias3(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"defaultValue","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" class=\"margin-0\" maxLength="
    + alias3(((helper = (helper = helpers.inputLength || (depth0 != null ? depth0.inputLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputLength","hash":{},"data":data}) : helper)))
    + " style=\"margin: 0px; width: 279px; height: 92px;\"></textarea> </div>\r\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-action-bar hide\">\r\n          <div class=\"text-center\">\r\n            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n          </div>\r\n        </div>\r\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel-action-bar\">\r\n          <div class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAnsweredOneTime : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"16":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\">Continue</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + " <div class=\"panel panel-content-wrapper\">\r\n        <div class=\"panel-content\">\r\n            <div class=\"row\">\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"panel\">\r\n  <div class=\"row\">\r\n    <div class=\"column medium-4\">\r\n      <label for=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</label>\r\n    </div>\r\n    <div class=\"column medium-4\">\r\n      <textarea placeholder=\""
    + alias3(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"defaultValue","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" class=\"margin-0\" maxLength="
    + alias3(((helper = (helper = helpers.inputLength || (depth0 != null ? depth0.inputLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputLength","hash":{},"data":data}) : helper)))
    + " style=\"margin: 0px; width: 279px; height: 92px;\"></textarea>\r\n      <small class=\"error last\"></small>\r\n    </div>\r\n    <div class=\"column medium-4\"></div>\r\n  </div>\r\n</div> -->\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>";
},"useData":true});

this["template"]["jobQueryTextBox"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper completed panel-1c\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"panel-wrapper panel-1a\" id=\"panel-"
    + this.escapeExpression(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "a\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\"><em class=\"icon ic-1x ic-fl ic-tick\"></em>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n        <a href=\"javascript:void(0)\" class=\"action-link edit\" id=\"edit-question-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"editJobQuestions\">\r\n            <em class=\"icon ic-x ic-edit\"></em>&nbsp;Edit\r\n        </a>\r\n      </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"panel-heading\">\r\n        <h4 class=\"heading\">"
    + this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</h4>\r\n      </div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                  <div class=\"small-12 columns\">\r\n                    <p id=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.valueEntered || (depth0 != null ? depth0.valueEntered : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"valueEntered","hash":{},"data":data}) : helper)))
    + "\" class=\"fade-out-answer\">"
    + alias3(((helper = (helper = helpers.valueEntered || (depth0 != null ? depth0.valueEntered : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"valueEntered","hash":{},"data":data}) : helper)))
    + "</p>\r\n                  </div>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <!-- <div class=\"small-12 medium-4 columns\">\r\n                    <label for=\"birthdayAge\" class=\"right small-text-left\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</label>\r\n                </div> -->\r\n                <div class=\"small-12 medium-3 columns end\">\r\n                <input  type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.defaultValue || (depth0 != null ? depth0.defaultValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"defaultValue","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.valueEntered || (depth0 != null ? depth0.valueEntered : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"valueEntered","hash":{},"data":data}) : helper)))
    + "\" maxLength="
    + alias3(((helper = (helper = helpers.inputLength || (depth0 != null ? depth0.inputLength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputLength","hash":{},"data":data}) : helper)))
    + ">\r\n                </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.needExtraButton : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data) {
    return "                <div class=\"small-12 medium-3 columns end\" style=\"margin-top: 6px;\"  id=\"another-button-div\">\r\n                <a href=\"javascript:void(0)\" class=\"action-link\" id=\"resendOTP\" name=\"resendOTP\" >Resend OTP</a>\r\n                </div>\r\n";
},"14":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"panel-action-bar hide\">\r\n          <div class=\"text-center\">\r\n            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" data=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.buttonValue || (depth0 != null ? depth0.buttonValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonValue","hash":{},"data":data}) : helper)))
    + "</button>\r\n          </div>\r\n        </div>\r\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"panel-action-bar\">\r\n          <div class=\"text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAnsweredOneTime : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"17":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" data=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.buttonValue || (depth0 != null ? depth0.buttonValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonValue","hash":{},"data":data}) : helper)))
    + "</button>\r\n";
},"19":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"button primary radius\" id=\"continueButton-"
    + alias3(((helper = (helper = helpers.fieldType || (depth0 != null ? depth0.fieldType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fieldType","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.questionNumber || (depth0 != null ? depth0.questionNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionNumber","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.queryType || (depth0 != null ? depth0.queryType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"queryType","hash":{},"data":data}) : helper)))
    + "\" name=\"jobQuestionsContinue\" disabled=\"disabled\" data=\""
    + alias3(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.buttonValue || (depth0 != null ? depth0.buttonValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"buttonValue","hash":{},"data":data}) : helper)))
    + "</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    <div class=\"panel panel-content-wrapper\">\r\n        <div class=\"panel-content\">\r\n            <div class=\"row\">\r\n                \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                \r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"small-12 columns\">\r\n                <span class=\"hide\" id=\"error-span-"
    + this.escapeExpression(((helper = (helper = helpers.questionID || (depth0 != null ? depth0.questionID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionID","hash":{},"data":data}) : helper)))
    + "\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isQuestionAnswered : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>";
},"useData":true});

this["template"]["jobQuestionaireView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"product-detail-region\" id=\"jobQuestions\"></div>";
},"useData":true});

this["template"]["questionaireStepsTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <ul class=\"small-block-grid-2\">\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <ul class=\"small-block-grid-3\">\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "            <li class=\"step-disabled\" name=\"questionaire-steps-li\" id=\"questionaire-step-li-2\">\r\n                <em class=\"icon ic-1x ic-step-disabled\"></em>\r\n                <a href=\"javascript:void(0)\" name=\"questionaire-steps\" id=\"questionaire-step-2\">Login</a>\r\n            </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"row collapse product-detail-steps\">\r\n    <div class=\"columns small-12 small-centered medium-text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "            <li class=\"step-active\" name=\"questionaire-steps-li\" id=\"questionaire-step-li-0\">\r\n                <em class=\"icon ic-1x ic-step-active\"></em>\r\n                <a href=\"javascript:void(0)\" name=\"questionaire-steps\" id=\"questionaire-step-0\">Service Details</a>\r\n            </li>\r\n            <li class=\"step-disabled\" name=\"questionaire-steps-li\" id=\"questionaire-step-li-1\">\r\n                <em class=\"icon ic-1x ic-step-disabled\"></em>\r\n                <a href=\"javascript:void(0)\" name=\"questionaire-steps\" id=\"questionaire-step-1\">Personal Details</a>\r\n            </li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.noop,"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n    </div>\r\n</div>";
},"useData":true});

this["template"]["registerUser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loginDetail\" class=\"reveal-modal small\" data-reveal aria-labelledby=\"modalTitle\" aria-hidden=\"true\" role=\"dialog\">\r\n  <div id=\"\">\r\n    <h4 id=\"modalTitle\">Spare sometime to update details</h4>\r\n    <div class=\"row collapse\">\r\n      <div class=\"column\">\r\n        <label>Your name \r\n          <input type=\"text\" id=\"clientName\" name=\"clientName\" placeholder=\"Enter your name\">\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row collapse\">\r\n      <div class=\"column\">\r\n        <label>Your email\r\n           <input type=\"text\" id=\"clientEmail\" name=\"clientEmail\" placeholder=\"Enter your email\">\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row collapse\">\r\n      <div class=\"column\">\r\n        <label>Your phone number \r\n          <input type=\"text\" id=\"clientPhone\" name=\"clientPhone\" placeholder=\"Enter your phone number\">\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row collapse\" id=\"registerStepTwo\" style=\"display:none\">\r\n      <div class=\"column\">\r\n        <label>Enter OPT \r\n          <input type=\"text\" placeholder=\"Enter OTP sent on your mobile\">\r\n        </label>\r\n        <p class=\"small\">\r\n          <a href=\"\">Resend me the OTP again.</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <a href=\"javascript:void(0)\" class=\"button small radius success last userRegister\">\r\n        Register\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div id=\"registerStepTwo\" style=\"display:none\">\r\n    <h4 id=\"modalTitle\">\r\n      Enter OPT\r\n    </h4>\r\n    <p>Please enter 5 digit OTP you recieved on your mobile.</p>\r\n    <div class=\"row collapse\">\r\n      <div class=\"column\">\r\n        <input type=\"text\" placeholder=\"Enter OTP\">\r\n      </div>\r\n    <p class=\"small\">\r\n      <a href=\"\">Resend me the OTP again.</a>\r\n    </p>\r\n  </div>\r\n  <div class=\"text-center\">\r\n    <a href=\"customer-view.html\" class=\"button small radius success last\">\r\n      Continue posting my request\r\n    </a>\r\n  </div>\r\n</div>\r\n<a class=\"close-reveal-modal\" aria-label=\"Close\">&#215;</a>";
},"useData":true});

this["template"]["serviceHeadingTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row collapse row-gutter-b page-heading-region inner-page\" style=\"background-image: url('./assets/img/heading/"
    + alias3(((helper = (helper = helpers.serviceSelected || (depth0 != null ? depth0.serviceSelected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceSelected","hash":{},"data":data}) : helper)))
    + ".png') !important\">\r\n            <div class=\"columns\">\r\n                <div class=\"row collapse\">\r\n                    <div class=\"column small-11 small-centered\">\r\n                        <a href=\"javascript:void(0)\" id=\"navigateToCategories\" class=\"left\">\r\n                            <em class=\"icon ic-1x ic-fl ic-b-arrow ic-w\"></em>\r\n                        </a>\r\n                        <h4 class=\"page-heading left white\">"
    + alias3(((helper = (helper = helpers.serviceSelected || (depth0 != null ? depth0.serviceSelected : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceSelected","hash":{},"data":data}) : helper)))
    + "</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});

this["template"]["SelectCategoryItemTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<a href=\"javascript:void(0)\" for=\""
    + alias3(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "\" name=\"selectJob\" id=\""
    + alias3(((helper = (helper = helpers.categoryID || (depth0 != null ? depth0.categoryID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryID","hash":{},"data":data}) : helper)))
    + "\">\r\n		<img src=\"assets/img/cat-thumb/"
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "\" width=\"220\" height=\"125\">\r\n		<h5>"
    + alias3(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "</h5>\r\n	</a>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<a href=\"javascript:void(0)\" style=\"cursor: not-allowed; position:relative\">\r\n		<img src=\"assets/img/cat-thumb/"
    + alias3(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "\" width=\"220\" height=\"125\">\r\n		<img src=\"assets/img/Coming_Soon_Circle_img.png\" width=\"160\" height=\"160\" style=\"opacity: 0.7; top:0; left:0; width:auto; max-width:100%; max-height:100%; position:absolute; z-index: 5; margin-left: 20%; margin-right:auto\">\r\n	</a>\r\n	<h5>"
    + alias3(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "</h5>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["template"]["ServiceByCategoryTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row collapse page-content-region\">\r\n    <div class=\"columns small-11 medium-9 small-centered\">\r\n        <!-- home page category listing region -->\r\n        <section id=\"categoryListingRegion\">\r\n            <div class=\"category-listing-region\">\r\n                <h4 class=\"region-heading\"><b>OR Choose Service By category</b></h4>\r\n                <ul id=\"serviceItems\" class=\"small-block-grid-2 medium-block-grid-4\">\r\n\r\n                </ul>\r\n            </div>\r\n        </section>\r\n        <!-- home page how it works region -->\r\n\r\n        <section id=\"howWorksRegion\">\r\n        <div class=\"how-works-region\">\r\n            <h4 class=\"region-heading\"><b>How It Works</b></h4>    \r\n            <div class=\"row\">\r\n                <div class=\"columns small-12 medium-3 col-1 small-only-text-center\">\r\n                  <img src=\"assets/img/thumb-how-works-1.png\" alt=\"Post Your Job\" width=\"195\" height=\"195\">\r\n                  <h5>Post your request</h5>\r\n                </div>    \r\n                <div class=\"columns small-12 medium-3 col-2 small-only-text-center\">\r\n                  <img src=\"assets/img/thumb-how-works-2.jpg\" alt=\"Vendors Send Quotes\" width=\"195\" height=\"195\">\r\n                  <h5>Review quotes and vendor profile </h5>\r\n                </div>    \r\n                <div class=\"columns small-12 medium-3 col-3 small-only-text-center\">\r\n                  <img src=\"assets/img/thumb-how-works-3.jpg\" alt=\"Choose Your Vendors\" width=\"195\" height=\"195\">\r\n                  <h5>Select a vendor and get request completed</h5>\r\n                </div>    \r\n            </div>\r\n        </div>\r\n        </section>\r\n    </div>\r\n</div>";
},"useData":true});

this["template"]["ServiceUnderCategoryTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"row collapse page-content-region\"> <div class=\"\"> <!-- product listing breadcrumbs region --> <section id=\"pageBreadcrumbsRegion\"> <div class=\"row collapse\"> <nav class=\"column\">\r\n\r\n\r\n\r\n <a href=\"javascript:void(0)\" id=\"nav-to-category\" class=\"left\"><em class=\"icon ic-1x ic-fl ic-b-arrow\"></em></a>\r\n\r\n\r\n  <h4 class=\"page-heading left\">"
    + this.escapeExpression(((helper = (helper = helpers.categorySelected || (depth0 != null ? depth0.categorySelected : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"categorySelected","hash":{},"data":data}) : helper)))
    + "</h4> </nav> </div> </section> <!-- product listing region --> <section id=\"productListingRegion\"> <div class=\"product-listing-region\"> \r\n\r\n\r\n<ul class=\"small-block-grid-1 medium-block-grid-2\" id=\"servicesHolder\"> \r\n	 </ul> </div> </section> </div> </div>";
},"useData":true});

this["template"]["jobSelectionContentLayoutTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"pageWrapperRegion\">\r\n<section id=\"pageHeadingRegion\" ></section>\r\n<section id=\"pageContentRegion\" ></section>\r\n</div>\r\n";
},"useData":true});

this["template"]["searchJobTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"imageHeader\" class=\"row collapse row-gutter-b page-heading-region\">\r\n            <div class=\"columns\">\r\n              <div id=\"bannerHeadings\" class=\"banner-heading row-gutter-b\">\r\n                <h2>Post a request to find quality, trusted service providers</h2>\r\n                <!-- <h2 class=\"show-for-medium-up\">Getting the quality work done is just few clicks away</h2> -->\r\n                <!-- <h2>We <strong>make</strong> your job <strong>simple</strong> as child’s play</h2> -->\r\n                <!-- <h3>We <strong>make</strong> your job <strong>simple</strong> as child’s play</h3> -->\r\n              </div>\r\n              <section id=\"searchBoxRegion\">\r\n                <div class=\"city-selector\" id=\"city-selector-div\">\r\n                <em class=\"icon ic_x ic-address\"></em> <span style=\"font-weight: bold\">&nbsp;Gurgaon</span>\r\n                <!-- <select id=\"quote_price_options\" name=\"quote_price_options\" class=\"city-drop-down\" >\r\n            <option value=\"gurgaon\">Gurgaon</option>\r\n            </select> -->\r\n          </div>\r\n                <div class=\"row search-box-region\">\r\n                  <div class=\"column small-12 medium-7 small-centered\">\r\n                    <div id=\"searchInputRegion\">\r\n                      <div class=\"app-loader\" class=\"hide\">loading</div>\r\n                      <input type=\"search\" name=\"\" id=\"appSearchInput\" placeHolder=\"Service you need? Eg. Cleaning\">\r\n                      <button id=\"\" class=\"secondary\">\r\n                        <em class=\"icon ic-2x ic-search\"></em>\r\n                      </button>\r\n                    </div>\r\n                    <div id=\"searchResultRegion\" class=\"hide\">\r\n                      <div class=\"search-result-wrapper\">\r\n                        \r\n                      </div>\r\n                    </div> \r\n                  </div>\r\n                </div>\r\n              </section>\r\n            </div>\r\n          </div>";
},"useData":true});

this["template"]["selectServiceItemTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"list-item clearfix\" data=\""
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + "\" name=\"selectService\" id=\""
    + alias3(((helper = (helper = helpers.serviceID || (depth0 != null ? depth0.serviceID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceID","hash":{},"data":data}) : helper)))
    + "\" href=\"javascript:void(0)\">\r\n			<!-- <img class=\"product-listing-image\" style=\"background-position: "
    + alias3(((helper = (helper = helpers.backgroundPosition || (depth0 != null ? depth0.backgroundPosition : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backgroundPosition","hash":{},"data":data}) : helper)))
    + " !important\" /> -->\r\n			<img src=\"./assets/img/prod-list-thumb/"
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + ".png\" alt=\""
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + "\">\r\n			<h5>"
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + "</h5>\r\n		</a>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div style=\"border-radius:0; margin:0px; padding: 0px; border: 0px;  height:5.50rem; background: #F5F5F5; cursor:not-allowed\">\r\n		<a class=\"list-item-coming-soon clearfix\" style=\"float:left; max-width:65%; padding: .625rem .5rem .5rem .5rem; height:5.50rem; cursor:not-allowed\">\r\n			<!-- <img class=\"product-listing-image\" style=\"background-position: "
    + alias3(((helper = (helper = helpers.backgroundPosition || (depth0 != null ? depth0.backgroundPosition : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backgroundPosition","hash":{},"data":data}) : helper)))
    + " !important\" /> -->\r\n			<img src=\"./assets/img/prod-list-thumb/"
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + ".png\" alt=\""
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + "\">\r\n			<h5>"
    + alias3(((helper = (helper = helpers.serviceName || (depth0 != null ? depth0.serviceName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceName","hash":{},"data":data}) : helper)))
    + "</h5>\r\n		</a>\r\n		<a class=\"list-item-coming-soon clearfix\" style=\"float:right; border-radius:0; margin:0px; padding: 0px; border: 0px; width:5.54rem; height:5.50rem; cursor:not-allowed\">\r\n		<img class=\"\" src=\"assets/img/Coming_Soon_img_option2.png\" alt=\""
    + alias3(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data}) : helper)))
    + "\" style=\"border-radius:0; margin:0px; padding: 0px; border: 0px; width:100%; height:100%\" >\r\n	</a>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["template"]["changePasswordScreen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <h5>Change Password</h5>\r\n    <form method=\"post\" id=\"changePasswordForm\">\r\n        <div class=\"row\">\r\n            <div class=\"large-12 columns\">\r\n                <label>Password\r\n                    <input type=\"password\" placeholder=\"Enter password\" name=\"password\" id=\"password\">\r\n                </label>\r\n                <small class=\"error hide password\"></small>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"large-12 columns\">\r\n                <label>Confirm Password\r\n                    <input type=\"password\" placeholder=\"Re-Enter password\" name=\"confirmPassword\" id=\"confirmPassword\">\r\n                </label>\r\n                <small class=\"error hide confirmPassword\"></small>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"large-12 columns\">\r\n                <a href=\"javascript:void(0)\" id=\"submitRequest\" class=\"medium-12 button radius success\">Submit <i class=\"fi-arrow-right\"></i></a>\r\n            </div>\r\n        </div>\r\n        <input type=\"hidden\" name=\"userid\"/>\r\n        <input type=\"hidden\" name=\"token\"/>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"large-12 columns\">\r\n                <small class=\"error\" id=\"error\"></small>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n";
},"useData":true});

this["template"]["confirmPinTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel-container\">\r\n    <h4 class=\"text-center border-btm margin-b20\">Password Reset Link Sent</h4>\r\n    <h6 class=\"text-center margin-b20\">\r\n    	Please check your email for details to reset your password.<br/>\r\n    	If you haven't received the email, please also check your Spam folder.\r\n    </h6>\r\n    \r\n</div>\r\n<div class=\"panel-edit-bar padding-16 text-center\">\r\n    <a href=\"javascript:void(0)\" class=\"small backToMain\">Back to Log-in page</a>\r\n</div>";
},"useData":true});

this["template"]["forgotPasswordTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"panel-container\">\r\n    <h4 class=\"text-center border-btm margin-b20\">Forgot Password</h4>\r\n    <h6 class=\"text-center margin-b20\">Please submit your registered email address, so that we can send you the password reset link.</h6>\r\n    \r\n    <form method=\"post\" id=\"loginForm\">\r\n        <div class=\"row collapse\">\r\n            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n            <div class=\"columns small-12 medium-6 form-icon\">\r\n                <small class=\"error\" id=\"error\"></small>\r\n            </div>\r\n            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n        </div>\r\n\r\n        <div class=\"row collapse\">\r\n            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n            <div class=\"columns small-12 medium-6 form-icon\">\r\n                <input type=\"email\" name=\"userid\" id=\"userid\" placeholder=\"Email Address\">\r\n                <i class=\"fi fi-mail\"></i>\r\n                <small class=\"error hide userid\"></small>\r\n            </div>\r\n            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n        </div>\r\n\r\n        <div class=\"row collapse\">\r\n            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n            <div class=\"columns small-12 medium-6\">\r\n                <a href=\"javascript:void(0)\" class=\"column button radius small blue last\" id=\"submitRequest\">Submit </a>\r\n            </div>\r\n            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n        </div>\r\n    </form>\r\n    \r\n</div><div class=\"panel-edit-bar padding-16 text-center\">\r\n    <a href=\"javascript:void(0)\" class=\"small backToMain\">Back to Login page</a>\r\n</div>";
},"useData":true});

this["template"]["loginFormTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <h5 class=\"small text-center border-btm margin-b20\"><em class=\"icon icon-svg ic-green-small\"></em>Thank you"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ". Your request has been successfully submitted. We will notify you once you receive quote(s).</h5>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "&nbsp;"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)));
},"4":function(depth0,helpers,partials,data) {
    return "            <h4 class=\"text-center border-btm margin-b20\">Login to India's fastest growing services marketplace</h4>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"panel-container\">\r\n    \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isDetailedMessageShown : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n    <div class=\"row\" data-equalizer>\r\n        <div class=\"column medium-5 padding-0\" data-equalizer-watch>\r\n            <div class=\"row small-uncollapse\">\r\n                <div class=\"small-6 medium-12 column padding-5\">\r\n                    <a href=\"javascript:void(0)\" class=\"column button tiny socials facebook text-center\"><span class=\"ico\"></span>Login</a>\r\n                </div>\r\n                <div class=\"small-6 medium-12 column padding-5\">\r\n                    <a href=\"javascript:void(0)\" class=\"column button tiny socials google text-center\"><span class=\"ico\"></span>Login</a>\r\n                </div>\r\n                <div class=\"medium-12 column text-center\">\r\n                    <p class=\"small margin-0\">We will never share your personal information with anyone, ever.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n             \r\n        </div>\r\n        <div class=\"column medium-1 or-seperator\" data-equalizer-watch></div>\r\n        <div class=\"column medium-6\" data-equalizer-watch>\r\n        <form method=\"post\" id=\"loginForm\">\r\n            <div id=\"login-panel\">\r\n                <div class=\"column text-center\" id=\"message\"><h5><strong>Login</strong></h5></div>\r\n                <div class=\"row collapse\">\r\n                    <div class=\"columns form-icon\">\r\n                        <input type=\"email\" placeholder=\"Email Address\" name=\"userid\" id=\"userid\">\r\n                        <i class=\"fi fi-mail\"></i>\r\n                        <small class=\"error userid hide\"></small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row collapse\">\r\n                    <div class=\"small-9 columns form-icon\">\r\n                        <input type=\"password\" placeholder=\"Password\" class=\"rt-sq last\" name=\"password\" id=\"password\">\r\n                        <i class=\"fi fi-lock\"></i>\r\n                        <small class=\"error password hide\"></small>\r\n                    </div>\r\n                    <div class=\"small-3 columns\">\r\n                        <a href=\"javascript:void(0)\" class=\"button radius no-shadow blue postfix last\" id=\"loginButton\">Login</a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row collapse margin-t5\">\r\n                    <div class=\"small-6 columns form-icon\">\r\n                        <div class=\"small\">\r\n                            <label>\r\n                            <input type=\"checkbox\" id=\"rememberMe\" checked>Remember me</label>\r\n                            <input type=\"hidden\" name=\"key\" id=\"key\"/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"small-6 columns text-right\">\r\n                        <a href=\"javascript:void(0)\" class=\"small\" id=\"forgotPin\">Forgot password?</a>\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"row collapse\">\r\n                    <div class=\"large-12 columns\">\r\n                        <small class=\"error\" id=\"error\"></small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>    \r\n        </div>\r\n        <div class=\"column text-center\">\r\n            \r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"text-center\" id=\"loginLinkDiv\">\r\n    <h5>Not member yet? <a href=\"#signup\" id=\"sign-up-btn\">Register now</a> for free</h5>\r\n</div>\r\n";
},"useData":true});

this["template"]["loginViewTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"column medium-2 hide-for-small-only\"  id=\"leftRegion\">&nbsp;</section>\r\n<section class=\"column medium-8\" id=\"mainLoginRegion\">\r\n	<article class=\"panel radius\" id=\"centerRegion\" style=\"min-height:100px;\">\r\n    <p class=\"loader\">loading...</p>\r\n\r\n    </article>\r\n</section>\r\n<section class=\"column medium-2 hide-for-small-only\" id=\"rightRegion\">&nbsp;</section>\r\n";
},"useData":true});

this["template"]["signUpFormTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <p class=\"small text-center margin-0\"><em class=\"icon icon-svg ic-green-small\"></em>Thank you "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ". Your request has been successfully submitted.</p><h5 class=\"small text-center\"> Register online to view details. We will notify you once you receive quote(s).</h5>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "&nbsp;"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)));
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.byPassUser : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    return "                <h4 class=\"text-center\">Register online to view details.</h4>\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "                <h4 class=\"text-center\">Get started today to connect with customers. Register for free.</h4>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"panel-container\">\r\n        \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isDetailedMessageShown : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        <h4 class=\"text-center border-btm margin-b20\"></h4>\r\n\r\n        <div class=\"row\" data-equalizer>\r\n            <div class=\"column medium-5 padding-0\" data-equalizer-watch>\r\n                <div class=\"row small-uncollapse\" id=\"custom-layout\">\r\n                    <div class=\"small-6 medium-12 column padding-5\">\r\n                        <a href=\"javascript:void(0)\" class=\"column button tiny socials facebook text-center\"><span class=\"ico\"></span>Register</a>\r\n                    </div>\r\n                    <div class=\"small-6 medium-12 column padding-5\">\r\n                        <a href=\"javascript:void(0)\" class=\"column button tiny socials google text-center\"><span class=\"ico\"></span>Register</a>\r\n                    </div>\r\n                    <div class=\"medium-12 column text-center\">\r\n                        <p class=\"small margin-0\">We will never share your personal information with anyone, ever.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n\r\n            </div>\r\n            <div class=\"column medium-1 or-seperator\" data-equalizer-watch></div>\r\n            <div class=\"column medium-6\" data-equalizer-watch>\r\n                <form method=\"post\" id=\"loginForm\">\r\n                <div id=\"login-panel\">\r\n                    <div class=\"column text-center\" id=\"message\"><h5><strong>Register</strong></h5></div>\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns form-icon\">\r\n                            <input type=\"text\" placeholder=\"Your Name\" name=\"name\" id=\"name\">\r\n                            <i class=\"fi fi-torso\"></i>\r\n                            <small class=\"error hide name\"></small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns form-icon\">\r\n                            <input type=\"tel\" placeholder=\"Your Mobile Number\" name=\"contact\" id=\"contact\" maxlength=\"10\">\r\n                            <i class=\"fi fi-telephone\"></i>\r\n                            <small class=\"error hide contact\"></small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns form-icon\">\r\n                            <input type=\"email\" placeholder=\"Email Address\" name=\"email\" id=\"email\">\r\n                            <i class=\"fi fi-mail\"></i>\r\n                            <small class=\"error hide email\"></small>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"small-9 columns form-icon toggle-container\">\r\n                            <input type=\"password\" placeholder=\"Password\" class=\"rt-sq last\" name=\"password\" id=\"password\">\r\n                            <i class=\"fi fi-lock\"></i>\r\n                            <a href=\"javascript:void(0)\" id=\"passwordToggle\" class=\"text-right x_small passwordToggle\">Show</a>\r\n                            <small class=\"error hide password\"></small>\r\n                        </div>\r\n                        <div class=\"small-3 columns\">\r\n                            <a href=\"javascript:void(0)\" id=\"signUpBtn\" class=\"button radius no-shadow blue postfix last\">Register</a>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"row collapse\">\r\n                        <div class=\"large-12 columns\">\r\n                            <small class=\"error\" id=\"error\"></small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            </form>    \r\n            <div class=\"column text-center\">\r\n                \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"text-center\" id=\"loginLinkDiv\">\r\n        <h5>Are you a member? <a href=\"#login\" id=\"log-in-btn\">Login now</a></h5>\r\n    </div>\r\n\r\n</div>";
},"useData":true});

this["template"]["resetPasswordTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "                <h4 class=\"text-center border-btm margin-b20\">Ooops!!</h4>\r\n                <div class=\"row collapse\">\r\n                    <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                    <div class=\"columns small-12 medium-6 text-center\">\r\n                        "
    + this.escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"msg","hash":{},"data":data}) : helper)))
    + "\r\n                    </div>\r\n                    <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <h4 id=\"messageHeader\" class=\"text-center border-btm margin-b20\">Choose a new password</h4>\r\n            <h6 id=\"messageText\" class=\"text-center margin-b20 hide\">Your password has been changed.</h6>\r\n                <form method=\"post\" id=\"changePasswordForm\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.passWordChange : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6 form-icon\">\r\n                            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Enter New Password\">\r\n                            <input type=\"hidden\" name=\"userid\"/>\r\n                            <input type=\"hidden\" name=\"token\"/>\r\n                            <input type=\"hidden\" name=\"trademanid\"/>\r\n                            <i class=\"fi fi-lock\"></i>\r\n                            <small class=\"error hide password\"></small>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6 form-icon\">\r\n                            <input type=\"password\" name=\"repeatPassword\" id=\"repeatPassword\" placeholder=\"Re-enter Password\">\r\n                            <i class=\"fi fi-lock\"></i>\r\n                            <small class=\"error hide repeatPassword\"></small>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns text-center\">\r\n                            <small class=\"error hide\" id=\"error\"></small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row collapse\">\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                        <div class=\"columns small-12 medium-6\">\r\n                            <a href=\"javascript:void(0)\" class=\"column button radius small blue last\" id=\"submitRequest\">Submit </a>\r\n                        </div>\r\n                        <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                    </div>\r\n                </form>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "                        <div class=\"row collapse\">\r\n                            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n                            <div class=\"columns small-12 medium-6 form-icon\">\r\n                                <input type=\"password\" name=\"oldPassword\" id=\"oldPassword\" placeholder=\"Enter Old Password\">\r\n                                <i class=\"fi fi-lock\"></i>\r\n                                <small class=\"error hide oldPassword\"></small>\r\n                            </div>\r\n                            <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>                              \r\n                        </div>\r\n";
},"6":function(depth0,helpers,partials,data) {
    return "                        <input type=\"hidden\" name=\"oldKey\" id=\"oldKey\">\r\n";
},"8":function(depth0,helpers,partials,data) {
    return "                <a href=\"javascript:void(0)\" class=\"small backToMain\">Cancel</a>\r\n";
},"10":function(depth0,helpers,partials,data) {
    return "                <a href=\"javascript:void(0)\" class=\"small backToMain\">Back to Log-in page</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<section class=\"column medium-2 hide-for-small-only\"  id=\"leftRegion\">&nbsp;</section>\r\n<section class=\"column medium-8\">\r\n    <article class=\"panel radius\" id=\"centerRegion\" style=\"min-height:100px;\">\r\n        <div class=\"panel-container\">\r\n            \r\n            \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isEmpty : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div><div class=\"panel-edit-bar padding-16 text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.passWordChange : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </article>\r\n</section>\r\n<section class=\"column medium-2 hide-for-small-only\" id=\"rightRegion\">&nbsp;</section>\r\n";
},"useData":true});

this["template"]["carouselItemView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  			<a href=\"#signup\" class=\"button  radius  large\">Register for free</a>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "	  	<a href=\"#signup\" class=\"button  radius  tiny\">Register for free</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"hide-for-small-only\" style=\"width:100%; height:100%\">\r\n	<div class=\"slider-container\">\r\n  		<h1 class=\"\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n	<div class=\""
    + alias3(((helper = (helper = helpers.imageClass || (depth0 != null ? depth0.imageClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageClass","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n</div>\r\n<div class=\"show-for-small-only\" style=\"width:100%; height:100%\">\r\n	<div class=\"slider-container\">\r\n	  <h3 class=\"\">"
    + ((stack1 = ((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"caption","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\r\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n	<div class=\""
    + alias3(((helper = (helper = helpers.imageClass || (depth0 != null ? depth0.imageClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imageClass","hash":{},"data":data}) : helper)))
    + "\"></div>\r\n</div>";
},"useData":true});

this["template"]["howItWorks"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <div class=\"column text-center margin-t50\">\r\n          <h4>Get started today</h4>\r\n          <a href=\"#signup\" class=\"button medium\">Register now</a>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n      <div class=\"column small-12 large-8\">\r\n        \r\n        <div class=\"row content-inline\">\r\n          <div class=\"small-12 medium-7 text\">\r\n            <p class=\"copy\"><strong>1. &nbsp; Register your business</strong><br><br>Create your online account, select service(s) you offer and complete your work profile. This is the first thing a customer sees.</p>\r\n          </div>\r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/how-1.jpg\" /></span></div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/how-1.jpg\" /></span></div>\r\n        </div>\r\n        <br>\r\n        \r\n        <div class=\"row content-inline\">\r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/how-2.jpg\" /></span></div>\r\n          <div class=\"small-12 medium-7 text\">\r\n            <p class=\"copy\"><strong>2. &nbsp; Receive leads and provide quote</strong><br><br>We take customer requests online and send you the details via email, SMS and online. You review the details of the work and if interested, you can provide a quote.</p>\r\n          </div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/how-2.jpg\" /></span></div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class=\"row content-inline\">\r\n          <div class=\"small-12 medium-7 text\">\r\n            <p class=\"copy\"><strong>3. &nbsp; Customer connects with you </strong><br><br>Customer chooses your business based on the quote you provided, previous work reviews, ratings and your profile information.</p>\r\n          </div>\r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/how-3.jpg\" /></span></div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/how-3.jpg\" /></span></div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class=\"row content-inline\">\r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/how-4.jpg\" /></span></div>\r\n          <div class=\"small-12 medium-7 text\">\r\n            <p class=\"copy\"><strong>4. &nbsp; Complete the work and get feedback </strong><br><br>Scheduling the work is negotiated directly between you and customer. Once the work is completed every customer is asked to leave a feedback based on quality, reliability and value for money.</p>\r\n          </div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/how-4.jpg\" /></span></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["template"]["tabItemView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<div class=\"small-11\">\r\n		<a href=\""
    + alias3(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">\r\n			"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n		</a>\r\n	</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"small-11\">\r\n		<a href=\"javascript:void(0)\" >\r\n			"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n		</a>\r\n	</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["template"]["vendorIndexLayoutView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"main-slider\">\r\n  <div id=\"carouselHolder\">\r\n    \r\n  </div>\r\n</div>\r\n<div class=\"sub-nav-container slide-nav\">\r\n    <div class=\"row\">\r\n      <div id=\"tabContainer\" class=\"column text-center\">\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n<section class=\"row margin-t20\" id=\"tabDetailContainer\">\r\n  \r\n</section>\r\n<br><br>";
},"useData":true});

this["template"]["whyQMKTab"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <div class=\"column text-center margin-t50\">\r\n        <h4>Get started today</h4>\r\n        <a href=\"#signup\" class=\"button medium\">Register now</a>\r\n      </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n      <div class=\"column small-12 large-8\">\r\n        <p class=\"\">There are hundreds of reasons why it’s great to join us.\r\n        Here are just a few.</p>\r\n        <hr>\r\n        \r\n        <div class=\"row content-inline\">\r\n          <div class=\"small-12 medium-7 text\"> \r\n            <p class=\"copy\"><strong>Make more money</strong><br><br>Find new customers and grow your business. We connect reliable local businesses with customers, helping you make more money.</p>\r\n          </div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/why-1.jpg\" /></span></div>\r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/why-1.jpg\" /></span></div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row content-inline\">\r\n          \r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/why-2.jpg\" /></span></div>\r\n          <div class=\"small-12 medium-7 text\">\r\n            \r\n            <p class=\"copy\"><strong>24*7 online marketing</strong><br><br>From receiving leads, to responding to customer requests, to view previous work and feedback, your profile markets you 24*7 to the customers.</p>\r\n          </div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/why-2.jpg\" /></span></div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row content-inline\">\r\n          \r\n          \r\n          <div class=\"small-12 medium-7 text\">\r\n            \r\n            <p class=\"copy\"><strong>Monitor &amp; compare competitors</strong><br><br>Our online tools enable you to compare prices, match quotes of your local market competitors, so that you always stay in the game.</p>\r\n          </div>\r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/why-3.jpg\" /></span></div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/why-3.jpg\" /></span></div>\r\n        </div>\r\n        <br>\r\n        <div class=\"row content-inline\">\r\n          \r\n          <div class=\"hide-for-small-only medium-5 image\"><span><img src=\"assets/img/why-4.jpg\" /></span></div>\r\n          <div class=\"small-12 medium-7 text\">\r\n            \r\n            <p class=\"copy\"><strong>Better manage your resources</strong><br><br>Be in complete control by efficiently managing and tracking work for yourself and your team at one central place.</p>\r\n          </div>\r\n          <div class=\"small-12 image show-for-small-only\"><span><img src=\"assets/img/why-4.jpg\" /></span></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column medium-2 hide-for-small-only\">&nbsp;</div>\r\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["template"]["leadsLeftSectionTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"show-for-small-only button small-12 tiny radius\" id=\"sortFiltersButton\">Filters \r\n    <i class=\"fi-widget\"></i>\r\n</a>\r\n<ul class=\"no-bullet hide-for-small-only\" style=\"margin-left:0;\" id=\"sortFilter\">\r\n    <!--\r\n    <li>\r\n        <div>\r\n            <ul class=\"no-bullet\" style=\"margin-left:0;\">\r\n                <li>\r\n                    <h5>Job Type</h5>\r\n                </li>\r\n                <li>\r\n                    <input type=\"checkbox\" name=\"sort\" value=\"Best price\" id=\"bestPrice\" checked=\"\">\r\n                    <label for=\"bestPrice\">Urgent (3)</label>\r\n                </li>\r\n                <li>\r\n                    <input type=\"checkbox\" name=\"sort\" value=\"Closest\" id=\"closest\">\r\n                    <label for=\"closest\">Quote &lt; 3 (1)</label>\r\n                </li>\r\n                <li>\r\n                    <input type=\"checkbox\" name=\"sort\" value=\"Highest rating\" id=\"highestRating\">\r\n                    <label for=\"highestRating\">Requested call back (2)</label>\r\n                </li>\r\n            </ul>\r\n       </div>\r\n    </li>\r\n	<li>\r\n        <hr>\r\n    </li>\r\n    -->\r\n    <li>\r\n        <div>\r\n            <ul class=\"no-bullet\" style=\"margin-left:0;\">\r\n                <li>\r\n                    <h5>Area coverage</h5>\r\n                </li>\r\n                <li> slider will come here </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"button tiny blue radius column\">Apply</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>";
},"useData":true});

this["template"]["submitQuoteTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<hr>\r\n<a class=\"right\" aria-label=\"Close\" id=\"quoteClose\"><i class=\"fi-x\"></i></a>\r\n<div class=\"sub-heading\">\r\n    <h5 class=\"text-sec\">Submit your quote</h5>\r\n    <div>Please enter an approximate cost based on the lead details.</div>\r\n</div>\r\n     \r\n<div class=\"row collapse\">\r\n    <div class=\"small-12 medium-6 columns\">\r\n    	<div class=\"small-6 medium-5 columns\">\r\n         	<input type=\"radio\" id=\"by_price\" name=\"quote_price_type\" value=\"price\"> \r\n         	<label for=\"by_price\">Total cost</label>\r\n         </div>\r\n     	 <div class=\"small-6 medium-7 columns\">\r\n             <input type=\"radio\" id=\"by_range\" name=\"quote_price_type\" value=\"range\"> \r\n             <label for=\"by_range\">Cost range</label>\r\n         </div>\r\n    	\r\n    	<!--\r\n       	<select id=\"quote_price_options\" name=\"quote_price_options\" class=\"quote_price_options\">\r\n            <option value=\"price\">An approximate price</option>\r\n            <option value=\"range\">A price range</option>\r\n            <option value=\"rate\">A rate</option>\r\n        </select>\r\n        -->\r\n    </div>\r\n</div>\r\n<div class=\"row collapse\" id=\"amountSection\">\r\n    <div class=\"small-12 medium-6 columns\">\r\n        <label for=\"amountField\">Enter amount:</label>\r\n        <div class=\"row collapse prefix-radius\">\r\n             <div class=\"small-2 medium-1 columns\">\r\n             	<span class=\"prefix\">₹</span>\r\n             </div>\r\n         	 <div class=\"small-7 medium-7 columns\">\r\n                 <input id=\"amountField\" name=\"amountField\" type=\"text\" placeholder=\"Price Eg. 1000\">\r\n             </div>\r\n             <div class=\"small-3 medium-4 columns\">\r\n                <select id=\"priceRateMetrics\" class=\"postfix\">\r\n                	<option>Select</option>\r\n                	<option>not applicable</option>\r\n                    <option>per sq ft</option>\r\n                    <option>per sq mt</option>\r\n                    <option>per day</options>\r\n                    <option>per month</options>\r\n                    <option>per km</option>\r\n                    <option>per hour</option>\r\n                    <option>per unit</option>\r\n                    <option>per item</option>\r\n                    <option>per class</option>\r\n                    <option>per visit</option>\r\n                    <option>per consultation</option>                    \r\n                </select>\r\n            </div>\r\n             <small class=\"error hide amountField\"></small>\r\n        </div>\r\n     </div>\r\n</div>\r\n<div class=\"row collapse hide\" id=\"rangeSection\">\r\n    <div class=\"small-12 medium-6 columns\">\r\n        <label>Enter range:</label>\r\n        <div class=\"row collapse prefix-radius\">\r\n        	<div class=\"small-2 medium-1 columns\">\r\n             	<span class=\"prefix\">₹</span>\r\n            </div>\r\n        	<div class=\"small-10 medium-11 columns\">\r\n	            <input type=\"text\" id=\"quoteMinValue\" name=\"quoteMinValue\" placeholder=\"Minimum amount Eg. 1000\">\r\n	        </div>\r\n	        <small class=\"error hide quoteMinValue\"></small>\r\n		</div>    \r\n        <div class=\"row collapse prefix-radius\">\r\n        	<div class=\"small-2 medium-1 columns\">\r\n             	<span class=\"prefix\">₹</span>\r\n            </div>\r\n         	<div class=\"small-10 medium-11 columns\">\r\n		        <input type=\"text\" id=\"quoteMaxValue\" name=\"quoteMaxValue\" placeholder=\"Maximum amount Eg. 1200\">\r\n		    </div>\r\n		    <small class=\"error hide quoteMaxValue\"></small>\r\n		</div>\r\n		<div class=\"row collapse prefix-radius\">\r\n            <div class=\"small-12 medium-12 columns\">\r\n                <select id=\"rangeRateMetrics\" class=\"postfix\">\r\n                	<option>Select</option>\r\n                	<option>not applicable</option>\r\n                    <option>per sq ft</option>\r\n                    <option>per sq mt</option>\r\n                    <option>per day</options>\r\n                    <option>per month</options>\r\n                    <option>per km</option>\r\n                    <option>per hour</option>\r\n                    <option>per unit</option>\r\n                    <option>per item</option>\r\n                    <option>per class</option>\r\n                    <option>per visit</option>\r\n                    <option>per consultation</option>\r\n                </select>\r\n            </div>		    \r\n		    <!--\r\n            <div class=\"example\">\r\n    			<div id=\"rangeSlider\"></div>\r\n    			<span class=\"example-val from\" id=\"slider-min-value\"></span> \r\n    			<span class=\"example-val to\" id=\"slider-max-value\"></span>\r\n    		</div>\r\n    		-->\r\n        </div>    \r\n     </div>\r\n</div>\r\n\r\n<!--\r\n<div class=\"row collapse hide\" id=\"rateSection\">\r\n    <div class=\"small-12 medium-6 columns\">\r\n        <label for=\"rateAmount\">Enter rate:</label>\r\n        <div class=\"row collapse prefix-radius\">\r\n             <div class=\"small-2 medium-1 columns\">\r\n             	<span class=\"prefix\">₹</span>\r\n             </div>\r\n         	 <div class=\"small-7 medium-7 columns\">\r\n                 <input id=\"rateAmount\" name=\"rateAmount\" type=\"text\" placeholder=\"Price Eg. 500\">                 \r\n             </div>             \r\n             <div class=\"small-3 medium-4 columns\">\r\n                <select id=\"rateMetrics\" class=\"postfix\">\r\n                	<option>not applicable</option>\r\n                    <option>per sq ft</option>\r\n                    <option>per sq mt</option>\r\n                    <option>per day</options>\r\n                    <option>per month</options>\r\n                    <option>per km</option>\r\n                    <option>per hour</option>\r\n                    <option>per unit</option>\r\n                    <option>per item</option>\r\n                    <option>per class</option>\r\n                    <option>per visit</option>\r\n                    <option>per consultation</option>\r\n                </select>\r\n            </div>\r\n            <small class=\"error hide rateAmount\"></small> \r\n        </div>\r\n     </div>\r\n</div>\r\n-->\r\n<div class=\"row collapse\">\r\n    <div class=\"small-12 medium-6 columns\">\r\n        <label>Description:</label>	        \r\n    </div>\r\n</div>\r\n<div class=\"row collapse\">\r\n    <div class=\"small-12 medium-6 columns\">\r\n        <textarea id=\"descField\" placeholder=\"\">"
    + this.escapeExpression(((helper = (helper = helpers.defaultDescription || (depth0 != null ? depth0.defaultDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"defaultDescription","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n        <small class=\"error hide descField\"></small>\r\n    </div>\r\n</div>\r\n<div class=\"row collapse\">\r\n	<div id=\"errorDiv\" class=\"columns small-12 medium-6 form-icon hide\">\r\n    	<small class=\"error\" id=\"errorMsg\"></small>\r\n    </div>	\r\n    <div class=\"small-12 columns text-center\">\r\n     	<button id=\"submitQuoteBtn\" class=\"radius secondary expand-small\">Submit quote</button>\r\n    </div>\r\n</div>";
},"useData":true});

this["template"]["vendorLeadLayoutTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"panel-badge\">Budget: ₹ "
    + this.escapeExpression(((helper = (helper = helpers.customerBudgetFormatted || (depth0 != null ? depth0.customerBudgetFormatted : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customerBudgetFormatted","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return ", "
    + this.escapeExpression(((helper = (helper = helpers.jobTimeRequested || (depth0 != null ? depth0.jobTimeRequested : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jobTimeRequested","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "		    	<li><strong>"
    + alias2(alias1((depth0 != null ? depth0.label : depth0), depth0))
    + ":</strong> "
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerBudget : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"panel panel-content-wrapper\">\r\n	<div class=\"panel-content\">\r\n    	<div class=\"sub-heading\">\r\n        	<h5 class=\"content-heading\"><a href=\"javascript:void(0)\"><b>"
    + alias3(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobTitle","hash":{},"data":data}) : helper)))
    + "</b></a></h5>\r\n            <ul class=\"no-bullet mb-0\">\r\n              	<li><strong>"
    + alias3(((helper = (helper = helpers.customerName || (depth0 != null ? depth0.customerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"customerName","hash":{},"data":data}) : helper)))
    + "</strong></li>\r\n              	<li class=\"va-t\"><em class=\"icon ic_x ic-address\"></em>&nbsp;"
    + alias3(((helper = (helper = helpers.customerJobArea || (depth0 != null ? depth0.customerJobArea : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"customerJobArea","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(((helper = (helper = helpers.trademanCustomerJobDistance || (depth0 != null ? depth0.trademanCustomerJobDistance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanCustomerJobDistance","hash":{},"data":data}) : helper)))
    + " kms)</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"row collapse sub-heading\">\r\n        	<div class=\"columns small-9\">\r\n	        	<ul class=\"no-bullet mb-0\">\r\n	        		<li>Required on: "
    + ((stack1 = ((helper = (helper = helpers.jobRequiredOnString || (depth0 != null ? depth0.jobRequiredOnString : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobRequiredOnString","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.jobTimeRequested : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n	        		<li>Posted on: "
    + ((stack1 = ((helper = (helper = helpers.jobPostedOnString || (depth0 != null ? depth0.jobPostedOnString : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobPostedOnString","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n	        	</ul>\r\n	        </div>\r\n			<div class=\"columns small-3 text-center\"><span class=\"text-pri\">"
    + alias3(((helper = (helper = helpers.numberOfQuotesPosted || (depth0 != null ? depth0.numberOfQuotesPosted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"numberOfQuotesPosted","hash":{},"data":data}) : helper)))
    + " of "
    + alias3(((helper = (helper = helpers.maxAllowedQuotes || (depth0 != null ? depth0.maxAllowedQuotes : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxAllowedQuotes","hash":{},"data":data}) : helper)))
    + "</span> responded</div>\r\n        </div>        \r\n        <ul class=\"no-bullet\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.descItems : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>        \r\n	</div>\r\n    <div class=\"row collapse panel-action-bar\">\r\n        <div class=\"small-12 columns text-center mb-10\">\r\n            <button id=\"quoteNowBtn\" class=\"radius secondary expand-small btn-quote-now\">Quote now</button>\r\n            <span class=\"success-message hide\" id=\"quoteSubmittedMessage\"><i class=\"fi-check\"></i> Quote submitted successfully</span>\r\n	        <div data-alert=\"\" class=\"alert-box success hide\" id=\"afterSubmitMessage\">\r\n	            Please review the lead on Submitted Quotes page for future reference. <a id=\"closeSubMsg\" class=\"close\">×</a>\r\n	        </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div id=\"submitQuote\" class=\"panel-content submit-quote-form\" aria-hidden=\"true\">\r\n    	\r\n    </div>\r\n</div>";
},"useData":true});

this["template"]["vendorLeadsMainLayoutTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row collapse page-content-region\">\r\n   <div class=\"columns small-11 medium-8 small-centered\">              \r\n       <!-- vendorLeadsRegion region -->\r\n       <section id=\"vendorLeadsRegion\">\r\n       	  <div id=\"errorDiv\" class=\"small-12 columns text-center form-icon hide\">\r\n          	  <small class=\"label no-data\" id=\"errorText\"></small>\r\n          </div>\r\n          <div id=\"leadsContainer\" class=\"vendor-submit-quote\">\r\n              \r\n           </div>\r\n           <div id=\"viewMoreLeadsContainer\" class=\"row collapse hide\">\r\n           		<div class=\"small-12 columns text-center\">\r\n              		<button id=\"viewMoreLeadsLink\" class=\"radius secondary expand-small\">View more leads<span class=\"round secondary label s-1x\"></span></button>\r\n            	</div>\r\n          </div>\r\n       </section>              \r\n   </div>\r\n</div>";
},"useData":true});

this["template"]["businessDetailsEdit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"small-11 medium-10 columns\">\r\n    <div class=\"row\">\r\n      <div class=\"medium-3 columns\">\r\n        <label for=\"name\">Your name</label>\r\n      </div>\r\n      <div class=\"medium-9 columns\">\r\n      <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter your name\">\r\n      <small class=\"error hide name\"></small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"medium-3 columns\">\r\n        <label for=\"contact\">Your mobile</label>\r\n      </div>\r\n      <div class=\"medium-9 columns\">\r\n      <input type=\"text\" id=\"contact\" name=\"contact\" placeholder=\"Enter your mobile number\">\r\n      <small class=\"error hide contact\"></small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"medium-3 columns\">\r\n        <label for=\"landlineNumber\">Your telephone</label>\r\n      </div>\r\n      <div class=\"medium-9 columns\">\r\n      <input type=\"text\" id=\"landlineNumber\" name=\"landlineNumber\" placeholder=\"Additional contact no.\">\r\n      <small class=\"error hide landlineNumber\"></small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"medium-3 columns\">\r\n        <label for=\"your-email\">Your email address</label>\r\n      </div>\r\n      <div class=\"medium-9 columns\">\r\n      <input disabled type=\"text\" id=\"email\" name=\"email\" placeholder=\"Your email address\">\r\n      <small class=\"error hide email\"></small>\r\n      </div>\r\n    </div>  \r\n    <div class=\"row\">\r\n      <div class=\"medium-3 columns\">\r\n        <label for=\"location\">Business location</label>\r\n      </div>\r\n      <div class=\"medium-9 columns\">\r\n      <input type=\"text\" id=\"location\" name=\"location\" placeholder=\"Search your business location\">\r\n      <small class=\"error hide location\"></small>\r\n      </div>\r\n    </div> \r\n    <div class=\"row\">\r\n      <div class=\"medium-3 columns\">\r\n        <label for=\"completeAddress\">Building/Shop name/no</label>\r\n      </div>\r\n      <div class=\"medium-9 columns\">\r\n      <input type=\"text\" id=\"completeAddress\" name=\"completeAddress\" placeholder=\"Enter building/shop name/no\">\r\n      <small class=\"error hide completeAddress\"></small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";
},"useData":true});

this["template"]["businessDetailsReadOnly"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "          "
    + this.escapeExpression(((helper = (helper = helpers.landlineNumber || (depth0 != null ? depth0.landlineNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"landlineNumber","hash":{},"data":data}) : helper)))
    + "\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "          &nbsp;\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "          "
    + this.escapeExpression(((helper = (helper = helpers.completeAddress || (depth0 != null ? depth0.completeAddress : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"completeAddress","hash":{},"data":data}) : helper)))
    + "\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n<h4 class=\"margin-b5\"><small><a href=\"javascript:void(0)\" class=\"edit-profile-btn\">Edit <i class=\"fi fi-pencil\"></i></a></small></h4>\r\n<div class=\"row\">\r\n<div class=\"column medium-9\">\r\n  <div class=\"row\">\r\n    <div class=\"column medium-3\"><span class=\"label white\">Your name</span></div>\r\n    <div class=\"column medium-7 solidBorder\"><h5><span id=\"name\" name =\"name\"></span></h5></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"column medium-3\"><span class=\"label white\">Your mobile</span></div>\r\n    <div class=\"column medium-7 solidBorder\"><h5><span id= \"contact\" name =\"contact\"></span></h5></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"column medium-3\"><span class=\"label white\">Your telephone</span></div>\r\n    <div class=\"column medium-7 solidBorder\">\r\n      <h5><span id=\"landlineNumber\" name =\"landlineNumber\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.landlineNumber : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </span></h5></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"column medium-3\"><span class=\"label white\">Your email address</span></div>\r\n    <div class=\"column medium-7 solidBorder\"><h5><span id=\"email\" name =\"email\"></span></h5></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"column medium-3\"><span class=\"label white\">Business location</span></div>\r\n    <div class=\"column medium-7 solidBorder\"><h5><span id=\"location\" name =\"location\"></span></h5></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"column medium-3\"><span class=\"label white\">Building/Shop name/no</span></div>\r\n    <div class=\"column medium-7\"><h5>\r\n      <span id= \"completeAddress\" name =\"completeAddress\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completeAddress : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </span></h5>\r\n    </div>\r\n  </div>    \r\n</div>\r\n              ";
},"useData":true});

this["template"]["mainDetails"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "      <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.logoUrl || (depth0 != null ? depth0.logoUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logoUrl","hash":{},"data":data}) : helper)))
    + "\" />\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "      <img src=\"assets/img/blank_130x95.jpg\" />\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "      <div class=\"small\" id=\"companyDescription\">\r\n      </div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "      <div class=\"small\" style=\"color:#CCCCCC\">\r\n        Upload logo and description about your business.\r\n      </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row collapse\">\r\n  <div class=\"column small-4\" id=\"imageHolder\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logoUrl : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"column small-6\">\r\n   	<a href=\"#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.idToBeShared || (depth0 != null ? depth0.idToBeShared : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"idToBeShared","hash":{},"data":data}) : helper)))
    + "\"><h4 class=\"margin-0 margin-t5\" id=\"businessName\"></h4></a>\r\n    <div class=\"progress success round\">\r\n      <span class=\"meter\" style=\"width:"
    + alias3(((helper = (helper = helpers.percentageComplete || (depth0 != null ? depth0.percentageComplete : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"percentageComplete","hash":{},"data":data}) : helper)))
    + "%\">\r\n      </span>\r\n      <small><strong> \r\n        "
    + alias3(((helper = (helper = helpers.percentageComplete || (depth0 != null ? depth0.percentageComplete : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"percentageComplete","hash":{},"data":data}) : helper)))
    + "% profile complete</strong> \r\n      </small>\r\n    </div>\r\n  </div>\r\n  <div class=\"column small-2\" id=\"imageHolder\">\r\n    <h4><small>\r\n      <a href=\"javascript:void(0)\" class=\"edit-profile-btn\">\r\n        Edit <i class=\"fi fi-pencil\"></i>\r\n      </a>\r\n    </small></h4>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row collapse\" style=\"padding-top:10px;\">\r\n  <div class=\"column\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.companyDescription : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n\r\n<div class=\"row collapse\">\r\n <!--<span>&nbsp;<a id=\"viewReviews\" href=\"javascript:void(0)\" class=\"primary-link\">Reviews ("
    + alias3(((helper = (helper = helpers.totalNoOfReviews || (depth0 != null ? depth0.totalNoOfReviews : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalNoOfReviews","hash":{},"data":data}) : helper)))
    + ")</a>\r\n <span>&nbsp;<a id=\"share\" href=\"javascript:void(0)\" class=\"primary-link\">S</a></span>\r\n <span>&nbsp;<a id=\"fb\" target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u="
    + alias3(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"URL","hash":{},"data":data}) : helper)))
    + "/#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.trademanID || (depth0 != null ? depth0.trademanID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanID","hash":{},"data":data}) : helper)))
    + "\" class=\"primary-link\">f</a></span>\r\n <span>&nbsp;<a id=\"tw\" href=\"http://twitter.com/share?url="
    + alias3(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"URL","hash":{},"data":data}) : helper)))
    + "/#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.trademanID || (depth0 != null ? depth0.trademanID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanID","hash":{},"data":data}) : helper)))
    + "\" class=\"primary-link\">t</a></span>\r\n <span>&nbsp;<a id=\"wh\" href=\"whatsapp://send?text="
    + alias3(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"URL","hash":{},"data":data}) : helper)))
    + "/#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.trademanID || (depth0 != null ? depth0.trademanID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanID","hash":{},"data":data}) : helper)))
    + "\" class=\"primary-link\">w</a></span>\r\n <br><span id=\"showShareLink\" style=\"display:none\"><a target=\"_blank\" href=\""
    + alias3(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"URL","hash":{},"data":data}) : helper)))
    + "/#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.trademanID || (depth0 != null ? depth0.trademanID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanID","hash":{},"data":data}) : helper)))
    + "\" class=\"primary-link\">"
    + alias3(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"URL","hash":{},"data":data}) : helper)))
    + "/#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.trademanID || (depth0 != null ? depth0.trademanID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanID","hash":{},"data":data}) : helper)))
    + "</a></span>\r\n --> \r\n</div>\r\n";
},"useData":true});

this["template"]["mainDetailsEdit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"img-container\">\r\n          <a href=\"javascript:void(0)\" class=\"close-image\">x</a>\r\n          <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.logoUrl || (depth0 != null ? depth0.logoUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logoUrl","hash":{},"data":data}) : helper)))
    + "\" id=\"logoPreview\">\r\n        </span>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "          <span class=\"img-container\">\r\n          <a href=\"javascript:void(0)\" class=\"close-image hide\">x</a>\r\n          <img src=\"assets/img/blank_130x95.jpg\" id=\"logoPreview\">\r\n        </span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"columns padding-0\">\r\n    <form id=\"mainDescEdit\" method=\"POST\" enctype=\"multipart/form-data\">\r\n    <input type=\"hidden\" name=\"userId\" id=\"userIdMain\" >\r\n    <div class=\"row\">\r\n      <div class=\"columns\">\r\n        <label for=\"businessName\">Business Name</label>\r\n      </div>\r\n      <div class=\"columns\">\r\n        <input type=\"text\" id=\"businessName\" name=\"businessName\" placeholder=\"Your business name\">\r\n        <small class=\"error hide businessName\"></small>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"columns\">\r\n        <label for=\"companyDescription\">Description</label>\r\n      </div>\r\n      <div class=\"columns\">\r\n        <textarea rows=\"7\" id=\"companyDescription\" name=\"companyDescription\" placeholder=\"Enter brief description about your business\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"columns\">\r\n        <label for=\"uploadedFile\">Business logo</label>\r\n      </div>\r\n      <div class=\"columns\" id=\"logoUpload\">\r\n        <div class=\"fileUpload button blue outline tiny radius margin-0\">\r\n          <span>Upload business logo</span>\r\n          <input type=\"file\" class=\"upload\" name=\"files[]\" id=\"uploadedFile\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" id=\"logoProgress\">\r\n      <div class=\"column small-4\">\r\n        &nbsp;\r\n      </div>\r\n      <div class=\"column small-4\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logoUrl : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"column small-2 end\">\r\n        &nbsp;\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <!-- The global progress state -->\r\n        <div class=\"column fileupload-progress fade\">\r\n            <div id=\"progress\">\r\n              <div class=\"bar\" style=\"width: 0%;\"></div>\r\n            </div>\r\n            <div class=\"progress-extended\">&nbsp;</div>\r\n        </div>\r\n    </div?\r\n    </form>\r\n</div>\r\n";
},"useData":true});

this["template"]["portfolioDetails"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.urls : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <span class=\"img-container\">\r\n          <a href=\""
    + alias2(alias1((depth0 != null ? depth0.actualUrl : depth0), depth0))
    + "\" data-gallery>\r\n            <img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\r\n          </a>\r\n        </span>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "    	<span class=\"img-container\">\r\n      <a href=\"javascript:void(0)\" data-reveal-id=\"uploadDetails\" class=\"add-image edit-profile-btn\">+</a>\r\n      </span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <h4 class=\"margin-b5\"><small><a href=\"javascript:void(0)\" class=\"edit-profile-btn\">Edit <i class=\"fi fi-pencil\"></i></a></small></h4>\r\n  <div class=\"row\">\r\n    <div id=\"links\" class=\"column padding-0\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isValid : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n\r\n";
},"useData":true});

this["template"]["portfolioEditTmpl"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "		      <span class=\"img-container\" id=\"span_"
    + alias3(((helper = (helper = helpers.uniqueId || (depth0 != null ? depth0.uniqueId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uniqueId","hash":{},"data":data}) : helper)))
    + "\">\r\n		        <a href=\"javascript:void(0)\" class=\"close-image "
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.uniqueId || (depth0 != null ? depth0.uniqueId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uniqueId","hash":{},"data":data}) : helper)))
    + "\">x</a>\r\n		        <img src=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n		      </span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n	<form id=\"fileupload\" method=\"POST\" enctype=\"multipart/form-data\">\r\n	<div class=\"column\">\r\n		<div id=\"main-image-ccontainer\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.urls : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n		    <span class=\"img-container add-container\" style=\"\">\r\n	            <a id=\"addImage\" href=\"javascript:void(0)\" class=\"add-image\">+</a>\r\n	            <!--input title=\"file input\" type=\"file\" id=\"uploadedFile\" name=\"uploadedFile[]\" class=\"addImageClass\"-->\r\n	            <input type=\"file\" class=\"addImageClass\" name=\"files[]\" id=\"uploadedFile\">\r\n	        </span>\r\n\r\n	    </div>\r\n	  </div>\r\n\r\n    <!-- The global progress state -->\r\n    <div class=\"column fileupload-progress fade\">\r\n        <div id=\"progress\">\r\n          <div class=\"bar\" style=\"width: 0%;\"></div>\r\n        </div>\r\n        <div class=\"progress-extended\">&nbsp;</div>\r\n    </div>\r\n    </form>\r\n</div>";
},"useData":true});

this["template"]["qualificationDetails"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"row\">\r\n        <div class=\"column medium-4\"><span class=\"label white\">Your Certification</span></div>\r\n        <div class=\"column medium-8\"><h5><span id=\"qualification\" name=\"qualification\">"
    + this.escapeExpression(((helper = (helper = helpers.qualification || (depth0 != null ? depth0.qualification : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"qualification","hash":{},"data":data}) : helper)))
    + "</span></h5></div>\r\n      </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <div class=\"row\">\r\n        <div class=\"column\">\r\n          <div class=\"small\" style=\"color:#CCCCCC\">\r\n          Provide certification details here.\r\n          </div>\r\n        </div>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <h4 class=\"margin-b5\"><small><a href=\"javascript:void(0)\" class=\"edit-profile-btn\">Edit <i class=\"fi fi-pencil\"></i></a></small></h4>\r\n  <div class=\"row\">\r\n    <div class=\"column padding-0\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.qualification : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      <!--div class=\"row\">\r\n        <div class=\"column medium-2\"><span class=\"label white\">Organisation</span></div>\r\n        <div class=\"column medium-10\"><h5><span id=\"organisation\" name=\"organisation\">"
    + alias3(((helper = (helper = helpers.organisation || (depth0 != null ? depth0.organisation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"organisation","hash":{},"data":data}) : helper)))
    + "</span></h5></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column medium-2\"><span class=\"label white\">Certification #</span></div>\r\n        <div class=\"column medium-10\"><h5><span id=\"certification\" name=\"certification\">"
    + alias3(((helper = (helper = helpers.certification || (depth0 != null ? depth0.certification : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"certification","hash":{},"data":data}) : helper)))
    + "</span></h5></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column medium-2\"><span class=\"label white\">Date of issue</span></div>\r\n        <div class=\"column medium-10\"><h5><span id=\"issueDate\" name=\"issueDate\">"
    + alias3(((helper = (helper = helpers.issueDate || (depth0 != null ? depth0.issueDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"issueDate","hash":{},"data":data}) : helper)))
    + "</span></h5></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column medium-2\"><span class=\"label white\">Valid upto</span></div>\r\n        <div class=\"column medium-10\"><h5><span id=\"validUpto\" name=\"validUpto\">"
    + alias3(((helper = (helper = helpers.validUpto || (depth0 != null ? depth0.validUpto : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"validUpto","hash":{},"data":data}) : helper)))
    + "</span></h5></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column medium-2\"><span class=\"label white\">Description</span></div>\r\n        <div class=\"column medium-10\"><p class=\"info last\">The Buzz is an exciting collection of interactive techniques developed with teachers, leaders and students which informs and inspires young people to make Bizz Book is the First Ever Indigenous Manufacturer of Tablets from India specializing in cheap and personalized tablet PCs</p></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column medium-2\"><span class=\"label white\">Add image</span></div>\r\n        <div class=\"column medium-10\">\r\n          <span class=\"img-container\">\r\n            <a href=\"javascript:void(0)\" class=\"add-image\">+</a>\r\n          </span>\r\n          <span class=\"img-container\">\r\n            <a href=\"javascript:void(0)\" class=\"add-image\">+</a>\r\n          </span>\r\n          <span class=\"img-container\">\r\n            <a href=\"javascript:void(0)\" class=\"add-image\">+</a>\r\n          </span>\r\n          <span class=\"img-container\">\r\n            <a href=\"javascript:void(0)\" class=\"add-image\">+</a>\r\n          </span>\r\n          <span class=\"img-container\">\r\n            <a href=\"javascript:void(0)\" class=\"add-image\">+</a>\r\n          </span>\r\n        </div>\r\n      </div-->\r\n    </div>\r\n  </div>\r\n";
},"useData":true});

this["template"]["qualificationEditTmpl"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  <div class=\"padding-0 columns\">\r\n    <div class=\"row\">\r\n      <div class=\"columns\">\r\n        <label for=\"business-name\">Certification</label>\r\n      </div>\r\n      <div class=\"columns\">\r\n        <input type=\"text\" id=\"qualification\" name= \"qualification\" placeholder=\"Enter your certification details\">\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n";
},"useData":true});

this["template"]["rateCardEdit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                  <span class=\"img-container\" id=\"span_"
    + alias3(((helper = (helper = helpers.uniqueId || (depth0 != null ? depth0.uniqueId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uniqueId","hash":{},"data":data}) : helper)))
    + "\">\r\n                    <a href=\"javascript:void(0)\" class=\"close-image "
    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.uniqueId || (depth0 != null ? depth0.uniqueId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"uniqueId","hash":{},"data":data}) : helper)))
    + "\">x</a>\r\n                    <img src=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n                  </span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row collapsed display\" id=\"rateField\">\r\n  <div class=\"column\">\r\n    <div class=\"row collapse prefix-radius postfix-radius\">\r\n    <div class=\"columns\">\r\n      <span class=\"label white\" style=\"white-space: normal\">\r\n      Give us brief idea about your services charges. This is an indicative price.\r\n      <br/>\r\n      </span> \r\n    </div>\r\n    </div>\r\n    <div class=\"row collapse prefix-radius postfix-radius\">\r\n      <div class=\"columns\">\r\n        <label for=\"enterAmount\">Enter charges</label>\r\n      </div>\r\n      <div class=\"small-3 columns\">\r\n        <span class=\"prefix rupee\"></span>\r\n      </div>\r\n      <div class=\"small-6 columns\">\r\n        <input type=\"text\" id=\"enterAmount\" class=\"centerfix\" placeholder=\"Price or a range\">\r\n      </div>\r\n      <div class=\"small-3 columns\">\r\n        <select id=\"priceUnit\" class=\"postfix\">\r\n          \r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row collapsed display\">\r\n  <div class=\"columns\">\r\n    <label for=\"enterDesc\">Additional details</label>\r\n  </div>\r\n  <div class=\"column\">\r\n    <textarea placeholder=\"Any other information you would like to tell us or rates of different services you provide.\" id=\"enterDesc\" class=\"\" rows=\"6\"></textarea>\r\n  </div>\r\n</div>\r\n\r\n    <!-- The file upload form used as target for the file upload widget -->\r\n    <form id=\"fileupload\" method=\"POST\" enctype=\"multipart/form-data\">\r\n        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->\r\n        <div class=\"row fileupload-buttonbar\">\r\n            <div class=\"column\">\r\n                <div class=\"fileUpload button blue outline tiny radius margin-0\">\r\n                  <i class=\"glyphicon glyphicon-plus\"></i>\r\n                  <span>Attach rate picture(s)</span>\r\n                  <!--input type=\"file\" class=\"upload\" id=\"uploadedFile\"-->\r\n                  <input type=\"file\" class=\"upload\" name=\"files[]\" id=\"uploadedFile\">\r\n                </div>\r\n            </div>\r\n\r\n            <br><br>\r\n\r\n              <div class=\"column\" id=\"main-image-ccontainer\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.urls : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\r\n\r\n            <!-- The global progress state -->\r\n            <div class=\"column fileupload-progress fade\">\r\n                <div id=\"progress\">\r\n                  <div class=\"bar\" style=\"width: 0%;\"></div>\r\n                </div>\r\n                <div class=\"progress-extended\">&nbsp;</div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </form>";
},"useData":true});

this["template"]["rateCardView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "      <h5>\r\n        <span>Rs.</span>\r\n        <span id=\"enterAmount\"></span>\r\n        <span id=\"priceUnit\"></span>\r\n      </h5>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "       <span class=\"label white\" style=\"color:#CCCCCC\">Provide rates here.</span>\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "      <h5>\r\n        <span id=\"enterDesc\"></span>\r\n      </h5>\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "        <span class=\"label white\" style=\"color:#CCCCCC; white-space:normal;\">Provide additional info about rates of services you provide</span>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <span class=\"img-container\">\r\n          <a href=\""
    + alias2(alias1((depth0 != null ? depth0.actualUrl : depth0), depth0))
    + "\" data-gallery>\r\n            <img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\r\n          </a>\r\n        </span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row collapse\">\r\n  <h4><small>\r\n    <a href=\"javascript:void(0)\" class=\"edit-profile-btn\">\r\n      Edit <i class=\"fi fi-pencil\"></i>\r\n    </a>\r\n  </small></h4>\r\n</div>\r\n<div class=\"row collapsed display\">\r\n  <div class=\"column medium-3\">\r\n    <span class=\"label white\">Charges</span>\r\n  </div>\r\n  <div class=\"column medium-9 solidBorder\">\r\n  \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.maxPrice : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n<div class=\"row collapsed display\">\r\n  <div class=\"column medium-3\">\r\n    <span class=\"label white\">Description</span>\r\n  </div>\r\n  <div class=\"column medium-9 solidBorder\">\r\n    \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    \r\n  </div>\r\n</div>\r\n<div class=\"row collapsed display margin-t20\">\r\n  <div id=\"links\" class=\"column\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.urls : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>\r\n";
},"useData":true});

this["template"]["reviewFeedBack"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <h4><i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star blank\"></i></h4>\r\n    <div class=\"row row-margin\">\r\n      <div class=\"column\">\r\n        <a href=\"javascript:void(0)\" class=\"button tiny blue radius edit-profile-btn margin-t10\"><i class=\"fi fi-check\"></i> Ask for feedback</a>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"row\"><div class=\"column\">\r\n    <blockquote class=\"last\"><i></i>The Buzz is an exciting collection of interactive techniques developed with teachers, leaders and students which informs and inspires.<cite>Isac Yahoo | 22/02/2015</cite></blockquote>\r\n  </div></div>\r\n";
},"useData":true});

this["template"]["serviceDetails"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "            <span class=\"label selection\">"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <h4 class=\"margin-b5\"><small><a href=\"javascript:void(0)\" class=\"edit-profile-btn\">Edit <i class=\"fi fi-pencil\"></i></a></small></h4>\r\n        <div class=\"row\">\r\n          <div class=\"column\"><h5><i class=\"fi fi-bookmark\"></i> Services you provide</h5>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"column\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.trademanServiceNames : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n        <hr class=\"dashed\">\r\n        <div class=\"row\">\r\n          <div class=\"column\"><h5><i class=\"fi fi-bookmark\"></i> How far you can serve?</h5></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"column\">\r\n            <span class=\"label selection\">"
    + this.escapeExpression(((helper = (helper = helpers.maxdistance || (depth0 != null ? depth0.maxdistance : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"maxdistance","hash":{},"data":data}) : helper)))
    + " KMS</span>\r\n          </div>\r\n        </div>\r\n";
},"useData":true});

this["template"]["serviceDetailsEdit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"small-11 medium-10 columns\">\r\n         <div class=\"row\">\r\n            <div class=\"columns\">\r\n               <h5><i class=\"fi fi-bookmark\"></i> Services you provide</h5>\r\n            </div>\r\n         </div>\r\n         <div class=\"row\">\r\n            <div class=\"column\">\r\n               <input type=\"text\" value=\""
    + ((stack1 = ((helper = (helper = helpers.serviceValue || (depth0 != null ? depth0.serviceValue : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"serviceValue","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" id=\"trademanServices\">\r\n               <small class=\"error hide trademanServices\"></small>\r\n            </div>\r\n         </div>\r\n         <hr class=\"dashed\">\r\n         <div class=\"row\">\r\n            <div class=\"columns\">\r\n               <h5><i class=\"fi fi-bookmark\"></i> How far you can serve?</h5>\r\n            </div>\r\n         </div>\r\n         <div class=\"row\">\r\n            <div class=\"small-10 medium-11 columns\">\r\n               <div class=\"range-slider radius\" data-slider data-options=\"display_selector: #sliderOutput3; start:"
    + alias3(((helper = (helper = helpers.minDistanceAllowed || (depth0 != null ? depth0.minDistanceAllowed : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"minDistanceAllowed","hash":{},"data":data}) : helper)))
    + "; end:"
    + alias3(((helper = (helper = helpers.maxDistanceAllowed || (depth0 != null ? depth0.maxDistanceAllowed : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxDistanceAllowed","hash":{},"data":data}) : helper)))
    + "; initial:"
    + alias3(((helper = (helper = helpers.maxdistance || (depth0 != null ? depth0.maxdistance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxdistance","hash":{},"data":data}) : helper)))
    + "\">\r\n               <span class=\"range-slider-handle\" role=\"slider\" tabindex=\"0\"></span>\r\n               <span class=\"range-slider-active-segment\"></span></div>\r\n            </div>\r\n            <div class=\"small-2 medium-1 columns\"><span id=\"sliderOutput3\">"
    + alias3(((helper = (helper = helpers.maxdistance || (depth0 != null ? depth0.maxdistance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxdistance","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n         </div>\r\n      </div>\r\n";
},"useData":true});

this["template"]["socialDetails"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "          <a href=\""
    + this.escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"website","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n            <i class=\"fi fi-link active\"></i>\r\n          </a>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "          <a href=\""
    + this.escapeExpression(((helper = (helper = helpers.facebookLink || (depth0 != null ? depth0.facebookLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"facebookLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n            <i class=\"fi fi-social-facebook active\"></i>\r\n          </a>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "          <a href=\""
    + this.escapeExpression(((helper = (helper = helpers.twitterLink || (depth0 != null ? depth0.twitterLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"twitterLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n            <i class=\"fi fi-social-twitter active\"></i>\r\n          </a>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "          <a href=\""
    + this.escapeExpression(((helper = (helper = helpers.youTubeLink || (depth0 != null ? depth0.youTubeLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"youTubeLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n            <i class=\"fi fi-social-youtube active\"></i>\r\n          </a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h4 class=\"margin-b5\"><small><a href=\"javascript:void(0)\" class=\"edit-profile-btn\">Edit <i class=\"fi fi-pencil\"></i></a></small></h4>\r\n<div class=\"row\">\r\n  <div class=\"columns\">\r\n    <div class=\"small\" style=\"color:#CCCCCC\">\r\n      Provide your social details(website, facebook, twitter, youtube links) here.\r\n    <br/>\r\n    </div> \r\n  </div>\r\n  <div class=\"column\">\r\n    <ul class=\"inline-list margin-0 social\">\r\n      <li><h3>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.website : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </h3></li>\r\n      <li><h3>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.facebookLink : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </h3></li>\r\n      <li><h3>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.twitterLink : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </h3></li>\r\n      <li><h3>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.youTubeLink : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </h3></li>\r\n      \r\n    </ul>\r\n  </div>\r\n";
},"useData":true});

this["template"]["socialDetailsEdit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <div class=\"columns\">\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"medium-2 columns\">\r\n          <label for=\"your-website\">Website</label>\r\n        </div>\r\n        <div class=\"medium-10 columns\">\r\n          <input type=\"text\" id=\"your-website\" placeholder=\"Enter your business website\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"medium-2 columns\">\r\n          <label for=\"facebook-link\">Facebook</label>\r\n        </div>\r\n        <div class=\"medium-10 columns\">\r\n          <input type=\"text\" id=\"facebook-link\" placeholder=\"Enter facebook link\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"medium-2 columns\">\r\n          <label for=\"twitter-link\">Twitter</label>\r\n        </div>\r\n        <div class=\"medium-10 columns\">\r\n          <input type=\"text\" id=\"twitter-link\" placeholder=\"Enter your twitter link\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"medium-2 columns\">\r\n          <label for=\"youtube-link\">Youtube</label>\r\n        </div>\r\n        <div class=\"medium-10 columns\">\r\n          <input type=\"text\" id=\"youtube-link\" placeholder=\"Enter youtube link\">\r\n        </div>\r\n      </div>\r\n  </div>\r\n";
},"useData":true});

this["template"]["vendorFeedBack"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "    <h4><i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star blank\"></i></h4>\r\n    <div class=\"row row-margin\">\r\n      <div class=\"column\">\r\n        <a href=\"javascript:void(0)\" class=\"button tiny blue radius edit-profile-btn margin-t10\"><i class=\"fi fi-check\"></i> Ask for feedback</a>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"row\"><div class=\"column\">\r\n    <blockquote class=\"last\"><i></i>The Buzz is an exciting collection of interactive techniques developed with teachers, leaders and students which informs and inspires.<cite>Isac Yahoo | 22/02/2015</cite></blockquote>\r\n  </div></div>\r\n";
},"useData":true});

this["template"]["vendorMainDescContainerTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"padding-16 details-region-edit details-region-view\">\r\n\r\n</div>\r\n<div class=\"row collapse panel-edit padding-16\" style=\"padding-top:0px;\">\r\n      <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n      <div class=\"columns small-12 medium-6\">\r\n          <a href=\"javascript:void(0)\" class=\"column button radius small blue last save-edit-button\">\r\n            Save\r\n          </a>\r\n      </div>\r\n      <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n  </div>\r\n\r\n  <div class=\"panel-edit-bar padding-16 hide text-center\">\r\n    <a href=\"javascript:void(0)\" class=\"small cancelBtn\"> Cancel</a>\r\n  </div>";
},"useData":true});

this["template"]["vendorProfile"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"column medium-8\">\r\n  <article class=\"panel radius\" id=\"businessRegion\">\r\n    \r\n  </article>\r\n  <article class=\"panel radius\" id=\"serviceRegion\">\r\n    \r\n  </article>\r\n  <article class=\"panel radius\" id=\"qualificationRegion\">\r\n    \r\n  </article>\r\n</section>\r\n<aside class=\"column medium-4\">\r\n  <article class=\"panel radius\" id=\"portfolioRegion\">\r\n    \r\n  </article>\r\n  <article class=\"panel transparent radius\" id=\"feedBackRegion\">\r\n    \r\n  </article>\r\n</aside>";
},"useData":true});

this["template"]["vendorProfileLayoutTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <div class=\"row collapse panel-edit padding-16\" style=\"padding-top:0px;\">\r\n      <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n      <div class=\"columns small-12 medium-6\">\r\n          <a href=\"javascript:void(0)\" class=\"column button radius small blue last save-edit-button\">\r\n            Save\r\n          </a>\r\n      </div>\r\n      <div class=\"columns medium-3 hide-for-small-only\">&nbsp;</div>\r\n  </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "      Save\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "      Cancel\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "<div class=\"panel-container panel-header\">\r\n  <div class=\"row\">\r\n    <div class=\"column title-column\">\r\n      <a href=\"javascript:void(0)\" class=\"right toggle-panel close\">Close</a>\r\n      <h4 class=\"panel-title\"><i class=\"fi "
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>"
    + ((stack1 = ((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel-container toggle-panel-content control-class hide\">\r\n  <div class=\"panel-edit hide\"><form class=\"details-region-edit padding-16\"></form></div>\r\n  <div class=\"panel-view details-region-view\"></div>\r\n\r\n\r\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isPortFolio : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  \r\n</div>\r\n<div class=\"panel-edit-bar padding-16 hide text-center\">\r\n    <a href=\"javascript:void(0)\" class=\"small cancelBtn\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isPortFolio : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "    </a>\r\n  </div>";
},"useData":true});

this["template"]["vendorProfileMainLayoutTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section id=\"left-region\" class=\"column medium-7\"></section>\r\n<aside id=\"right-region\" class=\"column medium-5\"></aside>\r\n\r\n  <!-- The Gallery as lightbox dialog, should be a child element of the document body -->\r\n    <div id=\"blueimp-gallery\" class=\"blueimp-gallery blueimp-gallery-controls\">\r\n        <div class=\"slides\"></div>\r\n        <h3 class=\"title\"></h3>\r\n        <a class=\"prev\">&lsaquo;</a>\r\n        <a class=\"next\">&rsaquo;</a>\r\n        <a class=\"close\">&times;</a>\r\n        <a class=\"play-pause\"></a>\r\n        <ol class=\"indicator\"></ol>\r\n    </div>";
},"useData":true});

this["template"]["vendorProfileRightLayoutTmpl"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<article class=\"panel transparent radius\">\r\n          <div class=\"panel-container\">\r\n            <h4>Reviews &amp; feedback</h4>\r\n            <h4><i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star fill\"></i> <i class=\"fi fi-star blank\"></i></h4>\r\n            <div class=\"row\">\r\n              <div class=\"column\">\r\n                <a href=\"javascript:void(0)\" class=\"button tiny blue radius edit-profile-btn margin-t10\"><i class=\"fi fi-check\"></i> Ask for feedback</a>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"panel-container toggle-panel-content margin-b50\">\r\n            <div class=\"panel-edit\" style=\"display:none\">\r\n              <div class=\"row row-margin padding-16\">\r\n                <div class=\"column\">\r\n                  <div class=\"row\">\r\n                    <div class=\"columns\">\r\n                      <label for=\"business-name\">Customer email *</label>\r\n                    </div>\r\n                    <div class=\"columns\">\r\n                      <input type=\"text\" id=\"business-name\" placeholder=\"Customer email\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"columns\">\r\n                      <label for=\"business-name\">Customer name *</label>\r\n                    </div>\r\n                    <div class=\"columns\">\r\n                      <input type=\"text\" id=\"business-name\" placeholder=\"Customer name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"columns\">\r\n                      <label for=\"business-name\">Message (optional)</label>\r\n                    </div>\r\n                    <div class=\"columns\">\r\n                      <textarea rows=\"4\" id=\"enter-description\" placeholder=\"Enter your message\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel-edit-bar padding-16 text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"button tiny blue radius save-edit-button\"><i class=\"fi fi-check\"></i> Submit</a> <a href=\"javascript:void(0)\" class=\"small cancel-link\"> Cancel</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row row-margin \"><br>\r\n            <div class=\"column\">\r\n            <blockquote class=\"last\"><i></i>The Buzz is an exciting collection of interactive techniques developed with teachers, leaders and students which informs and inspires.<cite>Isac Yahoo | 22/02/2015</cite></blockquote>\r\n            <a href=\"javascript:void(0)\" class=\"small\">Show more feedbacks</a>\r\n          </div>\r\n        </div>\r\n      </article>";
},"useData":true});

this["template"]["vendorUploadDocs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"verifyDetails\" class=\" reveal-modal medium\" data-reveal aria-labelledby=\"modalTitle\" aria-hidden=\"true\" role=\"dialog\">\r\n  <article class=\"panel radius\" style=\"min-height:100px;\">\r\n  <div class=\"panel-container\">\r\n    <h4 id=\"messageHeader\" class=\"text-center border-btm margin-b20\">Identity Verification</h4>\r\n    <a class=\"close-reveal-modal\" aria-label=\"Close\">&#215;</a>\r\n    <h6 id=\"messageContent\" class=\"text-center margin-b20\">All documents must reference your name. These are used internally to confirm your identity and stored securely.</h6>\r\n\r\n    \r\n    \r\n    <form method=\"post\" id=\"verifyForm\" enctype=\"multipart/form-data\">\r\n      <div class=\"row\">\r\n        <div class=\"column medium-3 hide-for-small-only\">&nbsp;</div>\r\n        <div class=\"column medium-6 blueBorder padding-a5\">\r\n          <div class=\"text-center\">Please submit any <b>2</b> documents</div>\r\n        </div>\r\n        <div class=\"column medium-3 hide-for-small-only\">&nbsp;</div>\r\n      </div>\r\n      <input type=\"hidden\" name=\"userId\" id=\"userId\"/>\r\n      <input type=\"hidden\" name=\"image_category\" value=\"document\">\r\n      <div class=\"row collapse\">\r\n        <div class=\"column small-6 medium-6\">\r\n          <div class=\"label white\">\r\n      			<ul class=\"identity\">\r\n        			<li>Pan Card</li>\r\n        			<li>Voter ID</li>\r\n        			<li>Driving License</li>\r\n      			</ul>\r\n  			    <small>&nbsp;</small>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n        <div class=\"column small-6 medium-6\">\r\n          <div class=\"label white\">\r\n      			<ul class=\"identity\">\r\n        			<li>Aadhaar Card</li>\r\n              <li>Police verification</li>\r\n        			<li>Passport</li>\r\n      			</ul>\r\n  			    <small>&nbsp;</small>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"column medium-6\">\r\n          <label>Upload (Document 1)</label>\r\n          <input type=\"file\" name=\"uploadDocument1\" id=\"uploadDocument1\">\r\n          <br/>\r\n          <br/>\r\n        </div>\r\n\r\n        <div class=\"column medium-6\">\r\n          <label>Upload (Document 2)</label>\r\n          <input type=\"file\" name=\"uploadDocument2\" id=\"uploadDocument2\">\r\n        </div>\r\n      </div>\r\n      \r\n      <hr>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"column medium-3 hide-for-small-only\">\r\n          &nbsp;\r\n        </div>\r\n        <div class=\"column small-12 medium-6 text-center\">\r\n          <small class=\"error hide\" id=\"errorRow\">\r\n            Please upload 2 documents to continue\r\n          </small>\r\n          <img class=\"hide\" id=\"progressImage\" src=\"assets/img/UploadAnimation.gif\">\r\n          <a href=\"javascript:void(0)\" id=\"verifySubmitButton\" class=\"column button radius small blue last\" style=\"min-height=50px !important;\">\r\n            Submit\r\n          </a>\r\n        </div>\r\n        <div class=\"column medium-3 hide-for-small-only\">\r\n          &nbsp;\r\n        </div>\r\n      </div>\r\n      \r\n\r\n    </form>\r\n    \r\n  </div>\r\n  </article>\r\n\r\n</div>";
},"useData":true});

this["template"]["vendorVerificationMessage"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<div class=\"row\">\r\n    <div class=\"column\">\r\n    	<h4 class=\"text-center border-btm\">Please complete your profile details</h4>\r\n    </div>\r\n</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "<div data-alert class=\"alert-box warning\">\r\n  <div class=\"row\">\r\n    <div class=\"column\">\r\n      <div class=\"messageText\">Please complete your <a href=\"javascript:void(0)\" data-reveal-id=\"verifyDetails\" class=\"equi\" id=\"verificationLink\">identity check</a>. \r\n      \r\n      <p class=\"alert-box-text\">This step ensures our customers connect and receive quotes from verified businesses only.</p> </div>\r\n      <a href=\"javascript:void(0)\" class=\"close\">&times;</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isProfile : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showView : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["template"]["leftSectionFiltersTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<a href=\"#\" class=\"show-for-small-only button small-12 tiny radius\" id=\"sortFiltersButton\">Filters \r\n    <i class=\"fi-widget\"></i>\r\n</a>\r\n<ul class=\"no-bullet hide-for-small-only\" style=\"margin-left:0;\" id=\"sortFilter\">\r\n    <!--\r\n    <li>\r\n        <div>\r\n            <ul class=\"no-bullet\" style=\"margin-left:0;\">\r\n                <li>\r\n                    <h5>Job Type</h5>\r\n                </li>\r\n                <li>\r\n                    <input type=\"checkbox\" name=\"sort\" value=\"Best price\" id=\"bestPrice\" checked=\"\">\r\n                    <label for=\"bestPrice\">Urgent (3)</label>\r\n                </li>\r\n                <li>\r\n                    <input type=\"checkbox\" name=\"sort\" value=\"Closest\" id=\"closest\">\r\n                    <label for=\"closest\">Quote &lt; 3 (1)</label>\r\n                </li>\r\n                <li>\r\n                    <input type=\"checkbox\" name=\"sort\" value=\"Highest rating\" id=\"highestRating\">\r\n                    <label for=\"highestRating\">Requested call back (2)</label>\r\n                </li>\r\n            </ul>\r\n       </div>\r\n    </li>\r\n	<li>\r\n        <hr>\r\n    </li>\r\n    -->\r\n    <li>\r\n        <div>\r\n            <ul class=\"no-bullet\" style=\"margin-left:0;\">\r\n                <li>\r\n                    <h5>Area coverage</h5>\r\n                </li>\r\n                <li> slider will come here </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"button tiny blue radius column\">Apply</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </li>\r\n</ul>";
},"useData":true});

this["template"]["quoteLayoutTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<br> "
    + this.escapeExpression(((helper = (helper = helpers.quoteMinBudgetFormatted || (depth0 != null ? depth0.quoteMinBudgetFormatted : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"quoteMinBudgetFormatted","hash":{},"data":data}) : helper)))
    + " - ";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " "
    + this.escapeExpression(((helper = (helper = helpers.quoteRateMetrics || (depth0 != null ? depth0.quoteRateMetrics : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"quoteRateMetrics","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return ", "
    + this.escapeExpression(((helper = (helper = helpers.jobTimeRequested || (depth0 != null ? depth0.jobTimeRequested : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jobTimeRequested","hash":{},"data":data}) : helper)))
    + " ";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "	          <li>Customer budget: <span class=\"text-pri\">₹</span> "
    + this.escapeExpression(((helper = (helper = helpers.customerBudgetFormatted || (depth0 != null ? depth0.customerBudgetFormatted : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customerBudgetFormatted","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"9":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-find ic-hover\"></em>\r\n                        	<label>Quote seen by client</label>	\r\n";
},"11":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-find ic-gray\"></em>\r\n                        	<label>Client review awaited</label>                        	\r\n";
},"13":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-call ic-hover\"></em>\r\n                        	<label>Client called you</label>                        	\r\n";
},"15":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-call ic-gray\"></em>\r\n                        	<label>Client call awaited</label>\r\n";
},"17":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-sent ic-hover\"></em>\r\n                        	<label>Call back requested</label>\r\n";
},"19":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-sent ic-gray\"></em>\r\n                        	<label>Awaiting call back request</label>\r\n";
},"21":function(depth0,helpers,partials,data) {
    return "                    		<em class=\"icon ic-1x ic-hire ic-hover\"></em>\r\n                    		<label>Hired</label>\r\n";
},"23":function(depth0,helpers,partials,data) {
    return "                        	<em class=\"icon ic-1x ic-hire ic-gray\"></em>\r\n                        	<label>Awaiting client hiring</label>\r\n";
},"25":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"row collapse panel-action-bar\">\r\n    	<div id=\"errorDiv\" class=\"columns small-12 medium-12 text-center hide\">\r\n	    	<small class=\"error\" id=\"errorMsg\"></small>\r\n	    </div>\r\n        <div class=\"small-12 columns text-center\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.feedbackRequested : depth0),{"name":"if","hash":{},"fn":this.program(26, data, 0),"inverse":this.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n";
},"26":function(depth0,helpers,partials,data) {
    return "            	<button class=\"radius secondary expand-small disabled\">Feedback requested</button>\r\n";
},"28":function(depth0,helpers,partials,data) {
    return "            	<button id=\"requestFeedbackAction\" class=\"radius secondary expand-small\">Request Feedback</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-badge\">My Quote: <em class=\"icon ic-x ic-red-rupee icon-svg\"></em> "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.quoteMinBudget : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias3(((helper = (helper = helpers.quoteBudgetFormatted || (depth0 != null ? depth0.quoteBudgetFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quoteBudgetFormatted","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.quoteRateMetrics : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"panel panel-content-wrapper\">\r\n	<div class=\"panel-content\">\r\n	    <div class=\"sub-heading\">\r\n	    	<h5 class=\"text-sec font-weight-4.5 jobDetailsPopUp\">\r\n                <a href=\"javascript:void(0)\" data-reveal-id=\"jobDetailModal\"><b>"
    + alias3(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobTitle","hash":{},"data":data}) : helper)))
    + "</b></a>\r\n            </h5>\r\n	        <ul class=\"no-bullet mb-0\">\r\n	        	<li><strong>"
    + alias3(((helper = (helper = helpers.customerName || (depth0 != null ? depth0.customerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"customerName","hash":{},"data":data}) : helper)))
    + "</strong></li>\r\n	        	<li class=\"va-t\"><em class=\"icon ic_x ic-address\"></em>"
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + " ("
    + alias3(((helper = (helper = helpers.trademanCustomerJobDistance || (depth0 != null ? depth0.trademanCustomerJobDistance : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanCustomerJobDistance","hash":{},"data":data}) : helper)))
    + " kms)</li>\r\n	      	</ul>\r\n	    </div>\r\n	    <div class=\"row collapse sub-heading\">\r\n	      <div class=\"columns small-12\">\r\n	        <ul class=\"no-bullet mb-0\">\r\n	          <li>Required on: "
    + ((stack1 = ((helper = (helper = helpers.jobRequiredOnString || (depth0 != null ? depth0.jobRequiredOnString : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobRequiredOnString","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.jobTimeRequested : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n	          <li>Quoted on: "
    + ((stack1 = ((helper = (helper = helpers.quotedDateString || (depth0 != null ? depth0.quotedDateString : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"quotedDateString","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n	          <li>Posted on: "
    + ((stack1 = ((helper = (helper = helpers.jobPostedOnString || (depth0 != null ? depth0.jobPostedOnString : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobPostedOnString","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n	          \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerBudget : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	        </ul>\r\n	      </div>          \r\n	    </div>\r\n	</div>\r\n	<div class=\"panel-action-bar\">\r\n		<div class=\"row collapse\">\r\n        	<div class=\"column\">\r\n            	<div class=\"icon-bar four-up clearfix\" data-equalizer=\"\">\r\n                	<a class=\"item disabled\" href=\"javascript:void(0)\" data-equalizer-watch=\"\" style=\"min-height: 62px;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.seen : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </a>\r\n                    <a class=\"item disabled\" href=\"javascript:void(0)\" data-equalizer-watch=\"\" style=\"min-height: 62px;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.requestCall : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </a>\r\n                    <a class=\"item disabled\" href=\"javascript:void(0)\" data-equalizer-watch=\"\" style=\"min-height: 62px;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.callbackRequest : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </a>\r\n                    <a class=\"item disabled\" data-equalizer-watch=\"\" style=\"min-height: 62px;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hired : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hired : depth0),{"name":"if","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});

this["template"]["quotesMainLayoutTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row collapse page-content-region\">\r\n   <div class=\"columns small-11 medium-8 small-centered\">              \r\n       <!-- vendorProfileRegion region -->\r\n       <section id=\"vendorQuotesSection\">\r\n       	  <div id=\"errorDiv\" class=\"small-12 columns form-icon text-center hide\">\r\n          	  <small class=\"label no-data\" id=\"errorText\"></small>\r\n          </div>\r\n          <div id=\"quotesContainer\" class=\"vendor-quote\">\r\n              \r\n           </div>\r\n           <div id=\"viewMoreQuotesContainer\" class=\"row collapse hide\">\r\n           		<div class=\"small-12 columns text-center\">\r\n              		<button id=\"viewMoreQuotesLink\" class=\"radius secondary expand-small\">View more quotes<span class=\"round secondary label s-1x\"></span></button>\r\n            	</div>\r\n          </div>\r\n       </section>              \r\n   </div>\r\n</div>";
},"useData":true});

this["template"]["registrationSuccess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"column\">\r\n<div data-alert class=\"alert-box secondary radius\" id=\"mainAlert\">\r\n  <h2>Thank you. <small>for registering with us.</small></h2>\r\n  <h4><small>Your account has been successfully created. You will be notified through Email/SMS for customer jobs in your area.</small></h4>\r\n  <a href=\"javascript:void(0)\" class=\"close\">&times;</a>\r\n</div>\r\n</div>";
},"useData":true});

this["template"]["vendorInformationLayoutView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"column large-6\" id=\"leftSection\" data-equalizer-watch>\r\n  \r\n</section>\r\n<aside class=\"column panel large-6\" id=\"rightSection\" data-equalizer-watch>\r\n  \r\n</aside>";
},"useData":true});

this["template"]["vendorInformationLeftView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <div class=\"row collapse\">\r\n          <div class=\"columns\">\r\n            <label for=\"contact\"><h1>Your Mobile Number</h1></label>\r\n          </div>\r\n          <div class=\"columns form-icon\">\r\n            <input type=\"tel\" id=\"contact\" maxlength=10 name=\"contact\" placeholder=\"Enter your mobile number\">\r\n            <i class=\"fi fi-telephone\"></i>\r\n            <small class=\"error hide contact\"></small>\r\n          </div>\r\n        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<article class=\"panel radius\">\r\n  <div class=\"panel-container\">\r\n    <h4 class=\"text-center border-btm\">Provide your business details</h4>\r\n    <form>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fbData : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"row collapse\">\r\n        <div class=\"columns\">\r\n          <label for=\"businessName\"><h1>Business name</h1></label>\r\n        </div>\r\n        <div class=\"columns form-icon\">\r\n          <input type=\"text\" id=\"businessName\" name=\"businessName\" placeholder=\"Enter business name\">\r\n          <i class=\"fi fi-torso\"></i>\r\n          <small class=\"error hide businessName\"></small>\r\n        </div>\r\n      </div>\r\n      <div class=\"row collapse\">\r\n        <div class=\"columns\">\r\n          <label for=\"trademanServices\"><h1>Service(s) you provide</h1></label>\r\n        </div>\r\n        <div class=\"columns form-icon\">\r\n          <input type=\"text\" id=\"trademanServices\" name=\"trademanServices\" placeholder=\"Search Service\">\r\n          <i class=\"fi fi-wrench\"></i>\r\n          <small class=\"error hide trademanServices\"></small>\r\n        </div>\r\n      </div>\r\n      <div class=\"row collapse\">\r\n        <div class=\"columns\">\r\n          <label for=\"address\"><h1>Business location</h1></label>\r\n        </div>\r\n        <div class=\"columns form-icon\">\r\n          <input type=\"text\" id=\"address\" name=\"address\" placeholder=\"Eg. Sector 52 Gurgaon\"/>\r\n          <i class=\"fi fi-marker\"></i>\r\n          <small class=\"error hide address\"></small>\r\n        </div>\r\n      </div>\r\n      <div class=\"row collapse\">\r\n      	<div class=\"columns\" style=\"height: 12px;\">\r\n          <label for=\"address\"><h6>How far you can serve?</h6></label>\r\n        </div>\r\n        <div class=\"small-8 medium-10 columns\">\r\n          <div class=\"range-slider radius\" data-slider data-options=\"display_selector: #distanceCount; start:"
    + alias3(((helper = (helper = helpers.minDistanceAllowed || (depth0 != null ? depth0.minDistanceAllowed : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"minDistanceAllowed","hash":{},"data":data}) : helper)))
    + "; end:"
    + alias3(((helper = (helper = helpers.maxDistanceAllowed || (depth0 != null ? depth0.maxDistanceAllowed : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxDistanceAllowed","hash":{},"data":data}) : helper)))
    + "; initial:"
    + alias3(((helper = (helper = helpers.maxDistanceSlider || (depth0 != null ? depth0.maxDistanceSlider : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxDistanceSlider","hash":{},"data":data}) : helper)))
    + "\">\r\n            <span class=\"range-slider-handle\" role=\"slider\" tabindex=\"0\"></span>\r\n            <span class=\"range-slider-active-segment\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"small-4 medium-2 columns padding-l15\">\r\n          <span id=\"distanceCount\" class=\"slider-output\"></span>\r\n          <span class=\"slider-units\">kms</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"column text-center\"> <hr>\r\n          <label>By clicking <b>Submit</b> you accept our <a href=\"/termsAndConditions.htm\" target=\"_blank\" id=\"termsConditions\">T&amp;C </a> and <a href=\"/privacyPolicy.htm\" target=\"_blank\" id=\"privacyPolicy\">Privacy Policy</a></label>\r\n        </div>\r\n        <div class=\"column text-center margin-t10\">\r\n          <a href=\"javascript:void(0)\" id=\"verifyBusinessInfo\" class=\"button small blue radius column medium-6 medium-push-3 last\">Submit</a>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</article>";
},"useData":true});

this["template"]["vendorInformationRightView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"areaMap\" style=\"height:100%; width:100%\">\r\n\r\n</div>";
},"useData":true});

this["template"]["feedBackItemView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row\">\r\n  <div class=\"column medium-4 small-5 small\">"
    + alias3(((helper = (helper = helpers.ratingParameter || (depth0 != null ? depth0.ratingParameter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ratingParameter","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"column medium-8 small-7\">\r\n    <div class=\"rating-f small\">\r\n      <select class=\""
    + alias3(((helper = (helper = helpers.ratingParameterClass || (depth0 != null ? depth0.ratingParameterClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ratingParameterClass","hash":{},"data":data}) : helper)))
    + "\">\r\n        <option value=\"1\"> Poor</option>\r\n        <option value=\"2\"> Average</option>\r\n        <option value=\"3\"> Good</option>\r\n        <option value=\"4\"> Very Good</option>\r\n        <option value=\"5\"> Excellent</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["template"]["feedBackItemViewNew"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row\">\r\n  <div class=\"column medium-4 small-5 small\">"
    + alias3(((helper = (helper = helpers.ratingParameter || (depth0 != null ? depth0.ratingParameter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ratingParameter","hash":{},"data":data}) : helper)))
    + "</div>\r\n  <div class=\"column medium-8 small-7\">\r\n    <div class=\"rating-f small\">\r\n      <select class=\""
    + alias3(((helper = (helper = helpers.ratingParameterClass || (depth0 != null ? depth0.ratingParameterClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ratingParameterClass","hash":{},"data":data}) : helper)))
    + "\">\r\n        <option value=\"1\"> Poor</option>\r\n        <option value=\"2\"> Average</option>\r\n        <option value=\"3\"> Good</option>\r\n        <option value=\"4\"> Very Good</option>\r\n        <option value=\"5\"> Excellent</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["template"]["feedBackView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"column medium-10 small-12 end margin-t10\" id=\"feedbackContent\">\r\n  <div id=\"feedbackBox\">\r\n	  <p>Provide rating</p>\r\n	  <div id=\"individualFeedBack\">\r\n\r\n	  </div>\r\n	  <label class=\"margin-t10\">Comments\r\n	    <textarea placeholder=\"Write your comments\"></textarea>\r\n	  </label>\r\n	  <button id=\"postFeedback\" class=\"secondary tiny radius closeLayer last\">Submit feedback</button>\r\n  </div>\r\n  <div data-alert class=\"alert-box success radius  margin-t10\" id=\"showUpdate\" style=\"display:none;\">\r\n	Your request has been updated...\r\n	<a href=\"javascript:void()\" class=\"close\">&times;</a>\r\n	</div>\r\n</div>\r\n ";
},"useData":true});

this["template"]["feedBackViewNew"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "assets/img/default-profile-pic.png";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "<li><em class=\"icon ic_x ic-address\"></em>&nbsp;"
    + this.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</li>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "       <div id=\"feedbackBox\">\r\n       <div class=\"clearfix\">\r\n		<ul id=\"vendorList\" class=\"app-listing-region small-block-grid-1 medium-block-grid-2\">\r\n			<li>\r\n				<div class=\"img\">\r\n				  <img class=\"\" src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n				</div>\r\n				<div class=\"text text-body\">\r\n					<ul class=\"no-bullet\">\r\n					  <li class=\"text-sec\"><strong>"
    + alias3(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</strong></li>\r\n					  <li><b>"
    + alias3(((helper = (helper = helpers.vendorName || (depth0 != null ? depth0.vendorName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorName","hash":{},"data":data}) : helper)))
    + "</b></li>\r\n					  "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n					</ul>\r\n				</div>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n      \r\n       <div class=\"clearfix\">\r\n        <h5 class=\"reveal-heading with-border\"><b>Provide Rating</b></h5>\r\n        <table class=\"rating-table\">\r\n          <tbody>\r\n            <tr>\r\n              <td>Cost effectiveness</td>\r\n              <td><em type=\"ce\" class=\"ce icon ic-1x ic-thumb-down\"></em></td>\r\n              <td><em type=\"ce\" class=\"ce icon ic-1x ic-thumb-up\"></em></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Quality of work</td>\r\n              <td><em type=\"qw\" class=\"qw icon ic-1x ic-thumb-down\"></em></td>\r\n              <td><em type=\"qw\" class=\"qw icon ic-1x ic-thumb-up\"></em></td>\r\n            </tr>\r\n            <tr>\r\n              <td>On time completion</td>\r\n              <td><em type=\"oc\" class=\"oc icon ic-1x ic-thumb-down\"></em></td>\r\n              <td><em type=\"oc\" class=\"oc icon ic-1x ic-thumb-up\"></em></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      \r\n      <div class=\"clearfix row-gutter-b\">\r\n        <h5 class=\"reveal-heading with-border\"><b>Overall Rating</b></h5>\r\n        <div class=\"star-rating-wrapper\">\r\n          <span class=\"star-rating\">\r\n            <input type=\"radio\" name=\"rating\" value=\"1\"><i></i>\r\n            <input type=\"radio\" name=\"rating\" value=\"2\"><i></i>\r\n            <input type=\"radio\" name=\"rating\" value=\"3\"><i></i>\r\n            <input type=\"radio\" name=\"rating\" value=\"4\"><i></i>\r\n            <input type=\"radio\" name=\"rating\" value=\"5\"><i></i>\r\n          </span>\r\n          <span class=\"label rating-no\">0</span>\r\n        </div>\r\n      </div>\r\n        \r\n        <div class=\"clearfix\">\r\n        <h5 class=\"reveal-heading\"><b>Comments</b></h5>\r\n        <textarea id=\"comments\"></textarea>\r\n        <button class=\"radius mb-0\" id=\"submitFeedback\">Submit Feedback</button>\r\n      </div>\r\n      </div>\r\n  		<div id=\"showUpdate\" style=\"display:none;\" class=\"success-message-feedback\">\r\n  			<b>Thank You.</b>\r\n  			<hr/>\r\n			Your feedback request has been submitted successfully.\r\n		</div>\r\n		<div>\r\n		<a class=\"close-reveal-modal\" aria-label=\"Close\"><em class=\"icon ic-x ic-close ic-hover\"></em></a>\r\n		</div>";
},"useData":true});

this["template"]["messageView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <h4 class=\"vendor-msg\">\r\n        <small>\r\n          "
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "\r\n        </small>\r\n      </h4>\r\n      <h6 class=\"right\"><small>"
    + alias3(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"time","hash":{},"data":data}) : helper)))
    + "</small></h6>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"column medium-10 small-10 end margin-t10\" id=\"messagesContent\">\r\n    <h5><small>Between You and Arthur</small></h5>\r\n    <div class=\"panel callout margin-0\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.messages : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    \r\n    <textarea placeholder=\"Write message\"></textarea>\r\n    <button class=\"secondary tiny radius last\" id=\"sendMessage\">Send message</button>\r\n  </div>";
},"useData":true});

this["template"]["quotesHeaderView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\r\n                <div class=\"row collapse row-gutter-b page-heading-region inner-page\" style=\"background:#74a5d0;background-image: url('./assets/img/heading/"
    + alias3(((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"headerTitle","hash":{},"data":data}) : helper)))
    + ".png')\">\r\n                	<div class=\"columns\">\r\n                  <div class=\"row collapse\">\r\n                    <div class=\"column small-11 small-centered\">\r\n                      <a href=\"javascript: window.history.go(-1);\" id=\"backToJobs\" class=\"left\"><em class=\"icon ic-1x ic-fl ic-b-arrow ic-w\"></em></a>\r\n                      <h4 class=\"page-heading left white\">"
    + alias3(((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"headerTitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n                </div>\r\n             ";
},"useData":true});

this["template"]["reviewCollectionItemView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " ("
    + this.escapeExpression(((helper = (helper = helpers.dateOfReview || (depth0 != null ? depth0.dateOfReview : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dateOfReview","hash":{},"data":data}) : helper)))
    + ")";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return " "
    + this.escapeExpression(((helper = (helper = helpers.dateOfReview || (depth0 != null ? depth0.dateOfReview : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"dateOfReview","hash":{},"data":data}) : helper)));
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    return "							        <i class=\"checked\" style=\"width:"
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].starWidth : depths[1]), depth0))
    + "%\"></i>\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "							        <i></i>\r\n";
},"9":function(depth0,helpers,partials,data) {
    return "									<a href=\"javascript:void(0)\" class=\"showMoreMessageLink\">...show more</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-wrapper completed review-panel\">\r\n                    <div class=\"panel panel-content-wrapper\">\r\n                      <div class=\"panel-content\">\r\n                        <div class=\"sub-heading\">\r\n                          <!-- <h5><b>"
    + alias3(((helper = (helper = helpers.customerName || (depth0 != null ? depth0.customerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"customerName","hash":{},"data":data}) : helper)))
    + "</b>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dateOfReview : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</h5> -->\r\n                          \r\n                          <div class=\"row collapse\">\r\n                            <div class=\"columns small-8\">\r\n                             <b>"
    + alias3(((helper = (helper = helpers.customerName || (depth0 != null ? depth0.customerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"customerName","hash":{},"data":data}) : helper)))
    + "</b>\r\n                            </div>\r\n                            <div class=\"columns small-4 text-right\">\r\n                              <span class=\"text-light\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dateOfReview : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row collapse\">\r\n                            <div class=\"columns small-8\">\r\n                              <div class=\"star-rating-wrapper\">\r\n                                <span class=\"star-rating small\">\r\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.customerRating : depth0),{"name":"times","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.remainingRating : depth0),{"name":"times","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </span>\r\n                                <span class=\"label rating-"
    + alias3(((helper = (helper = helpers.ratingClass || (depth0 != null ? depth0.ratingClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ratingClass","hash":{},"data":data}) : helper)))
    + " rating-no\">"
    + alias3(((helper = (helper = helpers.customerRating || (depth0 != null ? depth0.customerRating : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"customerRating","hash":{},"data":data}) : helper)))
    + "</span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"toggle-wrapper\">\r\n                          <p>\r\n                            "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "\r\n								<span class = 'remainingMessage' style=\"display:none\">"
    + alias3(((helper = (helper = helpers.remainingMessage || (depth0 != null ? depth0.remainingMessage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"remainingMessage","hash":{},"data":data}) : helper)))
    + "</span> \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.messageIsLarge : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>";
},"useData":true,"useDepths":true});

this["template"]["reviewCollectionView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\r\n<div id=\"reviewList\">\r\n\r\n</div>\r\n<button class=\"radius secondary expand-small\" id=\"viewMoreReviews\">View more reviews<span class=\"round secondary label s-1x\" id=\"reviewCount\"></span></button>\r\n</div>\r\n";
},"useData":true});

this["template"]["vendorDetailsView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"column medium-12 small-12 end margin-t10\" id=\"hireContent\">\r\n  <div class=\"panel callout text-center last\">\r\n    <h3><small><i class=\"fi-telephone\"></i> "
    + alias3(((helper = (helper = helpers.phoneNumber || (depth0 != null ? depth0.phoneNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phoneNumber","hash":{},"data":data}) : helper)))
    + "</small><br>\r\n    <small><i class=\"fi-marker\"></i>  "
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "</small></h3>\r\n    <button class=\"success tiny radius closeLayer last\">Request callback</button> <button class=\"success tiny radius closeLayer last\">Select vendor</button>\r\n  </div>\r\n</div>";
},"useData":true});

this["template"]["vendorReviewPopup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"vendorReviewPopup\" class=\" reveal-modal medium-6\" data-reveal aria-labelledby=\"modalTitle\" aria-hidden=\"true\" role=\"dialog\">\r\n        <h4 id=\"modalTitle\"><b><a href=\"javascript:void(0)\" class=\"disabled\">"
    + this.escapeExpression(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</a></b></h4>\r\n      <div id='overallRating' class=\"panel-wrapper\">\r\n      </div>\r\n      <div id='reviewListView'>\r\n      </div>\r\n      <!--<a class=\"close-reveal-modal\" aria-label=\"Close\">�</a>-->\r\n      <a class=\"close-reveal-modal\" aria-label=\"Close\"><em class=\"icon ic-x ic-close ic-hover\"></em></a>\r\n</div>";
},"useData":true});

this["template"]["viewQuotesItemView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <i class=\"fi-star star-filled\"></i>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "        <i class=\"fi-star star-empty\"></i>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "    <br>\r\n    <p class=\"small margin-b10 margin-t10\"><i class=\"fi-marker\"> </i>"
    + this.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"7":function(depth0,helpers,partials,data) {
    return "       <a href=\"javascript:void(0)\" class=\"showMoreMessageLink\">...show more</a>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "<img src=\"assets/img/rupee.png\"/>"
    + this.escapeExpression(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"rate","hash":{},"data":data}) : helper)));
},"11":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return alias3(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rate","hash":{},"data":data}) : helper)))
    + "/"
    + alias3(((helper = (helper = helpers.rateUnit || (depth0 != null ? depth0.rateUnit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rateUnit","hash":{},"data":data}) : helper)));
},"13":function(depth0,helpers,partials,data) {
    return "\r\n  <a href=\"javascript:void(0);\" class=\"button tiny blue  radius last hireVendor\">Unhire</a>\r\n  ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"panel-container\">\r\n<div class=\"row\" id=\"selected-vendor\">\r\n  <div class=\"column medium-3 small-3\" style=\"white-space: nowrap\">\r\n    <div class=\"panel callout\">\r\n    <img src=\""
    + alias3(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\" style=\"width:100px; height:48px\" />\r\n    </div>\r\n    <small style=\"margin-top:1px\">\r\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.avgRating : depth0),{"name":"times","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.remainingRating : depth0),{"name":"times","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      <br>\r\n      <a id=\"viewReviews\" href=\"javascript:void(0)\">Reviews ("
    + alias3(((helper = (helper = helpers.totalNoOfReviews || (depth0 != null ? depth0.totalNoOfReviews : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalNoOfReviews","hash":{},"data":data}) : helper)))
    + ")</a>\r\n    </small>\r\n  </div>\r\n  <div class=\"column medium-6 small-6\">\r\n    <h4>\r\n    <!--<span class=\"vendor-alert\">\r\n      <span class=\"label alert\">\r\n        <i class=\"fi-check\"></i>\r\n        Selected vendor\r\n      </span>\r\n    </span>-->\r\n    </h4>\r\n    <h4>\r\n    <a href=\"vendor-page.html\">"
    + alias3(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</a>\r\n    <span class=\"vendor-alert\" style=\"color:#20FF20\">\r\n      \r\n        <i class=\"fi-check\"></i>\r\n    </span>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <p class=\"small margin-b10 margin-t10\"><span>"
    + alias3(((helper = (helper = helpers.ownerName || (depth0 != null ? depth0.ownerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ownerName","hash":{},"data":data}) : helper)))
    + " <span class=\"small blue hide-for-small-only contactNumberField\"></span></span></p>\r\n    <span id=\"detailSpan\" class=\"details hide\">\r\n      <!-- <small>\r\n        <i class=\"fi-torso\"></i>\r\n           Member since: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contactDetails : depth0)) != null ? stack1.joiningDate : stack1), depth0))
    + "\r\n      </small>\r\n      <br>\r\n      <small>\r\n        <i class=\"fi-wrench\"></i>\r\n           Jobs awarded: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.contactDetails : depth0)) != null ? stack1.jobsAwarded : stack1), depth0))
    + "\r\n      </small>\r\n      <br>\r\n      <small>\r\n        <i class=\"fi-marker\"></i>\r\n          Distance from your adderss: HARDCODED\r\n      </small>\r\n      <br>\r\n      -->\r\n    </span>\r\n    <small>\r\n      <!--<a href=\"javascript:void(0)\" class=\"detail-toggle\">Show contact details</a>-->\r\n      \r\n      <h6 class=\"vendorMessage\">"
    + alias3(((helper = (helper = helpers.vendorMessage || (depth0 != null ? depth0.vendorMessage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorMessage","hash":{},"data":data}) : helper)))
    + "<span class = 'remainingMessage' style=\"display:none\">"
    + alias3(((helper = (helper = helpers.remainingMessage || (depth0 != null ? depth0.remainingMessage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"remainingMessage","hash":{},"data":data}) : helper)))
    + "</span> \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.vendorMessageIsLarge : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </h6>\r\n      <!--<h6 class=\"callbackSuccess green\" style=\"display:none\">Your Request for callback has been submitted.</h6>-->\r\n      \r\n    </small>\r\n  </h4>\r\n</div>\r\n\r\n<div class=\"column medium-3 small-3 text-right small-collapse-left\">\r\n  <h5>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rateUnitPrifix : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</h5>\r\n</div>\r\n\r\n<div class=\"column medium-12 text-center\">\r\n  <!-- <a href=\"javascript:void(0);\" class=\"button tiny right blue  radius last\" id=\"hireButton\">Contact details</a>\r\n  <a href=\"javascript:void(0);\" class=\"button tiny left blue  radius last\" id=\"messagesButton\">Callback</a>\r\n  <a href=\"javascript:void(0);\" class=\"button tiny blue  radius last\" id=\"feedbackButton\">Leave feedback</a>\r\n  -->\r\n  \r\n  \r\n  \r\n  <!-- "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.unhireFlag : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " -->\r\n  <!-- <a href=\"javascript:void(0);\" class=\"button tiny blue  radius last openChat\">Chat</a>\r\n  <a href=\"javascript:void(0);\" class=\"button tiny blue  radius last callback\">Get A Call</a>\r\n  <a href=\"javascript:void(0);\" class=\"button tiny blue  radius last shareDetails\">Call</a>\r\n  -->\r\n  <img src=\"assets/img/HireDis.jpg\" class=\"last hireVendor disabled\"></img>\r\n  <img src=\"assets/img/Chat.jpg\" class=\"last openChat\"></img>\r\n  <img src=\"assets/img/CallbackEna.jpg\" class=\"last callback\"></img>\r\n  <!--<img src=\"assets/img/CallEna.jpg\" class=\"last shareDetails\"></img>-->\r\n  <a href=\"tel:"
    + alias3(((helper = (helper = helpers.contactNumber || (depth0 != null ? depth0.contactNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contactNumber","hash":{},"data":data}) : helper)))
    + "\"><img src=\"assets/img/CallEna.jpg\" class=\"last shareDetails contactNumber\"/></a>\r\n  \r\n  \r\n  <div data-alert class=\"alert-box success radius  margin-t10\" id=\"showUpdate\" style=\"display:none\">\r\n    Your request has been updated...\r\n    <a href=\"#\" class=\"close\">&times;</a>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"displayRegions\"></div>\r\n</div>\r\n\r\n<div id=\"viewPopupRegion\"></div>\r\n</div>\r\n";
},"useData":true});

this["template"]["viewQuotesItemViewNew"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<img src=\"assets/img/rupee.png\"/>"
    + this.escapeExpression(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"rate","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return alias3(((helper = (helper = helpers.rate || (depth0 != null ? depth0.rate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rate","hash":{},"data":data}) : helper)))
    + "/"
    + alias3(((helper = (helper = helpers.rateUnit || (depth0 != null ? depth0.rateUnit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rateUnit","hash":{},"data":data}) : helper)));
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.minRateFormatted || (depth0 != null ? depth0.minRateFormatted : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"minRateFormatted","hash":{},"data":data}) : helper)))
    + "-";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    return "						<i class=\"checked\" style=\"width:"
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].starWidth : depths[1]), depth0))
    + "%\"></i>\r\n";
},"9":function(depth0,helpers,partials,data) {
    return "					 <i></i>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "    			  <li><em class=\"icon ic_x ic-address\"></em>&nbsp;"
    + this.escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.trademanCustomerJobDistance : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n";
},"12":function(depth0,helpers,partials,data) {
    var helper;

  return " ("
    + this.escapeExpression(((helper = (helper = helpers.trademanCustomerJobDistance || (depth0 != null ? depth0.trademanCustomerJobDistance : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"trademanCustomerJobDistance","hash":{},"data":data}) : helper)))
    + " Kms)";
},"14":function(depth0,helpers,partials,data) {
    return "						<a href=\"javascript:void(0)\" class=\"showMoreMessageLink\">...show more</a>\r\n";
},"16":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)));
},"18":function(depth0,helpers,partials,data) {
    return "assets/img/default-profile-pic.png";
},"20":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <div class=\"panel-action-bar\">\r\n         <div class=\"row collapse\">\r\n            <div class=\"column\">\r\n               <div class=\"icon-bar three-up clearfix\">\r\n                  <a class=\"item shareDetails contactNumber\" href=\"tel:"
    + this.escapeExpression(((helper = (helper = helpers.contactNumber || (depth0 != null ? depth0.contactNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"contactNumber","hash":{},"data":data}) : helper)))
    + " target=\"_blank\" \">\r\n	                  <em class=\"icon ic-1x ic-call\"></em>\r\n	                  <label>Call</label>\r\n                  </a>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.requestCallback : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "                  <!--<a class=\"item\" href=\"javascript:void(0);\">\r\n	                  <em class=\"icon ic-1x ic-chat\"></em>\r\n	                  <label>Chat</label>\r\n	                  <span class=\"round success label chat-status\"></span>\r\n	                  <span class=\"round success label chat-no\">3</span>\r\n                  </a>-->\r\n                  <a class=\"item hireVendor disabled\" href=\"javascript:void(0);\">            \r\n	                  <em class=\"icon ic-1x ic-hire hireVendorClass\"></em>\r\n	                  <label class=\"hireVendorLabel\">Hire</label>\r\n                  </a>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n";
},"21":function(depth0,helpers,partials,data) {
    return "	                  	<a class=\"item disabled\" href=\"javascript:void(0);\">\r\n		                    <em class=\"icon ic-1x ic-sent callbackIcon ic-hover\"></em>\r\n		                    <label id=\"callbackText\">Call back requested</label>\r\n	                    </a>\r\n";
},"23":function(depth0,helpers,partials,data) {
    return "	                    <a class=\"item callback\" href=\"javascript:void(0);\">\r\n		                  	<em class=\"icon ic-1x ic-sent callbackIcon\"></em>\r\n		                  	<label id=\"callbackText\">Request call back</label>\r\n	                  	</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"panel-wrapper completed vendor-listing-panel\">\r\n   <div class=\"panel-badge\">\r\n<!--      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rateUnitPrifix : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " -->\r\n   <em class=\"icon ic-x ic-red-rupee icon-svg\"></em> "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.minRateFormatted : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + alias3(((helper = (helper = helpers.maxRateFormatted || (depth0 != null ? depth0.maxRateFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxRateFormatted","hash":{},"data":data}) : helper)))
    + "<br/>"
    + alias3(((helper = (helper = helpers.rateUnit || (depth0 != null ? depth0.rateUnit : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rateUnit","hash":{},"data":data}) : helper)))
    + "\r\n   </div>\r\n   <div class=\"panel panel-content-wrapper\">\r\n      <div class=\"panel-content\">\r\n         <div class=\"sub-heading links-with-Underline\">\r\n            <h5><b><a href=\"#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.vendorid || (depth0 != null ? depth0.vendorid : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorid","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</a></b></h5>\r\n            <div class=\"row collapse\">\r\n               <div class=\"columns small-12\">\r\n                  <div class=\"star-rating-wrapper\">\r\n                     <span class=\"star-rating small\">\r\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.avgRating : depth0),{"name":"times","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.remainingRating : depth0),{"name":"times","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                     </span>\r\n                     <span>&nbsp;<a id=\"viewReviews\" href=\"javascript:void(0)\" class=\"primary-link\">Reviews ("
    + alias3(((helper = (helper = helpers.totalNoOfReviews || (depth0 != null ? depth0.totalNoOfReviews : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalNoOfReviews","hash":{},"data":data}) : helper)))
    + ")</a></span>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n         <div class=\"row collapse\">\r\n            <div class=\"columns small-9\">\r\n               <ul class=\"no-bullet mb-0\">\r\n                  <li><b>"
    + alias3(((helper = (helper = helpers.ownerName || (depth0 != null ? depth0.ownerName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ownerName","hash":{},"data":data}) : helper)))
    + "</b> <span style=\"display:none\" class=\"contactNumberField\">(<i class=\"fi fi-telephone\"></i>"
    + alias3(((helper = (helper = helpers.contactNumber || (depth0 != null ? depth0.contactNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"contactNumber","hash":{},"data":data}) : helper)))
    + ")</span></li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.location : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "               </ul>\r\n               <div class=\"toggle-wrapper\">\r\n               <br/>\r\n                  <p>"
    + alias3(((helper = (helper = helpers.vendorMessage || (depth0 != null ? depth0.vendorMessage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vendorMessage","hash":{},"data":data}) : helper)))
    + "\r\n					<span class = 'remainingMessage' style=\"display:none\">"
    + alias3(((helper = (helper = helpers.remainingMessage || (depth0 != null ? depth0.remainingMessage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"remainingMessage","hash":{},"data":data}) : helper)))
    + "</span> \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.vendorMessageIsLarge : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                  </p>\r\n                  <p></p>\r\n               </div>\r\n            </div>\r\n            <div class=\"columns small-3 text-center\">\r\n               <img class=\"profile-logo\" src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.program(18, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" alt=\"\">\r\n               <div class=\"vendor-alert\" style=\"display:none\"><em class=\"icon ic-x ic-tick-right \"></em>&nbsp;<b>Hired</b></div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.enableQuotesButton : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "   </div>\r\n</div>\r\n<div id=\"displayRegions\"></div>\r\n</div>\r\n\r\n<div id=\"viewPopupRegion\"></div>\r\n</div>\r\n";
},"useData":true,"useDepths":true});

this["template"]["viewQuotesMainContent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return " <br class=\"hide-for-small-only\">\r\n\r\n<div class=\"row\">\r\n    <div id=\"leftRegion\" class=\"column medium-3 small-12\">\r\n    	<a href=\"#\" class=\"show-for-small-only button small-12 tiny radius\" id=\"sortFiltersButton\">Show Sort &amp; Filters <i class=\"fi-widget\"></i></a>\r\n        <ul class=\"no-bullet hide-for-small-only\" style=\"margin-left:0;\" id=\"sortFilter\">\r\n          <li>\r\n            <div>\r\n              <ul class=\"no-bullet\"  style=\"margin-left:0;\">\r\n                <li><h5>Sort</h5></li>\r\n                <li><input class='sort' type=\"radio\" name=\"sort\" value=\"Best price\" id=\"bestPrice\"><label for=\"bestPrice\">Best price</label></li>\r\n                <li><input class='sort' type=\"radio\" name=\"sort\" value=\"Closest\" id=\"closest\"><label for=\"closest\">Closest</label></li>\r\n                <li><input class='sort' type=\"radio\" name=\"sort\" value=\"Highest rating\" id=\"highestRating\"><label for=\"highestRating\">Highest rating</label></li>\r\n                <li><input class='sort' type=\"radio\" name=\"sort\" value=\"Number of reviews\" id=\"numberOfReviews\"><label for=\"numberOfReviews\">Number of reviews</label></li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li><hr></li>\r\n          <li>\r\n            <div>\r\n              <ul class=\"no-bullet\"  style=\"margin-left:0;\">\r\n                <li><h5>Filters</h5></li>\r\n                <li><input type=\"checkbox\" value=\"Within 10 Km\" id=\"withinKM\"><label for=\"withinKM\">Within 10 Km</label></li>\r\n                <li><input type=\"checkbox\" value=\"Certified\" id=\"certified\"><label for=\"certified\">Certified</label></li>\r\n                <li><input type=\"checkbox\" value=\"100% rating\" id=\"hundredRating\"><label for=\"hundredRating\">100% rating</label></li>\r\n                <li><input type=\"checkbox\" value=\"More than 5 reviews\" id=\"fiveReviews\"><label for=\"fiveReviews\">More than 5 reviews</label></li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n    </div>\r\n    <div id=\"middleRegion\" class=\"column medium-7 small-12\">\r\n     \r\n    </div>\r\n    <div id=\"rightRegion\" class=\"column medium-2 small-12\">\r\n\r\n    </div>\r\n</div>";
},"useData":true});

this["template"]["viewQuotesMainContentNew"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return " <br class=\"hide-for-small-only\">\r\n\r\n    <section id=\"pageHeadingRegion\" class=\"columns small-11 medium-8 small-centered\">\r\n	    \r\n	</section>\r\n    <div id=\"middleRegion\" class=\"columns small-11 medium-8 small-centered\">\r\n\r\n    </div>\r\n    <div id=\"rightRegion\" class=\"\">\r\n\r\n    </div>\r\n</div>";
},"useData":true});

this["template"]["viewQuotesRightSectionTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Right panel";
},"useData":true});

this["template"]["viewQuotesView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"vendor-listing-region\" id=\"quotesLisitngs\">\r\n      \r\n</div>";
},"useData":true});

this["template"]["vendorProfileHeaderView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "\r\n                <div class=\"row collapse row-gutter-b page-heading-region inner-page\" style=\"background:#74a5d0\">\r\n                	<div class=\"columns\">\r\n                  <div class=\"row collapse\">\r\n                    <div class=\"column small-11 small-centered\">\r\n                      <a href=\"javascript: window.history.go(-1);\" id=\"backToJobs\" class=\"left\"><em class=\"icon ic-1x ic-fl ic-b-arrow ic-w\"></em></a>\r\n                      <h4 class=\"page-heading left white\">"
    + this.escapeExpression(((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"headerTitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n                </div>\r\n             ";
},"useData":true});

this["template"]["viewVendorDescriptionView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)));
},"3":function(depth0,helpers,partials,data) {
    return "assets/img/default-profile-pic.png";
},"5":function(depth0,helpers,partials,data) {
    return "									<a href=\"javascript:void(0)\" class=\"showMoreMessageLink\">...show more</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"panel panel-content-wrapper\">\r\n                      <div class=\"panel-content\">\r\n                        <div class=\"sub-heading\">\r\n                          <div class=\"row collapse\">\r\n                            <div class=\"columns small-9\">\r\n                              <h5><b><a href=\"javascript:void(0)\">"
    + alias3(((helper = (helper = helpers.businessName || (depth0 != null ? depth0.businessName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"businessName","hash":{},"data":data}) : helper)))
    + "</a></b>\r\n                              <!-- <span>&nbsp;<a id=\"viewReviews\" href=\"javascript:void(0)\" class=\"primary-link\">Reviews ("
    + alias3(((helper = (helper = helpers.totalNoOfReviews || (depth0 != null ? depth0.totalNoOfReviews : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalNoOfReviews","hash":{},"data":data}) : helper)))
    + ")</a> \r\n                              <span>&nbsp;<a id=\"share\" href=\"javascript:void(0)\" class=\"primary-link\">Share</a>-->\r\n                              </span>\r\n                              \r\n                              <!--<span id=\"shareProfileUrl\" style=\"display:none\">http://quotemykaam.in/uatTesting/#viewVendorProfile/"
    + alias3(((helper = (helper = helpers.trademanID || (depth0 != null ? depth0.trademanID : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"trademanID","hash":{},"data":data}) : helper)))
    + "</span>-->\r\n                              </h5>\r\n                              <div><b>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</b></div>\r\n                              <div><em class=\"icon ic_x ic-address\"></em>&nbsp;"
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "</div>\r\n                            </div>\r\n                            <div class=\"columns small-3 text-center\">\r\n                              <img class=\"profile-logo\" src=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\"\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"toggle-wrapper\">\r\n                          <p>\r\n                           "
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "\r\n								<span class = 'remainingMessage' style=\"display:none\">"
    + alias3(((helper = (helper = helpers.remainingMessage || (depth0 != null ? depth0.remainingMessage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"remainingMessage","hash":{},"data":data}) : helper)))
    + "</span> \r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.messageIsLarge : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "							</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  <div id=\"viewPopupRegion\"></div>\r\n					</div>\r\n                  ";
},"useData":true});

this["template"]["viewVendorPortfolioView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "              <li>\r\n                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.actualUrl : depth0), depth0))
    + "\" data-gallery>\r\n                  <img src=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\r\n                </a>\r\n              </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"panel panel-content-wrapper\">\r\n  <div class=\"panel-content\">\r\n    <div class=\"sub-heading\">\r\n      <h5><b><a href=\"#\">Portfolio</a></b></h5>\r\n    </div>\r\n    <div class=\"portfolio-wrapper\">\r\n      <ul class=\"small-block-grid-5 medium-block-grid-6 block-grid portfolio-grid\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.urls : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  <!-- The Gallery as lightbox dialog, should be a child element of the document body -->\r\n    <div id=\"blueimp-gallery\" class=\"blueimp-gallery blueimp-gallery-controls\">\r\n        <div class=\"slides\"></div>\r\n        <h3 class=\"title\"></h3>\r\n        <a class=\"prev\">&lsaquo;</a>\r\n        <a class=\"next\">&rsaquo;</a>\r\n        <a class=\"close\">&times;</a>\r\n        <a class=\"play-pause\"></a>\r\n        <ol class=\"indicator\"></ol>\r\n    </div>\r\n                  ";
},"useData":true});

this["template"]["viewVendorProfileMainContent"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"columns small-11 medium-8 small-centered\">\r\n	<section id=\"pageHeadingRegion\" class=\"\">\r\n	    \r\n	</section>\r\n	<section id=\"vendorProfileRegion\">\r\n    </section>\r\n</div>";
},"useData":true});

this["template"]["viewVendorProfileView"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "           \r\n              <!-- vendorProfileRegion region -->\r\n              <div class=\"vendor-profile-region\">\r\n                  <div class=\"panel-wrapper completed profile-panel\" id=\"profile\">\r\n				  </div>\r\n				  <div class=\"panel-wrapper completed portfolio-panel\" id=\"portfolio\">\r\n				  </div>\r\n				  <div class=\"panel-wrapper completed rating-panel\" id=\"rating\">\r\n				  </div>\r\n				  <div class=\"panel-wrapper completed social-panel\" id=\"social\">\r\n				  </div>\r\n				</div>\r\n			  \r\n\r\n			  ";
},"useData":true});

this["template"]["viewVendorRatingView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " | "
    + this.escapeExpression(((helper = (helper = helpers.numberOfVotes || (depth0 != null ? depth0.numberOfVotes : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"numberOfVotes","hash":{},"data":data}) : helper)))
    + " Votes";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    return "							        <i class=\"checked\" style=\"width:"
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].starWidth : depths[1]), depth0))
    + "%\"></i>\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "							        <i></i>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return " <div class=\"panel-badge\">Review ("
    + alias3(((helper = (helper = helpers.numberOfReviews || (depth0 != null ? depth0.numberOfReviews : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"numberOfReviews","hash":{},"data":data}) : helper)))
    + ")</div>\r\n                    <div class=\"panel panel-content-wrapper\">\r\n                      <div class=\"panel-content\">\r\n                        <div class=\"sub-heading\">\r\n                          <h5><b><a href=\"javascript:void(0)\">Overall Rating"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.numberOfVotes : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</a></b></h5>\r\n                          <div class=\"row collapse\">\r\n                            <div class=\"columns small-9\">\r\n                              <div class=\"star-rating-wrapper\">\r\n                                <span class=\"star-rating small\">\r\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.overallRating : depth0),{"name":"times","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,(depth0 != null ? depth0.remainingRating : depth0),{"name":"times","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                                </span>\r\n                                <span class=\"label rating-"
    + alias3(((helper = (helper = helpers.ratingClass || (depth0 != null ? depth0.ratingClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ratingClass","hash":{},"data":data}) : helper)))
    + " rating-no\">"
    + alias3(((helper = (helper = helpers.overallRating || (depth0 != null ? depth0.overallRating : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"overallRating","hash":{},"data":data}) : helper)))
    + "</span>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"columns small-3 text-center\">\r\n                              \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"clearfix\">\r\n                          <table class=\"rating-table\">\r\n                            <tbody><tr>\r\n                              <td>Cost effectiveness</td>\r\n                              <td><em class=\"icon ic-1x ic-thumb-down ic-hover\"></em> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.costEffectiveness : depth0)) != null ? stack1.thumbsDown : stack1), depth0))
    + "</td>\r\n                              <td><em class=\"icon ic-1x ic-thumb-up ic-hover\"></em> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.costEffectiveness : depth0)) != null ? stack1.thumbsUp : stack1), depth0))
    + "</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>Quality of work</td>\r\n                              <td><em class=\"icon ic-1x ic-thumb-down ic-hover\"></em> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.qualityOfService : depth0)) != null ? stack1.thumbsDown : stack1), depth0))
    + "</td>\r\n                              <td><em class=\"icon ic-1x ic-thumb-up ic-hover\"></em> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.qualityOfService : depth0)) != null ? stack1.thumbsUp : stack1), depth0))
    + "</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td>On time completion</td>\r\n                              <td><em class=\"icon ic-1x ic-thumb-down ic-hover\"></em> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.timelyCompletion : depth0)) != null ? stack1.thumbsDown : stack1), depth0))
    + "</td>\r\n                              <td><em class=\"icon ic-1x ic-thumb-up ic-hover\"></em> "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.timelyCompletion : depth0)) != null ? stack1.thumbsUp : stack1), depth0))
    + "</td>\r\n                            </tr>\r\n                          </tbody></table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  ";
},"useData":true,"useDepths":true});

this["template"]["viewVendorSocialView"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<li>\r\n                              <a class=\"icon ic-2x ic-social-tw ic-hover\" target=\"_blank\" href=\""
    + this.escapeExpression(((helper = (helper = helpers.twitterUrl || (depth0 != null ? depth0.twitterUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"twitterUrl","hash":{},"data":data}) : helper)))
    + "\"></a>\r\n                            </li>";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "<li>\r\n                              <a class=\"icon ic-2x ic-social-fb ic-hover\" target=\"_blank\" href=\""
    + this.escapeExpression(((helper = (helper = helpers.fbURL || (depth0 != null ? depth0.fbURL : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"fbURL","hash":{},"data":data}) : helper)))
    + "\"></a>\r\n                            </li>";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "<li>\r\n                              <a class=\"icon ic-2x ic-social-yt\" target=\"_blank\" href=\""
    + this.escapeExpression(((helper = (helper = helpers.youTubeURL || (depth0 != null ? depth0.youTubeURL : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"youTubeURL","hash":{},"data":data}) : helper)))
    + "\"></a>\r\n                            </li>";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "<li>\r\n                              <a class=\"icon ic-2x ic-social-www\" target=\"_blank\" href=\""
    + this.escapeExpression(((helper = (helper = helpers.websiteURL || (depth0 != null ? depth0.websiteURL : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"websiteURL","hash":{},"data":data}) : helper)))
    + "\"></a>\r\n                            </li>";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "                        <p id=\"qualification\" class=\"gray expand-small text-left disabled\"><em class=\"icon ic-1x ic-fl ic-qualification\"></em><b class=\"links-with-Underline\">Qualifications</b><p>"
    + this.escapeExpression(((helper = (helper = helpers.qualification || (depth0 != null ? depth0.qualification : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"qualification","hash":{},"data":data}) : helper)))
    + "</p></p>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"panel panel-content-wrapper\">\r\n                      <div class=\"panel-content\">\r\n                        <h5><a href=\"javascript:void(0)\">Social</a></h5>\r\n                        <div class=\"social-share clearfix\">\r\n                          <ul class=\"inline-list\">\r\n                            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.twitterUrl : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fbURL : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.youTubeURL : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.websiteURL : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                          </ul>\r\n                        </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.qualification : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                      </div>\r\n                    </div>\r\n                  ";
},"useData":true});

this["template"]["jobDetailsTemplate"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <li><strong>"
    + alias3(((helper = (helper = helpers.jobLabel || (depth0 != null ? depth0.jobLabel : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobLabel","hash":{},"data":data}) : helper)))
    + ":</strong> "
    + alias3(((helper = (helper = helpers.jobDesc || (depth0 != null ? depth0.jobDesc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"jobDesc","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return " <div id=\"jobDetailModal\" class=\"reveal-modal small\" data-reveal aria-hidden=\"true\" role=\"dialog\">\r\n  <h4 class=\"reveal-heading\" style=\"border-bottom:1px solid #DDD\">\r\n    <b>"
    + this.escapeExpression(((helper = (helper = helpers.jobTitle || (depth0 != null ? depth0.jobTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"jobTitle","hash":{},"data":data}) : helper)))
    + "</b>\r\n    <br><br>\r\n  </h4>\r\n  \r\n  <ul class=\"no-bullet\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.formattedJobDesc : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\r\n  <a class=\"close-reveal-modal\" aria-label=\"Close\"><em class=\"icon ic-x ic-close ic-hover\"></em></a>\r\n</div>";
},"useData":true});

return this["template"];

});