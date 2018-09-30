import { MessageClient } from './messageClient';
import { IObservable } from './observable';
import { IObserver } from './observer';

export class MessageCenter implements IObservable {
  private observers: Array<{ name: string; observer: IObserver }>;

  constructor() {
    this.observers = [];
  }

  public registerObserver(name: string, observer: IObserver): void {
    this.observers.push({ name, observer });
  }

  public removeObserver(name: string): void {
    for (let index = 0; index < this.observers.length; index++) {
      if (this.observers[index].name === name) {
        this.observers.splice(index, 1);
        break;
      }
    }
  }

  public notify<T>(message: { type: string; data: any }, name: string) {
    const observerToMessage = this.observers.reduce(
      (currentObserver, nextObserver) => {
        return currentObserver.name === name ? currentObserver : nextObserver;
      },
      { name: '', observer: new MessageClient(this) },
    );

    observerToMessage.observer.receiveNotification(message);
  }
}
