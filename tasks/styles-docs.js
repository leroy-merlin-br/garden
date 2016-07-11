const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const size = require('gulp-size')
const plumber = require('gulp-plumber')

const paths = require('./paths')

const processors = require('./postcss-processors')
const errorHandler = require('./postcss-error-handler')

module.exports = () => {
  return gulp.src(paths.docs.css.main)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors)).on('error', errorHandler)
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.docs.css.dest))
}
