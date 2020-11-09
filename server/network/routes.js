const User = require('../components/user/network');
const Directora = require('../components/directora/network');
const Commons = require('../components/commons/network');
const Home    = require('../components/home/network');

const router = function (server) {
    server.use('/Login', User);
    server.use('/Direccion', Directora);
    server.use('/Common',Commons);
    server.use('/Home',Home);
}

module.exports = router;
