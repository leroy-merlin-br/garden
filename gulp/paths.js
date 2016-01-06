export default {
  src: {
    css: {
      src: 'src/css/',
      main: 'src/css/garden.css',
      glob: 'src/css/**/*.css',
      dest: 'dist/css/'
    },
    js: {
      src: 'src/js',
      glob: 'src/js/**/*.js'
    }
  },
  docs: {
    css: {
      src: 'docs/css/',
      main: 'docs/css/main.css',
      glob: 'docs/css/**/*.css',
      dest: 'public/'
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
