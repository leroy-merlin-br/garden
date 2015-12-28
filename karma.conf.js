module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'src/js/**/*.js',
      'test/unit/*-spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/js/**/*.js': ['babel'],
      'test/unit/*.js': ['babel']
    },
    coverageReporter: {
      instrumenters: {
        isparta : require('isparta')
      },
      instrumenter: {
        '*.js': 'isparta'
      }
    },
    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      }
    },
    reporters: ['notify', 'nyan'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
