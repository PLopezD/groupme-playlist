var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');
var path = require('path');

require('mongoose').connect(config.db.url);

app.use(express.static('./public'));

app.use(express.static('./node_modules/bootstrap/dist'));

// if (config.seed) {
  require('./util/seed');
// }

// setup the app middlware
require('./middleware/appMiddlware')(app);

app.get('/', function(req, res){
  res.render('index.html');
});


// setup the api
app.use('/api', api);

app.get('*', function(req, res){
  res.render('index.html');
  console.log(res.render)
});



app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send('Oops');
});

// export the app for testing
module.exports = app;

