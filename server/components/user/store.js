const model  = require('./model');

async function dataLogin(dataUser){
    const dataModel = await model.dataUser.USERS;
    return dataModel;
}

module.exports = {dataLogin};