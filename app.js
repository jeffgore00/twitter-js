const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
  console.log('req.method: ', req.method);
  console.log('req.originalUrl: ', req.originalUrl);
  next();
});

app.get('/', (req, res, next) => {
  res.send('WELCOME TO THE PAGE!');
});

app.listen(3000, (req, res, next) => {
  console.log('server listening');
});

