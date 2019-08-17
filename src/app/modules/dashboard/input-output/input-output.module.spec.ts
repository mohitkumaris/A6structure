import {InputOutputModule} from './input-output.module';

describe('InputOutputModule', () => {
  let inputOutputModule: InputOutputModule;

  beforeEach(() => {
    inputOutputModule = new InputOutputModule();
  });

  it('should create an instance', () => {
    expect(inputOutputModule).toBeTruthy();
  });
});
