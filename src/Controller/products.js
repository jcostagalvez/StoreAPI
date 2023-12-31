const product = require('../Model/products');

exports.get_allproduct = async (req, res) => {
    product.allProducts()
        .then(data => res.status(200).json({data}))
        .catch(err => res.status(500).json(err));
};

exports.post_product = async (req, res) => {
    const prd = req.body;
    console.log(req.body);
    product.add(prd)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.get_product = async (req, res) => {
    product.findProductByCode(req.params.Id)
    .then(data => res.status(200).json({data}))
    .catch(err => res.status(500).json(err));
}

exports.post_photo = async (req, res) => {
    if(req.file){
        const url = req.url.split('/');
        const sizeUrl = url.length;
        req.img = req.file.buffer;
        product.uploadImg(url[sizeUrl-1], `data:image/png;base64,${req.img.toString("base64")}`)
       .then((data) => {
        res.status(200).json({data})})
       .catch(err => res.status(500).json(err));
    }else{
        res.status(500).json('No ha cargado un archivo')
    }
}