'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

import errorHandler from './error-handler';

import paths from './paths';

import processors from './postcss-processors';

export default () => {
  return gulp.src(paths.docs.css.main)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', errorHandler)
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.docs.css.dest));
};
