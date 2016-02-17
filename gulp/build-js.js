import gulp from 'gulp';

import paths from './paths';

import webpack from 'webpack-stream';
import config from '../webpack.config';

import uglify from 'gulp-uglify';

export default () => {
  return gulp.src(paths.src.js.main)
    .pipe(webpack(config))
    .pipe(uglify())
    .pipe(gulp.dest(paths.src.js.dest))
    .pipe(gulp.dest(paths.docs.js.dest));
};
