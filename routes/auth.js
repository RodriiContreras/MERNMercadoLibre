const {Router} = require('express')
const {check} = require('express-validator')



const router = Router();



//esta ruta recibe email - name - password - cellphone - dni -lastname 
router.post('/Register', [
    check('email','El email no es valido').isEmail(),
    // check('email','El email ya existe').custom(emailExists)
])


//esta ruta recibe email - name - password - cellphone - dni -lastname 
router.post('/Login', [])