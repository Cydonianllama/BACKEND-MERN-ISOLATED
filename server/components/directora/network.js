const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hola directira');
});
router.post('/', (req, res) => {
    res.send('hola directira');
});

module.exports = router;