"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const restify = require('restify');
// const config = require('./config.js');
// var botMaker = require('./bot_setup.js');
var server_setup_1 = require("./server_setup");
var bot_setup_1 = require("./bot_setup");
var config_1 = require("./config");
var spawn = require('child_process').spawn;
var cmd = 'pagekite.py';
// Inherit stdio to preserve colored output
var child = spawn(cmd, [config_1.config.portNumber, config_1.config.pageKiteHandle], { stdio: 'inherit' });
// botMaker.makeBot(config.appId, config.appPassword, onMessage);
var botFactory = new bot_setup_1.BotFactory(config_1.config.appId, config_1.config.appPassword);
botFactory.addDialog('/', onMessage);
var serverFactory = new server_setup_1.ServerFactory(config_1.config.portNumber);
// serverFactory.init(botFactory.connector);
serverFactory.server.listen(config_1.config.portNumber);
serverFactory.server.post('/', botFactory.connector.listen());
process.on('SIGINT', function () {
    console.log("\nCaught interrupt signal, exiting...\n");
    if (child) {
        child.kill();
    }
    process.exit();
});
// Initialize server
console.log("Server started...");
function onMessage(session) {
    console.log(session.message.user.name + ' said:' +
        '\"' + session.message.text + '\"');
    session.send('heyllll!');
}
//# sourceMappingURL=bot.js.map