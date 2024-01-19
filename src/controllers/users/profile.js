const { leerJson } = require("../../data");

module.exports=(req,res)=>{
    const users=leerJson('users.json')
    const user = users.find(user=>user.id===req.session.userData.id)

    return res.render('profile',{
        ...user
    });
}