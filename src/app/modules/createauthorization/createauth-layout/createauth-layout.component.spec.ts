import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateauthLayoutComponent } from './createauth-layout.component';

describe('CreateauthLayoutComponent', () => {
  let component: CreateauthLayoutComponent;
  let fixture: ComponentFixture<CreateauthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateauthLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateauthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
