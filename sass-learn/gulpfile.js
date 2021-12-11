const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync').create();

function css() {
  return gulp
    .src('./*.sass')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(uglifycss())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./*.sass', css);
  gulp.watch('./index.html').on('change', browserSync.reload);
}

exports.css = css;
exports.watch = watch;
