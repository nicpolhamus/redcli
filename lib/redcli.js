"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageCenter_1 = require("./message/messageCenter");
const messageClient_1 = require("./message/messageClient");
const RedUI_1 = require("./UI/RedUI");
class Redcli {
    constructor() {
        this.messageCenter = new messageCenter_1.MessageCenter();
        this.mainMessageClient = new messageClient_1.MessageClient(this.messageCenter);
        this.messageCenter.registerObserver('main', this.mainMessageClient);
        this.mainMessageClient.on('message', this.handleMessage);
        this.UI = new RedUI_1.RedUI(this.messageCenter);
    }
    start() {
        this.UI.init();
    }
    handleMessage(message) {
        switch (message.type) {
            case 'exit':
                return process.exit(0);
        }
    }
}
exports.Redcli = Redcli;
