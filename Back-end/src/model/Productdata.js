const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;


var NewProductSchema = new Schema({

    
    productName : String,
    Category : String,
    Quantity : Number,
     
    Price : Number,
    Address :  String,
    Phoneno : Number,
});

var Productsdata = mongoose.model('products', NewProductSchema);


module.exports = Productsdata;