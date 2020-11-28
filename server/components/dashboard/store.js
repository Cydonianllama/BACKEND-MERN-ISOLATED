var data = require('./model');

async function dataDirector() {
    let returnData = await data.database.director;
    return returnData;
}

module.exports = { dataDirector };