var gulp      = require('gulp');
var loadTasks = require('gulp-task-loader')('config');

gulp.task('default', [
  'compile:html',
  'compile:styles',
  'compile:scripts',
  'compile:assets'
]);
