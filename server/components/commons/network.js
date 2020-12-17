const express       = require('express');
const router        = express.Router();
const controller    = require('./controller');
const response      = require('../../network/response')

router.get('/getAllAlumnos',async (req,res)=>{
    try {
        let data = await controller.getAllAlumnos();
        response.success(req,res,{
            sucess : 'yes',
            data  : data
        },200);
    } catch (error) {
        response.error(req,res,{
            error : 'intern'
        },404);
    }    
    res.end();
});
router.post('/getAlumno?:type&:datatype', async(req, res) => {
    try {
        let data = await controller.getAlumno();
        response.success(req,res,{
            error : 'none',
            body : data
        },200);
    } catch (error) {
        response.error(req,res,{
            error : 'intern'
        },404);
    }
    res.end();
});

module.exports = router;