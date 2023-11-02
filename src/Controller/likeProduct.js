const likeProduct = require('../Model/likeProduct');
const product = require('../Model/products');

exports.post_likeList = async (req, res) => {
    const likeList = req.body;
    likeProduct.addLikeList(likeList)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
};

exports.get_likeList = async (req, res) => {
    likeProduct.findLikeList(req.params.Id)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.delete_likeList = async (req, res) => {
    likeProduct.removelikeList(req.params.Id)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.post_ProductLikeList = async (req, res) => {
    console.log(req.body.productsId);
    product.findProductByCode(req.body.productsId)
    .then(data => {
        console.log('data.id:  ' + data.id);
        likeProduct.addProductLikeList(req.params.Id, data.id)
        .then(data => res.status(200).json({data}))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
    })
    .catch(err => res.status(500).json(err))
}

exports.delete_ProductLikeList = async (req, res) => {    
    product.findProductByCode(req.body.productsId)
    .then(data => {
        console.log(data);
        likeProduct.removeProductlikeList(req.params.Id, data.id)
        .then(data => res.status(200).json({data}))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
    })
    .catch(err => res.status(500).json(err))
}