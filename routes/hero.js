var express = require('express');
var router = express.Router();

require('../schema/users.schema');

const mongoose = require('mongoose');
const UserSchema = mongoose.model('Users');

/* GET All Heros. */
router.get('/', function(req, res, next) {
  UserSchema.find((err,docs)=>{
    if(!err){
      res.json(docs)
    }
  })
});

module.exports = router;
