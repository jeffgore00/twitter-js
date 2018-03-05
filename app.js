const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', (req, res, next) => {
  res.send('WELCOME TO THE PAGE!');
});

app.listen(3000, (req, res, next) => {
  console.log('server listening');
});

