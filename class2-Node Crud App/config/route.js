var  PagesController = require('../controllers/pagescontroller')
	,UserController = require('../controllers/userscontroller')
	,express = require('express');

var route = function(app, user) {
  
  app.get('/', PagesController.index);
  app.get('/users', UserController.list);
  app.post('/add', UserController.add);
  app.get('/remove/:name', UserController.remove);
}

module.exports = route
