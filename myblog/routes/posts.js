//登出页
var express = require('express');
var router = express.Router();
var checkLogin = require('../middlewares/check.js').checkLogin;

// get/posts 所有用户或者特定用户的文章页
// eg: GET /posts?author=xx
router.get('/', checkLogin, (req, res, next) => {
    res.send(req.flash())
})

// post /posts 发表一篇文章
router.post('/', checkLogin, (req, res, next) => {
    res.send(req.flash());
})

// get /posts/create 发表文章页
router.get('/create', checkLogin, (req, res, next) => {
    res.send(req.flash());
})

// get /posts/:postId 单独一篇文章页
router.get('/:postId', checkLogin, (req, res, next) => {
    res.send(req.flash());
})

// post /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, (req, res, next) => {
    res.send(req.flash())
})

// post /posts/:postId/remove 删除一篇文章
router.post('/:postId/remove', checkLogin, (req, res, next) => {
    res.send(req.flash());
})

// post /posts/:postId/comment 创建一条留言
router.post('/:postId/comment', checkLogin, (req, res, next) => {
    res.send(req.flash());
})

//get /posts/:postId/comment/:commentId/remove 删除一条留言
router.post('/:postId/comment/:commentId/remove', checkLogin, (req, res, next) => {
    res.send(req.flash());
})

module.exports = router;