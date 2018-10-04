//carregando rotas

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
//importando o database
const database = require('../config/database');
//o routes é passado como parâmetro para a 
//função use junto com o /. Significa que toda requisição vai ser administrada pelo routes.

//funcao terá a tarefa de configurar o express e retornar uma nova instância de aplicação configurada
let configureExpress = () => {
    app.use(bodyParser.json());
    app.use('/', routes);
    
    return app; // a linha 'module.exports = app' foi alterada para esta
};
//inicializando o banco
module.exports = () => database.connect().then(configureExpress);
