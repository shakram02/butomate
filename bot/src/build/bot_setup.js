"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var botbuilder_1 = require("botbuilder");
var BotFactory = (function () {
    function BotFactory(appId, appPassword) {
        var settings = { appId: appId, appPassword: appPassword };
        var connector = new botbuilder_1.ChatConnector(settings);
        this.connector = connector;
        this.bot = new botbuilder_1.UniversalBot(connector);
    }
    BotFactory.prototype.addDialog = function (dialogId, callBack) {
        this.bot.dialog(dialogId, callBack);
    };
    return BotFactory;
}());
exports.BotFactory = BotFactory;
//# sourceMappingURL=bot_setup.js.map