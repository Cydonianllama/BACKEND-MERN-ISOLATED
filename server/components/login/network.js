//localhost:3000/Login/username=123&password=123
const express    = require('express');
const router     = express.Router();
const response   = require('../../network/response');
const routeAuth       = require('../../../utils/authentication').passportAuth;

router.get('/',(req, res) => {
    if (req.isAuthenticated()) res.redirect('/Dashboard');// req.isAuthenticated() es de passport js
    else {
        res.render('pages/login');
    };
});
router.post('/',routeAuth('/Dashboard','/Login')); // usando la autenticacion con localStrategy

module.exports = router;
//res.end();//usarlo mas a menudo