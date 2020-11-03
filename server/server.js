const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const config     = require('./utils/config').config;
const routes     = require('./network/routes');
const response   = require('./network/response');
const path = require('path');


//middleware 
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(express.static(path.resolve('client') + '/public'));

//my routes
routes(app);

app.get('/',(req,res)=>{
    
    res.sendFile(path.resolve('client') + '/public/index.html');
    
});

app.post('/',(req,res)=>{
    response.error(req,res,{
        isWork : 'yes',
        permission : 'denied',
        description :'lucho sabe ingles'
    },404);
})

app.get('*', (req, res) => {
    response.error(req,res,{
        isWork : 'yes',
        permission : 'denied',
        desciprtion : 'page not found'
    },404);
});

app.listen(config.PORT,()=>{
    console.log('servidor exitoso');
});

