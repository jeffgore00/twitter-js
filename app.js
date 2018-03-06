const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

app.use(function (req, res, next) {
  console.log('req.method: ', req.method);
  console.log('req.originalUrl: ', req.originalUrl);
  next();
});

app.get('/', (req, res, next) => {
  //res.send('WELCOME TO THE PAGE!');
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, (req, res, next) => {
  console.log('server listening');
});
