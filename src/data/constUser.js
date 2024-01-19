const {v4 : uuidv4} = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, apellido, email, nacimiento, password, image, address, phone, description}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.apellido = apellido.trim();
    this.email = email.trim();
    this.nacimiento = nacimiento;
    this.password = hashSync(password.trim(),10);
    this.rol = "user";
    this.image = image?image:null;
    this.record = null;
    this.address = address? adress :null;
    this.phone = phone? phone: null;
    this.description= description? description : "Acerca de mi...";
}

module.exports = User