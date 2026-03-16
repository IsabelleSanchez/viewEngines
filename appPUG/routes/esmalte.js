var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('esmalte', { title: 'Esmaltes' });
});

router.get('/lixa', function(req, res, next) {
  res.render('lixa', { title: 'Lixas' });
});

router.get('/acetona', function(req, res, next) {
  res.render('acetona', { title: 'Acetonas' });
});

module.exports = router;