var express = require('express');
var indexRouter = require('./router/index');
var userRouter = require('./router/users');
var app = express();
app.use('/', indexRouter);
app.use('/', userRouter);
app.listen(3000, '127.0.0.1', () => {
    console.log('host is running;')
})