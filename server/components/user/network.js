//localhost:3000/Login/username=123&password=123
const express    = require('express');
const router     = express.Router();
const controller = require('./controller');
const response   = require('../../network/response');

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
    
    try {
        let isLogged = await controller.processRequestLoggin(req.params);
        response.success(req, res, {
            error    : 'no',
            isconnect: isLogged,
        }, 200);
        
    } catch (error) {
        response.error(req,res,{
            error : 'yes',
            isConnect : 'no'
        },404);
    }
    
    res.end();

});

module.exports = router;