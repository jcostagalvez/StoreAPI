const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartProductSchema = new Schema({
    userId: String,
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
})

cartProductSchema.statics.addCartProduct = function(aCartProduct){
    return this.create(aCartProduct);
};

cartProductSchema.statics.findAllCartProducts = function (userId){
    return this.find({userId: {$in: userId}});
};


cartProductSchema.statics.deleteCartProduct = function (userId, productId){
    return this.deleteOne({userId: userId , productId: productId});
};

cartProductSchema.statics.deleteAllCartProduct = function (userId){
    return this.deleteMany({userId: {$in: userId}});
};

module.exports = mongoose.model("CartProduct", cartProductSchema, "CartProduct");