var express = require('express');
const mongoose = require('mongoose')
const app = express();
const productsRouter = require('./Routes/products');
const uri = "mongodb+srv://jesus:TUT9bMU0vkqycgTW@fuego23.nlssauj.mongodb.net/fuego23?retryWrites=true&w=majority";


mongoose.connect(uri);
var db = mongoose.connection;
const multer = require('multer');
const productsRouter = require('./Routes/products.js');
const cartProductsRouter = require('./Routes/cartProduct.js')
const likeProductRouter = require('./Routes/likeProduct.js')

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log('Connected sucesfully')
});
app.use(express.json());
app.use('/products', productsRouter);
app.use('/cart', cartProductsRouter);
app.use('/likes', likeProductRouter);

app.listen(5000);
module.exports = app;