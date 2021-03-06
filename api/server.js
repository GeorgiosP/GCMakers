'use strict';

var express = require('express');
var port = 8080;
var app = express();
var bodyParser = require('body-parser');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + './../app/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var public_routes = require('./routes/public_routes');
app.use('/',public_routes);


//Connection
app.listen(port, function() {
    console.log('Listening on http://localhost:' + port);
    console.log('Stop Server with CTRL + C');
});
