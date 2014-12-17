var gulp = require('gulp'),
        minifyCSS = require('gulp-minify-css'),
        uglify    = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'));

  gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/'))
});
