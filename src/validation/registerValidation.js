const { check, body} = require('express-validator');
const { leerJson } = require('../data');




module.exports = [
    check("name")
        .notEmpty().withMessage("El campo no debe estar vacío").bail()
        .isLength({min: 3, max:16}).withMessage("Debe tener 3 letras como minimo").bail()
        .isAlpha('es-ES').withMessage("Solo se permiten caracteres alfabéticos"),
    check("apellido")
        .notEmpty().withMessage("El campo no debe estar vacío").bail()
        .isLength({min: 3, max:16}).withMessage("Debe tener 3 letras como minimo").bail()
        .isAlpha('es-ES').withMessage("Solo se permiten caracteres alfabéticos"),
    check('email')
        .notEmpty().withMessage("El campo no debe estar vacío").bail()
        .isEmail().withMessage("Debe ingresar un correo electrónico").bail()
        .custom((value) =>{
            const users = leerJson("users.json")
            const user = users.find(user=>user.email === value)
            if(user){
                return false
            }
            return true
        }).withMessage("El correo ya esta asociado a una cuenta"),
    
    check('password')
        .notEmpty().withMessage("El campo no debe estar vacío").bail()
        .isLength({min: 6, max: 12}).withMessage("La contraseña debe contener de 6 a 12 digitos").bail(),
    check('password2')
    .notEmpty().withMessage("El campo no debe estar vacío").bail()
    .isLength({min: 6, max: 12}).withMessage("La contraseña debe contener de 6 a 12 digitos").bail()
    .custom((value, {req})=>{
        if(value === req.body.password){
            return true
        }
        return false
    }).withMessage("Las contraseñas no coinciden"),
]
    
        
