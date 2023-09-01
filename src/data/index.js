const {writeFileSync, readFileSync} = require('fs');
const path = require('path');

module.exports ={
    leerJson : (json) =>{
        return JSON.parse(readFileSync(path.join(__dirname, json)));
    },
    escribirJson : (list, name) =>{
        writeFileSync(path.join(__dirname,name),JSON.stringify(list, null, 2),"utf-8");
    }
}