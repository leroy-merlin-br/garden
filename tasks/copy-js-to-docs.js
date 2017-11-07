const gulp = require('gulp')
const paths = require('./paths')

module.exports = () => {
  return gulp.src(`${paths.src.js.dest}*`)
    .pipe(gulp.dest(paths.docs.js.dest))
}
