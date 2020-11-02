const model  = require('./model');


async function logginToSystem(dataUser){
    const  dataModel =  model.dataUser.USERS;
    console.log(dataUser);
    function verifyData(data){
        // dataModel.map(data => {
        //     if(dataModel.username === dataUser.username && dataModel.password === datauser.password){
        //         return true;
        //     }
        // })
        dataModel.forEach(data => {
            if(data.username = dataUser.username && data.password === dataUser.password){
                return true;
            }
        })
    }
    let isCorrect = await verifyData(dataUser);
    return isCorrect;
}

module.exports = {logginToSystem}