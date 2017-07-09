let webpackConfig = require('./karma-webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'power-assert'],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
      'karma-power-assert',
      'karma-sourcemap-loader',
      'karma-html2js-preprocessor'
    ],
    files: [
      'test/**/*.html',
      'test/index.js'
    ],
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
      '**/*.html': ['html2js']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
};
