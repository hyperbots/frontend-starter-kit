var gulp = require('gulp');

module.exports = function() {
  return gulp.src('.build/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
};

module.exports.dependencies = ['minify:images'];
