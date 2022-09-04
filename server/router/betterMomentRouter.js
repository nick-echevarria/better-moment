const express = require('express');

const betterMomentController = require('../controllers/betterMomentController');

const router = express.Router();

// USER CRUD //
router.get('/:userId', (req, res) => res.status(200).json(res.locals.user));

// SUGGESTIONS CRUD //
router.get(
  '/suggestion',
  betterMomentController.getAllSuggestions,
  (req, res) => res.status(200).json(res.locals.suggestions)
);

router.post('/', betterMomentController.addSuggestion, (req, res) => {
  console.log('SUGGEST POST FIN');
  res.status(200).json(res.locals.suggestion);
});

router.put('/', betterMomentController.updateSuggestion, (req, res) => {
  console.log('SUGGEST UPDATE FIN');
  res.status(200).json(res.locals.suggestion);
});

router.delete('/', betterMomentController.deleteSuggestion, (req, res) => {
  console.log('SUGGEST DELETE FIN');
  res.status(200).json(res.locals.suggestion);
});

module.exports = router;
