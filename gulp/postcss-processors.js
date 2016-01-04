import postcssImport from 'postcss-import';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssExtend from 'postcss-extend';
import postcssColorFunction from 'postcss-color-function';
import postcssCustomMedia from 'postcss-custom-media';
import postcssNested from 'postcss-nested';
import postcssReporter from 'postcss-reporter';
import lost from 'lost';
import cssnano from 'cssnano';
import stylelint from 'stylelint';

export default [
  postcssImport,
  postcssSimpleVars,
  postcssExtend,
  postcssColorFunction,
  postcssCustomMedia,
  postcssNested,
  stylelint,
  postcssReporter({ clearMessages: true }),
  lost,
  cssnano
];
