const webpack = require('webpack')
const join = require('path').join

module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname,
    filename: 'garden.min.js'
  },
  externals: {
    'jquery': '$'
  },
  resolve: {
    alias: {
      scripts: join(__dirname, '/src/js/')
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, include: /jump|popper/, loader: 'babel-loader' }
    ]
  }
}
