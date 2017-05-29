"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
// const restify = require('restify');
// const server = restify.createServer();
// var ServerMaker = function() {};
// ServerMaker.prototype.makeServer = function(portNumber, connector) {
//   server.listen(portNumber);
//   server.post('/', connector.listen());
// };
// module.exports = new ServerMaker();
var ServerFactory = (function () {
    function ServerFactory(portNumber) {
        this.portNumber = portNumber;
        this.server = restify.createServer();
    }
    ServerFactory.prototype.init = function (connector) {
        this.server.listen(this.portNumber);
        this.server.post('/', connector.listen());
    };
    return ServerFactory;
}());
exports.ServerFactory = ServerFactory;
//# sourceMappingURL=server_setup.js.map