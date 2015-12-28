import gulp from 'gulp';
import paths from './paths';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

import external from 'postcss-import';
import vars from 'postcss-simple-vars';
import color from 'postcss-color-function';
import media from 'postcss-custom-media';
import nested from 'postcss-nested';
import cssnano from 'cssnano';

export default function() {
  let processors = [
    external,
    vars,
    color,
    media,
    nested,
    cssnano
  ];

  gulp.src(paths.docs.css.main)
    .pipe(postcss(processors))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(paths.docs.css.dest));
}
