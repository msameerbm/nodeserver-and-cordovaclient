var express = require('express');
var http = require('http');
var api = require('./api.js');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.post('/api/adduser', api.addUser);
app.get('/api/getuser', api.getUser);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Server listening at: ' + app.get('port'));
});