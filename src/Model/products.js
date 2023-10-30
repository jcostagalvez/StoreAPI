const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    name:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    img:{
        type: String
    },
    averageRating:{
        type: String
    },
    sizes:{
        type: Array,
        require: true
    },
})

productSchema.statics.add = function(aproduct, cb){
    return this.create(aproduct);
};

productSchema.statics.allProducts = function(){
    return  this.find({})
}

productSchema.statics.findProductByCode = function (id){
    return this.findOne({id:id});
};

productSchema.statics.uploadImg = function(id, img){
    return this.findOneAndUpdate({id:id}, {img:img})
}

module.exports = mongoose.model("Product", productSchema, "Product");