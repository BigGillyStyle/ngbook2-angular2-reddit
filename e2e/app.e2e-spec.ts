import { Ngbook2Angular2RedditPage } from './app.po';

describe('ngbook2-angular2-reddit App', function() {
  let page: Ngbook2Angular2RedditPage;

  beforeEach(() => {
    page = new Ngbook2Angular2RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
