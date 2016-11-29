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
  		url: 'shelby.jpg',
  		likes: 10,
  		liked: false,
      createdAt: new Date()
  	},
  	{
  		user: {
  			'username': 'maurosego',
  			'avatar': 'https://pbs.twimg.com/profile_images/776149477145149440/HU8WDG5l_400x400.jpg'
  		},
  		url: 'office.jpg',
  		likes: 2,
  		liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
  	},
  ];

  empty(main).appendChild(template(pictures));
})