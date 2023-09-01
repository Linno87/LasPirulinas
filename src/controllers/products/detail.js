const { leerJson } = require("../../data");


module.exports= (req,res) =>{
    const productos = leerJson('products.json');
    const id = req.param.id;
    const producto = productos.find((produc)=>produc.id === id);
    return res.send(producto);
    return res.render('productDetail', {
        ...producto});
}