function success(req,res,message,status){
    res.status(status).send(message);
}

function error(req,res,message,status){
    res.status(status).send(message);
}

module.exports = {success,error};