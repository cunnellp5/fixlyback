var express = require('express');
var router = express.Router();
var request = require('request');
require('dotenv').config();

/* GET mapData. */
router.get('/', function(req, res, next) {
  request(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.GOOGLE_MAP_KEY}&location=39.7392358,-104.990251&radius=10000&types=bicycle_store&opennow`, function (error, response, body) {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', JSON.parse(body).results);
    res.json(JSON.parse(body).results);
  });
});

module.exports = router;
