import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEnrollmentComponent } from './pending-enrollment.component';

describe('PendingEnrollmentComponent', () => {
  let component: PendingEnrollmentComponent;
  let fixture: ComponentFixture<PendingEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
