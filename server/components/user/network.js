//localhost:3000/Login/username=123&password=123
const express    = require('express');
const router     = express.Router();
const controller = require('./controller');
const response   = require('../../network/response');
const path       = require('path');
const routeAuth       = require('../../../utils/authentication').passportAuth;

router.get('/',(req, res) => {
    //res.sendFile(path.resolve('client') + '/public/pages/Login.html');
    if(req.isAuthenticated()){
        res.redirect('/Home');
    }else{
        res.render('login');
    }
});
router.post('/',routeAuth('/Home','/Login')); // usando la autenticacion

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