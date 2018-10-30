import { CreateauthorizationModule } from './createauthorization.module';

describe('CreateauthorizationModule', () => {
  let createauthorizationModule: CreateauthorizationModule;

  beforeEach(() => {
    createauthorizationModule = new CreateauthorizationModule();
  });

  it('should create an instance', () => {
    expect(createauthorizationModule).toBeTruthy();
  });
});
