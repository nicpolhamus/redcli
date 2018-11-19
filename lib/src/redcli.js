"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redcli_config_json_1 = __importDefault(require("../redcli.config.json"));
const messageCenter_1 = require("./message/messageCenter");
const messageClient_1 = require("./message/messageClient");
const subredditList_1 = require("./UI/components/subredditList");
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
        this.initializeUI();
        this.UI.init();
    }
    initializeUI() {
        const subredditList = new subredditList_1.SubRedditList();
        this.UI.addComponent(subredditList.SubredditList);
    }
    loadConfig() {
        this.config = redcli_config_json_1.default;
    }
    handleMessage(message) {
        switch (message.type) {
            case 'exit':
                return process.exit(0);
        }
    }
}
exports.Redcli = Redcli;
