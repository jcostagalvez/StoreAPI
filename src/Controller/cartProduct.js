const cartProduct = require('../Model/cartProduct');
const mongoose = require("mongoose");

exports.get_allProductsCart = async (req, res) => {
    cartProduct.findAllCartProducts(req.params.userId)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
};

exports.post_productCart = async (req, res) => {
    const prd = req.body;
    cartProduct.addCartProduct(prd)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.delete_productCart = async (req, res) => {
    const id = new mongoose.mongo.ObjectId(req.body.id);
    console.log('_productId --->  ' + id);
    cartProduct.deleteCartProduct(req.params.userId, id)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.delete_allProductCart = async (req, res) => {
    console.log(req.params.userId);
    cartProduct.deleteAllCartProduct(req.params.userId)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}