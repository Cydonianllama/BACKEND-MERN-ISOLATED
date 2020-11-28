const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

//const path = require('path'); // poder manipular las rutas de una manera sencilla 

const auth       = require('../utils/authentication');
const config     = require('../utils/config').config;
const routes     = require('./network/routes');
const response   = require('./network/response');
require('dotenv').config()

//configurations
app.set('view engine', 'ejs');
//app.use(express.static(path.resolve('client') + '/public')); // para archivos estaticos (solo lo use para pruebas)

//middleware 
app.use(bodyParser.json())
app.use(express.urlencoded({extended : true}))//leer los datos enviados por un formulario

auth.sessionMiddlewares(app)//metodo local para la autenticacion de los usuarios

routes(app)//el enrutador a todas las secciones de mi aplicacion

app.get('/', (req, res) => {
    res.redirect('/Login')
})

//deslogearse del sistema 
app.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})

app.post('/', (req, res) => {
    response.error(req, res, {
        isWork: 'yes',
        permission: 'denied',
        description: 'the client hasnt permission for this content'
    }, 404)
})

//404 page 
app.get('*', (req, res) => {
    res.status(404).render('pages/404');
})

app.listen(process.env.PORT,()=>{
    console.log('servidor exitoso : ' + process.env.PORT)
})
