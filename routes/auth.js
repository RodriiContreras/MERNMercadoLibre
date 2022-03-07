const {Router} = require('express')
const {check} = require('express-validator');
const { userRegister,userLogin } = require('../controllers/auth');
const { emailExists,dniExists,cellphoneExists,loginEmailNoExists } = require('../helpers/validation');
const { validation } = require('../middlewares/camposValidados');



const router = Router();



//esta ruta recibe email - name - password - cellphone - dni -lastname 
router.post('/Register', [
    check('email','Not is a Email').isEmail(),
    check('email','Email already exists').custom(emailExists),
    check('dni','Dni required').not().isEmpty(),
    check('password','Password required').not().isEmpty(),
    check('dni','Dni is full number').isNumeric(),
    check('cellphone','CellPhone already exists').custom(cellphoneExists),
    check('dni','Dni already exists').custom(dniExists),
    validation
],userRegister)


//esta ruta recibe email - name - password - cellphone - dni -lastname 
router.post('/Login',[
    check('email','Not is a Email').isEmail(),
    check('email','Email no exists').custom(loginEmailNoExists),
    check('password','Password required').not().isEmpty(),
    validation
],userLogin)



module.exports=router;