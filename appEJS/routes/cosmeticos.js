var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cosmeticos', { title: 'Cosméticos' });
});

router.get('/hidratantes', function(req, res, next) {
  res.render('hidratantes', { title: 'Hidratantes' });
});

router.get('/perfumes', function(req, res, next) {
  res.render('perfumes', { title: 'Perfumes' });
});

module.exports = router;