import * as blessed from 'blessed';
import { MessageCenter } from '../message/messageCenter';
import { MessageClient } from '../message/messageClient';

export class RedUI {
  private components: blessed.Widgets.Node[] = [];
  private messageClient: MessageClient;
  private screen: blessed.Widgets.Screen;

  constructor(private messageCenter: MessageCenter) {
    this.screen = blessed.screen({
      smartCSR: true,
      title: 'Redcli',
    });
    this.messageClient = new MessageClient(messageCenter);
  }

  public init(): void {
    this.components.forEach(component => {
      this.screen.append(component);
    });
    this.setControls();
    this.screen.render();
  }

  public addComponent(component: blessed.Widgets.Node): void {
    this.components.push(component);
  }

  private setControls(): void {
    this.screen.key(['escape', 'q', 'C-c'], (ch, key) => {
      this.messageCenter.notify({ type: 'exit', data: true }, 'main');
    });
  }
}
