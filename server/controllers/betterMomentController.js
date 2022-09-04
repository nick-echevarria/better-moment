const e = require('express');
const db = require('../models/betterMomentModels');

const betterMomentController = {};

// USERS //
betterMomentController.addUser = async (req, res, next) => {
  const { username, password } = req.body;

  const queryString = `INSERT INTO users(username, password, streak) VALUES ('${username}', '${password}', 0);`;

  try {
    const query = await db.query(queryString);
    console.log('ADD USER 14', query);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in addUser',
      status: 500,
      message: { err: err.message },
    });
  }
};

betterMomentController.getUsers = async (req, res, next) => {
  const queryString = 'SELECT * FROM users;';

  try {
    const data = await db.query(queryString);
    res.locals.users = data.rows;
    console.log('GET USERS 29', res.locals.users);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in getUsers',
      status: 500,
      message: { err: 'Incorrect/incomplete user input supplied' },
    });
  }
};

betterMomentController.updateUser = async (req, res, next) => {
  const { _id, username, password, streak } = req.body;

  const queryString = `UPDATE users SET username = '${username}', password = '${password}', streak = ${streak} WHERE _id = ${_id};`;

  try {
    const query = await db.query(queryString);
    console.log('UPDATE USER 49', query);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in updateUser',
      status: 500,
      message: { err: err.message },
    });
  }
};

betterMomentController.deleteUser = async (req, res, next) => {
  const { _id } = req.body;

  const queryString = `DELETE FROM user WHERE _id = ${_id}`;

  try {
    const query = await db.query(queryString);
    console.log('DELETE USER 67', query);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in deleteUSer',
      status: 500,
      message: { err: err.message },
    });
  }
};

// SUGGESTIONS //
betterMomentController.addSuggestion = async (req, res, next) => {
  const { user_id, suggestion_title, suggestion_content } = req.body;

  const queryString = `INSERT INTO suggestions(suggestion_title, suggestion_content, user_id) VALUES ('${suggestion_title}', '${suggestion_content}', ${user_id});`;

  try {
    const query = await db.query(queryString);
    console.log('ADD SUGGESTION 87', query);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in addSuggenstion',
      status: 500,
      message: { err: err.message },
    });
  }
};

betterMomentController.getAllSuggestions = async (req, res, next) => {
  const queryString = 'SELECT * FROM suggestions';

  try {
    const query = await db.query(queryString);
    console.log('GET SUGGESTIONS 103', query);
    const data = query.json();
    console.log('GET SUGGESTIONS 105', data);
    res.locals.suggestions = data.rows;
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in getAllSuggestions',
      status: 500,
      message: { err: err.message },
    });
  }
};

betterMomentController.getUserSuggestions = async (req, res, next) => {
  const { user_id } = req.params;
  const queryString = `SELECT * FROM suggestions WHERE user_id::bigint = ${user_id};`;

  try {
    const query = await db.query(queryString);
    console.log('GET USERSUGGESTIONS 122', query);
    const data = query.json();
    console.log('GET USERSUGGESTIONS 124', data);
    res.locals.userSuggestions = data.rows;
    return next();
  } catch (err) {
    next({
      log: 'Express error handler caught error in getUserSuggestions',
      status: 500,
      message: { err: err.message },
    });
  }
};

betterMomentController.updateSuggestion = async (req, res, next) => {
  const { _id, suggestion_title, suggestion_content } = req.body;

  const queryString = `UPDATE suggestions SET suggestion_title = '${suggestion_title}', suggestion_content = '${suggestion_content}' WHERE _id = ${_id};`;

  try {
    const query = await db.query(queryString);
    console.log('PUT UPDATE SUGGESTION 143', query);
    const data = query.json();
    console.log('PUT UPDATE SUGGESTION 145', data);
    // res.locals.updatedSuggestion = data.rows;
    return next();
  } catch (err) {
    next({
      log: 'Express error handler caught error in updateSuggestion',
      status: 500,
      message: { err: err.message },
    });
  }
};

betterMomentController.deleteSuggestion = async (req, res, next) => {
  const { _id } = req.body;

  const queryString = `DELETE FROM suggestions WHERE _id = ${_id}`;

  try {
    const query = await db.query(queryString);
    console.log('DELETE SUGGESTION 122', query);
    return next();
  } catch (err) {
    next({
      log: 'Express error handler caught error in deleteSuggestion',
      status: 500,
      message: { err: err.message },
    });
  }
};

module.exports = betterMomentController;
