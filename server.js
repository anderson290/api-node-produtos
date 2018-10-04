/*
const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
app.use(bodyParser.json());
 

//utilizando middlewares em rotas específicas (/users)
app.use((req, res, next) => {
  console.log('essa mensagem será executada antes de qualquer rota');
  next(new Error('Falha!')); //exibo na tela
});
 
app.use((err, req, res, next) => {
  console.log('algo errado aconteceu'); //exibo no console
  res.status(500).send(err.message);
});

 
//rota principal
app.get('/', function (req, res) {
  console.log('rota / chamada');
  res.send('Hello World!');
});

//rota users
app.get('/users', function (req, res, next) {
  console.log('rota /users chamada');
  res.send('Hello World!');
});
 
app.listen(3000, () => {
  console.log('App de exemplo executando na porta 3000!');
});

 */
process.env.PORT = process.env.PORT || 3000;
const setupApp = require('./src/app');
const port = process.env.PORT;

setupApp()
  .then(app => app.listen(port, () => console.log(`App rodando na porta x port ${port}`)))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
