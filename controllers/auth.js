const {response} = require('express')
const bcrypt= require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../helpers/jwt');



const userGetById = async (req,res=response)=>{
 const {email} = req.body

 const userExists = await User.findOne({email})
 if(!userExists){
  return res.status(400).json({
    msg:'El Email no esta asociado en una cuenta en nuestra Base de Datos'
  })
}

res.json({
  msg:userExists
})
 
}
const userRegister =  async(req,res=response)=>{
  const {name,email,password,dni,cellphone} = req.body
  console.log(req.body)


  const salt = bcrypt.genSaltSync();
  const usuario = new User({name,email,password,dni,cellphone})
  usuario.password= bcrypt.hashSync(password, salt);

  await usuario.save()

 res.status(200).json({
     msg:'Success'
 })
}

const userLogin =  async ( req , res = response )=>{
 const {email,password} = req.body

 console.log(req.body)

 const userExists = await User.findOne({email})
 if(!userExists){
   return res.status(400).json({
     msg:'El Email no esta asociado en una cuenta en nuestra Base de Datos'
   })
 }
 const validPassword = bcrypt.compareSync(password,userExists.password)
 if(!validPassword){
   return res.status(400).json({
     msg:'Email y/o password incorrectos'
   })
 }
 const {name} = userExists;
 const userToken = await generateToken(email,password)


res.json({
  msg:'Success',
  userName : name,
  token:userToken
})
}



module.exports={
userRegister,
userLogin,
userGetById
}