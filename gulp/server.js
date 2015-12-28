import gulp from 'gulp';
import webserver from 'gulp-webserver';
import notify from 'gulp-notify';

import paths from './paths';

export default function() {
  let config = {
    livereload: true,
    port: 3000,
    open: true
  };

  return gulp.src(paths.public)
    .pipe(webserver(config))
    .pipe(notify('Docs up'));
}
