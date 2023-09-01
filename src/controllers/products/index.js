const { leerJson } = require("../../data");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) => {
        const listaProductos = leerJson('products.json');
        res.render('productos', {
            listaProductos,
            toThousand
        });
}