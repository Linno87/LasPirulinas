const {validationResult} = require('express-validator');
const User = require('../../data/constUser')
const {leerJson, escribirJson} = require('../../data');


module.exports = (req,res) =>{
    const errors = validationResult(req)
    
    if(errors.isEmpty()){
        const users=leerJson('users.json')
       
        const user = new User(req.body)
        
        users.push(user)
        escribirJson(users,"users.json")
        return res.redirect('login');
        
    }else{
        return res.render('registerUser', {
            old: req.body,
            errors: errors.mapped()
            })
    }
}