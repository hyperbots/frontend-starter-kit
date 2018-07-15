var gulp  = require('gulp');
var image = require('gulp-image');

module.exports = function() {
  return gulp.src('.build/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('dist/images'));
};

module.exports.dependencies = ['minify:styles'];
