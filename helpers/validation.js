const User = require("../models/user")

const emailExists = async (email = '')=>{ // validation where we find input email in our mongo DB

    const userEmailExists = await User.findOne({email})

    if(userEmailExists){
       throw new Error('Email already exists')
    }
}

const loginEmailNoExists = async (email = '')=>{ //validation for email

    const userEmailExists = await User.findOne({email})

    if(!userEmailExists){
       throw new Error('Email no exists')
    }
}

const dniExists = async (dni = '') =>{
    const userDniExists = await User.findOne({dni})

    if(userDniExists){
        throw new Error('Dni already exists')
    }
}

const cellphoneExists = async (cellphone = '') =>{
    const userCellphoneExists = await User.findOne({cellphone})

    if(userCellphoneExists){
        throw new Error('Cellphone already exists')
    }
}



module.exports={
    emailExists,
    dniExists,
    cellphoneExists,
    loginEmailNoExists
}