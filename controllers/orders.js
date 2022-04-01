const { response } = require("express");
const Order = require('../models/order')
const Product = require("../models/product")


const addOrder = async( req, res=response) =>{
    const {...data} = req.body
    const {quantity,productID} = data;
     
      const productDB = await Product.findById(productID)

   if(productDB){

       if(productDB.stock < quantity){
           return res.status(400).json({msg:'Your order exceeds stock'})
       }

       else{
        productDB.stock = productDB.stock - quantity
        productDB.save()
       }
   }


   
   const dataOrder = new Order(data)
   dataOrder.save()

    res.status(201).json({
       msg:'Your order has been created successfully',
    })
}

const getOrders = async (req,res=response)=>{
    const data = await Order.find({})
    res.json(data)
}

const getOrdersByUser = async (req,res=response)=>{
     const {id} = req.params
     console.log(req.params)
    const data = await Order.find({user:id})
    res.json({msg:data})
}


const deleteOrder = async (req,res=response)=>{
    const {id} = req.params
    console.log(req.params)
   const data = await Order.findByIdAndDelete({_id:id})
   res.json({msg:data})
}




module.exports = {
    addOrder,
    getOrders,
    getOrdersByUser,
    deleteOrder
}