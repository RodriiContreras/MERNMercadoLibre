const { response } = require("express")
const Order = require('../models/order')



const addOrder = async( req, res=response) =>{
    const {...data} = req.body
    


    const dataOrder = new Order(data)

    dataOrder.save()


    res.status(201).json({
       msg:'Your order has been created successfully',
       order:dataOrder
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
    console.log(data)
    res.json({msg:data})
}







module.exports = {
    addOrder,
    getOrders,
    getOrdersByUser
}