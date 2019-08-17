import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotpasswordComponent } from './login-forgotpassword.component';

describe('LoginForgotpasswordComponent', () => {
  let component: LoginForgotpasswordComponent;
  let fixture: ComponentFixture<LoginForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginForgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
