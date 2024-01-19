const {validationResult} = require('express-validator');
const { leerJson } = require("../../data");


module.exports = (req,res) =>{
    
    const errors = validationResult(req)

    if(errors.isEmpty()){
        const users = leerJson('users.json');
        const {email, remember }= req.body;

        const user = users.find(user=>user.email===email);
        const {id, name, rol, record} = user;
        req.session.userData = {
            id,
            name,
            rol,
            record
        }
        return res.redirect('/');
        
    }else{
        return res.render('login', {
            errors: errors.mapped()
            })
    }
}