var express = require('express');
var router = express.Router();

const User = require('../queries/user');
const Help = require('../queries/help');

/* GET all users listing. */
router.get('/', function(req, res, next) {
  User.getAll().then(data => {
    res.json({ Users: data });
  })
});
// Get one user at an ID
router.get('/:id', function(req, res, next) {
  User.getOne(req.params.id).then(data => {
    res.json({ OneUser: data })
  })
})
//GET all helps at a user ID for history LOG of helps
router.get('/:id/helps', function(req, res, next) {
  Help.getAllFromUser(req.params.id).then(data => {
    res.json({ AllHelps: data })
  })
})

module.exports = router;
