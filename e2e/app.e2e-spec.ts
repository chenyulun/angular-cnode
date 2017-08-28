import { AngularCnodePage } from './app.po';

describe('angular-cnode App', () => {
  let page: AngularCnodePage;

  beforeEach(() => {
    page = new AngularCnodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
