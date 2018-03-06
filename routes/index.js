const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  let luckyNumbers = [13,69,88];
  res.render( 'index', { tweets: tweets, nums: luckyNumbers } );
});

module.exports = router;