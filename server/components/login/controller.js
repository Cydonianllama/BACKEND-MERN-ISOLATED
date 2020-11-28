const bd  = require('./model')

async function processRequestLoggin({username , password}){

    var responseDB = await bd.verifyUser({username , password});
    return responseDB;

}

module.exports =  {processRequestLoggin};
