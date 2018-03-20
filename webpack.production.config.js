const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname,
    filename: 'garden.min.js'
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
    new webpack.optimize.UglifyJsPlugin()
  ]
}
