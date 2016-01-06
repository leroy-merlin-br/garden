'use strict';

import gulp from 'gulp';
import sequence from 'run-sequence';
import paths from './gulp/paths';

import lintJS from './gulp/lint-js';

import buildCSS from './gulp/build-css';

import docsMetalsmith from './gulp/docs-metalsmith';
import docsCSS from './gulp/docs-css';
import docsDeploy from './gulp/docs-deploy';

import server from './gulp/server';

gulp.task('lint:js', lintJS);

gulp.task('build:css', buildCSS);

gulp.task('docs:metalsmith', docsMetalsmith);
gulp.task('docs:css', docsCSS);
gulp.task('docs', (done) => sequence(
  'docs:metalsmith',
  'docs:css',
  'build:css',
  done
  )
);

gulp.task('docs:deploy', ['docs'], docsDeploy);

gulp.task('watch', ['docs'], () => {
  gulp.watch([paths.docs.layout.glob, paths.docs.pages.glob], ['docs']);
  gulp.watch([paths.docs.css.glob], ['docs:css']);
  gulp.watch([paths.src.css.glob], ['build:css']);
});

gulp.task('server', ['watch'], server);
