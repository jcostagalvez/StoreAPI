const likeProduct = require('../Model/likeProduct');

exports.post_likeList = async (req, res) => {
    const likeList = req.body;
    likeProduct.addLikeList(likeList)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
};

exports.get_likeList = async (req, res) => {
    likeProduct.findLikeList(req.query.Id)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.delete_likeList = async (req, res) => {
    likeProduct.removelikeList(req.query.Id)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.post_ProductLikeList = async (req, res) => {
    likeProduct.addProductLikeList(req.query.Id, req.body.productId)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.delete_ProductLikeList = async (req, res) => {
    likeProduct.removeProductlikeList(req.query.Id, req.body.productId)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}