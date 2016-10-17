module.exports = function (config) {
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
      'test/entry.js': ['webpack', 'sourcemap']
    },
    webpackMiddleware: { noInfo: true },
    webpack: {
      devtool: 'inline-source-map',
      externals: {
        'jquery': '$'
      },
      module: {
        preLoaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.js$/, include: /jump/, loader: 'babel-loader' },
          {
            test: /\.js$/,
            include: /src\/js/,
            loader: 'babel-istanbul',
            query: { cacheDirectory: true }
          }
        ]
      }
    },
    reporters: ['notify', 'nyan', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly', subdir: '.'},
        {type: 'json', subdir: '.'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
