//importando o mongoose
const mongoose = require('mongoose');

//Cada Schema representa uma collection do MongoDB.
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: true
    }
  });
//restringir exibição
  userSchema.set('toJSON', {
    transform: (doc, ret, options) => ({
      _id: ret._id,
      email: ret.email,
      name: ret.name,
      password: ret.password,
      role: ret.role
    })
  });
//exportando para ser usado na aplicação

  module.exports = mongoose.model('user', userSchema, 'users');