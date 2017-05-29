import {LocalServer} from './server_setup';
import {ChatBot} from './bot_setup';
import {config} from './config';
import {Session} from 'botbuilder';
import * as child_process from 'child_process';
import {PageKiteLauncher} from './pagekite';
import {ChatProxy} from './chatbot/chat_proxy';

var pageKiteLauncher =
    new PageKiteLauncher(config.portNumber, config.pageKiteHandle);
var chatBot = new ChatBot(config.appId, config.appPassword);
var chatProxy = new ChatProxy();
var localServer = new LocalServer(config.portNumber);

chatBot.addDialog('/', chatProxy.handleChatMessage);
localServer.init(chatBot.connector);
pageKiteLauncher.start();

process.on('SIGINT', function() {
  console.log("\nCaught interrupt signal, exiting...\n");
  pageKiteLauncher.killChild();
  process.exit();
});
