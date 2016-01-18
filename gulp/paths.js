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
      src: 'src/js',
      glob: 'src/js/**/*.js',
      dest: 'dist/js/'
    }
  },
  docs: {
    css: {
      src: 'docs/css/',
      main: 'docs/css/main.css',
      glob: 'docs/css/**/*.css',
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
