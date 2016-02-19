var files = require.context('.', true, /(components)/);

files.keys().forEach(files);
