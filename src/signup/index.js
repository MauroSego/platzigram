var page = require('page');
var empty = require('empty');
var template = require('./template');
var title = require('title')

page('/signup', function(ctx, next){
	title('Platzigram - signup')
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})