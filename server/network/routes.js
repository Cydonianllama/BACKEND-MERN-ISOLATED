const Login = require('../components/login/network');
const Dashboard = require('../components/dashboard/network');
const Commons = require('../components/commons/network');

const router = function (server) {
    server.use('/Login', Login);
    server.use('/Dashboard', Dashboard);
    server.use('/Common',Commons);
}

module.exports = router;
