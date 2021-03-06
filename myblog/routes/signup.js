//注册页
var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check.js').checkNotLogin;

// GET/signup 注册页
router.get('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash());
})

//POST/signup 用户注册
router.post('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash());
})

module.exports = router;