var gulp   = require('gulp');
var panini = require('panini');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

module.exports = function() {
  browserSync.init({
    server: {
      baseDir: ['.build'],
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  })

  gulp.task('refresh', function() {
    return panini.refresh();
  });

  gulp.watch('styles/**/*.scss', ['compile:styles', reload]);
  gulp.watch(['layouts/**/*.html', 'pages/**/*.html', 'partials/**/*.html'], ['refresh', 'compile:html', reload]);
  gulp.watch('store/**/*', ['refresh', 'compile:html', reload]);
  gulp.watch('scripts/**/*.js', ['compile:scripts', reload]);
  gulp.watch('assets/**/*', ['compile:assets', reload]);
};

module.exports.dependencies = ['default'];
