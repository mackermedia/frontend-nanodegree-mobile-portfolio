var gulp = require('gulp'),
        minifyCSS = require('gulp-minify-css'),
        minifyHTML = require('gulp-minify-html'),
        uglify    = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'));

  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));

  var opts = { comments: true, spare: true };

  gulp.src('./*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});
