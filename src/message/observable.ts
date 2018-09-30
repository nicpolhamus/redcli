import { IObserver } from './observer';

export interface IObservable {
  registerObserver(name: string, observer: IObserver): void;
  removeObserver(name: string): void;
  notify<T>(message: { type: any; data: any }, name: string): void;
}
