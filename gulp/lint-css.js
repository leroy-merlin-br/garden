'use strict';

import gulp from 'gulp';
import stylelint from 'gulp-stylelint';
import reporter from 'gulp-stylelint-console-reporter';

import paths from './paths';

export default () => {

  return gulp.src([paths.src.css.glob, paths.docs.css.glob])
    .pipe(stylelint({
      reporters: [
        reporter()
      ]
    }));
};
