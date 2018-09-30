"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blessed = require("blessed");
class SubRedditList {
    constructor() {
        this.subreddits = [];
        this.subredditList = blessed.listbar();
    }
    initialize() {
        this.subredditList.setItems(this.subreddits);
        return this.SubredditList;
    }
    get SubredditList() {
        return this.subredditList;
    }
}
exports.SubRedditList = SubRedditList;
