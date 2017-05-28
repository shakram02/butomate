const restify = require('restify');
const builder = require('botbuilder');
const config = require('./config.js');
const chalk = require('chalk');

const connector = new builder.ChatConnector(
    {appId: config.appId, appPassword: config.appPassword});

const bot = new builder.UniversalBot(connector);
var spawn = require('child_process').spawn;
var cmd = 'pagekite.py';

// Inherit stdio to preserve colored output
var child = spawn(cmd, [config.port, config.pageKiteArgs], {stdio: 'inherit'});


// Handle messages
bot.dialog('/', (session) => {
  console.log(
      session.message.user.name + ' said:' +
      '\"' + session.message.text + '\"');
  session.send('hey!');
});

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
server.post('/', connector.listen());
