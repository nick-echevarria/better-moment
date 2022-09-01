const express = require('express');

const betterMomentController = require('../controllers/betterMomentController');

const router = express.Router();

router.get('/', betterMomentController.getUsers, (req, res) =>
  res.status(200).json(res.locals.users)
);

router.get(
  '/suggestion',
  betterMomentController.getAllSuggestions,
  (req, res) => res.status(200).json(res.locals.users)
);

router.get('/:userId', (req, res) => res.status(200).json(res.locals.user));

router.post('/', betterMomentController.addSuggestion, (req, res) => {
  console.log('INSIDE POST REQ');
  res.status(200).json(res.locals.suggestion);
});

module.exports = router;
