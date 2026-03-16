var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tinta', { title: 'Tintas de Cabelo' });
});

router.get('/matizador', function(req, res, next) {
  res.render('matizador', { title: 'Matizador' });
});

router.get('/descolorante', function(req, res, next) {
  res.render('descolorante', { title: 'Descolorante' });
});

module.exports = router;