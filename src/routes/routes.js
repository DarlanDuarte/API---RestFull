const router = require('express').Router()

// VERBOS HTTP (4 TIPOS)
// GET - Obter dados
// POST - Enviar/Receber dados
// PUT - Atualizar dados
// DELETE - Remover Dados

const ProductsController = require('../controllers/products')

// id? = parametro opcional
router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)




module.exports = router