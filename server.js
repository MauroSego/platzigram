var express = require('express')

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public')); //sirve los archivos estaticos (ejemplo css)

//Cuando el user entra el index de la ruta home
app.get('/', function (req, res){
  res.render('index', { title: 'Platzigram' }) //llama al motor de vista (pug) y renderiza el html
})

//Cuando el user entra el index de la ruta signup
app.get('/signup', function (req, res){
  res.render('index', { title: 'Platzigram signup' }) //llama al motor de vista (pug) y renderiza el html
})

app.get('/signin', function (req, res){
  res.render('index', { title: 'Platzigram signin' }) //llama al motor de vista (pug) y renderiza el html
})

app.listen(3200, function (err){
  if(err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3200')
})