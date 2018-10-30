import { CreateauthPageModule } from './createauth-page.module';

describe('CreateauthPageModule', () => {
  let createauthPageModule: CreateauthPageModule;

  beforeEach(() => {
    createauthPageModule = new CreateauthPageModule();
  });

  it('should create an instance', () => {
    expect(createauthPageModule).toBeTruthy();
  });
});
