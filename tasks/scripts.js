const gulp = require('gulp')
const size = require('gulp-size')
const run = require('gulp-run')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const paths = require('./paths')
const argv = require('yargs').argv

const developmentConfig = 'webpack.config'
const productionConfig = 'webpack.production.config'

module.exports = () => {
  let configFile = developmentConfig

  if (argv.production) {
    configFile = productionConfig
  }

  return run(`webpack --config ${configFile} --hide-modules`).exec()
    .pipe(size())
}
