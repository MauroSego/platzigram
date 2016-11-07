var express = require('express')

var app = express();

//Cuando el user entra el index de la ruta 
app.get('/', function (req, res){
  res.send('Hola Mundo!')
})

app.listen(3200, function (err){
  if(err) return console.log('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3200')
})