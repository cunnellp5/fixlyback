var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var map = require('./routes/map');
var help = require('./routes/help');
var active = require('./routes/active');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/map', map);
app.use('/help', help);
app.use('/active', active);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // render the error page
  res.status(err.status || 500);

  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

//AUTHORIZE
function authorize(req, res, next) {
  var authorization = req.get('Authorization');
  var error = new Error("Invalid Token");
  error.status = 498;
  if (authorization) {
    var token = authorization.substring(7);
    jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
      if (err) {
        next(error);
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    next(error);
  }
};

module.exports = app;
