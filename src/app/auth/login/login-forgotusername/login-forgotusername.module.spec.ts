import { LoginForgotusernameModule } from './login-forgotusername.module';

describe('LoginForgotusernameModule', () => {
  let loginForgotusernameModule: LoginForgotusernameModule;

  beforeEach(() => {
    loginForgotusernameModule = new LoginForgotusernameModule();
  });

  it('should create an instance', () => {
    expect(loginForgotusernameModule).toBeTruthy();
  });
});
