// const restify = require('restify');
// const config = require('./config.js');
// var botMaker = require('./bot_setup.js');
import {ServerFactory} from './server_setup';
import {BotFactory} from './bot_setup';
import {config} from './config';
import {Session} from 'botbuilder';
var spawn = require('child_process').spawn;
var cmd = 'pagekite.py';

// Inherit stdio to preserve colored output
var child =
    spawn(cmd, [config.portNumber, config.pageKiteHandle], {stdio: 'inherit'});
// botMaker.makeBot(config.appId, config.appPassword, onMessage);
var botFactory = new BotFactory(config.appId, config.appPassword);
botFactory.addDialog('/', onMessage);

var serverFactory = new ServerFactory(config.portNumber);
// serverFactory.init(botFactory.connector);
serverFactory.server.listen(config.portNumber);
serverFactory.server.post('/', botFactory.connector.listen());

process.on('SIGINT', function() {
  console.log("\nCaught interrupt signal, exiting...\n");

  if (child) {
    child.kill();
  }
  process.exit();
});

// Initialize server
console.log("Server started...");

function onMessage(session: Session) {
  console.log(
      session.message.user.name + ' said:' +
      '\"' + session.message.text + '\"');
  session.send('heyllll!');
}
