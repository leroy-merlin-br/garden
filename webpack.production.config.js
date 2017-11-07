const webpack = require('webpack')
const UglifyJS = require('uglifyjs-webpack-plugin')
const join = require('path').join

module.exports = {
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
        include: /jump/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJS({
      uglifyOptions: {
        warnings: true
      }
    })
  ]
}
