"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blessed = require("blessed");
const messageClient_1 = require("../message/messageClient");
class RedUI {
    constructor(messageCenter) {
        this.messageCenter = messageCenter;
        this.components = [];
        this.screen = blessed.screen({
            smartCSR: true
        });
        this.screen.title = 'Redcli';
        this.messageClient = new messageClient_1.MessageClient(messageCenter);
    }
    init() {
        this.components.push(blessed.box({
            border: {
                type: 'line'
            },
            content: 'Hello {bold}world{/bold}!',
            height: '50%',
            left: 'center',
            style: {
                bg: 'magenta',
                border: {
                    fg: '#f0f0f0'
                },
                fg: 'white',
                hover: {
                    bg: 'green'
                }
            },
            tags: true,
            top: 'center',
            width: '50%'
        }));
        this.components.forEach(component => {
            this.screen.append(component);
        });
        this.setControls();
        this.screen.render();
    }
    setControls() {
        this.screen.key(['escape', 'q', 'C-c'], (ch, key) => {
            this.messageCenter.notify({ type: 'exit', data: true }, 'main');
        });
    }
}
exports.RedUI = RedUI;
