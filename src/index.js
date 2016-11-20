var page = require('page');
require('./homepage');
require('./signin');
require('./signup');

page();

/*
Este archivo es donde page maneja todas las vistas del sitio. Está organizada por el orden en el que carga. Por eso homepage está primero.
*/