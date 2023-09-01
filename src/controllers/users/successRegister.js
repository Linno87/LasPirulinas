const {validationResult} = require('express-validator');
const User = require('../../data/constUser')
const {leerJson, escribirJson} = require('../../data');


module.exports = (req,res) =>{
    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        const {name, apellido, color , email} = req.body;
        req.session.userData = {
            name,
            apellido,
            color,
            email
        }
        
        return res.redirect('/');
        
    }else{
        return res.render('registerUser', {
            old: req.body,
            errors: errors.mapped()
            })
    }
}