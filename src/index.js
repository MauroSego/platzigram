var page = require('page');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
  main.innerHTML = 'HOME <a href="/signup">Signup</a>' // diga home
})

page('/signup', function(ctx, next){
  main.innerHTML = 'Sign up <a href="/">Home</a>' //diga signup 
})

page();