var express = require('express');
var router = express.Router();

require('../schema/users.schema');

const {
    loginUser
} = require('../queries/queries');

//Login
router.post('/', async function (req, res, next) {
    console.log(req.body)
    const {
        message
    } = await loginUser(req.body);
    res.json(message)
});

module.exports = router;