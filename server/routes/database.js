const express = require('express');

const betterMomentController = require('../controllers/betterMomentController');

const router = express.Router();

router.get('/', betterMomentController.getUsers, (req, res) =>
  res.status(200).json(res.locals.users)
);

router.get('/:userId', (req, res) =>
  res.status(200).json(res.locals.characters)
);

router.post('/:userId', (req, res) => { 
    res.status(200).json(res.locals.suggestions)
})


module.exports = router;