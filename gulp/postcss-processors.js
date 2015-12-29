import postcssImport from 'postcss-import';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssExtend from 'postcss-extend';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import lost from 'lost';
import cssnano from 'cssnano';

export default [
  postcssImport,
  postcssSimpleVars,
  postcssExtend,
  postcssColorFunction,
  postcssCustomMedia,
  postcssNested,
  lost,
  cssnano
];
