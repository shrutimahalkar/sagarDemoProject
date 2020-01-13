import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomDateWiseComponent } from './book-room-date-wise.component';

describe('BookRoomDateWiseComponent', () => {
  let component: BookRoomDateWiseComponent;
  let fixture: ComponentFixture<BookRoomDateWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRoomDateWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
