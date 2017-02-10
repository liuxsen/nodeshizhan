//用户登陆
var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check.js').checkNotLogin;
// GET/signin 登陆页
router.get('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash());
})

//POST /signin 用户登陆
router.post('/', checkNotLogin, (req, res, next) => {
    res.send(req.flash());
})

module.exports = router;