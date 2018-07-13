var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function() {
  return gulp.src('styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules/bulma/sass']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles'));
};

// module.exports.dependencies = ['lint:styles'];
