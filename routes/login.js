var express = require('express');
var router = express.Router();

require('../schema/users.schema');

const mongoose = require('mongoose');
const UserSchema = mongoose.model('Users');

const {
    loginUser
} = require('../queries/queries');

//Login
router.post('/',async function (req, res, next) {
    const message = await loginUser(req.body);
    res.json(message)
});

module.exports = router;