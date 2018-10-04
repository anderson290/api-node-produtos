//importando o mongoose
const mongoose = require('mongoose');

//Cada Schema representa uma collection do MongoDB.
const Schema = mongoose.Schema;


const produtoSchema = new Schema({
    nome: {
      type: String
    },
    validade: {
      type: String
    },
    tipo: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: true
    }
  });
//exportando para ser usado na aplicação

  module.exports = mongoose.model('produto', produtoSchema, 'produtos');