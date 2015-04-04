var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var es = require('event-stream');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

//Adds proper dependencies to index
gulp.task('build', function () {

  //get css files
  var cssFiles = gulp.src(['www/**/*.css']);

  //get js files, be sure to sort for angular
  var jsFiles =   //include all the js files, ignore test files
      gulp.src([
        'www/**/*.js',
        '!www/**/*-test.js',
        '!www/**/*.test.js'])
          .pipe(angularFilesort());



  //upload files into index.html page
  gulp.src('./www/index.html')
      .pipe(inject(gulp.src(bowerFiles(), {read: true}), {
        name: 'bower',
        addRootSlash: false,
        relative: true
      }))
      .pipe(inject(es.merge(
          cssFiles,
          jsFiles), {
        addRootSlash: false,
        ignorePath: 'www'
      }))
      .pipe(gulp.dest('./www'));

});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
