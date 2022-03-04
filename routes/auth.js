const {Router} = require('express')
const {check} = require('express-validator');
const { userRegister,userLogin } = require('../controllers/auth');
const { emailExists,dniExists,cellphoneExists,loginEmailNoExists } = require('../helpers/validation');
const { validation } = require('../middlewares/camposValidados');



const router = Router();



//esta ruta recibe email - name - password - cellphone - dni -lastname 
router.post('/Register', [
    check('email','El email no es valido').isEmail(),
    check('email','El email ya existe').custom(emailExists),
    check('dni','El dni es necesario').not().isEmpty(),
    check('password','La contraseña es necesaria').not().isEmpty(),
    check('dni','El dni es un conjunto de numeros').isNumeric(),
    check('cellphone','El numero ya existe').custom(cellphoneExists),
    check('dni','El dni ya existe').custom(dniExists),
    validation
],userRegister)


//esta ruta recibe email - name - password - cellphone - dni -lastname 
router.post('/Login',[
    check('email','El email no es valido').isEmail(),
    check('email','El email no existe').custom(loginEmailNoExists),
    check('password','la contraseña es necesaria').not().isEmpty(),
    validation
],userLogin)



module.exports=router;