import { AppPage } from './app.po';

describe('scylla-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should provide a link to Scylla', () => {
    page.navigateTo();
  });

  it('should provide a link to a Getting Started guide', () => {
    page.navigateTo();
  });

  it('should provide a link to the documentation', () => {
    page.navigateTo();
  });
});
