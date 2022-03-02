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
   category:{
       type:String,
       required:true,
       enum:['cellphone','car','indumentary']
   }
})

module.exports = model('Product',ProductSchema)