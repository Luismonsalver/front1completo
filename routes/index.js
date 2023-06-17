const express = require('express');
const router = express.Router();

// Obtener página de inicio
router.get('/', function(req, res, next) {
  res.render('index',);
});
module.exports = router;