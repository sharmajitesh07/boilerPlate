define([], function () {
  'use strict';
  return {
      REGISTER_CUSTOMER: '/RestfulApplication-0.0.1-SNAPSHOT/services/jobsubmission/registerCustomer',
      SERVICE_METHOD_GET: 'GET',
      SERVICE_METHOD_POST: 'POST',
      SERVICE_CONTENT_JSON: 'application/json',
      SERVICE_CONTENT_FORM: 'application/x-www-form-urlencoded',
      VENDOR_PROFILE_URL: 'assets/data/vendor_view_profile.json',
      JOB_TYPES_URL: 'assets/data/job_types.json',
      // JOB_CATEGORIES_EVENTS_URL:  'assets/data/getAllServiceWithSubCatageory.json',
      // JOB_QUERIES_URL: 'assets/data/getQuestionsForService.json',
      MANDATORY_QUESTIONS_URL: 'assets/data/getPersonalDetailsQuestions.json',
      JOB_QUERIES_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/question/getServicesQuestion',
      JOB_SAVE_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/jobsubmission/postJob',
      JOB_LISTING_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/job/fetchCustomerJobs',
      VIEW_QUOTES_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/retrieveQuotesByJob',
      JOB_CATEGORIES_EVENTS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/services/getAllServicesByCity/Gurgaon',
      REQUEST_CALLBACK_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/requestCallback',
      // MANDATORY_QUESTIONS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/question/getServicesQuestion/0',
      POST_FEEDBACK_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/feedback/postFeedback',
      VENDOR_LIST_FOR_QUOTE: '/RestfulApplication-0.0.1-SNAPSHOT/services/job/listVendorsForQuote',
      REVIEW_VENDORS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/feedback/retrieveFeedbacksByVendor',
      VIEW_VENDOR_PROFILE_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/viewTrademanProfile',
      EDIT_DETAILS: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/getCustomer',
      UPDATE_DETAILS: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/updateCustomer',
      
      VENDOR_PROFILE_BUSINESS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/viewTrademanBusinessDetails',
      VENDOR_PROFILE_SERVICE_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/viewTrademanServiceDetails',
      VENDOR_PROFILE_QUALIFICATION_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/viewTrademanQualificationDetails',
      VENDOR_PROFILE_SOCIAL_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/viewTrademanSocialDetails',

      VENDOR_PROFILE_BUSINESS_URL_SAVE: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/updateTrademanBusinessDetails',
      VENDOR_PROFILE_SERVICE_URL_SAVE: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/updateTrademanServiceDetails',
      VENDOR_PROFILE_QUALIFICATION_URL_SAVE: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/registerTrademanQualification',
      VENDOR_PROFILE_SOCIAL_URL_SAVE: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/updateTrademanSocialDetails',
      VENDOR_MAIN_DESC_URL_SAVE : '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/updateTrademanBasicDetails',
      //Vendor URLs
      VENDOR_REGISTRATION_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/createTrademan',
      VENDOR_UPDATE_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/updateTrademanServiceDetails',
      VERIFY_VENDOR_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/upload/',
      LOGIN_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/loginUser',
      LOGIN_KEY_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/loginUserKey',
      LOGOUT_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/logoutUser',
      FORGOT_PASSWORD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/forgotPassword',
      CONFIRM_PIN_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/forgot/TOKEN_ID',
      RESET_PWD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/changePassword',
      CHANGE_PWD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/loginChangePassword',
      CONTACT_US_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/contactUs/saveMessage',
      IMAGE_DOWNLOAD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/download/',
      IMAGE_UPLOAD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/upload/',
      IMAGE_DOWNLOAD_URL_LOGO: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/download/?userId=USER_ID&image_category=logo',
      IMAGE_DOWNLOAD_URL_PORTFOLIO: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/download/?userId=USER_ID&image_category=portfolio',
      PROFILE_COMPLETENESS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/getTradmanPortfolioCompletenessDetails',
      IMAGE_DELETE_SERVICE_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/delete',
      //Rate Card
      VENDOR_RATE_CARD_UNIT_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/getPriceUnits/0',
      GET_RATE_CARD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/getTrademanDefaultRateList',
      SAVE_RATE_CARD_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/trademan/saveTrademanDefaultRateList',
      IMAGE_DOWNLOAD_URL_PRICELIST: '/RestfulApplication-0.0.1-SNAPSHOT/services/fileservice/download/?userId=USER_ID&image_category=pricelist',
      VENDOR_STATISTICS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/leads/getActiveLeads',
      LEADS_TOKEN_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/leadstoken',
      GET_LEADS_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/leads/getLeads',
      GET_QUOTES_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/retrieveQuotesByVendor',
      QUOTE_SUBMIT_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/postQuote',
      QUOTE_POST_FEEDBACK_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/requestFeedback',
      REQUEST_OTP: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/generateToken',
      VERIFY_OTP: '/RestfulApplication-0.0.1-SNAPSHOT/services/login/verifyToken',
      CALL_VENDOR_URL: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/requestCall',
      USER_REGISTRATION_TOKEN: '/RestfulApplication-0.0.1-SNAPSHOT/services/quote/userRegistrationtoken',
      MAX_GRAPH_DISTANCE: 30,
      GRAPH_START_VLAUE: 15,
      MIN_GRAPH_DISTANCE: 1,
      HIRE: 'assets/img/HireEna.jpg',
      HIRE_DISABLED: 'assets/img/HireDis.jpg',
      UNHIRE: 'assets/img/UnHire.jpg',
      CALLBACK_DISABLED: 'assets/img/CallbackDis.jpg',
      MANDATORY_NAME_KEY: 'username',
      MANDATORY_NUMBER_KEY: 'phoneNumber',
      MANDATORY_ADDRESS_KEY: 'address',
      MANDATORY_BUDGET_KEY: 'budget',
      MANDATORY_DATE_TIME_KEY: 'dateAndTime',
      MANDATORY_OTP: 'OTP',
      SAVE_JOB_CHANNEL: 'Web',
      SAVE_JOB_ADDITIONAL_COMMENTS: 'additionalComments',
      SERVICE_GENERIC_ERROR: 'Sorry your request could not be saved. Please try later.',
      nameAndNumberDetails: [{
                'questionID': 'username',
                    'content': 'What\'s your name?',
                    'options': null,
                    'fieldType': 1,
                    'size': 'L',
                    'defaultValue': '',
                    'allowedCharaterSet': '',
                    'mandatory': 1,
                    'sequence': null,
                    'serviceID': 0,
                    'inputLength': 50,
                    'overrideQuestionId': 0,
                    'dependentQuestionId': 0,
                    'dependentOptionId': 0,
                    'dependent': 0,
                    'override': 0,
                    'isLastQuestion': false
                  },
                  {
                    'questionID': 'phoneNumber',
                    'content': 'What\'s your contact number',
                    'options': null,
                    'fieldType': 1,
                    'size': 'L',
                    'defaultValue': '',
                    'allowedCharaterSet': '[1-9][0-9]{9}',
                    'mandatory': 1,
                    'sequence': null,
                    'serviceID': 0,
                    'inputLength': 10,
                    'overrideQuestionId': 0,
                    'dependentQuestionId': 0,
                    'dependentOptionId': 0,
                    'dependent': 0,
                    'override': 0,
                    'isLastQuestion': false,
                    'buttonValue': 'Send OTP'
                  },
                  {
                    'questionID': 'OTP',
                    'content': 'One time password',
                    'options': null,
                    'fieldType': 1,
                    'size': 'L',
                    'defaultValue': '',
                    'allowedCharaterSet': '',
                    'mandatory': 1,
                    'sequence': null,
                    'serviceID': 0,
                    'inputLength': 10,
                    'overrideQuestionId': 0,
                    'dependentQuestionId': 0,
                    'dependentOptionId': 0,
                    'dependent': 0,
                    'override': 0,
                    'isLastQuestion': false,
                    'buttonValue': 'Verify OTP',
                    'needExtraButton': true
                  }],
      whenAndWhereDetails: [
              {
                'questionID': 'address',
                'content': 'Where do you need service?',
                'options': [],
                'fieldType': 8,
                'size': 'L',
                'defaultValue': 'Address line 1',
                'allowedCharaterSet': '',
                'mandatory': 1,
                'sequence': null,
                'serviceID': 7,
                'inputLength': 40,
                'overrideQuestionId': 0,
                'dependentQuestionId': 0,
                'dependentOptionId': 0,
                'dependent': 0,
                'override': 0,
                'isLastQuestion': false
              },
              {
                'questionID': 'dateAndTime',
                'content': 'When you want the service?',
                'fieldType': 7,
                'size': 'L',
                'defaultValue': 'Please select',
                'allowedCharaterSet': '',
                'mandatory': 1,
                'sequence': null,
                'serviceID': 7,
                'inputLength': 40,
                'overrideQuestionId': 0,
                'dependentQuestionId': 0,
                'dependentOptionId': 0,
                'dependent': 0,
                'override': 0,
                'isLastQuestion': true,
                'buttonValue': 'Submit request'
              }]
  };
});