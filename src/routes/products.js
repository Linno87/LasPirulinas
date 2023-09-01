var express = require('express');

const {products} = require('../controllers/productController');
var router = express.Router();

router.get('/', products);

module.exports = router;