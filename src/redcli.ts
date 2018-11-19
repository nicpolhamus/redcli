import config from '../redcli.config.json';
import { MessageCenter } from './message/messageCenter';
import { MessageClient } from './message/messageClient';
import { components } from './UI/components/ui-components';
import { RedUI } from './UI/RedUI';

export class Redcli {
  private UI: RedUI;
  private config: any;
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
    this.UI.init();
  }

  private loadConfig(): void {
    this.config = config;
    if (!config.account) {
      this.initialSetup();
    } else {
      this.login();
    }
  }

  private initialSetup(): void {
    // setup account screen
  }

  private login(): void {
    console.log('I logged in!');
  }

  private handleMessage(message: { type: string; data: any }): void {
    switch (message.type) {
      case 'exit':
        return process.exit(0);
    }
  }
}
