var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
	title('Platzigram')
  var main = document.getElementById('main-container');

  var pictures = [
  	{
  		user: {
  			'username': 'maurosego',
  			'avatar': 'https://pbs.twimg.com/profile_images/776149477145149440/HU8WDG5l_400x400.jpg'
  		},
  		url: 'office.jpg',
  		likes: 1024,
  		liked: false
  	},
  	{
  		user: {
  			'username': 'maurosego',
  			'avatar': 'https://pbs.twimg.com/profile_images/776149477145149440/HU8WDG5l_400x400.jpg'
  		},
  		url: 'office.jpg',
  		likes: 2,
  		liked: true
  	},
  ];

  empty(main).appendChild(template(pictures));
})