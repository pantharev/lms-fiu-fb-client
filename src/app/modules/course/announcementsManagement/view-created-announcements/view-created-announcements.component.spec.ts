import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreatedAnnouncementsComponent } from './view-created-announcements.component';

describe('ViewCreatedAnnouncementsComponent', () => {
  let component: ViewCreatedAnnouncementsComponent;
  let fixture: ComponentFixture<ViewCreatedAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCreatedAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreatedAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
