'use strict';

// Includes packages
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss     = require('gulp-clean-css'),
    notify       = require('gulp-notify'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify');


// Paths variables
var paths = {
    distCSS : 'dist/assets/css',
    distJS  : 'dist/assets/js',
    css    : ['dist/assets/css/**/*.css'],
    sass    : ['src/scss/**/*.scss'],
    js      : ['src/js/**/*.js']
};


// Compile SASS development
gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['IE 9', 'last 5 versions']}))
    .pipe(gulp.dest(paths.distCSS))
    .pipe(notify({ title: 'CSS', message: '[DEV] SASS compiled successfully!! Happy coding! 😜', onLast: true}));
});


// [PROD] Clean CSS to production
gulp.task('sass-build', ['sass'], function () {
  return gulp.src(paths.css)
    .pipe(cleanCss())
    .pipe(gulp.dest(paths.distCSS))
    .pipe(notify({ title: 'CSS', message: '[BUILD] Clean and minify CSS to production!! 😎', onLast: true}));
});


// Contact JS development
gulp.task('scripts', function() {
  return gulp.src([
    'src/js/libs/jquery.js',
    'src/js/libs/jquery.easing.js',
    'src/js/libs/jquery.waypoints.js',
    'src/js/libs/autosize.js',
    'src/js/libs/jquery.cookie.js',
    'src/js/libs/jquery.form.js',

    'src/js/libs/scrollmagic/ScrollMagic.js',
    //'src/js/libs/scrollmagic/plugins/debug.addIndicators.js',
    'src/js/libs/scrollmagic/plugins/jquery.ScrollMagic.js',

    'src/js/components/header.js',
    'src/js/components/waypoints.js',
    'src/js/components/instafeed.js',
    'src/js/components/slider.js',
    'src/js/components/contact-form.js', 
    'src/js/components/contact-map.js',   
    'src/js/components/cookie-consent.js',
    'src/js/main.js'
  ])
  .pipe(concat({ path: 'scripts.js' }))
  .pipe(gulp.dest(paths.distJS))
  .pipe(notify({ title: 'JS', message: '[DEV] JS concat successfully!! 😜', onLast: true}));
});


// Compress uglify JS to production
gulp.task('scripts-build', ['scripts'], function() {
  return gulp.src([
    'assets/js/scripts.js',
  ])
  .pipe(uglify())
  .pipe(gulp.dest(paths.distJS))
  .pipe(notify({ title: 'JS', message: '[BUILD] JS uglify successfully to production!! 😎', onLast: true}));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['scripts']);
});


// Run default task
gulp.task('default', ['sass', 'scripts', 'watch']);
gulp.task('build', ['sass-build', 'scripts-build'], function() {
  console.log('------------------------------------------------');
  console.log('➜ All files are ready to deployment, great job!!');
  console.log('------------------------------------------------');
});

