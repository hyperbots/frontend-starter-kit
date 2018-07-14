var gulp   = require('gulp');
var esLint = require('gulp-eslint');

module.exports = function() {
  return gulp.src('scripts/**/*.js')
    .pipe(esLint())
    .pipe(esLint.format());
};
