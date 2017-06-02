var express = require('express');
var router = express.Router();

const Help = require('../queries/help');

/* Stores can see all the hleps. */
router.get('/', function(req, res, next) {
  Help.getAll().then(data => {
    res.json({ Help_forms: data });
  })
});
// get one help at a specific id
router.get('/:id', function(req, res, next)  {
  Help.getOne(req.params.id).then((data) => {
    res.json({ Updated: data })
  })
})


// edit one help
// router.put('/:id/edit', function(req, res, next)  {
//   Help.editHelp(book_body, req.params.id).then(function(result){
//     res.json({ Updated: data })
//   })
// })
// router.get('/pending', function(req, res, next) {
//   Help.getAllpending().then(data => {
//     res.json({ Help_forms: data });
//   })
// });
// router.get('/completed', function(req, res, next) {
//   Help.getAllcompleted().then(data => {
//     res.json({ Help_forms: data });
//   })
// });



module.exports = router;
