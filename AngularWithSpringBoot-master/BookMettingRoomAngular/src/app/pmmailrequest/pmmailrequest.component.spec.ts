import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmmailrequestComponent } from './pmmailrequest.component';

describe('PmmailrequestComponent', () => {
  let component: PmmailrequestComponent;
  let fixture: ComponentFixture<PmmailrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmmailrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmmailrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
