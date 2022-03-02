const jwt = require('jsonwebtoken')


const generateToken = (email = '' , password ='') =>{
return new Promise((resolve,reject) =>{
const payload = {email,password}
jwt.sign(payload,process.env.SECRETO,{
    expiresIn:'24h'
},(err,token)=>{
    if(err){
        console.log(err)
        reject('Error en Token')
    }
    else{
        resolve(token)
    }
})
})
}



module.exports={generateToken}
