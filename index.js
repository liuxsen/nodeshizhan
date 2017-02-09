var express = require('express');
var indexRouter = requrie('./router/index');
var userRouter = requrie('./router/user');
var app = express();
app.use('/', indexRouter);
app.use('/', usersRouter);
app.listen(3000, '127.0.0.1', () => {
    console.log('host is running;')
})