// gulp file for building project, reloading the browser when
// changes are made, and starting local development server

var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var jshint = require('gulp-jshint');

// runs jslint through all js files
gulp.task('js-analysis', function() {
  return gulp.src('src/**/*')
    .pipe(jshint());
});

// builds all javascript and css files into one 'bundle.js' file
// and copies folder into dist folder
gulp.task('build', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/'));
});

// starts a local development server to to reload files
// when changes are made
gulp.task('server', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 9000
  });
});

// watch all js/css and main html file for changes
gulp.task('watch-changes', function() {
  gulp.watch(["src/**/*"], ['reload']);
  gulp.watch(['dist/index.html'],['reload']);
});

// task for reloading page
gulp.task('reload', ['build'], function() {
  reload();
});

gulp.task('default', ['server', 'watch-changes']);
