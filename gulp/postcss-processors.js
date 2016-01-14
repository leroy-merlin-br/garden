import postcssImport from 'postcss-import';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssExtend from 'postcss-extend';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import lost from 'lost';
import cssnano from 'cssnano';

import defaults from '../src/css/defaults.json';

export default [
  postcssImport,
  postcssSimpleVars({
    variables: defaults
  }),
  postcssExtend,
  postcssColorFunction,
  postcssCustomMedia,
  postcssNested,
  lost,
  autoprefixer({
    browsers: ['last 3 versions']
  }),
  cssnano
];
