const webpack = require('webpack')
const UglifyJS = require('uglifyjs-webpack-plugin')
const join = require('path').join

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
    path: join(__dirname, '/dist/js/'),
    filename: '[name].min.js'
  },
  externals: {
    'jquery': '$'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        include: /jump|popper/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new UglifyJS({
      uglifyOptions: {
        sourceMap: true,
        warnings: true
      }
    })
  ]
}
