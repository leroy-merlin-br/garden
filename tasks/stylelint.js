const gulp = require('gulp')
const postcss = require('gulp-postcss')
const stylelint = require('stylelint')
const reporter = require('postcss-reporter')

const paths = require('./paths')

const argv = require('yargs').argv

const processors = [
  stylelint(),
  reporter({
    throwError: argv.ci,
    clearMessages: true
  })
]

module.exports = () => {
  return gulp.src([paths.src.css.glob, paths.docs.css.glob])
    .pipe(postcss(processors))
}
