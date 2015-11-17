var express    = require('express');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var path = require('path');

var app = express();

app.locals.pretty = true;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(require('./controllers'))

var server = app.listen(3030, function () {
  console.log('server listening on %d', server.address().port)
})
