var express = require('express');
var router = express.Router();
var fs=require('fs');
var options = require("./myhfc/org2Config");
var multer=require('multer');
/* GET divorce_application listing. */
router.get('/', function(req, res, next) {
    // res.render('marry_query');
    if (req.session.user){
        var user=req.session.user;
        var name=user.name;
        res.render('divorce_application');
    }else {
        res.send('还未登录，请先登录下试试');
    }
});

router.post('/', function(req, res, next) {
    var men_id= req.body.men_id;
    var women_id=req.body.women_id;
    var request = {
        chaincodeId: options.chaincode_id,
        fcn: 'divorceCheck',
        args: [men_id, women_id],
        chainId: options.channel_id
    };
    console.log(men_id);
    var marry = require('./myhfc/myhfcInvoke');

    marry(request, function (str) {
        console.log(str);
    })
});

module.exports = router;
