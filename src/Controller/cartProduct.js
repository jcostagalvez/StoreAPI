const cartProduct = require('../Model/cartProduct');

exports.get_allProductsCart = async (req, res) => {
    cartProduct.findCartProducts(req.params.userId)
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
    cartProduct.deleteCartProduct(req.params.userId, req.body.productId)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.delete_allProductCart = async (req, res) => {
    cartProduct.deleteAllCartProduct(req.params.userId)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}