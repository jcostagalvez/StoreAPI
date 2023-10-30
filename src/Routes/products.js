const express = require('express');
const productsController = require('../Controller/products');
const upload = require('../middelware/multer/multer')
const router = express.Router();

router.get('/allProducts', productsController.get_allproduct);
router.get('/getProduct/:Id', productsController.get_product);
router.post('/addProduct', productsController.post_product);
router.put('/addPhoto/:Id', upload.single('img') ,productsController.post_photo)
module.exports = router;