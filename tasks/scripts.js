const gulp = require('gulp')
const size = require('gulp-size')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')

const paths = require('./paths')
const argv = require('yargs').argv

const config = require(`../webpack.${argv.production ? 'production.' : ''}config`)

module.exports = () => {
  return gulp.src(paths.src.js.main)
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(paths.src.js.dest))
    .pipe(gulp.dest(paths.docs.js.dest))
}
