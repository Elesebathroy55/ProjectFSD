const express = require('express');
const ProductsData = require('./src/model/Productdata');
const cors = require('cors');

const bodyparser = require('body-parser');


var app = new express();
app.use(cors());
app.use(bodyparser.json())


app.get('/products',function(req,res){
   res.header("Access-Control-Allow-Origin","*")
   res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
   ProductsData.find()
      .then(function(product){
         res.send(product);
      });
});


app.post('/insert',function(req,res){
   res.header("Access-Control-Allow-Origin","*")
   res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
   console.log(req.body);
   var product = {
      
      productName : req.body.product.productName,
      Category : req.body.product.Category,
      Quantity : req.body.product.Quantity,
      Price : req.body.product.Price,
      Address : req.body.product.Address,
      Phoneno : req.body.product.Phoneno

   }

   var product = new ProductsData(product);
   product.save();

});
app.delete('/remove/:id',(req,res)=>{
   
   id = req.params.id;
   ProductData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })
app.listen(3000, function(){
console.log("listening tp port 3000");

});