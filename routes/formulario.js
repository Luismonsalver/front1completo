const express = require('express');
const router = express.Router();

const formularioController = require('../controllers/formularioController');

router.get('/',formularioController.list);
router.post('/add', formularioController.save)

module.exports = router;