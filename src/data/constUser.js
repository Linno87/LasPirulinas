const {v4 : uuidv4} = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, apellido, email, nacimiento, color, password}) {
    this.id = uuidv4();
    this.name = name.trim();
    this.apellido = apellido.trim();
    this.email = email.trim();
    this.nacimiento = nacimiento;
    this.color = color;
    this.password = hashSync(password.trim(),10);
    this.rol = "user";
    this.record = null;
}

module.exports = User