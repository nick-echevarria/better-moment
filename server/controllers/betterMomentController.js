const db = require('../models/betterMomentModels');

const betterMomentController = {};

betterMomentController.getUsers = (req, res, next) => {
  const queryString = 'SELECT * FROM users';

  db.query(queryString)
    .then((response) => {
      //   console.log(response.rows);
      res.locals.users = response.rows;
      next();
    })
    .catch((err) => {
      next({
        log: 'Express error handler caught error in getUsers',
        status: 500,
        message: { err: 'Incorrect/incomplete user input supplied' },
      });
    });
};

betterMomentController.getAllSuggestions = (req, res, next) => {
  const queryString = 'SELECT * FROM suggestions';

  db.query(queryString)
    .then((response) => {
      //   console.log(response.rows);
      res.locals.suggestions = response.rows;
      next();
    })
    .catch((err) => {
      next({
        log: 'Express error handler caught error in getSuggestions',
        status: 500,
        message: { err: 'An error occurred' },
      });
    });
};

betterMomentController.getUserSuggestions = async (req, res, next) => {
  const { id } = req.query.id;
  const queryString = `SELECT suggestions FROM suggestions WHERE users_id == ${id}`;

  try {
    const result = await db.query(queryString);
    res.locals.userSuggestions = result.response.rows;
    next();
  } catch (err) {
    next({
      log: 'Express error handler caught error in getUserSuggestions',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

betterMomentController.addSuggestion = async (req, res, next) => {
  const { id } = req.query.id;
  const user_id = id ? id : null;

  const { suggestion_title, suggestion_content } = req.body;
  if (!suggestion_title || !suggestion_content) {
    return next({
      log: 'Express error handler caught error in addSuggestion',
      status: 500,
      message: { err: 'Suggestion title or content was not input.' },
    });
  }

  const queryString = `INSERT INTO suggestions(suggestion_title, suggestion_content, user_id) VALUES ('${suggestion_title}', '${suggestion_content}', '${user_id}');`;

  try {
    const result = await db.query(queryString);
    res.locals.userSuggestion = result.response.rows;
    next();
  } catch (err) {
    next({
      log: 'Express error handler caught error in addSuggestion',
      status: 500,
      message: { err: 'An error occurred in adding a suggestion' },
    });
  }
};

module.exports = betterMomentController;
