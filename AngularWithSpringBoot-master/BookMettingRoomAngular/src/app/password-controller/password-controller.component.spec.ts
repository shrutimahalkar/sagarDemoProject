import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordControllerComponent } from './password-controller.component';

describe('PasswordControllerComponent', () => {
  let component: PasswordControllerComponent;
  let fixture: ComponentFixture<PasswordControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
