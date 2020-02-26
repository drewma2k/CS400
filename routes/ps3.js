const express = require('express');
const router = express.Router();

/* GET ps3 page. */
router.route('/')
    .get((req, res, next) => {
        res.render('ps3', { string: 'Drew\'s node app'})
    })
    .post((req, res, next) => {
    res.render('ps3', {string: req.body.string, length: req.body.string.length});
    });

module.exports = router;
