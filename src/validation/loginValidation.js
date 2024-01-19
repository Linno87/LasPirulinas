const { leerJson } = require("../data")
const { check, body} = require('express-validator');
const {compareSync} = require('bcryptjs'); 
module.exports = [
    check('email')
        .notEmpty().withMessage("El campo no debe estar vacío").bail()
        .isEmail().withMessage("Debe ingresar un correo electrónico").bail()
        .custom((value) =>{
            const users = leerJson("users.json")
            const user = users.find(user=>user.email === value)
            if(user){
                return true
            }
            return false
        }).withMessage("Los datos ingresados son erroneos"),
    
    check('password')
        .notEmpty().withMessage("El campo no debe estar vacío").bail()
        .isLength({min: 6, max: 12}).withMessage("La contraseña debe contener de 6 a 12 digitos").bail()
        .custom((value, {req})=>{
            const users = leerJson('users.json')
            const user = users.find(user=>user.email === req.body.email)
            if(user){
                if(compareSync(value,user.password)){
                    return true
                }
            }
            return false
           
        }).withMessage("Los datos ingresados son erroneos"),
]