'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
});



gulp.task('autoprefixer', function () {
	return gulp.src('./dist/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./dist'))
});

 
gulp.task('sass:watch', function () {
	gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task("default", ["sass", "sass:watch"]);