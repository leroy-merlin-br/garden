const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const glyphsCSS = require('./postcss-glyphs-css')

const paths = require('./paths')

const options = {
  fontName: 'Glyphs',
  timestamp: Math.round(Date.now() / 1000)
}

module.exports = () => {
  return gulp.src(paths.src.glyphs.glob)
    .pipe(iconfont(options))
    .on('glyphs', glyphsCSS)
    .pipe(gulp.dest(paths.src.glyphs.dest))
    .pipe(gulp.dest(paths.docs.glyphs.dest))
}
