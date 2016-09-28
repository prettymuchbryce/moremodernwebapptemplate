const PORT = 3000

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var api = require('./api.js')

app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/templates`)
app.use(express.static('static'))

app.get('/', function (req, res) {
  res.render('index')
})

api(app)

app.listen(PORT)
console.log(`Express server started on port ${PORT}`)
