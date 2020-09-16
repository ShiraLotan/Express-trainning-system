var express = require('express');
var router = express.Router();

require('../schema/users.schema');

const {
    logOutUser
} = require('../queries/queries');

//Logout
router.post('/', async function (req, res, next) {
    const response = await logOutUser(req.body);
    res.json(response)
});

module.exports = router;