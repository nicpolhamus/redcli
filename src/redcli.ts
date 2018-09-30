// import config from '../redcli.config.json';
import { MessageCenter } from './message/messageCenter';
import { MessageClient } from './message/messageClient';
import { SubRedditList } from './UI/components/subredditList';
import { RedUI } from './UI/RedUI';

export class Redcli {
  private UI: RedUI;
  private messageCenter: MessageCenter;
  private mainMessageClient: MessageClient;
  constructor() {
    this.messageCenter = new MessageCenter();
    this.mainMessageClient = new MessageClient(this.messageCenter);
    this.messageCenter.registerObserver('main', this.mainMessageClient);

    this.mainMessageClient.on('message', this.handleMessage);

    this.UI = new RedUI(this.messageCenter);
  }

  public start(): void {
    this.initializeUI();
    this.UI.init();
  }

  private initializeUI(): void {
    const subredditList = new SubRedditList();
    this.UI.addComponent(subredditList.SubredditList);
  }

  private handleMessage(message: { type: string; data: any }): void {
    switch (message.type) {
      case 'exit':
        return process.exit(0);
    }
  }
}
