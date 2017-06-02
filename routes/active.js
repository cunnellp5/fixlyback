var express = require('express');
var router = express.Router();

const Help = require('../queries/help');

// stores should only see all active helps
router.get('/', function(req, res, next) {
  Help.getAllActive().then(data => {
    res.json({ Help_forms: data });
  })
});
// stores may view a help in more detail
router.get('/:id', function(req, res, next) {
  Help.getOneActive(req.params.id).then(data => {
    res.json({ Single: data });
  })
});
// stores may edit a help from active > to pending 
router.put('/:id/edit', function(req, res, next) {
  Help.editOne(req.params.id, req.body.request).then(data => {
    res.json({ edited: data });
  })
});

module.exports = router;
