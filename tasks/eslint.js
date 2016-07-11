const gulp = require('gulp')
const eslint = require('gulp-eslint')

const paths = require('./paths')

const argv = require('yargs').argv

module.exports = () => {
  if (argv.ci) {
    return gulp.src(paths.src.js.glob)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  }

  return gulp.src(paths.src.js.glob)
    .pipe(eslint())
    .pipe(eslint.format())
}
