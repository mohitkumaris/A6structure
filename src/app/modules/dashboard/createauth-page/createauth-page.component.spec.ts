import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateauthPageComponent } from './createauth-page.component';

describe('CreateauthPageComponent', () => {
  let component: CreateauthPageComponent;
  let fixture: ComponentFixture<CreateauthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateauthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateauthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
