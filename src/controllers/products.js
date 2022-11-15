const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    // ?id=123 se pega no query/ req.query
    // se fosse no post seria no body / req.body
    
    let obj = id ? {_id: id } : null
    
    /*if(id){
        obj._id = id
    } */



    const products = await ProductsModel.find(obj)
    
    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price, 
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message:'sucess'
    })



} 


async function put(req, res){
    const { id } = req.params


    const product = await ProductsModel.findOneAndUpdate({ _id: id}, req.body, {new:true})

    res.send({
        menssagem: 'success',
        product,
    })


    /* const product = await ProductsModel.findOne({ _id : id})

    await product.updateOne(req.body)
    
    res.send({
        menssagem: 'success',
        product,
    }) */
}

module.exports = {
    get,
    post,
    put, 
} 