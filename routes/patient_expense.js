var express = require('express');
var router = express.Router();

/* GET marryquery listing. */
router.get('/', function (req, res, next) {
  // res.render('marry_query');
  if (req.session.user) {
    var user = req.session.user;
    var name = user.name;
    res.render('patient_expense');
  } else {
    res.render('need_login');
  }
});

module.exports = router;
