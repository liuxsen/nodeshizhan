//登出页
var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check.js').checkLogin;
// GET /signout 登出
router.get('/', checkLogin, (req, res, next) => {
    res.send(req.flash())
})

module.exports = router;