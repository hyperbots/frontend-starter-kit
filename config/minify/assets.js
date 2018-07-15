var gulp = require('gulp');

module.exports = function() {
  return gulp.src(['.build/fonts/**/*', '.build/images/**/*'])
    .pipe(gulp.dest('dist'));
};

// TODO: Minify Images and Fonts
