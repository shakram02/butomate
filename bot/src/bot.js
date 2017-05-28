const restify = require('restify');
const builder = require('botbuilder');
const config = require('./config.js');

const connector = new builder.ChatConnector(
    {appId: config.appId, appPassword: config.appPassword});

const bot = new builder.UniversalBot(connector);
var exec = require('child_process').exec;
var cmd = 'pagekite.py ' + config.pageKiteArgs;

var process = exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log("STD out:" + stdout);
  console.log("Error:" + stderr);
});

// Handle messages
bot.dialog('/', (session) => {
  process.stdout.console.log(
      session.message.user.name + ' said:' + session.message.text);
  session.send('hey!');
});

// Initialize server
const server = restify.createServer();

console.log("Server started...");

server.listen(config.port);
server.post('/', connector.listen());