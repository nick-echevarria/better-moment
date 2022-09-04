const express = require('express');

const betterMomentController = require('../controllers/betterMomentController');

const router = express.Router();

// USER CRUD //
router.get('/', betterMomentController.getUsers, (req, res) =>
  res.status(200).json(res.locals.users)
);

// SUGGESTIONS CRUD //
router.get('/', betterMomentController.getAllSuggestions, (req, res) =>
  res.status(200).json(res.locals.suggestions)
);

router.get('/:user', betterMomentController.getUserSuggestions, (req, res) =>
  res.status(200).json(res.locals.userSuggestions)
);

router.post('/', betterMomentController.addSuggestion, (req, res) => {
  console.log('SUGGEST POST FIN');
  res.sendStatus(200);
});

router.put('/', betterMomentController.updateSuggestion, (req, res) => {
  console.log('SUGGEST UPDATE FIN');
  res.sendStatus(200);
});

router.delete('/', betterMomentController.deleteSuggestion, (req, res) => {
  console.log('SUGGEST DELETE FIN');
  res.sendStatus(200);
});

module.exports = router;
