var gulp = require('gulp');

module.exports = function() {
  return gulp.src(['assets/**/*', '!assets/README.md'])
    .pipe(gulp.dest('.build'));
};
