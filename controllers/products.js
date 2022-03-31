const { response } = require("express")
const Product = require("../models/product")

const getProducts =  async ( req , res = response)=>{
 const productos = await Product.find({})
 
 if(!productos){
     res.status(404).json({
         msg:'No hay productos en esta categoria'
     })
 }
 res.json({
     msg:productos
 })

}

const getProductsById = async (req , res = response)=>{ 
    const {id}  = req.params
     const productoId = await Product.findById(id)
    
     if(!productoId){
       res.status(404).json({
           msg:'el producto con este ID no existe'
       })
     }

     res.json({
         msg:productoId
     })
}

const getProductsByCategory = async (req , res = response)=>{ 
    const {category}  = req.params
     const product = await Product.find({})
    const productFilter =  product.filter(item => item.category === category)

     if(!productFilter){
       res.status(404).json({
           msg:'Products with this category no exists'
       })
     }

     res.json({
         msg:productFilter
     })
}

const getProductsByBrand = async (req , res = response)=>{ 
    const {brand}  = req.params
     const product = await Product.find({})
    const productFilter =  product.filter(item => item.brand === brand)

     if(!productFilter){
       res.status(404).json({
           msg:'Products with this category no exists'
       })
     }

     res.json({
         msg:productFilter
     })
}


const deleteProducts =  async (req,res=response)=>{
  const {id} = req.params
  const productoId = await Product.findByIdAndDelete(id)
  
  // si el usuario que quiere borrarlo no es el vendedor, no podra borrar este producto

  //comprobar si producto existe
  if(!productoId){
      res.json({
          msg:'El producto no existe'
      })
  }
  
  res.json({
      msg:'Su producto ha sido eliminado correctamente',
      productoEliminado:productoId
  })
}

const updateProduct =  async(req,res = response)=>{
    const {id} =  req.params
    const {name, description, price ,stock, category,img} = req.body


    const data ={
        name,
        description,
        price,
        stock,
        category,
        img
    }

    const productoId = await Product.findByIdAndUpdate(id,data)


    if(!productoId){
        res.status(404).json({
            msg:'El producto no existe'
        })
    }



     res.json({
         msg:'Su producto ha sido actualizado correctamente',
         productoActualizado:productoId
     })
}

const createProduct = ( req , res = response) => {
    const {...producto} = req.body
 

    const data = new Product(producto)

    data.save()
    // const finalData = {
    //     name,description,price,img,stock,
    //     user: req.user.id
    // }


    res.status(201).json({
        msg:'Su producto ha sido publicado correctamente.',
        product: data
    })

}


module.exports= {
getProducts,
getProductsById,
deleteProducts,
getProductsByCategory,
getProductsByBrand,
updateProduct,
createProduct
}