//@ts-check
const builder = require('botbuilder');

var BotMaker = function() {};

BotMaker.prototype.makeBot = function(
    appId, appPassword, onSessionEventHandler) {
  var connector =
      new builder.ChatConnector({appId: appId, appPassword: appPassword});
  var bot = new builder.UniversalBot(connector);

  // Handle messages
  bot.dialog('/', (session) => {onSessionEventHandler(session)});
  BotMaker.prototype.connector = connector;
};

module.exports = new BotMaker();
