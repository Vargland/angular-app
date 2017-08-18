// Karma configuration
// Generated on Thu Aug 10 2017 11:37:52 GMT-0300 (ART)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-babel-preprocessor'
    ],

    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-route/angular-route.js',
      './src/test/todoTest.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "./src/test/*.js": ["webpack"]
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel?presets=es2015',
            exclude: /node_modules/
          }
        ],
        rules: [
          {
            test: /\.html$/,
            use: [{
              loader: 'html-loader',
              options: {
                minimize: true
              }
            }]
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader']
          },
        ]
      },
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i.e.
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
        // options i.e. 
        chunks: false
      }
    },

    /* plugins: [
        require("karma-webpack")
    ], */

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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}