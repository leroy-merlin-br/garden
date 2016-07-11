const gulp = require('gulp')
const pages = require('gulp-gh-pages')
const fs = require('fs')

const paths = require('./paths')

module.exports = () => {
  fs.writeFileSync('public/CNAME', 'styleguide.leroymerlin.com.br')

  return gulp.src(paths.public + '**')
    .pipe(pages())
}
