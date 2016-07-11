module.exports = {
  src: {
    css: {
      src: 'src/css/',
      main: 'src/css/garden.css',
      glob: 'src/css/**/*.css',
      dest: 'dist/css/'
    },
    glyphs: {
      src: 'src/glyphs/',
      glob: 'src/glyphs/**/*.svg',
      dest: 'dist/fonts'
    },
    js: {
      src: 'src/js/',
      main: 'src/js/entry.js',
      glob: 'src/js/**/*.js',
      dest: 'dist/js/'
    }
  },
  docs: {
    css: {
      src: 'docs/styles/',
      main: 'docs/styles/main.css',
      glob: 'docs/styles/**/*.css',
      dest: 'public/assets/'
    },
    js: {
      dest: 'public/assets'
    },
    layout: {
      src: 'docs/layout/',
      glob: 'docs/layout/**/*.jade'
    },
    glyphs: {
      dest: 'public/fonts'
    },
    pages: {
      glob: 'docs/**/*.md'
    }
  },
  public: 'public/'
}
