module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha', 'chai', 'sinon'],
    files: [
      'src/js/**/*.js',
      'test/**/*.spec.js',
      'node_modules/jquery/dist/jquery.min.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/js/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        require('browserify-istanbul')({
          instrumenter: require('isparta')
        }),
        'babelify'
      ]
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    reporters: ['notify', 'nyan', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
