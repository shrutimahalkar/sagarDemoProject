import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TlmailrequestComponent } from './tlmailrequest.component';

describe('TlmailrequestComponent', () => {
  let component: TlmailrequestComponent;
  let fixture: ComponentFixture<TlmailrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TlmailrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlmailrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
