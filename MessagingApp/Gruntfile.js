module.exports = function(grunt) {
    'use strict';
    /*jshint camelcase: false */
    var buildpath = 'APPRIA';
    var jshint_options = require('./build/jshint_options')(buildpath);
    var app_build_options = require('./build/app_build_options')(buildpath);
    var libs_build_options = require('./build/libs_build_options')(buildpath);
    //var css_minify_options = require('./build/css_minify_options')(buildpath);
    grunt.initConfig({
        jshint: {
          validate: jshint_options
        },
        handlebars: {
          compile: {
            options: {
              namespace: 'template',
              amd: true,
              processName: function(filePath) {
                var file = filePath.split('/').pop();
                return file.split('.')[0];
              }
            },
            files: {
              'assets/js/compiled_templates.js': ['assets/templates/**/*.hbs']
            }
          }
        },
        requirejs: {
          make_release_build: {
            options: app_build_options
          },
          make_lib_build: {
            options: libs_build_options
          }
          // css_minify: {
          //   options: css_minify_options
          // }
        },
        clean: {
          build: ['APPRIA', 'release_build'],
          all: ['APPRIA']
        },
        copy: {
          lib_build: {
            files: [
              {src: ['APPRIA/build/js/framework_common.js'], dest: 'release_build/assets/js/framework_common.js'}
            ]
          },
          release_build: {
            files: [
              {src: ['APPRIA/build/js/main.js'], dest: 'release_build/assets/js/main.js'},
              {src: ['APPRIA/build/js/libs/google/client_platform.js'], dest: 'release_build/libs/google/client_platform.js'},
              {src: ['APPRIA/build/js/libs/require/fb.js'], dest: 'release_build/libs/require/fb.js'},
              {src: ['index.html'], dest: 'release_build/index.html'},
              {src: ['assets/js/libs/require/require.js'], dest: 'release_build/libs/require/require.js'},
              { cwd: 'APPRIA/build/css/', src: ['**'], dest: 'release_build/assets/css/', expand: true},
              { cwd: 'APPRIA/build/data/', src: ['**'], dest: 'release_build/assets/data/', expand: true},
              { cwd: 'APPRIA/build/fonts/', src: ['**'], dest: 'release_build/assets/fonts/', expand: true},
              { cwd: 'APPRIA/build/img/', src: ['**'], dest: 'release_build/assets/img/', expand: true},
              { cwd: 'APPRIA/build/browserDetection/', src:['**'], dest: 'release_build/assets/browserDetection', expand: true}
            ]
          }
        },
        strip: {
          main: {
            src: 'APPRIA/build/js/main.js',
            dest: 'APPRIA/build/js/main.js'
          }
        },
        cacheBust: {
          options: {
            encoding: 'utf8',
            algorithm: 'md5',
            length: 16,
            deleteOriginals: true,
            ignorePatterns: ['require', 'client_platform', 'browserDetection', 'main.css']
          },
          assets: {
            files: [{
              baseDir: 'release_build/',
              src: ['release_build/index.html']
            }]
          },
          htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {
                'release_build/index.html': 'release_build/index.html'
              }
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-strip');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('compile-templates', '', 'handlebars:compile');
    /*When somebody does a build following activities should happen
    1) clean All Existing build files if any
    2) js hint validate the files
    3) compile the templates
    4) make release build files --> uglification
    5) take a back up of O/P file(main.js)
    6) Delete rest files*/
    grunt.registerTask('build',
     ['clean:build', 'jshint:validate',
     'handlebars:compile',
     'requirejs:make_lib_build',
     'copy:lib_build',
     'requirejs:make_release_build',
     'strip', 'copy:release_build',
     'cacheBust',
     'clean:all'
     ]);
};
