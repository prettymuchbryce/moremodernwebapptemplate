var express = require('express');
var bodyParser = require('body-parser')
var ejs = require('ejs');
var app = express();

var PORT = 3000;

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.use(express.static('static'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(PORT);
console.log('Express server started on port %s', PORT);