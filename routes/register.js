var express = require('express');
var router = express.Router();

const {
    registerUser
} = require('../queries/queries');

/* Regiater a user */
router.post('/', async function (req, res, next) {
    const response = await registerUser(req.body);
    res.json(response);
});

module.exports = router;