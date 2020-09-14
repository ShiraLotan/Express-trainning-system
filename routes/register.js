var express = require('express');
var router = express.Router();

const {hassPassword} = require('../security/password.secure');

/* Regiater a user */
router.post('/', async function(req, res, next) {
    const hash = await hassPassword(req.body);
    //Hash doesn't return any value
    res.json(hash);
});

module.exports = router;
