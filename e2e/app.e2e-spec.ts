import { AngularMagicPage } from './app.po';

describe('angular-magic App', function() {
  let page: AngularMagicPage;

  beforeEach(() => {
    page = new AngularMagicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
