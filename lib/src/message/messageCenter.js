"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageClient_1 = require("./messageClient");
class MessageCenter {
    constructor() {
        this.observers = [];
    }
    registerObserver(name, observer) {
        this.observers.push({ name, observer });
    }
    removeObserver(name) {
        for (let index = 0; index < this.observers.length; index++) {
            if (this.observers[index].name === name) {
                this.observers.splice(index, 1);
                break;
            }
        }
    }
    notify(message, name) {
        const observerToMessage = this.observers.reduce((currentObserver, nextObserver) => {
            return currentObserver.name === name ? currentObserver : nextObserver;
        }, { name: '', observer: new messageClient_1.MessageClient(this) });
        observerToMessage.observer.receiveNotification(message);
    }
}
exports.MessageCenter = MessageCenter;
