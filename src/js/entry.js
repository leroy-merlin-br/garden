var files = require.context('.', true, /\components\/\.js$/);

files.keys().forEach(files);
