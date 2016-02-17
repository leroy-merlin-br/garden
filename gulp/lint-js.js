import gulp from 'gulp';

import paths from './paths';

import { argv } from 'yargs';

import conditional from 'gulp-if';

import plumber from 'gulp-plumber';

import eslint from 'gulp-eslint';

export default () => {
  let ci = argv.ci;

  return gulp.src(paths.src.js.glob)
    .pipe(conditional(!ci, plumber()))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(conditional(!ci, plumber.stop()));
};
