var express = require('express');
var router = express.Router();

require('../schema/users.schema');
require('../schema/hero.schema');

const { getAllTrainers } = require('../queries/queries');

/* Get all users */
router.get('/all',async function(req, res, next) {
  const response = await getAllTrainers();
  res.json(response)
 });


module.exports = router;
