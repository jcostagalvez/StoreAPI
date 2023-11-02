const express = require('express');
const cartProductController = require('../Controller/cartProduct');
const router = express.Router();

router.get('/allProducts/:userId', cartProductController.get_allProductsCart);
router.post('/product', cartProductController.post_productCart);
router.delete('/product/:userId', cartProductController.delete_productCart);
router.delete('/allProducts/:userId',cartProductController.delete_allProductCart);
module.exports = router;