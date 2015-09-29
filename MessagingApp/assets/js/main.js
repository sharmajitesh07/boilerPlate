require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    marionette: 'libs/backbone.marionette/backbone.marionette',
    handlebars: 'libs/handlebars/handlebars-v3.0.1',
    backboneRadio: 'libs/backbone.radio/backbone.radio',
    foundation: 'libs/foundation/foundation.min',
    modernizr: 'libs/modernizr/modernizr',
    jqueryBarrating: 'libs/jquery.barrating/jquery.barrating.min',
    stickit: 'libs/backbone.stickit/backbone.stickit',
    backboneValidation: 'libs/backbone.validation/backbone.validation',
    jqueryui: 'libs/jqueryui/jquery-ui.min',
    tagator: 'libs/jquery.tagator/fm.tagator.jquery',
    flexSlider: 'libs/flexSlider/jquery.flexslider-min',
    jqueryForm: 'libs/jquery.form/jquery.form',
    facebook: 'libs/facebook/sdk',
    async: 'libs/require/async',
    noUiSlider: 'libs/nouislider/nouislider.min',
    'jquery.ui.widget': 'libs/imageUpload/vendor/jquery.ui.widget',
    'load-image.all.min': 'libs/imageUpload/JavaScript-Load-Image/load-image.all.min',
    'load-image': 'libs/imageUpload/JavaScript-Load-Image/load-image',
    'load-image-meta': 'libs/imageUpload/JavaScript-Load-Image/load-image-meta',
    'load-image-exif': 'libs/imageUpload/JavaScript-Load-Image/load-image-exif',
    'load-image-ios': 'libs/imageUpload/JavaScript-Load-Image/load-image-ios',
    'jquery.fileupload-image': 'libs/imageUpload/jquery.fileupload-image',
    'jquery.fileupload-process': 'libs/imageUpload/jquery.fileupload-process',
    'jquery.fileupload-ui': 'libs/imageUpload/jquery.fileupload-ui',
    'jquery.fileupload': 'libs/imageUpload/jquery.fileupload',
    'canvas-to-blob' : 'libs/imageUpload/JavaScript-Canvas-to-Blob/canvas-to-blob.min',
    'tmpl': 'libs/imageUpload/JavaScript-Templates/tmpl',
    'blueimp-helper': 'libs/imageUpload/Gallery/blueimp-helper',
    'blueimp-gallery': 'libs/imageUpload/Gallery/blueimp-gallery',
    //'blueimp-gallery-video': 'libs/imageUpload/Gallery/blueimp-gallery-video',

    fb: 'libs/require/fb',
    clientApp: 'client_app/client_app',
    homeModule: 'client_app/home_module',
    headerFooterModule: 'client_app/header_footer_module',
    appData: 'client_app/app_data',
    appConstants: 'client_app/constants/app_constants',
    //appConstants: 'client_app/constants/app_constants_local',
    errorConstants: 'client_app/constants/error_constants',
    jobDetailsWidget: 'widgets/job_details_widget/'
  },
  shim: {
      foundation: {
          deps: ['jquery']
      },
      tagator: {
        deps: ['jquery']
      },
      'jquery.fileupload-process': {
        deps: ['jquery.fileupload']
      },
      'jquery.fileupload': {
            deps: ['load-image']
        },
        'blueimp-gallery': {
            deps: ['jquery']
        },
        'jquery.blueimp-gallery.min': {
            deps: ['jquery']
        },
       facebook: {
         exports: 'FB'
       }
    }
});

require(['global_app_loader',
  'marionette', 'stickit', 'backboneValidation'
  //'headerFooterModule/header_footer_module'
  ],
   function(globalAppLoader){
    'use strict';
  globalAppLoader.loader();
});