const {Router} = require('express');
const {addOrder,getOrders,getOrdersByUser,deleteOrder} = require('../controllers/orders')


const router = Router();



router.post('/add-order',[],addOrder)

router.delete('/delete-order/:id',[],deleteOrder)

router.get('/get-ordersByUserID/:id',[],getOrdersByUser)

router.get('/get-orders',[],getOrders)



module.exports  = router;