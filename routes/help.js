var express = require('express');
var router = express.Router();

const Help = require('../queries/help');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Help.getAll().then(data => {
    res.json({ Help_forms: data });
  })
});

module.exports = router;
