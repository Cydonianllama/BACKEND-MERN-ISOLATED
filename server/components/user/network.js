//localhost:3000/Login/username=123&password=123
const express    = require('express');
const router     = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    console.log('estoy en login')
    res.send({
        gui : 'yes'
    })
});

router.post('/',(req,res)=>{
    res.send({
        information : 'protected'
    });
});

router.post('/:username&:password',async (req,res)=>{

    let isLogged = await controller.processRequestLoggin(req.params);
    res.json({
        processData  : 'yes',
        prueba       : 'si ves esto es exitoso'   ,
        esLogged     : islogged
    });

});

module.exports = router;