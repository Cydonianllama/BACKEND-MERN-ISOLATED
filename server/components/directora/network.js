const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/',async (req,res)=>{
    try {
        let data = await controller.getDataDirector();
        response.success(req,res,{
            status : 'sucess',
            data : data
        },200);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', (req, res) => {
    response.error(req,res,{
        status : 'denied'
    },404);
});

module.exports = router;