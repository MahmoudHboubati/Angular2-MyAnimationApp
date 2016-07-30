import { MyAnimationAppPage } from './app.po';

describe('my-animation-app App', function() {
  let page: MyAnimationAppPage;

  beforeEach(() => {
    page = new MyAnimationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
