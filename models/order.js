const {Schema,model} = require('mongoose')

const OrderSchema = Schema({
    order:{
        type:Array,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        default:"Pendiente"
    },
    create:{
        type:Date,
        default:Date.now()
    }
})

module.exports = model('Order',OrderSchema)