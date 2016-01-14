module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', 'browserify', 'fixture'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'test/fixture/**/*.html',
      'test/**/*.spec.js',
      {
        pattern: 'src/js/**/*.js'
      }
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.html': ['html2js'],
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
    browsers: ['PhantomJS2'],
    singleRun: false,
    concurrency: Infinity
  });
};
