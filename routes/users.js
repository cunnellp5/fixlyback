var express = require('express');
var router = express.Router();

const User = require('../queries/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.getAll().then(data => {
    res.json({ Users: data });
  })
});

module.exports = router;
