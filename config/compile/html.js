var gulp    = require('gulp');
var panini  = require('panini');

module.exports = function() {
  return gulp.src('pages/**/*.html')
    .pipe(panini({
      root: 'pages',
      layouts: 'layouts',
      partials: 'partials',
      helpers: 'helpers',
      data: 'store'
    }))
    .pipe(gulp.dest('dist'));
};
