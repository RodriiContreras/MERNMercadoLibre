const {Router} = require('express');
const {addOrder,getOrders} = require('../controllers/orders')


const router = Router();



router.post('/add-order',[],addOrder)

router.get('/get-orders',[],getOrders)


module.exports  = router;