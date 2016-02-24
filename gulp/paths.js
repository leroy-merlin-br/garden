export default {
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
      dest: 'dist/fonts',
      public: 'public/fonts'
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
      dest: 'public/css/'
    },
    js: {
      dest: 'public/js'
    },
    layout: {
      src: 'docs/layout/',
      glob: 'docs/layout/**/*.jade'
    },
    pages: {
      glob: 'docs/**/*.md'
    }
  },
  public: 'public/'
};
