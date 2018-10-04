//chamando rotas para aplicação

const express = require('express');
const usersRoute = require('./users');
const produtoRota = require('./products');
const router = express.Router();

//chamando users
router.use('/users', usersRoute);

//chamando produtos
router.use('/produtos', produtoRota);

//rota padrão
router.get('/', (req, res) => res.send('Hello World!'));

//exportando rota
module.exports = router;
