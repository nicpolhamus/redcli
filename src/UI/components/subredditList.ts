import * as blessed from 'blessed';

export class SubRedditList {
  private subredditList: blessed.Widgets.ListbarElement;
  private subreddits: blessed.Widgets.Types.ListbarCommand[];

  constructor() {
    this.subreddits = [];
    this.subredditList = blessed.listbar();
  }

  public initialize(): blessed.Widgets.ListbarElement {
    this.subredditList.setItems(this.subreddits);
    return this.SubredditList;
  }

  public get SubredditList(): blessed.Widgets.ListbarElement {
    return this.subredditList;
  }
}
