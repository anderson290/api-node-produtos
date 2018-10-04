//será o controller para o recurso de users da API

//O método get deve receber os objetos de requisição e resposta e enviar um array com um
// user estático como resposta - estamos fazendo isso apenas para garantir que vamos retornar algo.
class UsersController {
  /*O construtor irá garantir que toda a vez 
  que alguém tentar criar uma instância do controller 
  ele deve passar o model User por parâmetro*/
  constructor(User) {
    this.User = User;
  };
  get(req, res) {

    return this.User.find({})
      .then(users => res.send(users))
      .catch(err => res.status(400).send(err.message));
  }
  //metodo requisita o id
  getById(req, res) {
    const {
      params: {
        id
      }
    } = req;
    //retorna um find
    return this.User.find({
      _id: id
    })
      .then(users => res.send(users))
      .catch(err => res.status(400).send(err.message));
  }

  create(req, res) {
    const user = new this.User(req.body);

    return user.save()
      .then(() => res.status(201).send(user))
      .catch(err => res.status(412).send(err.message));
  }


  update(req, res) {
    const body = req.body;  
    return this.User.findById(req.params.id)
      .then(user=>{
        user.name = body.name
        user.email = body.email
        user.role = body.role
          if(body.password){
              user.password = body.password
          }
          return user.save();
      })
      .then(() => res.sendStatus(200))
      .catch(err => res.status(422).send(err.message)); 
      
  }

  // DELETE
  remove(req, res) {
    return this.User.remove({
      _id: req.params.id
    })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }

}
module.exports = UsersController;