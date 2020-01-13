import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookRoomComponent } from './admin-book-room.component';

describe('AdminBookRoomComponent', () => {
  let component: AdminBookRoomComponent;
  let fixture: ComponentFixture<AdminBookRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
