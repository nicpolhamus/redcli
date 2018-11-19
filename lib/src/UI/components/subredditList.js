"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const blessed = __importStar(require("blessed"));
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
