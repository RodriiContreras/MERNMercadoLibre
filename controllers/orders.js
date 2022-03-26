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






module.exports = {
    addOrder,
    getOrders
}