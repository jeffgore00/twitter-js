const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use(express.static('public'));
app.use('/', routes);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

app.listen(3000, (req, res, next) => {
  console.log('server listening');
});