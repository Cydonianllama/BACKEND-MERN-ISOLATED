const express = require('express');
const router  = express.Router();

const AuthCallback = require('../../../utils/authentication').isAuthenticatedCallback; //protector de rutas 

router.get('/',(req,res,next)=>{AuthCallback(req,res,next)},(req,res)=>{
    res.render('./pages/home');
})

router.get('/Reclamos',(req,res,next)=>{AuthCallback(req,res,next)},(req,res)=>{
    res.render('./pages/reclamos');
})

module.exports = router;