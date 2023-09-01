var express = require('express');
const { login , successLogin, register ,successRegister } = require('../controllers/userController');
var router = express.Router();

const registroValidaciones = require('../validation/registerValidation');
const localCheck = require('../middleware/localCheck');

/* GET users listing. */
router.get('/login', login)
      .post("/login",successLogin)
      .get("/registerUser", register)
      .post("/registerUser", registroValidaciones, localCheck ,successRegister)


module.exports = router;
