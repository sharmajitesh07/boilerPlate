define(['errorConstants'], function (ErrorConstants) {
'use strict';
return {
	getErrorText: function (errorCode, errorModule) {
		var returnValue = '';
		if (ErrorConstants[errorModule] && ErrorConstants[errorModule][errorCode]) {
			returnValue = ErrorConstants[errorModule][errorCode];
		} else {
			returnValue = ErrorConstants[errorModule].generalCatch;
		}
		return returnValue;
	}};
});