//rotas de users
const User = require('../models/users');
const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');
//instanciando a controller importada
const usersController = new UsersController(User);

/* Como nosso arquivo é users.js, 
as rotas dentro dele serão referentes ao recurso users da api. 
Assim, internamente não precisamos 
repetir esse prefixo, deixaremos para o index 
carregar essa rota e dar o prefixo pra ela.*/

//chamando o controller de users com as configs necessárias
router.get('/', (req, res) => usersController.get(req, res));
router.get('/:id', (req, res) => usersController.getById(req, res));

//fazendo o post
router.post('/', (req, res) => usersController.create(req,res));

//update
router.put('/:id', (req, res) => usersController.update(req,res));

//delete
router.delete('/:id', (req, res) => usersController.remove(req, res));

//exportando router
module.exports = router;