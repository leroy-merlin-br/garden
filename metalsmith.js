var metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    layouts     = require('metalsmith-layouts'),
    ignore      = require('metalsmith-ignore'),
    collections = require('metalsmith-collections'),
    marked      = require('marked'),
    prism       = require('prismjs');

var renderer = new marked.Renderer();

// Change the code method to output the same as Prism.js would.
renderer.code = function(code, lang, escaped) {
  code = this.options.highlight(code, lang);

  if (!lang) {
    return '<pre><code>' + code + '\n</code></pre>';
  }

  // e.g. "language-js"
  var langClass = this.options.langPrefix + lang;

  return '<pre class="' + langClass + '"><code class="' + langClass + '">' +
    code +
    '</code></pre>\n';
};

// Translate marked languages to prism.
var extensions = {
  js: 'javascript',
  scss: 'css',
  sass: 'css',
  html: 'markup',
  svg: 'markup',
  xml: 'markup',
  py: 'python',
  rb: 'ruby',
  ps1: 'powershell',
  psm1: 'powershell'
};

metalsmith(__dirname)
  .source('./docs')
  .use(collections())
  .use(markdown({
    gfm: true,
    smartypants: true,
    renderer: renderer,
    langPrefix: 'language-',
    highlight: function(code, lang) {
      if (!prism.languages.hasOwnProperty(lang)) {
        // Default to markup.
        lang = extensions[lang] || 'markup';
      }

      return prism.highlight(code, prism.languages[lang]);
    }
  }))
  .use(layouts({
    engine: 'jade',
    directory: 'docs/layout'
  }))
  .use(ignore([
    '**/.DS_Store',
    'layout/**',
    'css/**'
  ]))
  .destination('./public')
  .build((err) => {
    if (err) {
      throw err
    }
  });
