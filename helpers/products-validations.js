const Category = require("../models/category")
const User = require('../models/user')

 
const categoryExistsValidation = async ( category = '') => {
  
    const categoryExists = await Category.findOne({category})

        if(!categoryExists){
            throw new Error('La categoria no existe')
        }
}

const userExistsValidation  = async (user = '')=>{
    const userExists = await User.findById(user)

    if(!userExists){
        throw new Error('El usuario no existe')
    }
}



module.exports = {
    categoryExistsValidation,
    userExistsValidation
}