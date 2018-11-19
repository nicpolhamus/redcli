import * as blessed from 'blessed';
import {MessageCenter} from '../../message/messageCenter';

export class MenuBar extends blessed.Widgets.BoxElement {
  constructor(options: blessed.Widgets.BoxOptions, private messageCenter: MessageCenter) {
    super(options);
  }
  
  public initiate(): void {
    this.append(new blessed.button({}));
  }
}