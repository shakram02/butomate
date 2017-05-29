import {
  UniversalBot,
  IChatConnectorSettings,
  ChatConnector,
  Session
} from 'botbuilder';

export class ChatBot {
  public connector: ChatConnector;
  bot: UniversalBot;

  constructor(appId: string, appPassword: string) {
    let settings:
        IChatConnectorSettings = {appId: appId, appPassword: appPassword};
    
    let connector: ChatConnector = new ChatConnector(settings);
    this.connector = connector;

    this.bot = new UniversalBot(connector);
  }

  addDialog(dialogId: string, callBack: (session: Session) => void) {
    this.bot.dialog(dialogId, callBack);
  }
}
