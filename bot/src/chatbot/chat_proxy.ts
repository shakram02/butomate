import {Session} from 'botbuilder';
export class ChatProxy {
  constructor() {}

  handleChatMessage(session: Session): void {
    let reply = ChatProxy.echoMessage(session);
  }

  static echoMessage(session: Session): void {
    if (!session.message.text) return;

    let date = new Date();

    let reply = ChatProxy.quoteText(session.message.text);
    session.send(reply);
  }

  static quoteText(text: string): string {
    if (!text) return "";
    return "\"" + text + "\" ";
  }
}