var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  const options = {
    'method': 'GET',
    'url': 'http://hotline.whalemuseum.org/api.json',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const sighting = JSON.parse(response.body);
    res.render('ps4', {
      longitude : sighting[0].longitude,
      latitude : sighting[0].latitude,
      species : sighting[0].species
    });
  });
});

module.exports = router;
