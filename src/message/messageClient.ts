import { EventEmitter } from 'events';
import { IObservable } from './observable';
import { IObserver } from './observer';

export class MessageClient extends EventEmitter implements IObserver {
  private messageSubject: IObservable;

  constructor(messageClient: IObservable) {
    super();
    this.messageSubject = messageClient;
  }

  public receiveNotification<T>(message: { type: string; data: any }): void {
    this.emit('message', message);
  }
}
