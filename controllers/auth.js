const {response} = require('express')
const bcrypt= require('bcryptjs');
const User = require('../models/user');



const userRegister =  async(req,res=response)=>{
  const {name,lastname, email,password,dni,cellphone} = req.body
 
  const salt = bcrypt.genSaltSync();
  const usuario = new User({name,lastname,email,password,dni,cellphone})
  usuario.password= bcrypt.hashSync(password, salt);

 await usuario.save()

 res.status(200).json({
     msg:'bien'
 })
}



const userLogin = ()=>{

}



module.exports={
userRegister,
userLogin
}