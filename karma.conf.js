module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', 'fixture'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'test/fixture/**/*.html',
      'test/entry.js'
    ],
    preprocessors: {
      '**/*.html': ['html2js'],
      'test/entry.js': ['webpack']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          {
            test: /\.js$/,
            include: /src\/js/,
            loader: 'babel-istanbul',
            query: { cacheDirectory: true }
          }
        ]
      }
    },
    reporters: ['notify', 'nyan', 'coverage', 'coveralls'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS2'],
    singleRun: false,
    concurrency: Infinity
  });
};
