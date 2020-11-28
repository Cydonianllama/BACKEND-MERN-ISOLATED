const db = require('../.../../../../utils/database')

db.conection()

const Schema = db.mongoose.Schema

const userSchema = new Schema({
    username : String ,
    password : String
} ) 

const modelUser = db.mongoose.model('user',userSchema,'user')

const verifyUser = async  ({username , password})=>{

    let resultReq = await modelUser.findOne({username , password},(err,obj) => console.log(obj) )
    return resultReq

}

module.exports = {modelUser,verifyUser}