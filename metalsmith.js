const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const ignore = require('metalsmith-ignore')
const collections = require('metalsmith-collections')
const relative = require('metalsmith-relative')
const marked = require('marked')
const prism = require('prismjs')
const renderer = new marked.Renderer()

// Change the code method to output the same as Prism.js would.
renderer.code = function (code, lang, escaped) {
  const codeHighlighted = this.options.highlight(code, lang)

  if (!lang) {
    return `<pre><code>${codeHighlighted}\n</code></pre>`
  }

  // e.g. "language-js"
  const langClass = this.options.langPrefix + lang

  return '<pre class="' + langClass + '"><button class="button button-primary uppercase" data-copy>Copy</button><code class="' + langClass + '">' +
    codeHighlighted +
    '</code></pre>\n'
}

// Translate marked languages to prism.
var extensions = {
  js: 'javascript',
  scss: 'css',
  html: 'markup',
  svg: 'markup'
}

metalsmith(__dirname)
  .source('./docs')
  .clean(false)
  .use(collections({
    docs: {
      pattern: 'components/*.md',
      sortBy: 'priority',
      reverse: true
    }
  }))
  .use(relative({
    methodName: 'root'
  }))
  .use(markdown({
    gfm: true,
    smartypants: true,
    renderer: renderer,
    langPrefix: 'language-',
    highlight: function (code, lang) {
      if (!prism.languages.hasOwnProperty(lang)) {
        // Default to markup.
        lang = extensions[lang] || 'markup'
      }

      return prism.highlight(code, prism.languages[lang])
    }
  }))
  .use(layouts({
    engine: 'jade',
    directory: 'docs/layout'
  }))
  .use(ignore([
    '**/.DS_Store',
    'layout/**',
    'styles/**'
  ]))
  .destination('./public')
  .build((err) => {
    if (err) {
      throw err
    }
  })
