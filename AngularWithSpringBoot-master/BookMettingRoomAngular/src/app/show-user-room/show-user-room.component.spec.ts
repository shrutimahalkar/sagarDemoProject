import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserRoomComponent } from './show-user-room.component';

describe('ShowUserRoomComponent', () => {
  let component: ShowUserRoomComponent;
  let fixture: ComponentFixture<ShowUserRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
