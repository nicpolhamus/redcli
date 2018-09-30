export interface IObserver {
  receiveNotification<T>(message: { type: any; data: any }): void;
}
