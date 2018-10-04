class productsController{
    constructor(Product) {
        this.Product = Product;
      };
      get(req, res) {
    
        return this.Product.find({})
          .then(produtos => res.send(produtos))
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
        return this.Product.find({
          _id: id
        })
          .then(produtos => res.send(produtos))
          .catch(err => res.status(400).send(err.message));
      }
    
      create(req, res) {
        const novoProduto = new this.Product(req.body);
    
        return novoProduto.save()
          .then(() => res.status(201).send(novoProduto))
          .catch(err => res.status(412).send(err.message));
      }
         
        update(req, res) {
            return this.productsController.findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).send(err.message));
        }
  
    
      // DELETE
      remove(req, res) {
        return this.Product.remove({
          _id: req.params.id
        })
          .then(() => res.sendStatus(204))
          .catch(err => res.status(400).send(err.message));
      }
    }
module.exports = productsController;