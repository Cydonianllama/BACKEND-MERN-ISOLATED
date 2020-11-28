var store = require('./store')

async function getDataDirector(){
    try {
        let returnData = await store.dataDirector();
        return returnData;
    } catch (error) {
        console.log(error);
    }    
}

module.exports = {getDataDirector};