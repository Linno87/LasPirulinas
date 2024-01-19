var express = require('express');
const { login , successLogin, register ,successRegister, profile ,logout } = require('../controllers/userController');
var router = express.Router();

const registroValidaciones = require('../validation/registerValidation');
const loginValidation = require('../validation/loginValidation')
const localCheck = require('../middleware/localCheck');

/* GET users listing. */
router.get('/login', login)
      .post("/login",loginValidation,successLogin)
      .get("/registerUser", register)
      .post("/registerUser", registroValidaciones, localCheck ,successRegister)
      .get('/profile', profile)
      .get('/logout', logout)
module.exports = router;
