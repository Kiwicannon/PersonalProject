const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

// Instructions for how task will run.
gulp.task('js', function(){
  gulp.src(['./public/app.js', './public/js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/dist'));
});


// Compile scss into css files
gulp.task('css', function() {
  gulp.src([
    './public/styles/fonts/fonts.css',
    './public/styles/views/normalize.css',
    './public/styles/views/mainStyle.css',
    './public/styles/views/style.css',
    './public/styles/views/sunglasses.css',
    './public/styles/views/mensSunglasses.css'
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
    gulp.watch('./public/js/**/*.js', ['js']);
    gulp.watch('./public/styles/**/*.{css, scss}', ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);