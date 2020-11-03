const store = require('./store');

async function processRequestLoggin(dataUser){

    var dataLogin = await store.dataLogin();

    function verifyData(_dataUser,dataDB) {
        try {
            var iscorrect = false;
            isCorrect = dataDB.forEach(data => {
                if (data.username === _dataUser.username && data.password === _dataUser.password) {
                    iscorrect = true;
                }
            });
            return iscorrect;
        } catch (error) {
            console.log(error);
        }
    }
    
    let Acert = await verifyData(dataUser,dataLogin);
    return Acert;
}

module.exports =  {processRequestLoggin};
