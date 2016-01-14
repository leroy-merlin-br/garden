'use strict';

import gulp from 'gulp';

import iconfont from 'gulp-iconfont';

import glyphsCSS from './postcss-glyphs-css';

import paths from './paths';

export default () => {

  let options = {
    fontName: 'Glyphs',
    timestamp: Math.round(Date.now() / 1000)
  };

  return gulp.src(paths.src.glyphs.glob)
    .pipe(iconfont(options))
    .on('glyphs', glyphsCSS)
    .pipe(gulp.dest(paths.src.glyphs.dest))
    .pipe(gulp.dest(paths.src.glyphs.public));
};
