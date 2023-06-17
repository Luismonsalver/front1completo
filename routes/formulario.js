const express = require('express');
const router = express.Router();

const formularioController = require('../controllers/formularioController');

router.get('/',formularioController.list);
router.post('/', formularioController.save)

module.exports = router;