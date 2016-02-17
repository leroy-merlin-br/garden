import gulp from 'gulp';

import paths from './paths';

import { argv } from 'yargs';

import postcss from 'gulp-postcss';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';

export default () => {
  let processors = [
    stylelint(),
    reporter({
      throwError: argv.ci,
      clearMessages: true
    })
  ];

  return gulp.src([paths.src.css.glob, paths.docs.css.glob])
    .pipe(postcss(processors));
};
