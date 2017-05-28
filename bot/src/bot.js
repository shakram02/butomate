const restify = require('restify');
const config = require('./config.js');
var botMaker = require('./bot_setup.js');
var spawn = require('child_process').spawn;
var cmd = 'pagekite.py';

// Inherit stdio to preserve colored output
var child = spawn(cmd, [config.port, config.pageKiteArgs], {stdio: 'inherit'});
botMaker.makeBot(config.appId, config.appPassword, onMessage);
process.on('SIGINT', function() {
  console.log("\nCaught interrupt signal, exiting...\n");

  if (child) {
    child.kill();
  }
  process.exit();
});

// Initialize server
const server = restify.createServer();

console.log("Server started...");

server.listen(config.port);
server.post('/', botMaker.connector.listen());

function onMessage(session) {
  console.log(
      session.message.user.name + ' said:' +
      '\"' + session.message.text + '\"');
  session.send('hey!');
}
