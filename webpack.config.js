const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
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
      { test: /\.js$/, include: /jump|popper/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
