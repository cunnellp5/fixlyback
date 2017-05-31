var express = require('express');
var router = express.Router();

const Help = require('../queries/help');

/* Stores can see all the hleps. */
router.get('/', function(req, res, next) {
  Help.getAll().then(data => {
    res.json({ Help_forms: data });
  })
});
router.get('/active', function(req, res, next) {
  Help.getAllActive().then(data => {
    res.json({ Help_forms: data });
  })
});
router.get('/pending', function(req, res, next) {
  Help.getAllpending().then(data => {
    res.json({ Help_forms: data });
  })
});
router.get('/completed', function(req, res, next) {
  Help.getAllcompleted().then(data => {
    res.json({ Help_forms: data });
  })
});



module.exports = router;
