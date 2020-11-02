const express = require('express');
const router  = express.Router();

router.get('/getAllAlumnos',(req,res)=>{
    res.send('sirvo');
});

router.post('/getAlumno?:type&:datatype', (req, res) => {
    res.send('sirvo');
})

module.exports = router;