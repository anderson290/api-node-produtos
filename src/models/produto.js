
import mongoose from 'mongoose';
//import para criptografia de senha


/*No Model, além de criar o schema também sobrescrevemos o 
método toJSON que é responsável por transformar os dados
 que vem do MongoDB para o formato json;*/
const schema = new mongoose.Schema({
  nome: String,
  validade: String,
  tipo: String,
  role: String
});

schema.set('toJSON', {
  transform: (doc, ret, options) => ({
    _id: ret._id,
    nome: ret.nome,
    validade: ret.validade,
    tipo: ret.tipo,
    role: ret.role
  })
});


module.exports = mongoose.model("Produto", schema);