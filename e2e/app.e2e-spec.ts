import { CanvasTesterPage } from './app.po';

describe('canvas-tester App', function() {
  let page: CanvasTesterPage;

  beforeEach(() => {
    page = new CanvasTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
