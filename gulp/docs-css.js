'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

import paths from './paths';

import external from 'postcss-import';
import vars from 'postcss-simple-vars';
import color from 'postcss-color-function';
import media from 'postcss-custom-media';
import nested from 'postcss-nested';
import cssnano from 'cssnano';

export default () => {
  let processors = [
    external,
    vars,
    color,
    media,
    nested,
    cssnano
  ];

  return gulp.src(paths.docs.css.main)
    .pipe(postcss(processors))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(paths.docs.css.dest));
}
