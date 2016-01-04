'use strict';

import gulp from 'gulp';
import pages from 'gulp-gh-pages';

import fs from 'fs';

import paths from './paths';

export default () => {
  fs.writeFileSync('public/CNAME', 'styleguide.leroymerlin.com.br');

  return gulp.src(paths.public + '**')
    .pipe(pages());
};
