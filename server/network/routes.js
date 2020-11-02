const User = require('../components/user/network');
const Directora = require('../components/directora/network');
const Commons = require('../components/commons/network');

const router = function (server) {
    server.use('/Login', User);
    server.use('/Dashboard/Direccion', Directora);
    server.use('/Common',Commons);
}

module.exports = router;
