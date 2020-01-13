import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookDateComponent } from './room-book-date.component';

describe('RoomBookDateComponent', () => {
  let component: RoomBookDateComponent;
  let fixture: ComponentFixture<RoomBookDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBookDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBookDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
