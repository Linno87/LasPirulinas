var express = require('express');

const {products, detail} = require('../controllers/productController');
var router = express.Router();

/* /products */
router.get('/', products);
router.get('/detail/:id', detail)

module.exports = router;