define(['appConstants'],
function (ClientConstants) {
'use strict';
return {
    isFieldBlank: function (value) {
        var returnValue = false;
        if (!value || _.isUndefined(value) || _.isNull(value)) {
            returnValue = true;
        }
        return returnValue;
    },
    loaderShowHide: function (isShown) {
        if (isShown) {
            jQuery('body').addClass('showingLoader');
        } else {
            jQuery('body').removeClass('showingLoader');
        }
    },
    finalLogout: function () {
        localStorage.clear();
        sessionStorage.clear();
        trademanModel.clear();
        trademanModel.set('isLoggedIn', false);
        window.location.href = '#login';
    },
	logoutUser: function () {
        var newForm = jQuery('<form>', {
	        'action': ClientConstants.LOGOUT_URL,
	        'method': 'POST'
	    }).append(jQuery('<input>', {
	        'name': 'userid',
	        'value': trademanModel.get('userid'),
	        'type': 'hidden'
	    }));
        var that = this;
        jQuery(newForm).ajaxSubmit({
            success: function() {
                that.finalLogout();
            },
            error: function () {
                that.finalLogout();
            }
        });
	},
    preLoadImages : function (argumentArray) {
        var argsLen = argumentArray.length;
        for (var i = argsLen; i--;) {
            var img = new Image();
            img.src = argumentArray[i];
        }
    }
    
  };
});