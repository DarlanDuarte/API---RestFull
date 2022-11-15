const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    // ?id=123 se pega no query/ req.query
    // se fosse no body seria no post/ req.body
    
    let obj = id ? {_id: id } : null
    
    /*if(id){
        obj._id = id
    } */



    const products = await ProductsModel.find(obj)
    
    res.send(products)
}


module.exports = {
    get,
}