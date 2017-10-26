'use strict';

// Includes packages
var gulp                = require('gulp'),
    sass                = require('gulp-sass'),
    autoprefixer        = require('gulp-autoprefixer'),
    cleanCss            = require('gulp-clean-css'),
    notify              = require('gulp-notify'),
    specificityGraph    = require('specificity-graph');

// Paths variables
var paths = {
    dist       : 'dist',
    distCSS    : './dist/style.css',
    graphDir   : '_specificity-graph',
    sass       : ['src/**/*.scss' ]
};


// Compile SASS
gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['IE 8', 'IE 9', 'last 5 versions']}))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dist))
        .pipe(notify({ title: 'SASS', message: 'Compiled successfully!! Happy coding! 😎', onLast: true}));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('graph', function() {
    specificityGraph(paths.graphDir, paths.distCSS, function() {
        console.log('Specificity graph generated!! Happy battlel with the specificity! 😎');
    });
});


// Run default task
gulp.task('default', ['sass', 'watch']);