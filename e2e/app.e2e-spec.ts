import { WhatsTheNarrativePage } from './app.po';

describe('whats-the-narrative App', () => {
  let page: WhatsTheNarrativePage;

  beforeEach(() => {
    page = new WhatsTheNarrativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
