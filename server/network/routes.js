const User = require('../components/user/network');
const Directora = require('../components/directora/network');
const Profesor = 'profesor no implementado';

const router = function (server) {
    server.use('/Login', User);
    server.use('/Dashboard/Direccion', Directora);
}

module.exports = router;
