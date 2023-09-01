const { leerJson } = require("../../data");


module.exports = (req,res) =>{
    const productos = leerJson('products.json');
    const id = req.params.id;
    const producto = productos.find((produc)=>produc.id === id);
    
    return res.render('productDetail', {
        ...producto
    });
    
}