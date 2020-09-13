var express = require('express');
var router = express.Router();

require('../schema/users.schema');

const mongoose = require('mongoose');
const UserSchema = mongoose.model('Users');


//Add A User
router.post('/', function(req, res, next) {
  const { name, email, password} = req.body;

  UserSchema.findOne({email:email}).then(user=>{
    if(user){
      res.json({message: 'Already exist'})
    }else{
      const user = new UserSchema({ name, email, password });
      user.save((err, docs)=>{
        if(!err){
          res.json(docs)
        }
      })
    }
  }).catch(err => {
    return res.status(500).json({
      error: err
  });
  })
});

module.exports = router;
