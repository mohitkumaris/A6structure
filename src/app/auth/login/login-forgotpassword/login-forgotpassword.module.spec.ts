import { LoginForgotpasswordModule } from './login-forgotpassword.module';

describe('LoginForgotpasswordModule', () => {
  let loginForgotpasswordModule: LoginForgotpasswordModule;

  beforeEach(() => {
    loginForgotpasswordModule = new LoginForgotpasswordModule();
  });

  it('should create an instance', () => {
    expect(loginForgotpasswordModule).toBeTruthy();
  });
});
