import { DappTestPage } from './app.po';

describe('dapp-test App', () => {
  let page: DappTestPage;

  beforeEach(() => {
    page = new DappTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
