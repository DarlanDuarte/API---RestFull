const router = require('express').Router()

// VERBOS HTTP (4 TIPOS)
// GET - Obter dados
// POST - Enviar/Receber dados
// PUT - Atualizar dados
// DELETE - Remover Dados

const ProductsController = require('../controllers/products')

router.get('/products', ProductsController.get)
//router.post('/products', ProductsController.post)
//router.put('/products', ProductsController.put)
//router.delete('/products', ProductsController.delete)




router.get('/clientes', (req, res) => {
    res.send({
        ok: 123
    })
})

module.exports = router