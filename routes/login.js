var express = require('express');
var router = express.Router();

require('../schema/users.schema');

const {
    loginUser,
} = require('../queries/queries');

//Login
router.post('/', async function (req, res, next) {
    const response = await loginUser(req.body);
    res.json(response)
});


module.exports = router;