var express = require('express');
var router = express.Router();
const Cliente = require('../models/Cliente')

/* GET home page. */
router.get('/', function(req, res, next) {
  var nome = req.query.nome
  var cpf = req.query.cpf
  let cliente = new Cliente(1, nome, cpf);
 
  res.render('index', { valido: cliente.validarCPF() });
});

module.exports = router;
