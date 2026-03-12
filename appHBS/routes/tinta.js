var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tinta', { title: 'Tintas de Cabelo' });
});

module.exports = router;