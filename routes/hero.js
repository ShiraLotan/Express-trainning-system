var express = require('express');
var router = express.Router();

require('../schema/users.schema');
require('../schema/hero.schema');


const { addHero, findTrainerIdByMail, getHerosByTainerId, updateHeroPower } = require('../queries/queries');

/* GET All Heros. */
router.post('/all', async function(req, res, next) {
    const trainerId = await findTrainerIdByMail(req.body.email);
    const response = await getHerosByTainerId(trainerId);
    res.json(response)
});

/*Add a hero*/
router.post('/add', async function(req, res, next) {
    const trainerId = await findTrainerIdByMail(req.body.email);
    const response = addHero(req.body, trainerId);
    res.json(response);
    
  });

/*Start practice*/
router.post('/start', async function(req, res, next) {
  const response = await updateHeroPower(req.body)
  res.json({});
  
});

module.exports = router;
