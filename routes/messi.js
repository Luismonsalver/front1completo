const express = require('express');
const router = express.Router();

// Obtener página de noticia
router.get('/', function(req, res, next) {
  res.render('messi',);
});
module.exports = router;