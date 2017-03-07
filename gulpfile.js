var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sync = require('browser-sync').create();

gulp.task('html', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());
});

gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
});


gulp.task('js', function() {
  return gulp.src('./app/js/**/*js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/scss/**/*.scss'], ['scss']);
  gulp.watch(['./app/js/**/*.js'], ['js']);
  gulp.watch(['./app/index.html'], ['html']);
});

gulp.task('sync', ['html','js', 'scss', 'watch'], function() {
    sync.init({
        server: __dirname + '/dist'
    });
});

gulp.task('default', ['sync'], function() {});
