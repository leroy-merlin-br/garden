'use strict';
import gulp from 'gulp';
import browserify from 'gulp-browserify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

import paths from './paths';

export default () => {
  let options = {
    transform: 'babelify'
  };

  return gulp.src(paths.src.js.glob)
    .pipe(sourcemaps.init())
    .pipe(browserify(options))
    .pipe(rename('garden.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.src.js.dest))
    .pipe(gulp.dest(paths.docs.js.dest));
};
