const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const product = require('../Controller/products');

const likeProductSchema = new Schema({
    userId: String,
    productsId:{
        type: Array
    },
})

likeProductSchema.statics.addLikeList = function(list){
    return this.save(list);
};

likeProductSchema.statics.findLikeList = function (Id){
    return this.findOne({__Id: Id});
};

likeProductSchema.statics.removelikeList = function (Id){
    return this.deleteOne({__Id: Id});
};

likeProductSchema.statics.addProductLikeList = function(Id, productId){
    return this.update({__Id: Id}, {$push: {productsId: productId}});
}

likeProductSchema.statics.removeProductlikeList = function (productId){
    return this.update({__Id: Id}, {$pull: {productsId: productId}});
};

//Crear el middleware que traiga toda la info de los productos para usarlo en la lista
likeProductSchema.pre('find', async  function(next) {
    const products = this.productsId.map(async id => await product.findProductByCode(id));
    this.products = await Promise.all(products);
    next();
})

module.exports = mongoose.model('likeProduct', likeProductSchema, 'likeProduct');