var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const { Mongoose } = require('mongoose');

const config = require("./config/config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoute = require('./routes/user.routes');
const planRoute = require('./routes/plan.routes');
const taskRoute = require('./routes/task.routes');
const commentRoute = require('./routes/comment.routes');
const authRoute = require('./routes/auth.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// поключаем библиотеку, которая поможет считывать информацию с форм на странице
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/users', userRoute);
app.use('/plans', planRoute);
app.use('/tasks', taskRoute);
app.use('/comments', commentRoute);
app.use('/authentification', authRoute)

app.use('/test', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

module.exports = app;



// Поключение к базе данных
/*mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});


// Обработчики подключения
mongoose.connection.on("connected", () => {
    console.log("Connection Success");
});

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect, error: " + err);
});*/



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

