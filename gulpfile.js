const gulp = require('gulp')
const paths = require('./tasks/paths')

gulp.task('clean', require('./tasks/clean'))
gulp.task('glyphs', require('./tasks/glyphs'))
gulp.task('eslint', require('./tasks/eslint'))
gulp.task('stylelint', require('./tasks/stylelint'))
gulp.task('styles', require('./tasks/styles'))
gulp.task('styles:docs', require('./tasks/styles-docs'))
gulp.task('scripts', require('./tasks/scripts'))
gulp.task('copy-js-to-docs', require('./tasks/copy-js-to-docs'))
gulp.task('metalsmith', require('./tasks/metalsmith'))
gulp.task('server', require('./tasks/server'))
gulp.task('ghpages', require('./tasks/ghpages'))

gulp.task('watch', () => {
  gulp.watch([paths.docs.layout.glob, paths.docs.pages.glob], gulp.series('metalsmith'))
  gulp.watch(paths.docs.css.glob, gulp.series('styles:docs'))
  gulp.watch(paths.src.css.glob, gulp.series('stylelint', 'styles', 'styles:docs'))
  gulp.watch(paths.src.js.glob, gulp.series('eslint', 'scripts'))
})

gulp.task('build',
  gulp.series(
    'glyphs',
    gulp.parallel(
      'stylelint',
      'styles',
      'eslint'
    ),
    'scripts',
    'copy-js-to-docs'
  )
)

gulp.task('default',
  gulp.series(
    'clean',
    'metalsmith',
    'build',
    'styles:docs',
    'server',
    'watch'
  )
)

gulp.task('deploy',
  gulp.series(
    'metalsmith',
    'build',
    'styles:docs',
    'ghpages'
  )
)
