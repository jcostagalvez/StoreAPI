const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const product = require('../Model/products');

const likeProductSchema = new Schema({
    userId: String,
    productsId:{
        type: Array
    },
})

likeProductSchema.statics.addLikeList = function(list){
    
    return this.create(list);
};

likeProductSchema.statics.findLikeList = function (userId){
    return this.findOne({userId: userId});
};

likeProductSchema.statics.removelikeList = function (userId){
    return this.deleteOne({userId: userId});
};

likeProductSchema.statics.addProductLikeList = function(userId, productId){
    return this.findOneAndUpdate({userId: userId}, {$push: {productsId: productId}});
}

likeProductSchema.statics.removeProductlikeList = function (userId, productId){
    return this.findOneAndUpdate({userId: userId}, {$pull: {productsId : {id : productId}}});
};

//Crear el middleware que traiga toda la info de los productos para usarlo en la lista
likeProductSchema.pre('save', async  function(next) {
    console.log(this.productsId);
    const products = this.productsId.map(async (id) => await product.findProductByCode(id));
    this.productsId = await Promise.all(products);
    next();
})

module.exports = mongoose.model('likeProduct', likeProductSchema, 'likeProduct');