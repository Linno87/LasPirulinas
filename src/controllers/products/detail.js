const { leerJson } = require("../../data");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res) =>{
    const productos = leerJson('products.json');
    const id = req.params.id;
    
    const producto = productos.find((produc)=>produc.id === id);
    
    return res.render('productDetail', {
        ...producto,
        toThousand
    });
    
}