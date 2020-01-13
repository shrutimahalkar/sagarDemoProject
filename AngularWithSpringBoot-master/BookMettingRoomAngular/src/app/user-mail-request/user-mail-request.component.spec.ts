import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailRequestComponent } from './user-mail-request.component';

describe('UserMailRequestComponent', () => {
  let component: UserMailRequestComponent;
  let fixture: ComponentFixture<UserMailRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMailRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
