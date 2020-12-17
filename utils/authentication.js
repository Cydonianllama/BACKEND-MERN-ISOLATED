// requrire del middleware (urlencode) -> instanciado en server.js
// hay muchas estrategias pero para este proyecto usaremos la estrategia local - como un inicio en el mundo de las autenticaciones
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passportLocal = require('passport-local').Strategy
const controllerUser = require('../server/components/login/controller')

function sessionMiddlewares(app) {
    app.use(cookieParser('tengo secretos que no debo decirte'));
    app.use(session({
        secret : 'hola soy un secreto',
        resave : true,
        saveUninitialized : true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new passportLocal((username,password,done)=>{
        //paso de la verificacion con la base de datos
        if (controllerUser.processRequestLoggin({ username, password }) !== null){
            return done(null,{id : 1 ,name : username });
        }else{
            done(null,false);
        }
    }));
    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });
    passport.deserializeUser((id,done)=>{
        done(null,{id : 1 , name : 'erick'});
    })
}
function passportAuth(successURL,failureURL){
    return passport.authenticate('local',{
        successRedirect : successURL,
        failureRedirect : failureURL
    })
}   
function isAuthenticatedCallback(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        if(req.url === '/Login'){
            return null;
        }else{
            return res.redirect('/Login');
        }
    }
}
module.exports = {sessionMiddlewares,passportAuth,isAuthenticatedCallback};