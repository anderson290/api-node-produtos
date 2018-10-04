//rotas de users
const Produto = require('../models/produtos');
const express = require('express');
const router = express.Router();

const ProdutosController = require('../controllers/products');
//instanciando a controller importada
const produtosController = new ProdutosController(Produto);

/* Como nosso arquivo é users.js, 
as rotas dentro dele serão referentes ao recurso users da api. 
Assim, internamente não precisamos 
repetir esse prefixo, deixaremos para o index 
carregar essa rota e dar o prefixo pra ela.*/

//chamando o controller de users com as configs necessárias
router.get('/', (req, res) => produtosController.get(req, res));
router.get('/:id', (req, res) => produtosController.getById(req, res));

//fazendo o post
router.post('/', (req, res) => produtosController.create(req,res));

//update
router.put('/:id', (req, res) => produtosController.update(req,res));

//delete
router.delete('/:id', (req, res) => produtosController.remove(req, res));

//exportando router
module.exports = router;