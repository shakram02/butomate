const restify = require('restify');
const builder = require('botbuilder');
const config = require('./config.js');

const connector = new builder.ChatConnector(
    {appId: config.appId, appPassword: config.appPassword});

const bot = new builder.UniversalBot(connector);

// Handle messages
bot.dialog('/', (session) => {
  console.log(session.message.user.name + ' said:' + session.message.text);
  session.send('hey!')
});

// Initialize server
const server = restify.createServer();
server.listen(8080);
server.post('/', connector.listen());