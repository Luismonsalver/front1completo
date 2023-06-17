const express = require('express');
const router = express.Router();

const formularioController = require('../controllers/formularioController');

//Rutas para obtener la página y guardar datos
router.get('/',formularioController.listar);
router.post('/', formularioController.guardar)

module.exports = router;