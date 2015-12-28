## Getting Started
This gulpfile was written in _es2015_ using the `gulpfile.babel.js` convention.

## Macro tasks
- `watch`: Watches files and runs specific task to compile or move the file modified;

## Individual tasks
- `docs:metalsmith`: Creates static documentation with metalsmith;
- `docs:css`: Builds the postcss for the documentation;
- `server`: Runs `watch` and creates a server with livereload for the documentation;

## Creating tasks
All tasks are located on the `./gulp` folder, and follow the file/naming convention of: `namespace-action.js / namespace:action`, for example `styleguide-install.js styleguide:install`.

### Requiring tasks
On the `gulpfile`, we only define the tasks, except for the macro ones, such as `watch` which is just a stack of individual tasks. In order to require a task, you must use the `import` keyword:

```javascript
import taskName from './gulp/task-name'; // import is a top level expression

gulp.task('task:name', taskName) // Referring to task-name.js
```

### Task boilerplate
This is pretty much straight forward:

```javascript
// imports for the specific task
'use strict';

import gulp from 'gulp';
import gulpPlugin from 'gulp-plugin'; // Demo

import paths from './paths'; // In case you need to handle paths throught the task

// done is the callback provided by gulp is case you need to finish a task manually
export default (done) => () {
  return gulp.src(CUSTOM_GLOB)
    .pipe(gulpPlugin())
    .pipe(gulp.dest(CUSTOM_GLOB));
}
```
