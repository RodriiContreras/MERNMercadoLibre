const {Schema,model} = require('mongoose')

const UserSchema = Schema({
   name:{
       type:String,
   },
   lastname:{
     type:String,
   },
   password:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   dni:{
       type:Number,
       required:true,
       unique:true
   },
   cellphone:{
       type:Number,
       required:true,
       unique:true
   }
})

module.exports = model('User',UserSchema)