var express = require('express');
var router = express.Router();

const produtos = [
  {id: 1, nome: 'Unha Postiça', preco: 100.00},
  {id: 2, nome: 'Unha de Gel', preco: 150.00},
  {id: 3, nome: 'Unha de Acrílico', preco: 120.00},
  {id: 4, nome: 'Unha de Diamante', preco: 190.00},
  {id: 5, nome: 'Unha de Vibranium', preco: 190.00}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('produtos/index', {produtos});
});

module.exports = router;
