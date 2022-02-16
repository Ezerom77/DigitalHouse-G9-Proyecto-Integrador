const express = require("express");
const router  = express.Router();
const mainController = require('../controllers/mainController');

const path = require("path");

router.get('/', mainController.index);
router.get('/carrito', mainController.carrito);
router.get('/perfil',mainController.perfil)
router.get("/login", mainController.login);
router.get("/registro", mainController.registro);

module.exports = router;
