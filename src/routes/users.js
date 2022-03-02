// requires
var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
// const multer = require ('multer');



// Routes
router.get('/', userController.usuarios);
router.get('/login',userController.login);
router.post('/login', userController.logged);
router.get('/registro',userController.registro);
router.post('/registro',userController.registered);
router.get('/carrito', userController.carrito);


// Module export
module.exports = router;
