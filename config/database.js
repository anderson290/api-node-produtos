//será responsável por toda configuração do banco de dados

//importando módulo do mongoose
const mongoose = require('mongoose');

//importando configs json
const config = require('config');

//biblioteca Promise
mongoose.Promise = require('bluebird');

//numero da porta a ser utilizada
/*
    Note que primeiro verificamos se já não existe uma variável de 
    ambiente com o número de porta definido. Em caso negativo, 
    utilizamos a porta 27017, padrão do MongoDB local.
*/
process.env.PORT = process.env.PORT || 27017;

//Como a porta está na variável process.env.PORT, e pode ser alterada, 
//iremos colocar a variável na string.

//utiliza o valor que vem do config
const uri = 'mongodb://anderson29:hunteronce29@ds119853.mlab.com:19853/programa_de_formacao'//config.get('database.mongoUrl');

//criar uma função para conectar com o banco de dados:

const connect = () => mongoose.connect(uri, {useNewUrlParser: true});
// talvez você precise declarar um parâmetro 'options', ficando assim a linha:
// const connect = () => mongoose.connect(uri, { useNewUrlParser: true });

//exportando o módulo de configuração do banco de dados:

module.exports = {
    connect
};