const store = require('./store');

function processRequestLoggin(dataUser){
    if (store.logginToSystem(dataUser)){
        console.log('you in');
        return true;
    }else{
        console.log('incorrect login');
        return false
    }
}

module.exports = {processRequestLoggin}
