const webpack = require('webpack')

module.exports = {
  entry: {
    garden: [
      'classlist.js',
      'element-closest',
      './src/js/entry.js'
    ]
  },
  output: {
    path: __dirname,
    filename: '[name].min.js'
  },
  externals: {
    'jquery': '$'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, include: /jump/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
