export default {
  src: {
    css: {
      src: 'src/css/',
      main: 'src/css/main.css',
      glob: 'src/css/**/*.css',
      dest: 'dist/css/'
    }
  },
  docs: {
    css: {
      src: 'docs/css/',
      main: 'docs/css/main.css',
      glob: 'docs/css/**/*.css',
      dest: 'public/',
      vendor: 'docs/css/vendor/*.css'
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
