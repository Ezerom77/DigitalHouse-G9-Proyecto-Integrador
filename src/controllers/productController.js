const path = require("path")

let productController = {
  list: (req, res) => {
    res.render('productDetail');
  },
  comments: (req, res) => {
    let idProduct = req.params.id;
    res.send("bienvenido al detalle del producto " + req.params.id);
  },
  commentsDetails: (req, res) => {
    if (req.params.idComentario == undefined) {
      res.send("bienvenido al detalle del producto " + req.params.id);
    } else {
      res.send(
        "bienvenido al detalle del producto " +
          req.params.id +
          " enfocado en el detalle " +
          req.params.idComentario
      );
    }
  },
  add: (req, res) => {
    res.render('productCreate');
  },
  delete: function () {},
  edit: (req, res) => {
    res.render('productEdit')}
};

module.exports = productController;
