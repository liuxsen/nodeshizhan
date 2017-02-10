var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var routes = require('./routes');
var pkg = require('./package');

var app = express();

//设置模板目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engin', 'ejs');

//设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//session 中间件
app.use(session({
        name: config.session.key, //设置cookie中保存session id 的字段名称
        secret: config.session.secret, // 通过secret来计算hash值并放在cookie中，放置signedCookie被篡改
        cookie: {
            maxAge: config.session.maxAge //过期时间，过期后 cookie中的session id自动删除
        },
        store: new MongoStore({
            url: config.mongodb
        })
    }))
    //flash中间件，用来显示通知
app.use(flash());

//路由
routes(app);

app.listen(config.port, () => {
    console.log(`${pkg.name} listen on port ${config.port}`);
})