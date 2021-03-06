var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require("dotenv");

//Makes environment variables accessible
dotenv.config(); 

//Set up mongoose connection
var mongoose = require('mongoose');

//Use this string with a .env file and dotenv for real use
//var mongoDB = 'mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.m0zwf.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

//Only store username + password in plain text for the purposes of this coding challenge
var mongoDB = 'mongodb+srv://DevUser_Connor:Winter123@cluster0.m0zwf.gcp.mongodb.net/TargetChallenge?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

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
