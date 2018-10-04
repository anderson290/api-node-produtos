
import mongoose from 'mongoose';
//import para criptografia de senha
import Util from 'util';
import bcrypt from 'bcrypt';

const hashAsync = Util.promisify(bcrypt.hash);
/*No Model, além de criar o schema também sobrescrevemos o 
método toJSON que é responsável por transformar os dados
 que vem do MongoDB para o formato json;*/
const schema = new mongoose.Schema({
 // name: String,
  email: String,
  //password: String,
  role: String
});

schema.set('toJSON', {
  transform: (doc, ret, options) => ({
    _id: ret._id,
    email: ret.email,
    name: ret.name,
    //password: ret.password,
    role: ret.role
  })
});


schema.pre('save', function(next) {
  if(!this.password || !this.isModified('password')) {
    return next();
};
/*A função hashAsync é a função do Bcrypt que transformamos em Promise, 
  ela será responsável por criar um hash a partir da senha que o usuário enviou. */

hashAsync(this.password, 10)
  .then(hashedPassword => {
    this.password = hashedPassword;
    next();
  })
  .catch(err => next(err));
});

module.exports = mongoose.model('user', schema, 'users');