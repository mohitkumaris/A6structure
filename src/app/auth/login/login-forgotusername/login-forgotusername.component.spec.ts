import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotusernameComponent } from './login-forgotusername.component';

describe('LoginForgotusernameComponent', () => {
  let component: LoginForgotusernameComponent;
  let fixture: ComponentFixture<LoginForgotusernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginForgotusernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForgotusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
