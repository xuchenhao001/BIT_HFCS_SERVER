
var express = require('express');
var router = express.Router();

/* GET civilaffairs listing. */
router.get('/', function(req, res, next) {
    if (req.session.user){
        var user=req.session.user;
        var name=user.name;
        res.render('civil_query');
    }else {
        res.send('您还未登录，请先登录');
    }
    //res.render('civil_affairs');
});

module.exports = router;
