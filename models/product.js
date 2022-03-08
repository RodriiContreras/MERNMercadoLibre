const {Schema,model} = require('mongoose')

const ProductSchema = Schema({
   name:{
       type:String,
       required:true,
   },
   price:{
       type:Number,
       required:true,
   },
   stock:{
       type:Number,
       required:true,
   },
   img:{
       type:String
   },
   user:{
       type:Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
   description:{
       type:String,
       required:true
   },
   brand:{
       type:String,
   },
   category:{
       type:String,
       required:true,
       enum:['technology','cars','indumentary','supermarket']
   },
   subCategory:{
    type:String,
    required:true,
    enum:['Pets','Food and Drink','Babys','Health and healthy equipment','Marolio','Arcor','Serenisima','Nestle','Car','Motorbike','Bike','T-Shirt','Shoes','Jacket','Jeans','','Sony','Lenovo','Asus','Hp']
   }
})

module.exports = model('Product',ProductSchema)