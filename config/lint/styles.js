var gulp     = require('gulp');
var sassLint = require('gulp-sass-lint');

module.exports = function() {
  return gulp.src('styles/**/*.scss')
    .pipe(sassLint({
      rules: {
        'leading-zero': 0,
        'quotes': 0,
        'space-before-colon': 0,
        'one-declaration-per-line': 0,
        'mixins-before-declarations': 0,
        'no-trailing-zero': 0,
        'placeholder-in-extend': 0 // temporary
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};
