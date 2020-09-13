var express = require('express');
var router = express.Router();

/* Regiater a user */
router.post('/', function(req, res, next) {
 res.json(req.body)
});

module.exports = router;
