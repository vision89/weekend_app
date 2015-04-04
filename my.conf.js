// Karma configuration
// Generated on Sat Apr 04 2015 16:10:11 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../weekend_app/www/lib/angular/angular.js',
      '../weekend_app/node_modules/angular-mocks/angular-mocks.js',
      '../weekend_app/www/**/*.module.js',
      '../weekend_app/www/player/services/model/playerModel.js',
      '../weekend_app/www/player/services/viewmodels/playerViewModels.js',
      '../weekend_app/www/characters/**/*.js',
      '../weekend_app/www/items/**/*.js',
      '../weekend_app/www/parser/**/*.js',
      '../weekend_app/www/scenes/**/*.js',
      '../weekend_app/www/player/**/*.js',
      '../weekend_app/www/js/*.js',
      '../weekend_app/www/**/*-test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
