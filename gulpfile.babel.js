'use strict';

import gulp from 'gulp';
import docsMetalsmith from './gulp/docs-metalsmith';
import docsCSS from './gulp/docs-css';

gulp.task('docs:metalsmith', docsMetalsmith);
gulp.task('docs:css', docsCSS);
