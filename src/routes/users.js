var express = require('express');
const { login } = require('../controllers/usersControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', login);

module.exports = router;
