"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class MessageClient extends events_1.EventEmitter {
    constructor(messageClient) {
        super();
        this.messageSubject = messageClient;
    }
    receiveNotification(message) {
        this.emit('message', message);
    }
}
exports.MessageClient = MessageClient;
