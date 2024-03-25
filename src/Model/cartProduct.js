const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartProductSchema = new Schema({
    userId: String,
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    size: {
        type: String
    }
})

cartProductSchema.statics.addCartProduct = function(aCartProduct){
    return this.create(aCartProduct);
};

cartProductSchema.statics.findAllCartProducts = function (userId){
    return this.find({userId: {$in: userId}});
};


cartProductSchema.statics.deleteCartProduct = function (userId, id){ 
    return this.deleteOne({userId: userId , _id: id});
};

cartProductSchema.statics.deleteAllCartProduct = function (userId){
    return this.deleteMany({userId: {$in: userId}});
};

module.exports = mongoose.model("CartProduct", cartProductSchema, "CartProduct");