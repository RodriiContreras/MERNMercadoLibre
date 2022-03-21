const {Router} = require('express');
const { createProduct, deleteProducts, updateProduct, getProducts, getProductsById ,getProductsByCategory,getProductsByBrand} = require('../controllers/products');
 const {check} = require('express-validator');
 const { validation } = require('../middlewares/camposValidados');
const { categoryExistsValidation, userExistsValidation } = require('../helpers/products-validations');


// const multer = require('multer')
// const sharp = require('sharp')

// const storage = multer.diskStorage({
//    destination:(req,file,cb) =>{
//       cb(null,'../assets/uploads')
//    },
//    filename:(req,file,cb)=>{
//       const ext = file.originalname.split('.').pop()
//      cb(null,`${Date.now()}.${ext}`)
//    }
// })

// const upload = multer({storage})


const router = Router();

 router.get('/buy-products',[
 ],getProducts)

 router.get('/buy-productsCategory/:category',[
   check('category','Category required').not().isEmpty(),
   validation
] ,getProductsByCategory)

router.get('/buy-productsBrand/:brand',[
   check('brand','Brand required').not().isEmpty(),
   validation
] ,getProductsByBrand)


router.get('/buy-product/:id',[
    check('id','no es un ID valido de mongo').isMongoId(),
    validation
 ] ,getProductsById)



 router.delete('/delete-product/:id',[
    check('id','no es un ID valido de mongo').isMongoId(),
    validation
] , deleteProducts)


 router.put('/update-product/:id',[
    check('id','no es un ID valido de mongo').isMongoId(),
    check('name','El nombre del producto es obligatorio').not().isEmpty(),
    check('user','El usuario del producto es obligatorio').not().isEmpty(),
    check('user','El usuario no es un MongoID valido').isMongoId(),
    check('user','El usuario no existe').custom(userExistsValidation),
    check('description','La descripcion del producto es obligatoria').not().isEmpty(),
    check('price','El precio del producto es obligatorio').not().isEmpty(),
    check('stock','El stock de los productos es infaltable').not().isEmpty(),
    check('category','La categoria es obligatoria').not().isEmpty(),
    check('category','La categoria no existe en nuestra aplicacion').custom(categoryExistsValidation),
    validation
 ], updateProduct)

router.post('/sell-Products',[
check('name','El nombre del producto es obligatorio').not().isEmpty(),
check('description','La descripcion del producto es obligatoria').not().isEmpty(),
check('user','El usuario del producto es obligatorio').not().isEmpty(),
check('user','El usuario no es un MongoID valido').isMongoId(),
check('user','El usuario no existe').custom(userExistsValidation),
check('price','El precio del producto es obligatorio').not().isEmpty(),
check('stock','El stock de los productos es infaltable').not().isEmpty(),
check('category','La categoria es obligatoria').not().isEmpty(),
check('category','La categoria no existe en nuestra aplicacion').custom(categoryExistsValidation),
validation
],createProduct)


module.exports=router

