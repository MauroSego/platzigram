var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')

gulp.task('styles', function () {
  gulp
    .src('index.scss')  //tomo el scss
    .pipe(sass())       //busco a sass para que lo transforme en css
    .pipe(rename('app.css'))    //lo renombro como app.css
    .pipe(gulp.dest('public')); //lo llevo a public
})

gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));

})

gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
})

gulp.task('default', ['styles', 'assets', 'scripts']); //Acá dejo la funcion que hace 