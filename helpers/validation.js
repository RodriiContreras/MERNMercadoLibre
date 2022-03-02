const User = require("../models/user")

const emailExists = async (email = '')=>{ // validation where we find input email in our mongo DB

    const userEmailExists = await User.findOne({email})

    if(userEmailExists){
       throw new Error('El Email ya existe')
    }
}

const loginEmailNoExists = async (email = '')=>{ //validation for email

    const userEmailExists = await User.findOne({email})

    if(!userEmailExists){
       throw new Error('El Email no existe')
    }
}

const dniExists = async (dni = '') =>{
    const userDniExists = await User.findOne({dni})

    if(userDniExists){
        throw new Error('El dni ya existe')
    }
}

const cellphoneExists = async (cellphone = '') =>{
    const userCellphoneExists = await User.findOne({cellphone})

    if(userCellphoneExists){
        throw new Error('El telefono ya existe')
    }
}



module.exports={
    emailExists,
    dniExists,
    cellphoneExists,
    loginEmailNoExists
}