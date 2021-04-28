const mongoose = require('mongoose')

const conection = async  () => {
    
    await mongoose.connect('mongodb://localhost/miprimermongo',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    )
        .then(() => console.log('conexion exitosa a mongoDB'))
        .catch(err => console.log(err))

}

module.exports = {mongoose , conection}