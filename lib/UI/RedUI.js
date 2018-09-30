"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blessed = require("blessed");
const messageClient_1 = require("../message/messageClient");
class RedUI {
    constructor(messageCenter) {
        this.messageCenter = messageCenter;
        this.components = [];
        this.screen = blessed.screen({
            smartCSR: true,
            title: 'Redcli',
        });
        this.messageClient = new messageClient_1.MessageClient(messageCenter);
    }
    init() {
        this.components.forEach(component => {
            this.screen.append(component);
        });
        this.setControls();
        this.screen.render();
    }
    addComponent(component) {
        this.components.push(component);
    }
    setControls() {
        this.screen.key(['escape', 'q', 'C-c'], (ch, key) => {
            this.messageCenter.notify({ type: 'exit', data: true }, 'main');
        });
    }
}
exports.RedUI = RedUI;
