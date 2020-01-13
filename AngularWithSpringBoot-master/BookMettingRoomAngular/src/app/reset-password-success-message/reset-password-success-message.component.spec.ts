import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordSuccessMessageComponent } from './reset-password-success-message.component';

describe('ResetPasswordSuccessMessageComponent', () => {
  let component: ResetPasswordSuccessMessageComponent;
  let fixture: ComponentFixture<ResetPasswordSuccessMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordSuccessMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
