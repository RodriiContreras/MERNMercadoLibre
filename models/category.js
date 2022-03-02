const {Schema,model} = require('mongoose')

 


 const CategorySchema = Schema({
     category:{
         type:String
     }
 })


 module.exports = model('Category', CategorySchema)