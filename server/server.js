const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const path = require('path');

const auth       = require('../utils/authentication');
const config     = require('../utils/config').config;
const routes     = require('./network/routes');
const response   = require('./network/response');

//configurations
app.set('view engine', 'ejs');
//app.use(express.static(path.resolve('client') + '/public')); // para archivos estaticos (solo lo use para pruebas)

//middleware 
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));//leer los datos enviados por un formulario
auth.sessionMiddlewares(app);//metodo local para la autenticacion de los usuarios

//routes

routes(app);

app.get('/', (req, res) => {

    res.redirect('/Login');

});

app.post('/', (req, res) => {
    response.error(req, res, {
        isWork: 'yes',
        permission: 'denied',
        description: 'lucho sabe ingles'
    }, 404);
})

//404 page 
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

