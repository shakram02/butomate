import * as restify from "restify";
import {ChatConnector} from 'botbuilder';
// const restify = require('restify');
// const server = restify.createServer();
// var ServerMaker = function() {};

// ServerMaker.prototype.makeServer = function(portNumber, connector) {
//   server.listen(portNumber);
//   server.post('/', connector.listen());
// };

// module.exports = new ServerMaker();
export class ServerFactory {
  public server: restify.Server;
  private portNumber: number;
  constructor(portNumber: number) {
    this.portNumber = portNumber;
    this.server = restify.createServer();
  }

  init(connector: ChatConnector): void {
    this.server.listen(this.portNumber);
    this.server.post('/', connector.listen());
  }
}
