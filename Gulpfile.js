var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var watchify = require('watchify');

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

function compile(watch) {
  /*Pone en bundle el archivo js de la página, donde corro el page.js*/
  var bundle = watchify(browserify('./src/index.js'));

  /*Acá tomo la var bundle donde está el archivo y lo compilo como lo hacía anteriormente con browserify*/
  function rebundle(){
    bundle
      .transform(babel)
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  /*Acá tomo la variable watch donde lo que hago es ver si hay algun cambio en el bundle mientras se está corriendo el servidor, con la función tiro un msj en la consolo y hago el rebundle (función de arriba)*/
  if (watch) {
    bundle.on('update', function() {
      console.log('-->Bundling...');
      rebundle();
    })   
  }

  /*Siempre antes de terminar hago el rebundle igualmente, haga cambio o no. ya que al principio cuando inicia tengo que hacer un rebundle.*/

  rebundle();
}
/* ####Parte vieja de código######
Este task era el anterior. Se seoaró en dos bloques. El browserify se hace al principio y entra en la variable bundle.
El resto está en la función rebundle trabajando igual, compilo todo y termino con el app.js

gulp.task('scripts', function(){
  browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
})
*/


gulp.task('build', function(){
  return compile();
});

gulp.task('watch', function(){
  return compile(true);
});

gulp.task('default', ['styles', 'assets', 'build']); //Acá dejo la funcion que hace 