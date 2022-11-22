const express = require('express');
const path = require('path');
const app = express();
const betterMomentRouter = require('./router/betterMomentRouter');

const PORT = 3000;

//parsing json content
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/assets')));

// router to serve index.js - PROD ONLY
// app.get('/', (req, res) => {
//   res.status(200).send(path.join(__dirname, '../src/index.html'));
// });

// route handler to respond with main app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// router to handle data frontend requests
app.use('/api', betterMomentRouter);

// catch-all error (404)
app.use('/', (req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler has been triggered',
    status: 400,
    message: { err: 'An error ocurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// export
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
