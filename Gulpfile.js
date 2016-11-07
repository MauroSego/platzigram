var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

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

gulp.task('default', ['styles', 'assets']); //Acá dejo la funcion que h ace 