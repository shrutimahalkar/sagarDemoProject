import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailMesssageComponent } from './gmail-messsage.component';

describe('GmailMesssageComponent', () => {
  let component: GmailMesssageComponent;
  let fixture: ComponentFixture<GmailMesssageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmailMesssageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailMesssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
