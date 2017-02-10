// 权限控制
module.exports = {
    checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/signin');
        }
    },
    checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登陆');
            return res.redirect('back'); //返回之前的页面
        }
        next();
    }
}