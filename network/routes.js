express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const routes = function(server){
    server.use('/message', message); //Este comando hace que /message en la url direccione al componente de message el cual se comunica desde network del mismo.
    server.use('/user', user); 
}

module.exports = routes;