var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var morgan = require("morgan");

require("dotenv").config();
const port = process.env.port || 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({limit: "10mb", extended: false, parameterLimit:
10000,}));

//Enable cors
app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
  const response = new Response(
    true,
    200,
    `Welcome to Sequelize Project ${port}`
  );
  res.status(response.code).json(response);
});

//listening to port
app.listen(port, () => {
  console.log(`Welcome to Sequelize Project running on port ${port}`);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
