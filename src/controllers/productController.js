const db = require("../../models");
const fs = require("fs");
const path = require("path");

// Controllers
const productController = {
  list: (req, res) => {
    db.Products.findAll({
      include: [{ association: "color" }, { association: "talle" }],
    }).then(function (products) {
      res.render("productList", {
        title: "Todos los productos",
        products: products,
      });
    });
  },
  add: (req, res) => {
    db.Colores.findAll().then(function (colores) {
      db.Talles.findAll().then(function (talles) {
        db.Categorias.findAll().then(function (categorias) {
          res.render("productCreate", {
            title: "Crear Producto Nuevo",
            colores: colores,
            talles: talles,
            categorias: categorias,
          });
        });
      });
    });
  },
  store: async (req, res) => {
    let nombreImagen = req.file.filename;
    console.log(req.categorias);

    let productoNuevo = {
      nombre: req.body.productName,
      descripcion: req.body.productDescription,
      // id_categories: req.body.categorias,
      precio: req.body.productPrice,
      id_color: req.body.color,
      id_talle: req.body.talle,
      imagen: nombreImagen,
    };

    await db.Products.create(productoNuevo);
    res.redirect("/products");
  },
  detail: (req, res) => {
    db.Products.findByPk(req.params.id, {
      include: [{ association: "color" }, { association: "talle" }],
    }).then(function (producto) {
      res.render("productDetail", {
        title: "Detalle de producto",
        productDetail: producto,
      });
    });
  },

  edit: (req, res) => {
    let pedidoProducto = db.Products.findByPk(req.params.id);
    let pedidoTalles = db.Talles.findAll();
    let pedidoColores = db.Colores.findAll();

    Promise.all([pedidoProducto, pedidoTalles, pedidoColores]).then(function ([
      ProductoaEditar,
      talles,
      colores,
    ]) {
      res.render("productEdit", {
        title: "Editar Producto",
        ProductoaEditar: ProductoaEditar,
        talles: talles,
        colores: colores,
      });
    });
  },
  update: (req, res) => {
    // let nombreImagen = req.file.filename;

    let productoNuevo = {
      nombre: req.body.productName,
      descripcion: req.body.productDescription,
      // id_categories: req.body.categorias,
      precio: req.body.productPrice,
      id_color: req.body.color,
      id_talle: req.body.talle,
      // imagen: nombreImagen,
    };
    db.Products.update(productoNuevo, { where: { id: req.params.id } });
    res.redirect("/products/detail/" + req.params.id);
  },
  delete: (req, res) => {
    db.Products.findByPk(req.params.id)
      .then(function (producto) {
        fs.unlinkSync(
          path.join(__dirname, "../../public/images/products/", producto.imagen)
        );
      })
      .then(
        db.Products.destroy({
          where: { id: req.params.id },
        })
      );
    res.redirect("/products");
  },
};
module.exports = productController;
