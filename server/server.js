const express    = require('express');
const app        = express();

const path = require('path'); // poder manipular las rutas de una manera sencilla 

require('dotenv').config()

app.set('view engine', 'ejs');

app.use('/public', express.static(path.resolve('public'))); 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.redirect('/Login')
})
//salir del sistema
app.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})

//404 page (no se encontro)
app.get('*', (req, res) => {
    res.status(404).render('pages/404');
})

app.listen(process.env.PORT,()=>{
    console.log('servidor exitoso : ' + process.env.PORT)
})